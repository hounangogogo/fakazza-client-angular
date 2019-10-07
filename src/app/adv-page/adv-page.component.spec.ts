import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvPageComponent } from './adv-page.component';

describe('AdvPageComponent', () => {
  let component: AdvPageComponent;
  let fixture: ComponentFixture<AdvPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
