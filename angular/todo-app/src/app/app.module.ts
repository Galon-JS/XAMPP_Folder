import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsAllComponent } from './items-all/items-all.component';
import { ItemComponent } from './item/item.component';
import { ItemsCompletedComponent } from './items-completed/items-completed.component';
import { ItemActiveComponent } from './item-active/item-active.component';
import { ItemsFilterPipe } from './pipes/items-filter.pipe';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ItemsAllComponent,
    ItemComponent,
    ItemsCompletedComponent,
    ItemActiveComponent,
    ItemsFilterPipe,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
