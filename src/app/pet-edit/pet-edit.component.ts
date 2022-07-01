import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css'],
})
export class PetEditComponent implements OnInit {
  pet = new Pet();
  msg = "";

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      await this.petService.getPet(+id)
      .then((data) => {
        this.pet = data;
      })
      .catch((error) => {
        console.log(error);
        this.msg = "Oops! Are you sure this pet exists?";
      });
    }
  }

  formatDate = (date) => {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    return (y + "-" + m + "-" + d);
  }
  
 
  async handleSave(pet: Pet): Promise<void> {
    if (this.pet.id) {
      await this.petService.updatePet(this.pet.id, pet);
      this.location.back();
    } else {
     
      await this.petService.addPet(pet);
      this.router.navigate(['/pets']);
    }
  }
}
