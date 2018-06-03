import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

export const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
    },
    {
        path: 'article',
        component: ArticleComponent,
        data: { title: 'Articulo' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Inicio de sesión' }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Registro' }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
    },
    {
        path: '**',
        redirectTo: '/home',
    }
];