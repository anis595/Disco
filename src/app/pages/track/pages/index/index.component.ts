import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url3 = 'http://localhost:3000/tracks';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public tracks!: any;
  constructor(private httpClient3: HttpClient) {}

  ngOnInit(): void {
    this.httpClient3.get(url3).subscribe((data3) => {
      this.tracks = data3;
    });
  }
}
