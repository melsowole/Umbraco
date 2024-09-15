const pageImages = document.querySelectorAll(".project-body img");

for (const image of pageImages) {
  const wrapper = image.closest("p");

  const newWrapper = document.createElement("div");
  newWrapper.classList.add("full-width");
  newWrapper.append(image);

  image.removeAttribute("width");
  image.removeAttribute("height");

  wrapper.replaceWith(newWrapper);
}
