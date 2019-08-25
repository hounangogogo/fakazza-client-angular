import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakazzaPageComponent } from './fakazza-page.component';

describe('FakazzaPageComponent', () => {
  let component: FakazzaPageComponent;
  let fixture: ComponentFixture<FakazzaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakazzaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakazzaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
