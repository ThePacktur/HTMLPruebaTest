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
    let eDesccrip = document.getElementById("descripcion");

    render = "<table>"
    render += "<tr><th>Nombre</th><th>Archivo</th><th>Email</th><th>Genero</th><th>DATE</th><th>Telefono</th><th>Checkbox</th><td>Mensaje</td><th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];

        render += "<tr>"
        render += "<td>" + element.nombre + "</td>";
        render += "<td>" + element.archivo + "</td>";
        render += "<td>" + element.email + "</td>";
        render += "<td>" + element.gen + "</td>";
        render += "<td>" + element.nacimiento + "</td>";
        render += "<td>" + element.cell + "</td>";
        render += "<td>" + element.check +"</td>";
        render += "<td>" + element.decripcion + "</td>";
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
            eDesccrip = element.descripcion;
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
            eDesccrip = element.decripcion;
        })


    }
}

var registrar = () => {
    let eNombre = document.getElementById("nombre");
    let eArchivo = document.getElementById("archivo");
    let eEmail = document.getElementById("email");
    let eGen = document.getElementById("gen");
    let eCumple = document.getElementById("nacimiento");
    let eCell = document.getElementById("cell");
    let eCheck = document.getElementById("cb_validation");
    let eDesccrip = document.getElementById("descripcion");
    let nombre = eNombre.value;
    let archivo = eArchivo.value;
    let email = eEmail.value;
    let gen = eGen.value;
    let nacimiento = eCumple.value;
    let cell = eCell.value;
    let check = eCheck;
    let descripcion = eDesccrip;
    console.log(nombre);
    console.log(archivo);
    console.log(email);
    console.log(gen);
    console.log(nacimiento);
    console.log(cell)
    console.log(check)
    console.log(descripcion)
    //console.log(persona)
    let listadoAntiguoStr = localStorage.getItem("clientes");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)

    
    if (listaAntiguo == null) {
        let persona = { "id": 0, "nombre": nombre, "archivo": archivo, "email": email, "genero": gen, "DATE": nacimiento, "cell": cell, "Checkbox":check, "descripcion": descripcion };
        var listadoNuevo = [persona]
    } else {
        let persona = { "id": listaAntiguo.length, "nombre": nombre, "archivo": archivo.length, "email": email, "genero": gen, "DATE": nacimiento, "cell": cell, "checkbox":check, "descripcion": descripcion };
        var listadoNuevo = [...listaAntiguo, persona]
    }
    console.log(listadoNuevo)
    localStorage.setItem("clientes", JSON.stringify(listadoNuevo));
    //Tabla
    loginTable(listadoNuevo)


}

function checkClickFunc()
{
 var checkbox = document.getElementById('cb_validation');
 if (checkbox.checked == true)
 {
  alert("Checkbox is clicked");
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
    let eCheck = document.getElementById("cb_validation");
    let eDesccrip = document.getElementById("descripcion");
    let eBtnEditarUp = document.getElementById("btnEditar");

    console.log("Editando...");
    let nombre = eNombre.value;
    let archivo = eArchivo.value;
    let email = eEmail.value;
    let gen = eGen.value;
    let nacimiento = eCumple.value;
    let cell = eCell.value;
    let check = eCheck.value;
    let descripcion = eDesccrip.value;
    let indice = eBtnEditarUp.value;
    console.log(nombre);
    console.log(archivo);
    console.log(email);
    console.log(gen);
    console.log(nacimiento);
    console.log(cell);
    console.log(check);
    console.log(descripcion);
    console.log(indice);

    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].archivo = archivo;
    listadoNuevo[indice].email = email;
    listadoNuevo[indice].gen = gen;
    listadoNuevo[indice].nacimiento = nacimiento;
    listadoNuevo[indice].cell = cell;
    listadoNuevo[indice].check = check;
    listadoNuevo[indice].descripcion = descripcion;
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




var obtenerDatos = () => {
    let listadoAntiguoStr = localStorage.getItem("clientes");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    loginTable(listaAntiguo)
}

const enviar = document.getElementById("btnRegister");
function validar(e){
    e.preventDefault();  
    const campoNombre = document.getElementById("nombre");
    const eArchivo = document.getElementById("archivo");
    const eEmail = document.getElementById("email");
    const eGen = document.getElementById("gen");
    const eCumple = document.getElementById("nacimiento");
    const eCell = document.getElementById("cell");
    const eCheck = document.getElementById("cb_validation");
    const eDesccrip = document.getElementById("descripcion");
    
    let valido = true;
  
    if (!campoNombre.value) {
      const nombreError = document.getElementById("nombreError");
      
      nombreError.classList.add("visible");
      campoNombre.classList.add("invalido");
      nombreError.setAttribute("aria-hidden", false);
      nombreError.setAttribute("aria-invalid", true);
    }else if(!eArchivo.value){
        const archivoError = document.getElementById("archivoError");
       archivoError.classList.add("visible");
       eArchivo.classList.add("visible");
       archivoError.setAttribute("ara-hidden",false);
       archivoError.setAttribute("aria-invalid",true);
    }else if(!eEmail.value){
        const emailError = document.getElementById("emailError");
      emailError.classList.add("visible");
       eEmail.classList.add("visible");
       emailError.setAttribute("ara-hidden",false);
       emailError.setAttribute("aria-invalid",true);
    }else if(!eGen.value){
        const genError = document.getElementById("genError");
       genError.classList.add("visible");
       eGen.classList.add("visible");
       genError.setAttribute("ara-hidden",false);
       genError.setAttribute("aria-invalid",true);
    }else if(!eCumple.value){
        const cumpleError = document.getElementById("cumpleError");
       cumpleError.classList.add("visible");
       eCumple.classList.add("visible");
       cumpleError.setAttribute("ara-hidden",false);
       cumpleError.setAttribute("aria-invalid",true);
    }else if(!eCell.value){
        const cellError = document.getElementById("cellError");
       cellError.classList.add("visible");
       eCell.classList.add("visible");
       cellError.setAttribute("ara-hidden",false);
       cellError.setAttribute("aria-invalid",true);
    }else if(!eCheck.value){
        const checkError = document.getElementById("checkError");
       checkError.classList.add("visible");
       eCheck.classList.add("visible");
       checkError.setAttribute("ara-hidden",false);
       checkError.setAttribute("aria-invalid",true);
    }else if(!eDesccrip.value){
        const descripError = document.getElementById("descripError");
       descripError.classList.add("visible");
       eDesccrip.classList.add("visible");
       descripError.setAttribute("ara-hidden",false);
       descripError.setAttribute("aria-invalid",true);
    }
    return valido;
    
  }



document.getElementById("btnConstraste").addEventListener('click', changeConstraste);
document.getElementById("btnRegister").addEventListener("click", registrar);
addEventListener('load', obtenerDatos);
enviar.addEventListener("click",validar);