
    const btn = document.getElementById("btn");
    const ans = document.getElementById("ans");

    btn.onclick = function () {
      if (ans.style.display === "none" || ans.style.display === "") {
        ans.style.display = "block";
        btn.textContent = "Hide Answer";
      } else {
        ans.style.display = "none";
        btn.textContent = "Show Answer";
      }
    }
