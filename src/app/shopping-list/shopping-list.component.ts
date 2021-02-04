import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Dwarven spirit', 1),
    new Ingredient ('Lesser red mutagen', 5),
    new Ingredient ('Alghoul bone marrow', 1),
    new Ingredient ('Buckthorn', 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
