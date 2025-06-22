import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-5 text-center">
      <h2>Login - {{ tipo | titlecase }}</h2>
      <p class="text-muted">Simulando login de {{ tipo }}</p>
    </div>
  `
})
export class LoginComponent {
  tipo: string = '';

  constructor(private route: ActivatedRoute) {
    this.tipo = this.route.snapshot.params['tipo'];
  }
}
