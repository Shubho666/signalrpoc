import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubConnectionBuilder, HubConnection, LogLevel, HttpTransportType } from '@aspnet/signalr';
import { TestingService } from '../../service/testing.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id: string;
  _connetion: any;
  // connection: any;
  connection = new HubConnectionBuilder()
    .configureLogging(LogLevel.Information)
    .withUrl("http://localhost:5000/chathub", {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets

    })
    .build();
    userstory=[];
  constructor(public route: ActivatedRoute, public test: TestingService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    })

    this.connection.start().then(function () {
      console.log('Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
    this.connection.on("ReceiveMessage", (message) => {
      alert(message);
      this.userstory.push(message);
      console.log("received message", message)
    })
    this._connetion = this.connection;
    setTimeout(() => {
      this.connection.invoke("JoinGroup", this.id).then(res => console.log("Joined Group", this.id)).catch(err => { console.log("Error", err) })
    }, 1000);
  }
  sendMsg(id) {
    this.connection.invoke("SendMessageToGroup", id,(<HTMLInputElement>document.getElementById("userstory")).value );
    //this.userstory.push
  }

}
