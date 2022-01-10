import { DatePipe } from '@angular/common';
import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { RuleEditorService, SimpleStyle } from './rule-editor.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as ɵngcc0 from '@angular/core';
export declare class RuleEditorComponent implements OnInit, OnChanges {
    private variableService;
    private liveAnnouncer;
    advancedInterface: boolean;
    fhirQuestionnaire: any;
    itemLinkId: any;
    submitButtonName: string;
    titleName: string;
    expressionLabel: string;
    expressionUri: string;
    lhcStyle: SimpleStyle;
    save: EventEmitter<object>;
    errorLoading: string;
    expressionSyntax: string;
    simpleExpression: string;
    finalExpression: string;
    finalExpressionFhirPath: string;
    linkIdContext: string;
    datePipe: DatePipe;
    calculateSum: boolean;
    suggestions: any[];
    variables: string[];
    caseStatements: boolean;
    disableInterfaceToggle: boolean;
    loadError: boolean;
    private calculateSumSubscription;
    private finalExpressionSubscription;
    private variablesSubscription;
    private disableAdvancedSubscription;
    constructor(variableService: RuleEditorService, liveAnnouncer: LiveAnnouncer);
    ngOnInit(): void;
    /**
     * Angular lifecycle hook called before the component is destroyed
     */
    ngDestroy(): void;
    /**
     * Angular lifecycle hook called on input changes
     */
    ngOnChanges(args: any): void;
    /**
     * Re-import fhir and context and show the form
     */
    reload(): void;
    /**
     * Export FHIR Questionnaire and download as a file
     */
    export(): void;
    /**
     * Create a new instance of a FHIR questionnaire file by summing all ordinal
     * values
     */
    addSumOfScores(): void;
    /**
     * Called when the syntax type is changed to clean up expressions if the data cannot be converted
     * @param $event - event from from the caller
     */
    onSyntaxChange($event: MatRadioChange): void;
    /**
     * Update the final expression
     */
    updateFinalExpression(expression: any): void;
    /**
     * Update the simple final expression
     */
    updateSimpleExpression(simple: any): void;
    /**
     * Toggle the advanced interface based on the type
     */
    onTypeChange(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RuleEditorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RuleEditorComponent, "lhc-rule-editor", never, { "advancedInterface": "advancedInterface"; "fhirQuestionnaire": "fhirQuestionnaire"; "itemLinkId": "itemLinkId"; "submitButtonName": "submitButtonName"; "titleName": "titleName"; "expressionLabel": "expressionLabel"; "expressionUri": "expressionUri"; "lhcStyle": "lhcStyle"; }, { "save": "save"; }, never, never>;
}

//# sourceMappingURL=rule-editor.component.d.ts.map