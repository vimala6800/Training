import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetemplateformComponent } from './employeetemplateform.component';

describe('EmployeetemplateformComponent', () => {
  let component: EmployeetemplateformComponent;
  let fixture: ComponentFixture<EmployeetemplateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeetemplateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeetemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
