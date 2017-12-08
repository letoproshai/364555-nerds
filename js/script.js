var link = document.querySelector(".btn-contacts");
 
      var popup = document.querySelector(".modal-basket"); 
 +var close = popup.querySelector(".modal-close");
 +    
 +var form = popup.querySelector("form");
 +var user = popup.querySelector("[name=user-name]");
 +var email = popup.querySelector("[name=email]");

  var storage = localStorage.getItem("user");     
       
 link.addEventListener("click", function (evt) {
 +  evt.preventDefault();
 +  popup.classList.add("modal-show");
 +  
 +  if (storage) {
 +    user.value = storage;
 +    email.focus();
 +  } else {
 +  user.focus();
 +  }
 +});
 +  
 +close.addEventListener("click", function (evt) {
 +  evt.preventDefault();
 +  popup.classList.remove("modal-show");
 +  popup.classList.remove("modal-error");
 +})
 +  
 +form.addEventListener("submit", function (evt) {
 +  if (!user.value || !email.value) {
 +  evt.preventDefault();
 +  popup.classList.add("modal-error");
 +  popup.offsetWidth = popup.offsetWidth;
 +  popup.classList("modal-error");
 +  }
 +  else {
 +    localStorage.setItem("user", user.value);
 +  }
 +})
 +  
 +window.addEventListener("keydown", function (evt) {
 +  if (evt.keyCode === 27) {
 +    if (popup.classList.contains("modal-show")); {
 +      popup.classList.remove("modal-show");
 +      popup.classList.remove("modal-error");
 +    }
 +  }
 +});
       