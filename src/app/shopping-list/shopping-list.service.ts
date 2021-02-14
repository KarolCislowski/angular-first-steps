import { EventEmitter } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model"

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Dwarven spirit', 1),
    new Ingredient('Lesser red mutagen', 5),
    new Ingredient('Alghoul bone marrow', 1),
    new Ingredient('Buckthorn', 1)
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}