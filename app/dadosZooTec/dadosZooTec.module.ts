import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { DadosZooTecRoutingModule } from "./dadosZooTec-routing.module";
import { DadosZooTecComponent } from "./dadosZooTec.component";

@NgModule({
    imports: [
        NativeScriptModule,
        DadosZooTecRoutingModule
    ],
    declarations: [
        DadosZooTecComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DadosZooTecModule { }
