import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialTableInlineOpsComponent } from './angular-material-table-inline-ops.component';

describe('AngularMaterialTableInlineOpsComponent', () => {
  let component: AngularMaterialTableInlineOpsComponent;
  let fixture: ComponentFixture<AngularMaterialTableInlineOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialTableInlineOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialTableInlineOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
