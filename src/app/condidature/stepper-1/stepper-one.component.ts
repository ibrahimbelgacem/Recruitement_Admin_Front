import { Offre } from './../../shared/models/offre.model';
import { CandidatService } from './../../shared/services/candidat/candidat.service';
import { Candidat } from '../../shared/models/candidat';
import { Diplome } from './../../shared/models/diplome';
import { Stage } from './../../shared/models/stage';
import { Condidature } from './../../shared/models/condidature';
import { CandidatureService } from './../../shared/services/candidature/candidature.service';
import { ExperienceService } from './../../shared/services/experience/experience.service';
import { StageService } from './../../shared/services/stage/stage.service';
import { DiplomeService } from './../../shared/services/diplome/diplome.service';
import { NB_WINDOW_CONTEXT } from '@nebular/theme/components/window/window.options';
import { NbWindowRef } from '@nebular/theme';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Experience } from '../../shared/models/experience';

@Component({
  selector: 'ngx-stepper-one',
  templateUrl: './stepper-one.component.html',
  styleUrls: ['./stepper-one.component.scss']
})
export class StepperOneComponent implements OnInit {
  candidature: Condidature = new Condidature()
  stage: Stage = new Stage()
  experience: Experience = new Experience()
  diplome: Diplome = new Diplome()
  candidat:Candidat=new Candidat()
  offre:Offre
  productForm: FormGroup;

    name='Ibrahim'
    constructor(private fb: FormBuilder, protected candidatureService: CandidatureService,
      protected stageService: StageService, protected experienceService: ExperienceService,
      protected diplomeService: DiplomeService,protected candidatService:CandidatService,
      protected router: Router) {

    }
  ngOnInit() {
    this.productForm = this.fb.group({
      name: '',
      experiences: this.fb.array([]),
      stages: this.fb.array([]),
      diplomes: this.fb.array([]),
      competences: this.fb.array([]),
    });

      //candidats:this.fb.array([]),

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
      date_entre: '',
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
