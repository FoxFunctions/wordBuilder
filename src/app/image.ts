import { icon } from './iconModel';

export class image {

	dog : icon = {directory: 'assets/images/dog.svg', title: 'dog' };
	shoe : icon = {directory: 'assets/images/shoe.svg', title: 'shoe'};
	cat : icon = {directory: 'assets/images/cat.svg', title: 'cat'};
	car : icon = {directory: 'assets/images/car.svg', title: 'car'};
	chair : icon = {directory: 'assets/images/chair.svg', title: 'chair'};
	fish : icon = {directory: 'assets/images/fish.svg', title: 'fish'};
	flower : icon = {directory: 'assets/images/flower.svg', title: 'flower'};
	hand : icon = {directory: 'assets/images/hand.svg', title: 'hand'};
	plane : icon = {directory: 'assets/images/plane.svg', title: 'plane'};
	tree : icon = {directory: 'assets/images/tree.svg', title: 'tree'};
	placeHolderHelperIcon: icon = {directory: 'assets/images/dog.svg', title: 'dog'};

	iconLibrary : icon[] = [ this.shoe, this.cat, this.car, this.chair, this.fish, 
		this.flower, this.hand, this.plane, this.tree, this.dog];

	iconInstance  = 0;

	iconIterator() : icon {

		this.placeHolderHelperIcon.directory = this.iconLibrary[this.iconInstance].directory;
		this.placeHolderHelperIcon.title = this.iconLibrary[this.iconInstance].title;
		this.iconInstance++;

		if (this.iconInstance >= this.iconLibrary.length){
			this.iconInstance = 0;
		}
		return this.placeHolderHelperIcon;
	}
}