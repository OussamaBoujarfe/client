import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  
  selectedPet: Pet;
  msg = "";

  constructor(private petService: PetService, 
    private SpinnerService: NgxSpinnerService) {}

  async ngOnInit(): Promise<void> {
    this.SpinnerService.show();  
    await this.petService.getPets()
    .then((data) => {
      this.pets = data;
      this.SpinnerService.hide();
    })
    .catch((error) => {
      this.SpinnerService.hide();
      console.log(error);
      this.msg = "Oops! something happened. Try adding a new pet or refresh the page."
    });
  }

  handleSave(pet): void {
    Object.assign(this.selectedPet, pet);
    this.selectedPet = null;
  }
}
