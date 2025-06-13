import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-users',
  imports: [],
  templateUrl: './get-users.html',
  styleUrl: './get-users.css'
})

export class GetUsers {
  animes: any[] = [];

  constructor(private http: HttpClient) {  }

  getAllAnimes() {
    this.http.get<any>('https://api.jikan.moe/v4/genres/anime')
      .subscribe(data => {
      this.animes = data.data; // Assign the inner data array
      console.log(this.animes); // Move console.log here to wait for data
      });
  }
}
