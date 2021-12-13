import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicComponentsComponent } from './angular-dynamic-components.component';

describe('AngularDynamicComponentsComponent', () => {
  let component: AngularDynamicComponentsComponent;
  let fixture: ComponentFixture<AngularDynamicComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDynamicComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
