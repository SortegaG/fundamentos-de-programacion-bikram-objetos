// Declaración de objetos

const Coche = {
    marca: "Renault",
    modelo: "Megane",
    matricula: "1796JBR"
};

const Casa = {
    codPostal: 28822,
    calle: "Mejico",
    portal: 3,
    piso: 3,
};

const FullStackDeveloper = {
    lenguajes: ["HTML", "CSS", "JavaScript",],
    proyectos: ["Proyecto1", "Proyecto2",]
};

const Perro = {
    nombre: "Iron",
    raza: "Presa canario",
    color: "Negro",
    edad: 4,
    ladrar: function(){
        console.log("Guau");
    },
    popo: function(){
        return Math.random() * 3;
    }
};

// Modificacion de objetos


const marcaPortatil = Portatil.marca;

const marcaPortatil2 = Portatil["marca"];

const grupos = Concierto.grupos;

const RGB = [Led.rojo, Led.verde, Led.azul];

// Modificacion de propiedades 

Portatil.modelo = "P345";

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha = new Date();

Impresora.imprimiendo = {
    nombreArchivo: "Documento.pdf",
    copias: 2,
    numPaginas: 1,
};

// Objetos

const Noticia = {
    titular: "",
    cuerpo: ""
};

const Persona = {
    nombre: "Sergio",
    apellidos: "Ortega Garrido",
    edad: 30,
};

const Avion = {
    numPasajeros: 180,
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando");
    }
};

const Paquete = {
    contenido: ["juego", "envoltorio", "papel de burbujas"],
}

const Pais = {
    numHabitantes: 67970000,
    continente: "Europa",
    gentilicio: "Francés"
}

// Lectura de propiedades 

const codError = O_Error.codigo;

const integrantes = Grupo.integrantes;

const nivelesTinta = Impresora.tinta;

const pixeles = Pantalla.pixeles;

const especificaciones = Movil["especificaciones"];

// Modificación de propiedades

Grupo.numIntegrantes = 5;

Pantalla.dimensiones = "1920x1080";

if (Led.encendido){
    Led.encendido = false;
} else {
    Led.encendido = true;
};

Movil.temperatura = "20º"

