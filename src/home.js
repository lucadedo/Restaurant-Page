export const appendHome = () => {
    const containerElement = document.createElement('div');
    const titleContainerElement = document.createElement('div');
    const titleElement = document.createElement('h1');
    const subTitleElement = document.createElement('div');
    // const imageContainerElement = document.createElement('div');
    // const imageElement = document.createElement('img');



    containerElement.classList = 'container';
    titleContainerElement.classList = 'title-container';
    titleElement.innerHTML = "Italian Dishes";
    titleElement.classList = 'title';
    subTitleElement.innerHTML = 'You have never tasted before.';

    // imageContainerElement.classList = 'img-container';
    // imageElement.setAttribute('src', './food-background.jpg');
    // imageElement.setAttribute('alt', 'food');


    titleContainerElement.appendChild(titleElement);
    titleContainerElement.appendChild(subTitleElement );
    
    containerElement.appendChild(titleContainerElement);
    // imageContainerElement.appendChild(imageElement);
    // containerElement.appendChild(imageContainerElement);


    return containerElement;

}

