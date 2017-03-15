import {Component} from "@angular/core";

@Component({
  selector: 'code-editor',
  templateUrl: './codeeditor.component.html',
  styleUrls: ['./codeeditor.component.css'],
  inputs: [ "code", "precode", "postcode" ],
  providers: [],
})
export class CodeEditorComponent {
}
