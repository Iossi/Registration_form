async function handleRegister() {
  const username = document.querySelector(".input[name=login]").value;
  const password = document.querySelector(".input[name=password]").value;
  const response = await fetch(
    "https://testbackend-1-m4859670.deta.app/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ username, password }),
    }
  );
  const data = await response.json();
  if (data.success) {
    alert("Регистрация прошла успешно!");
    window.location.href = "sign-in.html";
  } else {
    alert(`Ошибка: ${response.status}, причина: ${data.error}`);
  }
}

async function handleLogin() {
  const username = document.querySelector(
    "div[name=authorization] input[name=loginEntry]"
  ).value;
  const password = document.querySelector(
    "div[name=authorization] input[name=passwordEntry]"
  ).value;
  const response = await fetch(
    "https://testbackend-1-m4859670.deta.app/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ username, password }),
    }
  );
  const data = await response.json();
  if (data.success) {
    alert("Вы успешно авторизовались");
  } else {
    alert(`Ошибка: ${response.status}, причина: ${data.error}`);
  }
}
