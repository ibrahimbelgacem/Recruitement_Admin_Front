import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ParametreModule} from './parametre/parametre.module';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FormsModule } from '@angular/forms';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
   PagesRoutingModule,
   ThemeModule,
   MiscellaneousModule,
   ParametreModule,
   FormsModule   ,
   Ng2SmartTableModule,           // smart table config
   NbDialogModule.forChild(),      // nebular theme
   NbWindowModule.forChild(),
   MiscellaneousModule,
   ParametreModule,
   FormsModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  entryComponents:[

  ]
})
export class PagesModule {
}
