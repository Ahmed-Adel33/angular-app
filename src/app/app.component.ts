import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo';
  addItem(description: string) {
	this.allItems.unshift({
	  description,
	  done: false
	});
  }

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Javscript', done: true },
    { description: 'python', done: false },
    { description: 'angular', done: false },
    { description: 'react', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

}


