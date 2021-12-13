import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { personsData } from './person';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  persons$: BehaviorSubject<Person[]>;
  persons: Array<Person> = [];

  constructor() {
    this.persons$ = new BehaviorSubject<Person[]>([]);
    this.persons = personsData;
  }

  getAll() {
    this.persons$.next(this.persons);
  }

  add(person: Person) {
    this.persons.push(person);
  }

  edit(person: Person) {
    let modPerson: any;
    modPerson = this.persons.find((p) => p.id == person.id);
    modPerson.firstName = person.firstName;
    modPerson.age = person.age;
    modPerson.job = person.job;
    this.persons$.next(this.persons);
  }

  remove(id: number) {
    this.persons = this.persons.filter((p) => {
      return p.id != id;
    });

    this.persons$.next(this.persons);
  }
}
