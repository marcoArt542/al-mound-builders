import {Component, OnInit } from '@angular/core';

import { Book } from './book';
import { BookService } from './book.service';



@Component({
  selector: 'about',
  templateUrl:  './about.component.html',
  providers: [BookService]
})
export class AboutComponent implements OnInit {
     pageTitle = 'About this Site ';
     imageWidth: number = 180; 
     imagePadding: number = 20;
     books: Book[];

 constructor(private bookService: BookService) { }

 getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooks();
  }
   
}
