import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public userName='Sarbesh';
  public showDiv:boolean= false;
 
  private myArray:any=[[1,2,3,4],[5,6,7,8],[9,10,11,12,13]];
  constructor() { }

  ngOnInit() {
    this.userName='';
    this.showDiv=false;
    console.log('On Init runed');
  }

    submitFun()
    {
      this.showDiv=true;

    }

    convertVar(arrayIndex)
    {

    }

}
