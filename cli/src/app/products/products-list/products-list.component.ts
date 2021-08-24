import { Component, OnDestroy, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: any;
  categories: any;
  productsSub: any;
  categoriesSub: any;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.productsSub = this.db.getProducts().subscribe((datas) => {
      // console.log(datas);
      this.products = datas;
    });

    this.categoriesSub = this.db.getCategories().subscribe((datas) => {
      // console.log(datas);
      this.categories = datas;
    });
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
    this.categoriesSub.unsubscribe();
  }
}
