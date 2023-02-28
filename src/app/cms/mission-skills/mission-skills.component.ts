import { Component , OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MissionSkills } from './mssion-skills.model';
import { MatDialog} from '@angular/material/dialog';
import { MissionSkillEditComponent } from './mission-skill-edit/mission-skill-edit.component';
import { MissionSkillsService } from './mission-skills.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mission-skills',
  templateUrl: './mission-skills.component.html',
  styleUrls: ['./mission-skills.component.css']
})
export class MissionSkillsComponent implements OnInit{
  displayedColumns: string[] = ['Skill-Name', 'Status','Action'];
  color = 'rgb(223, 223, 222)';

  skills : MissionSkills[] = [];
  dataSource = new MatTableDataSource(this.skills);
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private dialog : MatDialog, private missionSkillService : MissionSkillsService){}

  ngOnInit(): void {
    this.missionSkillService.getAll().subscribe(res => {
      this.skills = res;
      this.dataSource = new MatTableDataSource(this.skills);
      this.dataSource.paginator = this.paginator;
    });
  }

  addSkills(){
    const dialogRef = this.dialog.open(MissionSkillEditComponent, {
      width : '500px',
      height : 'auto',
      data : {id : 0}
    });

    this.loadData(dialogRef);
  }

  edit(id : number){
    const dialogRef = this.dialog.open(MissionSkillEditComponent, {
      width : '500px',
      height : 'auto',
      data : {id : id}
    });
    this.loadData(dialogRef);
  }

  delete(id : number){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width : '350px',
      height : '200px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res.event == 'delete'){
        this.missionSkillService.delete(id);
        this.missionSkillService.getAll().subscribe(res => {
          this.skills = res;
          this.dataSource = new MatTableDataSource(this.skills);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  filterData(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  loadData(dialogRef){
    dialogRef.afterClosed().subscribe(res => {
      this.missionSkillService.getAll().subscribe(res => {
        this.skills = res;
        this.dataSource = new MatTableDataSource(this.skills);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
}
