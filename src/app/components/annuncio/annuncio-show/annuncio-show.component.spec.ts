import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuncioShowComponent } from './annuncio-show.component';

describe('AnnuncioShowComponent', () => {
  let component: AnnuncioShowComponent;
  let fixture: ComponentFixture<AnnuncioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuncioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuncioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
