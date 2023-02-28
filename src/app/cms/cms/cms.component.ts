import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements AfterViewInit{

  @ViewChild(MatSidenav) sidenav : MatSidenav;
  currentDate : Date = new Date();

  constructor(private observer : BreakpointObserver){}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width : 800px)']).subscribe(res => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
