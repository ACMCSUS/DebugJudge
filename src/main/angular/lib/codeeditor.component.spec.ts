/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {CodeEditorComponent} from 'lib/codeeditor.component';

describe('CodeEditorComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodeEditorComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CodeEditorComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
