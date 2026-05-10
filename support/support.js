document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const containt = document.getElementById("containt");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
      containt.classList.toggle("full");
    });
  }

  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      themeBtn.textContent = document.body.classList.contains("light")
        ? "🌙"
        : "☀️";
    });
  }

  const btn = document.getElementById("transmitBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      const callsign = document.getElementById("callsign")?.value?.trim();
      const commlink = document.getElementById("commlink")?.value?.trim();
      const message = document.getElementById("message")?.value?.trim();

      if (!callsign || !commlink || !message) {
        showToast(
          "⚠️ Incomplete Data Packet — fill all required fields.",
          "error",
        );
        return;
      }

      btn.innerHTML = 'TRANSMITTING… <span class="mat-icon">sync</span>';
      btn.disabled = true;

      setTimeout(() => {
        const ticketID =
          "NX-" +
          Math.floor(Math.random() * 1000000)
            .toString()
            .padStart(6, "0");
        showToast(
          "✅ Transmission successful — Ticket " + ticketID + " queued.",
          "success",
        );

        document.getElementById("callsign").value = "";
        document.getElementById("commlink").value = "";
        document.getElementById("category").selectedIndex = 0;
        document.getElementById("message").value = "";
        document.getElementById("urgent").checked = false;

        btn.innerHTML = 'TRANSMIT <span class="mat-icon">send</span>';
        btn.disabled = false;
      }, 2000);
    });
  }

  function showToast(text, type) {
    const old = document.querySelector(".nexus-toast");
    if (old) old.remove();

    const toast = document.createElement("div");
    toast.className = "nexus-toast " + (type || "info");
    toast.textContent = text;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add("show"));

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }
});
