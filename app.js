function searchbtn()
{
  let inputVal = search.value;
  inputVal = inputVal.toUpperCase();
  let nodes = document.getElementsByClassName("abcd");
  

  Array.from(nodes).forEach(function(element){
    let Text = element.getElementsByTagName("p")[1].innerText;
    let Title = element.getElementsByTagName("p")[0].innerText;
    Text = Text.toUpperCase();
    Title = Title.toUpperCase();
    // console.log(Text);
    if(Text.includes(inputVal) || Title.includes(inputVal))
    {
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  })
  
}


let search = document.getElementById("searchbar");
search.addEventListener("input", searchbtn);
  


var noteTitle,noteText;
var container = document.getElementById("container");
var editId,editId2,editTitle,editText;
function AddNote()
{
    modal.style.display = "none";
    noteTitle = document.getElementById("noteTitle").value;
    noteText = document.getElementById("noteText").value;
    console.log(noteTitle+ " "+ noteText);
    
    
    var node1 = document.createElement("div");
    var nav = document.createElement("div");
    var title = document.createElement("p");
    var text = document.createElement("p");
    var edit = document.createElement("button");
    var del = document.createElement("button");
    
    title.innerHTML = noteTitle;
    text.innerHTML = noteText;
    edit.innerHTML = "<b style='font-size:23px'  class='fa'>&#xf044</b>";
    del.innerHTML = "<b style='font-size:23px' class='fa'>&#xf014;</b>";
    node1.setAttribute("style","width:28vw; height: 48vh; background-color: white; font-size: 1.5em; overflow:hidden; margin-top:5vh; margin-left:3vw;")
    edit.setAttribute("style", "background: none; outline:none; border: none; margin-top:1.1vh; margin-left:23vw; color:white; cursor: pointer;")
    del.setAttribute("style", "background: none; outline:none; border: none; margin-top:1vh; margin-left:0.2vw; color:white; cursor: pointer;")
    nav.setAttribute("style", "background-color: rgb(158, 216, 64); width:100%;height:10%;padding-bottom: 1%;");
    text.setAttribute("style","padding-left:6%; font-size:0.7em;");
    title.setAttribute("style","padding-left:6%; font-size:0.9em; font-weight:bolder");
    node1.setAttribute("class","abcd");
    nav.appendChild(edit);
    nav.appendChild(del);
    node1.appendChild(nav);
    node1.appendChild(title);
    node1.appendChild(text);
    document.getElementById("noteTitle").value= "";
    document.getElementById("noteText").value = "";
    container.insertAdjacentElement("afterbegin",node1);
    del.addEventListener("click",function(){
        container.removeChild(node1);
    });
    edit.addEventListener("click",function(){
        editmodal.style.display = "block";
        document.getElementById("noteTitle2").value= title.innerHTML;
        document.getElementById("noteText2").value = text.innerHTML;
        editId =node1;
    })
}

function editNote(){
    editmodal.style.display = "none";
    

    noteTitle = document.getElementById("noteTitle2").value;
    noteText = document.getElementById("noteText2").value;
    console.log(noteTitle+ " "+ noteText);
    
    
    var node1 = document.createElement("div");
    var nav = document.createElement("div");
    var title = document.createElement("p");
    var text = document.createElement("p");
    var edit = document.createElement("button");
    var del = document.createElement("button");
    
    title.innerHTML = noteTitle;
    text.innerHTML = noteText;
    edit.innerHTML = "<b style='font-size:23px'  class='fa'>&#xf044</b>";
    del.innerHTML = "<b style='font-size:23px' class='fa'>&#xf014;</b>";
    node1.setAttribute("style","width:28vw; height: 48vh; background-color: white; font-size: 1.5em; overflow:hidden; margin-top:5vh; margin-left:3vw;")
    edit.setAttribute("style", "background: none; outline:none; border: none; margin-top:1.1vh; margin-left:23vw; color:white; cursor: pointer;")
    del.setAttribute("style", "background: none; outline:none; border: none; margin-top:1vh; margin-left:0.2vw; color:white; cursor: pointer;")
    nav.setAttribute("style", "background-color: rgb(158, 216, 64); width:100%;height:10%;padding-bottom: 1%;");
    text.setAttribute("style","padding-left:6%; font-size:0.7em;");
    title.setAttribute("style","padding-left:6%; font-size:0.9em; font-weight:bolder");
    node1.setAttribute("class","abcd");
    nav.appendChild(edit);
    nav.appendChild(del);
    node1.appendChild(nav);
    node1.appendChild(title);
    node1.appendChild(text);

    // document.getElementById("noteTitle2").value= "";
    // document.getElementById("noteText2").value = "";
    container.insertAdjacentElement("afterbegin",node1);
    del.addEventListener("click",function(){
        container.removeChild(node1);
    });
    edit.addEventListener("click",function(){
        editmodal.style.display = "block";
        document.getElementById("noteTitle2").value= title.innerHTML;
        document.getElementById("noteText2").value = text.innerHTML;
        editId =node1;
    })
    container.removeChild(editId);

}



// Get the modal
var modal = document.getElementById("addModal");
var editmodal = document.getElementById("editModal");

// Get the button that opens the modal
var btn = document.getElementById("add");
var btn = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
    editmodal.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == editmodal) {
    modal.style.display = "none";
    editmodal.style.display = "none";
  }
}



