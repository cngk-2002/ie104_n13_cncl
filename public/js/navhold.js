function LoadHTML (filename){
    if(filename){
        $("#root").load(filename)
    }
}

const menu = document.querySelectorAll('a[data-file]');

const DEFAULT_HTML = () =>{
    const html = menu[0].getAttribute('data-file')
    LoadHTML(html)
}

DEFAULT_HTML();


console.log(menu)
menu.forEach((element, index) =>{
    element.addEventListener('click', () =>{
        const html = element.getAttribute('data-file')
        console.log(html)
        LoadHTML(html);

        //remove active
        menu.forEach((item) => {
            item.classList.remove('active')
        })
        element.classList.add('active')
    })
})

