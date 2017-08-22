import {Component, ViewChild, OnInit, AfterViewInit, Input} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';

@Component({
  selector: 'dbgjdg-code-editor',
  templateUrl: './codeeditor.component.html',
  styleUrls: ['./codeeditor.component.css'],
  providers: [],
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('editor')
  editor: AceEditorComponent;

  @Input() public precode: string;
  @Input() public code: string;
  @Input() public postcode: string;
  @Input() public readonly: boolean;
  @Input() public green: boolean;
  @Input() public red: boolean;

  public options;

  public constructor() {
    this.options = {
      printMargin: false,
      maxLines: 30,
      showLineNumbers: false,
      showGutter: false,
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
