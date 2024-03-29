import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import User from 'src/interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.page.html',
  styleUrls: ['./registro-vendedor.page.scss'],
})
export class RegistroVendedorPage implements OnInit {
  private user: User = {
    email: '',
    password: '',
  };
  formLogin = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor( private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
  }

  async registro() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.getRawValue();
      if (email != null && password != null) {
        this.user.email = email;
        this.user.password = password;
        console.log('Successfully created user!');
        this.router.navigate(['/login-vendedor']);
      }
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

}