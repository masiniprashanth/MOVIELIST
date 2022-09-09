import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  getHttpvalue:any;
  getImg:any;
  concatStr:any="https://image.tmdb.org/t/p/w500/";
  constructor(private GetApiData:GetApiService, private router:Router) { }

  ngOnInit(): void {
    this.showDetail();
  }

  viewProduct(getMovie:any){
    debugger;
    this.GetApiData.setMovieListTile(getMovie)
    this.router.navigate(["/pageOne"])
  }

  onPaginateChange(event: any){
    var aData=this.GetApiData.getMovieList(event.pageIndex);
    aData.then((aResultData) => { 
      debugger;
      this.getHttpvalue=aResultData.results;
      for(var i=0;i<this.getHttpvalue.length;i++){
        this.getHttpvalue[i].poster_path=this.concatStr+this.getHttpvalue[i].poster_path;
      }
     
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
    console.log(this.getHttpvalue);
  }

  showDetail(){
    // this.EnableProgressDialog();
    var aData=this.GetApiData.getMovieList(2);
    aData.then((aResultData) => { 
      debugger;
      this.getHttpvalue=aResultData.results;
      for(var i=0;i<this.getHttpvalue.length;i++){
        this.getHttpvalue[i].poster_path=this.concatStr+this.getHttpvalue[i].poster_path;
      }
     
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
    console.log(this.getHttpvalue);

  
    
}




}
