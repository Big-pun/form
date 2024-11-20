import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulaire-humeur',
  standalone: true,
  imports: [ FormsModule ,MatSliderModule,],
  templateUrl: './formulaire-humeur.component.html',
  styleUrl: './formulaire-humeur.component.css'
})
export class FormulaireHumeurComponent {
  indiceHumeur = 0;
}
