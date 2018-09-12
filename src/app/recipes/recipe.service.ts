import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test',
      'A test desc',
      'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('banana', 2),
        new Ingredient('cake', 5)
      ]
    ),
    new Recipe(
      'Burger',
      'A Burger desc',
      'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg',
      [
        new Ingredient('buns', 1),
        new Ingredient('meat', 2),
        new Ingredient('milk', 5)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {}
}
