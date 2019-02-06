import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  providers: [HttpClient],
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  Users: User
  addNew(user) {
    // this.User.push(User)
    this.Users = new User('')
  }
  constructor(private http: HttpClient, private reposRequest: HttpClient) {
    this.Users = new User('')
  }

  ngOnInit() {
    // this.httpService.reposRequest()
    // this.repos=this.httpService.repos
  }

} 10