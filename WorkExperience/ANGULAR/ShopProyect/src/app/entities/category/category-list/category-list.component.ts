import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }


  getAllCategories(){
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
}
