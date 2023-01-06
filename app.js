const input = document.querySelector(`input`)
const addBtn = document.querySelector(`.btn-add`)
const ul = document.querySelector(`ul`)
const empty = document.querySelector(`.empty`)

addBtn.addEventListener(`click`, (e)=> {
    e.preventDefault()
    
    const text = input.value
    

    if(text.length == ``){
        Swal.fire({
            icon: 'error',
            title: 'La tarea no puede ir vacia',
          })

    
     
     }else if(text === input){
        alert("n")

     
     
     
     
     
     } else{
        const li = document.createElement(`li`)
        const p = document.createElement(`p`)
        p.textContent = text 

        li.appendChild(p)
        ul.appendChild(li)
        li.appendChild(addDeleteBtn())
    
    }
    
    //Reiniciar Tarea
    reiniciarTarea()

    empty.style.display = `none`

    
})






function addDeleteBtn(){

    const deleteBtn = document.createElement(`btn`)
    deleteBtn.textContent = `X`
    deleteBtn.classList.add(`btn-delete`)
    
    deleteBtn.addEventListener(`click`, (e)=>{
        const item = e.target.parentElement
        ul.removeChild(item)

        const items = document.querySelectorAll(`li`)
        if(items.length === 0){
            empty.style.display = `block`
        }
    })

    return deleteBtn

}



function reiniciarTarea(){
    input.value = ``
}

