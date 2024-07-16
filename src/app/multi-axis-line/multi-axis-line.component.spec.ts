import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAxisLineComponent } from './multi-axis-line.component';

describe('MultiAxisLineComponent', () => {
  let component: MultiAxisLineComponent;
  let fixture: ComponentFixture<MultiAxisLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiAxisLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAxisLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
