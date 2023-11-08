
<input type="hidden" class="utm_source" placeholder="utm_source" name="utm_source">
<input type="hidden" class="utm_medium" placeholder="utm_medium" name="utm_medium">
<input type="hidden" class="utm_campaign" placeholder="utm_campaign" name="utm_campaign">
<input type="hidden" class="utm_content" placeholder="utm_content" name="utm_content">
<input type="hidden" class="referrer" placeholder="referrer" name="referrer">
<input type="hidden" class="fbclid" placeholder="fbclid" name="fbclid">
<input type="hidden" class="gclid" placeholder="gclid" name="gclid">

<script>
//this code is to be embeded IN the form, on all pages where it exists. You could also install it in tag manager.
document.addEventListener('DOMContentLoaded', function() {
    // Function to get the value of a cookie
    function getCookie(cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Function to set the value of a form field
    function setFormFieldValue(fieldName) {
        var value = getCookie(fieldName);
        if (value !== "") {
            var field = document.querySelector('input[name="' + fieldName + '"]');
            if (field) {
                field.value = value;
            }
        }
    }

    // Function to check if the cookies are set and then set the form field values
    function checkCookiesAndSetFields() {
        setFormFieldValue("utm_source");
        setFormFieldValue("utm_medium");
        setFormFieldValue("utm_campaign");
        setFormFieldValue("utm_term");
        setFormFieldValue("referrer");
    }

    // Call the function to check and set the form fields
    checkCookiesAndSetFields();
});
</script>
