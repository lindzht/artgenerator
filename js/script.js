const button = document.querySelector(".create-button");
const instructionsList = document.querySelector(".instructions");


button.addEventListener("click", function(event){
    event.preventDefault();
    const li = document.createElement("li");
    let date = new Date().toLocaleDateString();
    li.innerHTML = `<span class="date">${date}</span> this is a test`;
    instructionsList.append(li);
})