import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroVendedorPage } from './registro-vendedor.page';

describe('RegistroVendedorPage', () => {
  let component: RegistroVendedorPage;
  let fixture: ComponentFixture<RegistroVendedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
