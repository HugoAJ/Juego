window.addEventListener('load', () =>{
    const playerOne = 'X';
    const playerTwo = 'O';

    let turn = playerOne;
    const game = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    const BOXES = document.querySelectorAll('.box');

    const isFull = () => {
        const CP_BOXES = [...game].flat(Infinity);
        const isTotal = CP_BOXES.every(box => box !== null);
        return isTotal;
    }

    const checkGame = () => {
        const isWinnerRowOne = [game[0][0], game[0][1], game[0][2]].every(item => item === game[0][0]);
        const isWinnerRowTwo = [game[1][0], game[1][1], game[1][2]].every(item => item === game[1][0]);
        const isWinnerRowThree = [game[2][0], game[2][1], game[2][2]].every(item => item === game[2][0]);

        const isWinnerColOne = [game[0][0], game[1][0], game[2][0]].every(item => item === game[0][0]);
        const isWinnerColTwo = [game[0][1], game[1][1], game[2][1]].every(item => item === game[0][1]);
        const isWinnerColThree = [game[0][2], game[1][2], game[2][2]].every(item => item === game[0][2]);

        const isWinnerDiagOne = [game[0][0], game[1][1], game[2][2]].every(item => item === game[0][0]);
        const isWinnerDiagTwo = [game[0][2], game[1][1], game[2][0]].every(item => item === game[0][2]);
        

        if (isWinnerDiagOne) {
            //alert('ganador');
            if (game[0][0] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
        if (isWinnerDiagTwo) {
            //alert('ganador');
            if (game[0][2] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
        if (isWinnerColOne) {
            //alert('ganador');
            if (game[0][0] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
        if (isWinnerColTwo) {
            //alert('ganador');
            if (game[0][1] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
        if (isWinnerColThree) {
            //alert('ganador');
            if (game[0][2] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
        if (isWinnerRowOne) {
            //alert('ganador');
            if (game[0][0] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
        if (isWinnerRowTwo) {
            //alert('ganador');
            if (game[1][0] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
        if (isWinnerRowThree) {
            //alert('ganador');
            if (game[2][0] === 0){
                alert('Ganador X')
            }
            else {
                alert('Ganador 0')
            }
            //alert(game[0][0])
            window.location.reload();
            return;
        }
    }

    BOXES.forEach((box) =>{
        box.addEventListener('click', () =>{
            const row = box.getAttribute('data-row');
            const col = box.getAttribute('data-col');
            game[row][col] = turn === playerOne ? 0 : 1;
            box.innerHTML = turn;
            turn = turn === playerOne ? playerTwo : playerOne;
            if (isFull()) {
                checkGame();
            }
            console.log(isFull());
        })
    })

})