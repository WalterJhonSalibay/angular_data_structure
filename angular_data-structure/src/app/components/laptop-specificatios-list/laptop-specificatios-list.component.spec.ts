import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSpecificatiosListComponent } from './laptop-specificatios-list.component';

describe('LaptopSpecificatiosListComponent', () => {
  let component: LaptopSpecificatiosListComponent;
  let fixture: ComponentFixture<LaptopSpecificatiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopSpecificatiosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSpecificatiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
