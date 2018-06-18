import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public tasks:string;
  public works:any=[];

  public addlist(tasks){
    this.works.push(tasks);
    console.log(this.works);
  }

  public deletelist(i){
    this.works.splice(this.works.indexOf(i),1);
  }

  constructor() { }

  ngOnInit() {
  }

}
