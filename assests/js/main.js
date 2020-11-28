let toggleModeStatus = false;

let toggleMode = function() {
    if (toggleModeStatus === false) {
        document.documentElement.style.cssText = "--active-color", "--dark-color";
        

        toggleModeStatus = true;
    }
    else if (toggleModeStatus === true) {
        document.documentElement.style.cssText = "--active-color", "--light-color";


        toggleModeStatus = false;
    }
}
