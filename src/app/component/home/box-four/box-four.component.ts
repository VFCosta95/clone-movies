import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-box-four',
  templateUrl: './box-four.component.html',
  styleUrls: ['./box-four.component.css']
})
export class BoxFourComponent implements OnInit {

  img:any

  ngOnInit(): void {
      const imgPath = 'assets/photos/flash.png'
      this.img = this.sanitizer.bypassSecurityTrustUrl(imgPath)
  }

  constructor(private sanitizer: DomSanitizer){ }

  desc = 'Sinta as vibrações cinematográficas com CineVibe! Descubra uma ampla variedade de filmes que irão satisfazer todos os gostos e estilos. De dramas emocionantes a comédias hilariantes, de ação eletrizante a romances envolventes.'
  title = 'Vibrações Cinematográficas em Todos os Estilos'
}
