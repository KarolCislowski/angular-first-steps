import { EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model'

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Alghoul decoction',
      'Adrenaline Points are generated more quickly than normal until the first successful enemy attack. 50% Adrenaline Point gain',
      'https://images.unsplash.com/photo-1610706936473-6b9667f928e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    ),
    new Recipe(
      'Alghoul decoction',
      'Adrenaline Points are generated more quickly than normal until the first successful enemy attack. 50% Adrenaline Point gain',
      'https://images.unsplash.com/photo-1610706936473-6b9667f928e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    ),
    new Recipe(
      'Alghoul decoction',
      'Adrenaline Points are generated more quickly than normal until the first successful enemy attack. 50% Adrenaline Point gain',
      'https://images.unsplash.com/photo-1610706936473-6b9667f928e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    ),
  ]

  getRecipes() {
    return this.recipes.slice()
  }
}
