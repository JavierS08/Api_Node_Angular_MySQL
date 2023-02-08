import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../app/services/equipo.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  equipo:Equipo={
    id_equipo:'',
    nombre:'',
    logo:'',
    pais:''
  }

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit() {
  }

  agregar(){
    delete this.equipo.id_equipo;

    this.EquipoService.addEquipo(this.equipo).subscribe();
    this.router.navigate(['/ver']);
  }

}
