const menu = document.querySelector(".mobile-menu");
const mobilenav = document.querySelector(".mobile-nav");
const crossicon = document.querySelector(".mobile-nav span i ");
const mobilehome = document.getElementById("mobile-home");
const mobileabout = document.getElementById("mobile-about");
const mobileprojects = document.getElementById("mobile-projects");
const mobilecontact = document.getElementById("mobile-contact");

//------------ Cursor------------
var section = document.querySelector("#root");
var crsr = document.querySelector("#cursor");

section.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

// Loader Page  and Scroller Page Gsap+Java Script
var tl = gsap.timeline();

function time() {
  var a = 0;
  setInterval(function () {
    a = a + Math.floor(Math.random() * 15);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 150);
}
// time();

tl.to("#loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: time(),
});

tl.to("#loader", {
  top: "-100vh",
  delay: 0.5,
  duration: 1.5,
});

gsap.to("#page1 h1", {
  transform: "translateX(-100%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: "#page1",
    scroll: "body",
    // markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

//=--------- toggle nav----------
menu.addEventListener("click", () => {
  mobilenav.classList.toggle("closed-menu");
});

crossicon.addEventListener("click", () => {
  mobilenav.classList.add("closed-menu");
});

//---------------Mobile home----------
const mobilehomefunc = () => {
  mobilehome.addEventListener("click", () => {
    mobilenav.classList.add("closed-menu");
  });

  mobilehome.addEventListener("mouseenter", () => {
    mobilenav.style.background = "#ffcc32";
    mobilehome.style.color = "#267e6e";
  });
  mobilehome.addEventListener("mouseleave", () => {
    mobilenav.style.background = "#267e6e";
    mobilehome.style.color = "#003429";
  });
};
mobilehomefunc();

// -------------- Mobile About---------
const mobileaboutfunc = () => {
  mobileabout.addEventListener("click", () => {
    mobilenav.classList.add("closed-menu");
  });
  mobileabout.addEventListener("mouseenter", () => {
    mobilenav.style.background = "#007aff";
    mobileabout.style.color = "#ffcc32";
  });
  mobileabout.addEventListener("mouseleave", () => {
    mobilenav.style.background = "#267e6e";
    mobileabout.style.color = "#003429";
  });
};
mobileaboutfunc();

//----------------Mobile projects---------
const mobileprojectsfunc = () => {
  mobileprojects.addEventListener("click", () => {
    mobilenav.classList.add("closed-menu");
  });
  mobileprojects.addEventListener("mouseenter", () => {
    mobilenav.style.background = "#fe2d2d";
    mobileprojects.style.color = "#f3a6c7";
  });
  mobileprojects.addEventListener("mouseleave", () => {
    mobilenav.style.background = "#267e6e";
    mobileprojects.style.color = "#003429";
  });
};
mobileprojectsfunc();

//------------Mobile contact--------------
const mobilecontactfunc = () => {
  mobilecontact.addEventListener("click", () => {
    mobilenav.classList.add("closed-menu");
  });
  mobilecontact.addEventListener("mouseenter", () => {
    mobilenav.style.background = "#A4517F";
    mobilecontact.style.color = "#ACF7C1";
  });
  mobilecontact.addEventListener("mouseleave", () => {
    mobilenav.style.background = "#267e6e";
    mobilecontact.style.color = "#003429";
  });
};
mobilecontactfunc();
