---
title: Singleton
description: El patrón de diseño Singleton es sin duda el más conocido y famoso de todos los patrones de diseño.
date: 2024-03-16
keywords: singleton, instancia, clase, estado, estado global, programación, patrón, patrón de diseño, patron, patron de diseño, javascript, typescript
---

El patrón de diseño Singleton es sin duda el más conocido y famoso de todos los patrones de diseño. El patrón de diseño Singleton se basa en una clase que solo puede ser instanciada una sola vez y que se puede acceder a dicha instancia globalmente, lo que lo hace excelente para la administración de un estado global.
Lo primero que haremos es crear una clase que sea capaz de manejar un contador.

```js
let counter = 0;

class Counter {
  getCounterValue() {
    return counter;
  }

  increment(num = 1) {
    counter += num;
    return counter;
  }

  decrement(num = 1) {
    counter -= num;
    return counter;
  }
}
```

La clase Counter actualmente es bastante sencilla, capaz de devolver, incrementar y decrementar un contador. Esta clase puede ser instanciada cuantas veces queramos y eso es justo lo opuesto al patrón Singleton.

```js
const myCounter1 = new Counter();
const myCounter2 = new Counter();
const myCounter3 = new Counter();
```

Para cumplir con el patrón Singleton debemos asegurarnos que la clase no pueda ser instanciada más de una vez, una forma de asegurarnos que no puede ser instanciada varias veces, es creando una variable instance. Cuando se realice la primera instancia, nuestro constructor de Counter guardará una referencia de la instancia en la variable instance. Cuando se intente llamar de nuevo al constructor de la clase Counter, esta verificará si existe una referencia de una instancia en la variable instance, si es así devolverá un error haciendo saber al usuario que existe una instancia ya creada.

```js
let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("An instance of the Counter class already exists");
    }
    instance = this;
  }

  getCounterValue() {
    return counter;
  }

  increment(num = 1) {
    counter += num;
    return counter;
  }

  decrement(num = 1) {
    counter -= num;
    return counter;
  }
}

const myCounter = new Counter();
```

Bien, ya no es posible crear más instancias de la clase Counter, pero aún existe un pequeño problema. Si exportamos la instancia de myCounter quedaría expuesta a que sus propiedades fuesen modificadas en su consumo. Para eliminar esta vulnerabilidad podemos congelar el objeto con Object.freeze.

```js
const myCounter = Object.freeze(new Counter());
export default myCounter;
```

Si usamos Typescript la sintaxis sería algo diferente, ya que el lenguaje nos proporciona modificadores de acceso que facilita la privatización de propiedades y métodos. Lo primero que cambiaremos es la variable instance, esta ya no es necesaria porque la moveremos dentro de la clase como una propiedad privada y estática. También privatizamos el constructor, puesto que manejaremos las instancias con un nuevo método llamado getInstance teniendo así más control.

```ts
let counter = 0;

class Counter {
  private static instance: Counter;

  private constructor() {}

  public static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }

    return Counter.instance;
  }

  public getCounterValue(): number {
    return counter;
  }

  public increment(num: number = 1): number {
    counter += num;
    return counter;
  }

  public decrement(num: number = 1): number {
    counter -= num;
    return counter;
  }
}
```

Con todos estos cambios podemos apreciar que ya no necesitamos instanciar la clase Counter y mucho menos congelarla ya que los modificadores de acceso y el método getInstance se encargan de todo el trabajo.

## Desventajas

Javascript posee una característica que otros lenguajes no poseen que es la creación de objetos literales, haciendo que los ejemplos anteriormente mencionados sean un poco exagerados, ya que podríamos crear directamente el objeto y exportarlo.

Las variables globales muchas veces pueden considerarse una muy mala decisión de diseño, sobre todo en aplicaciones robustas o de un gran tamaño, puesto que se podría sobrescribir accidentalmente el valor de la variable global desencadenando comportamientos no deseados.

En conclusión, el patrón de diseño Singleton es bastante sencillo de implementar, pero sus casos de uso son bastante escasos y muchos desarrolladores lo consideran un anti patrón, ya que el uso de variables globales podría complicar la lógica de la aplicación de una forma innecesaria.
