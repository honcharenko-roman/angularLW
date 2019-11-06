import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Article } from 'src/assets/models/article.mode';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() navigationTmpl: TemplateRef<any>;

  @Input() articles: Article[];
  @Output() deleteArticle = new EventEmitter();


  ngOnInit() {
    console.log(this.articles);
  }

}
