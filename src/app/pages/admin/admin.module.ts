import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProduitComponent } from './produit/produit.component';
import { ModalProduitComponent } from './produit/modal-produit/modal-produit.component';
import { NbDialogModule, NbWindowModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { EmballageComponent } from './emballage/emballage.component';

import { ModalEmballageComponent } from './emballage/modal-emballage/modal-emballage.component';
import { PrixVenteComponent } from './prix-vente/prix-vente.component';
import { ModalPrixComponent } from './prix-vente/modal-prix/modal-prix.component';
import { OffreComponent } from './offre/offre.component';
import { ModalOffreComponent } from './offre/modal-offre/modal-offre.component';
import { StepperOneComponent } from '../../condidature/stepper-1/stepper-one.component';
import { StepperTowComponent } from '../../condidature/stepper-2/stepper-tow.component';
import { StepperThreeComponent } from '../../condidature/stepper-3/stepper-three.component';
import { StepperFoureComponent } from '../../condidature/stepper-4/stepper-foure.component';

@NgModule({
  declarations: [AdminComponent, ProduitComponent,OffreComponent,ModalOffreComponent, ModalProduitComponent, EmballageComponent, ModalEmballageComponent, PrixVenteComponent, ModalPrixComponent,StepperOneComponent,StepperThreeComponent,StepperTowComponent,StepperFoureComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbInputModule,
    ThemeModule,

    FormsModule,

  ],
  entryComponents:[
    ModalProduitComponent,
    ModalOffreComponent,
    ModalEmballageComponent
  ],
  providers: [
  ]
})
export class AdminModule { }
