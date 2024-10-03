//$ Creating DOM Elements Dynamically

const carBrands = document.querySelector('.car-brands');
function addItem() {
    const newBrandName = prompt("Enter gname of new brand")
    const newElement = document.createElement('li')
    newElement.textContent = newBrandName
    let textNode = document.createTextNode(newBrandName)
    newElement.appendChild(textNode)
    carBrands.appendChild(newElement)

    showMessage(newBrandName);
}

function removeItem() {
    const brandName = prompt("Enter brand you want to remove: ")
    let brands = Array.from(carBrands.children)
    brands.forEach( (carBrand) => {
        if(carBrand.textContent === brandName) {
           carBrands.removeChild(carBrand)
        }
    })
}
// IDEA: Try to implement addItem() functionality by avoiding duplicates

function showMessage(str) {
    let responseMsgContainer = document.createElement("div")
    responseMsgContainer.classList.add("response-msg-container")

    let iconBox = document.createElement("div")
    iconBox.classList.add("icon-box")

    let icon = document.createElement("i")
    icon.classList.add("ri-checkbox-circle-fill")
    let h2 = document.createElement("h2")
    h2.textContent = "Success!"
    
    iconBox.insertAdjacentElement("afterbegin", icon)
    iconBox.appendChild(h2)
    
    responseMsgContainer.insertAdjacentElement("afterbegin", iconBox)
    
    let msg = document.createElement("div")
    iconBox.classList.add("msg")
    let para = document.createElement("p")
    para.innerHTML = `New car brand <strong>${str}</strong> has been added successfully!`
    
    msg.appendChild(para)
    responseMsgContainer.appendChild(msg)
    
    let btn = document.createElement("button")
    btn.classList.add("continue-btn")
    btn.textContent = "Continue"
    btn.onclick = function () {
      responseMsgContainer.remove();
    }
    
    responseMsgContainer.appendChild(btn)

    let body = document.querySelector("body")
    body.appendChild(responseMsgContainer)
    return;
}