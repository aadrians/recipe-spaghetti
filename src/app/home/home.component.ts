import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  answerForm: FormGroup;
  submitted = false;
  success = false;

  steps = [
    {id: 1, activity:'Serve immediately...', bgcolor:'rgb(0, 146, 134)', fgcolor: 'white'},
    {id: 2, activity:'Stir in garlic until fragrant ...', bgcolor:'rgb(0, 76, 76)', fgcolor: 'white'},
    {id: 3, activity:'... cook pasta according to package instructions ...', bgcolor:'rgb(0, 171, 233)', fgcolor: 'white'},
    {id: 4, activity:'... stir in pasta and egg mixture ...', bgcolor:'rgb(0, 100, 128)', fgcolor: 'white'},
    {id: 5, activity:'... add bacon and cook until brown and crispy ...', bgcolor:'rgb(148, 194, 60)', fgcolor: 'white'},
    {id: 6, activity:'... whisk together eggs and Parmesan ...', bgcolor:'rgb(187, 190, 195)', fgcolor: 'black'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    if (!this.success){
      if (this.answerForm.invalid){
        return;
      }

      // form event log
      console.log(this.answerForm.value.name);
      this.steps.forEach(step => {
        console.log(step);
      });
      this.success = true;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
  }
}
