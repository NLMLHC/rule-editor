import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { Variable, AllVariableType, SimpleVariableType } from '../variable';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { RuleEditorService, SimpleStyle } from '../rule-editor.service';

@Component({
  selector: 'lhc-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() lhcStyle: SimpleStyle = {};
  @Input() advancedInterface: boolean;

  variableType: any = SimpleVariableType;
  variableSubscription;
  variables: Variable[];

  constructor(private ruleEditorService: RuleEditorService) {}

  /**
   * Angular lifecycle hook called when the component is initialized
   */
  ngOnInit(): void {
    this.variables = this.ruleEditorService.variables;
    this.variableSubscription = this.ruleEditorService.variablesChange.subscribe((variables) => {
      this.variables = variables;
    });
  }

  /**
   * Angular lifecycle hook called when bound property changes
   */
  ngOnChanges(changes): void {
    if (changes.advancedInterface) {
      this.variableType = this.advancedInterface ? AllVariableType : SimpleVariableType;
      if (this.variables) {
        const previousValues = [];

        this.variables.forEach((variable, index) => {
          previousValues[index] = variable.type;
          variable.type = '';
        });

        // Not sure of a better way of setting the previous values than this
        setTimeout(() => {
          previousValues.forEach((type, index) => {
            this.variables[index].type = type;
          });
        }, 10);
      }
    }
  }

  /**
   * Angular lifecycle hook called before the component is destroyed
   */
  ngOnDestroy(): void {
    this.variableSubscription.unsubscribe();
  }

  /**
   * Called when adding a new variable
   */
  onAdd(): void {
    this.ruleEditorService.addVariable();
  }

  /**
   * Remove a variable at an index
   * @param i - index to remove
   */
  onRemove(i: number): void {
    this.ruleEditorService.remove(i);
  }

  /**
   * Drag and drop rearrange of variable order
   * @param event - drag and drop event
   */
  drop(event: CdkDragDrop<Variable[]>): void {
    moveItemInArray(this.variables, event.previousIndex, event.currentIndex);
  }

  /**
   * Update the preview when the variable name changes
   */
  onNameChange(): void {
    this.ruleEditorService.update();
  }

  /**
   * Toggle the advanced interface based on the type
   */
  onTypeChange(event): void {
    if (event.target.value === 'query' || event.target.value === 'expression') {
      this.ruleEditorService.checkAdvancedInterface(true);
    } else {
      // Need to check all other variables and the final expression before we
      // allow the advanced interface to be removed
      this.ruleEditorService.checkAdvancedInterface();
    }
  }

  /**
   * Get the labels of available variables at the current index
   * @param index - Index of variable we're editing
   */
  getAvailableVariables(index: number): Array<string> {
    const uneditableVariables = this.ruleEditorService.uneditableVariables.map((e) => e.name);
    // Only return variables up to but not including index
    const editableVariables = this.variables.map((e) => e.label).slice(0, index);

    return uneditableVariables.concat(editableVariables);
  }

  /**
   * Update the expression for variable at the given index.
   * @param i - index
   * @param expression - new expression to use
   */
  updateExpression(i: number, expression): void {
    this.variables[i].expression = expression;
  }

  /**
   * Update the Easy Path for variable at the given index.
   * @param i - index
   * @param easyPath - new expression to use
   */
  updateSimpleExpression(i: number, easyPath): void {
    this.variables[i].simple = easyPath;
  }
}
