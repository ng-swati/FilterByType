import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies=[
    {
      id:1,
      name:"ACTION",
      price:120000,
      image:"assets/img/action1.webp",
      category:"action"

    },
    {
      id:1,
      name:"BLAZZ",
      price:150000,
      image:"assets/img/action2.webp",
      category:"action"

    },
    {
      id:1,
      name:"IT",
      price:120000,
      image:"assets/img/horror1.png",
      category:"horror"

    },
    {
      id:1,
      name:"Horror Night",
      price:120000,
      image:"assets/img/horror2.jpg",
      category:"horror"

    },
    {
      id:1,
      name:"Comedy Couple",
      price:120000,
      image:"assets/img/comedy1.jpg",
      category:"comedy"

    },
    {
      id:1,
      name:"Emoji",
      price:120000,
      image:"assets/img/comedy2.jfif",
      category:"comedy"

    }
  ]

  MoviesArrayForFilter=this.movies

  movie_name=""
  filterMovies(event:any)
  {
    // console.log(event);
    this.movie_name = event.target.value
    this.MoviesArrayForFilter=this.movies.filter(movie => movie.name.toLowerCase().includes(this.movie_name.toLowerCase()))
    
}


}