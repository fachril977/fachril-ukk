document.querySelector('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e-preventDefault();

        Document.querySelector(this.getAAtribute('href')).scrollintoView({
            behavior:'smooth'
        })
    })
})