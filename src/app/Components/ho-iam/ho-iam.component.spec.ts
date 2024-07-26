import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoIamComponent } from './ho-iam.component';

describe('HoIamComponent', () => {
  let component: HoIamComponent;
  let fixture: ComponentFixture<HoIamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoIamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoIamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
