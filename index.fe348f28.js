const e=document.getElementById("close_pop_up"),t=document.getElementById("pop_up"),c=document.getElementById("perHead"),o=document.getElementById("wrap_back"),p=document.getElementById("modalId");e.addEventListener("click",(()=>{o.classList.remove("wrap-pop-up")})),e.addEventListener("click",(()=>{t.classList.remove("activePopUp")})),c.addEventListener("click",(()=>{t.classList.remove("activePopUp"),o.classList.remove("wrap-pop-up"),p.style.zIndex="-1000"}));document.querySelectorAll(".footer__nav-link").forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("activePopUp"),o.classList.remove("wrap-pop-up"),p.style.zIndex="-1000"}))}));
//# sourceMappingURL=index.fe348f28.js.map
