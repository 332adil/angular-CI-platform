import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-edit',
  templateUrl: './mission-edit.component.html',
  styleUrls: ['./mission-edit.component.css']
})
export class MissionEditComponent implements OnInit{
  mForm : FormGroup;
  id : number;
  editMode : boolean = false;
  imageList : string[] = [];

  constructor(private missionService : MissionService, 
              private route : ActivatedRoute,
              private router : Router){}

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      this.id = param['id'];
      if(this.id){
        this.editMode = true;
      }
      this.inintForm();
    });
  }

  inintForm(){

    let imgArray = new FormArray<FormGroup>([]);

    this.mForm = new FormGroup({
      "missionTitle" : new FormControl(''),
      "missionShortDescription" : new FormControl(''),
      "missionDescription" : new FormControl(''),
      "country" : new FormControl(''),
      "city" : new FormControl(''),
      "missionOraganisationName" : new FormControl(''),
      "missionOrganisationDetail" : new FormControl(''),
      "missionStartDate" : new FormControl(''),
      "missionEndDate" : new FormControl(''),
      "missionType" : new FormControl(''),
      "totalSeats" : new FormControl(''),
      "missionRegistrationDeadline" : new FormControl(''),
      "missionTheme" : new FormControl(''),
      "missionSkills" : new FormControl(''),
      "images" : imgArray
    });

    if(this.editMode){
      this.missionService.getById(this.id).subscribe(res => {
        for(let i of res.images){
          imgArray.push(new FormGroup({
            "image" : new FormControl(i.image)
          }));
        }
        this.mForm = new FormGroup({
          "missionTitle" : new FormControl(res.missionTitle),
          "missionShortDescription" : new FormControl(res.missionShortDescription),
          "missionDescription" : new FormControl(res.missionDescription),
          "country" : new FormControl(res.country),
          "city" : new FormControl(res.city),
          "missionOraganisationName" : new FormControl(res.missionOraganisationName),
          "missionOrganisationDetail" : new FormControl(res.missionOrganisationDetail),
          "missionStartDate" : new FormControl(res.missionStartDate),
          "missionEndDate" : new FormControl(res.missionEndDate),
          "missionType" : new FormControl(res.missionType),
          "totalSeats" : new FormControl(res.totalSeats),
          "missionRegistrationDeadline" : new FormControl(res.missionRegistrationDeadline),
          "missionTheme" : new FormControl(res.missionTheme),
          "missionSkills" : new FormControl(res.missionSkills),
          "images" : imgArray
        });
      })
    }
  }

  onSubmit(){
    if(this.editMode){
      this.missionService.update(this.id, this.mForm.value);
    }else{
      this.missionService.add(this.mForm.value);
    }
    this.cancel();
  }

  get controls(){
    return (<FormArray>this.mForm.get('images')).controls;
  }

  getImage(item){
    return item.controls.image.value;
  }

  addImage(ele : HTMLInputElement){
    (<FormArray>this.mForm.get('images')).push(new FormGroup({
      "image" : new FormControl(ele.value)
    }));
  }

  removeImage(index : number){
    (<FormArray>this.mForm.get('images')).removeAt(index);
  }

  cancel(){
    this.router.navigate(['cms','mission']);
  }
}
