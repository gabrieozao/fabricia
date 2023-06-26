function getProjects(){
    const urlInstagram = 'https://www.instagram.com/fabriciasilva_nails'
    var loadingElement = document.getElementById('loading')

    fetch(urlInstagram, {
        method: 'GET'
    })
    .then((Response) => Response.json())
    .then((Response) => {
        loadingElement.style.display = 'none'
        showProjects(Response)
    })
    .catch((e) => {
        console.log(e)
    })
}

function showProjects(data){
    var listElemente = document.getElementById('my-projects-list')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i] ['clone_url']
        a.href = 'black'
        a.title = data[i] ['description']
        let linktext = document.createTextNode(data[i] ['name'])
        a.appendChild(linktext)
        listElement.appendChild(a)
    }
}


getProjects()