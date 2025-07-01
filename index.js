const hello=document.getElementById("container");

console.log(hello)
console.dir(hello);

hello.textContent="amananurag";


const catImage=document.getElementsByClassName("cat-img")[1];
console.log(catImage)
console.dir(catImage);

catImage.src="https://m.media-amazon.com/images/M/MV5BYWVjODZjNDgtYjk4ZS00OTg5LTg5NDQtZDMxZDQ4ZmM5MGJmXkEyXkFqcGc@._V1_.jpg"


catImage.onclick=function(){

  if(catImage.src=="https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?cs=srgb&dl=pexels-lalesh-194511.jpg&fm=jpg"){

    catImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXYDmiz35mjiRkgRfVcOrDz81B-pollTKKbaRTKgWrYCebLPBDjEXP6HqU5iZBD29nbE&usqp=CAU"
  }else{
    catImage.src="https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?cs=srgb&dl=pexels-lalesh-194511.jpg&fm=jpg"

  }
  
}


catImage.ondblclick=function(){

  catImage.src="https://media.rockstargames.com/rockstargames-newsite/uploads/49c7d29293f89dfef95969fde62f5c27e7cc780c.jpg"
}