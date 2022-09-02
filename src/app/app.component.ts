import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Constants } from './constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'wordBuilder';
  
  usersAlphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];

  myWord: string[] = [ 

  ];

  resetenglishAlphabet() : void {
  for (let i = 0; i < Constants.englishAlphabet.length; i++){
    this.usersAlphabet[i] = Constants.englishAlphabet[i];
  }
  
}
  clearWordList() : void {
    this.myWord = [];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.resetenglishAlphabet();
    console.log(this.myWord);
    console.log(Constants.englishAlphabet);
    console.log(this.usersAlphabet);
  }

}
