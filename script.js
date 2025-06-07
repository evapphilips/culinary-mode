// Description
// By Eva Philips
// Date: February 9, 2024

//////// VARIABLES ////////
var step1;
var step1Number;
var step2;
var step2Number;
var step3;
var step3Number;

var toggleDescription;
var highlight1;
var highlight2;
var highlight3;
var highlight4;
var highlight5;

var featureToggle;

var annotation;
var annotationTitle;
var annotationBody;
var annotationTimestamp;
var annotationVideo;

//////// PAGE ////////

// When the page loads, call the load function
window.addEventListener('load', init);

// Define load function
function init(){
  
  // reset highlights
  highlight2.selected = false;
  
}

// When user hovers over a Step1
// get step 1 element
step1 = document.getElementById("step1");
step1Number = document.getElementById("step1-number")
// mouseover
step1.addEventListener("mouseover", () => {
  step1.style.backgroundColor = "#f7f7f7";
  step1Number.style.backgroundColor = "#2d4558";
  step1Number.style.color = "white";
});
// mouseout
step1.addEventListener("mouseout", () => {
  step1.style.backgroundColor = "white";
  step1Number.style.backgroundColor = "white";
  step1Number.style.color = "#2d4558";
});

// When user hovers over a Step2
// get step 2 element
step2 = document.getElementById("step2");
step2Number = document.getElementById("step2-number")
// mouseover
step2.addEventListener("mouseover", () => {
  step2.style.backgroundColor = "#f7f7f7";
  step2Number.style.backgroundColor = "#2d4558";
  step2Number.style.color = "white";
});
// mouseout
step2.addEventListener("mouseout", () => {
  step2.style.backgroundColor = "white";
  step2Number.style.backgroundColor = "white";
  step2Number.style.color = "#2d4558";
});

// When user hovers over a Step3
// get step 3 element
step3 = document.getElementById("step3");
step3Number = document.getElementById("step3-number")
// mouseover
step3.addEventListener("mouseover", () => {
  step3.style.backgroundColor = "#f7f7f7";
  step3Number.style.backgroundColor = "#2d4558";
  step3Number.style.color = "white";
});
// mouseout
step3.addEventListener("mouseout", () => {
  step3.style.backgroundColor = "white";
  step3Number.style.backgroundColor = "white";
  step3Number.style.color = "#2d4558";
});

// When user hovers over HIGHLIGHT 1
// get highlight 1 element
highlight1 = document.getElementById("highlight1");
// mouseover
highlight1.addEventListener("mouseover", () => {
  // darken on hover if not selected
  if(!highlight1.selected && featureToggle.checked){
  highlight1.style.backgroundColor = "#2d4558";
  }
});
// click
highlight1.addEventListener("click", () => {
  // keep dark if clicked
  if(!highlight1.selected && featureToggle.checked){
    // change color of selected
    highlight1.style.backgroundColor = "#2d4558";
    highlight1.selected = true;
    // change color of other highlights
    highlight2.style.backgroundColor = "#728997";
    highlight3.style.backgroundColor = "#728997";
    highlight4.style.backgroundColor = "#728997";
    highlight5.style.backgroundColor = "#728997";
    // unselect other hights
    highlight2.selected = false;
    highlight3.selected = false;
    highlight4.selected = false;
    highlight5.selected = false;
    // show annotation
    // get annnotation element
    annotation = document.getElementById('annotation');
    annotationTitle = document.getElementById('annotation-title');
    annotationBody = document.getElementById('annotation-body');
    annotationTimestamp = document.getElementById('annotation-timestamp');
    annotationVideo = document.getElementById('annotation-video');
    // change words
    annotationTitle.innerHTML = "Why should the butter be almost melted but not melted?";
    annotationBody.innerHTML = "When you stop the butter just before it’s full melted, some butter chucks will remain. Whisking the butter will melt the remaining chunks. The chunks will also cool down the rest of the butter so you have room temperature butter.";
    annotationTimestamp.innerHTML = "1:07";
    // show video
    annotationVideo.style.visibility = "visible";
    annotationVideo.style.height = "auto";
    annotationVideo.style.marginTop = "20px";
    // show annotation
    annotation.style.visibility = "visible";
    
  }
});
// mouseout
highlight1.addEventListener("mouseout", () => {
  // lighten when not hovering if not selected
  if(!highlight1.selected && featureToggle.checked){
    highlight1.style.backgroundColor = "#728997";
  } 
});

