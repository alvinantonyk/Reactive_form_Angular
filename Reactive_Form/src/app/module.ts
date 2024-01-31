import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,ReactiveFormsModule,CommonModule],
    bootstrap:[AppComponent],
})
export class AppModule{

}