import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  mohamed: string = 'mohamed';
  constructor() {}
  get(f: any) {
    console.log(f.value);
  }
}
