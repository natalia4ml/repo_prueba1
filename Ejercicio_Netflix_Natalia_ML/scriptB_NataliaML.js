//Natalia Mora L.
//clase menor
class Suscriptor
{
    constructor(ced, nom, tip)
    {
        this.cedula = ced;
        this.nombre = nom;
        this.tipoPlan = tip;
    }

    precioPagar()
    {
        if(this.tipoPlan=='A')
        {
            return 3 + 0.3;
        } else if(this.tipoPlan=='B')
        {
            return 5 + 0.5;
        }
        else
        {
            return 10;
        }
    }
    
}
//clase mayor
class Agencia_Netflix
{
    constructor()
    {
        this.contPlanA = 0;
        this.contPlanB = 0;
        this.contPlanC = 0;
        this.contSuscript = 0;
        this.planMasPedido = "";
    }

    procesarSuscriptor(objS)
    {
        this.contSuscript++;

        if(objS.tipoPlan=='A')
        {
            this.contPlanA++;
        }else if(objS.tipoPlan=='B')
        {
            this.contPlanB++;
        }else if(objS.tipoPlan=='C')
        {
            this.contPlanC++;
        }
        else 
        {
            this.contPlanC=0;
        }
    }

    porcentajeNoServicio()
    {
        return (this.contPlanC * 100)/this.contSuscript;
    }

    planFavorito()
    {
        // A > B > C
        if(this.contPlanA>this.contPlanB && this.contPlanB>this.contPlanC)
        {
            this.planMasPedido = "El plan favorito es el Plan A (3.3$ - 1 pantalla)"
        } 
        else if(this.contPlanA<this.contPlanB && this.contPlanB>this.contPlanC)
        {
            // A < B > C
            this.planMasPedido = "El plan favorito es el Plan B (5.5$ - 2 pantallas)"

        }else if(this.contPlanC>this.contPlanB && this.contPlanB>this.contPlanA)
        {
            // C > B > A
            this.planMasPedido = "El plan favorito es el Plan C (10$ - 5 pantallas)"
        } 
        else if(this.contPlanA==this.contPlanB && this.contPlanC>this.contPlanB)
        {
            // A = B < C
            this.planMasPedido = "El plan favorito es el Plan C (10$ - 5 pantallas)"
        }
        else 
        {
            this.planMasPedido = "Los planes A, B y C, son solicitados de igual forma"
        }
        return this.planMasPedido;
    }
}

// objetos
suscriptor1 = new Suscriptor('01','Ana','A');
suscriptor2 = new Suscriptor('02','Juan','B');
suscriptor3 = new Suscriptor('03','Samuel','C');
suscriptor4 = new Suscriptor('04','Michelle','C');
suscriptor5 = new Suscriptor('05','David','C');

agencia = new Agencia_Netflix();
agencia.procesarSuscriptor(suscriptor1);
agencia.procesarSuscriptor(suscriptor2);
agencia.procesarSuscriptor(suscriptor3);
agencia.procesarSuscriptor(suscriptor4);
agencia.procesarSuscriptor(suscriptor5);

//salidas HTML == resultados
salida = document.getElementById("aqui_resultados")
salida.innerHTML = " -------- RESULTADOS --------"
salida.innerHTML += `<br> == == == == == == == == == == == == == == == == == == == == == == == == == `
salida.innerHTML += `<br> == Precio a pagar por suscriptor == `
salida.innerHTML += `<br>${suscriptor1.nombre} paga: ${suscriptor1.precioPagar()} $`
salida.innerHTML += `<br>${suscriptor2.nombre} paga: ${suscriptor2.precioPagar()} $`
salida.innerHTML += `<br>${suscriptor3.nombre} paga: ${suscriptor3.precioPagar()} $`
salida.innerHTML += `<br>${suscriptor4.nombre} paga: ${suscriptor4.precioPagar()} $`
salida.innerHTML += `<br>${suscriptor5.nombre} paga: ${suscriptor5.precioPagar()} $`
salida.innerHTML += '<br>'
salida.innerHTML += `<br> == == == == == == == == == == == == == == == == == == == == == == == == == `
salida.innerHTML += `<br>Porcentaje de suscriptores que NO pagaron servicio de conexion: ${agencia.porcentajeNoServicio()} %`
salida.innerHTML += `<br> == == == == == == == == == == == == == == == == == == == == == == == == == `
salida.innerHTML += `<br>De los planes disponibles: ${agencia.planFavorito()}`
salida.innerHTML += `<br> == == == == == == == == == == == == == == == == == == == == == == == == == `