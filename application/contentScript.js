
// This script is injected into the page when the extension is enabled
window.addEventListener('load', function () {
    setTimeout(function () {

        // Find the toolbar element
        let toolbar = document.querySelector('.toolbar__88c63');

        // Create the icon element
        const icon = document.createElement('div');

        // Set the icon attributes
        icon.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path fill="#b2b6bc" d="M14 19h-14v-1h14v1zm9.247-8.609l-3.247 4.049-3.263-4.062-.737.622 4 5 4-5-.753-.609zm-9.247 2.609h-14v-1h14v1zm0-6h-14v-1h14v1z"/>
            </svg>`;
        icon.classList.add('iconWrapper_af9215', 'clickable_d23a1a');
        icon.setAttribute('role', 'button');
        icon.setAttribute('aria-label', 'Sidebar');
        icon.setAttribute('aria-expanded', 'false');
        icon.setAttribute('tabindex', '0');

        // Add a click event listener to the icon
        icon.addEventListener('click', () => {
            const sidebar = document.querySelector('.sidebar_ded4b5');
            sidebar.style.width = sidebar.style.width === '1px' ? '240px' : '1px';
        });

        // Add the icon to the lefternmost position of the toolbar
        toolbar.insertBefore(icon, toolbar.firstChild);

        console.log('Content script running...');

        // Periodically check for the existence of the icon and re-add it if necessary
        setInterval(function () {
            // Re-find the toolbar element
            toolbar = document.querySelector('.toolbar__88c63');
            // We can just re-use the icon element, because it's created programmatically
            if (!toolbar.contains(icon)) {
                toolbar.insertBefore(icon, toolbar.firstChild);
            }
        }, 4000);

    }, 1000); // Wait for a second to make sure the DOM is loaded
});
