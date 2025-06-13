import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-by-id-contact',
  imports: [FormsModule],
  templateUrl: './get-by-id-contact.html',
  styleUrl: './get-by-id-contact.css'
})
export class GetByIdContact {
  Id!: number;

  public contact:any;

  constructor(private http: HttpClient) {}

  getContactById() {
    if (this.Id === undefined || this.Id === null) {
      alert('Please enter a valid contact ID.');
      return;
    }
    else{
      this.http.get(`http://45.92.173.46:5050/api/Contacts/GetByIdContact?contactID=${this.Id}`)
      .subscribe({
        next: (data) => {
          if (data === null || data === undefined) {
            alert('No contact found with the provided ID.');
            this.contact = null;
          }
          else {
            this.contact = data;
          }
          console.log(this.contact);
        }});
    }
  }
}
