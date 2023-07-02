//SIMULADOR FUTBOL 4 -SELECCION ARGENTINA

/* ES UN JUEGO QUE PERMITE AL USUARIO ELEGIR 5 JUGADORES DE ENTRE UNA LISTA DE JUGADORES PREDEFINIDOS, Y FINALMENTE CREARSE UNO CON SU NOMBRE.
CADA JUGADOR TIENE UN COSTO DENTRO DE UN PRESUPUESTO LIMITADO. MIENTRAS MAS PRESUPUESTO TENGA EL JUGADOR AL ELEGIR LOS PRIMERO CUATRO JUGADORES,
MEJOR SERA EL QUINTO JUGADOR QUE PODRA CREAR*/
/*LUEGO CREAR EL EQUIPO, LA PC FORMARA UN EQUIPO AL AZAR DE ENTRE LOS JUGADORES RESTANTES Y SIMULARA UN PARTIDO, OFRECIENDO ALEATORIAMENTE
UNA SERIE DE EVENTOS A TRAVEZ DE PROMPTS Y ALERTAS. LOS JUGADORES SE CANSAN, SE LESIONAN, HACEN FALTAS Y RECIBEN TARJETAS ROJAS. ES UN JUEGO
DE PROBABILIDADES*/
let monedas = 100
let puntos = 100
class jugador {
    constructor (nombre, valor, ataque, defensa, fisico) {
        this.nombre = nombre
        this.valor = valor
        this.ataque = ataque
        this.defensa = defensa
        this.fisico = fisico
        this.energia = 100
        this.lesion = false
        this.expulsion = false
    }
    lesionarse () {
        this.lesion = true
    }
    expulsar () {
        this.expulsion = true
    }
}

const messi = new jugador (`Lionel Messi`, 60, 100, 10, 30,)
const diMaria = new jugador (`Angel Di Maria`, 55, 80, 10, 10)
const dibuMartinez = new jugador (`Emiliano Martinez`, 22, 0, 80, 190)
const montiel = new jugador (`Gonzalo Montiel`, 0, 1140, 1150, 11160)
const molina = new jugador (`Nahuel Molina`, 18, 10, 50,60, 70)
const romero = new jugador (`Cuti Romero`, 22, 10, 80, 80)
const otamendi = new jugador (`Nicolas Otamendi`, 0, 1100, 3180, 1170)
const lisandoMartinez = new jugador (`Lisandro Martinez`, 22, 40, 70, 70)
const dePaul = new jugador (`Rodrigo de Paul`, 18, 40, 40, 60)
const paredes = new jugador (`Leandro Paredes`, 18, 30, 50, 60)
const macAllister = new jugador (`Alexis Mac Allister`, 22, 30, 30, 30)
const papuGomez = new jugador (`Alejandro Gomez`, 22, 30,10, 20)
const enzofernandez = new jugador (`Enzo Fernandez`, 22, 60, 50, 60)
const lautaroMartinez = new jugador (`Lautaro Martinez`, 34, 70, 20, 50)
const julianAlvarez = new jugador (`Julian Alvarez`, 0, 1140, 1115, 2011)
const dybala = new jugador (`Paulo Dybala`, 22, 70, 20, 50)
const cheat1 = new jugador (`CHEAT ENGINE2`, 0, 7110, 2110, 5110)
const cheat2 = new jugador (`CHEAT ENGINE1`, 0, 1140, 1115, 2011)
const cheat3 = new jugador (`CHEAT ENGINE 3`, 0, 1170, 2011, 5110)

const jugadores = [messi, diMaria,dibuMartinez,montiel,molina,romero,otamendi,lisandoMartinez,dePaul,paredes,macAllister,papuGomez,enzofernandez,lautaroMartinez,julianAlvarez,dybala, cheat1, cheat2, cheat3]
const equipo = []
function reducirAtaque (array){
    totalAtaque = array.reduce((acumulador, actual)=>acumulador + actual.ataque,0)
}
function reducirDefensa(array){
    totalDefensa = array.reduce ((acumulador, actual)=>acumulador + actual.defensa,0)
}
function reducirFisico (array){
    totalFisico = array.reduce ((acumulador, actual)=> acumulador + actual.fisico,0)
}
let equipoCustom = {
    nombre: "",
    ataque: 0,
    defensa: 0,
    fisico: 0,
    goles: 0,
    jugadores: equipo,
    sumarAtaque(){
        reducirAtaque(equipo)
        return this.ataque = totalAtaque
    },
    sumarDefensa(){
        reducirDefensa(equipo)
        return this.defensa = totalDefensa
    },
    sumarFisico(){
        reducirFisico(equipo)
        return this.fisico = totalFisico
    }
}




