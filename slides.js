let slides = ["image_one.png", "image_two.png", "image_three.png"]
// index               0             1              2

let slidesCount = slides.length;


console.log(`Slides ${slides}`);
console.log(`Slides Count ${slidesCount} `);

// let currentSlideIndex = 0;

// const slideShow = (slideIndex) => {

//     currentSlideIndex = slideIndex;
//     if(currentSlideIndex >= slidesCount){
//         currentSlideIndex = 0; // set to first index
//     }
//     else if(slideIndex < 0){
//         currentSlideIndex = slidesCount -1; // set to last index
//     }
//     // slideIndex = currentSlideIndex;
//     console.log(`current slide index Count ${currentSlideIndex} `);
// }

// slideShow(0);
// slideShow(1);
// slideShow(2);


// const startAutoSlide = () =>{
//     let slideIndex = 0;
//     setInterval(()=>{
        
//         slideShow(slideIndex);
//         slideIndex = slideIndex +1;
//     }, 200)
// }

// startAutoSlide();