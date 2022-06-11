import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PagesComponent } from "../../pages.component";
import { Produit } from "./produit.model";

@Injectable({
    providedIn: 'root'
  })
  export class ProduitService {

    url = PagesComponent.urlConfigAdmin + 'products';
   constructor(protected httpClient: HttpClient) { }
    getAll() {
      return this.httpClient.get<Produit[]>(this.url);
    }
    getById(id: number) {
      return this.httpClient.get<Produit>(this.url + '/' + id);
    }

    add(produit: Produit) {
      return this.httpClient.post(this.url, produit);
    }
    update(produit: Produit) {
      return this.httpClient.put(this.url + '/' + produit.id, produit);
    }
    delete(id: Number) {
      return this.httpClient.delete(this.url + '/' + id);
    }
  }
