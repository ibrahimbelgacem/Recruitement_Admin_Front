import { StepperOneComponent } from './../../../../condidature/stepper-1/stepper-one.component';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';
import { NB_WINDOW_CONTEXT } from '@nebular/theme/components/window/window.options';
import { OffreService } from '../../../../shared/services/offre/offre.service';
import { Offre } from '../../../../shared/models/offre.model';

@Component({
  selector: 'ngx-modal-offre',
  templateUrl: './modal-offre.component.html',
  styleUrls: ['./modal-offre.component.scss']
})
export class ModalOffreComponent implements OnInit {

  btn = 'Ajouter'

  offre: Offre = new Offre()
  show: boolean

  constructor(protected service: OffreService,
    protected router: Router, protected windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context) {
    if (context.e === '0') {
      this.offre = context.offre
      this.btn = 'demander plus de details'
      this.show = false
      console.log("offre selectionné est:"+context.offre.id)
    }
    else if (context.e === '1') {
      this.show = false
    }
    else if (context.e === '2') {
      this.offre = context.offre
      this.btn = 'Modifier'
      this.show = false
    }
  }
  ngOnInit(): void {

  }
  save() {
    if (this.offre.id) {
      this.service.update(this.offre).subscribe(
        res => {
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => this.router.navigate(["/pages/admin/offres"]));
          this.windowRef.close();
        },
        error => { console.log('error', error); }
      )
    }
    else {

      this.service.add(this.offre).subscribe(
        res => {
          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() => this.router.navigate(["/pages/admin/offres"]));
          this.windowRef.close();
        },
        error => { console.log('e rror', error); }
      )
    }
  }

  close() {
    this.windowRef.close();
  }
valider(){
  this.offre.validationResponsable=false
  this.service.demandeDetail(this.offre).subscribe(
    res => {
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate(["/pages/admin/offres"]));
      this.windowRef.close();
    },
    error => { console.log('error', error); }
  )
}
}
