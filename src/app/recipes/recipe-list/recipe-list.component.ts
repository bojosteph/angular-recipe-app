import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test recipe",
      "https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/master/pass/Basically-Spinach-Tarte-Recipe.jpg"
    ),
    new Recipe(
      "Tacos",
      "A Taco Recipe",
      "https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
