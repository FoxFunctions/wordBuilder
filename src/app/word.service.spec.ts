import { TestBed } from '@angular/core/testing';
import { WordService } from './word.service';

describe('WordService', () => {
	let service: WordService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(WordService);
	});

	it('WordService should be created', () => {
		expect(service).toBeTruthy();
	});

	it('myWord should be an empty array', () => {
		expect(service.userWord.length).toBe(0);
	});

	it('userAlphabet should have 26 strings', () => {
		expect(service.alphabet.length).toEqual(26);
	});
});
