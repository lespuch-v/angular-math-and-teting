import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'math-test';
  userInput: number = 0;

  handleInput(event: any) {
    this.userInput = event.target.value;
    console.log(this.userInput);
  }
  double() {
    const dbl = Number(this.userInput * this.userInput)
    this.title = String(dbl)
  }
  reset(){
    this.title = "math-test"
    this.userInput = 0
  }
  root(){
    let rt = Math.sqrt(Number(this.userInput))
    console.log(rt)
    this.title = String(rt)
  }
  evenOrOdd(){
    const num = this.userInput
    if(num %2 ==0){
      this.title = "Even"
    }else{
      this.title = "Odd"
    }
  }

}
