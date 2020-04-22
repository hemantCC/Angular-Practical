import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/app/components/Shared/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/Shared/footer/footer.component';
import { HeaderComponent } from 'src/app/components/Shared/header/header.component';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { ProductItemComponent } from 'src/app/components/shopping-cart/product-list/product-item/product-item.component';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
import { CartItemComponent } from 'src/app/components/shopping-cart/cart/cart-item/cart-item.component';
import { DirectiveExampleComponent } from './components/directive-example/directive-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { FlyingHeroesImpurePipe } from 'src/app/pipes/flying-heroes-impure.pipe';
import { FlyingHeroImpureComponent } from './components/pipes/flying-hero-impure/flying-hero-impure.component';




const appRoutes : Routes = [
  { path: '' , component: ShoppingCartComponent},
  { path: 'app-pipes' , component: PipesComponent},
  { path: 'directive-example' , component: DirectiveExampleComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    DirectiveExampleComponent,
    HighlightDirective,
    PipesComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroImpureComponent,
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
