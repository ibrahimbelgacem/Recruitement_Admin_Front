import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-stepper-tow',
  templateUrl: './stepper-tow.component.html',
  styleUrls: ['./stepper-tow.component.scss']
})
export class StepperTowComponent implements OnInit {

  productForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: '',
      experiences: this.fb.array([]) ,
      stages: this.fb.array([]) ,
      diplomes: this.fb.array([]) ,
      competences: this.fb.array([]) ,
    });
  }
  experiences() : FormArray {
    return this.productForm.get("experiences") as FormArray
  }
  stages() : FormArray {
    return this.productForm.get("stages") as FormArray
  }
  diplomes() : FormArray {
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

  removeExperience(i:number) {
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

  removeStage(i:number) {
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

  removeDiplome(i:number) {
    this.diplomes().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }





  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
}
