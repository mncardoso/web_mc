document.addEventListener("DOMContentLoaded", function () {
  // Define the state
  var state = {
    currentSection: "null",
  };

  // Get the buttons
  var introButton = document.querySelector(".button-intro");
  var connectButton = document.querySelector(".button-connect");

  // Function to update the state and the visibility of the sections
  function updateState(newSection) {
    if (state.currentSection !== "null") {
      // Hide the current section
      document.querySelector("." + state.currentSection).classList.add("hidden");
      document.querySelector(".button-" + state.currentSection).classList.remove("selected");
    }

    if (newSection === state.currentSection) {
      state.currentSection = "null";
      return;
    }
    // Update the state
    state.currentSection = newSection;

    // Show the new section
    document.querySelector("." + state.currentSection).classList.remove("hidden");
    document.querySelector(".button-" + state.currentSection).classList.add("selected");
  }

  // Add click event listeners to the buttons
  introButton.addEventListener("click", function () {
    updateState("intro");
  });

  connectButton.addEventListener("click", function () {
    updateState("connect");
  });
});
