import { Component } from '@angular/core';
import { FavouriteChangeEventArg } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-sunil';
  titleString:string;

  post={
    title:"Title",
    isFavourite:true
  
  }

  coursesarr=[

    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},

  ];
  courses=[1,2];
  author=["abc","pqr"]

  tweet={
    body:'Here the body of the tweet...',
    isLiked:true,
    likesCount:10,

  }

  viewMode='afks';

  onFavoriteChange(eventArgs:FavouriteChangeEventArg){
    console.log("favourite change "+eventArgs.newValue);
  }

  onAdd(){
    this.coursesarr.push({
      id:4,name:'course4'
    })
  }

  onRemove(course){
      let index=this.coursesarr.indexOf(course);
      this.coursesarr.splice(index,1)

  }

  courses_arr;
  loadCourses(){
        this.courses_arr=[
        {id:1,name:'course1'},
        {id:2,name:'course2'},
        {id:3,name:'course3'},]
    
  }

  trackCourse(index,course){

     return course?course.id:undefined;

  }
   canSave=false;


   task={
      title:'Review application',
      assignee:{
        name:null
      }
   }
}
