import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsPlaceholderOtComponent } from './ops-placeholder-ot.component';

describe('OpsPlaceholderOtComponent', () => {
  let component: OpsPlaceholderOtComponent;
  let fixture: ComponentFixture<OpsPlaceholderOtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsPlaceholderOtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsPlaceholderOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
