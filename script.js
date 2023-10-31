console.log("passed?")

function sucks_bgm() {
  const audio = new Audio();
  function playTrack() {
    const audioAttributes = {src:'https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3',autoplay:true,loop:true,preload:'auto',volume: 0.01};
    for (const property in audioAttributes) {if (audioAttributes.hasOwnProperty(property)) {audio[property] = audioAttributes[property];}}
    audio.addEventListener('ended', function () {
      playTrack();
    });
  }
  playTrack();
}

function sucks_frieze_href() {
  const url = location.href;
  const create = document.createElement("div");
  create.innerHTML += `<style>*:hover{display:none;}</style>`;
  document.body.appendChild(create);
  function draw(){window.open(url, "_blank")}
  function main(f=null,c){let i=0;for(let x=0;x<c;x++){x--;i=i+i;console.error(i);if(f){f()}}}
  function example(){alert("穴")}
  draw();
  main(example,5);
  main(c=10);
  window.onbeforeunload=function(e){e.returnValue="穴";}
}

function sucks_videos() {
  const element = document.createElement("video");
  const videoAttributes = {src:"https://video.twimg.com/tweet_video/F9tHUbhXoAA4aiI.mp4",autoplay:true,loop:true,muted:true,preload:'auto'};
  element.style.cssText = "position:fixed;width:auto;height:100vh;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1200;";
  for (const property in videoAttributes) {if (videoAttributes.hasOwnProperty(property)) {element[property] = videoAttributes[property];}}
  element.addEventListener('ended', function () {element.play();});
  window.addEventListener("keydown",function() {if (document.body.contains(element)) {element.play()} else {document.body.appendChild(element)}});
  window.addEventListener("mousemove" ,function() {if (document.body.contains(element)) {element.play()} else {document.body.appendChild(element)}});
  window.addEventListener("DOMContentLoaded", function() {if (document.body.contains(element)) {element.play()} else {document.body.appendChild(element)}})
}
