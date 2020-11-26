import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
/*export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

export class FormComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  registrarUsuario = {
    nombre: '',
    correo: '',
    pass: '',
  };

  ngOnInit(): void {}

  registrar() {
    console.log("Datos de usuario")
    console.log(this.registrarUsuario)
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err) => console.log(err)
    );
  }
}