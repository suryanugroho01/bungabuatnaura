var sceneTree = new Scene(
  {
    ".tree": {
      0: { transform: "scale(0)" },
      1.5: { transform: "scale(1)" },
    },
    ".background>.flower": function (i) {
      return {
        0: { opacity: 0, transform: "translateY(0px) rotate(0deg)" },
        1: { opacity: 1 },
        4: { opacity: 1 },
        5: { opacity: 0, transform: "translateY(300px) rotate(360deg)" },
        options: {
          delay: 7 + i,
          iterationCount: "infinite",
        },
      };
    },
  },
  {
    selector: true,
  }
);

var branchs = document.querySelectorAll(
  ".tree .branch, .tree .leaf, .tree .flower1"
);
var depths = [0, 0, 0];

for (var i = 0; i < branchs.length; ++i) {
  var sceneItem = sceneTree.newItem("item" + i);
  var className = branchs[i].className;

  if (~className.indexOf("branch-inner")) {
    ++depths[1];
    depths[2] = 0;
  } else if (~className.indexOf("branch")) {
    ++depths[0];
    depths[1] = 0;
    depths[2] = 0;
  } else if (~className.indexOf("leaf") || ~className.indexOf("flower1")) {
    ++depths[2];
  }
  sceneItem.setElement(branchs[i]);
  sceneItem.setCSS(0, ["transform"]);

  var time = 1 + depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
  sceneItem.set(time, "transform", "scale", 0);
  sceneItem.set(time + 1, "transform", "scale", 1);
}

sceneTree.playCSS();

const scene = new Scene({
  ".animated-text": {
    0: {
      transform: "translate(-50%, -60%) scale(0.8) rotate(0deg)",
      opacity: 0,
      color: "#ff69b4",
      textShadow: "0 0 10px #ff69b4, 0 0 20px #ff99cc, 0 0 30px #ff66cc",
    },
    1: {
      transform: "translate(-50%, -50%) scale(1.2) rotate(10deg)",
      opacity: 1,
      color: "#ff99cc",
      textShadow: "0 0 30px #ff66cc, 0 0 40px #ff33aa, 0 0 50px #ff33aa",
    },
    2: {
      transform: "translate(-50%, -55%) scale(1) rotate(-10deg)",
      opacity: 0.8,
      color: "#ff33aa",
      textShadow: "0 0 40px #ff66cc, 0 0 50px #ff33aa, 0 0 60px #ff22aa",
    },
    3: {
      transform: "translate(-50%, -60%) scale(1.5) rotate(0deg)",
      opacity: 0,
      color: "#ff69b4",
      textShadow: "0 0 10px #ff69b4, 0 0 20px #ff99cc, 0 0 30px #ff66cc",
    },
  },
}, {
  selector: true,
  easing: "ease-in-out",
  iterationCount: "infinite",
  duration: 5,
});

scene.play();
// Ambil elemen tombol dan pop-up
const showPopupButton = document.getElementById("showPopup");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");

// Tampilkan pop-up saat tombol diklik
showPopupButton.addEventListener("click", () => {
  popup.classList.add("show");
  popup.classList.remove("hidden");
});

// Sembunyikan pop-up saat tombol tutup diklik
closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden");
  popup.classList.remove("show");
});
