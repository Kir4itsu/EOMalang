var default_lang="en",language=localStorage.getItem("language");function initLanguage(){setLanguage(null===language?default_lang:language);var e=document.getElementsByClassName("language");e&&Array.from(e).forEach(function(t){t.addEventListener("click",function(e){setLanguage(t.getAttribute("data-lang"))})})}function setLanguage(e){document.getElementById("header-lang-img")&&("en"==e?(document.getElementById("header-lang-img").src="../assets/images/flags/us.svg",document.getElementById("lang-name").innerHTML="English"):"sp"==e?(document.getElementById("header-lang-img").src="../assets/images/flags/spain.svg",document.getElementById("lang-name").innerHTML="Española"):"gr"==e?(document.getElementById("header-lang-img").src="../assets/images/flags/germany.svg",document.getElementById("lang-name").innerHTML="Deutsche"):"it"==e?(document.getElementById("header-lang-img").src="../assets/images/flags/italy.svg",document.getElementById("lang-name").innerHTML="Italiana"):"ru"==e?(document.getElementById("header-lang-img").src="../assets/images/flags/russia.svg",document.getElementById("lang-name").innerHTML="русский"):"ch"==e?(document.getElementById("header-lang-img").src="../assets/images/flags/china.svg",document.getElementById("lang-name").innerHTML="中国人"):"fr"==e?(document.getElementById("header-lang-img").src="../assets/images/flags/french.svg",document.getElementById("lang-name").innerHTML="français"):"sa"==e&&(document.getElementById("header-lang-img").src="../assets/images/flags/sa.svg",document.getElementById("lang-name").innerHTML="عربى"),localStorage.setItem("language",e),language=localStorage.getItem("language"),getLanguage())}function getLanguage(){null==language&&setLanguage(default_lang);var e=new XMLHttpRequest;e.open("GET","../assets/lang/"+language+".json"),e.onreadystatechange=function(){var n;4===this.readyState&&200===this.status&&(n=JSON.parse(this.responseText),Object.keys(n).forEach(function(t){var e=document.querySelectorAll("[data-key='"+t+"']");Array.from(e).forEach(function(e){e.textContent=n[t]})}))},e.send()}function isCustomDropdown(){var n=document.getElementById("search-close-options"),a=document.getElementById("search-dropdown"),r=document.getElementById("search-options"),e=(r&&(r.addEventListener("focus",function(){0<r.value.length?(a.classList.add("show"),n.classList.remove("d-none")):(a.classList.remove("show"),n.classList.add("d-none"))}),r.addEventListener("keyup",function(e){var o,t;0<r.value.length?(a.classList.add("show"),n.classList.remove("d-none"),o=r.value.toLowerCase(),t=document.getElementsByClassName("notify-item"),Array.from(t).forEach(function(e){var t,n,a="";e.querySelector("h6")?(t=e.getElementsByTagName("span")[0].innerText.toLowerCase(),a=(n=e.querySelector("h6").innerText.toLowerCase()).includes(o)?n:t):e.getElementsByTagName("span")&&(a=e.getElementsByTagName("span")[0].innerText.toLowerCase()),a&&(a.includes(o)?(e.classList.add("d-block"),e.classList.remove("d-none")):(e.classList.remove("d-block"),e.classList.add("d-none"))),Array.from(document.getElementsByClassName("notification-group-list")).forEach(function(e){0==e.querySelectorAll(".notify-item.d-block").length?e.querySelector(".notification-title").style.display="none":e.querySelector(".notification-title").style.display="block"})})):(a.classList.remove("show"),n.classList.add("d-none"))}),n.addEventListener("click",function(){r.value="",a.classList.remove("show"),n.classList.add("d-none")}),document.body.addEventListener("click",function(e){"search-options"!==e.target.getAttribute("id")&&(a.classList.remove("show"),n.classList.add("d-none"))})),document.getElementsByClassName("plus")),t=document.getElementsByClassName("minus"),o=document.getElementsByClassName("product");e&&Array.from(e).forEach(function(e){e.addEventListener("click",function(t){parseInt(e.previousElementSibling.value)<t.target.previousElementSibling.getAttribute("max")&&(t.target.previousElementSibling.value++,o)&&Array.from(o).forEach(function(e){u(t.target)})})}),t&&Array.from(t).forEach(function(e){e.addEventListener("click",function(t){parseInt(e.nextElementSibling.value)>t.target.nextElementSibling.getAttribute("min")&&(t.target.nextElementSibling.value--,o)&&Array.from(o).forEach(function(e){u(t.target)})})});var s=.125,l=65,i=.15,c="$",m=document.querySelectorAll(".cartlist li").length;function d(e){var t=0,n=(Array.from(e.getElementsByClassName("product")).forEach(function(e){Array.from(e.getElementsByClassName("product-line-price")).forEach(function(e){t+=parseFloat(e.innerHTML)})}),t*s),a=t*i,o=0<t?l:0,r=t+n+o-a;e.querySelector(".cart-subtotal").innerHTML=c+t.toFixed(2),e.querySelector(".cart-tax").innerHTML=c+n.toFixed(2),e.querySelector(".cart-shipping").innerHTML=c+o.toFixed(2),e.querySelector(".cart-total").innerHTML=c+r.toFixed(2),e.querySelector(".cart-discount").innerHTML="-"+c+a.toFixed(2)}function u(e){var t,n,a,o,r;e.closest(".product")&&(t=e.closest(".product"),n=e.closest(".product-list"),(t||t.getElementsByClassName("product-price"))&&Array.from(t.getElementsByClassName("product-price")).forEach(function(e){a=parseFloat(e.innerHTML)}),e.previousElementSibling&&e.previousElementSibling.classList.contains("product-quantity")?o=e.previousElementSibling.value:e.nextElementSibling&&e.nextElementSibling.classList.contains("product-quantity")&&(o=e.nextElementSibling.value),r=a*o,Array.from(t.getElementsByClassName("product-line-price")).forEach(function(e){e.innerHTML=r.toFixed(2),d(n)}))}document.querySelectorAll(".cartitem-badge").forEach(function(e){e.innerHTML=m}),document.querySelectorAll(".product-list").forEach(function(t){t.querySelectorAll(".product-count").forEach(function(e){e.innerHTML=t.querySelectorAll(".product").length}),d(t)});e=document.getElementById("removeItemModal");e&&e.addEventListener("show.bs.modal",function(t){document.getElementById("remove-product").addEventListener("click",function(e){t.relatedTarget.closest(".product").remove(),document.getElementById("close-modal").click(),document.querySelectorAll(".cartitem-badge").forEach(function(e){e.innerHTML=document.querySelectorAll(".cartlist li").length}),document.querySelectorAll(".product-list").forEach(function(t){t.querySelectorAll(".product-count").forEach(function(e){e.innerHTML=t.querySelectorAll(".product").length}),d(t)})})})}function isCustomDropdownResponsive(){var t=document.getElementById("search-close-options"),n=document.getElementById("search-dropdown-reponsive"),e=document.getElementById("search-options-reponsive");t&&n&&e&&(e.addEventListener("focus",function(){0<e.value.length?(n.classList.add("show"),t.classList.remove("d-none")):(n.classList.remove("show"),t.classList.add("d-none"))}),e.addEventListener("keyup",function(){0<e.value.length?(n.classList.add("show"),t.classList.remove("d-none")):(n.classList.remove("show"),t.classList.add("d-none"))}),t.addEventListener("click",function(){e.value="",n.classList.remove("show"),t.classList.add("d-none")}),document.body.addEventListener("click",function(e){"search-options"!==e.target.getAttribute("id")&&(n.classList.remove("show"),t.classList.add("d-none"))}))}function elementInViewport(e){if(e){var t=e.offsetTop,n=e.offsetLeft,a=e.offsetWidth,o=e.offsetHeight;if(e.offsetParent)for(;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t>=window.pageYOffset&&n>=window.pageXOffset&&t+o<=window.pageYOffset+window.innerHeight&&n+a<=window.pageXOffset+window.innerWidth}}function windowResizeHover(){var e=document.querySelectorAll(".ecommerce-navbar .navbar-nav li");Array.from(e).forEach(function(e){e.addEventListener("click",menuItem.bind(this),!1),e.addEventListener("mouseover",menuItem.bind(this),!1)});document.documentElement.clientWidth<992?(e=(e="/"==location.pathname?"index.html":location.pathname.substring(1)).substring(e.lastIndexOf("/")+1))&&(e=document.getElementById("navigation-menu").querySelector('[href="'+e+'"]'))&&(e=e.closest(".dropdown-menu"))&&(e.classList.add("show"),e.parentElement)&&(e.classList.add("show"),e.parentElement.children[0].classList.add("show"),e.parentElement.children[0].setAttribute("aria-expanded","true"),e.parentElement.parentElement.parentElement)&&(e.parentElement.parentElement.classList.add("show"),e.parentElement.parentElement.parentElement.children[0].classList.add("show"),e.parentElement.parentElement.parentElement.children[0].setAttribute("aria-expanded","true"),e.parentElement.parentElement.parentElement.parentElement.parentElement)&&(e.parentElement.parentElement.parentElement.parentElement.classList.add("show"),e.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].classList.add("show"),e.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].setAttribute("aria-expanded","true"),e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)&&(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("show"),e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].classList.add("show"),e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].setAttribute("aria-expanded","true")):document.querySelectorAll("#navigation-menu .dropdown").forEach(function(e){e.querySelector(".dropdown-menu").classList.contains("show")&&e.querySelector(".dropdown-menu").classList.remove("show"),e.querySelector(".dropdown-toggle")&&e.querySelector(".dropdown-toggle").setAttribute("aria-expanded","false")});e=document.getElementById("navbarSupportedContent");new bootstrap.Collapse(e,{toggle:!1}).hide()}function menuItem(e){if(e.target&&e.target.matches(".submenu a.nav-link"))if(0==elementInViewport(e.target.nextElementSibling)){e.target.nextElementSibling.classList.add("dropdown-custom-right");var t=e.target.nextElementSibling;Array.from(t.querySelectorAll(".submenu")).forEach(function(e){e.classList.add("dropdown-custom-right")})}else if(1==elementInViewport(e.target.nextElementSibling)&&1848<=window.innerWidth)for(var n=document.getElementsByClassName("dropdown-custom-right");0<n.length;)n[0].classList.remove("dropdown-custom-right")}function initActiveMenu(){var e="/"==location.pathname?"index.html":location.pathname.substring(1);(e=e.substring(e.lastIndexOf("/")+1))&&(e=document.getElementById("navigation-menu").querySelector('.nav-link[href="'+e+'"]'))&&(e.classList.add("active"),e=e.closest(".dropdown-menu"))&&e.parentElement&&(e.parentElement.children[0].classList.add("active"),e.parentElement.parentElement.parentElement)&&(e.parentElement.parentElement.parentElement.children[0].classList.add("active"),e.parentElement.parentElement.parentElement.parentElement.parentElement)&&(e.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].classList.add("active"),e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)&&e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].classList.add("active")}function initMenuItemScroll(){setTimeout(function(){var e,t=document.getElementById("navbarSupportedContent");t&&t.querySelector(".nav-link.active")&&(e=t.querySelector(".nav-link.active").offsetTop,setTimeout(function(){t.scrollTop=e},0))},250)}initLanguage(),window.addEventListener("resize",windowResizeHover),windowResizeHover(),initMenuItemScroll();const navbarCollapsible=document.getElementById("navbarSupportedContent");function initModeSetting(){sessionStorage.getItem("data-bs-theme")&&"light"==sessionStorage.getItem("data-bs-theme")?document.documentElement.setAttribute("data-bs-theme","light"):"dark"==sessionStorage.getItem("data-bs-theme")&&document.documentElement.setAttribute("data-bs-theme","dark");var n=document.getElementsByTagName("HTML")[0];document.querySelectorAll("#light-dark-mode .dropdown-item").forEach(function(t){t.addEventListener("click",function(e){n.hasAttribute("data-bs-theme")&&"light"==t.getAttribute("data-mode")?sessionStorage.setItem("data-bs-theme","light"):n.hasAttribute("data-bs-theme")&&"dark"==t.getAttribute("data-mode")?sessionStorage.setItem("data-bs-theme","dark"):n.hasAttribute("data-bs-theme")&&"auto"==t.getAttribute("data-mode")&&(window.matchMedia("(prefers-color-scheme: dark)").matches?sessionStorage.setItem("data-bs-theme","dark"):sessionStorage.setItem("data-bs-theme","light")),sessionStorage.getItem("data-bs-theme")&&"light"==sessionStorage.getItem("data-bs-theme")?document.documentElement.setAttribute("data-bs-theme","light"):"dark"==sessionStorage.getItem("data-bs-theme")&&document.documentElement.setAttribute("data-bs-theme","dark")})})}function init(){isCustomDropdown(),isCustomDropdownResponsive(),initActiveMenu(),initMenuItemScroll(),initModeSetting()}function windowScroll(){var e=document.getElementById("navbar");e&&(50<=document.body.scrollTop||50<=document.documentElement.scrollTop?e.classList.add("is-sticky"):e.classList.remove("is-sticky"))}function firstTimeLoad(){var e=new bootstrap.Modal(document.getElementById("subscribeModal"),{keyboard:!1}),t=document.getElementById("subscribeModal");setTimeout(function(){e&&e.show(t)},1e3)}navbarCollapsible.addEventListener("shown.bs.collapse",e=>{initMenuItemScroll()}),init(),window.addEventListener("scroll",function(e){e.preventDefault(),windowScroll()}),firstTimeLoad();var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(e){return new bootstrap.Tooltip(e)}),mybutton=(setTimeout(function(){var e=document.querySelectorAll(".submenu-item li a");e&&e.forEach(function(e){var t=window.location.href.split(/[?#]/)[0];e.href==t&&e.classList.add("active")})},0),document.getElementById("back-to-top"));function scrollFunction(){100<document.body.scrollTop||100<document.documentElement.scrollTop?mybutton.style.display="block":mybutton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function chatBot(){var e=document.getElementById("chatBot");e&&e.classList.remove("show")}function scrollToBottom(n){setTimeout(function(){var e=document.getElementById(n).querySelector("#chat-conversation .simplebar-content-wrapper")?document.getElementById(n).querySelector("#chat-conversation .simplebar-content-wrapper"):"",t=document.getElementsByClassName("chat-conversation-list")[0]?document.getElementById(n).getElementsByClassName("chat-conversation-list")[0].scrollHeight-window.innerHeight+800:0;t&&e.scrollTo({top:t,behavior:"smooth"})},100)}mybutton&&(window.onscroll=function(){scrollFunction()});const chatCollapsible=document.getElementById("chatBot");chatCollapsible.addEventListener("shown.bs.collapse",e=>{scrollToBottom("users-chat-widget")});