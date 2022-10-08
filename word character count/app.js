let output = document.getElementById("output");

document.addEventListener("input", function () {
  let typeBox = document.getElementById("type-here").value;

  output.innerHTML = "Total Characters: " + typeBox.replace(/ /g, "").length;
});
