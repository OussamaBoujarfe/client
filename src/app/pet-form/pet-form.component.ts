import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent implements OnInit, OnChanges {
  @Input() pet: Pet;
  @Output() save = new EventEmitter<Pet>();

  constructor(private fb: FormBuilder) {}
  
  petForm = this.fb.group({
    name: ['', [Validators.required]],
    species: ['', [Validators.required]],
    dateBirth: ['',[Validators.required]],
   // date : [''],
    dateDeath: [''],
    note: ['',[Validators.required]],
  });

  get name(): AbstractControl {
    return this.petForm.get('name');
  }
  get species(): AbstractControl {
    return this.petForm.get('species');
  }
  get dateBirth(): AbstractControl {
    return this.petForm.get('dateBirth');
  }
  get dateDeath(): AbstractControl {
    return this.petForm.get('dateDeath');
  }
  get note(): AbstractControl {
    return this.petForm.get('note');
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.petForm.patchValue(this.pet);
  }

  onSubmit(): void {
    if (this.petForm.valid) {
      this.save.emit(this.petForm.value);
    }
  }
}
