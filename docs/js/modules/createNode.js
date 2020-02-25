function createMatchNode(content, elementType, targetElement, id){
    const element = document.createElement(elementType);
    element.textContent = content;
    
    if(id){
        element.setAttribute("href", `#match/${id}`);
    }

    targetElement.appendChild(element);

    return element;
}



export {createMatchNode}; 