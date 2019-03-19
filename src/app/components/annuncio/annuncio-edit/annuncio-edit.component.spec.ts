import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuncioEditComponent } from './annuncio-edit.component';

describe('AnnuncioEditComponent', () => {
  let component: AnnuncioEditComponent;
  let fixture: ComponentFixture<AnnuncioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuncioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuncioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
