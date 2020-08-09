import { CoursesService } from './courses.service';
import {Component } from '@angular/core'

@Component({
    selector:'courses', 
    template:`
    <h2>{{ title}}</h2>
    <ul>
    <li *ngFor="let course of coursearr">
        {{course}}
    </li>
    </ul>  
    <button class="btn "  [style.backgroundColor]="isActive?'blue':'while'" (click)="onClick()" >Save</button><br>
    <input [value]="name" (keyup.enter)="onKeyUp()"/><br>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/><br>
    <input [(ngModel)]="titlestrtng" (keyup.enter)="onKeyUp()"/><br>
    {{titlestrtng |titleCaseExcept}}<br>
    

      {{course.title | uppercase|lowercase}}<br/>
      {{course.rating| number:'1.1-1'}}<br/>
      {{course.price|currency:'₹':true:'3.1-1'}}<br/>
      {{course.students}}<br/>
      {{course.releaseDate|date}}<br/><br/>
      {{text |summary:10}}
      
    `

      
    
})
export class CoursesComponent{
    title="I like this course";
    text=`Despite being one of the best attacking teams in Europe this season, City have had their problems on the backline. Lackadaisical displays time and again have allowed the opponents to capitalise on counter-attack.

Against an equally potent attacking team like Real Madrid it could be a liability for City. But Guardiola assured that he bas spoken with his players and they are ready to challenge the threats that will be thrown by the likes of Karim Benzema, Marco Asensio and Toni Kroos.

    `;

    coursearr;

    constructor(coursesservice:CoursesService){
        this.coursearr=coursesservice.getCourses();
    }

    isActive:boolean;
    name="sunil"
    email="me@gmail.com";
    titlestrtng="";

    onClick(){
        this.isActive=!this.isActive;
    }

    onKeyUp(){
            console.log(this.email);
            
    }

    // getTitle(){
    //     return this.title;
    // }

    course={
        title:"I am doing front !!",
        rating:4.9754,
        students:30123,
        price:190.95,
        releaseDate:new Date(2016,3,1)

    }
}