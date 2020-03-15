// Выпадающее меню 

let el = document.getElementsByClassName('nav-item');


// Цикл перебирающий все элементы нашего списка
for(let i=0; i<el.length; i++) {
    el[i].addEventListener("mouseenter", showSub, false);
    el[i].addEventListener("mouseleave", hideSub, false);
 }

 // Функция при наведении на элемент меню 
 function showSub(e) {
    if(this.children.length>1) {
       this.children[1].style.height = "auto";
       this.children[1].style.overflow = "visible";
       this.children[1].style.opacity = "1";
    } else {
       return false;
    }
 }

// Функция при убирании мыши с элемента меню
 function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}


//  Карусель 

// делаем кнопки Вперед и Назад
let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos img');

let i = 0;
btn_next.onclick = function(){
    images[i].style.display = 'none';
    i++
    if(i >= images.length){
    i = 0; // переменная i равна 0
    }
    images[i].style.display = 'block';
}

btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}

function onFormSubmited(e) {
    const isValid = validate();

    if (!isValid) {
        return false;
    }

    const form = document.forms["form"];

    const messageBox = document.createElement("div");

    messageBox.innerText = "Спасибо за ваше сообщение , мы вам ответим в ближайшее время";
    messageBox.className = "message-box";

    form.parentElement.appendChild(messageBox);

    form.remove();

    e.preventDefault();

    return true;
}

// Валидность формы

//Считаем значения из полей name и email в переменные x и y
function validate(){
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;

//Если поле name пустое выведем сообщение и предотвратим отправку формы
    if (name.length==0){
        document.getElementById("namef").innerHTML = "*данное поле обязательно для заполнения";
        return false;
     }

//Если поле email пустое выведем сообщение и предотвратим отправку формы
     if (email.length==0){
        document.getElementById("emailf").innerHTML = "*данное поле обязательно для заполнения";
        return false;
     }
//Проверим содержит ли значение введенное в поле email символы @ и .

   dog=email.indexOf("@");
   dot=email.indexOf(".");

//Если поле не содержит эти символы знач email введен не верно

   if (dog<1 || dot <1){
      document.getElementById("emailf").innerHTML = "*email введен не верно";
      return false;
   }

   return true;
}     
