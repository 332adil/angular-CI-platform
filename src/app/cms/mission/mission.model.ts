import { Documents } from "src/app/platform-landing/documents.model";

export class Mission {
    id : number;
    missionTitle : string;
    missionShortDescription : string;
    missionDescription : string;
    country : string;
    city : string;
    missionOraganisationName : string;
    missionOrganisationDetail : string;
    missionStartDate : Date;
    missionEndDate : Date;
    missionType : string;
    totalSeats : number;
    missionRegistrationDeadline : Date;
    missionTheme : string;
    missionSkills : string[];
    images : Image[];
    documents : Documents[];
    enter_date : Date;
}

export class Image {
    image : string;
}