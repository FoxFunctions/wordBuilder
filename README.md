# WordBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

WordBuilder is a project that allows a user to drag alphabetical tiles to form words. The user will be prompted to spell the word that best describes an image that is presented on the screen. If the user spells the word correctly, they will be able to move on to the next image. 

-- Uses the Angular Material DragDropModule to perform Drag & Drop functions. 

-- cdkDropList connects to arrays that are defined in the word.service.ts class. 

-- The Drop() function defined in the word-builder.component.ts class manages the transfer of strings between the two cdkDropLists

-- Since TypeScript requires us to define single chars as strings, the cdkDropLists are connected to string arrays. The myWordToString() function defined in the word.service converts the user generated string array into a single string. This allows the spellcheck() method to compare the user's input with the title on the icon object. If the word was 
spelled correctly, the isCorrectSpelling boolean becomes true and allows the *ngIf statements to display success messages in the view. 

-- New icons are presented by changing the values defined in the placeHolderHelperIcon object defined in the image.ts class. This is accomplished by the iconIterator() function which is also in the image.ts class.

The icon objects that are defined in the image class were sourced from `https://thenounproject.com/` these icons are free to use for educational and personal projects.
Icon Credit to Designers:

Car - `https://thenounproject.com/iahmadali26/`
Cat - `https://thenounproject.com/mungang.kim/`
Chair - `https://thenounproject.com/bonnie.beach/`
Dog -  `https://thenounproject.com/schroederdaniel/`
Fish - `https://thenounproject.com/CreativeMania/`
Flower - `https://thenounproject.com/ekopatriot3351/`
Hand -  `https://thenounproject.com/icon/hand-164670/`
Plane - `https://thenounproject.com/iconsfest/`
Shoe - `https://thenounproject.com/coquet_adrien/`
Tree - `https://thenounproject.com/warunkicon/`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
-- Unit tests are written in the word-builder.component.spec.ts and the word.service.spec.ts files.