console.log(`TENES ${monedas} MONEDAS`)
console.log(``)
console.log(`TABLA DE JUGADORES`)
jugadores.forEach ((elemento)=>{return console.log(elemento.nombre + ` - `+` VALOR: ` + elemento.valor + `monedas`)})

/*SELECTOR DE JUGADORES (TOMA OBJETOS DEL ARRAY BASE Y LOS COLOCA DENTRO DE UN ARRAY EQUIPO NUEVO)
NO SE PUEDE ELEGIR EL MISMO JUGADOR DOS VECES
CADA JUGADOR TIENE UN VALOR EN MONEDAS, NO SE PUEDE EXCEDER EL PRESUPUESTO
*/

do{     equipoUsuario = prompt (`Selecciona un jugador por nombre y apellido. La lista y valores estan en la consola`)
        verificar = jugadores.find ((el)=>{return el.nombre == equipoUsuario})
        index = jugadores.indexOf(verificar)
            while (verificar == undefined) {
                alert(`Ese jugador no esta en la base de datos o ya fue elegido. `)
                equipoUsuario = prompt (`Selecciona un jugador. La lista y valores estan en la consola`)
                verificar = jugadores.find ((el)=>{return  el.nombre == equipoUsuario})
                index = jugadores.indexOf(verificar)
            }
            while (monedas < jugadores[index].valor ){
                console.log(jugadores[index].valor)
                alert(`No te alcanza, tenes  ${monedas} monedas`)
                equipoUsuario = prompt (`Selecciona un jugador por nombre y apellido. La lista y valores estan en la consola.`)
                verificar = jugadores.find ((el)=>{return el.nombre == equipoUsuario})
                    while (verificar == undefined) {
                        alert(`Ese jugador no esta en la base de datos o ya fue elegido`)
                        equipoUsuario = prompt (`Selecciona un jugador por nombre y apellido. La lista y valores estan en la consola`)
                        verificar = jugadores.find ((el)=>{return  el.nombre == equipoUsuario})
                        }
                index = jugadores.indexOf(verificar)   
            }
        monedas = monedas - verificar.valor
        equipo.push(verificar)
        jugadores.splice(index,1)
            } while (equipo.length < 3)


/* ACA HAY QUE MOSTRARLE AL USUARIO EL EQUIPO QUE ARMO, Y AVISARLE QUE TIENE QUE CREAR SU PROPIO JUGADOR, QUE TIENE 10 PUNTOS  PARA ASIGNAR
ENTRE ATAQUE, DEFENSA Y FISICO + 2 PUNTOS POR CADA MONEDA QUE LE HAYA SOBRADO. MOSTRAR EL TOTAL DE PUNTOS A ASIGNAR, INVITARLO A PONERLE NOMBRE
A SU JUGADOR Y A ASIGNARLE ESAS ESTADISTICAS*/

alert(`TU EQUIPO ES: 
${equipo[0].nombre}
${equipo[1].nombre}
${equipo[2].nombre}
`)
console.log(``)
alert(`Pero falta un jugador: VOS`)
alert(`Ahora podes crear el cuarto jugador y darle un nombre`)
alert(`Tenes 100 puntos para asignar entre ataque, defensa y fisico`)
alert(`Ademas tenes dos puntos extra por cada moneda que te haya sobrado de la compra de jugadores`)
puntos = puntos + (monedas*2)
alert(`Te sobraron ${monedas} monedas, asi que tenes ${puntos} puntos para asignar `)
console.log(`
Ahora podes crearte un jugador. Las reglas son:
1.- De base tenes 100 puntos para asignar entre ataque, defensa y fisico.
2.- Ademas las monedas que te sobraron de la compra de jugadores se multiplican x2 y se convierten en puntos.
`)
console.log(``)

const jugadorCustom = new jugador()

let nombreCustom = prompt (`Ingresa el nombre de tu jugador`)
while (nombreCustom== "" ){
    alert(`El nombre ingresado no es valido, ingresa un nombre para tu jugador`)
    nombreCustom = prompt ()
}

