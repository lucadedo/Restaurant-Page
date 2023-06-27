export const appendMenu = () => {
    const gridContainer = document.createElement('div');
    gridContainer.classList = 'grid-container';  
    
    const menu = [
        {name: 'PIZZA'},
        {name: 'LASAGNA'},
        {name: 'GELATO'}
    ];

    menu.forEach(x => render(x));

// Creates the menu elements 

    function render(x) {
        const name = document.createElement('h3');
        const productCell = document.createElement('div');
        name.innerHTML = x.name;
        productCell.classList = `cell ${x.name}`;

        appendProduct( name, productCell);
    }
    
// Appends the elements

    function appendProduct(name, cell) {
        cell.appendChild(name);
        gridContainer.appendChild(cell);
    }

    return gridContainer;

}