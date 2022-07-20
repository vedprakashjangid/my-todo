let inputTask = document.getElementById("inputTask");
let addBtn = document.getElementById("addBtn");
let taskListfield = document.getElementById("taskListfield");
let box2 = document.getElementById("box2");


let arr = [];
addBtn.addEventListener("click",function(e){

    e.preventDefault();
    

   if(inputTask.value.trim()!=0){
    
    let div = document.createElement("div");
    
    div.classList.add("taskList")
   
    let input = document.createElement("input");
    input.type="text";
    input.readOnly=true;
   
    input.id="taskListField";
    input.classList.add("taskListField");
let p1 = document.createElement("p");
p1.style.color="blue";
p1.style.fontWeight="600";
p1.innerHTML = "Edit";

let p2 = document.createElement("p");
p2.style.color="red";
p2.style.fontWeight="600";


p2.innerHTML = "Delete";
p1.id ="editBtn";

p2.id ="deleteBtn";

div.appendChild(input);
div.appendChild(p1);
div.appendChild(p2);


 
//appending div to box2
box2.appendChild(div);

//adding task to list
let inpVal = inputTask.value;

input.value = inpVal;
inputTask.value = "";

//adding one list at a time to localstorage




arr.push(input.value);


//settins task to localstorage


//getting from localstorage

let local = localStorage.setItem("data",JSON.stringify(arr));
//console.log(local);

   }
   else{
    alert("please add some task...")
   }




})

let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click",function(){
    this.removeChild(box2);
})




