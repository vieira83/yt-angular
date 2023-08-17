import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppContentLayoutComponent } from './layout/app-content/app-content.component'
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SideNavComponent } from './layout/header/side-nav/side-nav.component'
import { MaterialModule } from './modules/material/material.module'
// import { MaterialModule } from './modules/material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    AppContentLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
