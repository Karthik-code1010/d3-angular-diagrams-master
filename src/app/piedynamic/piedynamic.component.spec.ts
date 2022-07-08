import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedynamicComponent } from './piedynamic.component';

describe('PiedynamicComponent', () => {
  let component: PiedynamicComponent;
  let fixture: ComponentFixture<PiedynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
