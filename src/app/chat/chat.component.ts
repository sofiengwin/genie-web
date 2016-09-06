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
    {  message: [ "Hello, welcome! I'm the Genie of the Bank 😎 How may I help you?"], messageAuthor: "genie", image: null }
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
    this.chats.push({message: message, messageAuthor: "you", image: null});
    let test = document.getElementById("exampleInputAmount");
    this.messageGenie(message);
  }

  messageGenie(message: string){
    this._chatService.sendToGenie(message)
      .subscribe(
        chat => this.chats.push({message: chat.text.split("/n"), messageAuthor: "genie", image: chat.image}),
        error => this.errorMessage = <any> error
      )
  }
}
