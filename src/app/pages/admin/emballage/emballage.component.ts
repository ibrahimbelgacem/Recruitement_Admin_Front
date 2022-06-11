import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { Emballage } from './emballage-model';
import { EmballageService } from './emballage.service';
import { ModalEmballageComponent } from './modal-emballage/modal-emballage.component';

@Component({
  selector: 'ngx-emballage',
  templateUrl: './emballage.component.html',
  styleUrls: ['./emballage.component.scss']
})
export class EmballageComponent implements OnInit {
source:Emballage[]
btn = 'Ajouter'
  emballage: Emballage = new Emballage()
  constructor(private windowService: NbWindowService,
    private service: EmballageService,protected router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      data => {
        this.source = data;
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
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>', //how to call some function to this one
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true,
   },
    actions: {
      position: 'right',
      add: true,
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
      packing: {
        title: 'packing',
        type: 'string',
      },
       produit: {
        title: 'Produit',
        valuePrepareFunction(cell) {
          return cell.id
        }
      } 
    }

  };
  onCustom(event): any {
    if (event.action === 'editAction') {
      this.windowService.open(ModalEmballageComponent, {
        title: 'Modifier cet emballage',
        context: { emballage : event.data, e : '2' }
      });
    }
    if (event.action === 'showAction') {
      this.windowService.open(ModalEmballageComponent, {
        title: 'Détails emballage',
        context: { emballage: event.data,  e : '0'  }
      });
    }
  }
  openWindow() {
    this.windowService.open(ModalEmballageComponent,
      {
        title: 'Ajouter un nouveau emballage',
        context: { e : '1' }
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sure de supprimer cet emballage ?`)) {
      event.confirm.resolve(this.service.delete(event.data.id).subscribe(
        data => {
          this.source.filter(emb => emb !== event.data);
        }),
      );
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event):void {   
    
    var data = {"id":0,
      "packing" : event.newData.packing,
      "produit":event.newData.produit,
                };
      this.service.add(data).subscribe(
        res => {
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => this.router.navigate(["/pages/admin/emballage"]));
          
        },
        error => { console.log('error', error); }
      )
    
  }
  


}
