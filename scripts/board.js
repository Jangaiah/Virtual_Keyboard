/*
**** Board factory
*/

function Board(inBox){
var smallLet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var board,bord_on_off=false;
function createBoard(){
board = document.createElement("ul");
board.className="off-board";
for(let x=0; x<smallLet.length;x++){
 let i=new Key();
  i.bindKey(board);
  i.keyLabel(smallLet[x]);
  i.addValue(inBox);
}
let i=new Key();
  i.bindKey(board);
  i.keyLabel("<--");
  i.removeValue(inBox);

bindBoard(inBox.parentNode);
}

function bindBoard(k){
    k.appendChild(board);
 };

createBoard();

this.toggleBoard=function(ele){
ele.addEventListener("click",function(){
 bord_on_off=!bord_on_off;
 if(bord_on_off) board.className="on-board";
 else board.className="off-board";
})
};
 

}