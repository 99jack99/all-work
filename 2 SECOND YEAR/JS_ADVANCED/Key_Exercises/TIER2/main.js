document.addEventListener('DOMContentLoaded', () => {

    /**
     * Ejercicio 1: Implementa la función randomInt, la cual debe tomar como parámetro un valor mínimo
     * y un valor máximo. La función devolverá un entero entre ese mínimo y ese máximo (ambos incluidos)
     * */

    /**
     * Devuelve un número aleatorio entero entre un mínimo y un máximo (ambos incluidos)
     * @param {number} minValue - El valor mínimo que se puede generar
     * @param {number} maxValue - El valor máximo que se puede generar
     * @returns {number} Un número aleatorio entre
     */

    function randomInt(minValue, maxValue) {
        
        let number=Math.round(Math.random()*maxValue)

            if (number > minValue){
                return number
            }
    }

    /**
     * Ejercicio 2: Implementa la función isValidPosition que tomará un número de fila y columna como parámetro y 
     * determinará si la posición es válida. Una posición es válida si es una fila de la 1 a la 8 y si la columna va
     * de la 1 a la 8.
     */

    /**
     * Determina si la posición especificada es válida. Una posición es válida si es una fila de la 1 a la 8 y
     * si la columna es una casilla de la 1 a la 8
     * @param {number} row - El número de fila de la posición
     * @param {number} column - El número de columna de la posición
     * @returns {boolean} cierto en caso de que la posición sea válida, falso en caso contrario
     */


    function isValidPosition(row, column) {
        if ((row >= 1 && row <= 8) && (column >= 1 && column <= 8)) {
            return true
        }
        else{
            return false
        }
    }





    /**
     * Calcula una nueva posición para el monstruo
     * @param {number} row - El número de fila en la que se encuentra el monstruo
     * @param {number} column - El número de columna en la que se encuentra el monstruo
     * @param {number} targetRow - El número de fila de la casilla a la cual quieres que se acerque el monstruo
     * @param {number} targetColumn - El número de columna de la casilla a la cual quieres que se acerque el monstruo
     * @returns {Array} Un nuevo array de dos posiciones que contiene el nuevo número de fila y columna para el monstruo
     */
    function calculateBossMove(row, column, targetRow, targetColumn) {
        let newPosition = [];

        let minDistance = Number.POSITIVE_INFINITY;
        let possiblePositions = [[row - 1, column], [row + 1, column], [row, column - 1], [row, column + 1]];
        for (let position of possiblePositions) {
            if (isValidPosition(position[0], position[1])) {
                let distance = Math.abs(targetRow - position[0]) + Math.abs(targetColumn - position[1]);
                if (distance < minDistance) {
                    minDistance = distance;
                    newPosition = position;
                }
            }
        }
        return newPosition;
    }

    /**
     * Ejercicio 3: Construye la función isValidMove, la cual tomará por parámetro un número de fila y columna actual
     * un número de fila y columna a la que quieres moverte, y determine si el movimiento es válido (cierto).
     * Un personaje únicamente puede moverse a izquierda, derecha, arriba, y abajo, además de respetar
     * los límites del tablero.
     */

    /**
     * Determina si es posible mover de la posición actual (número de fila y columna) a otra posición (número de fila y columna) pasadas por parámetro
     * Cada personaje únicamente puede moverse arriba, abajo, izquierda, derecha y no salirse de los límites del tablero
     * @param {number} row - El número de fila actual
     * @param {number} column - El número de columna actual
     * @param {number} newRow - El número fila al que quieres mover
     * @param {number} newColumn - El número de columna al que quieres mover
     * @returns {boolean} cierto en caso de que el movimiento sea válida, falso en caso contrario
     */
    function isValidMove(row, column, newRow, newColumn) {
        if (newRow == row - 1 || newRow == row + 1 ){
            if (newRow < 1 || newRow > 8) {
                return false
            }

            else{
                return true
            }
        } 
        
        else if(newColumn == column -1 || newColumn == column + 1) {
            if (newColumn < 1 || newColumn > 8) {
                return false
            }

            else{
                return true
            } 
        }
        
    }

    /**
     * Ejercicio 4: Implementa las funciones drawHero, drawBoss, y removeCharacter
     * La primera dibuja el héroe en el número de fila y columna especificada poniendo el atributo src de la imagen a la imagen hero.png dentro del directorio images
     * La segunda dibuja el monstruo en el número de fila y columna especificada poniendo el atributo src de la imagen a la imagen boss.png dentro del directorio images
     * La tercera deja el atributo src de la imagen en la fila y columna especificada a cadena vacía
     */

    /**
     * Dibuja el héroe en el número de fila y columna especificada. La imagen del héroe se encuentra dentro 
     * de la carpeta images
     * @param {number} row - El número de fila
     * @param {number} column - El número de columna
     */
    function drawHero(row, column) {
        let tabla=document.getElementById("cell_"+row+"_"+column+"")
        tabla.firstElementChild.setAttribute("src","images/hero.png")
    }

    /**
     * Dibuja el monstruo en el número de fila y columna especificada. La imagen del monstruo se encuentra 
     * dentro de la carpeta images
     * @param {number} row - El número de fila
     * @param {number} column  - El número de columna
     */
    function drawBoss(row, column) {
        let tabla=document.getElementById("cell_"+row+"_"+column+"")
        tabla.firstElementChild.setAttribute("src","images/boss.png")
    }

    /**
     * Quita el contenido (cadena vacía) del atributo src de la imagen encontrada en el número de fila y columna especificada
     * @param {number} row - El número de fila
     * @param {number} column - El número de columna
     */
    function removeCharacter(row, column) {
        let tabla=document.getElementById("cell_"+row+"_"+column+"")
        tabla.firstElementChild.setAttribute("src","")
    }

    //Ejercicio 5: Da una posición inicial aleatoria al héroe, y una posición inicial aleatoria al monstruo. Prepara el
    //tablero para el juego

    let heroRow=randomInt(1,8)
    let heroColumn=randomInt(1,8)
    let bossRow=randomInt(1,8)
    let bossColumn=randomInt(1,8)
    let turns = 8; //Número de turnos del juego

    drawBoss(bossRow,bossColumn)
    drawHero(heroRow,heroColumn)


    /**
     * Ejercicio 6: Implementa la lógica del juego. En este juego, nuestro héroe es muy débil y debe huir del monstruo.
     * El jugador controlará el héroe, mientras que la IA controlará al monstruo. El jugador gana si llegamos a 0 turnos
     * y el monstruo nunca ha atrapado al héroe. La máquina gana cuando el monstruo y el héroe coinciden en la misma casilla
     * Cada vez que se haga click sobre una casilla del tablero
      
     
     *  - Se debe informar al usuario si 
      el movimiento es inválido y en ese caso no contabilizar el turno (no hacer nada)
     
     *  - Siempre que el movimiento sea válido, se deberá mover al héroe así como al monstruo.
     *  - Se debe actualizar el contador de turnos
     *  - Se debe detectar e informar en caso de que el monstruo gane
     *  - Se debe detectar e informar en caso de que el caballero gane
     */


    let tablero=document.getElementById("board")

    tablero.addEventListener("click", event =>{

    let cajaActual=event.target.id
    let filycol=cajaActual.split("_");

        

    if (isValidMove(heroRow, heroColumn, filycol[1], filycol[2]) == true){
        alert("Buen movimiento¡")
        
        drawHero(filycol[1],filycol[2])
        removeCharacter(heroRow, heroColumn)
        document.getElementsByTagName("h3").textContent=turns - 1;
    }
    
    else{
        alert("No puedes hacer ese movimiento¡")
    }


    if(heroRow == bossRow && heroColumn == bossColumn){
        alert("Has perdido¡")
    }

    if(document.getElementsByTagName("h3").textContent=0){
        alert("Has ganado¡")
        
    }

    
    })

});