import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css']
})
export class BoxOneComponent implements OnInit{

  img:any

  ngOnInit(): void {
      const imgPath = 'assets/photos/avatar.png'
      this.img = this.sanitizer.bypassSecurityTrustUrl(imgPath)
  }

  constructor(private sanitizer: DomSanitizer){ }

  title = 'O Lugar onde Filmes Ganham Vida' 
  desc = 'Explore um universo de histórias fascinantes, personagens inesquecíveis e cenários deslumbrantes. Deixe-se envolver pela magia do cinema e descubra um novo verso de entretenimento cinematográfico.'
}
