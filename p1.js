
var pics=["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg","imgs/5.jpg","imgs/6.png","imgs/7.png"];

var btn=document.querySelector("button");
var img=document.querySelector("img");
var c=1;

btn.addEventListener("click",function(){
	if(c===6){
	    c=0;
	}
	img.src=pics[c]
	c=c+1;

});