// When user hovers over HIGHLIGHT 2
// get highlight 2 element
highlight2 = document.getElementById("highlight2");
// mouseover
highlight2.addEventListener("mouseover", () => {
  // darken on hover if not selected
  if(!highlight2.selected && featureToggle.checked){
  highlight2.style.backgroundColor = "#2d4558";
  }
});
// click
highlight2.addEventListener("click", () => {
  // keep dark if clicked
  if(!highlight2.selected && featureToggle.checked){
    // change color of slected
    highlight2.style.backgroundColor = "#2d4558";
    highlight2.selected = true;
    // change color of other highlights
    highlight1.style.backgroundColor = "#728997";
    highlight3.style.backgroundColor = "#728997";
    highlight4.style.backgroundColor = "#728997";
    highlight5.style.backgroundColor = "#728997";
    // unselect other hights
    highlight1.selected = false;
    highlight3.selected = false;
    highlight4.selected = false;
    highlight5.selected = false;
    // show annotation
    // get annnotation element
    annotation = document.getElementById('annotation');
    annotationTitle = document.getElementById('annotation-title');
    annotationBody = document.getElementById('annotation-body');
    annotationVideo = document.getElementById('annotation-video');
    // change words
    annotationTitle.innerHTML = "What does the shortening do?";
    annotationBody.innerHTML = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    // hide video
    annotationVideo.style.visibility = "hidden";
    annotationVideo.style.height = "0px";
    annotationVideo.style.marginTop = "0px";
    // show annotation
    annotation.style.visibility = "visible";
    
  }  
});
// mouseout
highlight2.addEventListener("mouseout", () => {
  // lighten when not hovering if not selected
  if(!highlight2.selected && featureToggle.checked){
    highlight2.style.backgroundColor = "#728997";
  } 
});

// When user hovers over HIGHLIGHT 3
// get highlight 3 element
highlight3 = document.getElementById("highlight3");
// mouseover
highlight3.addEventListener("mouseover", () => {
  // darken on hover if not selected
  if(!highlight3.selected && featureToggle.checked){
  highlight3.style.backgroundColor = "#2d4558";
  }
});
// click
highlight3.addEventListener("click", () => {
  // keep dark if clicked
  if(!highlight3.selected && featureToggle.checked){
    // change color of slected
    highlight3.style.backgroundColor = "#2d4558";
    highlight3.selected = true;
    // change color of other highlights
    highlight1.style.backgroundColor = "#728997";
    highlight2.style.backgroundColor = "#728997";
    highlight4.style.backgroundColor = "#728997";
    highlight5.style.backgroundColor = "#728997";
    // unselect other hights
    highlight1.selected = false;
    highlight2.selected = false;
    highlight4.selected = false;
    highlight5.selected = false;
    // show annotation
    // get annnotation element
    annotation = document.getElementById('annotation');
    annotationTitle = document.getElementById('annotation-title');
    annotationBody = document.getElementById('annotation-body');
    annotationVideo = document.getElementById('annotation-video');
    // change words
    annotationTitle.innerHTML = "What does the cream of tartar do?";
    annotationBody.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    // hide video
    annotationVideo.style.visibility = "hidden";
    annotationVideo.style.height = "0px";
    annotationVideo.style.marginTop = "0px";
    // show annotation
    annotation.style.visibility = "visible";
  }  
});
// mouseout
highlight3.addEventListener("mouseout", () => {
  // lighten when not hovering if not selected
  if(!highlight3.selected && featureToggle.checked){
    highlight3.style.backgroundColor = "#728997";
  } 
});

// When user hovers over HIGHLIGHT 4
// get highlight 4 element
highlight4 = document.getElementById("highlight4");
// mouseover
highlight4.addEventListener("mouseover", () => {
  // darken on hover if not selected
  if(!highlight4.selected && featureToggle.checked){
  highlight4.style.backgroundColor = "#2d4558";
  }
});
// click
highlight4.addEventListener("click", () => {
  // keep dark if clicked
  if(!highlight4.selected && featureToggle.checked){
    // change color of slected
    highlight4.style.backgroundColor = "#2d4558";
    highlight4.selected = true;
    // change color of other highlights
    highlight1.style.backgroundColor = "#728997";
    highlight2.style.backgroundColor = "#728997";
    highlight3.style.backgroundColor = "#728997";
    highlight5.style.backgroundColor = "#728997";
    // unselect other hights
    highlight1.selected = false;
    highlight2.selected = false;
    highlight3.selected = false;
    highlight5.selected = false;
    // show annotation
    // get annnotation element
    annotation = document.getElementById('annotation');
    annotationTitle = document.getElementById('annotation-title');
    annotationBody = document.getElementById('annotation-body');
    annotationVideo = document.getElementById('annotation-video');
    // change words
    annotationTitle.innerHTML = "What's wrong with overmixing?";
    annotationBody.innerHTML = "Overmixing will build gluten and give your cookies a cake like texture.";
    // hide video
    annotationVideo.style.visibility = "hidden";
    annotationVideo.style.height = "0px";
    annotationVideo.style.marginTop = "0px";
    // show annotation
    annotation.style.visibility = "visible";  
  }
});
// mouseout
highlight4.addEventListener("mouseout", () => {
  // lighten when not hovering if not selected
  if(!highlight4.selected && featureToggle.checked){
    highlight4.style.backgroundColor = "#728997";
  } 
});

