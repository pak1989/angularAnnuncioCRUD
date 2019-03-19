import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuncioNewComponent } from './annuncio-new.component';

describe('AnnuncioNewComponent', () => {
  let component: AnnuncioNewComponent;
  let fixture: ComponentFixture<AnnuncioNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuncioNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuncioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
