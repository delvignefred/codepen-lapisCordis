// lazy loading VFX
document.addEventListener("DOMContentLoaded", () => {
  const lazyBackgrounds = [].slice.call(document.querySelectorAll("span"));

  if ("IntersectionObserver" in window) {
    const lazyBackgroundObserver = new IntersectionObserver((entries, observer) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          entry.target.classList.add("vfx--visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      }
    });

    for (let i = 0; i < lazyBackgrounds.length; i++) {
      lazyBackgroundObserver.observe(lazyBackgrounds[i]);
    }
  }
});

// desktop script
const canvas = document.body;
const curtain = document.querySelector(".hand__curtain");
const cardSet = [
  {
    card: document.querySelector(".hand__polyphemus"),
    clone: document.querySelector(".hand__polyphemus-clone")
  },
  {
    card: document.querySelector(".hand__andromeda"),
    clone: document.querySelector(".hand__andromeda-clone")
  },
  {
    card: document.querySelector(".hand__cerberus"),
    clone: document.querySelector(".hand__cerberus-clone")
  },
  {
    card: document.querySelector(".hand__nyx"),
    clone: document.querySelector(".hand__nyx-clone")
  },
  {
    card: document.querySelector(".hand__horse"),
    clone: document.querySelector(".hand__horse-clone")
  }
];

const handleCardClick = (card, clone, event) => {
  card.classList.add("card--hidden");
  // prevent glitch
  event.stopPropagation();
  curtain.classList.add("curtain--visible");
  clone.classList.add("card--visible");
};

for (let i = 0; i < cardSet.length; i++) {
  const { card, clone } = cardSet[i];
  card.addEventListener("click", (event) =>
    handleCardClick(card, clone, event)
  );
}

canvas.addEventListener("click", () => {
  for (let i = 0; i < cardSet.length; i++) {
    const { clone } = cardSet[i];
    clone.classList.remove("card--visible");
  }
  curtain.classList.remove("curtain--visible");
  for (let i = 0; i < cardSet.length; i++) {
    const { card } = cardSet[i];
    card.classList.remove("card--hidden");
  }
});

// mobile friendly script
/*
for (let i = 0; i < cardSet.length; i++) {
  const { card } = cardSet[i];
  card.addEventListener("mouseover", () =>
    card.classList.add("card--touched")
  );

  card.addEventListener("touchstart", () =>
    card.classList.add("card--touched")
  );
  card.addEventListener("touchend", () =>
    card.classList.remove("card--touched")
  );
}
*/