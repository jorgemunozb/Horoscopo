import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  data: any;

  constructor(private api: ApiService) {}



  ngOnInit(){
    this.api.getHoroscopo().then(data=>{
      this.data = data;
    });
  }

}
