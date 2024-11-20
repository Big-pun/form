import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormulaireInscriptionComponent } from "./composants/formulaire-inscription/formulaire-inscription.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormulaireInscriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
}
