import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   angular.module('myApp')
//     .component('charlie', {
//         templateUrl: '/charlie/charlie.template.html',
//          bindings: {
//             response : '@',
//             userData : '=?',
//             latlon : '@'
//          },
//          controller: function($scope, $q, $http) {
//             var state = 0;
//             this.userInput = "";
//             this.name = "";
//             this.latlon = "";
//             this.userData = {
//             "name": this.name,
//             "location": this.latlon
//             };

//             function setState(stateChange)
//             {
//               state = stateChange;
//             }

//         this.chat = function chat()
//         {
//         console.log("chat begin", state);
//            if (state == 0){
//              this.response =  intro(this.userInput) + whatsYourName();
//              setState(1);
//            }else if (state == 1){
//              this.name = this.userInput;
//              this.response = helloName(this.name);
//              setState(2);
//            }else if (state == 2){
//              this.response = charlie() + game(this.name);
//              setState(3);
//            }else if (state == 3){
//              this.reponse = playGame(this.userInput);
//            }

//         }

//         function intro(input)
//         {
//                     console.log("intro begin", input);
//           if(input== "Hello" || input== "hello" || input== "hi" || input== "Hi"){
//             return sayHello();
//           }else{
//            return dontBeRude();
//           }

//         }

//         function sayHello(){
//              return "Hello!";
//         }

//         function whatsYourName(){
//              return " What's your name?";
//         }

//         function helloName(name){
//              name;
//             // saveUserInfo();
//              return "Hello " + name + "!";
//         }

//         function charlie()
//         {
//           return  "My name is Charlie. It's nice to meet you. ";
//         }

//         function game(){
//              return this.name + ", would you like to play a game?";
//         }


//         function playGame(input)
//         {
//             if(input == "yes" || input == "Yes" || input == "YES" || input == "yep" || input == "sure" || input == "why not"){
//               this.response = "I would too, " + this.name + ", but I don't know how to play one yet.";
//               window.setTimeout(advertiseMe, 5000);
//             }else if (input == "yay" || input == "YAY" || input == "ok" || input == "OK" || input == "Ok"|| input == "Sure" || input == "y not"){
//               this.response = "I would too, " + this.name + ", but I don't know how to play one yet.";
//               window.setTimeout(advertiseMe, 5000);
//             }else if (input == "NO" || input == "No" || input == "no" || input == "nope" || input == "not really"){
//              this.response = "Aren't you playing one right now?";
//              window.setTimeout(game, 5000);
//             }else{
//               dontBeRude();
//             }
//         }

//         function advertiseMe()
//         {
//             this.response = "Maybe if someone pays us for a website I could learn to play a game soon.  If you find someone who needs a website built, I promise I'll play a game with you soon after that."
//             window.setTimeout(goodBye, 5000);
//         }

//         function goodBye(){
//            this.response = this.response + "\n\nFare well, my friend " + this.name + ".";
//         }

//         function dontBeRude(){
//              return "I'm sorry I didn't quite catch that?  \n\n What did you say?  \n\n I hope you're not trying to be rude.";
//         }

//         //maybe put this into a service
//         if (navigator.geolocation) {
//              navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//              this.location = "Geolocation is not supported by this browser.";
//         }

//         function showPosition(position) {
//              this.latlon = position.coords.latitude + "," + position.coords.longitude;
//              var zoom = "13";
//              //add img_url to scope for saving
//              var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
//              +this.latlon+"&zoom="+zoom+"&size=400x300&sensor=false&maptype=roadmap&key=AIzaSyDR0hZSYUNmJsNfhtJYHt4ZLPJVlvb5lmY";
//              document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
//         }

// //        $http.get('/userInfo')
// //             .then(function(response) {
// //                 this.userData = response.data[0];
// //             });

//         function saveUserInfo(){
//             $http.post('/userInfo)', userData);
//         }

// }
// });

}
