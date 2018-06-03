import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-ng-dropdowns';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './shared/services/articles.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UsersService } from './shared/services/users.service';
import { ProjectsService } from './shared/services/projects.service'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AutoCompleteModule,
    MultiSelectModule
  ],
  providers: [
    ArticleService,
    UsersService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
