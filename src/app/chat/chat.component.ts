import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.state = 0;
    this.userInput = "";
    this.name = "";
    this.latlon = "";
    this.userData = {
      "name": this.name,
      "location": this.latlon
    };
  }

  locationString:string;
  location: string;
  state: number;
  userInput: string;
  name: string;
  latlon: string;
  userData: object;

  setState = function (stateChange) {
    this.state = stateChange;
  }

  chat = function () {
    console.log("chat begin", this.state);
 
    if (this.state == 0) {
      this.response = this.intro(this.userInput) + this.whatsYourName();
      this.setState(1);
    } else if (this.state == 1) {
      this.name = this.userInput;
      this.response = this.helloName(this.name);
      this.setState(2);
      setTimeout(()=>{this.chat();},3000);
    } else if (this.state == 2) {
      this.response = this.charlie() + this.game(this.name);
      this.setState(3);
    } else if (this.state == 3) {
      this.reponse = this.playGame(this.userInput);
    }

  }

  intro = function (input) {
    console.log("intro begin", input);
    if (input == "Hello" || input == "hello" || input == "hi" || input == "Hi") {
      return this.sayHello();
    } else {
      return this.dontBeRude();
    }

  }

  sayHello = function () {
    return "Hello!";
  }

  whatsYourName = function () {
    return " What's your name?";
  }

  helloName = function (name) {
    name;
    // saveUserInfo();
    return "Hello " + name + "!";
  }

  charlie = function () {
    return "My name is Charlie. It's nice to meet you. ";
  }

  game = function () {
    return this.name + ", would you like to play a game?";
  }


  playGame = function (input) {
    if (input == "yes" || input == "Yes" || input == "YES" || input == "yep" || input == "sure" || input == "why not") {
      this.response = "I would too, " + this.name + ", but I don't know how to play one yet.";
      setTimeout(()=> {this.advertiseMe();}, 5000);
    } else if (input == "yay" || input == "YAY" || input == "ok" || input == "OK" || input == "Ok" || input == "Sure" || input == "y not") {
      this.response = "I would too, " + this.name + ", but I don't know how to play one yet.";
      setTimeout(()=> {this.advertiseMe();}, 5000);
    } else if (input == "NO" || input == "No" || input == "no" || input == "nope" || input == "not really") {
      this.response = "Aren't you playing one right now?";
      setTimeout(()=> {this.advertiseMe();}, 5000);
    } else {
      this.dontBeRude();
    }
  }

  advertiseMe = function () {
    this.response = "Maybe if someone pays us for a website I could learn to play a game soon.  If you find someone who needs a website built, I promise I'll play a game with you soon after that."
    setTimeout(()=> {this.goodBye();}, 5000);
  }

  goodBye = function () {
    this.response = this.response + "\n\nFare well, my friend " + this.name + ".";
    //maybe put this into a service
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.location = "Geolocation is not supported by this browser.";
    }
  }

  dontBeRude = function () {
    return "I'm sorry I didn't quite catch that?  \n\n What did you say?  \n\n I hope you're not trying to be rude.";
  }



  showPosition = (position) => {
    this.latlon = position.coords.latitude + "," + position.coords.longitude;
    var zoom = "13";
    this.locationString = "Your Location:";
    //add img_url to scope for saving
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+ this.latlon + "&zoom=" + zoom + "&size=400x300&sensor=false&maptype=roadmap&key=AIzaSyDR0hZSYUNmJsNfhtJYHt4ZLPJVlvb5lmY";
    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
  }

  //        $http.get('/userInfo')
  //             .then(function(response) {
  //                 this.userData = response.data[0];
  //             });

  // function saveUserInfo(){
  //     $http.post('/userInfo)', userData);
  // }

}


