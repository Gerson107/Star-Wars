import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 private apiURL = 'https://swapi.dev/api/films/';
 constructor(private http: HttpClient) { }
 getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiURL)
 }
 getDetails(id:number){}
}
