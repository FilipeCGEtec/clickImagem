var sotc = document.getElementById('imagem')
var img

function numeroImg(min, max){
  img = Math.floor(Math.random() * (max - min + 1)) + 1;
};
sotc.addEventListener('click', () =>{
  numeroImg(1, 16)
  sotc.setAttribute("src", "img/"+ img +".png");
  console.log(img);
});
