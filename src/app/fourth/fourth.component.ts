import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model'

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe("Herbed Jersey Royal Crab Cakes", "Make these perky crab cakes as a summer lunch or dinner for friends. Jersey Royal potatoes and crab are natural bedfellows – try using dill in the mix too", "https://www.bbcgoodfood.com/sites/default/files/styles/carousel_small/public/recipe/recipe-image/2018/05/herbed-jersey-royal-crab-cakes.jpg?itok=oSV6-6MH"),
  	new Recipe("Apricot & pistachio frangipane blondies", "Make the most of summer's sweet, golden apricots with these moreish apricot and pistachio frangipane blondies. They make a perfect treat for afternoon tea", "https://www.bbcgoodfood.com/sites/default/files/styles/carousel_small/public/recipe/recipe-image/2018/05/blondies.jpg?itok=R03ubEXw"),
  	new Recipe("Sweet potatoes with red pepper & halloumi", "Top these barbecued sweet potatoes with red pepper and halloumi for a veggie alternative in a family summer feast. Serve with parsley and a squeeze of lemon", "https://www.bbcgoodfood.com/sites/default/files/styles/carousel_small/public/recipe/recipe-image/2018/05/sweet-potatoes-with-red-pepper-halloumi.jpg?itok=pgj_XNSY"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
