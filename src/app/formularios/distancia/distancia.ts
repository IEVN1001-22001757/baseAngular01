export class Distancia{
    public x1:string="";
    public y1:string="";
    public x2:string="";
    public y2:string="";

    public resultadoDistancia: number | null = null;

    constructor(){
        this.calcularDistancia();
    }

    public calcularDistancia():void{
        const resX = parseInt(this.x2)-parseInt(this.x1);
        const resY = parseInt(this.y2) - parseInt(this.y1);
        const distanciaCuadrado = (resX*resX) + (resY*resY);
        this.resultadoDistancia = Math.sqrt(distanciaCuadrado);
    }
}