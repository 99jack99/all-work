import { ProductService } from '@entities/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '@entities/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@entities/category/category.model';
import { CategoryService } from '@entities/category/category.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {

  mensaje: String = '';
  error: Boolean = false;
  success: Boolean = false;

  product: Product;
  categories: Category[] = [];
  idProduct: number;
  modoAlta: Boolean;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.modoAlta = false;
      this.idProduct = +this.route.snapshot.paramMap.get('id');
      this.getProduct(this.idProduct);
    } else {
      this.modoAlta = true;
      this.product = new Product();
    }
    this.getCategories();
  }

  getProduct(idProduct: number): void {
    this.productService.getProductById(idProduct).subscribe(
      (data: Product) => {
        this.product = data;
      },
      (err) => {
        this.mensaje = "Se produjo un error al recuperar los datos del producto. Error: " + err;
        this.error = true;
      }
    )
  }

  getCategories(){
    this.categoryService.getAll().subscribe(
      data => {
        this.categories = data;
      },
      (err) => {
        this.mensaje = "Se produjo un error al recuperar los datos de categorias. Error: " + err;
        this.error = true;
      }
    )
  }

  guardar(): void{
    this.error=false;
    this.success=false;
    this.mensaje= "";

    this.productService.saveProduct(this.product).subscribe(
      (data: Product) => {
        if(this.modoAlta){
          this.mensaje="Se ha guardado el producto con exito. Id: " + data.id;
          this.success = true;
          this.product = new Product();

        } else {
          this.mensaje="Se ha editado el producto con exito. Id: " + data.id;
          this.success = true;
         // this.router.navigate(['/admin/products-list']);
        }
      },
      (err) => {
        this.mensaje = "Se produjo un error al guardar el producto. Error: " + err;
        console.log(err);
        this.error = true;

      });
  }
}
