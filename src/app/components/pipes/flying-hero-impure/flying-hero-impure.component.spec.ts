import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingHeroImpureComponent } from './flying-hero-impure.component';

describe('FlyingHeroImpureComponent', () => {
  let component: FlyingHeroImpureComponent;
  let fixture: ComponentFixture<FlyingHeroImpureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingHeroImpureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingHeroImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
