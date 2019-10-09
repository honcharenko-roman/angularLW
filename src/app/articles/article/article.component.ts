import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article.mode';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() articles: Article[];
  @Output() deleteArticle = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.articles);
  }

}
