

// togleImportant
let isImportant = false;
let isVisible = true;

function toggleImportant() {
    const nonImportantIcon = "fa-regular fa-face-rolling-eyes";
    const importantIcon = "fa-solid fa-face-grin-beam-sweat";

    if(!isImportant) {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
    
    }
    else {
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
    } 
}  



async function saveTask() {
    let title = $("#txtTitle").val();
    let desc = $("#txtDescription").val();
    let duedate = $("#selDueDate").val();
    let status = $("#selStatus").val();
    let budget = $("#txtBudget").val();
    let color = $("#selColor").val();

    let taskToSave = new Task(isImportant, title, desc, duedate, status, budget, color);

    // sent task to server
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks/", {
        method: "POST",
        body: JSON.stringify(taskToSave),
        headers: {
            "Content-type": "application/json"
        }
    });
    
    if(response.ok) {
        displayTask(taskToSave);
        clearForm();

        // get data from the response
        let data = await response.json();
        console.log(data);
    
    }
    else{
        alert("Error saving tasks, please try again.");
    }
}

function displayTask(task) {
    let syntax = `
    <div class='task gap-5'>
        <div class='details ps-2'>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>

        <div class="stat d-flex align-items-center">
        <label>${task.status}</label>
        </div>

        <div class="budgetdate d-flex align-items-center">
        <label>$${task.budget}</label>
        <label>${task.dueDate}</label>
        </div>
    </div>
    `;

    $("#pending-tasks").append(syntax);
}

function init() {
    console.log("Task manager");

    // load data
    loadTasks();

    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    $("#btnHide").click(hideDetails);
    $("#btnDelete").click(deleteAll);
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selDueDate").val("");
    $("#selStatus").val("");
    $("#txtBudget").val("");
    $("#selColor").val("");

}


async function testRequest() {
    let response = await fetch("https://fsdiapi.azurewebsites.net/");
    console.log(response)
    // for()
    // if(response == ok) show a thank you message to the user
    // console.log()
}

async function loadTasks() {
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks/") 
        if(response.ok) {
            let data = await response.json();
            for(let i=0; i< data.length; i++) {
                let task = data[i];
                if(task.name == "Adam") {
                displayTask(task);
            }
        }
            // travel data with a for loop
            // get every task from the array
            // send the task to displayTask function
            // console.log(data);
        }
        else {
            alert("Error loadig tasks!");
        }
    }
   
        



function hideDetails(){
    const panel = $(".info");
    if(isVisible) {
        panel.hide();
        isVisible = false;
    }
    else {
        panel.show();
        isVisible = true;
    }
}

async function deleteAll(){
    let response = await fetch("https://fsdiapi.azurewebsites.net/api/tasks/clear/Adam/", {
        method: "DELETE"
    });

    if(response.ok) {
        $(".task").remove();
    }
    else {
        alert("Error delete your tasks");
    }
}
// load data
// hook events

window.onload = init;


// Suggestion Read:
// How to create objects in JS -> Object Literal, Obj constructor, classes;
// 