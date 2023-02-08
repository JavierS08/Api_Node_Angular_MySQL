import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../app/services/equipo.service';
import {Router,ActivatedRoute} from '@angular/router'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  equipo:Equipo | null = null;
onSubmit(arg0: NgForm) {
  this.equipo=arg0.value;
  console.log(this.equipo);
  this.modificar(this.equipo!);
}


  constructor(private EquipoService:EquipoService,
              private router:Router,
              private actionRoute:ActivatedRoute) { }

  ngOnInit():void {
    const id_entrada= <string>this.actionRoute.snapshot.params['id'];
    console.log('id_entrada: '+id_entrada);
    if (id_entrada){
      this.EquipoService.getUnEquipo(id_entrada).subscribe(
        res=>{
          this.equipo = res;
          console.log(res);
        },
        err=>console.log(err)
      );
    }
  }




modificar(equipo:Equipo){
    var id:string=this.actionRoute.snapshot.params['id'];
    console.log(this.equipo)
    this.EquipoService.editEquipo(id,equipo).subscribe(
      res=> {
        console.log(res);
        this.EquipoService.getEquipos();
      },
      err=>console.log(err)
    );

    this.router.navigate(['/ver']);
  } 

}
