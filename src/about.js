export const appendAbout = () => {
    const paraEl = document.createElement('p');
    const titleBoxEl = document.createElement('h3');
    const aboutBoxContainerEl = document.createElement('div');
    const titleAboutEl = document.createElement('h2');
    const titleContaierEl = document.createElement('div');
    const gridAboutContainer = document.createElement('div');

    paraEl.innerHTML = 'Monday - Sunday <br> 10am - 11pm <br> Italy,Rome <br> eatPizza@now.com'
    titleBoxEl.innerHTML = 'Find us here:';
    aboutBoxContainerEl.classList = 'contact-cell-info';
    titleAboutEl.innerHTML = 'It\'s time to eat';
    titleContaierEl.classList = 'contact-cell-title';
    gridAboutContainer.classList = 'grid-container-contact'

    aboutBoxContainerEl.appendChild(titleBoxEl);
    aboutBoxContainerEl.appendChild(paraEl);
    titleContaierEl.appendChild(titleAboutEl);
    gridAboutContainer.appendChild(titleContaierEl);
    gridAboutContainer.appendChild(aboutBoxContainerEl);
   

    return gridAboutContainer;

}
