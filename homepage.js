var file = document.getElementById("file-upload");
var img = document.getElementById("img");
var p = document.getElementById("text");


file.addEventListener("change", function(){
  img.src = URL.createObjectURL(this.files[0]);
  text.innerHTML = this.files[0].name;
});
