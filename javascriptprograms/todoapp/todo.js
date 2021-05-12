function createTask(){
    let user = username.value
    let todo = task.value
    let completed = completion.value

    let entry = {
        username: user,
        task: todo, 
        completion: completed
    }

    localStorage.setItem(username, JSON.stringify(entry))

}

function displayTask(){


    let len = localStorage.length;
    let html_val = ``
    
    for(i=0; i<len; i++){
        
        let createdTasks = JSON.parse(localStorage.getItem(localStorage.key(i)))

        html_val += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                 <h5 class="card-title">${createdTasks.username}</h5>
                    <p class="card-text">${createdTasks.task}</p>
                    <p class="card-text">${createdTasks.completion}</p>
                    <button onclick="deletetask()"> Delete </button>
            </div>
        </div>`
        
    
  
    }

    document.querySelector("#resultarea").innerHTML = html_val;
   

}


function deletetask(){
    window.localStorage.removeItem('username');

}