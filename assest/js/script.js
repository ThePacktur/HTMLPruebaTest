var changeConstraste = () => {

    let btn = document.getElementById('btnConstraste')
    let estado = btn.value;
    if (estado == 'd') {
        btn.value = 'n';
        let elements = document.getElementsByClassName('day');
        console.log(elements)
        console.log(elements[0])
        console.log(elements[0].classList)
        elements[0].classList.add('nigth');
        console.log(elements[0].classList)
        elements[0].classList.remove('day');
        console.log(elements[0].classList)
    } else if (estado == 'n') {
        btn.value = 'd'
        let elements = document.getElementsByClassName('nigth');
        console.log(elements)
        console.log(elements[0])
        elements[0].classList.add('day');
        elements[0].classList.remove('nigth');


    }

}

var loginTable = (listadoNuevo) => {
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eArchivo = document.getElementById("archivo");
    let eEmail = document.getElementById("email");
    let eGen = document.getElementById("gen");
    let eCumple = document.getElementById("nacimiento");
    let eCell = document.getElementById("cell");

    render = "<table>"
    render += "<tr><th>Nombre</th><th>Archivo</th><th>Email</th><th>Genero</th><th>DATE</th><th>Telefono</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        
        render += "<tr>"
        render += "<td>" + element.nombre + "</td>";
        render += "<td>" + element.archivo + "</td>";
        render += "<td>"+element.email+"</td>";
        render += "<td>"+element.gen+"</td>";
        render += "<td>"+element.nacimiento+ "</td>";
        render += "<td>"+element.cell+"</td>";
        render += "<td>"
        render += "<button id='btnEditar" + i + "'>Editar</button>"
        render += "<button id='btnEliminar" + i + "'>Eliminar</button>"
        render += "</td>"
        render += "</tr>"
    }
    render += "</table>"
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        var eBtnEditar = document.getElementById("btnEditar" + i);
        eBtnEditar.addEventListener("click", () => {
            let sBtn = "<button type='button' id='btnEditar' value='" + i + "'>Editar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEditarUp = document.getElementById("btnEditar");
            console.log(eBtnEditarUp)
            eBtnEditarUp.addEventListener('click', () => modificar(listadoNuevo))


            eNombre.value = element.nombre;
            eArchivo.value = element.archivo;
            eEmail.value = element.email;
            eGen.value = element.gen;
            eCumple = element.nacimiento;
            eCell = element.cell;
        })

        var eBtnEliminar = document.getElementById("btnEliminar" + i);
        eBtnEliminar.addEventListener("click", () => {
            let sBtn = "<button type='button' id='btnEliminar' value='" + i + "'>Eliminar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEliminarUp = document.getElementById("btnEliminar");
            console.log(eBtnEliminarUp)
            eBtnEliminarUp.addEventListener('click', () => eliminar(listadoNuevo))


            eNombre.value = element.nombre;
            eArchivo.value = element.archivo;
            eEmail.value = element.email;
            eGen.value = element.gen;
            eCumple = element.nacimiento;
            eCell = element.cell;
        })


    }
}
var modificar = (listadoNuevo) => {
    console.log("loooog")
    let eNombre = document.getElementById("nombre");
    let eArchivo = document.getElementById("archivo");
    let eEmail = document.getElementById("email");
    let eGen = document.getElementById("gen");
    let eCumple = document.getElementById("nacimiento");
    let eCell = document.getElementById("cell");
    let eBtnEditarUp = document.getElementById("btnEditar");

    console.log("Editando...");
    let nombre = eNombre.value;
    let archivo = eArchivo.value;
    let email = eEmail.value;
    let gen = eGen.value;
    let nacimiento = eCumple.value;
    let cell = eCell.value;
    let indice = eBtnEditarUp.value;
    console.log(nombre);
    console.log(archivo);
    console.log(email);
    console.log(gen);
    console.log(nacimiento);
    console.log(cell);
    console.log(indice);
    
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].archivo = archivo;
    listadoNuevo[indice].email = email
    listadoNuevo[indice].gen = gen
    listadoNuevo[indice].nacimiento = nacimiento
    listadoNuevo[indice].cell = cell
    localStorage.setItem('clientes', JSON.stringify(listadoNuevo))
    loginTable(listadoNuevo);
}
var eliminar = (listadoNuevo) => {
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    let lista = listadoNuevo.filter((p) => p.id != indice)
    let listaFinal = lista.map((p, index) => { return { ...p, 'id': index } })
    //let listaFinal = lista.map((p,index)=>{return {'nombre':p.nombre,'apellido':p.apellido,'id':index}})

    localStorage.setItem('clientes', JSON.stringify(listaFinal))
    loginTable(listaFinal)
}



var registrar = () => {
    let eNombre = document.getElementById("nombre");
    let eArchivo = document.getElementById("archivo");
    let eEmail = document.getElementById("email");
    let eGen = document.getElementById("gen");
    let eCumple = document.getElementById("nacimiento");
    let eCell = document.getElementById("cell");
    let nombre = eNombre.value;
    let archivo = eArchivo.value;
    let email = eEmail.value;
    let gen = eGen.value;
    let nacimiento = eCumple.value;
    let cell = eCell.value;
    console.log(nombre);
    console.log(archivo);
    console.log(email);
    console.log(gen);
    console.log(nacimiento);
    console.log(cell)
    //console.log(persona)
    let listadoAntiguoStr = localStorage.getItem("clientes");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if (listaAntiguo == null) {
        let persona = { "id": 0, "nombre": nombre, "archivo": archivo, "email": email, "genero": gen, "DATE": nacimiento, "cell":cell };
        var listadoNuevo = [persona]
    } else {
        let persona = { "id": listaAntiguo.length, "nombre": nombre, "archivo": archivo.length, "email": email, "genero": gen, "DATE": nacimiento, "cell":cell };
        var listadoNuevo = [...listaAntiguo, persona]
    }
    console.log(listadoNuevo)
    localStorage.setItem("clientes", JSON.stringify(listadoNuevo));
    //Tabla
    loginTable(listadoNuevo)
    

}
var obtenerDatos = () => {
    let listadoAntiguoStr = localStorage.getItem("clientes");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    loginTable(listaAntiguo)
}
document.getElementById("btnConstraste").addEventListener('click', changeConstraste);
document.getElementById("btnRegister").addEventListener("click", registrar);
addEventListener('load', obtenerDatos);