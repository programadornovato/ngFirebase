import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/services/con.service';

@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html',
  styleUrls: ['./agrega.component.css']
})
export class AgregaComponent implements OnInit {
  item:any={name:''};
  constructor(private ser:ConService) { }

  ngOnInit(): void {
  }
  agregar(){
    this.ser.addItem(this.item);
  }
}
