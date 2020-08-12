import { AppErrorHandler } from './../common/app-error-handler';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input } from '@angular/core';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {

  posts: any[];



  constructor(private service: PostService) {

  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.posts.splice(0, 0, post)

    input.value = ''
    
    this.service.create(post).subscribe(newPost => {
      //console.log(response)
      post['id'] = newPost['id'];
     
    }, (error:AppError) => {

      this.posts.splice(0,1);

      if(error instanceof BadInput){
              //this.form.setErrors(error.originalError)
      }else{
         throw error;//it will go to global error handler 
      }

    })
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost)
      })
  }

  deletePost(post) {
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1)

    this.service.delete(post.id)
      .subscribe(() => {
       
       
      }, (error:AppError) => {
        this.posts.splice(index, 0,post)
        if(error instanceof NotFoundError){
          alert("This psot has already been deleted ")//expected error
        }else{
            throw error;//will handle by global error handler 
        }
      

      })
  }

  ngOnInit(): void {

    this.service.getAll().subscribe(posts => this.posts = posts)
  }

}
