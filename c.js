const dropArea = document.querySelector(".drag-area");
const dragText = document.querySelector("header");
const button = document.querySelector("button");
const input = document.querySelector("input");
let file; 

button.onclick = () => input.click();//on click open file selector

input.onchange = () => {
  file = this.files[0];
  dropArea.classList.add("active");
  showImage(); 
};

//on drag over
dropArea.ondragover = (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
};

//on drag leave
dropArea.ondragleave = () => {
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
};

//on drop
dropArea.ondrop = (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showImage();
};


//change the image to droped imagege
showImage = () => {
  let fileType = file.type;
  let validFiletypes = ["image/jpeg", "image/jpg", "image/png"];
  
  if(validFiletypes.includes(fileType)){
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=>{
        let fileURL = fileReader.result;
        let image = `<img src="${fileURL}" alt="image">`;
        dropArea.innerHTML = image;
        }
    }
  else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}