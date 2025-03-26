// window.onload = function() {;
// 	// More Efficient than the upper
// 	function setupToggle(toggleId) {
//         var toggleLink = document.getElementById(toggleId);
//         if (!toggleLink) return;

//         var submenu = toggleLink.nextElementSibling;
//         toggleLink.addEventListener('click', function(e) {
//             e.stopPropagation();
//             submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//         });

//         document.addEventListener('click', function(e) {
//             if (submenu.style.display === 'block' && e.target !== toggleLink && !submenu.contains(e.target)) {
//                 submenu.style.display = 'none';
//             }
//         });

//         submenu.addEventListener('click', function(e) {
//             if (e.target.tagName === 'A') {
//                 submenu.style.display = 'none';
//             }
//         });

//         submenu.style.maxHeight = "300px";
//         submenu.style.overflowY = "auto";
//     }
//     setupToggle('toggle');
//     setupToggle('mobile-toggle');

//     // SCROLL
// 	var buttons = document.querySelectorAll(".scroll_btn");
// 	var form = document.getElementById("form");
// 	if (buttons.length > 0) {
// 		for (var i = 0; i < buttons.length; i++) {
// 			buttons[i].addEventListener("click", function() {
// 				form.scrollIntoView({
// 					behavior: "smooth"
// 				});
// 			});
// 		}
// 	}
// };

window.onload = function() {
    // More Efficient than the upper
    function setupToggle(toggleId) {
        var toggleLink = document.getElementById(toggleId);
        if (!toggleLink) return;

        var submenu = toggleLink.nextElementSibling;
        toggleLink.addEventListener('click', function(e) {
            e.stopPropagation();
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function(e) {
            if (submenu.style.display === 'block' && e.target !== toggleLink && !submenu.contains(e.target)) {
                submenu.style.display = 'none';
            }
        });

        submenu.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                submenu.style.display = 'none';
            }
        });

        submenu.style.maxHeight = "300px";
        submenu.style.overflowY = "auto";
    }
    setupToggle('toggle');
    setupToggle('mobile-toggle');

    // SCROLL
    var buttons = document.querySelectorAll(".scroll_btn");
    var form = document.getElementById("form");
    if (buttons.length > 0) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                form.scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
    }

    // Burger Menu Toggle
    var burgerMenu = document.getElementById("burger-menu");
    var overlay = document.getElementById("menu");
    var body = document.body;

    if (burgerMenu && overlay) {
        burgerMenu.addEventListener("click", function() {
            this.classList.toggle("close");
            overlay.classList.toggle("menu__overlay");
            body.classList.toggle("no-scroll");
        });
    }
};

// Yandex Map Initialization
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [51.6608, 39.2003],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl']
    });
}