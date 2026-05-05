function search(){
var input = document.getElementById("find");
var word = input.value.toUpperCase();
var all = document.getElementsByClassName("item");

for(var i=0; i<all.length; i++){
var h3 = all[i].getElementsByTagName("h3")[0];
if(h3.innerHTML.toUpperCase().indexOf(word) > -1){
all[i].style.display = "inline-block";
}else{
all[i].style.display = "none";
}
}
}

function filt(t){
var all = document.getElementsByClassName("item");

for(var i=0; i<all.length; i++){
if(t == "all"){
all[i].style.display = "inline-block";
}else{
if(all[i].classList.contains(t)){
all[i].style.display = "inline-block";
}else{
all[i].style.display = "none";
}
}
}
}
