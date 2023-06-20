import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/service/service-one.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  data:any
  
  constructor(private apiService: ServiceOneService, private router:Router){ }

  ngOnInit(): void {
    this.getItens()
  }

  getItens(){
    this.apiService.makeApiCall()
      .then(res => {
        this.data = res.results
        console.log(this.data)
      })
      .catch(() => console.error)
    }


}
