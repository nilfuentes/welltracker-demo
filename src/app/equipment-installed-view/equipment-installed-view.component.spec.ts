import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInstalledViewComponent } from './equipment-installed-view.component';

describe('EquipmentInstalledViewComponent', () => {
  let component: EquipmentInstalledViewComponent;
  let fixture: ComponentFixture<EquipmentInstalledViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentInstalledViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentInstalledViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
