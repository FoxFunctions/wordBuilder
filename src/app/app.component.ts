import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { image } from './image';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public imageHelper: image) { }
  title = 'wordBuilder';
  usersAlphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',           
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  myWord: string[] = [
  ];
  userWord: string = "";
  isCorrectSpelling: boolean = false;
  isWrongSpelling: boolean = false;

  spelledCorrectly(): boolean {
    if (this.userWord == this.imageHelper.placeHolderHelperIcon.title) {
      this.isCorrectSpelling = true;
      return this.isCorrectSpelling;

    } else{
      this.isWrongSpelling = true;
      return this.isWrongSpelling;
    }
  }

  resetEnglishAlphabet(): void {
    this.usersAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  clearWordList(): void {
    this.myWord = [];
    this.isCorrectSpelling = false;
    this.isWrongSpelling = false;
  }

  myWordToString(): string {
    this.userWord = this.myWord.join('');
    return this.userWord;
  }

  iconIterator(): void {
    this.imageHelper.iconIterator();
    this.clearWordList();
    this.isCorrectSpelling = false;
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
    this.resetEnglishAlphabet();
    this.myWordToString();
    this.isCorrectSpelling = false;
    this.isWrongSpelling = false;
  }
}
