import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { icon } from './iconModel';
import { image } from './icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public imageHelper : image) {}
  title = 'wordBuilder';
  usersAlphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];
  myWord: string[] = [ 
  ];
  userWord : string = "";
  isCorrectSpelling : boolean = false;

  spelledCorrectly() : boolean {
    if (this.userWord == this.imageHelper.placeHolderHelperIcon.title){
      this.isCorrectSpelling = true;
    }
    return this.isCorrectSpelling;
  }

  resetEnglishAlphabet() : void {
  this.usersAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];
  }
  clearWordList() : void {
    this.myWord = [];
  }
  myWordToString() : string {
  this.userWord = this.myWord.join('');
  console.log("userWord =" + this.userWord);
  return this.userWord;
  }

  iconIterator() : void {
    this.imageHelper.iconIterator();
    this.clearWordList();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.resetEnglishAlphabet();
    this.myWordToString();
    console.log(this.usersAlphabet);
  }
}
