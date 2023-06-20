import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css']
})
export class BoxThreeComponent implements OnInit{

  img:any

  ngOnInit(): void {
      const imgPath = 'assets/photos/mario.png'
      this.img = this.sanitizer.bypassSecurityTrustUrl(imgPath)
  }

  constructor(private sanitizer: DomSanitizer){ }

  desc = 'Prepare-se para uma jornada inesquecível pelo mundo do cinema com FilmMax. Navegue por uma ampla seleção de filmes de todos os gêneros, mergulhe em histórias cativantes e desfrute de momentos de pura diversão.'
  title = 'Sua Jornada pelo Mundo do Cinema'
}
