import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class WordService {

	alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
		'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	userWord: string[] = [
	];

	myWordToString(): string {
		return this.userWord.join('');
  
	}

	resetAlphabet(): void {
		this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
			'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	}
}
