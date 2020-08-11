import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts: any[];

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get<any>(this.url)
      .subscribe(response => {
        //console.log(response)
        this.posts = response
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value=''
    this.http.post(this.url, JSON.stringify(post)).subscribe(response=>{
        //console.log(response)
        post['id']=response['id'];
        this.posts.splice(0,0,post)

    })
  }

  updatePost(post){
      this.http.patch(this.url +'/'+post.id,JSON.stringify({isRead:true}))
      .subscribe(response=>{
           console.log(response)
      })
  }

  deletePost(post){
    this.http.delete(this.url +'/'+post.id)
    .subscribe(response=>{
         console.log(response)
         let index=this.posts.indexOf(post)
         this.posts.splice(index,1)
    })
}

  ngOnInit(): void {
  }

}
