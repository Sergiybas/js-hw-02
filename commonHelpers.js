import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let e;o.addEventListener("click",r);function n(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}t.addEventListener("click",()=>{e=setInterval(()=>{document.body.style.backgroundColor=n()},1e3),e&&(t.disabled=!0)});function r(){clearInterval(e),t.disabled=!1}
//# sourceMappingURL=commonHelpers.js.map
