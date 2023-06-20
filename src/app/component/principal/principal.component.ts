import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/service/service-one.service'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  data:any
  image:any

  constructor(private apiService: ServiceOneService){ }

  ngOnInit(): void {
    
    this.apiService.makeApiCall()
    .then(response => {
      console.log(response);
      this.data = response.results
      
      console.log(response.results.id)

    })

    .catch(err => {
      console.error(err);
    });
  }

}
