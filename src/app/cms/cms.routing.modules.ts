import { NgModule} from '@angular/core'
import { Route, RouterModule } from '@angular/router';
import { CmsListComponent } from './cms-page/cms-list/cms-list.component';
import { CmsPageEditComponent } from './cms-page/cms-page-edit/cms-page-edit.component';
import { CmsPageComponent } from './cms-page/cms-page.component';
import { CmsComponent } from './cms/cms.component';
import { MissionSkillsComponent } from './mission-skills/mission-skills.component';
import { MissionEditComponent } from './mission/mission-edit/mission-edit.component';
import { MissionListComponent } from './mission/mission-list/mission-list.component';
import { MissionComponent } from './mission/mission.component';
import { MissionThemeComponent } from './theme/mission-theme.component';
import { UsersComponent } from './users/users.component';

const route : Route[] = [
    { path : 'cms', component : CmsComponent, children : [
        { path : 'users', component : UsersComponent},
        { path : 'cms-page', component : CmsPageComponent, children : [
            { path : '', component : CmsListComponent},
            { path : 'add', component : CmsPageEditComponent},
            { path : ':id', component : CmsPageEditComponent},
            { path : ':id/edit', component : CmsPageEditComponent}
        ]},
        { path : 'mission-skill', component : MissionSkillsComponent},
        { path : 'mission-theme', component : MissionThemeComponent},
        { path : 'mission', component : MissionComponent, children : [
            { path : '', component : MissionListComponent},
            { path : 'add', component : MissionEditComponent},
            { path : ':id/edit', component : MissionEditComponent}
        ]}
    ]}
];

@NgModule({
    imports : [
        RouterModule.forChild(route)
    ], exports : [
        RouterModule
    ]
})

export class CmsRoutingModule {

}