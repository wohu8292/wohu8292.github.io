let About = document.getElementById("about");
About.addEventListener("click", aboutcontent);
let Home = document.getElementById("home");
Home.addEventListener("click", homecontent);
let Publications = document.getElementById("publications");
Publications.addEventListener("click", publicationcontent);

var aEl = document.querySelector(".content");

function homecontent() {
  aEl.innerHTML=aEl;
}

function aboutcontent() {
  var newEl = document.createElement("p");
  newEl.innerHTML = "I come from a family of educators, and was afforded the opportunity to see different parts of the country while completed his PhD, post-doc, and got his first academic position. Because of my background, I knew early on I wanted to pursue a career in research and teaching. After a brief failed stint as an engineering student, I completed my B.S. and M.S. in Information Sciences and Technology at the Pennsylvania State University in 2015 and 2017, respectively. While at Penn State, I competed in track and field, specializing in the multi-event disciplines.";
  aEl.parentNode.replaceChild(newEl, aEl);
}

function publicationcontent() {
  var newEl = document.createElement("p");
  newEl.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  aEl.parentNode.replaceChild(newEl, aEl);
}