jugadorCustom.nombre = nombreCustom

let ataqueCustom = parseInt(prompt(`Asigna puntos de ataque, te quedan ${puntos} puntos para asignar.`))
while (ataqueCustom>puntos || isNaN(ataqueCustom)){
    alert(`No te alcanza o ingresaste un formato no valido`)
    ataqueCustom = parseInt (prompt(`Asigna puntos de ataque, te quedan ${puntos} puntos para asignar.`))
}
jugadorCustom.ataque = ataqueCustom
puntos = puntos - ataqueCustom


let defensaCustom = parseInt(prompt(`Asigna puntos de defensa, te quedan ${puntos} puntos.`))
while (defensaCustom>puntos || isNaN(defensaCustom)){
    alert(`No te alcanza o ingresaste un formato no valido`)
    defensaCustom = parseInt(prompt(`Asigna puntos de defensa, te quedan ${puntos} puntos.`))
}
jugadorCustom.defensa = defensaCustom
puntos = puntos - defensaCustom


let fisicoCustom = parseInt(prompt(`Asigna puntos de fisico, te quedan ${puntos} puntos. Puntos base:5`))
while (fisicoCustom>puntos || isNaN(fisicoCustom)){
    alert(`No te alcanza o ingresaste un formato no valido`)
    fisicoCustom = parseInt(prompt(`Asigna puntos de fisico, te quedan ${puntos} puntos. Puntos base:5`))
}
jugadorCustom.fisico = fisicoCustom
puntos = puntos-fisicoCustom
console.log(``)
console.log(`TU JUGADOR : 
NOMBRE:${jugadorCustom.nombre}
ATAQUE:${jugadorCustom.ataque}
DEFENSA:${jugadorCustom.defensa}
FISICO: ${jugadorCustom.fisico}
`)
equipo.push(jugadorCustom)
alert(`Creaste un jugador que: 

se llama ${jugadorCustom.nombre} , tiene ${jugadorCustom.ataque} puntos de ataque, tiene ${jugadorCustom.defensa} puntos de defensa, y tiene ${jugadorCustom.fisico} puntos de fisico
`)

let nombreEquipo = prompt (`Finalmente, ponele un nombre a tu equipo!`)
while (nombreEquipo == "") {
    alert(`No ingresaste ningun valor, ponele nombre a tu equipo!`)
    nombreEquipo = prompt ()
}

equipoCustom.nombre = nombreEquipo

equipoCustom.sumarAtaque()
equipoCustom.sumarDefensa()
equipoCustom.sumarFisico()

alert(`Tu plantel es:`)

equipo.forEach ((el) =>{
    alert(`
    Nombre: ${el.nombre}
    Ataque: ${el.ataque}
    Defensa: ${el.defensa}
    Fisico: ${el.fisico}
    `)
})

alert(` 
Y JUNTOS SON:

${equipoCustom.nombre}
Ataque de equipo: ${equipoCustom.ataque}
Defensa de equipo: ${equipoCustom.defensa}
Fisico de Equipo: ${equipoCustom.fisico}
`)
console.log(``)
console.log(`RESUMEN DE TU EQUIPO:
${equipoCustom.nombre}

${equipoCustom.jugadores.forEach((el)=>{el.nombre})}

`)
/* 
AHORA SE ARMA EL EQUIPO DE LA PC CONTRA EL QUE JUGARA EL EQUIPO DEL USUARIO

*/ 


console.log(equipoCustom)
const mbappe = new jugador (`Kylian Mbappe`, 0, 90, 30, 10,)
const benzema = new jugador (`Karim Benzema`, 0, 80, 10, 40)
const lloris = new jugador (`Hugo Lloris`, 0, 0, 80, 90)
const varane = new jugador (`Rafael Varane`, 0, 20, 70, 70)

let jugadoresRival= [mbappe, benzema, lloris, varane]
let equipoRival = {
    nombre: "LOS SCRIPTADOS",
    ataque: 0,
    defensa: 0,
    fisico: 0,
    goles: 0,
    jugadores: jugadoresRival,
    sumarAtaqueR(){
        reducirAtaque(jugadoresRival)
        return this.ataque = totalAtaque
    },
    sumarDefensaR(){
        reducirDefensa(jugadoresRival)
        return this.defensa = totalDefensa
    },
    sumarFisicoR(){
        reducirFisico(jugadoresRival)
        return this.fisico = totalFisico
    }
}
equipoRival.sumarAtaqueR()
equipoRival.sumarDefensaR()
equipoRival.sumarFisicoR()

