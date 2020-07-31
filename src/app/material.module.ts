import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ]
})

export class MaterialModule {
}
