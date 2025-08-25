function addRecommendation() {
    let recommendation = document.getElementById("new_recommendation");

    if(recommendation.value != null && recommendation.value.trim() != "") {
        // Create new recommendation div
        var element = document.createElement("div");
        element.className = "recommendation";
        element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

        // Container where existing recommendations exist
        let container = document.getElementById("all_recommendations");

        // Select input area div
        let inputArea = container.querySelector('div[style]');

        // Insert new recommendation above input area
        container.insertBefore(element, inputArea);

        // Clear textarea
        recommendation.value = "";

        // Show popup
        showPopup(true);
    }
}

function showPopup(bool) {
    let popup = document.getElementById('popup');
    popup.style.visibility = bool ? 'visible' : 'hidden';
}
