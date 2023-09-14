// const natalia = {
//     name: 'Natalia',
//     age: 20,
//     cursosAprobados: [
//         "Curso Definitivo de HTML y CSS",
//         "Curso Practico de HTML y CSS",
//     ],

//     aprobarCurso(curso) { 
//         this.cursosAprobados.push(curso)
//     }

// }


// function Student(name,age,cursosAprobados) { 
//     this.name = name,
//     this.age = age, 
//     this.cursosAprobados = cursosAprobados
// }

// Student.prototype.aprobarCurso = function(curso) {this.cursosAprobados.push(curso)}

// const juanita = new Student(
//     "Juanita Alejandra",
//     15,
//     [
//         "Curso de introduccion a la produccion de Videojuegos",
//         "Creacion de Personajes"
//     ]
// )

// //!Prototipos con la sintaxis de Clases

// class Student2 {
//     constructor(name,age,cursosAprobados) { 
//         this.name = name,
//         this.age = age, 
//         this.cursosAprobados = cursosAprobados
//     }

//     aprobarCurso(nuevoCurso) { 
//         this.cursosAprobados.push(nuevoCurso)
//     }
// }

// const miguel = new Student2(
//     "Miguel",
//     28,
//     [
//         "Curso de Analisis de Negocios para Ciencia de Datos",
//         "Curso de Principios de visualizacion de datos para BI "
//     ]
// )

// //! Sintaxis clases con ROR mandar un objeto en el parametro par evitar preocuparte por el orden y dar valores por defecto

// class Student3 {
//     constructor({
//     name,
//     cursosAprobados = [],
//     age,
//     email,
//     })

//     {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
//     }

//     aprobarCurso(nuevoCursito) {
//     this.cursosAprobados.push(nuevoCursito);
//     }
// }

// const Ramses = new Student3({
//     name: "Ali Ramses",
//     age: 25,
//     email: "Ramses@platzi.com",
// });

//! Objetos literales. 
// const juan1 = {
//     nameL: 'JuanDC',
//     username:'juandc',
//     points:100 ,
//     socialMedia: {
//         twitter:'fjuandc',
//         instagram: 'fjuandc',
//         facebook: undefined
//     },
//     approvedCourses: [
//         'Curso Definitivo de HTML y CSS',
//         'Curso Practico de HTML y CSS'
//     ],
//     learningPaths: [
//         {
//             name: 'Escuela de desarrolo Web',
//             courses: [
//                 'Curso Definitivo de HTML y CSS',
//                 'Curso Practico de HTML y CSS',
//                 'Curso de Responsive Design'
//             ]
//         },
//         {
//             name: 'Escuela de Videojuegos',
//             courses:[
//                 'Curso de introduccion a la produccion de videojuegos',
//                 'Curso Unreal Engine',
//                 'Curso de Unity en 3D'
//             ]
//         }
//     ]
// }

// const miguelito1 = {
//     nameL: 'Miguelito',
//     username:'miguelitoFeliz',
//     points:1000 ,
//     socialMedia: {
//         twitter:'MiguelitoFeliz',
//         instagram: 'miguelito_Feliz',
//         facebook: undefined
//     },
//     approvedCourses: [
//         'Curso DataBussines',
//         'Curso DataViz'
//     ],
//     learningPaths: [
//         {
//             name: 'Escuela de desarrolo Web',
//             courses: [
//                 'Curso Definitivo de HTML y CSS',
//                 'Curso Practico de HTML y CSS',
//                 'Curso de Responsive Design'
//             ]
//         },
//         {
//             name: 'Escuela de Data Sciencie',
//             courses:[
//                 'Curso DataBusiness',
//                 'Curso Dataviz',
//                 'Curso de Tableu'
//             ]
//         }
//     ]
// }

//! Lo mismo pero escalable con clases constructoras. 
// class LearningPath  { 
//     constructor({
//         learningNameSchool, 
//         courses = [], 
//     }) 

