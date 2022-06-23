import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // http
  
  film:string='';
  films:string[]=[];
  list:string[]=[];
 nomFilm:string='';
 anneeFilm:string ='';
 note:string='';
 image:string='';
 constructor(private http:HttpClient) {}

  onRecherche(){
    let val =this.film;
    //let url ='http://www.omdbapi.com/?apikey=6d36e6d6&t='+val;
    let urlDix ='http://www.omdbapi.com/?apikey=6d36e6d6&s='+val;
    

    this.http.get<any>(urlDix).forEach(element =>
        element.Search.forEach(item=>{
          this.films.push(item);
        }
      )
    );
    localStorage.setItem(this.film, JSON.stringify(this.films));
    this.film='';
    console.log(this.films)

    
    // this.http.get<any>(urlDix).subscribe(
    //   (film)=> { // JSON
    //     //console.log(film);
    //     this.nomFilm= film.Title;
    //     this.anneeFilm = film.Year;
    //     this.image= film.Poster;
    //     this.note= film.Ratings[0]['Value'];
    //   }
    // );
  }

}
