		var link = document.querySelector(".contact-btn");
		var popup = document.querySelector(".modal-content");
		var close = popup.querySelector(".modal-content-close");
		var form = popup.querySelector("form");
		var userName = popup.querySelector("[name=user-name]");
		var userMail = popup.querySelector("[name=user-mail]");

		var storage = localStorage.getItem("userName");




		link.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.add("modal-content-show");

			if (storage) {
				userName.value = storage;
				userMail.focus();
			}	else {
				userName.focus();
			}			
		});

		close.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
		})

		form.addEventListener("submit", function(event) {
			if (!userName.value || !userMail.value) {
				event.preventDefault();	
				popup.classList.remove("modal-error");
          		popup.offsetWidth = popup.offsetWidth;
				popup.classList.add("modal-error");
			} else {
				localStorage.setItem("userName", userName.value);
			}
		})

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (popup.classList.contains("modal-content-show")) {
					popup.classList.remove("modal-content-show");
					popup.classList.remove("modal-error");
				}
			}
		})