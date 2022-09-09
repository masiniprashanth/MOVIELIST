import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-movie-one-tile',
  templateUrl: './movie-one-tile.component.html',
  styleUrls: ['./movie-one-tile.component.scss']
})
export class MovieOneTileComponent implements OnInit {

  subscription:Subscription | undefined;
  getArray:any;
  setArray:[]=[];
  se:any;
  concatStr:any="https://image.tmdb.org/t/p/w500/";
  constructor(private service:GetApiService, private router:Router) { }

  ngOnInit(): void {
    debugger;
    this.subscription=this.service.getMovieListTile().subscribe((value: any)=>{this.getArray=value;
   
      this.getArray.backdrop_path=this.concatStr+this.getArray.backdrop_path;
      this.setArray=this.getArray;
    
  })
  console.log( this.getArray)
  this.se=this.getArray.backdrop_path;
  }
 
  back(){
    this.router.navigate(["/pageTwo"])
    
  }

}
