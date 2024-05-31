import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceEquipmentViewComponent } from './surface-equipment-view.component';

describe('SurfaceEquipmentViewComponent', () => {
  let component: SurfaceEquipmentViewComponent;
  let fixture: ComponentFixture<SurfaceEquipmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurfaceEquipmentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurfaceEquipmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
