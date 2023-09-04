// Put your application javascript here
const navToggle = document.getElementById("nav__toggle");
const navClose = document.getElementById("nav__close");
const menu = document.getElementById("menu");

navToggle.addEventListener("click", () => {
  menu.classList.add("active");
});

navClose.addEventListener("click", () => {
  menu.classList.remove("active");
});


const column1 = document.getElementById('column1');
const column2Content = document.getElementById('column2-content');

function getTitleFromAttribute(attributeValue) {
  const start = attributeValue.indexOf('title:') + 7;
  const end = attributeValue.indexOf('}', start);
  return attributeValue.substring(start, end);
}

column1.addEventListener('click', (event) => {
  const clickedElement = event.target.closest('.contextblogrow11');

  if (clickedElement) {
    const titleData = clickedElement.getAttribute('data-context');
    const title = getTitleFromAttribute(titleData);
    column2Content.textContent = `Information related to "${title}" goes here.`;
  }
});
