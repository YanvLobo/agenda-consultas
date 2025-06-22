import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selecionarUsuario(tipo: 'paciente' | 'medico' | 'admin') {
    alert(`Você selecionou: ${tipo}`);
    // depois aqui navegaremos para /login ou /dashboard
  }
}
