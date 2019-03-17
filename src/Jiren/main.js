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

for (let i = 0; i < liElts.length; i++) {
  liElts[i].addEventListener('click', ()=>{
    articleElts.forEach(article => {
      article.classList.add('moved');
    })
    articleElts[i].classList.remove('moved');
  })
}


