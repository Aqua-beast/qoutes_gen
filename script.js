var index=0;
function myfunc(){
    let ar=["red", "yellow", "green", "blue", "purple"];
    document.getElementsByTagName("body")[0].style.background=ar[index++];
    if(index>ar.length-1){
        index=0;
    }
}