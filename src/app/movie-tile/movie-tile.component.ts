import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {
  subscription:Subscription | undefined;
  getArray:any;
  constructor(private service:GetApiService) { }

  ngOnInit(): void {
    this.subscription=this.service.getMovieListTile().subscribe((value: any)=>{this.getArray=value;console.log(this.getArray)})
  }

}
