import{S as h,i as p}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/?",y="41837495-d070c30be5c0243a4bb3b397a",a=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader-container");let u=new h(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",t=>{t.preventDefault(),L(),l.innerHTML="",u.refresh();const n=a.elements.keywords.value,i=new URLSearchParams({key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${g}${i}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(F).catch(d).finally(b())});const F=t=>{if(t.hits.length===0){d("No images found for the given search query.");return}l.innerHTML=t.hits.reduce((n,{largeImageURL:i,webformatURL:r,tags:e,likes:o,views:s,comments:f,downloads:m})=>n+`
    <li class="img">
       <a href="${i}"><img src="${r}" alt="${e}"></a>
      <ul class="img-info">
        <li class="img-info-item"><span>Likes</span> ${o}</li>
        <li class="img-info-item"><span>Views</span> ${s}</li>
        <li class="img-info-item"><span>Comments</span> ${f}</li>
        <li class="img-info-item"><span>Downloads</span> ${m}</li>
      </ul>
    </li>`,""),u.refresh()},d=(t="An error occurred.")=>{p.show({message:t,maxWidth:432,iconUrl:"./img/error-icon.svg",iconColor:"#FFFFFF",backgroundColor:"#EF4040",messageColor:"#FFFFFF",position:"topRight"}),l.innerHTML=""},L=()=>{c.style.display="block"},b=()=>{c.style.display="none"};
//# sourceMappingURL=commonHelpers.js.map
