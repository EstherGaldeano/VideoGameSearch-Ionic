
import { VideogameService, SearchType } from './../../services/videogame.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.page.html',
  styleUrls: ['./videogames.page.scss'],
})
export class VideogamesPage implements OnInit {
 
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param videogameService The videogame Service to get data
   */
  constructor(private videogameService: VideogameService) { }
 
  ngOnInit() { }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.videogameService.searchData(this.searchTerm);
  }


}
