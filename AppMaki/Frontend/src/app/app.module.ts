import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { CartComponent } from './componentes/cart/cart.component';
import { NavComponent } from './componentes/share/nav/nav.component';
import { FooterComponent } from './componentes/share/footer/footer.component';
import { HomeComponent} from './componentes/home/home.component';
import { FormComponent} from './componentes/form/form.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'  
import { AuthService } from './service/auth.service'
import { AuthGuard } from './guard/auth.guard'; 
import { TokenInterceptorService } from './service/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    CartComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
     FormsModule,
],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
