import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getResults(){
    // return this.http.get('https://reqres.in/api/users'); // use this to consume springboot service
    return [
      {
        "id": [1, 2, 3, 4],
        "freq":3
      },
      {
        "id": [1, 3, 4],
        "freq":5
      }
    ];
  }
}
