# Api_Node_Angular_MySQL

## Correr el servidor Node
Primeramete antes de iniciar ionic y Angular es necesario introducir en el cmd el comando **npm run dev** para poder iniciar el servidor Node.js.

## Correr el servidor Ionic
Ahora vamos a iniciar Ionic mediante el comando **ionic serve --lab** lo que nos abrirá el 
puerto 4100 para la vista web y el puerto 4200 para la vista mobile.

## Correr el servidor Angular
Por último iniciar Angular mediante el comando **ng serve**, por defecto Angular abre el puerto 4200, sin embargo,
al tener este puerto ocupado por ionic nos abrirá el puerto 4400.

## Posibles Problemas
### No se reconoce el comando ng
Este problema radica en que el cli de Angular no esta instalado y es por ello que no nos dejará ejecutar el comando ng serve, la 
solución es instalar el cli de Angular mediante **npm install -g @angular/cli**.
