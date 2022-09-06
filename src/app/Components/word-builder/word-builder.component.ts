import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { image } from 'src/app/image';
import { WordService } from 'src/app/Services/word-service/word.service';


@Component({
	selector: 'app-root',
	templateUrl: './word-builder.component.html',
	styleUrls: ['./word-builder.component.css']
})

export class WordBuilderComponent {
	constructor(public imageHelper: image, public word: WordService) { }
	title = 'wordBuilder';

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

	resetLetterTiles(): void {
		this.word.resetAlphabet();
		this.word.myWordToString();
		this.isCorrectSpelling = false;
		this.shouldShowErrorMessage = false;
	}

	clearWordList(): void {
		this.word.userWord = [];
		this.isCorrectSpelling = false;
		this.shouldShowErrorMessage = false;
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
		this.resetLetterTiles();
	}
}
