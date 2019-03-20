import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnunciSearchComponent } from './annunci-search.component';

describe('AnnunciSearchComponent', () => {
  let component: AnnunciSearchComponent;
  let fixture: ComponentFixture<AnnunciSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnunciSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnunciSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
