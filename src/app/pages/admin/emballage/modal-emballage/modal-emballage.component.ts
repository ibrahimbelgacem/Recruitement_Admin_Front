import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';
import { NB_WINDOW_CONTEXT } from '@nebular/theme/components/window/window.options';

import { Produit } from '../../produit/produit.model';
import { ProduitService } from '../../produit/produit.service';
import { Emballage } from '../emballage-model';
import { EmballageService } from '../emballage.service';

@Component({
  selector: 'ngx-modal-emballage',
  templateUrl: './modal-emballage.component.html',
  styleUrls: ['./modal-emballage.component.scss']
})
export class ModalEmballageComponent {
test:number

  btn = 'Ajouter'
  emballage: Emballage = new Emballage()
  prod !:Produit[];
  show: boolean
  motif!: string
  constructor(protected service: EmballageService,protected serviceP: ProduitService,
    protected router: Router, protected windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context) {
      
    if (context.e === '0') {
      this.emballage = context.emballage
      this.show = true
    }
    else if (context.e === '1') {
      this.show = false
    }
    else if (context.e === '2') {
      this.emballage = context.emballage
      this.btn = 'Modifier'
      this.show = false
    }
  }
getRefProduit(){
  this.serviceP.getAll().subscribe(
    data => {
      this.prod = data;
    },
    error => {
      console.log('error', error)
    }
  );
}
  save() {
    if (this.emballage.id) {
      this.service.update(this.emballage).subscribe(
        res => {
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => this.router.navigate(["/pages/admin/emballage"]));
          this.windowRef.close();
        },
        error => { console.log('error', error); }
      )
    }
    else {
      this.service.add(this.emballage).subscribe(
        res => {
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => this.router.navigate(["/pages/admin/emballage"]));
          this.windowRef.close();
        },
        error => { console.log('error', error); }
      )
    }
  }
  close() {
    this.windowRef.close();
  }

}
