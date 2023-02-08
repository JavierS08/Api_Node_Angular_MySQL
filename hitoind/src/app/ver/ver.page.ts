import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../app/services/equipo.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {

  ListarEquipo!: Equipo[];
  
  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit() {
    this.listarEquipo();
  }
  listarEquipo(){
    this.EquipoService.getEquipos().subscribe(
      res=>{
        console.log(res)
        this.ListarEquipo=<any>res;
      },
      err => console.log(err)
    );
  }
  eliminar(id:string){
    this.EquipoService.deleteEquipo(id).subscribe(
      res=>{
          console.log("equipo eliminado");
          this.listarEquipo();
    },
    err=>console.log(err)
    );
  }

  modificar(id:string){
      this.router.navigate(['/edit/'+id]);
  }
}
