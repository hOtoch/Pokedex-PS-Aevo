import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './shared/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './shared/pokemon-card/pokemon-card.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';


import{ ModalDetailsComponent } from './pages/modal-details/modal-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [PokemonService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
