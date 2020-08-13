import { Observable, observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GithubFollowers } from '../services/githubfollowers.service';
import { ActivatedRoute } from '@angular/router';

import { switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  posts: any[];
  constructor(private route: ActivatedRoute, private service: GithubFollowers) { }

  ngOnInit(): void {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(switchMap(combined=>{
      let id = combined[0].get('id')
      let page = combined[1].get('page')

      return this.service.getAll()

    })).subscribe(posts=>this.posts=posts)//switch map return post to subscribe function 
    //this.route.paramMap.subscribe();
    //this.route.snapshot.paramMap.get('id');//required parameter

    //this.route.queryParamMap.subscribe()//getting optional parameters
    // this.route.snapshot.paramMap.get('page');

  }

}
