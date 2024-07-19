//****************************AÑADIR TAREA*****************************

//Seleccionamos el elemento para añadir los hijos
const contenedor = document.getElementById('mi-contenedor');

//Título del proyecto
const titleToDo = document.createElement('h1');
titleToDo.textContent  = 'ToDo Chido';

//Subtitulo Título de la tarea
const subtitelNombreTarea = document.createElement('h3');
subtitelNombreTarea.textContent  = 'Ingrese nueva tarea';

//Input del título de la tarea
const entradaTexto = document.createElement('input');
entradaTexto.type = 'text';
entradaTexto.id = 'mi-entrada-de-texto';
entradaTexto.placeholder = 'Escribe aquí...';

//Boton para agregar tarea
const botonAgregar = document.createElement('button');
botonAgregar.setAttribute('id', 'botonAgregar');
botonAgregar.type = 'button';
botonAgregar.textContent = 'Agregar Tarea';

//Tareas listadas
const listaTareas = document.createElement('section');
listaTareas.setAttribute('id', 'listaTareas');
const ul = document.createElement('ul');
const items = ['Tarea1', 'Tarea2', 'Tarea3'];

for (const item of items) {
    const li = document.createElement('li');
    li.id = 'li';
    li.textContent = item;
    ul.appendChild(li);
}

listaTareas.appendChild(ul);



//Añadiendo hijos al div contenedor de todo
contenedor.appendChild(titleToDo)
contenedor.appendChild(subtitelNombreTarea)
contenedor.appendChild(entradaTexto);
contenedor.appendChild(botonAgregar);
contenedor.appendChild(listaTareas);
listaTareas.appendChild(ul)
ul.appendChild(li)



//****************************Marcar Tarea como Completada:****************************