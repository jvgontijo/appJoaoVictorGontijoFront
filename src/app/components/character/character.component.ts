import { Component } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getAllCharacters().subscribe(
      (data: Character[]) => {
        this.characters = data;
      },
      error => {
        console.error('Error loading characters:', error);
      }
    );
  }
}
