import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContribution } from './my-contribution';

describe('MyContribution', () => {
  let component: MyContribution;
  let fixture: ComponentFixture<MyContribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContribution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyContribution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
