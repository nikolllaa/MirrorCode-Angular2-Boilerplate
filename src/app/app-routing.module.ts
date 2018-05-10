import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
    {path: '', component: HomeComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
