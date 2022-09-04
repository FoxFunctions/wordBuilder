import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { image } from './image';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				DragDropModule
			],
			declarations: [
				AppComponent,
			],
			providers: [
				image
			]
			
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should have as title \'wordBuilder\'', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('wordBuilder');
	});

	it('userAlphabet should have 26 strings', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.usersAlphabet.length).toEqual(26);
	});

	it('myWord should be an empty array', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.myWord.length).toBe(0);
	});

	it('isCorrectSpelling should be false', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.isCorrectSpelling).toBe(false);
	});

	it('shouldShowErrorMessage should be false', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.shouldShowErrorMessage).toBe(false);
	});
});
