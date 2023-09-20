const wrapper = document.querySelector(".wrapper");
const mainSelect = wrapper.querySelector(".main-select");
const mainContent = wrapper.querySelector(".main-content");
const mainContentLists = wrapper.querySelector(".main-content-lists");

// 최초 렌더링 시 changeSeleteOption 실행 (초기값인 "객관식 실행")
window.onload = function () {
  changeSeleteOption();
};

let count = 0;

function changeSeleteOption() {
  switch (mainSelect.value) {
    case "객관식":
      paintMultipleChoice();
      break;
    case "단답형":
      mainContent.innerHTML = `hi`;
  }
}

// 객관식 선택 시
function paintMultipleChoice() {
  const li = document.createElement("li");
  const addBtn = document.createElement("button");
  const input = document.createElement("input");
  const deleteBtn = document.createElement("button");
  mainContentLists.appendChild(li);
  mainContent.appendChild(addBtn);
  li.appendChild(input);
  li.appendChild(deleteBtn);
  input.value = `옵션${count}`;
  addBtn.textContent = `옵션 추가`;
  deleteBtn.textContent = `삭제`;

  addBtn.addEventListener("click", addOption);

  deleteBtn.addEventListener("click", deleteOption);
}

function addOption() {
  const li = document.createElement("li");
  const input = document.createElement("input");
  const deleteBtn = document.createElement("button");

  mainContentLists.appendChild(li);
  li.appendChild(input);
  li.appendChild(deleteBtn);
  input.value = `옵션${++count}`;
  deleteBtn.textContent = `삭제`;

  deleteBtn.addEventListener("click", deleteOption);
}

function deleteOption(e) {
  e.target.parentElement.remove();
}

mainSelect.addEventListener("change", changeSeleteOption);