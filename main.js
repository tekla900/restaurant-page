(()=>{"use strict";function n(n){let e=document.getElementsByClassName("tab");for(let n=0;n<e.length;n++)e[n].style.display="none";document.getElementById(n).style.display="home"==n?"flex":"promo"==n?"grid":"block"}document.getElementById("content").innerHTML="\n    <nav class='flex space-between align-center'>\n        <div id='logo'>Restaurant</div>\n        <ul class='flex space-between'>\n            <li><a id='home-link'>Home</a></li>\n            <li><a id='menu-link'>Menu</a></li>\n            <li><a href=\"#\">Events</a></li>\n            <li><a id='promo-link'>Subscribe</a></li>\n            <li><a id='contacts-link'>Contact</a></li>\n        </ul>\n        <button type='button' class='orange'>Book a table</button>\n    </nav>\n\n    <section class=\"landing flex tab space-around\" id='home'>\n        <div class=\"landing-text flex column-justify-center\">\n            <h1>We provide the best food for you</h1>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n            <div class=\"btn-container flex\">\n                <button type=\"button\" class='black'>Menu</button>\n                <button type=\"button\" class='orange'>Book a table </button>\n            </div>\n        </div>\n        <div class=\"landing-photos\">\n            <img src=\"../assets/dish-2 1.png\" id='absolute'>\n            <img src=\"../assets/interior.png\" id='interior'>\n        </div>\n    </section>\n    \n    <section class='tab' id='menu'>\n    <div class='flex-column'>\n        <div class='flex column-center'>\n            <h2>Our Special Dishes</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>    \n        </div>\n        <div class=\"menu flex space-around wrap\">\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-1 1.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Lumpia with Suace</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-3 1.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Fish and Veggie</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-5.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Tofu Chili</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-4.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Egg and Cocumber</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n        </div>\n    </div>\n\n    <div class='flex space-around' id='welcome'>\n\n        <div>\n            <img src='../assets/dish-2 2.png' id='main-pic'/>\n        </div>\n\n        <div class='flex column-justify-center'>\n            <h2>Wecome to Our Restaurant</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n            <div class=\"btn-container flex\">\n                <button type=\"button\" class='black'>Menu</button>\n                <button type=\"button\" class='orange'>Book a table </button>\n            </div>\n        </div>\n    </div>\n    </section>\n\n    <section id='promo' class='tab'>\n        <h3>Get Or Promo Code by Subscribing To our  Newsletter</h3>\n        <div class='relative'>\n            <input type='email' placeholder='Enter Your email' />\n            <button id='subscribe' class='orange'>Subscribe</button>\n        </div>\n    </section>\n\n    <section id='contact' class='tab'>\n    <div>ყველაფერი იქნება უკეთესად</div>\n</section>\n    ",function(){let e=document.getElementById("home-link"),i=document.getElementById("menu-link"),t=document.getElementById("contacts-link"),s=document.getElementById("promo-link");e.addEventListener("click",(()=>n("home"))),i.addEventListener("click",(()=>n("menu"))),t.addEventListener("click",(()=>n("contact"))),s.addEventListener("click",(()=>n("promo")))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBdUNBLFNBQVNBLEVBQVFDLEdBQ2IsSUFBSUMsRUFBV0MsU0FBU0MsdUJBQXVCLE9BQy9DLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJSCxFQUFTSSxPQUFRRCxJQUNqQ0gsRUFBU0csR0FBR0UsTUFBTUMsUUFBVSxPQUc1QkwsU0FBU00sZUFBZVIsR0FBU00sTUFBTUMsUUFENUIsUUFBWFAsRUFDaUQsT0FDL0IsU0FBWEEsRUFDMEMsT0FHQSxPQUV6RCxDQS9DZ0JFLFNBQVNNLGVBQWUsV0E4QjFCQyxVQUFZQyxnN0hBYjFCLFdBQ0ksSUFBSUMsRUFBVVQsU0FBU00sZUFBZSxhQUNsQ0ksRUFBVVYsU0FBU00sZUFBZSxhQUNsQ0ssRUFBYVgsU0FBU00sZUFBZSxpQkFDckNNLEVBQVdaLFNBQVNNLGVBQWUsY0FFdkNHLEVBQVFJLGlCQUFpQixTQUFTLElBQU1oQixFQUFRLFVBQ2hEYSxFQUFRRyxpQkFBaUIsU0FBUyxJQUFNaEIsRUFBUSxVQUNoRGMsRUFBV0UsaUJBQWlCLFNBQVMsSUFBTWhCLEVBQVEsYUFDbkRlLEVBQVNDLGlCQUFpQixTQUFTLElBQU1oQixFQUFRLFVBQ3JELENBd0JJaUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhY3RzIGZyb20gJy4vbW9kdWxlcy9jb250YWN0LmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCBtYWluU2VjdGlvbiBmcm9tICcuL21vZHVsZXMvaG9tZXBhZ2UnO1xuaW1wb3J0IHByb21vIGZyb20gJy4vbW9kdWxlcy9wcm9tbyc7XG5cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBodG1sID0gYFxuICAgIDxuYXYgY2xhc3M9J2ZsZXggc3BhY2UtYmV0d2VlbiBhbGlnbi1jZW50ZXInPlxuICAgICAgICA8ZGl2IGlkPSdsb2dvJz5SZXN0YXVyYW50PC9kaXY+XG4gICAgICAgIDx1bCBjbGFzcz0nZmxleCBzcGFjZS1iZXR3ZWVuJz5cbiAgICAgICAgICAgIDxsaT48YSBpZD0naG9tZS1saW5rJz5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaWQ9J21lbnUtbGluayc+TWVudTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RXZlbnRzPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaWQ9J3Byb21vLWxpbmsnPlN1YnNjcmliZTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGlkPSdjb250YWN0cy1saW5rJz5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nb3JhbmdlJz5Cb29rIGEgdGFibGU8L2J1dHRvbj5cbiAgICA8L25hdj5cbmA7XG5cblxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtbGluaycpO1xuICAgIGxldCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbGluaycpO1xuICAgIGxldCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzLWxpbmsnKTtcbiAgICBsZXQgcHJvbW9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvbW8tbGluaycpO1xuXG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5UYWIoJ2hvbWUnKSk7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5UYWIoJ21lbnUnKSk7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5UYWIoJ2NvbnRhY3QnKSk7IFxuICAgIHByb21vQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlblRhYigncHJvbW8nKSk7ICAgXG59XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKGJhc2UsIG1haW5TZWN0aW9uLCBtZW51LCBwcm9tbywgY29udGFjdHMpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYmFzZSArIG1haW5TZWN0aW9uICsgbWVudSArIHByb21vICsgY29udGFjdHM7XG59XG5cblxuZnVuY3Rpb24gb3BlblRhYih0YWJOYW1lKSB7XG4gICAgbGV0IHRhYkFycmF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYlwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRhYkFycmF5W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxuICAgIH1cbiAgICBpZiAodGFiTmFtZSA9PSAnaG9tZScpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiTmFtZSkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gZWxzZSBpZiAodGFiTmFtZSA9PSAncHJvbW8nKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYk5hbWUpLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9XG4gICAgZWxzZSAge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJOYW1lKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIHJlbmRlckhvbWVQYWdlKGh0bWwsIG1haW5TZWN0aW9uLCBtZW51LCBwcm9tbywgY29udGFjdHMpO1xuICAgIGFkZEV2ZW50cygpO1xufVxuXG5cbmluaXQoKTsiXSwibmFtZXMiOlsib3BlblRhYiIsInRhYk5hbWUiLCJ0YWJBcnJheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImJhc2UiLCJob21lQnRuIiwibWVudUJ0biIsImNvbnRhY3RCdG4iLCJwcm9tb0J0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudHMiXSwic291cmNlUm9vdCI6IiJ9