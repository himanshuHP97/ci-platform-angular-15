import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { User } from '../interface/user';
import { Story } from '../interface/story';
import { Cmspage } from '../interface/cmspage';
import { Mission } from '../interface/mission';
import { Missionskills } from '../interface/missionskills';
import { Missiontheme } from '../interface/missiontheme';
import { Missionapplication } from '../interface/missionapplication';
import { environment } from 'src/environments/environment';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  readonly apiurl = environment.baseurl;
  constructor(private http: HttpClient) { }

  //#region API Endpoints for Admin Panel
  //#endregion

  //#region CMS Page API Endpoints
  getPages(): Observable<Cmspage[]> {
    return this.http.get<Cmspage[]>(`${this.apiurl}/cmspages`,{
      context: withCache()
    });
  }

  getPage(id: number): Observable<Cmspage> {
    return this.http.get<Cmspage>(`${this.apiurl}/cmspages/${id}`);
  }

  createPage(cmspage: Cmspage): Observable<Cmspage> {
    return this.http.post<Cmspage>(`${this.apiurl}/cmspages`, cmspage);
  }

  updatePage(cmspage: Cmspage): Observable<Cmspage> {
    return this.http.put<Cmspage>(`${this.apiurl}/cmspages/${cmspage.id}`, cmspage);
  }

  deletePage(id: number): Observable<Cmspage> {
    return this.http.delete<Cmspage>(`${this.apiurl}/cmspages/${id}`);
  }
  //#endregion

  //#region Login
  getLogin(user: User): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiurl}/users`);
  }
  //#endregion

  //#region User API Endpoints
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiurl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiurl}/users/${id}`);
  }

  createUser(User: User): Observable<User> {
    return this.http.post<User>(`${this.apiurl}/users`, User);
  }

  updateUser(User: User): Observable<User> {
    return this.http.put<User>(`${this.apiurl}/users/${User.id}`, User);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiurl}/users/${id}`);
  }
  //#endregion

  //#region Mission Skill API Endpoints
  getMissionSkills(): Observable<Missionskills[]> {
    return this.http.get<Missionskills[]>(`${this.apiurl}/missionskills`);
  }

  getMissionSkill(id: number): Observable<Missionskills> {
    return this.http.get<Missionskills>(`${this.apiurl}/missionskills/${id}`);
  }

  createMissionSkill(skill: Missionskills): Observable<Missionskills> {
    return this.http.post<Missionskills>(`${this.apiurl}/missionskills`, skill);
  }

  updateMissionSkill(skill: Missionskills): Observable<Missionskills> {
    return this.http.put<Missionskills>(`${this.apiurl}/missionskills/${skill.id}`, skill);
  }

  deleteMissionSkill(id: number): Observable<Missionskills> {
    return this.http.delete<Missionskills>(`${this.apiurl}/missionskills/${id}`);
  }
  //#endregion

  //#region Mission Theme API Endpoints
  getMissionThemes(): Observable<Missiontheme[]> {
    return this.http.get<Missiontheme[]>(`${this.apiurl}/missionthemes`);
  }

  getMissionTheme(id: number): Observable<Missiontheme> {
    return this.http.get<Missiontheme>(`${this.apiurl}/missionthemes/${id}`);
  }

  createMissionTheme(theme: Missiontheme): Observable<Missiontheme> {
    return this.http.post<Missiontheme>(`${this.apiurl}/missionthemes`, theme)
  }

  updateMissionTheme(theme: Missiontheme): Observable<Missiontheme> {
    return this.http.put<Missiontheme>(`${this.apiurl}/missionthemes/${theme.id}`, theme);
  }

  deleteMissionTheme(id: number): Observable<Missiontheme> {
    return this.http.delete<Missiontheme>(`${this.apiurl}/missionthemes/${id}`);
  }
  //#endregion

  //#region Mission API Endpoints
  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiurl}/missions`);
  }

  getMission(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiurl}/missions/${id}`);
  }

  createMission(mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(`${this.apiurl}/missions`, mission);
  }

  updateMission(mission: Mission): Observable<Mission> {
    return this.http.put<Mission>(`${this.apiurl}/missions/${mission.id}`, mission);
  }

  deleteMission(id: number): Observable<Mission> {
    return this.http.delete<Mission>(`${this.apiurl}/missions/${id}`);
  }
  //#endregion

  //#region Mission Applicatin API Endpoints
  getMissionApplications(): Observable<Missionapplication[]> {
    return this.http.get<Missionapplication[]>(`${this.apiurl}/missionsapplications`);
  }

  updateMissionApplications(mission: Missionapplication): Observable<Missionapplication> {
    return this.http.put<Missionapplication>(`${this.apiurl}/missionsapplications/${mission.id}`, mission);
  }
  //#endregion

  //#region Story API Endpoints
  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.apiurl}/missions`);
  }

  getStory(id: number): Observable<Story> {
    return this.http.get<Story>(`${this.apiurl}/missions/${id}`);
  }

  updateStory(story: Story): Observable<Story> {
    return this.http.put<Story>(`${this.apiurl}/missions/${story.id}`, story);
  }

  deleteStory(id: number): Observable<Story> {
    return this.http.delete<Story>(`${this.apiurl}/missions/${id}`);
  }
  //#endregion
}
