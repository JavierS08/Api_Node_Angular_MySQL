const rutas = require('express').Router()

const conexion=require("./config/conexion")

// asignamos todas las rutas

//get equipos
rutas.get('/',(req,res)=>{
    let sql='select * from teams'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get un equipo

rutas.get('/:id',(req,res)=>{
    const {id} = req.params
    let sql='select * from teams where id_equipo = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
rutas.post('/',(req,res)=>{
    const{nombre,logo,pais} = req.body

    let sql= `insert into teams(nombre,logo,pais) values('${nombre}','${logo}','${pais}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:"equipo agregado"})
        }
    })
})


//eliminar equipo

rutas.delete('/:id',(req,res)=>{
    const {id} = req.params
    let sql=`delete from teams where id_equipo = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:"equipo eliminado"})
        }
    })
})

//modificar
rutas.put('/:id',(req,res)=>{
    const{id}=req.params
    const{nombre,logo,pais}=req.body
    console.log(req.body)

    let sql = `update teams set
                 nombre='${nombre}',
                 logo='${logo}',               
                 pais='${pais}'
                 where id_equipo = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status:"equipo modificado"})
        }
    })
})

//--------------------------------------

module.exports = rutas;