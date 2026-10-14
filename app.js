const slides = [
  {
    src: "/images/01-sources.png",
    alt: "Map of the study area in Ucayali, Peru, with cacao plot polygons and mapped forest-loss source features displayed over the same basemap.",
    step: "01 / Inputs",
    title: "Source layers",
    description: "The cacao polygons and the forest-loss layer are visible together over the Ucayali study area. This is source context, not an overlap result.",
    linkLabel: "Open full-size QGIS source layers screenshot in a new tab"
  },
  {
    src: "/images/02-finding-overview.png",
    alt: "Portfolio-wide QGIS map view with the plot-level screening result styled in graduated pale-red classes across the cacao study area.",
    step: "02 / Portfolio",
    title: "Portfolio screen",
    description: "The graduated layer shows the screening result across the study extent. A plot's color communicates the calculated overlap share, not a compliance outcome.",
    linkLabel: "Open full-size QGIS portfolio screen screenshot in a new tab"
  },
  {
    src: "/images/03-finding-detail.png",
    alt: "Closer QGIS map view around San Alejandro in Ucayali, showing mapped cacao plots in a pale-red graduated result.",
    step: "03 / Detail",
    title: "Local detail",
    description: "Zooming in helps a reviewer see how the mapped plots sit around roads, rivers, and settlements. Context can guide follow-up, but proximity does not establish a sourcing relationship.",
    linkLabel: "Open full-size QGIS local detail screenshot in a new tab"
  },
  {
    src: "/images/04-overlap-evidence.png",
    alt: "QGIS close-up showing small red mapped forest-loss intersection features over a light basemap near cacao plot locations.",
    step: "04 / Overlay",
    title: "Overlap evidence",
    description: "The red features are the mapped intersections created by the overlay. They provide a location to inspect in source imagery and land-use history.",
    linkLabel: "Open full-size QGIS overlap evidence screenshot in a new tab"
  },
  {
    src: "/images/05-ranked-plots.png",
    alt: "QGIS map and attribute table showing plot IDs sorted by loss_pct; the first rows include MB_71, LS_CP_360, and LS_CP_366. One polygon is yellow because one feature is selected.",
    step: "05 / Attributes",
    title: "Ranked plots",
    description: "The attribute table exposes the values behind the ranking. The yellow polygon is QGIS's selection highlight. The status bar reports one selected feature, so yellow is not a separate class.",
    linkLabel: "Open full-size QGIS ranked plots screenshot in a new tab"
  }
];

const tabs = Array.from(document.querySelectorAll(".evidence-tab"));
const panel = document.querySelector("#evidence-panel");
const image = document.querySelector("#evidence-image");
const imageLink = document.querySelector("#image-link");
const captionStep = document.querySelector("#caption-step");
const captionTitle = document.querySelector("#caption-title");
const captionDescription = document.querySelector("#caption-description");
const slideCount = document.querySelector("#slide-count");
const printButton = document.querySelector("#print-page");

const activateSlide = (index, moveFocus = false, updateUrl = true) => {
  const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
  const slide = slides[safeIndex];
  const selectedTab = tabs[safeIndex];

  tabs.forEach((tab, tabIndex) => {
    const isSelected = tabIndex === safeIndex;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
  });

  panel.setAttribute("aria-labelledby", selectedTab.id);
  image.src = slide.src;
  image.alt = slide.alt;
  imageLink.href = slide.src;
  imageLink.setAttribute("aria-label", slide.linkLabel);
  captionStep.textContent = slide.step;
  captionTitle.textContent = slide.title;
  captionDescription.textContent = slide.description;
  slideCount.textContent = "View " + (safeIndex + 1) + " of " + slides.length;

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("view", String(safeIndex + 1));
    window.history.replaceState(null, "", url);
  }

  if (moveFocus) selectedTab.focus();
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateSlide(index));
  tab.addEventListener("keydown", event => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateSlide(nextIndex, true);
  });
});

const urlView = Number(new URL(window.location.href).searchParams.get("view"));
if (Number.isInteger(urlView) && urlView >= 1 && urlView <= slides.length) {
  activateSlide(urlView - 1, false, false);
}

printButton.addEventListener("click", () => window.print());
