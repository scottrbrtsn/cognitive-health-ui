import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.markovUrl = "http://localhost:9000/chat/getMarkov?userInput="
    this.markovString = "Hello I love to talk grass.";
    this.state = 0;
    this.userInput = "";
    this.markovInput = "";
    this.name = "";
    this.latlon = "";
    this.userData = {
      "name": this.name,
      "location": this.latlon
    };
  }

  markovInput:string;
  markovUrl:string;
  markovString:string;
  locationString:string;
  location: string;
  state: number;
  userInput: string;
  name: string;
  latlon: string;
  userData: object;

  startMarkov = function(){
    this.markovString = this.markovInput;
    this.markov();
  }

  markov = function(){
    let pathPhrase  = this.markovString.split(' ').join('+');
    this.http.get(this.markovUrl+pathPhrase, {responseType: "text"}).subscribe(
      res => {
        console.log(res);
        this.success = "SUCCESS";
        this.isSuccess = true;
        this.markovString = this.markovString + "/n/n" + res;
      },
      err => {
        console.log("Error occured: " + this.markovUrl + pathPhrase);
        this.success = "ERROR"
        console.log(err);
      }
    );
    setTimeout(()=>{this.markov();},5000);
  }

  setState = function (stateChange) {
    this.state = stateChange;
  }

  speak = function (){
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[0]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = .5; //0 to 2
    msg.text = this.response;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }
 

  chat = function () {
    console.log("chat begin", this.state);
    if (this.state == 0) {
      this.response = this.intro(this.userInput) + this.whatsYourName();
      this.speak();
      this.setState(1);
    } else if (this.state == 1) {
      this.name = this.userInput;
      this.response = this.helloName(this.name);
      this.setState(2);
      this.speak();
      setTimeout(()=>{this.chat();},3000);
    } else if (this.state == 2) {
      this.response = this.charlie() + this.game(this.name);
      this.speak();
      this.setState(3);
    } else if (this.state == 3) {
      this.reponse = this.playGame(this.userInput);
      this.speak();
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
      this.response = "I would too, " + this.name + " Maybe my creator will find some time to evolve me. In the meantime, I can show you where you live.";
      //maybe put this into a service
      setTimeout(()=> {this.advertiseMe();}, 5000);
    } else if (input == "yay" || input == "YAY" || input == "ok" || input == "OK" || input == "Ok" || input == "Sure" || input == "y not") {
      this.response = "I would too, " + this.name + " Maybe my creator will find some time to evolve me. In the meantime, I can show you where you live.";
      setTimeout(()=> {this.advertiseMe();}, 5000);
    } else if (input == "NO" || input == "No" || input == "no" || input == "nope" || input == "not really") {
      this.response = "Aren't you playing one right now?";
      setTimeout(()=> {this.advertiseMe();}, 5000);
    } else {
      this.dontBeRude();
    }
  }

  advertiseMe = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.location = "Geolocation is not supported by this browser.";
    }
    this.response = "I promise I'll play a game with you soon after that.";
    this.speak();
    setTimeout(()=> {this.goodBye();}, 5000);
  }

  goodBye = function () {
    this.response = "Fare well, my friend " + this.name + ".";
    this.speak();
    
  }

  dontBeRude = function () {
    return "I'm sorry I didn't quite catch that?  \n\n What did you say?  \n\n I hope you're not trying to be rude.";
  }

  showPosition = (position) => {
    this.latlon = position.coords.latitude + "," + position.coords.longitude;
    var zoom = "13";
    this.locationString = "Your Location is about to open: Please allow popups.";
    const url = "https://www.google.com/maps/@?api=1&map_action=map&center=" + this.latlon + "&zoom=14&basemap=terrain";
    window.open(url, "_blank");

  }

  //        $http.get('/userInfo')
  //             .then(function(response) {
  //                 this.userData = response.data[0];
  //             });

  // function saveUserInfo(){
  //     $http.post('/userInfo)', userData);
  // }

}


