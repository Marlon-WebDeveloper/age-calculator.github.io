<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
 <link rel="stylesheet" href="https://fonts.google.com/specimen/Poppins">
 <link rel="stylesheet" href="bootstrap-5.0.2-dist/css/bootstrap.css">
 <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,600&family=Roboto:wght@100;400&display=swap" rel="stylesheet">
  
  <title>Frontend Mentor | Age calculator app</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    body{
      font-weight: 900;
      background: hsl(259, 100%, 65%);;
    }
    .container{
      border-radius: 13px;
      border-bottom-right-radius: 70px;
      max-width:700px;
    }
    .margen{
      margin-bottom: 60px;
    }
    span{
      color: hsl(259, 100%, 65%);
    }
    .title{
      position: relative;
    }
    .title p{
      position: absolute;
      top: -23px;
    
      font-weight: 500;
      font-size: 12px;
      text-transform: uppercase;
    }
    .img-bg{
      background: hsl(259, 100%, 65%);
      border: none;
    }
    .img-bg:hover{
      transform: scale(1.4);
      transition: 1s all;
    }
    .letras{
      font-size: 45px;
      letter-spacing: 2px;
      font-style:oblique;
      margin-left: 5px;
    }
    @media screen and (max-width:360px){
      .letras{
        font-size: 35px;
      }
    }
    @media  screen and (min-width:1400px) {
      .img-bg{
        transform: translateX(300px);
        transition: all 1.2s;
      }
      .img-bg:hover{
        transform: translateX(300px);
      }
      .letras{
        letter-spacing: 5px;
        margin-left: 30px;
        font-size: 70px;
      }
      
    }
     .title .alert{
      display: block;
      position: absolute;
      color: red;
      font-size: 10px;
      display:flex;
      font-weight: 700;

      transform: translateY(50px);
      
      
    }
    .hide{
      display: none;
    }
    .hr{
      padding: 10px;
    }
    .title input{
      font-size: 20px;
      padding-left: 8px;
      font-weight: 800;
    }
   
    .attribution { font-size: 18px; text-align: center; color: hsl(0, 0%, 100%); }
    .attribution a { color: hsl(0, 0%, 100%); }
  </style>
</head>
<body>
  <div class="container shadow-lg bg-light pe-4 ps-4 mx-auto my-5 position-relative" style="width: 90%; padding: 10px;">
     
<form id="form" class="formulario" action="submit">
  <div class="row w-100 d-flex justify-content-between mx-auto mt-5">
    <div class="col title">
      <p>Day</p>
      <input id="day" class="w-100" type="text" maxlength="2" name="" id="" class="w-25 rounded-3 border-secondary" placeholder="DD" style="height: 43px;max-width: 150px; border: 1px solid rgba(128, 128, 128, 0.477); border-radius: 5px;">
      <p class="alertadia hide">Enter a valid day</p>
    </div>
    
    <div class="col title">
      <p>month</p>
      <input id="month" class="w-100" type="text" maxlength="2" name="" id="" class="w-25 rounded-3 border-secondary" placeholder="MM" style="height: 43px; max-width: 150px; border: 1px solid rgba(128, 128, 128, 0.477); border-radius: 5px;">
      <p class="alertames hide">Enter a valid Month</p>
    </div>
    <div class="col title">
      <p>year</p>
      <input id="year" class="w-100" type="text" maxlength="4" name="" id="" class="w-25 rounded-3 border-secondary" placeholder="YYYY" style="height: 43px;max-width: 150px; border: 1px solid rgba(128, 128, 128, 0.477); border-radius: 5px;">
      <p class="alertaano hide">Enter a valid Year</p>
    </div>
  </div>
</form>

    <div class="row d-flex align-items-center justify-content-center position-relative hr" style="margin-top: 90px;">
      <div style="width: 100%; height: .5px; background: #252525;"></div>
      <button type="submit" class="img-bg rounded-circle p-3 position-absolute"style="width:60px;" style="height: 20px;"">
        <img class="" src="assets/images/icon-arrow.svg" alt="" style="width: 100%; height: 100%;">
      </button>
    </div>

    <div class="container d-grid mx-auto justify-content-start mt-4 p-3 margen">
      <div class="row letras d-inline-block"><span class="ano">--</span>years</div>
    <div class="row letras d-inline-block"><span class="mes">--</span>months</div>
    <div class="row letras d-inline-block"><span class="dia">--</span>days</div>
    </div>
  
  </div>

  <div class="toast position-absolute" style="bottom: 120px; left: 20px;" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="assets/images/balloon-fill.svg" class="rounded me-2" alt="...">
      <strong class="me-auto">Happy Birthday</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Have a nice day!
    </div>
  </div>

  <!-- Day
  DD

  Month
  MM

  Year
  YYYY

  -- years
  -- months
  -- days -->
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Marlon</a>.
  </div>
  <script src="bootstrap-5.0.2-dist/js/bootstrap.js"></script>
  <script>
    
