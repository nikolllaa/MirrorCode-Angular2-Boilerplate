import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    exports: [],
    declarations: []
})
export class MaterialModule {
}

@NgModule({
    imports: [
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

