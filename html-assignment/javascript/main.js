var headerOne = document.querySelector(".site-title");
var headerText = headerOne.innerText;

for ( var i = 0; i < headerText.length; i++) {
    char = headerText.charAt(i);
    if ( i === 0 ) {
        // remove chars from list by replacing with 
        // a div. div set to hidden for screenreaders
        let emtpyDiv = document.createElement("div");
        emtpyDiv.setAttribute("hidden", true);
        headerOne.replaceChild(emtpyDiv, headerOne.firstChild);
    }
    var span = document.createElement("span");
    span.innerHTML = char;
    span.setAttribute("data-index-number", i);
    headerOne.appendChild(span, headerOne);
    headerOne.setAttribute("data-count", headerOne.children.length)
    
}
