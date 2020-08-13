import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) {

   }

  ngOnInit(): void {
     this.route.paramMap.subscribe(params=>{
          console.log(params)
     })
  }

  submit(){
    this.router.navigate(['/followers'],{
      queryParams:{page:1,order:'newest'}
    })
  }

}
