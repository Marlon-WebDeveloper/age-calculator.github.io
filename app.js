
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
}else if(isNaN(year.value)){
    alertAno.classList.add("alert")
    alertAno.textContent = `Enter a Number Please`

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
}else if(isNaN(month.value)){

alertMes.classList.add("alert");
alertMes.textContent = `Enter a number please`    
    
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
}else if(isNaN(day.value)){
alertDia.classList.add("alert")
alertDia.textContent = `Enter a Number please`

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
