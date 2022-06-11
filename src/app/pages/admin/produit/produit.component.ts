import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { Emballage } from '../emballage/emballage-model';
import { EmballageComponent } from '../emballage/emballage.component';
import { EmballageService } from '../emballage/emballage.service';
import { ModalProduitComponent } from './modal-produit/modal-produit.component';
import { Produit } from './produit.model';
import { ProduitService } from './produit.service';

@Component({
  selector: 'ngx-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  source: Produit[];
  sourceEmb: Emballage[]
  constructor(private windowService: NbWindowService,
    private service: ProduitService,private serviceEmb:EmballageService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => {
        this.source = data;
        console.log(this.source)
      },
      error => {
        console.log('error', error)
      }
    );
    this.serviceEmb.getAll().subscribe(
      data => {
        this.sourceEmb = data;
      },
      error => {
        console.log('error', error)
      }
    );
  }
getEmballage(){
  this.serviceEmb.getAll().subscribe(
    data => {
      this.sourceEmb = data;
    },
    error => {
      console.log('error', error)
    }
  );
}
  settings = {
  
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      position: 'right',
      add: false,
      edit: false,
      custom: [
        {
          name: 'showAction',
          title: '<i class="nb-sunny" title="Consulter" i18n="@@consulter"></i>',
        },
        {
          name: 'editAction',
          title: '<i class="nb-edit" title="Editer" i18n="@@editer"></i>',
          confirm: true
        },
      ],
    },
    columns: {
      reference: {
        title: 'Référence',
        type: 'number',
      },
      name: {
        title: 'Désignation',
        type: 'string'
      },
      price: {
        title: 'Prix',
        type: 'number',
      },
      quantity: {
        title: 'Quantité',
        type: 'number',
        
      },

      conditionings: {
        title: 'Emballage',
        valuePrepareFunction(cell) {
          return cell.packing
        }
      }
     
    }
  };
  onCustom(event): any {
    if (event.action === 'editAction') {
      this.windowService.open(ModalProduitComponent, {
        title: 'Modifier ce produit',
        context: { produit : event.data, e : '2' }
      });
    }
    if (event.action === 'showAction') {
      this.windowService.open(ModalProduitComponent, {
        title: 'Détails produit',
        context: {
          produit: event.data,
          e : '0'
        }
      });
    }
  }
  openWindow() {
    this.windowService.open(ModalProduitComponent,
      {
        title: 'Ajouter un nouveau produit',
        context: { e : '1' }
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sure de supprimer ce produit ?`)) {
      event.confirm.resolve(this.service.delete(event.data.id).subscribe(
        data => {
          this.source.filter(p => p !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }
}