import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-stepper-three',
  templateUrl: './stepper-three.component.html',
  styleUrls: ['./stepper-three.component.scss']
})
export class StepperThreeComponent implements OnInit {
  productForm: FormGroup;
  name='Ibrahim'
  constructor(private fb: FormBuilder, protected router: Router) {
    this.productForm = this.fb.group({
      name: '',
      experiences: this.fb.array([]),
      stages: this.fb.array([]),
      diplomes: this.fb.array([]),
      competences: this.fb.array([]),
    });
  }
ngOnInit() {

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
newExperience(): FormGroup {
  return this.fb.group({
    qualification: '',
    mission: '',
    date_entre: '',
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

onSubmit() {
  console.log(this.productForm.value);
}

/*   save() {
  this.candidatureService.add(this.candidature).subscribe(
    res => {
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate(["/pages/admin/offres"]));
      this.windowRef.close();
    },
    error => { console.log('e rror', error); }
  )
} */
}

