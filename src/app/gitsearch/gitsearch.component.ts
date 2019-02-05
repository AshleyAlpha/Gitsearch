import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { HttpRequestService } from '../repos-request/http-request.service'

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  providers: [HttpRequestService],
  styleUrls: ['./gitsearch.component.css']
})
export class GithubComponent implements OnInit {
  Users: User
  addNew(user) {
    // this.User.push(User)
    this.Users = new User()
  }
  constructor(private http: HttpClient, private reposRequest: HttpRequestService) {
    this.Users = new User()
  }

  ngOnInit() {
    // this.httpService.reposRequest()
    // this.repos=this.httpService.repos
  }

} 10