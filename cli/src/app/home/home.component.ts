import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.db.getProducts().subscribe((datas) => {
      console.log(datas);
    });
  }
}
