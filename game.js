let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".resetButton");
let newGame= document.querySelector("#newGame");
let winContainer= document.querySelector(".msg");
let winMessage= document.querySelector("#win");


let valu= true;
let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = ()=>
{
    valu = true;
    count=0;
    enableBox();
    winContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(valu===true){
            box.innerText = 'O';
            valu=false;
        }
        else{
            box.innerText = 'X';
            valu=true;
        }
        box.disabled=true;
        count++;

       let gotWinner= checkWinner();

       if(count===9 && !gotWinner){
        gameDrow();
       }

    })  
});

const gameDrow= ()=>{
    winMessage.innerText = `Oops Game was DROW \n\n Play agyan😀`;
    winContainer.classList.remove("hide");
    disableBox();
};

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};


const winnerMessage = (winner)=>{
    winMessage.innerText = `🎊Congratulation🎊 \n\n 🎉Winner is ${winner}🎉`;
    winContainer.classList.remove("hide");
    disableBox();
};

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                winnerMessage(pos1);
            }
        }
    }

};

resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);