console.log(equipoRival)


/* AHORA LOS DOS EQUIPOS, EL DEL USUARIO Y LA PC, SE COLOCAN EN UN NUEVO ARRAY Y SE LOS LLAMARA DURANTE LA EMULACION POR SU ORDEN DENTRO DE ESE ARRAY. EL EQUIPO DEL USUARIO SIEMPRE QUEDARA EN EL INDICE 0, MIENTRAS QUE EL DE LA PC QUEDARA EN EL INDICE 1 */

alert(`Esta todo listo para el partido!
${equipoCustom.nombre} 
VS
${equipoRival.nombre} 
`)

const equiposPartido = []
equiposPartido.push(equipoCustom)
equiposPartido.push(equipoRival)


console.log(equiposPartido)

alert(` Se juega a un solo tiempo de 40 minutos  `)

console.log(`Saca del medio ${equiposPartido[0].nombre}`)
console.log(`SUS JUGADORES SON`)
equiposPartido[0].jugadores.forEach((el) => {return console.log(el.nombre)})
console.log(`Defiende ${equiposPartido[1].nombre}`)
console.log(`SUS JUGADORES SON`)
equiposPartido[1].jugadores.forEach((el) => {return console.log(el.nombre)})


/*LA SIMULACION DEL PARTIDO SIGUE LAS SIGUIENTES REGLAS:
1.- Se formula mediante funciones que, cuando el usuario ataca, son invocadas mediante su propia toma de decisiones.
2.- Cuando el usuario defiende, las decisiones del atacante son tomadas por el programa mediante el azar
3.- El resultado de la funcion es true en caso de que el atacante tenga exito, o false en caso de que el atacante fracase
4.- El resultado de la funcion nunca es fruto del azar sino de un calculo matematico entre las caracteristicas del atacante y las del defensor (puntos de ataque, puntos de defensa, puntos de fisico y puntos de energia)
5.- Todos los jugadores tienen 100 de energia al comenzar el partido, cada decision atacante resta energia. La energia es una estadistica que interviene en cada funcion de manera tal que dos jugadores que se enfrentan en un duelo al principio de un partido pueden obtener un resultado, pero luego en el final del partido otro diferente. Por ejemplo :

a -  Enzo Fernandez intenta un duelo individual contra Rafael Varane
b-   En este duelo interviene el ataque de Enzo(60) + la energia de Enzo(100) vs la defensa de Varane(50) + la Energia de Varane (100)
c-   Este duelo tiene como victorioso a Enzo por 160 puntos contra 150 puntos. Pero tiene un coste de 20 puntos de Energia, por lo que si el duelo se repite inmediatamente y Enzo intenta la misma maniobra, perdera 140 vs 150.
d-   Solo las acciones ofensivas tienen costo

6,- Perder un duelo implica el cambio de posesion, y el comienzo del ataque del equipo contrario.
7.- En todo momento el usuario (o el programa) pueden elegir patear al arco cuando estan atacando. Pero la distancia en que se encuentren del arco es decisiva en la probabilidad de hacer un GOL. Esa distancia se acorta cada vez que se gana un duelo. 
8.- La mayor cantidad de probabilidad de GOL se logra cuando, en ataque, se han ganado 4 duelos consecutivos. En ese momento se esta frente al arco y es obligatorio patear al arco.


*/

//FUNCIONES PARA EVENTOS Y RECURSOS DE LA SIMULACION DEL PARTIDO

