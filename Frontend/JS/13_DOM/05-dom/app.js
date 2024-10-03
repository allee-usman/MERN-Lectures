let selectedTab = "code-tab"
let mainContent = document.querySelector('.main-content')


function renderSelectedSection(selectedTab) {
    
    let codeSection = document.querySelector('.code-section')
    let aboutSection = document.querySelector('.about-section')
    let servicesSection = document.querySelector('.services-section')
    let contactSection = document.querySelector('.contact-section')
    
    mainContent.innerHTML = ''
    
    switch(selectedTab) {
        case 'code-tab':
            // mainContent.innerHTML = codeSection.outerHTML
            //alternateviely 
            mainContent.appendChild(codeSection)
            break;
        case 'about-tab':
            mainContent.appendChild(aboutSection)
            break;
        case 'services-tab':
            mainContent.appendChild(servicesSection)
            break;
        case 'contact-tab':
            mainContent.appendChild(contactSection)
            break;    
    }
}
renderSelectedSection(selectedTab)