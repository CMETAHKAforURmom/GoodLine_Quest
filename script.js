var btn = document.getElementById("btn");
btn.addEventListener('click', function(){
        var pattern = "+7 999 999 9999";
        var text = document.getElementById("phone").value;
        if(text == 0){
            alert("Неверные значения номера телефона!")
        }else{
            
            var request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/");
            request.onreadystatechange = request.readyState;
            request.send(text);
        }
}, true);
$("#phone").focus;
$("#phone").mask("+7 999 999 9999");   