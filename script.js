function showHomePage() {
    let home = document.getElementById("home");
    let landing = document.getElementById("landing");
    home.style.display = "block";
    landing.style.display = "none";
}
function showForm(){
    let form= document.querySelector(".form");
    form.style.display = "block";
}
function hideForm(){
    let form= document.querySelector(".form");
    form.style.display = "none";  
}
(function manageTotalUsers() {
    
    let totalUsers = String(getRandom(100000, 200000));
    totalUsers = addComma(totalUsers);
    
    addToTotalUsers(totalUsers);
    
    function addToTotalUsers(currentValue) {
        let num = Number(currentValue.replace(",", ""));
        num++;
        num = String(num);
        num = addComma(num);
       document.getElementById("user").innerHTML = num;
        setTimeout(function() {
            addToTotalUsers(num);
        }, getRandom(100, 2000));
    }
    
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function addComma(num) {
        return num.slice(0, 3) + "," + num.slice(3, 6);
    }
    
})();