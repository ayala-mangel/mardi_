document.getElementById("sumbit").addEventListener("click", function () {
  const firstname = document.getElementById("firstname");
  const error1 = document.getElementById("error1");
  const lastname = document.getElementById("lastname");
  const error2 = document.getElementById("error2");
  const email = document.getElementById("email");
  const error3 = document.getElementById("error3");
  if (firstname.value == "") {
    error1.innerHTML = " * please enter your name!";
    error1.style.color = "red";
  } else {
    error1.innerHTML = "";
  }
  if (lastname.value == "") {
    error2.innerHTML = " * please enter your  last name!";
    error2.style.color = "red";
    firstname.focus();
  } else {
    error2.innerHTML = "";
  }

  if (
    email.value == "" ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1
  ) {
    error3.innerHTML = " * this is not a valid email!";
    error3.style.color = "red";
  } else {
    error3.innerHTML = "";
  }
});
