<script>
// The domain for which the cookies will be set. CHANGE THIS FOR YOUR SITE
var YOUR_DOMAIN = "YOURWEBSITEHERE.com";

// This function extracts a given parameter's value from the current page URL.
function getParameterByName(name) {
    // Preparing the name to be used in a search pattern.
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    
    // Creating a pattern to find the parameter in the URL.
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    
    // If we found the parameter, decode it and return its value. Otherwise, return an empty string.
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// This function fetches the value of a cookie by its name.
function getCookie(cname) {
    var name = cname + "=";
    // Decoding the entire cookie string to make it readable.
    var decodedCookie = decodeURIComponent(document.cookie);
    
    // Splitting the cookie string into individual cookies.
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        // Removing any leading spaces from the cookie.
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        // If we find the requested cookie, return its value.
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    // If the cookie isn't found, return an empty string.
    return "";
}

// This function appends a value to an existing cookie or creates a new one if it doesn't exist.
function appendToCookie(cookieName, value) {
    // Fetch the current value of the cookie.
    var existingValue = getCookie(cookieName);
    
    // Only append the new value if it doesn't already exist in the cookie.
    if (existingValue.indexOf(value) === -1) {
        var newValue = existingValue ? existingValue + ',' + value : value;
        
        // Ensure that the new cookie size doesn't exceed the browser's limit (about 4KB).
        if (newValue.length + cookieName.length + 1 > 4093) {
            console.error("Cookie size exceeds the safe threshold. Not updating the cookie for " + cookieName);
            return;
        }

        // Set the expiration for the cookie to 1 month from now.
        var now = new Date();
        now.setMonth(now.getMonth() + 1);
        
        // Update or create the cookie with the new value.
        document.cookie = cookieName + "=" + newValue + "; domain=" + YOUR_DOMAIN + "; expires=" + now.toUTCString();
    }
}

// Fetch UTM parameters and the referrer value from the current page's URL.
// CHANGE THE UTM FIELDS AS NEEDED
var utm_source = getParameterByName('utm_source');
var utm_medium = getParameterByName('utm_medium');
var utm_campaign = getParameterByName('utm_campaign');
var utm_term = getParameterByName('utm_term');
var referrerValue = document.referrer.replace(location.origin, '');

// If these values are present, append them to their respective cookies.
if (utm_source) {
    appendToCookie("utm_source", utm_source);
}

if (utm_medium) {
    appendToCookie("utm_medium", utm_medium);
}

if (utm_campaign) {
    appendToCookie("utm_campaign", utm_campaign);
}

if (utm_term) {
    appendToCookie("utm_term", utm_term);
}

if (referrerValue) {
    appendToCookie("referrer", referrerValue);
}
</script>
