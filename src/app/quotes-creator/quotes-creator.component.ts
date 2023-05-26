import { Component } from '@angular/core';
import { PersonalityCard } from 'src/models/PersonalityCard';

@Component({
  selector: 'app-quotes-creator',
  templateUrl: './quotes-creator.component.html',
  styleUrls: ['./quotes-creator.component.scss'],
})
export class QuotesCreatorComponent {
  personality: PersonalityCard = new PersonalityCard();
  constructor() {}
  ngOnInit(): void {}
}
