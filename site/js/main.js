function highlighter(){
  console.log("dude this is working fine lul");
  var body = document.querySelector(".albums_images");
  body.classList.toggle("display_items");
  body.classList.toggle("none")
}

function article_videos(){
  console.log("dude this is working fine lul");
  //var article_albums = document.querySelector(".albums_article");
  //article_albums.classList.toggle("videos_article")
  var albums = document.querySelector(".albums")
  albums.classList.toggle("none")
  var merch = document.querySelector(".merch_article")
  albums.classList.toggle("none")
  var videos_article = document.querySelector(".none")
  albums.classList.toggle("videos_article")
}

function article_albums(){
  console.log("dude this is working fine lul");
  //var article_albums = document.querySelector(".albums_article");
  //article_albums.classList.toggle("videos_article")
  var albums = document.querySelector(".albums_article")
  albums.classList.toggle("albums_article")
  var merch = document.querySelector(".merch_article")
  albums.classList.toggle("none")
  var videos_article = document.querySelector(".none")
  albums.classList.toggle("none")
}


function reverse() {
  console.log("worked out fine yes")
  var body = document.querySelector(".display_items");
  body.classList.toggle("reversenone");
}

function test(){
  console.log("test1");
}

function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}
