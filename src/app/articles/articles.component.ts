import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.mode';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[] = new Array();

  constructor() { }

  ngOnInit() {
  }

  addArticle(headline: string, author: string, content: string) {
    this.articles.push(new Article(headline, author, content));
  }

  deleteArticle(article: Article) {
    const inxd = this.articles.indexOf(article);
    if (inxd !== -1) {
      this.articles.splice(inxd, 1);
    }
  }

}
