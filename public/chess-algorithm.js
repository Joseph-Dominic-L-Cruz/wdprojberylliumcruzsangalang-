//The blocks of code below relate to the date and time features of the website.

// This block of code defines a function that will change the copyright year within the web page's footer area.

function changeYear(id) {
  let date = new Date();
  document.getElementById(id).innerHTML = date.getFullYear(); //Update the year within the copyright notice by encoding it in its respective HTML tag.
}

// This block of code defines a function that will change the date that the web page was last updated. 
// It will obtain the content from the meta tag housing the date at which the web page was last revised in the form of a string, convert it into an array whose elements are the parts of the said date (i.e. day, month, and year), and match each part of the array to its corresponding variable. 

function changeDate(id) {
  let date = document.getElementById("revised").content;
  let dateInfo = date.split("/");
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; //Define array containing the months of the year
  let month = months[parseInt(dateInfo[0]) - 1]; //Match the element of the dateInfo array that contains the numeric month that the webpage was last revised with its corresponding month in words.
  let year = dateInfo[2]
  let day = dateInfo[1]
  document.getElementById(id).innerHTML = `Last updated: ${month} ${day}, ${year}`//Display date in its corresponding HTML tag.
}

//Call date and time functions.

changeYear("year");
changeDate("date");

let chessBoard = [ //array of chess board
    ['R2','N2','B2','Q2','K2','B2','N2','R2'],
    ['a2','b2','c2','d2','e2','f2','g2','h2'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0',"0",'0','0','0','0','0'],
    ['a1','b1','c1','d1','e1','f1','g1','h1'],
    ['R1','N1','B1',"Q1","K1","B1","N1","R1"]
  ]

function rowConv(a){
  let file = a;
  switch(file){
    case 0:
      file = "a";
      break;
    case 1:
      file = "b";
      break;
    case 2:
      file = "c";
      break;
    case 3:
      file = "d";
      break;
    case 4:
      file = "e";
      break;
    case 5:
      file = "f";
      break;
    case 6:
      file = "g";
      break;
    case 7:
      file = "h";
      break;
  }
  return file
}

function boardDisplay(a, arr){
  let html = `<div id = '${a}' class = "chess">`
  let boardArray = arr
  console.log(boardArray)
  let x = 0
  let w= "whiteSquare"
  let b = "blackSquare"
  let debugString = ""
  for(let i =0; i<8; i++){
    if(x%2==0){
      for(let j = 0; j<8; j++){
        let m = 8-i+""
        let id = rowConv(j)+m
        let id1 = id+ "1"

        let pieceId = arr[i][j]
        let newid = "pieceId" + id

        if(j%2==0){
          html += "\n\t<div id = "+"'"+id+"'"+" class = "+"'"+w+"'"+" ondrop='drop(event)' ondragover='allowDrop(event)'>"
        }else {
          html += "\n\t<div id = "+"'"+id+"'"+" class = "+"'"+b+"'"+" ondrop='drop(event)' ondragover='allowDrop(event)'>"
        } 
        debugString += pieceId + "\t"
        switch(pieceId){
          case "a2":
          case "b2":
          case "c2":
          case "d2":
          case "e2":
          case "f2":
          case "g2":
          case "h2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/68px-Chess_pdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"
            break
          case "R2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "Q2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/68px-Chess_qdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "B2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "N2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break

          case "a1":
          case "b1":
          case "c1":
          case "d1":
          case "e1":
          case "f1":
          case "g1":
          case "h1":
            console.log("pawn " + pieceId)
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/68px-Chess_plt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break


          case "R1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "Q1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "B1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "N1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break


          case "K1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "K2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/68px-Chess_kdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
        }

        html+= "</div>"

      }
       debugString += "\n"
    } else {
      for(let j = 0; j<8; j++){
        let m = 8-i+""
        let id = rowConv(j)+m
        let id1 = id+ "1"
        let pieceId = boardArray[i][j]
        let newid = "pieceId" + id

        if(j%2==0){
          html += "\n\t<div id = "+"'"+id+"'"+" class = "+"'"+b+"'"+" ondrop='drop(event)' ondragover='allowDrop(event)'>"
        }else {
          html += "\n\t<div id = "+"'"+id+"'"+" class = "+"'"+w+"'"+" ondrop='drop(event)' ondragover='allowDrop(event)'>"
        } 
        debugString += pieceId + "\t"
        switch(pieceId){
          case "a2":
          case "b2":
          case "c2":
          case "d2":
          case "e2":
          case "f2":
          case "g2":
          case "h2":
            console.log("pawn " + pieceId)
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/68px-Chess_pdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"
            break
          case "R2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "Q2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/68px-Chess_qdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "B2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "N2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break


          case "a1":
          case "b1":
          case "c1":
          case "d1":
          case "e1":
          case "f1":
          case "g1":
          case "h1":
            console.log("pawn " + pieceId)
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/68px-Chess_plt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break


          case "R1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "Q1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "B1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "N1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break

          case "K1":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
          case "K2":
            html+="<img id=  "+"'"+newid+"'"+" src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/68px-Chess_kdt45.svg.png' draggable='true' ondragstart='drag(event)' width='50' height='50'>"  
            break
        }
        html+= "</div>"

      }
      debugString += "\n"
    }
    x++

  }
  html+="\n</div>"
  //html+= "\n <style> \n .chess{width = 80vw;height = 80vw;} .blackSquare {   width: 12.5%;    height: 12.5%;    float: left;    background-color: 	84240c; position: relative;  display: flex;  align-items: center;  justify-content: center;}.whiteSquare {    width: 12.5%;    height: 12.5%;   float: left;   background-color: 	#ffc18c;    position: relative;    display: flex;  align-items: center;    justify-content: center;}img {  height = 80px;  width = 80px;}@media (min-width: 600px){    .chess{        width: 500px;       height: 500px;    }} \n </style>" 
  console.log(document.getElementById(a))
  document.getElementById(a).innerHTML = html
}

function allowDrop(ev) {
  ev.preventDefault();
}


var boardArray = [ //array of chess board
  ['R2','N2','B2','Q2','K2','B2','N2','R2'],
  ['a2','b2','c2','d2','e2',"f2",'g2','h2'],
  ['0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0'],
  ['0','0','0','0','0','0','0','0'],
  ['0','0',"0",'0','0','0','0','0'],
  ['a1','b1','c1','d1','e1','f1','g1','h1'],
  ['R1','N1','B1',"Q1","K1","B1","N1","R1"]
]



console.log(undefined + "")


function htmlMove(){
  let boxinput = document.getElementById("input1").value + ""
  let pieceLo = boxinput.substr(0,2)
  let moveLo = boxinput.substr(2,2)
  let promote = boxinput.substr(4,2)
  const start = Date.now()
  console.log(promote)
  newMove(pieceLo, moveLo, promote)
  document.getElementById("display").innerHTML = chessDisplay();
  const end = Date.now();
  console.log("Start time: "+ start)
  console.log(`Execution time: ${end - start} ms`);
  console.log("end time: " +end)
}

function fileConv(file) {
  switch(file){
    case "a":
      file = 0;
      break;
    case "b":
      file = 1;
      break;
    case "c":
      file = 2;
      break;
    case "d":
      file = 3;
      break;
    case "e":
      file = 4;
      break;
    case "f":
      file = 5;
      break;
    case "g":
      file = 6;
      break;
    case "h":
      file = 7;
      break;
  }
  return file;
} // returns numerical value of the file label given the letter (a=>1, g=>7, etc.)

function numConv(file, rank){ 
  switch(file){
    case 0:
      file = "a";
      break;
    case 1:
      file = "b";
      break;
    case 2:
      file = "c";
      break;
    case 3:
      file = "d";
      break;
    case 4:
      file = "e";
      break;
    case 5:
      file = "f";
      break;
    case 6:
      file = "g";
      break;
    case 7:
      file = "h";
      break;
  }
  rank = rank
  rank = Math.abs(rank-8)
  return file+ "" +rank
} // returns the string value (a1, h4, e4, etc.) of the location given the array index of the file and rank ([0,1], [2,0], [7,7], etc.)

function boardLocate(location){
  console.log(location)
  let file = location.substr(0, 1);
  let rank = location.substr(1, 1)*1;
  switch(file){
    case "a":
      file = 0;
      break;
    case "b":
      file = 1;
      break;
    case "c":
      file = 2;
      break;
    case "d":
      file = 3;
      break;
    case "e":
      file = 4;
      break;
    case "f":
      file = 5;
      break;
    case "g":
      file = 6;
      break;
    case "h":
      file = 7;
      break;

  }

  return boardArray[Math.abs(rank-8)][file]

} // returns the value on the board given the label of the square (a1, h4, e4, etc.)

function chessDisplay(){

  var display = "<table>";
  for(let i = 0; i<=7; i++){
    display += "<tr>\n"
    for(let j = 0; j<=7; j++){
      display += "\t\n<th>" + boardArray[i][j] + "\t</th>" 
    }
    display += "\n</tr> \n"
  }
  display += "</table>"
  return display;
} // displays the chessboard in an orderly manner in HTML
function boardreset(){
  let resetBoard = [ //array of chess board
    ['R2','N2','B2','Q2','K2','B2','N2','R2'],
    ['a2','b2','c2','d2','e2','f2','g2','h2'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0','0','0','0','0','0','0'],
    ['0','0',"0",'0','0','0','0','0'],
    ['a1','b1','c1','d1','e1','f1','g1','h1'],
    ['R1','N1','B1',"Q1","K1","B1","N1","R1"]
  ]
  boardArray = resetBoard
  document.getElementById("display").innerHTML = chessDisplay();
  console.log(resetBoard)
} // resets the board's positions to the normal chessboard


function slidingLegals(file, rank, color, id) {
  let moveArr = []
  console.log("slidingLegals" + color)
  console.log(file,rank)

  if(id == "R" || id == "Q"){
    console.log("Rook")
    console.log("+rank")
    for(let i = file+1; i < 8; i++){
      if(boardLocate(numConv(i,rank))== '0' ){
        console.log("boardLocate: "+ boardLocate(numConv(i,rank)))
        moveArr.push(numConv(i,rank))
      } else if(boardLocate(numConv(i,rank)).substr(1,1) != color){
        console.log(boardLocate(numConv(i,rank)).substr(1,1)+ " " + numConv(i,rank))
        moveArr.push(numConv(i,rank))
        i = 8
      } else {
        console.log("break")
        i = 8
      }
    }
    console.log("-rank")
    for(let i = file-1; i >= 0; i = i-1){
      console.log(i,rank)
      if(boardLocate(numConv(i,rank))== '0' ){
        console.log("boardLocate: "+ boardLocate(numConv(i,rank)))
        moveArr.push(numConv(i,rank))
      } else if(boardLocate(numConv(i,rank)).substr(1,1) != color){
        console.log(boardLocate(numConv(i,rank)).substr(1,1)+ " " + numConv(i,rank))
        moveArr.push(numConv(i,rank))
        i = -1
      }else {
        i = -1
        console.log("break")
      }


    }
    console.log("+file")
    for(let i = rank+1; i < 8; i++){
      if(boardLocate(numConv(file,i))== '0' ){
        console.log("boardLocate: "+ boardLocate(numConv(file,i)))
        moveArr.push(numConv(file,i))
      } else if(boardLocate(numConv(file,i)).substr(1,1) != color){
        console.log(boardLocate(numConv(file,i)).substr(1,1)+ " " + numConv(file,i))
        moveArr.push(numConv(file,i))
        i=8
      } else {
        console.log("break")
        i = 8
      }
    }
    console.log("-file")
    for(let i = rank-1; i >= 0; i=i-1){
      if(boardLocate(numConv(file,i))== '0' ){
        console.log("boardLocate: "+ boardLocate(numConv(file,i)))
        moveArr.push(numConv(file,i))
      } else if(boardLocate(numConv(file,i)).substr(1,1) != color){
        console.log(boardLocate(numConv(file,i)).substr(1,1)+ " " + numConv(file,i))
        moveArr.push(numConv(file,i))
        i = -1
      } else {
        console.log("break")
        i = -1
      }
    }  
  }

  if(id == "B" || id == "Q"){
    console.log("Bishop")
    // --------------------------positive-positive direction 
    console.log("positive-positive")
    for(let i = 1; i < 8; i++){
      let x = file +i
      let y = rank +i
      if(x< 0 || x> 7|| y< 0 || y> 7|| boardArray[y][x] == undefined){ 
        break
      }

      console.log(numConv(x, y))

      console.log(numConv(x, y))
      if(boardArray[y][x] != '0'){
        console.log("not zero")
        if(color == boardArray[y][x].substr(1,1)){
          console.log("break")
          break
        } else {
          moveArr.push(numConv(x,y))
          console.log(moveArr)
          break
        }
      }else{
        console.log("is zero")
        moveArr.push(numConv(x,y))
      }
    }

    // --------------------------negative-positive direction 
    console.log("negative-positive")
    for(let i = 1; i < 8; i++){
      let x = file -i
      let y = rank +i
      if(x< 0 || x> 7|| y< 0 || y> 7|| boardArray[y][x] == undefined){ 
        break
      }

      console.log(numConv(x, y))

      console.log(numConv(x, y))
      if(boardArray[y][x] != '0'){
        console.log("not zero")
        if(color == boardArray[y][x].substr(1,1)){
          console.log("break")
          break
        } else {
          moveArr.push(numConv(x,y))
          console.log(moveArr)
          break
        }
      }else{
        console.log("is zero")
        moveArr.push(numConv(x,y))
      }
    }

    // --------------------------positive-positive direction (upper right)
    console.log("positive-negative")
    for(let i = 1; i < 8; i++){
      let x = file +i
      let y = rank -i
      if(x< 0 || x> 7|| y< 0 || y> 7|| boardArray[y][x] == undefined){ 
        break
      }



      console.log(numConv(x, y))
      if(boardArray[y][x] != '0'){
        console.log("not zero")
        if(color == boardArray[y][x].substr(1,1)){
          console.log("break")
          break
        } else {
          moveArr.push(numConv(x,y))
          console.log(moveArr)
          break
        }
      }else{
        console.log("is zero")
        moveArr.push(numConv(x,y))
      }
    }

    // --------------------------positive-positive direction (upper right)
    console.log("negative-negative")
    for(let i = 1; i < 8; i++){
      let x = file -i
      let y = rank -i
      if(x< 0 || x> 7|| y< 0 || y> 7|| boardArray[y][x] == undefined){ 
        break
      }

      console.log(numConv(x, y))
      if(boardArray[y][x] != '0'){
        console.log("not zero")
        if(color == boardArray[y][x].substr(1,1)){
          console.log("break")
          break
        } else {
          moveArr.push(numConv(x,y))
          console.log(moveArr)
          break
        }
      }else{
        console.log("is zero")
        moveArr.push(numConv(x,y))
      }
    }
  }



  console.log(moveArr)
  return moveArr;

} // for bishop, rook, and queen
function movingKnightly(file, rank, color, id){
  let arr = [[2, 1], [-2, 1], [2, -1], [-2, -1],[1, 2], [-1, 2], [1, -2], [-1, -2]];
  let moArr = []

  for(let i = 0; i <=arr.length-1; i ++ ){
    console.log("i:"+ i)
    console.log(arr[i][1]+rank)
    if(arr[i][0]+file <= 7 && arr[i][0]+file >= 0 && arr[i][1]+rank <= 7 && arr[i][1]+rank >= 0){
      if(boardArray[arr[i][1]+rank][arr[i][0]+file] != '0' && boardArray[arr[i][1]+rank][arr[i][0]+file].substr(1,1) == color){

      } else {
        moArr.push(numConv(arr[i][0]+file, arr[i][1]+rank))
      }

    }
  }
  console.log(moArr)
  return moArr;
} // for knights
function royalMovement(file, rank, color, id){
  let arr = [
    [1,0], [-1,0], [0,1], [0,-1], 
    [1,1], [-1,-1], [-1, 1], [1,-1]
  ];
  let moArr = []
  for(let i = 0; i <=arr.length-1; i ++ ){
    if(arr[i][0]+file <= 7 && arr[i][0]+file >= 0 && arr[i][1]+rank <= 7 && arr[i][1]+rank >= 0){
      if(boardArray[arr[i][1]+rank][arr[i][0]+file].substr(1,1) != color){
        moArr.push(numConv(arr[i][0]+file, arr[i][1]+rank))
      } else if(boardArray[arr[i][1]+rank][arr[i][0]+file] == '0'){
        moArr.push(numConv(arr[i][0]+file, arr[i][1]+rank))
      }

    }
  }
  return moArr;

} // for king movement
let enPassantBool = 0;
let passant = {
  capturer: "",
  moveLoc: "",
  mover1: "",
  mover2: ""
}
function peasantry(file, rank, color, id) {
  let p = 1;
  let moArr = []
  if(color == 2){
    p = -1;
  }

  let dbMovechecker = (5/2)*p+(7/2)
  console.log("dbmovechecker: "+dbMovechecker)
  let letters = "a,b,c,d,e,f,g,h"
  let letterList = letters.split(',')
  if(boardArray[rank-p][file] != undefined){
    if(boardArray[rank-p][file] == '0'){
      moArr.push(numConv(file, rank-p))
      if(rank == dbMovechecker && boardArray[rank-p*2][file] == '0'&& boardArray[rank-p*2][file]!= undefined){
        moArr.push(numConv(file, rank-p*2))
        console.log( boardArray[rank-p*2][file+1])
        console.log("Passant1 -> file: ", (file+1), "  rank: ", rank-p*2, "  content: ", boardArray[rank-p*2][file+1].substr(0,1) )
        console.log("letter array: " + letterList + " bool: "+letterList.includes(boardArray[rank-p*2][file+1].substr(0,1)))
        console.log("file +1: "+boardArray[rank-p*2][file+1] +"  file -1: "+ boardArray[rank-p*2][file-1])
        if(boardArray[rank-p*2][file+1] != undefined){
          console.log("file+1")
          if(letterList.includes(boardArray[rank-p*2][file+1].substr(0,1))){
            passant.capturer = numConv(file, rank-p*2)
            passant.moveLoc = numConv(file, rank-p)
            passant.mover1 = numConv(file+1, rank-p*2)
            enPassantBool = 1
          }
        }
        console.log("Passant2 -> file: ", (file-1), "  rank: ", rank-p*2, "  content: ", boardArray[rank-p*2][file-1] )
        if(boardArray[rank-p*2][file-1] != undefined){
          console.log("file-1")
          if(letterList.includes(boardArray[rank-p*2][file-1].substr(0,1))){
            passant.capturer = numConv(file, rank-p*2)
            passant.moveLoc = numConv(file, rank-p)
            passant.mover2 = numConv(file-1, rank-p*2)
            enPassantBool = 1
          }
        }
      }

    }
  }
  console.log(passant)
  let arr = [[1,1], [1,-1]]
  for(let i = 0; i <=arr.length-1; i ++ ){
    if(arr[i][0]*p+file <= 7 && arr[i][0]*p+file >= 0 && arr[i][1]*p+rank <= 7 && arr[i][1]*p+rank >= 0){
      console.log("p:"+p+"  i:"+i+"  arr[i]:"+arr[i]+ "  move:"+numConv(arr[i][0]*p+file, arr[i][1]*p+rank))
      if(boardArray[arr[i][1]*p+rank][arr[i][0]*p+file] != '0'){

        if(boardArray[arr[i][1]*p+rank][arr[i][0]*p+file].substr(1,1) != color){
          console.log("p:"+p+" i:"+i+" arr[i]:"+arr[i]+ " move:"+numConv(arr[i][0]*p+file, arr[i][1]*p+rank))
          moArr.push(numConv(arr[i][0]*p+file, arr[i][1]*p+rank))
        }

      } 

    }
  }
  if(enPassantBool == 2){
    if(numConv(file, rank) == passant.mover1 || numConv(file, rank) == passant.mover2){
      moArr.push(passant.moveLoc)
    }
  }


  return moArr
} // for pawns

function attackBool(file, rank, color, arr = boardArray){
  console.log("--------attack Bool algorithm--------")
  console.log(file,rank)
  console.log(arr)
  console.log("kings")
  let barr = [
    [1,0], [-1,0], [0,1], [0,-1], 
    [1,1], [-1,-1], [-1, 1], [1,-1]
  ];

  for(let i = 0; i <=barr.length-1; i ++ ){
    if(barr[i][0]+file <= 7 && barr[i][0]+file >= 0 && barr[i][1]+rank <= 7 && barr[i][1]+rank >= 0){
      if(boardArray[barr[i][1]+rank][barr[i][0]+file] != '0' && boardArray[barr[i][1]+rank][barr[i][0]+file].substr(1,1) != color){
        if(boardArray[barr[i][1]+rank][barr[i][0]+file].substr(0,1) == "K"){
          return 0 
        }
      }
    }
  }
  rank = rank*1
  file = file*1
  console.log("pawns")
  let letters = "a,b,c,d,e,f,g,h"
  let letterList = letters.split(',')
  let p = -1
  if(color == "2"){
    p = 1
  }
  console.log(color)
  console.log(p)
  if(rank+p <8 && rank+p > -1){
    if(file+1 <8 && file+1 > -1){
      console.log(arr[rank+p][file+1])
      if(letterList.includes(arr[rank+p][file+1].substr(0,1)) && color !=arr[rank+p][file+1].substr(1,1)){
        return 0;
      }
    }
    if(file-1 <8 && file-1 > -1){
      console.log(arr[rank+p][file-1])
      if(letterList.includes(arr[rank+p][file-1].substr(0,1))&& color !=arr[rank+p][file-1].substr(1,1)){
        return 0;
      }
    }
  }


  console.log("Knights")
  let narr = [[2, 1], [-2, 1], [2, -1], [-2, -1],[1, 2], [-1, 2], [1, -2], [-1, -2]];
  let moArr = []

  for(let i = 0; i <=narr.length-1; i ++ ){
    console.log("i:"+ i)
    console.log(narr[i][1]+rank)
    if(narr[i][0]+file <= 7 && narr[i][0]+file >= 0 && narr[i][1]+rank <= 7 && narr[i][1]+rank >= 0){
      if(arr[narr[i][1]+rank][narr[i][0]+file].substr(0,1) == "N"&&arr[narr[i][1]+rank][narr[i][0]+file].substr(1,1)!=color ){
        return 0;
      } 
    }
  }


  console.log("Rook")
  
  console.log("+rank")
  for(let i = file+1; i < 8; i++){
    if(boardLocate(numConv(i,rank)).substr(1,1) == color){
      break
    } else if((boardLocate(numConv(i,rank)).substr(0,1) =="Q" || boardLocate(numConv(i,rank)).substr(0,1) =="R")){
      console.log(boardLocate(numConv(i,rank))+ " " + numConv(i,rank))
      return 0;
    } else if(boardLocate(numConv(i,rank)).substr(0,1) !='0'){
      break
    }
  }

  console.log("-rank")
  for(let i = file-1; i >= 0; i = i-1){
    console.log(i,rank)
    if(boardLocate(numConv(i,rank)).substr(1,1) == color){
      break
    }
    if((boardLocate(numConv(i,rank)).substr(0,1) =="Q" || boardLocate(numConv(i,rank)).substr(0,1) =="R")){
      console.log(boardLocate(numConv(i,rank)).substr(1,1)+ " " + numConv(i,rank))
      return 0;
    } else if(boardLocate(numConv(i,rank)).substr(0,1) !='0'){
      break
    }

  }
  
  console.log("+file")
  for(let i = rank+1; i < 8; i++){
    if(boardLocate(numConv(file,i)).substr(1,1) == color){
      break
    }
    if((boardLocate(numConv(file, i)).substr(0,1) =="Q" || boardLocate(numConv(file, i)).substr(0,1) =="R")){
      console.log(boardLocate(numConv(file,i))+ " " + numConv(file,i))
      return 0;
    }else if(boardLocate(numConv(file,i)).substr(0,1) !='0'){
      break
    }
  }
  
  console.log("-file")
  for(let i = rank-1; i >= 0; i=i-1){
    if(boardLocate(numConv(file,i)).substr(1,1) == color){
      break
    }
    if((boardLocate(numConv(file, i)).substr(0,1) =="Q" || boardLocate(numConv(file, i)).substr(0,1) =="R")){
      console.log(boardLocate(numConv(file,i)).substr(1,1)+ " " + numConv(file,i))
      return 0;
    }else if(boardLocate(numConv(file,i)).substr(0,1) !='0'){
      break
    }
  }  



  console.log("Bishop")
  // --------------------------positive-positive direction 
  console.log("positive-positive")
  for(let i = 1; i < 8; i++){
    let x = file +i
    let y = rank +i
    if(x< 0 || x> 7|| y< 0 || y> 7){
      console.log(x)
      console.log("too far")      
      break
    }
    if(arr[y][x] == undefined){
      console.log("undefined")
      break
    }
    console.log(numConv(x, y))
    if(arr[y][x] != '0'){
      if(color == arr[y][x].substr(1,1)){
        console.log( arr[y][x])
        console.log("same color")
        break
      } else if(arr[y][x].substr(0,1) == "B" || arr[y][x].substr(0,1) == "Q"){
        console.log("under attack")
        return 0
      }
    }
  }

  // --------------------------negative-positive direction 
  console.log("negative-positive")
  for(let i = 1; i < 8; i++){
    let x = file -i
    let y = rank +i
    if(x < 0 || x> 7|| y < 0 || y> 7){
      console.log("too far")      
      break
    }
    if(arr[y][x] == undefined){
      console.log("undefined")
      break
    }
    console.log(numConv(x, y))
    if(arr[y][x] != '0'){
      if(color == arr[y][x].substr(1,1)){
        console.log("same color")
        break
      } else if(arr[y][x].substr(0,1) == "B" || arr[y][x].substr(0,1) == "Q"){
        console.log("under attack")
        return 0
      }
    }
  }

  // --------------------------positive-positive direction (upper right)
  console.log("positive-negative")
  for(let i = 1; i < 8; i++){
    let x = file +i
    let y = rank -i
    if(x < 0 || x> 7|| y < 0 || y> 7){
      console.log("too far")      
      break
    }
    if(arr[y][x] == undefined){
      console.log("undefined")
      break
    }
    console.log(numConv(x, y))
    if(arr[y][x] != '0'){
      if(color == arr[y][x].substr(1,1)){
        console.log("same color")
        break
      } else if(arr[y][x].substr(0,1) == "B" || arr[y][x].substr(0,1) == "Q"){
        console.log("under attack")
        return 0
      }
    }
  }

  // --------------------------positive-positive direction (upper right)
  console.log("negative-negative")
  for(let i = 1; i < 8; i++){
    let x = file -i
    let y = rank -i
    if(x < 0 || x> 7|| y < 0 || y> 7){
      console.log("too far")      
      break
    }
    if(arr[y][x] == undefined){
      console.log("undefined")
      break
    }
    
    console.log(numConv(x, y))
    if(arr[y][x] != '0'){
      if(color == arr[y][x].substr(1,1)){
        console.log("same color")
        break
      } else if(arr[y][x].substr(0,1) == "B" || arr[y][x].substr(0,1) == "Q"){
        console.log("under attack")
        return 0
      }
    }
  }

  return 1;
}  // checks if a square is being attacked given the color of the piece
function checker(){
  let input = document.getElementById("input2").value + ""
  let eFil = fileConv(input.substr(0,1))
  let kRan = Math.abs(input.substr(1,1)*1-8)
  let col = input.substr(2,1)
  console.log("CheckBool Output: " + attackBool(eFil, kRan, col))
}

function checkBool(board, pieceLoc, moveLoc, color = "1"){
  console.log("checkbool")
  console.log(moveLoc)
  let pArray = board.map(item => item+"");
  let pracArray = []
  for(let i = 0; i<8; i++){
    let string = pArray[i]
    console.log(string)
    pracArray.push(string.split(','))

  }


  let pieceName = boardLocate(pieceLoc);
  let piece = {}

  piece.ID = boardLocate(pieceLoc).substr(0,1); // gets the piece's name (rook, queen, bishop, etc.)
  piece.file = fileConv(pieceLoc.substr(0,1))*1 // gets the numerical value for the piece's file (converted from letter to array indicator)
  piece.rank = Math.abs(pieceLoc.substr(1,1)*1-8) // gets numerical value for move locations's rank (mirrored to other side to fit chess notation)
  piece.color = boardLocate(pieceLoc).substr(1,1) // gets the numerical value for piece's color (1 --> White, 2 --> Black)

  let move = {} 
  move.file = fileConv(moveLoc.substr(0,1))*1 // gets the numerical value for the move location's file (converted from letter to array indicator)
  move.rank = Math.abs(moveLoc.substr(1,1)*1-8) // gets numerical value for move locations's rank (mirrored to other side to fit chess notation)



  console.log("------move made-----")
  pracArray[piece.rank][piece.file] = '0';
  pracArray[move.rank][move.file] = pieceName;

  console.log("---------------moveloc: "+moveLoc)
  console.log(pracArray)
  let kingLoc = {}
  for(let i = 0; i<8; i++){
    for(let j = 0; j<8; j++){
      //console.log(j,i)
      //console.log(pracArray[i][j], "K"+color)
      if(pracArray[i][j] == "K"+color){
        //console.log("found king at: "+ j +","+ i)
        kingLoc.file = j;
        kingLoc.rank = i;
        break;
      }
    }
  }


  console.log("kinglocs: "+ kingLoc.file + kingLoc.rank)
  console.log(pracArray[kingLoc.rank][kingLoc.file])
  return attackBool(kingLoc.file, kingLoc.rank, color, pracArray)
} // checks if a move results in a check (for pins and checks)

function checkmateChecker(color){
  let kingfile = 0;
  let kingrank = 0
  for(let i = 0; i<8; i++){
    for(let j = 0; j<8; j++){
      if(boardArray[i][j] == "K"+ color){
        kingfile = j;
        kingrank = i;
        break;
      }
    }
  }
  if(attackBool(kingfile, kingrank, color)){
    let kingMoves = royalMovement(kingfile, kingrank, color, 0)
    let illegals = " "
    for(let i in kingMoves){
      console.log("for in legalmove " + i)
      if(checkBool(boardArray, numConv(kingfile, kingrank), kingMoves[i], color)!=1){
        illegals += kingMoves[i] + " "
        console.log("cleared "+ kingMoves[i] )
      }
    }
    console.log(kingMoves)
    console.log(illegals)
    illegals = illegals.split(" ")
    console.log(kingMoves)
    console.log(illegals)
    for(let i = 0; i < illegals.length; i++){
      for(let k = 0; k < kingMoves.length; k++){
        console.log(k)
        if(illegals[i] == kingMoves[k]){
          console.log("removed "+ kingMoves[k])
          kingMoves.splice(k, 1)
        }
      }  
    }

    console.log(kingMoves)
    if(kingMoves.length == 0){
      alert("Checkmate!")
      return 1
    }
    console.log("not checkmate")
    return 0 
  }
  return 0
} // checks if it is checkmate given the color
function stalemateChecker(color){
  const start = Date.now()
  let legalMove = []
  for(let i = 0; i <= 7; i++){
    for(let j = 0; j<= 7; j++){
      console.log(i, j, color)
      if(boardArray[i][j] != '0' && boardArray[i][j].substr(1,1) == color){
        let pieceID = boardArray[i][j].substr(0,1) 
        
        if(pieceID == "R" || pieceID == "B" || pieceID == "Q"){
          console.log("Rook, bishop, queen")
          legalMove = slidingLegals(j, i, color, pieceID)
        } else if(pieceID == "N") {
          console.log("Knights")
          legalMove = movingKnightly(j, i, color, pieceID)
        } else if(pieceID == "K"){
          console.log("King")
          legalMove = royalMovement(j, i, color, pieceID)
        } else {
          console.log("Pawns")
          legalMove = peasantry(j, i, color, pieceID)
        }

        //console.log(legalMove)
        let illegals = []
        for(let k in legalMove){
          console.log("for in legalmove " + i)
          if(checkBool(boardArray, numConv(j,i), legalMove[i], color)!=1){
            illegals += legalMove[k]
            console.log("cleared "+ legalMove[k] )
          }
        }
        console.log(legalMove)

        for(let a in illegals){
          for(let a in legalMove){
            if(illegals.includes(legalMove[a])){
              legalMove.splice(a)
              break
            }
          }  
        }
        if(color != boardArray[i][j].substr(1,1)){
          legalMove = []
        }
        if(legalMove.length == 0){
          console.log("stalemate!")
          const end = Date.now()
          console.log(`Execution time: ${end - start} ms`);
          return 1
        }
      }
    }
  }
  console.log("not stalemate")
  const end = Date.now()
  console.log(`Execution time: ${end - start} ms`);
  return 0
} // checks if it is stalemate given the color

function newMove(pieceLoc, moveLoc, color, promotionPiece){
  /*
  if(checkmateChecker(color)){
    alert("its checkmate!")
    return 0
  }
  */
  console.log("newmove")
  let pieceName = boardLocate(pieceLoc);
  console.log(pieceLoc)
  let piece = {}
  console.log(pieceLoc)
  piece.ID = boardLocate(pieceLoc).substr(0,1); // gets the piece's name (rook, queen, bishop, etc.)
  piece.file = fileConv(pieceLoc.substr(0,1))*1 // gets the numerical value for the piece's file (converted from letter to array indicator)
  piece.rank = Math.abs(pieceLoc.substr(1,1)*1-8) // gets numerical value for move locations's rank (mirrored to other side to fit chess notation)
  piece.color = boardLocate(pieceLoc).substr(1,1) // gets the numerical value for piece's color (1 --> White, 2 --> Black)
  
  if(piece.color != color){
    return 0
  }
  
  let move = {} 
  move.file = fileConv(moveLoc.substr(0,1))*1 // gets the numerical value for the move location's file (converted from letter to array indicator)
  move.rank = Math.abs(moveLoc.substr(1,1)*1-8) // gets numerical value for move locations's rank (mirrored to other side to fit chess notation)


  console.log(
    "pieceName: "+ pieceName + "\tpiece: " + piece + "\tmove: "+ move +
    "\nPieceinfo: "
    + "\n\tID: " +    piece.ID
    + "\n\tfile: " +  piece.file
    + "\n\trank: " +  piece.rank 
    + "\n\tcolor: " + piece.color

    + "\nMoveInfo: " 
    + "\n\tfile: " +  move.file
    + "\n\trank: " +  move.rank 
  )
  // variable declarations 


  let legalMove = []; 
  if(piece.ID == "R" || piece.ID == "B" || piece.ID == "Q"){
    console.log("Rook, bishop, queen")
    legalMove = slidingLegals(piece.file, piece.rank, piece.color, piece.ID)
  } else if(piece.ID == "N") {
    console.log("Knights")
    legalMove = movingKnightly(piece.file, piece.rank, piece.color, piece.ID)
  } else if(piece.ID == "K"){
    console.log("King")
    legalMove = royalMovement(piece.file, piece.rank, piece.color, piece.ID)
  } else {
    console.log("Pawns")
    legalMove = peasantry(piece.file, piece.rank, piece.color, piece.ID)
  }

  //console.log(legalMove)
  let illegals = []
  for(let i in legalMove){
    console.log("for in legalmove " + i)
    if(checkBool(boardArray, pieceLoc, legalMove[i], piece.color)!=1){
      illegals += legalMove[i]
      console.log("cleared "+ legalMove[i] )
    }
  }
  
  
  console.log(legalMove)

  for(let i in illegals){
    for(let i in legalMove){
      if(illegals.includes(legalMove[i])){
        legalMove.splice(i)
        break
      }
    }  
  }
  
  console.log(illegals)
  console.log(legalMove)
  let moved = 0;
  if(legalMove != undefined){
    if(legalMove.includes(moveLoc)){
      moved = 1
      console.log("moveLoc is in legalMove[]")
      boardArray[piece.rank][piece.file] = '0';
      boardArray[move.rank][move.file] = pieceName;
      console.log("moveLoc: "+ passant.moveLoc + passant["moveLoc"])
      console.log("rank: "+ Math.abs(passant["moveLoc"].substr(1,1)*1-8)+ " file: "+ fileConv(passant["moveLoc"].substr(0,1))*1)
      console.log("bool: "+ enPassantBool)
      if(enPassantBool == 2 && moveLoc == passant.moveLoc){
        console.log("moveLoc: "+ passant.moveLoc + passant["moveLoc"])
        console.log("rank: "+ Math.abs(passant["moveLoc"].substr(1,1)*1-8)+ " file: "+ fileConv(passant["moveLoc"].substr(0,1))*1)
        console.log("Location "+boardArray[Math.abs(passant["moveLoc"].substr(1,1)*1-8)][fileConv(passant["moveLoc"].substr(0,1))*1])
        boardArray[Math.abs(passant["capturer"].substr(1,1)*1-8)][fileConv(passant["capturer"].substr(0,1))*1] = "0";
      }
    }
  }

  console.log("bool: "+ enPassantBool)
  if(enPassantBool == 1){
    enPassantBool++
  }  else if(enPassantBool == 2){
    enPassantBool = 0
    passant = {
      capturer: "",
      moveLoc: "",
      mover1: "",
      mover2: ""
    }
  }
  console.log(boardArray)
  console.log(moveLoc)
  if(moved == 0){
    return 0
  }
  return 1
}




function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

let colorToMove = "1"

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let currentLoc = document.getElementById(data).parentNode.id
  let targetLoc = ev.target.id
  if(targetLoc.substr(0,1) == "p"){
    targetLoc = document.getElementById(targetLoc).parentNode.id
  }
  console.log("targetLoc: "+targetLoc)
  console.log("currentLoc: "+currentLoc)
  
  if(newMove(currentLoc, targetLoc, colorToMove)){
    colorToMove = colorToMove*(-1) +3
  }
  boardDisplay('a', boardArray)
}
window.onload = function(){
  
  boardDisplay('a', boardArray)
};