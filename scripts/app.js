let isVisible = true; // global variable to track visibility

function toggleVisibility() {
    if (isVisible) {
        $("#form").fadeOut(); // hide the form section
        isVisible = false; // update the visibility state
    } else {
        $("#form").fadeIn(); // show the form section
        isVisible = true; // update the visibility state
    }
}


function saveTask() {
    console.log("Hello im the saveTask");
    // get the value of the input

    // create a new task object

    // add the task to the list

}

function init() {
    console.log("Hello im the init");
    // hooks
    $("#btnAdd").click(saveTask);
    $("#btnDetails").click(toggleVisibility);
}

// new comment
window.onload = init;// it waits until the html and css finish to run the logic


