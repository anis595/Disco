import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url = 'http://localhost:3000/albums';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public albums!: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get(url).subscribe((data) => {
      this.albums = data;
    });
  }
}
