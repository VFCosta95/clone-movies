import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-box-two',
  templateUrl: './box-two.component.html',
  styleUrls: ['./box-two.component.css']
})
export class BoxTwoComponent implements OnInit{

  img:any

  ngOnInit(): void {
      const imgPath = 'assets/photos/wick.png'
      this.img = this.sanitizer.bypassSecurityTrustUrl(imgPath)
  }

  constructor(private sanitizer: DomSanitizer){ }

  title = 'Explore o Universo do Cinema'
  desc = ' Descubra um mundo repleto de emoções e entretenimento cinematográfico. Explore nossa vasta coleção de filmes, desde clássicos atemporais até os lançamentos mais recentes. Desfrute de uma experiência cinematográfica única.'
}
