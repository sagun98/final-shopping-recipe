import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor() {}

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 2)
  ];

  ingredientsAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
