import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD:mission-planning-dashboard/src/app/equipment/equipment.component.spec.ts
=======
>>>>>>> studio-1
import { EquipmentComponent } from './equipment.component';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentComponent ]
<<<<<<< HEAD
=======
import { ExperimentsComponent } from './experiments.component';

describe('ExperimentsComponent', () => {
  let component: ExperimentsComponent;
  let fixture: ComponentFixture<ExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsComponent ]
>>>>>>> studio-1:mission-planning-dashboard/src/app/experiments/experiments.component.spec.ts
=======
>>>>>>> studio-1
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:mission-planning-dashboard/src/app/equipment/equipment.component.spec.ts
    fixture = TestBed.createComponent(EquipmentComponent);
=======
    fixture = TestBed.createComponent(ExperimentsComponent);
>>>>>>> studio-1:mission-planning-dashboard/src/app/experiments/experiments.component.spec.ts
=======
    fixture = TestBed.createComponent(EquipmentComponent);
>>>>>>> studio-1
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
