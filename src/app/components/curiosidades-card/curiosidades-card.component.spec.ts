import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosidadesCardComponent } from './curiosidades-card.component';

describe('CuriosidadesCardComponent', () => {
  let component: CuriosidadesCardComponent;
  let fixture: ComponentFixture<CuriosidadesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriosidadesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosidadesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
