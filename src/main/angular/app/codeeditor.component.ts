import {Component, ViewChild, OnInit, AfterViewInit, Input, Output} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';

@Component({
  selector: 'app-code-editor',
  entryComponents: [ AceEditorComponent ],
  template: `
    <div class="codepane">
      <pre>{{precode}}</pre>
      <ace-editor #editor
                  [(text)]="code"
                  [mode]="'plain_text'"
                  [theme]="'chrome'"
                  [options]="options"
                  [readOnly]="readonly"
                  [ngClass]="{'red':red, 'green':green}"
                  style="display:block; width:100%"></ace-editor>
      <pre>{{postcode}}</pre>
    </div>
  `,
  styles: [`
    * {
      font-size: 12px;
      font-family: "Roboto Mono", "Monospaced", monospace !important;
    }
    .codepane {
      border: inset 1px white;
      padding: 0;
    }
    textarea {
      background-color: #ffffff;
      border: none;
      outline: none;
      white-space: pre;

      width: 100%;
      height: auto;
      margin: 0;
      resize: none;
    }
    pre {
      padding-left: 4px;
      background-color: #ddd;
      margin: 0;
    }

    /* https://stackoverflow.com/a/43739723/3188059 */
    .ace_text-input {
      position: absolute !important;
    }
  `],
  providers: [],
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('editor')
  editor: AceEditorComponent;

  @Input() public precode: string;
  @Input() @Output() public code: string;
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
      displayIndentationGuides: true,
      tabSize: 4,
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
