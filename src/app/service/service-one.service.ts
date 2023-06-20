import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {


  constructor(private http: HttpClient) { }

//------------------------------------------------------

makeApiCall(): Promise<any> {
  const url = `${environment.apiKey}`
  
  return this.http.get(`${url}`, /*options*/).toPromise()
    
    
}

dados:object | undefined

}










// Authentication

/*
const options = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmU5MjZmMmE2N2Y4MWQ5ZmU4OTFlZDYyNDI5NzcyMiIsInN1YiI6IjY0NTQ2MDExODdhMjdhMDEzOGE2ZmQ5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PG1ugxf6rEwUtkvkMrRRRo0RmM5ryLN0jGraJr7eyYU'
    })
  };
  */

/*
.then(response => {
      console.log(response);
    })
    .then(() => this.http.get(url).toPromise()
      .then(res => {
        console.log(res)

        this.dados = res
      }))

      .catch(err => console.log(err))

    .catch(err => {
      console.error(err);
    });
    */



