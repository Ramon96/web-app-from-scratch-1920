function removeDom(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    } 
    element.style.display = "";
}

export {removeDom}