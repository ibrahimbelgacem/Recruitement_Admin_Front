import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagesComponent } from '../../pages.component';
import { PrixVente } from './PrixVente.model';

@Injectable({
  providedIn: 'root'
})
export class PrixVenteService {

  url = PagesComponent.urlConfigAdmin + 'SellingPrice';
  constructor(protected httpClient: HttpClient) { }
   getAll() {
     return this.httpClient.get<PrixVente[]>(this.url);
   }
   getById(id: number) {
     return this.httpClient.get<PrixVente>(this.url + '/' + id);
   }

   add(prixVente: PrixVente) {
     return this.httpClient.post(this.url, prixVente);
   }
   update(prixVente: PrixVente) {
     return this.httpClient.put(this.url + '/' + prixVente.id, prixVente);
   }
   delete(id: Number) {
     return this.httpClient.delete(this.url + '/' + id);
   }
}
