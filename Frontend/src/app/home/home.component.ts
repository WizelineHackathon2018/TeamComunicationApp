import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../shared/services/articles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article, User, Project } from '../shared/models/article';
import { UsersService } from '../shared/services/users.service';
import { ProjectsService } from '../shared/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  formNewArticle: FormGroup;
  articles: Article[] = [];
  users: User[] = [];
  currentUser: User;
  tags = [
    'C#',
    'Telerik',
    'Java',
    'Paypal',
    'Oxxo PAY',
    'HTML',
    'Angular',
    'Firebase',
    'Typescript'
  ];

  constructor(private articleService: ArticleService,
    private userService: UsersService,
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder) {
    this.formNewArticle = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['']
    });

    this.currentUser = userService.currentUser();
  }

  ngOnInit() {
    this.articleService
      .getList()
      .subscribe(data => {
        this.articles = data;

        for (const a of this.articles) {
          for (const s of a.tags) {
            const tag = this.tags.find(x => x === s);
            if (!tag) {
              this.tags.push(s);
            }
          }
        }
      });
    this.userService
      .getList()
      .subscribe(data => {
        this.users = data;
      });
    this.projectsService
      .getList()
      .subscribe(data => {
        this.projects = data;
      });
  }

  getUser(userId: number): User {
    if (!this.users) return { id: 0, name: '', username: '', image: '' };
    const user = this.users.find(x => x.id === userId);
    if (!user) return { id: 0, name: '', username: '', image: '' };
    return user;
  }

  create() {
    let article = this.formNewArticle.value as Article;
    article.userId = this.currentUser.id;

    this.articleService
      .add(article)
      .then(doc => {
        this.formNewArticle.reset();
      });
  }
}
