var navItem = document.querySelectorAll('[data-name=nav-item]')
console.log(navItem)

navItem.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        for(let i = 0; i< navItem.length; i++){
            navItem[i].classList.remove('active')
        }
        item.classList.add('active')
    })
})