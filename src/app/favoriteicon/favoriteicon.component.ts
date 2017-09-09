import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favoriteicon',
  templateUrl: './favoriteicon.component.html',
  styleUrls: ['./favoriteicon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  isFavorite = true;

  constructor() { }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {
  }

}
