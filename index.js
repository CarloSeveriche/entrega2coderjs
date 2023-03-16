



class Usuario{
    constructor (nombre, apellido, identificacion, pais, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.pais = pais;
        this.edad = edad;
    }

    cambiarNombre(){
        nuevoNombre = prompt(`Ingresa tu nuevo nombre: `);
        this.nombre = nuevoNombre;
    }
}


function crearUsuario(){

    let cantidadRegistros = parseInt(prompt(`¿Cuántas personas deseas registar?`))

    const USUARIOS = [];

    if(cantidadRegistros == 0){
        alert(`Ingrese una cantidad minima de 1`)
    }

    else{
        
        for( let i = 0 ; i < cantidadRegistros ; i++){  

        
    
        let nombre = prompt(`Ingresa tu nombre: `);
        let apellido = prompt(`Ingresa tu apellido: `);
        let identificacion = prompt(`Ingresa tu numero de ID:`);
        let pais = prompt(`Ingresa tu nacionalidad`);
        let edad = parseInt(prompt(`Ingresa tu edad`));
    
        let nuevoUsuario = new Usuario(nombre, apellido, identificacion, pais, edad);
    
        USUARIOS.push(nuevoUsuario);
        console.log(USUARIOS);}
    

    }
}
crearUsuario();