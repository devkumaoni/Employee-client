document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("button_Submit_From");

  btn.addEventListener("click", () => {
    let data = document.querySelectorAll(".post_data");
    data = Array.from(data).map((d) => {
      return { [d.name]: d.value };
    });
    data[3] = { Date_of_Joining: data[3].Date_of_Joining.toString() };

    fetch("https://employee-server-a1wz.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status == 201) {
          window.location.href =
            "https://employee-client-19iu.onrender.com/dashboard.html";
        }
      })
      .catch((err) => console.log("Error"));
  });
});
