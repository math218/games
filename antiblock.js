params = new URLSearchParams(window.location.search);

algo = params.get("redirect");
if (algo != "true") {
    window.location.href = "index2.html";
}