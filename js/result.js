window.addEventListener('load', ( )=>{

    const  name = sessionStorage.getItem("NAME");
    const  price = sessionStorage.getItem("PRICE");
    const  image = sessionStorage.getItem("images");
    document.getElementById("pr").innerHTML=price;
    document.getElementById("na").innerHTML=name;
    document.getElementById("imag").innerHTML=image;

})