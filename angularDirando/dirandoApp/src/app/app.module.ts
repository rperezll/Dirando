import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexbodyComponent } from './indexbody/indexbody.component';
import { routing } from './app.routing';
import { RegistroComponent } from './registro/registro.component';
import {InfoUserComponent} from './usuario/user.component';
import {ShopComponent} from './shop/shop.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ModificarCuentaComponent } from './modificar-cuenta/modificar-cuenta.component';

//Servicios
import { LoginService } from './login/login.service';
import {ShopService} from './shop/shop.service';

import { AdministracionComponent } from './administracion/administracion.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoriasComponent } from './admin-categorias/admin-categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexbodyComponent,
    RegistroComponent,
    InfoUserComponent,
    ListadoProductosComponent,
    DetalleProductoComponent,
    ModificarCuentaComponent,
    ShopComponent,
    AdministracionComponent,
    AdminComponent,
    AdminCategoriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    routing,
    CommonModule
  ],
  providers: [LoginService,ShopService],

  bootstrap: [AppComponent]
})
export class AppModule { }
