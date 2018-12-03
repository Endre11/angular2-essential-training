//angular can be used on multiple platforms (browser, server, etc.) -> need a bootstrap from each platform (we use only browser here)
//angular kicks off with a boostrap call that takes in an Angular root module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //imports a function (earlier imports were classtypes)
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);    //bootstraps our module to the browser
