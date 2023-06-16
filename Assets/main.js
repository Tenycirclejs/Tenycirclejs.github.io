window.addEventListener("load",_=>{
  document.querySelectorAll(":is(include,.include)[type]").forEach(element=>{
    switch(element.getAttribute("type")) {
      case "html": {
        fetch(element.getAttribute("href"))
        .then(response=>response.text())
        .then(data=>element.innerHTML=data)
        .catch(console.error)
        break
      }
      case "js":
      case "javascript": {
        let script = document.createElement("script")
        script.setAttribute("src",element.getAttribute("href"))
        document.head.appendChild(script)
        break
      }
      case "css":{ 
        let link = document.createElement("link")
        link.setAttribute("rel","stylesheet")
        link.setAttribute("href",element.getAttribute("href"))
        document.head.appendChild(link)
        break
      }
    }
  })
  document.querySelectorAll`br[row]`.forEach(element=>{
    for(let i = ((+(element.getAttribute`row`))-1);i--;) {
      let br = document.createElement`br`
      element.parentNode.insertBefore(br,element);
    }
  })
})
