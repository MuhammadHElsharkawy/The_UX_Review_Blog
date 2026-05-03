const closeSideNavBtn = document.getElementById('closeSideNavBtn')
const openSideNavBtn = document.getElementById('openSideNavBtn')
const SideNav = document.getElementById('SideNav')

function closeSideNav() {
    if (SideNav.classList.contains('block')) {
        SideNav.classList.replace('block', 'hidden')
    }
    else {
        SideNav.classList.add('hidden')
    }
}
function openSideNav() {
    if (SideNav.classList.contains('hidden')) {
        SideNav.classList.replace('hidden', 'block')
    }
    else {
        SideNav.classList.add('block')
    }
}
