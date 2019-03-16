var liElts = document.querySelectorAll('ul li');
var articleElts = document.querySelectorAll('article');

liElts.forEach(li => {
  li.addEventListener('click', ()=>{
    liElts.forEach(li =>{
      li.classList.remove('selected');
    })
    li.classList.add('selected');

  })
});


liElts[0].addEventListener('click', ()=>{
  articleElts.forEach(article => {
    article.classList.add('moved');
  })
    articleElts[0].classList.remove('moved');
})

liElts[1].addEventListener('click', ()=>{
  articleElts.forEach(article => {
    article.classList.add('moved');
  })
    articleElts[1].classList.remove('moved');
})

liElts[2].addEventListener('click', ()=>{
  articleElts.forEach(article => {
    article.classList.add('moved');
  })
    articleElts[2].classList.remove('moved');
})