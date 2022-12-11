var search = document.getElementById('search-bar')

search.addEventListener('change',(e) =>{
  let searchValue = e.target.value;
  let data = document.querySelectorAll("[data-search='job']")
  data.forEach((item)=>{
    if (item.innerText.toLowerCase().includes(searchValue.toLowerCase())) {
      item.style.display = "inline-block";
    } else {
      item.style.display = "none";
    }
  })
})