import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  const view1N = document.getElementById("box1N");
  const view1S = document.getElementById("box1S");
  const view1E = document.getElementById("box1E");
  const view1W = document.getElementById("box1W");
  const view2N = document.getElementById("box2N");
  const view2S = document.getElementById("box2S");
  const view2E = document.getElementById("box2E");
  const view2W = document.getElementById("box2W");
  const view3N = document.getElementById("box3N");
  const view3S = document.getElementById("box3S");
  const view3E = document.getElementById("box3E");
  const view3W = document.getElementById("box3W");
  const view4N = document.getElementById("box4N");
  const view4S = document.getElementById("box4S");
  const view4E = document.getElementById("box4E");
  const view4W = document.getElementById("box4W");
  this.views = [view1E, view1N, view1W, view1S, view2E, view2N, 
      view2W, view2S, view3E, view3N, view3W, view3S, view4E, view4N, view4W, view4S];
  
    this.current = this.views[0];
    this.east = 0;
    this.north = 1;
    this.south = 2;
    this.west = 3;
    this.blockNumber = 0;
    this.view = 0;
    this.direction = 0;
  }



  views:object;
  current:object;
  east:number;
  north :number;
  south:number;
  west :number;
  blockNumber:number;
  view:number;
  hide:object;
  direction:number;

//can change so that image to show is {{image}}
//such that display inline can be deleted and just image=current
  left = function (){
      this.hide = this.current;
      this.hide.style = "display:none";
      if(this.direction%4== 3){ this.view = this.view - 3;}
      else{this.view ++;}
      this.direction = this.view%4;
      console.log("direction: " + this.direction);
      this.current= this.views[this.view];
      this.current.style = "display:inline";

  }


  right = function (){
    this.hide= this.current;
    this.hide.style = "display:none";


      if(this.view%4 ==0){ this.view = this.view +3;}
      else{this.view --;}
      this.direction = this.view%4;
      console.log(this.direction);
      this.current= this.views[(this.view)];
      this.current.style = "display:inline";

      console.log("this.view: " + this.view%4);
      console.log("direction: " + this.direction%4);
      console.log("blockNumber: " + this.blockNumber);
  }


  forward = function(){
      if(this.direction%4 == 0 && this.blockNumber%10 < 1){ //move east
        this.view = this.view + 4;
        this.hide= this.current;
        this.hide.style = "display:none";
        this.direction = this.view%4;
      //console.log(direction+(blockNumber*4));
      this.blockNumber ++;
      this.current= this.views[this.view];
      this.current.style = "display:inline";
      }

      if(this.direction%4 == 1 && this.blockNumber>=10){//move north

        this.hide= this.current;
        this.hide.style = "display:none";
        this.direction = this.view%4;
      //console.log(direction+(blockNumber*4));
      this.blockNumber = this.blockNumber - 10;
      this.current= this.views[this.direction+(this.blockNumber*4)];
      this.current.style = "display:inline";

      this.view = this.view -8;
      }

      if(this.direction%4 == 2 && this.blockNumber%10 > 0){ //move west
        this.view=this.view-4;
        this.hide= this.current;
        this.hide.style = "display:none";
        this.direction = this.view%4;
      //console.log(direction+(blockNumber*4));

      this.blockNumber --;
      this.current= this.views[this.view];
      this.current.style = "display:inline";

      }


      if(this.direction%4 == 3 && this.blockNumber < 10){//move south
        this.view=this.view+8;
        this.hide= this.current;
        this.hide.style = "display:none";
        this.direction = this.view%4;
      //console.log(direction+(blockNumber*4));

      this.blockNumber = this.blockNumber + 10;
      this.current= this.views[this.view];
      this.current.style = "display:inline";

      }



  console.log("this.view: " + this.view%4);
  console.log("direction: " + this.direction%4);
  console.log("blockNumber: " + this.blockNumber);


  } //end forward
}
