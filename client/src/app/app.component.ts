import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App Client';
  users: any; // turning type safe safety...very bad
  
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get('http://localhost:5038/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed!!!')
    })  // Observable is a stream of data

  }
}
