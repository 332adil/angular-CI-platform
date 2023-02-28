import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CmsComponent } from './cms/cms.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmsRoutingModule } from './cms.routing.modules';
import { UsersComponent } from './users/users.component';
import { CmsPageComponent } from './cms-page/cms-page.component';
import { CmsPageEditComponent } from './cms-page/cms-page-edit/cms-page-edit.component';
import { CmsListComponent } from './cms-page/cms-list/cms-list.component';
import { CmsPageService } from './cms-page/cms-page.service';
import { AngularEditorModule} from '@kolkov/angular-editor';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MissionSkillsComponent } from './mission-skills/mission-skills.component';
import { MissionSkillEditComponent } from './mission-skills/mission-skill-edit/mission-skill-edit.component';
import { MissionComponent } from './mission/mission.component';
import { MissionListComponent } from './mission/mission-list/mission-list.component';
import { MissionEditComponent } from './mission/mission-edit/mission-edit.component';
import { MissionThemeComponent } from './theme/mission-theme.component';
import { ThemeEditComponent } from './theme/theme-edit/theme-edit.component';

@NgModule({
  declarations: [
    SidebarComponent,
    CmsComponent,
    UsersComponent,
    CmsPageComponent,
    CmsPageEditComponent,
    CmsListComponent,
    DeleteDialogComponent,
    MissionSkillsComponent,
    MissionSkillEditComponent,
    MissionComponent,
    MissionListComponent,
    MissionEditComponent,
    MissionThemeComponent,
    ThemeEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CmsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule
  ],
  providers : [CmsPageService]
})
export class CmsModule { }
