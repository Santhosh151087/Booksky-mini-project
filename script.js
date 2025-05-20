var plus=document.getElementById("add-popup-button")
var popup_box=document.querySelector(".popup-box");
var popup_overlay=document.querySelector(".popup-overlay")

plus.addEventListener("click",function(){
    popup_box.style.display="block"
    popup_overlay.style.display="block"

})
var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
     popup_box.style.display="none"
    popup_overlay.style.display="none"
   event.preventDefault()

})

var container=document.querySelector(".container")
var add_book=document.getElementById("add-book")
var book_title_input=document.getElementById("book-title-input")
var book_author_input=document.getElementById("book-author-input")
var book_description_input=document.getElementById("book-description-input")
add_book.addEventListener("click",function(event){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_title_input.value}</h2>
    <h3>${book_author_input.value}</h3>
    <p>${book_description_input.value}</p>
    <button onclick="deletebook(event)">Delete</button>
    `
    container.append(div)
    event.preventDefault()
}) 
function deletebook(event){
event.target.parentElement.remove()
}