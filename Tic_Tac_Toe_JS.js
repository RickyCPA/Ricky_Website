//pull all td tags for use later
var tableCell = document.querySelectorAll('td');

//pull in button for JS wipe of board
var resetButton = document.querySelector('#reset'); 


function clearAll(){
  for (var i=0;i<tableCell.length; i++){
    tableCell[i].innerText = "";
  }};


resetButton.addEventListener("click", clearAll)

//function to enter values
function gamePlay(){
  if (this.innerText == "")
    this.innerText = "X";

  else if (this.innerText == "X")
    this.innerText = "O";
  
  else if (this.innerText == "O")
    this.innerText = "";
};


//loop to facilitate receiving click input; works by adding a listener to each previously selected td tag
for (var i = 0; i<tableCell.length; i++){
  tableCell[i].addEventListener("click", gamePlay)
}

