import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MissionSkillsService } from '../mission-skills.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-mission-skill-edit',
  templateUrl: './mission-skill-edit.component.html',
  styleUrls: ['./mission-skill-edit.component.css']
})
export class MissionSkillEditComponent implements OnInit{

  @ViewChild('f') sForm : NgForm;

  constructor(private missionSkillService : MissionSkillsService,
            @Inject(MAT_DIALOG_DATA) public data : {id : number},
            private dialogRef : MatDialogRef<MissionSkillEditComponent>){
              dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    if(this.data.id > 0){
      this.missionSkillService.getById(this.data.id).subscribe(res => {
        this.sForm.setValue({
          title : res.title,
          status : res.status
        });
      });
    }else {
      this.sForm.setValue({
        title : '',
        status : 0
      });
    }
  }

  onSubmit(form : NgForm){
    if(this.data.id > 0){
      this.missionSkillService.update(this.data.id, form.value);
    }else {
      this.missionSkillService.add(form.value);
    }
    this.closeDialog();
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
