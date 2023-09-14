const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],

    aprobarCurso(curso) { 
        this.cursosAprobados.push(curso)
    }

}


function Student(name,age,cursosAprobados) { 
    this.name = name,
    this.age = age, 
    this.cursosAprobados = cursosAprobados
}

Student.prototype.aprobarCurso = function(curso) {this.cursosAprobados.push(curso)}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de introduccion a la produccion de Videojuegos",
        "Creacion de Personajes"
    ]
)