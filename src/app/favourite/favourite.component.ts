import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-Favourite') isSelected:boolean;
  @Output('change') click=new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isSelected=!this.isSelected;
    this.click.emit({newValue:this.isSelected})
  }

}

export interface FavouriteChangeEventArg{
    newValue:boolean
}
