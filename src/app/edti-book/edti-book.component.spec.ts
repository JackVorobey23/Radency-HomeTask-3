import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtiBookComponent } from './edti-book.component';

describe('EdtiBookComponent', () => {
  let component: EdtiBookComponent;
  let fixture: ComponentFixture<EdtiBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtiBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdtiBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
