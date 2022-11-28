(()=>{"use strict";function n(n){let e=document.getElementsByClassName("tab");for(let n=0;n<e.length;n++)e[n].style.display="none";document.getElementById(n).style.display="block"}document.getElementById("content").innerHTML="\n    <nav class='flex space-between'>\n        <div id='logo'>Restaurant</div>\n        <ul class='flex space-between'>\n            <li><a id='menu-link'>Menu</a></li>\n            <li><a href=\"#\">Events</a></li>\n            <li><a href=\"#\">Gallery</a></li>\n            <li><a href=\"#\">About</a></li>\n            <li><a id='contacts-link'>Contact</a></li>\n        </ul>\n        <button type='button' class='orange'>Book a table</button>\n    </nav>\n\n    <section class='flex-column tab' id='menu'>\n        <div class='flex column-center'>\n            <h2>Our Special Dishes</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>    \n        </div>\n        <div class=\"menu flex space-around\">\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-1 1.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Lumpia with Suace</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-3 1.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Fish and Veggie</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-5.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Tofu Chili</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n            <div class=\"menu-item column-center center\">\n                <img src=\"../assets/dish-4.png\" class='meal'>\n                <div class='price'>$12</div>\n                <h4>Egg and Cocumber</h4>\n                <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>\n            </div>\n        </div>\n    </section>\n\n    <section class='flex space-around'>\n\n        <div>\n            <img src='../assets/dish-2 2.png' />\n        </div>\n\n        <div class='flex column-justify-center'>\n            <h2>Wecome to Our Restaurant</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n            <div class=\"btn-container flex\">\n                <button type=\"button\" class='black'>Menu</button>\n                <button type=\"button\" class='orange'>Book a table </button>\n            </div>\n        </div>\n    </section>\n\n    <section id='contact' class='tab'>\n    <div>ყველაფერი იქნება უკეთესად</div>\n</section>\n    ",function(){let e=document.getElementById("menu-link"),i=document.getElementById("contacts-link");e.addEventListener("click",(()=>n("menu"))),i.addEventListener("click",(()=>n("contact")))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBaUNBLFNBQVNBLEVBQVFDLEdBQ2IsSUFBSUMsRUFBV0MsU0FBU0MsdUJBQXVCLE9BQy9DLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJSCxFQUFTSSxPQUFRRCxJQUNqQ0gsRUFBU0csR0FBR0UsTUFBTUMsUUFBVSxPQUVoQ0wsU0FBU00sZUFBZVIsR0FBU00sTUFBTUMsUUFBVSxPQUNyRCxDQXBDZ0JMLFNBQVNNLGVBQWUsV0EwQjFCQyxVQUFZQyw2eUZBVDFCLFdBQ0ksSUFBSUMsRUFBVVQsU0FBU00sZUFBZSxhQUNsQ0ksRUFBYVYsU0FBU00sZUFBZSxpQkFFekNHLEVBQVFFLGlCQUFpQixTQUFTLElBQU1kLEVBQVEsVUFDaERhLEVBQVdDLGlCQUFpQixTQUFTLElBQU1kLEVBQVEsWUFDdkQsQ0FpQkllLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250YWN0cyBmcm9tICcuL21vZHVsZXMvY29udGFjdC5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21vZHVsZXMvbWVudSc7XG5cbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBodG1sID0gYFxuICAgIDxuYXYgY2xhc3M9J2ZsZXggc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgIDxkaXYgaWQ9J2xvZ28nPlJlc3RhdXJhbnQ8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPSdmbGV4IHNwYWNlLWJldHdlZW4nPlxuICAgICAgICAgICAgPGxpPjxhIGlkPSdtZW51LWxpbmsnPk1lbnU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkV2ZW50czwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+R2FsbGVyeTwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBpZD0nY29udGFjdHMtbGluayc+Q29udGFjdDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J29yYW5nZSc+Qm9vayBhIHRhYmxlPC9idXR0b24+XG4gICAgPC9uYXY+XG5gO1xuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWxpbmsnKTtcbiAgICBsZXQgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cy1saW5rJyk7XG4gICAgXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5UYWIoJ21lbnUnKSk7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5UYWIoJ2NvbnRhY3QnKSk7ICAgIFxufVxuXG5mdW5jdGlvbiByZW5kZXJIb21lUGFnZShiYXNlLCBtZW51LCBjb250YWN0KSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGJhc2UgKyBtZW51ICsgY29udGFjdDtcbn1cblxuXG5mdW5jdGlvbiBvcGVuVGFiKHRhYk5hbWUpIHtcbiAgICBsZXQgdGFiQXJyYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFiQXJyYXlbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYk5hbWUpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICByZW5kZXJIb21lUGFnZShodG1sLCBtZW51LCBjb250YWN0cyk7XG4gICAgYWRkRXZlbnRzKCk7XG59XG5cblxuaW5pdCgpOyJdLCJuYW1lcyI6WyJvcGVuVGFiIiwidGFiTmFtZSIsInRhYkFycmF5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiYmFzZSIsIm1lbnVCdG4iLCJjb250YWN0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=