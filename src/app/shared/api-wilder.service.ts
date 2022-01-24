import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiWilderService {
  private service: HttpClient;
  private url: string = 'https://apis.wilders.dev/wild-games/games/'

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getGameById(): Observable<string> {
    const observable: Observable<any> = this.service.get(this.url);
    const treatment = (param_data: any) => {
      return param_data.url as string;
    };

    return observable.pipe(map(treatment));
  }
}
