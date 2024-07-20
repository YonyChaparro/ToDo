//****************************AÑADIR TAREA*****************************

//Seleccionamos el elemento para añadir los hijos
const contenedor = document.getElementById('mi-contenedor');

//Título del proyecto
const titleToDo = document.createElement('h1');
titleToDo.textContent  = 'ToDo Chido';

//Subtitulo Título de la tarea
const subtitelNombreTarea = document.createElement('h3');
subtitelNombreTarea.textContent  = 'Ingrese nueva tarea';

//Boton para agregar tarea
const botonAgregar = document.createElement('button');
botonAgregar.setAttribute('id', 'botonAgregar');
botonAgregar.setAttribute('onclick', 'capturarTexto()');
botonAgregar.type = 'button';
botonAgregar.textContent = 'Agregar Tarea';

//Subtitulo de tareas pendientes
const subtitleTareasPendientes= document.createElement('h3')
subtitleTareasPendientes.textContent = 'Tareas pendientes:'

//Input del título de la tarea
const entradaTexto = document.createElement('input');
entradaTexto.type = 'text';
entradaTexto.id = 'mi-entrada-de-texto';
entradaTexto.placeholder = 'Escribe aquí...';

//Tareas listadas
const ul = document.createElement('ul');
ul.id = 'ul';

const elementos = [];


function capturarTexto() {
    if (entradaTexto.value !=='') {
        const listaDeElementos = document.getElementById('ul');
        const nuevoElemento = document.createElement('li');
        const campoIngresado = entradaTexto.value;
        const miCasilla = document.createElement('input');
        miCasilla.setAttribute('id','miCasilla');
        miCasilla.setAttribute('type','checkbox')
        elementos.push(campoIngresado);
        entradaTexto.value=''

        for (elemento in elementos){
            nuevoElemento.textContent = campoIngresado;
            listaDeElementos.appendChild(miCasilla);
            listaDeElementos.appendChild(nuevoElemento);
        }

        miCasilla.addEventListener('change', function() {
            if (miCasilla.checked) {
                nuevoElemento.setAttribute('id', 'textoTachado')
            }
      });
      miCasilla.addEventListener('change', function() {
        if (!miCasilla.checked) {
            nuevoElemento.setAttribute('id', 'noTextoTachado')
        }
  });


    }else{
        alert('Ingrese tarea loko')
    }
}


//Añadiendo hijos al div contenedor de todo
contenedor.appendChild(titleToDo)
contenedor.appendChild(subtitelNombreTarea)
contenedor.appendChild(entradaTexto);
contenedor.appendChild(botonAgregar);
contenedor.appendChild(subtitleTareasPendientes);
contenedor.appendChild(ul);



//****************************Marcar Tarea como Completada:****************************

