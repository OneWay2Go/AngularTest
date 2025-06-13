import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-users',
  imports: [HttpClient, Observable],
  templateUrl: './get-users.html',
  styleUrl: './get-users.css'
})

class Student 
{
  public Id!: number;
  public FirstName!: string;
  public LastName!: string;
  public Age!: number;
  public Email!: string;
}

export class GetUsers {
  users: Student[] = [];

  constructor(private http: HttpClient) {  }

  getAllStudents(){
    this.http.get<Student[]>('https://localhost:7136/api/Students')
      .subscribe(data => {
        this.users = data;
      });
  }
}
