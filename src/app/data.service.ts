import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly artSpeaking = 'assets/artspeaking.json';

  private readonly apiUrl = 'assets/sprinboot2yrs.json';

  private readonly springboot3yrsUrl = 'assets/springboot3yrs.json';

  private readonly springboot4yrsUrl = 'assets/springboot4yrs.json';

  private readonly corejava2yrsUrl = 'assets/corejava2yrs.json';

  private readonly corejava4yrsUrl = 'assets/corejava4yrs.json';

  constructor(private http: HttpClient) {}

  getArtOfSpeaking():Observable<any>{
    return this.http.get(this.artSpeaking);
  }

  getSpringTwoYrs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSpringThreeYrs():Observable<any>{
    return this.http.get(this.springboot3yrsUrl);
  }

  
  getSpringFourYrs():Observable<any>{
    return this.http.get(this.springboot4yrsUrl);
  }

  getCoreJavaTwoYrs():Observable<any>{
    return this.http.get(this.corejava2yrsUrl);
  }

  getCoreJavaFourYrs():Observable<any>{
    return this.http.get(this.corejava4yrsUrl);
  }
}
