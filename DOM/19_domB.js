console.log("-------- Changing the Color h2 --------");
const elementHProfile = document.querySelector("#profile");
elementHProfile.style.color = "DodgerBlue";

const ulList = document.querySelector("#ulList");
const liList = document.querySelector(".liItem");
ulList.removeChild(liList);

const projectElement = document.querySelector("#divProject");
const projectList = document.querySelector("#project");
projectElement.removeChild(projectList);