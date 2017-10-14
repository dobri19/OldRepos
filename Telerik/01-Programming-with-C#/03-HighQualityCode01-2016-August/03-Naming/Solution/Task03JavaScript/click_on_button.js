function Click(event, args) {
    var userWindow = window,
        broweserName = userWindow.navigator.appCodeName,
        IsFirefox = (browserName == "Mozilla");

    if (IsFirefox) {
        alert("Yes");
    } else {
        alert("No");
    }
}
