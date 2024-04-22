import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonSearchComponent
  ],
  exports: [
    HeaderComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class SharedModule { }