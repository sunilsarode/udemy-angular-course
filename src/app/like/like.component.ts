import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('is-Liked') isSelected:boolean;
  @Input('likesCount') count:number;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected=!this.isSelected;
    this.count+=(this.isSelected?1:-1)
  }
}
