const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const slideWrapper = document.querySelector('.slide-wrapper');
slideWrapper.innerHTML = '';



let currentIndex = 0;

for( let i = 0; i < items.length; i++){

    const divElement = document.createElement('div');
    divElement.classList.add('item');
    const image = document.createElement('img');

    image.src = items[i];

    if(i == 0){
        divElement.classList.add('active');
        currentIndex = 0;
    }

    slideWrapper.append(divElement);
    divElement.append(image);

    slideWrapper.innerHTML + divElement;
}

const images = [...document.getElementsByClassName('item')];

images[currentIndex].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function(){
    if( currentIndex > 0 ){
        images[currentIndex].classList.remove('active');
        currentIndex--;
        images[currentIndex].classList.add('active');
    }
})

next.addEventListener('click', function(){
    if( currentIndex < items.length - 1 ){
        images[currentIndex].classList.remove('active');
        currentIndex++;
        images[currentIndex].classList.add('active');
    }
})