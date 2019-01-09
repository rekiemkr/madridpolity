import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/*My declarations*/
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { ContactPage} from '../pages/contact/contact';
import { PoliticsPage } from '../pages/politics/politics';
import { PolitiContentPage } from '../pages/politi-content/politi-content';
import { ComentsPage} from '../pages/coments/coments';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ContactPage,
    PoliticsPage,
    PolitiContentPage,
    ComentsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ContactPage,
    PoliticsPage,
    PolitiContentPage,
    ComentsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
