import { Produit } from "../produit/produit.model"

export class PrixVente{
    
    id:number
	firstPrice:number
	primaryMaterialPrice:number
	profitMargin:number
	promotion:number
	productionCost:number
	promotionPrice:number
	products:Produit[]
}