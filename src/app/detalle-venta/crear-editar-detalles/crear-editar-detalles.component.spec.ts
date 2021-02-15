import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarDetallesComponent } from './crear-editar-detalles.component';

describe('CrearEditarDetallesComponent', () => {
  let component: CrearEditarDetallesComponent;
  let fixture: ComponentFixture<CrearEditarDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditarDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
