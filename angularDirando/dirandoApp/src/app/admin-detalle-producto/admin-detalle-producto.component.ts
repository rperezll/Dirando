import { Component, OnInit } from '@angular/core';
import  {  ActivatedRoute, Router  }  from  '@angular/router';
import { LoginService } from '../login/login.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-admin-detalle-producto',
  templateUrl: './admin-detalle-producto.component.html'
})
export class AdminDetalleProductoComponent {

  private producto: Object[] = [];

  constructor(private http: Http, private activatedRoute:  ActivatedRoute, private loginService: LoginService, private router: Router) {
    if (this.loginService.isAdmin == false) {
      this.router.navigate(['/home']);
    }
    this.cargarProducto();
  }

  cargarProducto() {
    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });
    let  url  =  "https://localhost:8443/rest/productDetail/" + this.activatedRoute.snapshot.params['id'];
    this.http.get(url, options).subscribe(
      response  =>  {
        let data = response.json();
        console.log(data);
        this.producto.push({
          "imagen": data.image, "id": data.id, "nombre": data.nombre, "precio": data.precio,
          "best": data.theBest, "mustImprove": data.mustImprove, "bad": data.bad, "descripcion": data.desProducto,
          "stock": data.stock, "categoria": data.categoria
        });
      },
      error  =>  console.error(error)
    );
  }

  eliminarProducto(){
    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });
    let  url  =  "https://localhost:8443/rest/admin/products/" + this.activatedRoute.snapshot.params['id'];
    this.http.delete(url, options).subscribe(
      response  =>  {
        alert('El producto ha sido eliminado');
        this.router.navigate(['/adminProductos']);
      },
      error  =>  console.error(error)
    );
  }
}