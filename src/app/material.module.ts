import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ]
})

export class MaterialModule {
}
