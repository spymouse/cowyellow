import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DadosZooTecComponent } from "./dadosZooTec.component";

const routes: Routes = [
    { path: "", component: DadosZooTecComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DadosZooTecRoutingModule { }
