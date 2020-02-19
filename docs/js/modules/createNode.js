function createMatchNode(content, elementType, targetElement){
    const element = document.createElement(elementType);
    element.textContent = content;
    targetElement.append(element)
}

export {createMatchNode};