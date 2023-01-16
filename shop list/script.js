const InputTag = document.getElementsByClassName("form-control")[0];
const ShoppingListTag = document.getElementsByClassName("ShoppingListContainer")[0];


let productId = 1;

const handleChange = (event) => {
 const inputValue = event.target.value;
 const productContainer = document.createElement("div");
 productContainer.classList.add("productContainer");
 const parentDiv = document.createElement("div");
 parentDiv.classList.add("productName");
 parentDiv.addEventListener("click", () => {
 const classExist = parentDiv.classList.contains("purchased");
 if(classExist) {
    parentDiv.classList.remove("purchased");
    }
    else{
        parentDiv.classList.add("purchased");
    }
 });
 const spanTag = document.createElement("span");
 const  trashIcon = document.createElement("i");
 trashIcon.classList.add("fa-solid", "fa-trash-can");
 trashIcon.addEventListener("click", (event) => {
    productContainer.remove();
});
 const product = productId.toString() + ". " + inputValue;
 spanTag.append(product);
 spanTag.id = productId;
 parentDiv.append(spanTag);
 productContainer.append(parentDiv, trashIcon);
 ShoppingListTag.append(productContainer);
 InputTag.value = "";
 productId += 1;
};

InputTag.addEventListener("change", handleChange);
