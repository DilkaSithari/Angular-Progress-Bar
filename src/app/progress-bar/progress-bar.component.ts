import { Component } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  constructor(private http: HttpClient, public progress: NgProgress) {}

  loadData() {
    this.progress.ref().start();

    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        console.log(data);

        this.progress.ref().complete();
      });
  }
}
