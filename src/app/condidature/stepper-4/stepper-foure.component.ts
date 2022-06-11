import { Candidat } from './../../shared/models/candidat';
import { Condidature } from './../../shared/models/condidature';
import { Router } from '@angular/router';
import { CandidatService } from './../../shared/services/candidat/candidat.service';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-stepper-foure',
  templateUrl: './stepper-foure.component.html',
  styleUrls: ['./stepper-foure.component.scss']
})
export class StepperFoureComponent  {
  candidature: Condidature = new Condidature()
  candidat:Candidat=new Candidat()

  name = 'Angular';

  productForm: FormGroup;

  constructor(private fb:FormBuilder,protected candidatService:CandidatService,
    protected router: Router) {

    this.productForm = this.fb.group({
      name: '',
      experiences: this.fb.array([]) ,
      diplomes:this.fb.array([]) ,
      stages:this.fb.array([]) ,
      competences:this.fb.array([]) ,
    });
  }

  experiences(): FormArray {
    return this.productForm.get("experiences") as FormArray
  }
  stages(): FormArray {
    return this.productForm.get("stages") as FormArray
  }
  diplomes(): FormArray {
    return this.productForm.get("diplomes") as FormArray
  }
  competences(): FormArray {
    return this.productForm.get("competences") as FormArray
  }
  newExperience(): FormGroup {
    return this.fb.group({
      qualification: '',
      mission: '',
      date_entree: '',
      date_sortie: '',
      societe: '',
    })
  }

  addExperience() {
    this.experiences().push(this.newExperience());
  }

  removeExperience(i: number) {
    this.experiences().removeAt(i);
  }
  newStage(): FormGroup {
    return this.fb.group({
      titre: '',
      mission: '',
      date_entree: '',
      date_sortie: '',
      societe: '',
    })
  }
  addStage() {
    this.stages().push(this.newStage());
  }

  removeStage(i: number) {
    this.stages().removeAt(i);
  }


  newDiplome(): FormGroup {
    return this.fb.group({
      titre: '',
      specialite: '',
      etablissement:'',
    })
  }
  addDiplome() {
    this.diplomes().push(this.newDiplome());
  }

  removeDiplome(i: number) {
    this.diplomes().removeAt(i);
  }
  newCompetence(): FormGroup {
    return this.fb.group({
      niveau: '',
      domaine: '',
    })
  }
  addCompetence() {
    this.competences().push(this.newCompetence());
  }

  removeCompetence(i: number) {
    this.competences().removeAt(i);
  }
  onSubmit() {
    console.log(this.productForm.value);
  }

   save() {

    this.candidatService.add(this.candidat).subscribe(
      res => {
        this.router
          .navigateByUrl("/", { skipLocationChange: true })
          .then(() => this.router.navigate(["/pages/admin/offres"]));

      },
      error => { console.log('e rror', error); }
    )
  }
}
