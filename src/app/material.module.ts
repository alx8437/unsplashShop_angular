import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import {ScrollingModule} from '@angular/cdk/scrolling';



@NgModule({
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    CdkScrollableModule,
    ScrollingModule,
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    CdkScrollableModule,
    ScrollingModule,
  ]
})

export class MaterialModule {
}
