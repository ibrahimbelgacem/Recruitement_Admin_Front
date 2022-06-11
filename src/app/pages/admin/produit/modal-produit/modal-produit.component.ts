import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';
import { NB_WINDOW_CONTEXT } from '@nebular/theme/components/window/window.options';
import { Emballage } from '../../emballage/emballage-model';
import { EmballageService } from '../../emballage/emballage.service';
import { Produit } from '../produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'ngx-modal-produit',
  templateUrl: './modal-produit.component.html',
  styleUrls: ['./modal-produit.component.scss']
})
export class ModalProduitComponent implements OnInit{
  btn = 'Ajouter'
  produit: Produit = new Produit()
  show: boolean
  emb:Emballage[]
  constructor(protected service: ProduitService,protected serviceEmb: EmballageService,
    protected router: Router, protected windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context) {
    if (context.e === '0') {
      this.produit = context.produit
      this.show = true
    }
    else if (context.e === '1') {
      this.show = false
    }
    else if (context.e === '2') {
      this.produit = context.produit
      this.btn = 'Modifier'
      this.show = false
    }
  }
  ngOnInit(): void {
   this.serviceEmb.getAll().subscribe(data => {
    this.emb= data;
    console.log(this.emb)
  },)
  
  }
  save() {
    if (this.produit.id) {
      this.service.update(this.produit).subscribe(
        res => {
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => this.router.navigate(["/pages/admin/produit"]));
          this.windowRef.close();
        },
        error => { console.log('error', error); }
      )
    }
    else {
      console.log(this.produit.conditionings);
      this.service.add(this.produit).subscribe(
        res => {
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => this.router.navigate(["/pages/admin/produit"]));
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
