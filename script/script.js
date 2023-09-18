function mostrar_edad(){
    edad=document.getElementById("edad-range").value;
    span=document.getElementById("edad-selection");
    span.innerText=edad;
}

function saludar(nombre,edad,carrera){
    let content_nombre= document.getElementById("nombre-content");
    let content_edad= document.getElementById("edad-content");
    let content_carrera= document.getElementById("carrera-content");

    content_nombre.innerText=nombre;
    content_edad.innerText=edad;
    content_carrera.innerText=carrera;
} 

/*let nombre = prompt("¿Cual es tu nombre?","");
let edad = prompt("¿Cual es tu edad?","");
let carrera = prompt("¿Que carrera estudias?","");
saludar(nombre,edad,carrera);

function saludar(nombre,edad,carrera){
    alert(`Bienvenido ${nombre} \n tu edad es ${edad} \n y tu carrera es ${carrera}`)
}*/

document.getElementById("btn-saludar").addEventListener('click',function(e){
    e.preventDefault();
    let nombre=document.getElementsByName("nombre")[0].value;
    let edad=document.getElementsByName("edad")[0].value;
    let carrera=document.getElementsByName("carrera")[0].value;
    saludar(nombre,edad,carrera);
})

document.getElementsByName("medidas")[0].addEventListener('change',function(e){
    let content_pm= document.getElementById("medida-izquierda");
    let valor=document.getElementsByName("medidas")[0].value;
    content_pm.innerText = valor;
})

document.getElementsByName("medidas")[1].addEventListener('change',function(e){
    let content_pm= document.getElementById("medida-centro");
    let valor=document.getElementsByName("medidas")[1].value;
    content_pm.innerText = valor;
})
document.getElementsByName("medidas")[2].addEventListener('change',function(e){
    let content_pm= document.getElementById("medida-derecha");
    let valor=document.getElementsByName("medidas")[2].value;
    content_pm.innerText = valor;
})


/*let lado_1 = prompt("Ingrese la medidad del lado 1"," ");
let lado_2 = prompt("Ingrese la medidad del lado 2"," ");
let lado_3 = prompt("Ingrese la medidad del lado 3"," ");
calcular_area(lado_1,lado_2,lado_3);*/
function calcular_area(primera_medida,segunda_medida,tercera_medida){
    let a=parseFloat(primera_medida);
    let b=parseFloat(segunda_medida);
    let c=parseFloat(tercera_medida);
    let area_container= document.getElementById("area-triangulo");
    if (a<= 0 || b <= 0 || c <= 0){
    area_container.innerText= "El triangulo es inexistente";
    //alert("El triangulo es inexistente");
    }else{
    let perimetro = a + b + c;
    let semiperimetro = perimetro/2;
    let area = (semiperimetro * (semiperimetro-a)*(semiperimetro-b)*(semiperimetro-c))**(1/2);

    area_container.innerText= area.toFixed(2);
    //alert("El area de su triangulo es:" + area.toFixed(2));
    }
}

document.getElementById("calcular-area").addEventListener('click',function(e){
    e.preventDefault();
    let medida_1=document.getElementsByName("medidas")[0].value;
    let medida_2=document.getElementsByName("medidas")[1].value;
    let medida_3=document.getElementsByName("medidas")[2].value;
    calcular_area(medida_1,medida_2,medida_3);
})

/*let numero = prompt("ingrese el numero :",0)
invertir_numero(numero);*/

function invertir_numero(numero){
    let suma=0;
    let residuo=0;
    let contador = 0;
    let decimales=100;  //Se inicializa en 100 por que los numero tienes que ser de 3 cifras

    while(numero>0){
            residuo = numero % 10;
            numero = Math.floor(numero/10);
            suma = suma + (residuo*decimales);
            decimales= decimales/10;
            contador++;
    }

    if(contador==3){
        document.getElementById("numero-invertido").innerText= suma;
    }else{
        document.getElementById("numero-invertido").innerText= "Es distinto de 3 cifras";
    }
}

document.getElementById("invertir-button").addEventListener('click',function(e){
    e.preventDefault();
    let numero = document.getElementById("numero-invertir").value
    numero = parseInt(numero);
    invertir_numero(numero);
})


document.getElementsByName("ecuacion-cuadratica")[0].addEventListener('change',function(e){
    let content_pm= document.getElementById("valor-a");
    let valor=document.getElementsByName("ecuacion-cuadratica")[0].value;
    content_pm.innerText = valor;
})

document.getElementsByName("ecuacion-cuadratica")[1].addEventListener('change',function(e){
    let content_pm= document.getElementById("valor-b");
    let valor=document.getElementsByName("ecuacion-cuadratica")[1].value;
    content_pm.innerText = valor;
})
document.getElementsByName("ecuacion-cuadratica")[2].addEventListener('change',function(e){
    let content_pm= document.getElementById("valor-c");
    let valor=document.getElementsByName("ecuacion-cuadratica")[2].value;
    content_pm.innerText = valor;
})

/*let valor_a = prompt("Ingrese el valor para a:",0);
let valor_b = prompt("Ingrese el valor para b:",0);
let valor_c = prompt("Ingrese el valor para c:",0);
calcular_determinante(valor_a,valor_b,valor_c);*/
function calcular_determinante(a,b,c){
    let determinante = (b ** 2) - (4 * a * c);
    //alert("La determinante de la ecuacion cuadratica es " + determinante);
    document.getElementById("numero-determinante").innerText = determinante;
}

document.getElementById("determinante-button").addEventListener('click',function(e){
    e.preventDefault();
    let valor_1=document.getElementsByName("ecuacion-cuadratica")[0].value;
    let valor_2=document.getElementsByName("ecuacion-cuadratica")[1].value;
    let valor_3=document.getElementsByName("ecuacion-cuadratica")[2].value;
    calcular_determinante(valor_1,valor_2,valor_3);
})

document.getElementById("promedio-button").addEventListener('click',function(e){
    e.preventDefault();
    let nota_1= parseFloat(document.getElementsByName("notas")[0].value);
    let nota_2= parseFloat(document.getElementsByName("notas")[1].value);
    let nota_3= parseFloat(document.getElementsByName("notas")[2].value);
    let nota_4= parseFloat(document.getElementsByName("notas")[2].value);
    
    let promedio = (nota_1+nota_2+nota_3+nota_4)/4;
    
    if(promedio>10.5){
        document.getElementById("numero-promedio").innerText = promedio + " APROBADO";
    }else{
        document.getElementById("numero-promedio").innerText = promedio + " DESAPROBADO";
    }
})

document.getElementById("par-impar-button").addEventListener('click',function(e){
    e.preventDefault();
    let numero=document.getElementById("numero-averiguar").value;
    if(numero%2==0){
        document.getElementById("numero-par-impar").innerText = "PAR";
    }else{
        document.getElementById("numero-par-impar").innerText = "IMPAR";
    }
})