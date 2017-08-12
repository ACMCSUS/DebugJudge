import {Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { AceEditorComponent } from 'ng2-ace-editor';

@Component({
  selector: 'code-editor',
  templateUrl: './codeeditor.component.html',
  styleUrls: ['./codeeditor.component.css'],
  inputs: [ "code", "precode", "postcode", "readonly", "green", "red" ],
  providers: [],
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor: AceEditorComponent;
  public code;
  public options;

  public constructor() {
    this.options = { printMargin: false,
      maxLines: 30,
      showLineNumbers: false,
      showGutter: false
    };
  }

  ngOnInit() {
    this.editor.getEditor().setAutoScrollEditorIntoView(false);
    this.editor.getEditor().$blockScrolling = Infinity;
  }
  ngAfterViewInit(): void {
    this.editor.getEditor().clearSelection();
  }

}
