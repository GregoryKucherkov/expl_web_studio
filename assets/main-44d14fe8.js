(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();(()=>{const t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const r=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};n.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};if(t.openModalBtn&&t.closeModalBtn&&t.modal){let o=function(){t.modal.classList.toggle("is-hidden")};var n=o;t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o)}})();const i=document.querySelector("[data-link-home]"),a=document.querySelector("[data-link-portfolio]"),u=document.querySelector("[data-link-contacts]"),m=()=>{const t="/expl_web_studio",o=window.location.pathname.replace(t,"").toLowerCase(),c=document.querySelectorAll(".current");switch(c&&c.forEach(e=>e.classList.remove("current")),!0){case o.endsWith("studio.html"):i.classList.add("current");break;case o.endsWith("portfolio.html"):a.classList.add("current");break;case o.endsWith("contacts.html"):u.classList.add("current");break;default:i.classList.add("current")}};m();const d=Array.from(document.querySelectorAll(".types-preview .types-item")),f=document.querySelector(".buttons"),s=document.querySelector(".types-preview"),p=t=>{if(t.target.nodeName!=="BUTTON")return;const n=t.target.textContent.trim();console.log(n);let o;n!=="All"?o=d.filter(c=>c.querySelector(".types-prdct").textContent.includes(n)):o=d,s.innerHTML="",o.forEach(c=>{s.appendChild(c)})};s&&f.addEventListener("click",p);
//# sourceMappingURL=main-44d14fe8.js.map