//     { 
//         this.learningNameSchool = learningNameSchool
//         this.ListofCourses = 
//         { 
//             courses:courses
//         }
//     }
// }

// const DataScience = new LearningPath({
// learningNameSchool: 'DataScience',
// courses: [
//     'Curso DataBusiness',
//     'Curso Dataviz',
//     'Curso de Tableu',
// ]
// })


// class Student { 
//     constructor({
//         name,
//         email,
//         username,
//         twitter = null,
//         instagram = null,
//         facebook = null,
//         approvedCourses = [],
//         learningPaths = [],
//     }) 

//     { 
//         this.name = name
//         this.email = email
//         this.username = username
//         this.socialMedia = {

//             twitter: twitter,
//             instagram : instagram,
//             facebook: facebook
//         }
//         this.approvedCourses = approvedCourses
//         this.learningPaths = learningPaths
//     }
// }

// const juan2 = new Student(
//     {
//         name:'JuanDC',
//         username:'juandc',
//         email:'juanito@platzi.com',
//         twitter:'fjuandc'
//     }
// )
// const miguelito2 = new Student(
//     {
//         name:'miguelito',
//         username:'miguelitoFeliz',
//         email:'miguelito@platzi.com',
//         instagram:'miguelit_feliz',
//         learningPaths: DataScience
//     }
// )

class Comment { 
    constructor( { 
        content, 
        studentName,
        studentRole = "estudiante", 
    }) 

    { 
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    
    publicar () { 
        console.log(`${this.studentName} ha comentado ${this.content} el estudiante tiene el rol de ${this.studentRole}`);
        console.log(`${this.likes} likes `)
    }

}


function videoPlay(videoID) { 
    const urlSecreta = 'https://platziultrasecretomasquelanasa.com/'  + videoID
    console.log(`Se esta reproducioendo desde la url ${urlSecreta}`)
}

function videoStop(videoID) { 
    const urlSecreta = 'https://platziultrasecretomasquelanasa.com/'  + videoID
    console.log(`Pausamos la url  ${urlSecreta}`)
}

class PlatziClass { 
    constructor({
        name,
        videoID,
    }) 

    { 
        this.name = name,
        this.videoID = videoID
    }

    reproducir() { 
        videoPlay(this.videoID)
    }

    pausar() { 
        videoStop(this.videoID)
    }
}

class Course {
    constructor({
    name,
    classes = [],
    isfree = false,
    lang = 'spanish',
    }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isfree;
    this.lang = lang;
    }

    get name() {
    return this._name;
    }

    set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
    } else {
        this._name = nuevoNombrecito; 
    }
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isfree:true,
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: 'english'
});


class LearningPath {
    constructor({
    name,
    courses = [],
    }) {
    this.name = name;
    this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
    ],
})







class Student {
    constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
    }) 

    {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName:this.name,

        })
        comment.publicar()
    }

}

class FreeStudent  extends Student {
    constructor(props){
        super(props)
    }

    approveCourse(newCourse) { 
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else { 
            console.warn('Lo sentimos' + this.name + 'Solo puedes tomar cursos Abiertos.')
        }
    }
}

class BasicStudend extends Student {
    constructor(props){
        super(props)
    }

    approveCourse(newCourse) { 
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else { 
            console.warn('Lo sentimos' + this.name + 'no puedes tomar cursos en ingles ')
        }
    }
}


class ExpertStudent extends Student {
    constructor(props){
        super(props)
    }

    approveCourse(newCourse) { 
        
            this.approvedCourses.push(newCourse);  
        
    }
}


class Teacher extends Student {
    constructor(props){
        super(props)
    }

    approveCourse(newCourse) { 
        
            this.approvedCourses.push(newCourse);  
        
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName:this.name,
            studentRole: 'Profesor'

        })
        comment.publicar()
    }

}

const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
    escuelaWeb,
    escuelaVgs,
    ],
});

const freddy = new Teacher({
    name: "Freddy Vega",
    username: "freddier",
    email: "freddy@pla.com",
    instagram: "freddier",
    
});

