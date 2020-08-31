function showpic(pic){
    
    pictoshow = pic.getAttribute('href')
   
    placeholder=document.getElementById('picholder')

    placeholder.setAttribute("src",pictoshow)
    showtext(pic)
}
   
    function showtext(pic){
        showtext = pic.getAttribute('title')
        placeholder=document.getElementById("textholder")
        placeholder.innerHTML = showtext
    }