export interface Login {
  id:number;
  email:string;
  password:string;
}

export interface ResetPassword{
  id:number;
  userId:number;
  email:string;
  message:string;
}

export interface ForgotPassword{
  id:number;
  userId:number;
  newPassword:string;
  confirmPassword:string;
}


export interface User {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  userImage: string;
  employee_id: number;
  manager: string
  title: string
  department: string;
  profileText: string;
  volunteerText: string
  city: number;
  country: number;
  skills: string[]
  status: string;
  role: string[];
}

export interface ContactUs {
  id: number;
  userId: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ChangePassword {
  id: number;
  userId: number;
  oldPassword: string;
  newPassword: string;
}

export class UserModel {
  constructor(
    public email: string,
    public id: string,
    private _token: any,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
