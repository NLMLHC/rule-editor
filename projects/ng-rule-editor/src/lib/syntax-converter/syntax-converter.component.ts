import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MathToFhirpathPipe } from '../math-to-fhirpath.pipe';
import { SimpleStyle } from '../rule-editor.service';

@Component({
  selector: 'lib-syntax-converter',
  templateUrl: './syntax-converter.component.html',
  styleUrls: ['./syntax-converter.component.css']
})
export class SyntaxConverterComponent implements OnInit {
  @Input() value;
  @Input() variables;
  @Input() style: SimpleStyle;
  @Output() expressionChange = new EventEmitter<string>();

  expression: string;
  fhirPathExpression: string;
  jsToFhirPathPipe = new MathToFhirpathPipe();

  constructor() { }

  ngOnInit(): void { }

  onExpressionChange(value): void {
    const fhirPath: string = this.jsToFhirPathPipe.transform(value, this.variables);
    this.fhirPathExpression = fhirPath;

    this.expressionChange.emit(fhirPath);
  }

}
