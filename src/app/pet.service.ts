import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from './pet';

const httpOptions = {
  headers: new HttpHeaders({
    // Authorization: `Bearer 4|sBh5GPRaPQ2SmDcEQ3sasXk45sCuKubyNHkRYkeA`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private petUrl = 'http://localhost:8000/api/pets';

  constructor(private http: HttpClient) {}

  public getPets(): Promise<Pet[]> {
    return this.http.get<Pet[]>(this.petUrl, httpOptions).toPromise();
  }

  public getPet(id: number): Promise<Pet> {
    return this.http.get<Pet>(`${this.petUrl}/${id}`, httpOptions).toPromise();
  }

  public updatePet(id: number, data: Pet): Promise<Pet> {
    return this.http.put<Pet>(`${this.petUrl}/${id}`, data, httpOptions).toPromise();
  }

  public addPet(newPet: Pet): Promise<Pet> {
    return this.http.post<Pet>(this.petUrl, newPet, httpOptions).toPromise();
  }s

  public deletePet(id: number): Promise<Pet> {
    return this.http.delete<Pet>(`${this.petUrl}/${id}`, httpOptions).toPromise();
  }
}
