$('.img-intro-3,.boton').on('click',function(){
    $('.contenedor-menu').attr('style','display:block');
    $('.contenedor-menu').siblings().attr('style','display:none');
})

$('.menu-1').on('click',function(){
    $('.contenedor-unidad1').attr('style','display:block');
    $('.contenedor-unidad1').siblings().attr('style','display:none');
})

$('.menu-2').on('click',function(){
    $('.contenedor-unidad-2').attr('style','display:block');
    $('.contenedor-unidad-2').siblings().attr('style','display:none');
})

$('.menu-3').on('click',function(){
    $('.contenedor-unidad-3').attr('style','display:block');
    $('.contenedor-unidad-3').siblings().attr('style','display:none');
})

$('.menu-4').on('click',function(){
    $('.contenedor-unidad-4').attr('style','display:block');
    $('.contenedor-unidad-4').siblings().attr('style','display:none');
})

$('.menu-5').on('click',function(){
    $('.contenedor-unidad-5').attr('style','display:block');
    $('.contenedor-unidad-5').siblings().attr('style','display:none');
})

$('.menu-6').on('click',function(){
    $('.contenedor-unidad-6').attr('style','display:block');
    $('.contenedor-unidad-6').siblings().attr('style','display:none');
})

$('.menu-7').on('click',function(){
    $('.contenedor-unidad-7').attr('style','display:block');
    $('.contenedor-unidad-7').siblings().attr('style','display:none');
})

$('.menu-8').on('click',function(){
    $('.contenedor-unidad-8').attr('style','display:block');
    $('.contenedor-unidad-8').siblings().attr('style','display:none');
})

/*$('.contenido-menu').on('click','div',function(){
    var i = $(this).attr('id');
     $('.contenedor-unidad-i').attr('style','display:block');
    $('.contenedor-unidad-i').siblings().attr('style','display:none');
})*/

/*FLECHA INICIO*/
var flechaInicio = function(){
    this.elemento = document.getElementById("flecha-inicio")
    this.anchura = 180
    this.altura = 342
    this.cantidadDeCuadros = 2
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 2
    }
}

var $flechaInicio = new flechaInicio()
setInterval(function(){$flechaInicio.desplazar()},300)


/*MASCOTA 1*/
var mascota1 = function(){
    this.elemento = document.getElementById("mascota-1")
    this.anchura = 300
    this.altura = 350
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota1 = new mascota1()
setInterval(function(){$mascota1.desplazar()},150)

/*MASCOTA 2*/

var mascota2 = function(){
    this.elemento = document.getElementById("mascota-2")
    this.anchura = 300
    this.altura = 350
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota2 = new mascota2()
setInterval(function(){$mascota2.desplazar()},150)

/*MASCOTA 3*/

var mascota3 = function(){
    this.elemento = document.getElementById("mascota-3")
    this.anchura = 300
    this.altura = 350
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota3 = new mascota3()
setInterval(function(){$mascota3.desplazar()},150)

/*MASCOTA 4*/

var mascota4 = function(){
    this.elemento = document.getElementById("mascota-4")
    this.anchura = 300
    this.altura = 350
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota4 = new mascota4()
setInterval(function(){$mascota4.desplazar()},150)

/*MASCOTA 5*/

var mascota5 = function(){
    this.elemento = document.getElementById("mascota-5")
    this.anchura = 300
    this.altura = 350
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota5 = new mascota5()
setInterval(function(){$mascota5.desplazar()},150)

/*MASCOTA 6*/

var sprite1 = function(){
    this.elemento = document.getElementById("sprite-1")
    this.anchura = 225
    this.altura = 278
    this.cantidadDeCuadros = 2
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 2
    }
}

var $sprite1 = new sprite1()
setInterval(function(){$sprite1.desplazar()},500)

/******************************************/

var mascota6 = function(){
    this.elemento = document.getElementById("mascota-6")
    this.anchura = 195
    this.altura = 228
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota6 = new mascota6()
setInterval(function(){$mascota6.desplazar()},150)

/*MASCOTA 7*/

var sprite2 = function(){
    this.elemento = document.getElementById("sprite-2")
    this.anchura = 220
    this.altura = 301
    this.cantidadDeCuadros = 2
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 2
    }
}

var $sprite2 = new sprite2()
setInterval(function(){$sprite2.desplazar()},500)

/**************************************************/

var mascota7 = function(){
    this.elemento = document.getElementById("mascota-7")
    this.anchura = 195
    this.altura = 228
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota7 = new mascota7()
setInterval(function(){$mascota7.desplazar()},150)


/*MASCOTA 8*/

var mascota8 = function(){
    this.elemento = document.getElementById("mascota-8")
    this.anchura = 300
    this.altura = 350
    this.cantidadDeCuadros = 12
    
    this.desplazar = function(){
        this.elemento.style.backgroundPosition = --this.cantidadDeCuadros * this.anchura + "px 0px"
        
        if(this.cantidadDeCuadros == 0)
            this.cantidadDeCuadros = 12
    }
}

var $mascota8 = new mascota8()
setInterval(function(){$mascota8.desplazar()},150)



