import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AddNovoRoutingModule } from "./addNovo-routing.module";
import { AddNovoComponent } from "./addNovo.component";

@NgModule({
    imports: [
        NativeScriptModule,
        AddNovoRoutingModule
    ],
    declarations: [
        AddNovoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddNovoModule { }
