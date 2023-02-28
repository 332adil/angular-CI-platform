import { Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ThemeEditComponent } from './theme-edit/theme-edit.component';
import { ThemeService } from './theme.service';

export class Theme {
    name : string;
    status : number;
}

@Component({
    selector : 'app-mission-theme',
    templateUrl : 'mission-theme.component.html',
    styleUrls : ['mission-theme.component.css']
})

export class MissionThemeComponent {
  displayedColumns: string[] = ['Theme-Name', 'Status','Action'];
  color = 'rgb(223, 223, 222)';

  theme : Theme[] = [];
  dataSource = new MatTableDataSource(this.theme);
  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private dialog : MatDialog, private themeService : ThemeService){}

  ngOnInit(): void {
    this.themeService.getAll().subscribe(res => {
      this.theme = res;
      this.dataSource = new MatTableDataSource(this.theme);
      this.dataSource.paginator = this.paginator;
    });
  }

  addTheme(){
    const dialogRef = this.dialog.open(ThemeEditComponent, {
      width : '500px',
      height : 'auto',
      data : {id : 0}
    });

    this.loadData(dialogRef);
  }

  edit(id : number){
    const dialogRef = this.dialog.open(ThemeEditComponent, {
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
        this.themeService.delete(id);
        this.themeService.getAll().subscribe(res => {
          this.theme = res;
          this.dataSource = new MatTableDataSource(this.theme);
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
        this.themeService.getAll().subscribe(res => {
        this.theme = res;
        this.dataSource = new MatTableDataSource(this.theme);
        this.dataSource.paginator = this.paginator;
        });
    });
    }
}