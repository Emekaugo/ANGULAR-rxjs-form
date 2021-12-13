import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //
    // function greeting(name: string) {
    //   alert('Hello ' + name);
    // }
    // function processUserInput(callback: any) {
    //   var name = prompt('Please enter your name.');
    //   callback(name);
    // }
    // processUserInput(greeting);
    //
    // function greeter(message: any) {
    //   console.log(`${message}, how are you doing?`);
    // }
    // function sayHi(callback: any) {
    //   callback('Hi!');
    // }
    // sayHi(greeter);
  }
}
