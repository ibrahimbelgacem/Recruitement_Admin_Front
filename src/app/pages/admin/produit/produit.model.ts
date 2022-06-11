import { Emballage } from "../emballage/emballage-model"

export class Produit {
  id : number
  reference : string
  name : string
  price : number
  quantity : number
  conditionings:Emballage
}