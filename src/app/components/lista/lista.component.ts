import { Component, OnInit } from '@angular/core';
import {ConService} from '../../services/con.service'
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items:any;
  itemEditar:any={name:''};
  constructor(private con:ConService) {
    this.con.retornaItems().subscribe(items=>{
      this.items=items;
      console.log(this.items);
    })
  }

  ngOnInit(): void {
  }
  eliminar(id){
    this.con.eliminar(id);
  }
  editar(item){
    console.log(item);
    this.itemEditar=item;
  }
  editarForm(){
    this.con.editar(this.itemEditar);
  }
}
