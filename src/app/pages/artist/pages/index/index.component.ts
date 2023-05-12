import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const url2 = 'http://localhost:3000/artists';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public artists!: any;
  constructor(private httpClient2: HttpClient) {}

  ngOnInit(): void {
    this.httpClient2.get(url2).subscribe((data2) => {
      this.artists = data2;
    });
  }
}
