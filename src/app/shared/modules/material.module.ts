import {NgModule} from '@angular/core';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faPowerOff, faCircleInfo, fas } from '@fortawesome/free-solid-svg-icons';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    FontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [
    FontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})

export class MaterialModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faPowerOff);
    library.addIcons(faCircleInfo);
  }
}