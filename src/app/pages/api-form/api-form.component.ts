import { Component, OnInit } from '@angular/core';
import {ApiWilderService} from "../../shared/api-wilder.service";

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent implements OnInit {
  public name: string | undefined;
  private service: ApiWilderService;

  constructor(param_service: ApiWilderService) {
    this.service = param_service;
  }

  ngOnInit(): void {
    this.service.getGameById().subscribe(
      (param_data: any) => {
        this.name = param_data
      }
    )
  }

}
