import { Component, OnInit } from '@angular/core';
import { GithubFollowers } from '../services/githubfollowers.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  posts: any[];
  constructor(private service:GithubFollowers) { }

  ngOnInit(): void {

    this.service.getAll().subscribe(posts => this.posts = posts)
  }

}
