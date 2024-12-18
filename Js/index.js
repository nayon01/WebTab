// Select parent elements
const headings = document.querySelector('.headings');
const details = document.querySelector('.details')

//convert childrent to array for easir manipulation
const headingsChildren = Array.from(headings.children);
const detailsChildren = Array.from(details.children);

// Add event listener to each heading

headingsChildren.forEach((heading,index) => {
    heading.addEventListener('click',() =>{
        for(let i = 0; i<headingsChildren.length; i++) {
            if(i === index){
                headingsChildren[i].classList.add('active');
                detailsChildren[i].classList.add('active');
            } else { 
                headingsChildren[i].classList.remove('active');
                detailsChildren[i].classList.remove('active');

            }  
        }

    });
});