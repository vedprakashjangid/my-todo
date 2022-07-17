let inputTask = document.getElementById("inputTask");
let addBtn = document.getElementById("addBtn");
showToDo();

addBtn.addEventListener("click",function(){
    innputTaskVal = inputTask.value;
    inputTask.value="";
    if(innputTaskVal.trim()!=0){
        let LS = localStorage.getItem("localtask");
    if(LS==null){
        arr=[];
    }
    else{
        arr = JSON.parse(LS);
        }
     arr.push(innputTaskVal);
     localStorage.setItem("localtask",JSON.stringify(arr));
    }
    showToDo();
})

function showToDo(){
    let LS = localStorage.getItem("localtask");
    if(LS==null){
        arr=[];
    }
    else{
        arr = JSON.parse(LS);
        }
    let html="";
    let box2 = document.getElementById("box2");
    arr.forEach((element,index) => {
    html+=`<div class="taskList">
              <input type="text"  class="taskListField" id="taskListField"
              value="${element}" readonly>
              <p class="editBtn"  onclick="editTask(${index})" >Edit</p>
              <p class="deleteBtn" onclick="deleteTask(${index})">Delete</p> 
            </div>`
    
});
         box2.innerHTML = html;

}
 
function editTask(index){
//let  inputTask = document.getElementById("inputTask");
      let saveBtn = document.getElementById("saveBtn");
           addBtn = document.getElementById("addBtn");
           saveBtn.style.display = "block";
           addBtn.style.display = "none";
          let LS = localStorage.getItem("localtask");
          let arr = JSON.parse(LS);
          inputTask.value = arr[index];
    
     
    let hiddenCounter = document.getElementById("hiddenCounter");
    hiddenCounter.value = index;
}
//save button
    let saveBtn = document.getElementById("saveBtn");

    saveBtn.addEventListener("click",function(){
    let hiddenCounter = document.getElementById("hiddenCounter").value;

    let LS = localStorage.getItem("localtask");
     let arr = JSON.parse(LS);
     arr[hiddenCounter]=inputTask.value;
     inputTask.value="";
     localStorage.setItem("localtask",JSON.stringify(arr));

     let saveBtn = document.getElementById("saveBtn");
     addBtn = document.getElementById("addBtn");
     saveBtn.style.display = "none";
          addBtn.style.display = "block";
          showToDo();
})


function deleteTask(index){
    let LS = localStorage.getItem("localtask");
     let arr = JSON.parse(LS);
     arr.splice(index,1);
     localStorage.setItem("localtask",JSON.stringify(arr));
     showToDo();


}

// delete all
let deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click",function(){
    let LS = localStorage.getItem("localtask");
    let arr = JSON.parse(LS);
   if(arr==null){
    arr = [];

   }
   else{
    arr = JSON.parse(LS);
    arr=[];
   }
   localStorage.setItem("localtask",JSON.stringify(arr));
  showToDo();


})


