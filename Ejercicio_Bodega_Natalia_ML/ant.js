//Natalia Mora L. - V.30.416.997- Analisis De Sistemas

class Cliente
{
    constructor(n, cantE, cantC)
    {
        this.nombreCliente = n;
        this.cantEmpanadas = cantE;
        this.cantCafe = cantC;
        this.montoPedido = 0;
    }

    montoPagarCliente()
    {
        return this.montoPedido += (this.cantEmpanadas * 20) + (this.cantCafe * 5);;
    }

    pedido()
    {
        /*if((this.cantEmpanadas && this.cantEmpanadas)>=1)
        {
            return salida.innerHTML += `<br>Sí recibió`;
        } else if(this.cantEmpanadas>this.cantCafe==0){
            return salida.innerHTML += `<br>Sí recibió`;
        }else if(this.cantEmpanadas==0<this.cantCafe)// 0 empanadas pero 
        {
            return salida.innerHTML += `<br>pase3`;
        }else // 0 y 0
        {
            return salida.innerHTML += `<br>Esta persona no es cliente; no compro nada`;
        }*/
    }
}

class Bodega
{
    constructor(cE, cCaf)
    {
        this.cantEmpanadasIni = cE;
        this.cantCafeIni = cCaf;
        this.cantEmpanadasNueva = 0;
        this.totalVentas = 0;
    }

    ventaTotal(objClienteX)
    {
        if(objClienteX.montoPedido>1)
        {
            return this.totalVentas += objClienteX.montoPedido;
        }
    }

    productosEnStock(objCliente)
    {
        this.cantEmpanadasNueva += this.cantEmpanadasIni - objCliente.cantEmpanadas;
        return this.cantEmpanadasNueva;
    }
}

//Objetos de la Clase Cliente
cliente1 = new Cliente('Mario', 2, 1);
cliente2 = new Cliente('Pedro', 4, 2);
cliente3 = new Cliente('Ana', 1, 3);
cliente4 = new Cliente('Johanna', 4, 0);
cliente5 = new Cliente('Joseph', 3, 1);

//Objeto de la Clase Bodega
bodega = new Bodega(17, 6);
bodega.ventaTotal(cliente1);
bodega.ventaTotal(cliente2);
bodega.ventaTotal(cliente3);
bodega.ventaTotal(cliente4);
bodega.ventaTotal(cliente5);


// SALIDA EN EL HTML
salida = document.getElementById("Bodega_resultados")
//salida.innerHTML = `<br>Resultados`


// -- SE LE ENTREGO TODO EL PEDIDO?:  
//salida.innerHTML += `<br>Cliente: ${clientePrueba.nombreCliente}, ${clientePrueba.pedido()} su pedido completo solicitado `

// -- MONTO A PAGAR POR CLIENTE --
salida.innerHTML = `<br> *** Clientes: ***
${cliente1.nombreCliente}: el monto a pagar por su pedido es: ${cliente1.montoPagarCliente()} '$' 
${cliente3.nombreCliente}: el monto a pagar por su pedido es: ${cliente3.montoPagarCliente()} '$' 
${cliente4.nombreCliente}: el monto a pagar por su pedido es: ${cliente4.montoPagarCliente()} '$' 
${cliente5.nombreCliente}: el monto a pagar por su pedido es: ${cliente5.montoPagarCliente()} '$' 
'</br>'`

// -- CANTIDAD DE EMPANADAS RESTANTES --
//salida.innerHTML = `<br> *** Productos en Stock: ***`
//salida.innerHTML += `<br> Empanadas: ${bodega.productosEnStock()} `

// -- VENTA TOTAL DE LA BODEGA --
//salida.innerHTML = `<br> *** Venta Total de la Bodega: ***`
//salida.innerHTML += `<br> Monto Total: ${bodega.ventaTotal()} '$' `