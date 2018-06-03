import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User, Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/articles.service';
import { UsersService } from '../shared/services/users.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  article: Article;
  form: FormGroup;
  users: User[] = [];
  currentUser: User;
  
  constructor(private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private userService: UsersService,
    private route: ActivatedRoute) {
    this.form = formBuilder.group({
      comment: ['']
    });

    this.currentUser = userService.currentUser();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    this.articleService
      .getList()
      .subscribe(data => {
        this.articles = data;
        this.article = this.articles.find(x => `${x.id}` == id);
      });
    this.userService
      .getList()
      .subscribe(data => {
        this.users = data;
      });
  }

  getUser(userId: number): User {
    if (!this.users) return { id: 0, name: '', username: '', image: '' };
    const user = this.users.find(x => x.id === userId);
    if (!user) return { id: 0, name: '', username: '', image: '' };
    return user;
  }
}
