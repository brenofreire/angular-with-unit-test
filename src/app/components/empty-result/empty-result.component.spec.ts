import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from 'src/app/pages/home/home.module';

import { EmptyResultComponent } from './empty-result.component';

describe('EmptyResultComponent', () => {
  let component: EmptyResultComponent;
  let fixture: ComponentFixture<EmptyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyResultComponent],
      imports: [HomeModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
