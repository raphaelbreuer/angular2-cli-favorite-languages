import { Component, OnInit } from '@angular/core';
import { LanguageList } from '../types/favorite-languages';


@Component({
  selector: 'app-favorite-languages',
  templateUrl: './favorite-languages.component.html',
  styleUrls: ['./favorite-languages.component.css']
})
export class FavoriteLanguagesComponent implements OnInit {
  languageList: LanguageList;
  newLanguage:string;
  constructor() { }

  ngOnInit() {
    this.languageList = {
      list: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'React' }
      ]
    }

  }
  addLanguage() {
    this.languageList.list.push({ name: this.newLanguage });
  }

}
