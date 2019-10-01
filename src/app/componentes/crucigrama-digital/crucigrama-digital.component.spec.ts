import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucigramaDigitalComponent } from './crucigrama-digital.component';

describe('CrucigramaDigitalComponent', () => {
  let component: CrucigramaDigitalComponent;
  let fixture: ComponentFixture<CrucigramaDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrucigramaDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrucigramaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
