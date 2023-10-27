function addTarefa(){
    const taskTitle = document.querySelector(".tarefas-titulo").value;

    if(taskTitle){
         //esconder a frase não possui tarefas
         const semTarefas = document.querySelector(".sem-tarefas");
         semTarefas.style.display = 'none';

        //clone template
        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true)

        //adiciona titulo
        newTask.querySelector(".tarefas-titulo").textContent = taskTitle

        // remover classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adiciona tarefa na lista
        const list = document.querySelector(".lista-tarefas")
        list.appendChild(newTask)

        //adicionar botão remover 
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this)
        })

        //adicionar evento completar tarefa
        const doneBtn = newTask.querySelector(".feito-btn").addEventListener("click", function(){
            completeTask(this);
        })


        // limpar texto
        document.querySelector(".tarefas-titulo").value = "" ;
    }
}

function removeTask(task){
    task.parentNode.remove(true)
}
function completeTask(task){
    const taskComplete = task.parentNode

    taskComplete.classList.toggle("done")
}


const addBtn =  document.querySelector(".tarefas-btn")

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    addTarefa();
})