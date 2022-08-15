import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
//Este es un decorador y marca el comportamiento de una clase//
@NgModule({
    //Propiedades
    exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule]
})

//Esta es una clase
export class MaterialModule {}