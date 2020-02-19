function removeDom(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    } 
}

export {removeDom}