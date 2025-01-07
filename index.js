document.getElementById("toggleCertificates").addEventListener("click", function () {
    const certificateList = document.getElementById("certificateList");
    const isHidden = certificateList.classList.contains("hidden");

    if (isHidden) {
        certificateList.classList.remove("hidden");
        this.textContent = "Hide Certificates";
    } else {
        certificateList.classList.add("hidden");
        this.textContent = "Show Certificates";
    }
});
