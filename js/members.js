function on(numb) {
    document.getElementById("overlay" + numb).style.display = "block";
}
  
function off(numb) {
    document.getElementById("overlay" + numb).style.display = "none";
}

function Cursor(){
    const cursor = document.getElementById('cursor');
    setTimeout(() => {
        cursor.remove();
    }, 3000);
}
Cursor();