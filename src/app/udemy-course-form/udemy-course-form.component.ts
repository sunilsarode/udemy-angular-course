import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-course-form',
  templateUrl: './udemy-course-form.component.html',
  styleUrls: ['./udemy-course-form.component.css']
})
export class UdemyCourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryMethod=[
    {id:1,name:'Development'},
    {id:2,name:'Art'},
    {id:3,name:'Language'}
 ];



 submit(form){
    console.log(form)
 }
}
