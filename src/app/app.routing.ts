import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register' }
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