// When user hovers over HIGHLIGHT 5
// get highlight 5 element
highlight5 = document.getElementById("highlight5");
// mouseover
highlight5.addEventListener("mouseover", () => {
  // darken on hover if not selected
  if(!highlight5.selected && featureToggle.checked){
  highlight5.style.backgroundColor = "#2d4558";
  }
});
// click
highlight5.addEventListener("click", () => {
  // keep dark if clicked
  if(!highlight5.selected && featureToggle.checked){
    // change color of slected
    highlight5.style.backgroundColor = "#2d4558";
    highlight5.selected = true;
    // change color of other highlights
    highlight1.style.backgroundColor = "#728997";
    highlight2.style.backgroundColor = "#728997";
    highlight3.style.backgroundColor = "#728997";
    highlight4.style.backgroundColor = "#728997";
    // unselect other hights
    highlight1.selected = false;
    highlight2.selected = false;
    highlight3.selected = false;
    highlight4.selected = false;
    // show annotation
    // get annnotation element
    annotation = document.getElementById('annotation');
    annotationTitle = document.getElementById('annotation-title');
    annotationBody = document.getElementById('annotation-body');
    annotationTimestamp = document.getElementById('annotation-timestamp');
    annotationVideo = document.getElementById('annotation-video');
    // change words
    annotationTitle.innerHTML = "Why do these cookies bake a little hotter and faster than most cookies?";
    annotationBody.innerHTML = "When Jessie experimented with this recipe, she found baking the cookies at a hotter temperature for a short time allowed them to rise quickly without overbaking. The shorter bake time also contributes to the chewy texture.";
    annotationTimestamp.innerHTML = "7:44";
    // show video
    annotationVideo.style.visibility = "visible";
    annotationVideo.style.height = "auto";
    annotationVideo.style.marginTop = "20px";
    // show annotation
    annotation.style.visibility = "visible";
  }
});
// mouseout
highlight3.addEventListener("mouseout", () => {
  // lighten when not hovering if not selected
  if(!highlight5.selected && featureToggle.checked){
    highlight5.style.backgroundColor = "#728997";
  } 
});

// When user clicks the toggle
// get toggle element
featureToggle = document.getElementById('featureToggle');
// click
featureToggle.addEventListener("click", () => {
  if(featureToggle.checked){
    // show feature
    // show toggle description
    toggleDescription = document.getElementById('toggle-direction');
    toggleDescription.style.visibility = "visible";
    // toggleDescription.style.height = "auto";
    // show highlights
    highlight1.style.backgroundColor = "#728997";
    highlight1.style.color = "white";
    highlight1.style.padding = "2px 5px";
    highlight2.style.backgroundColor = "#728997";
    highlight2.style.color = "white";
    highlight2.style.padding = "2px 5px";
    highlight3.style.backgroundColor = "#728997";
    highlight3.style.color = "white";
    highlight3.style.padding = "2px 5px";
    highlight4.style.backgroundColor = "#728997";
    highlight4.style.color = "white";
    highlight4.style.padding = "2px 5px";
    highlight5.style.backgroundColor = "#728997";
    highlight5.style.color = "white";
    highlight5.style.padding = "2px 5px";
  }else{
    // hide feature
    // show toggle description
    toggleDescription = document.getElementById('toggle-direction');
    toggleDescription.style.visibility = "hidden";
    // toggleDescription.style.height = "0px";
    // hide video
    annotationVideo.style.visibility = "hidden";
    annotationVideo.style.height = "0px";
    annotationVideo.style.marginTop = "0px";
    // hide highlights
    highlight1.style.backgroundColor = "rgba(0,0,0,0)";
    highlight1.style.color = "rgb(68, 68, 68)";
    highlight1.style.padding = "0px 0px";
    highlight2.style.backgroundColor = "rgba(0,0,0,0)";
    highlight2.style.color = "rgb(68, 68, 68)";
    highlight2.style.padding = "0px 0px";
    highlight3.style.backgroundColor = "rgba(0,0,0,0)";
    highlight3.style.color = "rgb(68, 68, 68)";
    highlight3.style.padding = "0px 0px";
    highlight4.style.backgroundColor = "rgba(0,0,0,0)";
    highlight4.style.color = "rgb(68, 68, 68)";
    highlight4.style.padding = "0px 0px";
    highlight5.style.backgroundColor = "rgba(0,0,0,0)";
    highlight5.style.color = "rgb(68, 68, 68)";
    highlight5.style.padding = "0px 0px";
    //unselect all highlights
    highlight1.selected = false;
    highlight2.selected = false;
    highlight3.selected = false;
    highlight4.selected = false;
    highlight5.selected = false;
    
    // hide annotation
    annotation.style.visibility = "hidden";
  }
})



