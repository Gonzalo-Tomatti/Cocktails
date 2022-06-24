export interface AppState {
  url: string;
  cocktails: Array<CocktailInterface>;
}

export interface CocktailInterface {
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strDrink: string;
  strGlass: string;
  strImageSource: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strDrinkThumb: string;
}

export interface ButtonInterface {
  name: string;
  url: string;
}
