import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Component({
  selector: 'app-catcherror',
  templateUrl: './catcherror.component.html',
  styleUrls: ['./catcherror.component.scss'],
})
export class CatcherrorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = new Observable((observr) => {
      observr.next('a');
      observr.next('b');
      observr.error('error occured');
    });

    source$
      .pipe(
        // catchError((error) => {
        // return of(1, 2, 3, 4);
        // throw 'what is this eror';
        // throw error;
        // })
        catchError((error, caught) => {
          return caught;
        }),
        take(5)
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
