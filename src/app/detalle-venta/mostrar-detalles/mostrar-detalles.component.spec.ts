import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDetallesComponent } from './mostrar-detalles.component';

describe('MostrarDetallesComponent', () => {
  let component: MostrarDetallesComponent;
  let fixture: ComponentFixture<MostrarDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
