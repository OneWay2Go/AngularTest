import { Routes } from '@angular/router';
import { GetContacts } from './pages/get-contacts/get-contacts';
import { GetByIdContact } from './pages/get-by-id-contact/get-by-id-contact';
import { CreateContact } from './pages/create-contact/create-contact';
import { DeleteContact } from './pages/delete-contact/delete-contact';
import { UpdateContact } from './pages/update-contact/update-contact';

export const routes: Routes = [
    { path: 'get-contacts', component: GetContacts },
    { path: 'get-by-id-contact', component: GetByIdContact },
    { path: 'create-contact', component: CreateContact },
    { path: 'delete-contact', component: DeleteContact },
    { path: 'update-contact', component: UpdateContact }
];
