var link=document.querySelector(".feedback-form"),popup=document.querySelector(".modal-feedback"),close=document.querySelector(".btn-close"),login=popup.querySelector("[name=login]"),form=popup.querySelector("form"),email=popup.querySelector("[name=email]"),storage=localStorage.getItem("login"),overlay=document.querySelector(".overlay");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),overlay.classList.add("overlay-show"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("overlay-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("overlay-show")))}),overlay.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("overlay-show")}),form.addEventListener("submit",function(e){login.value&&email.value?localStorage.getItem("login",login.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))});