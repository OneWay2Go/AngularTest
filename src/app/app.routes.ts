import { Routes } from '@angular/router';
import { FirstPage } from './pages/first-page/first-page';
import { SecondPage } from './pages/second-page/second-page';
import { GetUsers } from './pages/get-users/get-users';

export const routes: Routes = [
    {path: 'first-page', component: FirstPage},
    {path: 'second-page', component: SecondPage},
    {path: 'get-users', component: GetUsers}
];
