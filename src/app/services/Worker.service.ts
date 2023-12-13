import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Worker } from '../Models/Worker';


@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private httpClient: HttpClient) { }
  private reloadWorkersSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadWorkers$: Observable<boolean> = this.reloadWorkersSubject.asObservable();

  GetWorkers(): Observable<Worker[]>{
    let url = 'https://localhost:44363/GetWorkers';
    //https://localhost:44363/GetWorkers
    //return null;
    return this.httpClient.get<Worker[]>(url);
  }

  GetByLanguageAsync(language: string) : Observable<Worker>{
    let url = 'https://localhost:44363/GetByLanguageAsync' + language;
    return this.httpClient.get<Worker>(url);
  }
}
