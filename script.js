async function handleRegister() {
  const loginValue = document.querySelector(".inputLog").value;
  const passwordValue = document.querySelector(".inputPas").value;
  const User = { username: loginValue, password: passwordValue };
  let response = await fetch(
    "https://testbackend-1-m4859670.deta.app/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(User),
    }
  );
  const data = await response.json();
  if (data.success === true) {
    alert("Регистрация прошла успешно!");
    window.location.href = "sign-in.html";
  } else {
    alert(`Ошибка : ${response.status} , причина: ${data.error}`);
  }
}

async function handleLogin() {
  const loginValue = document.querySelector(".inputlogEnter").value;
  const passwordValue = document.querySelector(".inputpasEnter").value;
  const User = { username: loginValue, password: passwordValue };
  let response = await fetch("https://testbackend-1-m4859670.deta.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(User),
  });
  console.log(response);
  const data = await response.json();
  if (response.ok) {
    alert("Вы вошли на сервер");
  } else {
    alert(`Ошибка : ${response.status} , причина: ${data.error}`);
  }
}
