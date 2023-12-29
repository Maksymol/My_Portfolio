import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParalaxComponent } from './paralax/paralax.component';
import { About_meComponent } from './about_me/about_me.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ModalComponent } from './modal/modal.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [							
    AppComponent,
      NavbarComponent,
      ParalaxComponent,
      About_meComponent,
      StatisticsComponent,
      PortfolioSectionComponent,
      ModalComponent,
      ContactsComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
