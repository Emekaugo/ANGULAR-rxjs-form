import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientExampleComponent } from './httpclient-example.component';

describe('HttpclientExampleComponent', () => {
  let component: HttpclientExampleComponent;
  let fixture: ComponentFixture<HttpclientExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpclientExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
