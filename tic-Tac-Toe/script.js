
let turn = "X";
let gameover = false;
let filled = true;
let a = 0;
const changeturn = () => {
    turn = (turn === "X" ? "0" : "X");
    return turn;

}

const checkwin = () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    win.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + "won";
            gameover = true;
            document.querySelector(".win-streak").style.width = "200px";
            if (gameover) {
                document.querySelector(".win-streak").innerText = turn + "Won";
            }


        }


    })
};
// withdraw case
const withdraw = () => {
    if(gameover) {
        return
    }
    let boxtexts= document.querySelectorAll('.boxtext')
    let boxFull = Array.from(boxtexts).every(box => box.innerText !== "")
    if (boxFull && !gameover) {
        gameover = true;
        document.querySelector(".info").innerText = 'Draw';
        document.querySelector(".win-streak").style.width = "200px";
        if (gameover){
            document.querySelector(".win-streak").innerText = 'withdraw';
 
        }
    }
}






let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            checkwin();
            withdraw();
            turn = changeturn();

            if (!gameover) {
                document.querySelector(".info").innerText = 'Turn for' + turn;
            }
        }

    });


});
let reset = document.getElementById("reset");

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach(element => {
        element.innerText = ''
    });
    turn = "X"
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = 'Turn for' + turn;
    document.querySelector(".win-streak").innerText = "";

})