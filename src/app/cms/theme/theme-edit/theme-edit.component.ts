import { Component, Inject, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemeService } from '../theme.service';

@Component({
    selector : 'app-theme-edit',
    templateUrl : 'theme-edit.component.html',
    styleUrls : ['theme-edit.component.css']
})

export class ThemeEditComponent {
    @ViewChild('f') sForm : NgForm;

    constructor(private themeService : ThemeService,
                @Inject(MAT_DIALOG_DATA) public data : {id : number},
                private dialogRef : MatDialogRef<ThemeService>){
                dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        if(this.data.id > 0){
        this.themeService.getById(this.data.id).subscribe(res => {
            this.sForm.setValue({
            name : res.name,
            status : res.status
            });
        });
        }
        else {
        this.sForm.setValue({
            name : '',
            status : 0
        });
        }
    }

    onSubmit(form : NgForm){
        if(this.data.id > 0){
        this.themeService.update(this.data.id, form.value);
        }else {
        this.themeService.add(form.value);
        }
        this.closeDialog();
    }

    closeDialog(){
        this.dialogRef.close();
    }
}