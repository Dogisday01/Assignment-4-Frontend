document.addEventListener('DOMContentLoaded', function() {
    function toggleIcon() {
        let x = document.getElementById('switcherbutton');
        let currentExpandedValue = x.getAttribute('aria-expanded');
        let iconElement = document.getElementById('switcher');

        if (currentExpandedValue === 'false') {
            iconElement.innerHTML = "\uf0c9";
        } else if (currentExpandedValue === 'true'){
            iconElement.innerHTML = "\uf00d";
        }
    }

    document.getElementById('switcherbutton').addEventListener('click', toggleIcon);
});
