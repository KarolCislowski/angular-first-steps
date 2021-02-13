import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Recipe } from './recipe.model'

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Alghoul decoction',
      'Adrenaline Points are generated more quickly than normal until the first successful enemy attack. 50% Adrenaline Point gain',
      'https://images.unsplash.com/photo-1610706936473-6b9667f928e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      [
        new Ingredient('Dwarven spirit', 1),
        new Ingredient('Lesser red mutagen', 5),
        new Ingredient('Alghoul bone marrow', 1),
        new Ingredient('Buckthorn', 1)
      ]
    ),
    new Recipe(
      'Alghoul decoction',
      'Adrenaline Points are generated more quickly than normal until the first successful enemy attack. 50% Adrenaline Point gain',
      'https://images.unsplash.com/photo-1610706936473-6b9667f928e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      [
        new Ingredient('Dwarven spirit', 1),
        new Ingredient('Lesser red mutagen', 5),
        new Ingredient('Alghoul bone marrow', 1),
        new Ingredient('Buckthorn', 1)
      ]
    ),
    new Recipe(
      'Alghoul decoction',
      'Adrenaline Points are generated more quickly than normal until the first successful enemy attack. 50% Adrenaline Point gain',
      'https://images.unsplash.com/photo-1610706936473-6b9667f928e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      [
        new Ingredient('Dwarven spirit', 1),
        new Ingredient('Lesser red mutagen', 5),
        new Ingredient('Alghoul bone marrow', 1),
        new Ingredient('Buckthorn', 1)
      ]
    ),
  ]

  getRecipes() {
    return this.recipes.slice()
  }
}
