import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as JsDiff from 'diff';

@Component({
  selector: 'app-diff',
  entryComponents: [],
  template: `
    <div class="dottedUnderline"><pre *ngFor="let line of lineDiff"
          [style.color]="line.added ? 'green' : line.removed ? 'red' : 'black'"
      >{{line.value}}</pre></div>
  `,
  styles: [`
    div {
      margin: 4px 0;
      border: inset 1px white;
      font-size: .9em;
      font-family: "Roboto Mono", "Monospaced", monospace !important;
    }
    pre {
      margin: 0;
      font-size: 12px;
      font-family: "Roboto Mono", "Monospaced", monospace !important;
    }
  `],
})
export class DiffComponent implements OnInit, OnDestroy {

  private _oldString: string = "";
  private _newString: string = "";

  private lineDiff: {}[];

  constructor() {
  }

  get oldString(): string {
    return this._oldString;
  }

  get newString(): string {
    return this._newString;
  }

  @Input()
  set oldString(oldString: string) {
    this._oldString = oldString;
    this.updateDiff();
  }

  @Input()
  set newString(newString: string) {
    this._newString = newString;
    this.updateDiff();
  }

  updateDiff(): void {
    this.lineDiff = JsDiff.diffLines(this.oldString, this.newString);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
