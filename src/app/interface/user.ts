export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  userImage: string;
  employee_id: number;
  department: string;
  cityId: number;
  countryId: number;
  profileText: string;
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