function esBisiesto(year) {
    return (year % 400 === 0) ? true :
            (year % 100 === 0) ? false :
            year % 4 === 0;
}

const day = document.getElementById("day");
const month = document.getElementById("month")
const year = document.getElementById("year")
const btn = document.querySelector(".img-bg")
const ano = document.querySelector(".ano")
const mes = document.querySelector(".mes")
const dia = document.querySelector(".dia")
const alertAno = document.querySelector(".alertaano")
const alertMes = document.querySelector(".alertames")
const alertDia = document.querySelector(".alertadia")
const toast = document.querySelector(".toast")
const btnClose = document.querySelector(".btn-close")




var feb;
btn.addEventListener("click",()=>{
const fecha = new Date(year.value,month.value-1,day.value);
if(esBisiesto(year.value)){
    feb = 29;
}else if(!esBisiesto(year.value)){
    feb =28
}


const meses = [31,feb,31,30,31,30,31,31,30,31,30,31];

  
const fechaActual = new Date();
const f = fechaActual.getTime() - fecha.getTime();



if(year.value > fechaActual.getFullYear()){
alertAno.classList.add("alert");
alertAno.textContent = `Enter a valid year`

}else if(year.value == ""){
    alertAno.classList.add("alert")
    alertAno.textContent = `Empty Field`
    
    
}else {
    alertAno.classList.remove("alert")
    ano.innerHTML = fechaActual.getFullYear() - fecha.getFullYear();
}


if(month.value > 12){
    alertMes.classList.add("alert")
    alertMes.textContent =`Enter a valid month`
} else if(month.value == ""){
    alertMes.classList.add("alert");
    alertMes.textContent = `Empty Field`

    
    
}else{
    alertMes.classList.remove("alert")
    if(fecha.getMonth() > fechaActual.getMonth()){
        mes.innerHTML = (fecha.getMonth() - fechaActual.getMonth());
        ano.innerHTML = ano.innerHTML - 1;
    }else if(fecha.getMonth() == fechaActual.getMonth() && fecha.getDate() < fechaActual.getDate()){
        mes.innerHTML = 0;
    }else if(fecha.getMonth() == fechaActual.getMonth() && fecha.getDate() > fechaActual.getDate()){   
        mes.innerHTML = fecha.getMonth()+1;
        ano.innerHTML = ano.innerHTML -1;

}else{
    mes.innerHTML = (fechaActual.getMonth() - fecha.getMonth());
}}


if(day.value == ""){
    alertDia.classList.add("alert");
    alertDia.textContent = `Empty Field`
}else if(day.value > 31){
    alertDia.classList.add("alert");
    alertDia.textContent = `Empty Field`

}else if(day.value > meses[month.value-1]){
    alertDia.classList.add("alert");
    alertDia.textContent = `This day doesn't exist`
}else{
    alertDia.classList.remove("alert")
    if(fecha.getMonth() == fechaActual.getMonth() && fecha.getDate() > fechaActual.getDate()){
        dia.innerHTML =  meses[month.value-1] - (fecha.getDate() - fechaActual.getDate())
    }
    else if(fecha.getDate() > fechaActual.getDate()){
        dia.innerHTML = fecha.getDate() - fechaActual.getDate();
     }else{
        dia.innerHTML = fechaActual.getDate() - fecha.getDate();
     }
}
if(alertAno.classList.contains("alert")||alertMes.classList.contains("alert")||alertDia.classList.contains("alert")){
    ano.innerHTML = `--`;
    mes.innerHTML = `--`;
    dia.innerHTML = `--`;
    btn.style.background = `#e50914`
    ano.style.color = `#e50914`
    mes.style.color = `#e50914`
    dia.style.color = `#e50914`
    document.body.style.background = `#e50914`


}
if(!alertAno.classList.contains("alert")&& !alertMes.classList.contains("alert")&& !alertDia.classList.contains("alert")){
    btn.style.background = `#7ec544`
    ano.style.color = `#7ec544`
    mes.style.color = `#7ec544`
    dia.style.color = `#7ec544`
    document.body.style.background = `#7ec544`

    
    
}



if (day.value == fechaActual.getDate() && month.value-1 == fechaActual.getMonth()) {
    toast.classList.add("show")
   
}

btnClose.addEventListener("click",()=>{
    toast.classList.remove("show")
})




     
})
  </script>
</body>
</html>
