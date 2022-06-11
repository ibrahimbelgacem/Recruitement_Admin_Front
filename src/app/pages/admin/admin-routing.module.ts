import { StepperTowComponent } from './../../condidature/stepper-2/stepper-tow.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperOneComponent } from '../../condidature/stepper-1/stepper-one.component';
import { EmballageComponent } from './emballage/emballage.component';
import { OffreComponent } from './offre/offre.component';
import { ProduitComponent } from './produit/produit.component';
import { StepperThreeComponent } from '../../condidature/stepper-3/stepper-three.component';
import { StepperFoureComponent } from '../../condidature/stepper-4/stepper-foure.component';

const routes: Routes = [
  {
    path: 'produit',
    component: ProduitComponent,
},
{
  path: 'offres',
  component: OffreComponent,
},
{
  path: 'postuler',
  component: StepperOneComponent,
},
{
  path: 'emballage',
  component: EmballageComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