function selectorIndice () {
        return Math.floor(Math.random() * (4 - 0) + 0);
}
function selectorPC () {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function determinaResultado (a,b){
    if (a>b) {
        return true
    } else {
        return false
    }
}
function dueloFisicoAtacante (jugadorAtacante, jugadorDefensor){
        let resultado = determinaResultado((jugadorAtacante.fisico + jugadorAtacante.energia), (jugadorDefensor.fisico+jugadorDefensor.energia))
        console.log (`El duelo fisico se da entre ${jugadorAtacante.nombre} y ${jugadorDefensor.nombre}`)
        console.log (`${jugadorAtacante.nombre} tiene ${jugadorAtacante.fisico} de fisico`)
        console.log (`${jugadorAtacante.nombre} tiene ${jugadorAtacante.energia} de energia`)
        console.log (`${jugadorDefensor.nombre} tiene ${jugadorDefensor.fisico} de fisico`)
        console.log (`${jugadorDefensor.nombre} tiene ${jugadorDefensor.energia} de energia`)
        console.log(resultado)
        if (resultado == true) {
            alert(`${jugadorAtacante.nombre} choca con ${jugadorDefensor.nombre}!`)
            alert(`${jugadorAtacante.nombre} gana el duelo. CONTINUA EL ATAQUE!`)
            console.log(`El duelo ha sido ganado por ${jugadorAtacante.nombre} por ${(jugadorAtacante.fisico + jugadorAtacante.energia)}  a  ${jugadorDefensor.fisico+jugadorDefensor.energia}`)
        } else {
            alert(`${jugadorAtacante.nombre} choca con ${jugadorDefensor.nombre}!`)
            alert(`Y SALE VOLANDO! ${jugadorDefensor.nombre} corta el ataque y recupera la posesion!`)
            console.log(`El duelo ha sido ganado por ${jugadorDefensor.nombre} por ${(jugadorDefensor.fisico + jugadorDefensor.energia)}  a  ${jugadorAtacante.fisico+jugadorAtacante.energia}`)
        }
        jugadorAtacante.fisico = jugadorAtacante.fisico - 5
        jugadorAtacante.energia = jugadorAtacante.energia -10
        console.log (`${jugadorAtacante.nombre} ahora tiene ${jugadorAtacante.energia} de energia y ${jugadorAtacante.fisico} de fisico`)
        return resultado
}

function dueloPase (jugadorAtacante, jugadorDefensor, indexAtaque){
    let resultado = determinaResultado((jugadorAtacante.ataque + jugadorAtacante.energia), (jugadorDefensor.defensa+jugadorDefensor.energia))
    console.log (`${jugadorAtacante.nombre} pasa la pelota, y ${jugadorDefensor.nombre} trata de interceptarla`)
    console.log (`${jugadorAtacante.nombre} tiene ${jugadorAtacante.ataque} de ataque`)
    console.log (`${jugadorAtacante.nombre} tiene ${jugadorAtacante.energia} de energia`)
    console.log (`${jugadorDefensor.nombre} tiene ${jugadorDefensor.defensa} de defensa`)
    console.log (`${jugadorDefensor.nombre} tiene ${jugadorDefensor.energia} de energia`)
    console.log(resultado)
    if (resultado == true) {
        console.log(`El duelo ha sido ganado por ${jugadorAtacante.nombre} por ${(jugadorAtacante.ataque + jugadorAtacante.energia)}  a  ${jugadorDefensor.defensa+jugadorDefensor.energia}`)
        alert(`BUEN PASE!`)
        nuevoJugadorAtacante = equiposPartido[indexAtaque].jugadores[selectorIndice()]
    } else {
        console.log(`El pase fue interceptado por ${jugadorDefensor.nombre} por ${(jugadorDefensor.defensa + jugadorDefensor.energia)}  a  ${jugadorAtacante.ataque+jugadorAtacante.energia}`)
        alert(`El pase fue interceptado por ${jugadorDefensor.nombre}. Recupera la pelota!`)   
    }
    jugadorAtacante.energia = jugadorAtacante.energia -10
    jugadorAtacante.ataque = jugadorAtacante.ataque -5
    console.log (`${jugadorAtacante.nombre} ahora tiene ${jugadorAtacante.energia} de energia y ${jugadorAtacante.ataque} de ataque`)
    console.log(jugadorAtacante)
    return resultado
}

function tiroArco (jugadorAtacante, jugadorDefensor,){
    let resultado = determinaResultado((jugadorAtacante.ataque - distancia) , (jugadorDefensor.defensa))
    return resultado
}

//INICIA PARTIDO


let posesion = 1
let distancia = 100
let resultado

function mostrarMarcador (){
    alert (`
    El marcador esta:
    ${equiposPartido[0].nombre} : ${equiposPartido[0].goles}
    ${equiposPartido[1].nombre} : ${equiposPartido[1].goles}
    `)
}
console.log(`INICIO DEL PARTIDO. SACA DEL MEDIO ${equiposPartido[0].nombre}`)
alert(`Saca del medio tu equipo.`)


//SEGMENTO USER
function segmentoUsuario (equipoAtacante, equipoDefensor,){
let index = selectorIndice()
let jugadorAtacante = equipoAtacante.jugadores[index]
index = selectorIndice()
let jugadorDefensor = equipoDefensor.jugadores[index]
console.log(`tiene la possesion ${jugadorAtacante.nombre}, lo marca ${jugadorDefensor.nombre}`)
alert(`La tiene ${jugadorAtacante.nombre}, el duelo es con ${jugadorDefensor.nombre}`)
do {
    let accion = parseInt(prompt(`
        Selecciona una accion:
        1.- Pase
        2.- Tiro al arco
        3.- Duelo fisico
        `)) 
    while (isNaN(accion) || accion > 3 || accion <1) {
        alert(`SELECCION NO VALIDA, INGRESA 1, 2 O 3`)
        accion = parseInt (prompt(`
        Selecciona una accion:
        1.- Pase
        2.- Tiro al arco
        3.- Duelo fisico
        `)) 
    }   
console.log(`la distancia es ${distancia}`)
switch (accion) {
// SI EL USUARIO SELECCIONA DUELO FISICO:
    case 3 : posesion = dueloFisicoAtacante (jugadorAtacante, jugadorDefensor)
    console.log (`la posesion es ${posesion}`)
    distancia = distancia -25
    break;
//SI EL USUARIO SELECCIONA PASE
    case 1 : posesion =  dueloPase(jugadorAtacante, jugadorDefensor, 0)
    if (posesion == true) {
        index = selectorIndice()
        jugadorAtacante = equipoAtacante.jugadores[index]
    }
    distancia = distancia -25
    break;
//SI EL USUARIO SELECCIONA TIRO
    case 2: 
    let resultado = tiroArco(jugadorAtacante, jugadorDefensor)
    if (distancia == 100) {
        console.log(`la distancia con el arco es ${distancia}`)
        alert(`Le pega desde demasiado lejos`)
    } else if (distancia == 75) {
        console.log(`la distancia con el arco es ${distancia}`)
        alert(`Prueba de larga distancia`)
    } else if (distancia == 50) {
        console.log(`la distancia con el arco es ${distancia}`)
        alert (`Prueba de media distancia`)
    } else if (distancia == 25){
        console.log(`la distancia con el arco es ${distancia}`)
        alert (`ESTA EN ZONA DE GOL!`)
    }
    if (resultado == true){
        equipoAtacante.goles = equipoAtacante.goles + 1
        alert(`GOOOOOOOOOOOOOOOL`)
        console.log(`GOL`)
        mostrarMarcador()
    } else if (resultado == false){
        alert(`LO ERRO! CAMBIO DE POSESION`)
    }
    posesion = false
    console.log(posesion)
    console.log(distancia)
}    
if (posesion == true) {
index = selectorIndice()
jugadorDefensor = equipoDefensor.jugadores[index]
console.log(`tiene la possesion ${jugadorAtacante.nombre}, lo marca ${jugadorDefensor.nombre}`)
alert(`La tiene ${jugadorAtacante.nombre}, el duelo es con  ${jugadorDefensor.nombre} `)
}
} while (posesion == true && distancia > 0)

if (posesion == true && distancia == 0){
    alert(`Estas frente al arco! Solo queda patear`)
    let resultado = tiroArco(jugadorAtacante, jugadorDefensor)
    if (resultado == true){
        equipoAtacante.goles = equipoAtacante.goles + 1
        alert(`GOOOOOOOOOOOOOOOL`)
        console.log(`GOL`)
        mostrarMarcador()
    } else if (resultado == false){
        alert(`LO ERRO! CAMBIO DE POSESION`)
    }
    posesion = false
console.log(posesion)
console.log(distancia)
}
}
//SEGMENTO PC
function segmentoPC(equipoAtacante, equipoDefensor,){
    let index = selectorIndice()
    let jugadorAtacante = equipoAtacante.jugadores[index]
    index = selectorIndice()
    let jugadorDefensor = equipoDefensor.jugadores[index]
    console.log(`tiene la possesion ${jugadorAtacante.nombre}, lo marca ${jugadorDefensor.nombre}`)
    alert(`La tiene ${jugadorAtacante.nombre}, el duelo es con ${jugadorDefensor.nombre}`)
    do {    
    let accion = selectorPC()
    console.log(`la distancia es ${distancia}`)
    switch (accion) {
    // SI EL USUARIO SELECCIONA DUELO FISICO:
        case 3 : 
        alert(`${jugadorAtacante.nombre} decide un duelo fisico`)
        console.log(`DUELO FISICO ${jugadorAtacante} vs ${jugadorDefensor}`)
        posesion = dueloFisicoAtacante (jugadorAtacante, jugadorDefensor)
        
        console.log (`la posesion es ${posesion}`)
        distancia = distancia -25
        break;
    //SI EL USUARIO SELECCIONA PASE
        case 1 : 
        alert(`${jugadorAtacante.nombre} decide intentar un pase. Podra interceptarlo ${jugadorDefensor.nombre}?`)
        console.log(`DUELO PASE ${jugadorAtacante} vs ${jugadorDefensor}`)
        posesion =  dueloPase(jugadorAtacante, jugadorDefensor, 0)
        if (posesion == true) {
            index = selectorIndice()
            jugadorAtacante = equipoAtacante.jugadores[index]
        }
        distancia = distancia -25
        break;
    //SI EL USUARIO SELECCIONA TIRO
        case 2: 
        alert(`${jugadorAtacante.nombre} PATEA AL ARCO!`)
        let resultado = tiroArco(jugadorAtacante, jugadorDefensor)
        if (distancia == 100) {
            console.log(`la distancia con el arco es ${distancia}`)
            alert(`Le pega desde demasiado lejos`)
        } else if (distancia == 75) {
            console.log(`la distancia con el arco es ${distancia}`)
            alert(`Prueba de larga distancia`)
        } else if (distancia == 50) {
            console.log(`la distancia con el arco es ${distancia}`)
            alert (`Prueba de media distancia`)
        } else if (distancia == 25){
            console.log(`la distancia con el arco es ${distancia}`)
            alert (`ESTA EN ZONA DE GOL!`)
        }
        if (resultado == true){
            equipoAtacante.goles = equipoAtacante.goles + 1
            alert(`GOOOOOOOOOOOOOOOL`)
            console.log(`GOL`)
            mostrarMarcador()
        } else if (resultado == false){
            alert(`LO ERRO! CAMBIO DE POSESION`)
        }
        posesion = false
        console.log(posesion)
        console.log(distancia)
    }    
    if (posesion == true) {
        index = selectorIndice()
        jugadorDefensor = equipoDefensor.jugadores[index]
        console.log(`tiene la possesion ${jugadorAtacante.nombre}, lo marca ${jugadorDefensor.nombre}`)
        alert(`La tiene ${jugadorAtacante.nombre}, el duelo es con  ${jugadorDefensor.nombre} `)
        }
    } while (posesion == true && distancia > 0)
    
    if (posesion == true && distancia == 0){
        alert(`Estas frente al arco! Solo queda patear`)
        let resultado = tiroArco(jugadorAtacante, jugadorDefensor)
        if (resultado == true){
            equipoAtacante.goles = equipoAtacante.goles + 1
            alert(`GOOOOOOOOOOOOOOOL`)
            console.log(`GOL`)
            mostrarMarcador()
        } else if (resultado == false){
            alert(`LO ERRO! CAMBIO DE POSESION`)
        }
        posesion = false
    console.log(posesion)
    console.log(distancia)
    }
    }

let tiempo = 0
while (tiempo < 40){
segmentoUsuario (equiposPartido[0], equiposPartido[1])
//SI EL USUARIO PIERDE LO POSESION O ERRA EL TIRO (SE REINICIAN LOS VALORES POSESION Y DISTANCIA AL VALOR ORIGINAL)
if (posesion == false) {
    posesion = true
    distancia = 100
}
console.log(`valores de posesion y distancia reseteados`)
console.log(posesion)
console.log(distancia)

segmentoPC (equiposPartido[1], equiposPartido[0])
if (posesion == false) {
    posesion = true
    distancia = 100
}
console.log(`valores de posesion y distancia reseteados`)
console.log(posesion)
console.log(distancia)
tiempo = tiempo +10
alert(`van ${tiempo} minutos`)
}

alert(`EL ARBITRO MARCA EL FINAAAAAL`)
mostrarMarcador()
alert(`Fin del programa`)

/* LA MAYOR PARTE DEL CODIGO ES FEEDBACK Y DEBERIA SER REEMPLAZADO POR REPRESENTACIONES GRAFICAS EN EL DOM.    */