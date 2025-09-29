
//operacionesresisten


export class CalculadoraResistencia{

    public color1Seleccionado: string = 'Naranja';
    public color2Seleccionado: string = 'Morado';
    public color3Seleccionado: string = 'Café';
    public toleranciaSeleccionada: string = 'Oro';

    // Resultados
    public valorResistencia: number = 0;
    public valorMaximo: number = 0;
    public valorMinimo: number = 0;


    private readonly valores=[
        { color: 'Negro', claseColor: 'bg-dark', valor: 0 },
        { color: 'Café', claseColor: 'bg-cafe', valor: 1 },
        { color: 'Rojo', claseColor: 'bg-danger', valor: 2 },
        { color: 'Naranja', claseColor: 'bg-naranja', valor: 3 }, 
        { color: 'Amarillo', claseColor: 'bg-warning', valor: 4 },
        { color: 'Verde', claseColor: 'bg-success', valor: 5 },
        { color: 'Azul', claseColor: 'bg-primary', valor: 6 },
        { color: 'Morado', claseColor: 'bg-morado', valor: 7 },
        { color: 'Gris', claseColor: 'bg-secondary', valor: 8 },
        { color: 'Blanco', claseColor: 'bg-light text-dark border border-dark', valor: 9 },
    ];

    private readonly multiplicadores= [
    { color: 'Negro', claseColor: 'bg-dark', multiplicador: 1 },
    { color: 'Café', claseColor: 'bg-cafe', multiplicador: 10 },
    { color: 'Rojo', claseColor: 'bg-danger', multiplicador: 100 },
    { color: 'Naranja', claseColor: 'bg-naranja', multiplicador: 1000 },
    { color: 'Amarillo', claseColor: 'bg-warning', multiplicador: 10000 },
    { color: 'Verde', claseColor: 'bg-success', multiplicador: 100000 },
    { color: 'Azul', claseColor: 'bg-primary', multiplicador: 1000000 },
    { color: 'Morado', claseColor: 'bg-morado', multiplicador: 10000000 },
    { color: 'Gris', claseColor: 'bg-secondary', multiplicador: 100000000 },
    { color: 'Plata', claseColor: 'bg-plata', multiplicador: 1000000000 },
  ];

  private readonly tolerancias= [
    { color: 'Oro', claseColor: 'bg-dorado', porcentaje: 5 },
    { color: 'Plata', claseColor: 'bg-plata', porcentaje: 10 },
    
  ];

  constructor() {
    this.calcularResistencia();
  }

  // Obtiene el valor (0-9) del color seleccionado
    public obtenerValor(color: string): number {
        return this.valores.find(v => v.color === color)?.valor || 0;
    }

    // Obtiene el multiplicador (x10, x1K, etc.) del color seleccionado
    public obtenerMultiplicador(color: string): number {
        return this.multiplicadores.find(m => m.color === color)?.multiplicador || 0;
    }

    // Obtiene la tolerancia (%) del color seleccionado
    public obtenerTolerancia(color: string): number {
        return this.tolerancias.find(t => t.color === color)?.porcentaje || 0;
    }

    public obtenerClaseColor(color: string): string {
        return [...this.valores, ...this.multiplicadores, ...this.tolerancias]
               .find(item => item.color === color)?.claseColor || 'bg-light';
    }

  //Funcion de calculo
  public calcularResistencia():void{
    //Resistencia=(C1 * 10 + C2 ) * Multiplicador
    const C1 = this.obtenerValor(this.color1Seleccionado);
    const C2 = this.obtenerValor(this.color2Seleccionado);
    const Multi = this.obtenerMultiplicador(this.color3Seleccionado);
    const ToleranciaP = this.obtenerTolerancia(this.toleranciaSeleccionada);
    const valorBase = (C1 * 10) + C2;
    this.valorResistencia = valorBase * Multi;

    //Calcular tolerancia
    const toleranciaDecimal = ToleranciaP / 100;
    const variacion = this.valorResistencia * toleranciaDecimal;

    //max y min
    this.valorMaximo = parseFloat((this.valorResistencia + variacion).toFixed(3));
    this.valorMinimo = parseFloat((this.valorResistencia - variacion).toFixed(3));

  }

  public getValores(){
    return this.valores;
  }

  public getMultiplicadores(){
    return this.multiplicadores;
  }

  public getTolerancias(){
    return this.tolerancias;
  }




}

