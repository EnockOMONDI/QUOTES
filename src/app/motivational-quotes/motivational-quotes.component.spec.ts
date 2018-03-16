import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalQuotesComponent } from './motivational-quotes.component';

describe('MotivationalQuotesComponent', () => {
  let component: MotivationalQuotesComponent;
  let fixture: ComponentFixture<MotivationalQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationalQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationalQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
