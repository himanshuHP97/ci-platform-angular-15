export interface UserProfile{
    id:number;
    firstName :string;
    lastName:string;
    phoneNumber:string;
    email:string;
    image:any;
}

export interface ContactUs{
  id:number;
  userId:number;
  name:string;
  email:string;
  subject:string;
  message:string;
}

export interface ChangePassword{
  id:number;
  userId:number;
  oldPassword:string;
  newPassword:string;
}
