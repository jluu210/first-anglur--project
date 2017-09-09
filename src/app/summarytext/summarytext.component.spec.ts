import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTextComponent } from './summarytext.component';

describe('SummarytextComponent', () => {
  let component: SummaryTextComponent;
  let fixture: ComponentFixture<SummaryTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
