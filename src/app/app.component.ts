import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { image } from './image';
import { WordService } from './word.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(public imageHelper: image, public word: WordService) { }
	title = 'wordBuilder';
	usersAlphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
		'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	myWord: string[] = [
	];
	userWord = '';
	isCorrectSpelling = false;
	shouldShowErrorMessage = false;
	errorMessage = '';

	spellCheck(): void {
		if (this.word.myWordToString() == this.imageHelper.placeHolderHelperIcon.title) {
			this.isCorrectSpelling = true;
		} else{
			this.shouldShowErrorMessage = true;
			this.isCorrectSpelling = false;
			this.errorMessage = 'Sorry, that is incorrect. Please try again.';
		}
	}

	resetEnglishAlphabet(): void {
		this.usersAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
			'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	}

	clearWordList(): void {
		this.myWord = [];
		this.isCorrectSpelling = false;
		this.shouldShowErrorMessage = false;
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
		this.shouldShowErrorMessage = false;
	}
}
