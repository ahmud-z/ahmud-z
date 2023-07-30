function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu-links');
    const crossIcon = document.getElementById('cross-icon');
    const menuIcon = document.getElementById('menu-icon')

    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('mobile-menu-links-height')
    crossIcon.classList.toggle('hidden')
    menuIcon.classList.toggle('hidden')

}