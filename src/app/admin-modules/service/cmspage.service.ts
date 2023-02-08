import { Cmspage } from './../interface/cmspage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CmspageService {
  constructor(private http: HttpClient) {}

  getPages(): Observable<Cmspage[]> {
    return this.http.get<Cmspage[]>(`http://localhost:3000/cmspages`);
  }

  getPage(id: number): Observable<Cmspage> {
    return this.http.get<Cmspage>(`http://localhost:3000/cmspages/${id}`);
  }

  createPage(cmspage: Cmspage): Observable<Cmspage> {
    return this.http.post<Cmspage>(`http://localhost:3000/cmspages`, cmspage);
  }

  updatePage(cmspage: Cmspage): Observable<Cmspage> {
    return this.http.put<Cmspage>(
      `http://localhost:3000/cmspages/${cmspage.id}`,
      cmspage
    );
  }

  deletePage(id: number): Observable<Cmspage> {
    return this.http.delete<Cmspage>(`http://localhost:3000/cmspages/${id}`);
  }
}
