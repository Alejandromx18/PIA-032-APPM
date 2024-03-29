import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/interfaces/User';
import { FCFMServiceService } from '../services/fcfmservice.service';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.page.html',
  styleUrls: ['./login-vendedor.page.scss'],
})
export class LoginVendedorPage implements OnInit {
  private user: User = {
    email: '',
    password: '',
  };
  formLogin = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private fcfmService: FCFMServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  inicioSesion() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.getRawValue();
      if (email != null && password != null) {
        this.user.email = email;
        this.user.password = password;
        console.log('Successfully logged in!');
        this.router.navigate(['/admin']);
      }
    } else {
      this.formLogin.markAllAsTouched();
    }
    this.fcfmService.getLoggedInSubject().subscribe((status: boolean) => {
      console.log(Error);}
    );
    };
  }

