import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Post } from '../post';

class Post {
  constructor(
    public userId: number,
    public id: string,
    public titlee: string,
    public body: string
  ) {}
}

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent implements OnInit {
  title = 'Angular 10 and Promises Example';
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  api: string = 'https://jsonplaceholder.typicode.com/posts/';
  data = [];

  key = 'key=$2a$10$LFXn2jsUKz6/3u.fmKm.q..l0sFiMaumBuLI8rwQ28g2QmLPa55Em';
  apiUrl = `https://www.potterapi.com/v1/characters?${this.key}`;
  characters = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // console.log('Angular 10 Promises');
    // this.fetchDataAsPromise()
    //   .then((data) => {
    //     console.log(JSON.stringify(data));
    //   })
    //   .catch((error) => {
    //     console.log('Promise rejected with ' + JSON.stringify(error));
    //   });

    this.getPosts();
    // this.fetchData();
  }

  // fetchDataAsPromise() {
  //   return this.httpClient
  //     .get(
  //       `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`
  //     )
  //     .toPromise();
  // }

  getPosts() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.api;
      this.httpClient
        .get<Post[]>(apiURL)
        .toPromise()
        .then(
          (res: any) => {
            // Success
            this.data = res.map((res: any) => {
              return new Post(res.userId, res.id, res.title, res.body);
            });
            resolve();
          },
          (err) => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

  // fetchData() {
  //   const promise = this.httpClient.get(this.apiUrl).toPromise();
  //   console.log(promise);
  //   promise
  //     .then((data) => {
  //       this.key = JSON.stringify(data);
  //       console.log(JSON.stringify(data));
  //     })
  //     .catch((error) => {
  //       console.log('Promise rejected with ' + JSON.stringify(error));
  //     });
  // }
}
