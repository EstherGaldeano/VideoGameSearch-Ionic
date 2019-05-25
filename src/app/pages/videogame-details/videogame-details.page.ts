import { VideogameService } from './../../services/videogame.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videogame-details',
  templateUrl: './videogame-details.page.html',
  styleUrls: ['./videogame-details.page.scss'],
})
export class VideogameDetailsPage implements OnInit {

  details = null;

  constructor(private activatedRoute: ActivatedRoute, private videogameService: VideogameService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
 

    // this.details = this.videogameService.getDetails(id);


    this.videogameService.getDetails(id).subscribe(result => {
      this.details = result[0];
      if (this.details.cover.url) {
        this.details.cover.url = this.details.cover.url.replace(/t_thumb/, "t_cover_big_2x");
      }
      
    });

  }
 
  openWebsite() {
    window.open(this.details.Website, '_blank');
  }
}
