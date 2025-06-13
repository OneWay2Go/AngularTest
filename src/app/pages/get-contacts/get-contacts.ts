import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-contacts',
  imports: [],
  templateUrl: './get-contacts.html',
  styleUrl: './get-contacts.css'
})
export class GetContacts {
  contacts: any[] = [];

  constructor(private http: HttpClient) {}

  getContacts(){
    this.http.get<any[]>('http://45.92.173.46:5050/api/Contacts/GetAllContacts')
      .subscribe(data => {
        this.contacts = data;
      });
  }
}