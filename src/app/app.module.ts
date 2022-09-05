import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WordBuilderComponent } from './word-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { image } from './image';
import { WordService } from './word.service';

@NgModule({
	declarations: [
		WordBuilderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		DragDropModule
	],
	providers: [image, WordService],
	bootstrap: [WordBuilderComponent]
})
export class AppModule { }
