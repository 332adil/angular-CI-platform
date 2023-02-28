import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CmsPageService } from '../cms-page.service';

@Component({
  selector: 'app-cms-page-edit',
  templateUrl: './cms-page-edit.component.html',
  styleUrls: ['./cms-page-edit.component.css']
})
export class CmsPageEditComponent implements OnInit{
  cForm : FormGroup;
  id : number;
  headerTitle : string = 'Add';
  editMode : boolean = false;
  constructor(private cmsPageService : CmsPageService, 
              private router : Router,
              private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
      if(this.id){
        this.editMode = true;
        this.headerTitle = 'Edit'
      }
      this.initForm();
    });
    
  }

  initForm(){

    let title = '', description = '',  slug = '', status = 0;
    if(this.editMode){
      this.cmsPageService.getById(this.id).subscribe(res => {
        this.cForm = new FormGroup({
          'id' : new FormControl(0),
          'title' : new FormControl(res.title),
          'description' : new FormControl(res.description),
          'slug' : new FormControl(res.slug),
          'status' : new FormControl(res.status)
        });
      });
    }else{
      this.cForm = new FormGroup({
        'id' : new FormControl(0),
        'title' : new FormControl(''),
        'description' : new FormControl(''),
        'slug' : new FormControl(''),
        'status' : new FormControl(0)
      });
    }
  }

  onSubmit(){
    if(this.editMode){
      this.cmsPageService.update(this.id, this.cForm.value);
    }else{
      this.cmsPageService.add(this.cForm.value);
    }
    this.router.navigate(['cms','cms-page']);
  }

  redirectToList(){
    this.router.navigate(['cms','cms-page']);
  }
}
