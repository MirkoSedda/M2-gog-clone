window.onload = function() {
    //HOW TO BUILD CUSTOM DROPDOWNS
    let dropdowns = document.querySelectorAll(".nav__dropdown")
    //console.log(dropdowns);
    for (let i = 0; i < dropdowns.length; i++) {
        const currentDropdown = dropdowns[i];
        currentDropdown.addEventListener("mouseenter", function(){ //on hover, show the dropdown
            let dropdownContent = document.getElementById(i) //I gave ids starting from 0 to the nav__dropdown--content elements
            dropdownContent.style.display = "block" //show
        })
        currentDropdown.addEventListener("mouseleave", function(){ //when the mouse leaves, hide the dropdown
            let dropdownContent = document.getElementById(i)
            dropdownContent.style.display = "none" //hide
        })
        
    }
    
    // POPULATE CARDS WITH IMAGES

    //we know there are 38 images in the assets folder. They are called the same way.
    //we are going to create an ARRAY OF PATHS using a for loop
    let paths = []
    for(let i = 1 /* we start 1 because there is no tile(0) file*/; i<=38; i++) {
        paths.push(`./assets/tile (${i}).jpg`)
    }
    let cardImages = document.querySelectorAll(".card__image")
    //query for all the images in the page
    for (let i = 0; i<cardImages.length; i++) {
        let img = cardImages[i]
        img.src = paths[i] //adds corresponding image
    }
}


