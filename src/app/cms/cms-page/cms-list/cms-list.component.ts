import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmsPageList } from '../cms-list.model';
import { CmsPageService } from '../cms-page.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-cms-list',
  templateUrl: './cms-list.component.html',
  styleUrls: ['./cms-list.component.css']
})
export class CmsListComponent implements OnInit, AfterViewInit{
  cmsList : CmsPageList[] = [];
  color = 'rgb(223, 223, 222)';
  dataSource = new MatTableDataSource(this.cmsList);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['demo-title','demo-status','demo-action'];

  constructor(private cmsPageService : CmsPageService,
              private router : Router, private route : ActivatedRoute,
              private dialog : MatDialog){}

  ngOnInit(): void {

    this.cmsPageService.cmsPageChanged.subscribe(res => {
      this.cmsPageService.getAll().subscribe(res => {
        this.cmsList = res;
        this.dataSource = new MatTableDataSource(this.cmsList);
        this.dataSource.paginator = this.paginator;
      });
    });

    this.cmsPageService.getAll().subscribe(res => {
      this.cmsList = res;
      this.dataSource = new MatTableDataSource(this.cmsList);
      this.dataSource.paginator = this.paginator;
    });
     
  }

  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
  }

  filterData(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  addCmsPage(){
    this.router.navigate(['add'], { relativeTo : this.route });
  }

  edit(id : number){
    this.router.navigate([id,'edit'], { relativeTo : this.route });
  }

  delete(id : number){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width : '350px',
      height : '200px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res.event == 'delete'){
        this.cmsPageService.delete(id);
      }
    });
  }
}
