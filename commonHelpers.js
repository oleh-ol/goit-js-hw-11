import{S as m,i as u}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/?",d="41837495-d070c30be5c0243a4bb3b397a",h=document.querySelector(".search-form"),a=document.querySelector(".gallery");let g=new m(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",o=>{o.preventDefault(),a.innerHTML=`<li>
        <span class="loader"></span>
    </li>`;const i=o.target.elements.keywords.value,s=new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${f}${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(p).catch(y)});const p=o=>{if(o.hits.length===0)throw new Error(o.status);a.innerHTML=o.hits.reduce((i,{largeImageURL:s,webformatURL:r,tags:e,likes:t,views:n,comments:l,downloads:c})=>i+`
    <li class="img">
       <a href="${s}"><img src="${r}" alt="${e}"></a>
      <ul class="img-info">
        <li class="img-info-item"><span>Likes</span> ${t}</li>
        <li class="img-info-item"><span>Views</span> ${n}</li>
        <li class="img-info-item"><span>Comments</span> ${l}</li>
        <li class="img-info-item"><span>Downloads</span> ${c}</li>
      </ul>
    </li>`,""),g.refresh()},y=()=>{u.show({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432,iconUrl:"./img/error-icon.svg",iconColor:"#FFFFFF",backgroundColor:"#EF4040",messageColor:"#FFFFFF",position:"topRight"}),imagesContainer.innerHTML=""};
//# sourceMappingURL=commonHelpers.js.map
