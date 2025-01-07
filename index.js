document.getElementById("toggleEducation").addEventListener("click", function () {
    const certificateList = document.getElementById("educationList");
    const isHidden = educationList.classList.contains("hidden");

    if (isHidden) {
        educationList.classList.remove("hidden");
        this.textContent = "Hide Education";
    } else {
        educationList.classList.add("hidden");
        this.textContent = "Show Education";
    }
});
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
document.getElementById("toggleAchievements").addEventListener("click", function () {
    const certificateList = document.getElementById("achievementsList");
    const isHidden = achievementsList.classList.contains("hidden");

    if (isHidden) {
        achievementsList.classList.remove("hidden");
        this.textContent = "Hide Achievements";
    } else {
        itemsInList.classList.add("hidden");
        this.textContent = "Show Achievements";
    }
});