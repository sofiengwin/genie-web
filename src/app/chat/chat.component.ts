import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service"
import { Ichat } from "../ichat";

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  providers: [ChatService],
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})

export class ChatComponent implements OnInit {
  chats: Ichat[] = [
    {  message: [ "Genie first message"], messageAuthor: "genie", image: null }
  ]

  errorMessage: string

  constructor(private _chatService: ChatService ){}

  ngOnInit(){
    this.getChats()
  }

  getChats(){
    return this.chats
  }

  userType(user: Ichat){
    if(user.messageAuthor == "genie"){
      return true
    }
  }

  sendMessage(event, message){
    event.preventDefault();
    this.chats.push({message: message, messageAuthor: "you", image: null})
    this.messageGenie(message);
  }

  messageGenie(message: string){
    this._chatService.sendToGenie(message)
      .subscribe(
        chat => this.chats.push({message: chat.text.split("/n"), messageAuthor: "genie", image: chat.image}),
        error => this.errorMessage = <any> error
      )
  }

  startRecording(){
//     document.querySelector('#button').onclick = function () {
//     fetch('/api/speech-to-text/token')
//     .then(function(response) {
//       return response.text();
//     }).then(function (token) {
//       var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
//         token: token,
//         continuous: false, // false = automatically stop transcription the first time a pause is detected
//         outputElement: '#output' // CSS selector or DOM Element
//       });
//       stream.on('error', function(err) {
//         console.log(err);
//       });
//     }).catch(function(error) {
//       console.log(error);
//     });
// };
  }

}
