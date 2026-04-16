(function () {
  "use strict";

  // 🚫 PREVENT FLASH (only if JS runs successfully)
  document.documentElement.style.visibility = "hidden";

  // ✅ RUN AFTER DOM READY
  document.addEventListener("DOMContentLoaded", function () {

    try {
      // 🔐 ACCESS CONTROL
      const params = new URLSearchParams(window.location.search);
      let key = params.get("key");

      // normalize (handle encoded values safely)
      if (key) {
        key = decodeURIComponent(key);
      }

      // 🔑 DEFINE PER-FOLDER KEYS
      const path = window.location.pathname;

      const KEY_MAP = {
        "/a1/": "devops-X9k2_7Lp",
        "/b2/": "mlops-Z8m4_Kq2",
        "/c3/": "aiops-V7p9_Rt3"
      };

      const VALID_KEY = KEY_MAP[path];

      // ❌ INVALID ACCESS
      if (!VALID_KEY || key !== VALID_KEY) {
        document.documentElement.style.visibility = "visible"; // prevent blank
        window.location.replace(`${window.location.origin}/403.html`);
        return;
      }

      // ✅ AUTHORIZED
      document.documentElement.style.visibility = "visible";

      // 🌗 THEME TOGGLE
      const toggle = document.getElementById("themeSwitch");

      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        if (toggle) toggle.checked = true;
      }

      if (toggle) {
        toggle.addEventListener("change", function () {
          document.body.classList.toggle("dark", toggle.checked);
          localStorage.setItem("theme", toggle.checked ? "dark" : "light");
        });
      }

    } catch (err) {
      // 🧯 FAIL SAFE (never blank screen)
      console.error("Script error:", err);
      document.documentElement.style.visibility = "visible";
    }

  });

})();

// 📊 TRACK RECRUITER + GEO
(async function trackVisit() {
  try {
    const params = new URLSearchParams(window.location.search);

    const ref = params.get("ref") || "direct";
    const resume = window.location.pathname.replaceAll("/", "") || "root";

    // 🌍 FETCH GEO INFO
    let city = "unknown";
    let country = "unknown";

    try {
      const geoRes = await fetch("https://ipapi.co/json");
      const geo = await geoRes.json();

      city = geo.city || "unknown";
      country = geo.country_name || "unknown";
    } catch (e) {
      console.log("Geo fetch failed");
    }

    // 📡 SEND DATA (no-cors)
    fetch("https://script.google.com/macros/s/AKfycbzIPpUmB_RRJ6XvucTl4LLDLy8fj7__QYKKLTu2QXHZov_JDgQoUH-wreZI-u5kZKeq9Q/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resume: resume,
        ref: ref,
        city: city,
        country: country,
        userAgent: navigator.userAgent
      })
    });

  } catch (e) {
    console.log("Tracking failed", e);
  }
})();
