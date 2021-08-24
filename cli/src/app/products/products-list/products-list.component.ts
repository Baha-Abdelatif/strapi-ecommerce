import { Component, OnDestroy, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  allProducts: any;
  products: any;
  categories: any;
  productsSub: any;
  categoriesSub: any;

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.productsSub = this.db.getProducts().subscribe((datas) => {
      // console.log(datas);
      this.products = datas;
      this.allProducts = datas;
    });

    this.categoriesSub = this.db.getCategories().subscribe((datas) => {
      // console.log(datas);
      this.categories = [{ id: 0, name: 'all products' }, ...datas];
    });
  }

  filterProducts(e: any): any {
    // console.log(e);
    if (e.value === 0) {
      this.products = this.allProducts;
      return;
    }
    this.products = this.allProducts.filter(
      (p: any) => p.category.id === e.value
    );
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
    this.categoriesSub.unsubscribe();
  }
}
