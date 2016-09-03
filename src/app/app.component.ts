import { Component } from '@angular/core';
import { ChatComponent } from "./chat/chat.component"
import "rxjs/Rx";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ChatComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  ngOnInit(){
    // console.log(watsonSpeach, 'watson')
  }
}
