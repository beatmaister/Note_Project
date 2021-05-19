document.getElementById("add_btn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("close_btn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})

document.getElementById("top_btn").addEventListener("click", function(){
    window.scrollTo(0,0);
})

let deleted = document.querySelectorAll('.del')
    for(i=0; i<deleted.length; i++){
        deleted[i].addEventListener("click", function(){
            this.parentElement.remove()
            console.log("clicked")
            localStorage.removeItem('note_list',  )
    }) 
    
    }
let notes = document.querySelectorAll('.notes')
localStorage.setItem('note_list', notes)
    
