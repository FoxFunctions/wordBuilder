import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { image } from 'src/app/image';
import { WordBuilderComponent } from './word-builder.component';


describe('WordBuilderComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				DragDropModule,
			],
			declarations: [
				WordBuilderComponent,
			],
			providers: [
				image
			]
			
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(WordBuilderComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should have as title \'wordBuilder\'', () => {
		const fixture = TestBed.createComponent(WordBuilderComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('wordBuilder');
	});

	it('isCorrectSpelling should be false', () => {
		const fixture = TestBed.createComponent(WordBuilderComponent);
		const app = fixture.componentInstance;
		expect(app.isCorrectSpelling).toBe(false);
	});

	it('shouldShowErrorMessage should be false', () => {
		const fixture = TestBed.createComponent(WordBuilderComponent);
		const app = fixture.componentInstance;
		expect(app.shouldShowErrorMessage).toBe(false);
	});
});
