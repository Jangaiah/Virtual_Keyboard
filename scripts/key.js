/*
**** Key factory
*/

function Key(){
 var key;
 function createKey(){
 key=document.createElement("li");
  key.className="key";
 } 

 createKey();

 this.keyLabel = function(s) {
  key.innerHTML = s;
 };
 
 this.getVal=function(){return val;};

 this.addValue=function(ele){
   key.addEventListener("click", function(){ele.value+=key.innerHTML;});
 };

 this.removeValue=function(ele){
   key.addEventListener("click", function(){
   let val=ele.value;
   if(val.length>0) ele.value=val.substring(0,val.length-1);
   });
 };

 this.bindKey=function(k){
    k.appendChild(key);
 };
}