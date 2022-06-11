import { OffreService } from './../../../shared/services/offre/offre.service';
import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ModalOffreComponent } from './modal-offre/modal-offre.component';
import { Offre } from '../../../shared/models/offre.model';

@Component({
  selector: 'ngx-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
source:Offre[]
  constructor(private windowService: NbWindowService,
    private service: OffreService) { }

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
      titre: {
        title: 'titre',
        type: 'string',
      },
      descriptionBesoin: {
        title: 'description besoin',
        type: 'string'
      },
      descriptionOffre: {
        title: 'description',
        type: 'string',
      },
       dateSoumission: {
        title: 'date soumission',
        type: 'Date',

      },

      dateCloture: {
        title: 'Date cloture',
        type:'Date'
      /*//////
        valuePrepareFunction(cell) {
          return cell.diplome
        }*/
      },
      competencesRequises: {
        title: 'competence requise',
        type: 'string',

      },
      profilCherche: {
        title: 'profil cherché',
        type: 'string'

      }

    }
  };
  onCustom(event): any {
    if (event.action === 'editAction') {
      this.windowService.open(ModalOffreComponent, {
        title: 'Modifier cet offre',
        context: { offre : event.data, e : '2' }
      });
    }
    if (event.action === 'showAction') {
      this.windowService.open(ModalOffreComponent, {
        title: 'Détails offre',
        context: { offre: event.data,e : '0'}
      });
    }
  }
  openWindow() {
    this.windowService.open(ModalOffreComponent,
      {
        title: 'Ajouter un nouvel offre',
        context: { e : '1' }
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Vous êtes sure de supprimer ce offre ?`)) {
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
