export interface User {
  id: number;
  firstname: string;
  lastname: string;
  employee_id: number;
  manager: string
  title: string
  department: string;
  profileText: string;
  volunteerText: string
  city: number;
  country: number;
  skills: string[]
  email: string;
  password: string;
  userImage: string;
  status: string;
  role: string[];
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
