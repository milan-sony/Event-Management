function readMore(){
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more-text");
  let readMoreBtn = document.getElementById("read-more-btn");
  // 1st Check if the dots are visible or not. 
  if(dots.style.display!="none"){
    //If the dots are not visible (dots not equal to null/none), we are going to hide that dots.
    dots.style.display="none";
    // Display More Text
    moreText.style.display="inline";
    // Change Btn name
    readMoreBtn.innerHTML="Read Less";
  }
  else{
    dots.style.display="inline";
    moreText.style.display="none";
    readMoreBtn.innerHTML="Read More";
  }
}
``