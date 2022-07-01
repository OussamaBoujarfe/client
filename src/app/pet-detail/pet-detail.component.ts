import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit {
  pet = new Pet();
  msg = "";

  constructor(
    private petService: PetService, 
    private route: ActivatedRoute, 
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SpinnerService.show();  
    await this.petService.getPet(id)
    .then((data) => {
      this.pet = data;
      this.SpinnerService.hide(); 
    })
    .catch((error) => {
      this.SpinnerService.hide(); 
      console.log(error);
      this.msg = "Oops! Are you sure this pet exists? Try adding a new one.";
    });
  }

  async handleDelete(): Promise<void> {
    await this.petService.deletePet(this.pet.id);
    this.router.navigate(['/pets']);
  }
}
