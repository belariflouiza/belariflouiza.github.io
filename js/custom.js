function showDescription(id) {
  var description = document.getElementById(id);
  if (description.style.display === "none") {
      description.style.display = "block";
  } else {
      description.style.display = "none";
  }
}
