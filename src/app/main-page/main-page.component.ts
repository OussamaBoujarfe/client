import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

 filteredPets: Pet[] = [];

  constructor(private petService: PetService) {}

  async ngOnInit(): Promise<void> {

    this.filteredPets = await this.petService.getPets().then((pets) => {
      return pets.filter((pet) => {
         var dat = new Date();
        if(pet.dateDeath < (dat)) 
{
    return pet;
}
else {
    return null;
}
           })
    });
  }
}

