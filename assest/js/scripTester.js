var loginTable = (listadoNuevo) => {
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let ePassword = document.getElementById("password");
    let eEmail = document.getElementById("email");
    let eGen = document.getElementById("gen");
    let eCumple = document.getElementById("nacimiento");

    render = "<table>"
    render += "<tr><th>Nombre</th><th>Password</th><th>Email</th><th>Genero</th><th>DATE</th><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        
        render += "<tr>"
        render += "<td>" + element.nombre + "</td>";
        render += "<td>" + element.password + "</td>";
        render += "<td>"+element.email+"</td>";
        render += "<td>"+element.gen+"</td>";
        render += "<td>"+element.nacimiento+ "</td>";
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
            ePassword.value = element.password;
            eEmail.value = element.email;
            eGen.value = element.gen;
            eCumple = element.nacimiento;
        })

        var eBtnEliminar = document.getElementById("btnEliminar" + i);
        eBtnEliminar.addEventListener("click", () => {
            let sBtn = "<button type='button' id='btnEliminar' value='" + i + "'>Eliminar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEliminarUp = document.getElementById("btnEliminar");
            console.log(eBtnEliminarUp)
            eBtnEliminarUp.addEventListener('click', () => eliminar(listadoNuevo))


            eNombre.value = element.nombre;
            ePassword.value = element.password;
            eEmail.value = element.email;
            eGen.value = element.gen;
            eCumple = element.nacimiento;
        })


    }
}
var modificar = (listadoNuevo) => {
    console.log("loooog")
    let eNombre = document.getElementById("nombre");
    let ePassword = document.getElementById("password");
    let eEmail = document.getElementById("email");
    let eGen = document.getElementById("gen");
    let eCumple = document.getElementById("nacimiento");

    let eBtnEditarUp = document.getElementById("btnEditar");

    console.log("Editando...");
    let nombre = eNombre.value;
    let password = ePassword.value;
    let email = eEmail.value;
    let gen = eGen.value;
    let nacimiento = eCumple.value;
    let indice = eBtnEditarUp.value;
    console.log(nombre);
    console.log(password);
    console.log(email);
    console.log(gen);
    console.log(nacimiento);
    console.log(indice);
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].password = password;
    listadoNuevo[indice].email = email
    listadoNuevo[indice].gen = gen
    listadoNuevo[indice].nacimiento = nacimiento
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
    let ePassword = document.getElementById("password");
    let eEmail = document.getElementById("email");
    let eGen = document.getElementById("gen");
    let eCumple = document.getElementById("nacimiento");
    let nombre = eNombre.value;
    let password = ePassword.value;
    let email = eEmail.value;
    let gen = eGen.value;
    let nacimiento = eCumple.value;
    console.log(nombre);
    console.log(password);
    console.log(email);
    console.log(gen);
    console.log(nacimiento);
    //console.log(persona)
    let listadoAntiguoStr = localStorage.getItem("clientes");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if (listaAntiguo == null) {
        let persona = { "id": 0, "nombre": nombre, "password": password, "email": email, "genero": gen, "DATE": nacimiento };
        var listadoNuevo = [persona]
    } else {
        let persona = { "id": listaAntiguo.length, "nombre": nombre, "password": password.length, "email": email, "genero": gen, "DATE": nacimiento };
        var listadoNuevo = [...listaAntiguo, persona]
    }
    console.log(listadoNuevo)
    localStorage.setItem("clientes", JSON.stringify(listadoNuevo));
    //Tabla
    loginTable(listadoNuevo)
    //

    //

}
var obtenerDatos = () => {
    let listadoAntiguoStr = localStorage.getItem("clientes");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    loginTable(listaAntiguo)
}
document.getElementById("btn").addEventListener("click", registrar)
addEventListener('load', obtenerDatos)