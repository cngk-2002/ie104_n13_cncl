function LoadHTML (filename){
    if(filename){
        const applyHTML = document.getElementById('root')
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                applyHTML.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", filename, true);
        xhttp.send();
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
        const applyHTML = document.getElementById('root')
        applyHTML.innerHTML=""
        LoadHTML(html)

        //remove active
        menu.forEach((item) => {
            item.classList.remove('active')
        })
        element.classList.add('active')
    })
})

