function createMatchNode(content, elementType, targetElement){
    const element = document.createElement(elementType);
    element.textContent = content;
    targetElement.appendChild(element)

    return element;
}



export {createMatchNode}; 