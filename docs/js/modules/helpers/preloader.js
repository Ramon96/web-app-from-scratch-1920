function show(id){
    document.getElementById(id).style.display = "block";
}

function hide(id){
    document.getElementById(id).style.display = "none";

}

const preloader = {
    Show: show,
    Hide: hide
}

export { preloader };