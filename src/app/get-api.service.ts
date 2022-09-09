import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private cHttpClient:HttpClient) { }

  private getMovieTile=new BehaviorSubject([]);
  currentFormDetail =this.getMovieTile.asObservable();

  getMovieList(page:any): Promise<any> {
    return new Promise((resolve, reject) => {
        // https://reqres.in/api/users?page=1
        this.cHttpClient.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=bd63c232287a6118284e602676ae03bd&language=en-US&page="+page)
            .subscribe((response: any) => {
                resolve(response);
            },
                (reject: any) => {
                    // this.ServiceResponce = this.cAPIException.Exception_Message(reject);
                    resolve(reject);
                });
    });
}

getMovieListTile():any{
    return this.currentFormDetail;
}

setMovieListTile(value:any){
  this.getMovieTile.next(value)
}

}
