import {Component} from "@angular/core";

@Component({
  selector: 'code-editor',
  templateUrl: './codeeditor.component.html',
  styleUrls: ['./codeeditor.component.css'],
  inputs: [ "code", "precode", "postcode", "readonly", "green", "red" ],
  providers: [],
})
export class CodeEditorComponent {
  public code;
}
