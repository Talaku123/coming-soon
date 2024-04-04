
let index = 0

slideShows ()


function slideShows() {

  let slides = document.getElementsByClassName("slide")

  for(let i = 0; i < slides.length; i++){

    slides[i].style.display = "none"
  }
  

  index ++

  if(index > slides.length){

    index = 1
  }
    slides[index -1].style.display = "block"
  
  setTimeout(slideShows, 6500)
}