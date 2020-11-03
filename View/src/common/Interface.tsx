export interface IChiropractors {
    id: number;
    chiropractorId: number;
    firstName: string;
    lastname: string;
    emailAddress: string;
    phoneNumber: number;
    timeCreated: Date;

    postArray: any;
    data: any;
    values: any;
    errors: any;
}

export interface ICalendar {
    id: number;

}

export interface IProps{
    isAuthenticated: boolean;
}