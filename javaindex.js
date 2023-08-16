const acc = document.querySelector(".acardeon");
const acc_2 = document.querySelector(".acardeon_2");
const acc_3 = document.querySelector(".acardeon_3");
const acc_4 = document.querySelector(".acardeon_4");
const acc_5 = document.querySelector(".acardeon_5");
const subb = document.querySelector(".sub");
const subb_2 = document.querySelector(".sub_2");
const subb_3 = document.querySelector(".sub_3");
const subb_4 = document.querySelector(".sub_4");
const subb_5 = document.querySelector(".sub_5");
const subb_6 = document.querySelector(".sub_6");
const subb_2_1 = document.querySelector(".sub_2_1");
const subb_3_1 = document.querySelector(".sub_3_1");
const subb_4_1 = document.querySelector(".sub_4_1");
const subb_5_1 = document.querySelector(".sub_5_1");
const subb_6_1 = document.querySelector(".sub_6_1");
const subb_2_2 = document.querySelector(".sub_2_2");
const subb_3_2 = document.querySelector(".sub_3_2");
const subb_4_2 = document.querySelector(".sub_4_2");
const subb_5_2 = document.querySelector(".sub_5_2");
const subb_6_2 = document.querySelector(".sub_6_2");
const subb_2_3 = document.querySelector(".sub_2_3");
const subb_3_3 = document.querySelector(".sub_3_3");
const subb_4_3 = document.querySelector(".sub_4_3");
const quest_first = document.querySelector(".quest_acardeon");
const first_explain = document.querySelector(".explain_acardeon");
const quest_second = document.querySelector(".quest_acardeon_second");
const second_explain = document.querySelector(".explain_acardeon_second");
const quest_third = document.querySelector(".quest_acardeon_third");
const third_explain = document.querySelector(".explain_acardeon_third");
const cont = document.querySelector(".continue");
const button = document.querySelector(".btn");
const contain = document.querySelector(".containerr");
button.addEventListener("click", function () {
  contain.classList.toggle("show");
  button.classList.toggle("open");
  contain.style.backgroundColor = randcolor();
});

acc.addEventListener("click", function () {
  if (subb.style.maxHeight) {
    subb.style.maxHeight = null;
  } else {
    subb.style.maxHeight = subb.scrollHeight + "px";
  }
});

acc_2.addEventListener("click", function () {
  if (subb_2.style.maxHeight) {
    subb_2.style.maxHeight = null;
  } else {
    subb_2.style.maxHeight = subb_2.scrollHeight + "px";
  }
});

acc_2.addEventListener("click", function () {
  if (subb_3.style.maxHeight) {
    subb_3.style.maxHeight = null;
  } else {
    subb_3.style.maxHeight = subb_3.scrollHeight + "px";
  }
});
acc_2.addEventListener("click", function () {
  if (subb_4.style.maxHeight) {
    subb_4.style.maxHeight = null;
  } else {
    subb_4.style.maxHeight = subb_4.scrollHeight + "px";
  }
});
acc_2.addEventListener("click", function () {
  if (subb_5.style.maxHeight) {
    subb_5.style.maxHeight = null;
  } else {
    subb_5.style.maxHeight = subb_5.scrollHeight + "px";
  }
});
acc_2.addEventListener("click", function () {
  if (subb_6.style.maxHeight) {
    subb_6.style.maxHeight = null;
  } else {
    subb_6.style.maxHeight = subb_6.scrollHeight + "px";
  }
});
acc_3.addEventListener("click", function () {
  if (subb_2_1.style.maxHeight) {
    subb_2_1.style.maxHeight = null;
  } else {
    subb_2_1.style.maxHeight = subb_2_1.scrollHeight + "px";
  }
});

acc_3.addEventListener("click", function () {
  if (subb_3_1.style.maxHeight) {
    subb_3_1.style.maxHeight = null;
  } else {
    subb_3_1.style.maxHeight = subb_3_1.scrollHeight + "px";
  }
});
acc_3.addEventListener("click", function () {
  if (subb_4_1.style.maxHeight) {
    subb_4_1.style.maxHeight = null;
  } else {
    subb_4_1.style.maxHeight = subb_4_1.scrollHeight + "px";
  }
});
acc_3.addEventListener("click", function () {
  if (subb_5_1.style.maxHeight) {
    subb_5_1.style.maxHeight = null;
  } else {
    subb_5_1.style.maxHeight = subb_5_1.scrollHeight + "px";
  }
});
acc_3.addEventListener("click", function () {
  if (subb_6_1.style.maxHeight) {
    subb_6_1.style.maxHeight = null;
  } else {
    subb_6_1.style.maxHeight = subb_6_1.scrollHeight + "px";
  }
});
acc_4.addEventListener("click", function () {
  if (subb_2_2.style.maxHeight) {
    subb_2_2.style.maxHeight = null;
  } else {
    subb_2_2.style.maxHeight = subb_2_1.scrollHeight + "px";
  }
});

acc_4.addEventListener("click", function () {
  if (subb_3_2.style.maxHeight) {
    subb_3_2.style.maxHeight = null;
  } else {
    subb_3_2.style.maxHeight = subb_3_2.scrollHeight + "px";
  }
});
acc_4.addEventListener("click", function () {
  if (subb_4_2.style.maxHeight) {
    subb_4_2.style.maxHeight = null;
  } else {
    subb_4_2.style.maxHeight = subb_4_2.scrollHeight + "px";
  }
});
acc_4.addEventListener("click", function () {
  if (subb_5_2.style.maxHeight) {
    subb_5_2.style.maxHeight = null;
  } else {
    subb_5_2.style.maxHeight = subb_5_2.scrollHeight + "px";
  }
});
acc_4.addEventListener("click", function () {
  if (subb_6_2.style.maxHeight) {
    subb_6_2.style.maxHeight = null;
  } else {
    subb_6_2.style.maxHeight = subb_6_2.scrollHeight + "px";
  }
});
acc_5.addEventListener("click", function () {
  if (subb_2_3.style.maxHeight) {
    subb_2_3.style.maxHeight = null;
  } else {
    subb_2_3.style.maxHeight = subb_2_3.scrollHeight + "px";
  }
});
acc_5.addEventListener("click", function () {
  if (subb_3_3.style.maxHeight) {
    subb_3_3.style.maxHeight = null;
  } else {
    subb_3_3.style.maxHeight = subb_3_3.scrollHeight + "px";
  }
});
acc_5.addEventListener("click", function () {
  if (subb_4_3.style.maxHeight) {
    subb_4_3.style.maxHeight = null;
  } else {
    subb_4_3.style.maxHeight = subb_4_3.scrollHeight + "px";
  }
});
quest_first.addEventListener("click", function () {
  quest_first.classList.toggle("active_4");

  if (first_explain.style.maxHeight) {
    first_explain.style.maxHeight = null;
  } else {
    first_explain.style.maxHeight = first_explain.scrollHeight + "px";
  }
});
quest_second.addEventListener("click", function () {
  quest_second.classList.toggle("active_4");

  if (second_explain.style.maxHeight) {
    second_explain.style.maxHeight = null;
  } else {
    second_explain.style.maxHeight = second_explain.scrollHeight + "px";
  }
});
document.addEventListener("contextmenu", (MouseEvent) => {
  MouseEvent.preventDefault();
});
