var liElts = document.querySelectorAll('ul li');
var articleElts = document.querySelectorAll('article');
var h2Elts = document.querySelectorAll('aside h2');
var pElts = document.querySelectorAll('aside p');
var imgElts = document.querySelectorAll('aside img');



liElts.forEach(li => {
  li.addEventListener('click', ()=>{
    liElts.forEach(li =>{
      li.classList.remove('selected');
    })
    li.classList.add('selected');

  })
});

for (let i = 0; i < 3; i++) {
  liElts[i].addEventListener('click', ()=>{

    for (let j = 0; j < 3; j++) {
      articleElts[j].classList.add('moved');
      h2Elts[j].classList.add('is-up');
      pElts[j].classList.add('is-right');
      imgElts[j].classList.add('is-btm');

    }
    articleElts[i].classList.remove('moved');
    h2Elts[i].classList.remove('is-up');
    pElts[i].classList.remove('is-right');
    imgElts[i].classList.remove('is-btm');

  })
}


