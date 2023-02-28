import { Component } from '@angular/core';
import { Mission } from '../mission.model';
import { MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent{
  color = 'rgb(223, 223, 222)';
  displayedColumns: string[] = ['title','theme', 'start-date','end-date','action'];
  mission : Mission[] = [];
  dataSource = new MatTableDataSource(this.mission);

  constructor(private missionService : MissionService,
    private router : Router, private route : ActivatedRoute,
    private dialog : MatDialog){}

  ngOnInit(): void {

    this.missionService.getAll().subscribe(res => {
      this.mission = res;
      this.dataSource = new MatTableDataSource(this.mission);
      //this.dataSource.paginator = this.paginator;
    });
     
  }

  redirectToAdd(){
    this.router.navigate(['add'], {relativeTo : this.route});
  }

  edit(id : number){
    this.router.navigate([id,'edit'], {relativeTo : this.route});
  }
}
