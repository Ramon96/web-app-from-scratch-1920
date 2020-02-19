function removeDom(element){
    while(element.firstChild){
        element.removeChild(mainElement.firstChild);
    } 
}

export {removeDom}