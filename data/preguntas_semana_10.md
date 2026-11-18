# Banco de Preguntas: Semana 10 · Arquitectura de Redes Neuronales

> Total de preguntas: 35

---
### Pregunta 1

En el taller se construye una red con la topología 2→2→1. ¿Cuántos parámetros entrenables tiene en total esta arquitectura?

**Opciones:**
- **A** 7, porque la capa oculta aporta 4 pesos y 2 sesgos, y la capa de salida aporta 2 pesos sin sesgo.
- **B** 9, porque W1 tiene 4 pesos, b1 tiene 2 sesgos, W2 tiene 2 pesos y b2 tiene 1 sesgo.
- **C** 9, porque W1 tiene 2 pesos, b1 tiene 2 sesgos, W2 tiene 4 pesos y b2 tiene 1 sesgo.
- **D** 11, porque cada neurona en la red tiene un sesgo adicional compartido entre capas.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. La red 2→2→1 tiene: W1 de forma (2,2)=4 parámetros, b1 de forma (2,)=2 parámetros, W2 de forma (1,2)=2 parámetros, b2 de forma (1,)=1 parámetro. Total: 4+2+2+1=9 parámetros. La opción c invierte las formas de W1 y W2 —error conceptual frecuente— ya que W1 conecta 2 entradas con 2 neuronas ocultas, dando forma (ocultas, entradas)=(2,2), y W2 conecta 2 neuronas ocultas con 1 salida, dando forma (1,2).

---
### Pregunta 2

El taller define el forward pass de la red como: z1 = W1 @ x + b1 / a1 = relu(z1) / z2 = W2 @ a1 + b2 / y_hat = sigmoid(z2). ¿Qué ocurriría si se elimina la función relu y se sustituye por la identidad f(x)=x en a1?

**Opciones:**
- **A** La red seguiría siendo equivalente porque sigmoid en la salida preserva la no linealidad entre capas.
- **B** La red colapsaría a un modelo lineal, pues W2@(W1@x+b1)+b2 puede reescribirse como W*@x+b*.
- **C** La red perdería únicamente la capacidad de clasificación binaria, pero mantendría clasificaciones multiclase.
- **D** El gradiente explotaría durante el backpropagation porque la derivada de la identidad es indefinida.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Sin activación no lineal en la capa oculta, la composición de capas lineales W2@(W1@x+b1)+b2 = (W2@W1)@x + (W2@b1+b2) se reduce a W*@x+b*, es decir un único modelo lineal equivalente. La capa oculta adicional no añade capacidad expresiva. La opción a es incorrecta: sigmoid solo introduce no linealidad en la última salida, no entre capas ocultas.

---
### Pregunta 3

Al entrenar la red con capa oculta sobre los datos del taller se obtiene accuracy=0.92, mientras que sin capa oculta (modelo logístico directo) se obtiene accuracy=0.705. ¿Cuál es la explicación más precisa de esta diferencia?

**Opciones:**
- **A** La capa oculta agrega más parámetros, y más parámetros siempre garantizan mayor accuracy en cualquier conjunto de datos.
- **B** La capa oculta introduce no linealidad que permite aprender una frontera de decisión curva, imposible con un modelo logístico directo.
- **C** La función sigmoid de salida trabaja de manera más eficiente cuando recibe activaciones previas de ReLU en lugar de entradas crudas.
- **D** El modelo sin capa oculta sufre underfitting exclusivamente por el número reducido de épocas de entrenamiento utilizadas.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Los datos del taller no son linealmente separables. Sin capa oculta, el modelo logístico solo puede trazar una frontera lineal (una recta), lo que limita su accuracy al 70.5%. Con la capa oculta+ReLU, la red aprende transformaciones no lineales del espacio de entrada y traza fronteras curvas que capturan mejor la distribución real, elevando el accuracy al 92%. La opción a es incorrecta: más parámetros pueden provocar overfitting y reducir la generalización.

---
### Pregunta 4

En el Bloque B1 del taller se normaliza con: X_norm = (X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0)). ¿Cuál es el rango de salida garantizado por esta transformación?

**Opciones:**
- **A** (-1, 1), porque se centra en cero antes de dividir por el rango total.
- **B** (0, 1), porque el mínimo mapea a 0 y el máximo mapea a 1.
- **C** (0, 1), pero solo si todas las variables tienen la misma desviación estándar.
- **D** (-∞, +∞), ya que el rango depende de los valores extremos del conjunto de prueba.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Esta es la normalización Min-Max. Al restar X.min(axis=0), el valor mínimo de cada columna queda en 0. Al dividir por (max-min), el valor máximo queda en 1. Todos los demás valores caen en [0,1]. No requiere igual desviación estándar (eso lo exige la estandarización z-score). Los datos de prueba pueden salir del rango (0,1) si tienen valores fuera del rango de entrenamiento, pero los de entrenamiento siempre quedan en [0,1].

---
### Pregunta 5

La red 3→3→1 del taller aumenta a 16 parámetros totales. ¿Cuál es el desglose correcto de esos 16 parámetros?

**Opciones:**
- **A** W1(3,3)=9, b1(3)=3, W2(1,3)=3, b2(1)=1 — total: 16.
- **B** W1(3,3)=9, b1(3)=3, W2(3,1)=3, b2(3)=1 — total: 16.
- **C** W1(2,3)=6, b1(3)=3, W2(1,3)=4, b2(1)=1 — total: 14.
- **D** W1(3,3)=9, b1(1)=1, W2(1,3)=3, b2(3)=3 — total: 16.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. Con entrada de 3 características y capa oculta de 3 neuronas: W1 tiene forma (3,3)=9 pesos, b1 tiene 3 sesgos. La capa de salida conecta 3 neuronas ocultas con 1 salida: W2 tiene forma (1,3)=3 pesos, b2=1 sesgo. Total: 9+3+3+1=16. La opción b invierte la forma de W2 a (3,1) y coloca 3 sesgos en b2, lo cual es incorrecto: el sesgo de salida tiene exactamente 1 elemento porque hay 1 neurona de salida.

---
### Pregunta 6

En el Bloque B2 del taller se inicializan los pesos con np.random.randn. ¿Por qué es preferible inicializar los pesos aleatoriamente en lugar de inicializarlos todos en cero?

**Opciones:**
- **A** Porque la inicialización en cero provoca que el gradiente sea siempre positivo, lo que impide la convergencia del optimizador.
- **B** Porque si todos los pesos son cero, todas las neuronas de una misma capa aprenden exactamente la misma función y la red no gana expresividad.
- **C** Porque NumPy genera valores en (0,1) con randn, y los valores positivos aceleran la convergencia del gradiente descendente.
- **D** Porque los pesos en cero saturan la función sigmoid produciendo gradientes de exactamente 1.0 durante todo el entrenamiento.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Este fenómeno se llama 'problema de simetría'. Si W=0 y b=0, entonces z=0 para todas las neuronas, todas reciben el mismo gradiente y actualizan igual, lo que las hace indistinguibles. La red equivale a tener una sola neurona por capa. La inicialización aleatoria rompe la simetría: cada neurona aprende características diferentes. La opción c es incorrecta: np.random.randn genera valores con distribución normal estándar (media=0), no en (0,1).

---
### Pregunta 7

La función de pérdida utilizada en el taller para clasificación binaria es Binary Cross-Entropy: L = -[y·log(ŷ) + (1-y)·log(1-ŷ)]. ¿Qué valor toma L cuando ŷ=1.0 e y=1 (predicción perfecta)?

**Opciones:**
- **A** 1.0, porque sigmoid(z)=1 corresponde a probabilidad máxima.
- **B** 0.0, porque log(1)=0 y el término negativo desaparece.
- **C** 0.5, porque la pérdida promedia el error entre las dos clases.
- **D** -1.0, porque el logaritmo de 1 multiplicado por el signo negativo da -1.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Con ŷ=1 e y=1: L = -[1·log(1) + (1-1)·log(1-1)] = -[1·0 + 0·log(0)] = 0. El término log(1)=0, y el segundo término es 0·log(0) que por convenio se trata como 0 (límite). Por eso la pérdida es 0 ante una predicción perfectamente correcta. La opción d es incorrecta: -1·log(1) = -1·0 = 0, no -1.

---
### Pregunta 8

En el Bloque B4 del taller se implementa manualmente el backward pass para calcular los gradientes. ¿Cuál es el orden correcto de cálculo en la retropropagación para la red 2→2→1?

**Opciones:**
- **A** dL/dW1 → dL/db1 → dL/dW2 → dL/db2, siguiendo el orden de las capas desde entrada hasta salida.
- **B** dL/db2 → dL/dW2 → dL/db1 → dL/dW1, aplicando la regla de la cadena desde la salida hacia la entrada.
- **C** dL/dW2 → dL/dW1 → dL/db2 → dL/db1, calculando primero todos los pesos y luego todos los sesgos.
- **D** dL/dz1 → dL/da1 → dL/dz2 → dL/dŷ, siguiendo el flujo de activaciones en orden ascendente.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. La retropropagación aplica la regla de la cadena desde la capa de salida hacia la capa de entrada (de derecha a izquierda). Primero se calcula dL/dz2 (error en la salida), luego dL/dW2 y dL/db2 con ese error, luego dL/da1 (error propagado hacia atrás), luego dL/dz1 aplicando la derivada de ReLU, y finalmente dL/dW1 y dL/db1. El orden de la opción a es el del forward pass, no el del backward pass.

---
### Pregunta 9

En el Bloque B3 del taller se calcula el accuracy comparando (y_hat > 0.5).astype(int) con y. ¿Qué representa el umbral 0.5 en este contexto?

**Opciones:**
- **A** El valor medio del rango de sigmoid, usado para normalizar las predicciones antes de comparar con las etiquetas.
- **B** El punto de corte de probabilidad a partir del cual la red clasifica una muestra como positiva (clase 1).
- **C** El umbral mínimo de confianza para que la predicción sea válida; predicciones menores se descartan del cálculo.
- **D** La probabilidad a priori que se asume para la clase mayoritaria cuando el dataset está balanceado.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Sigmoid produce valores en (0,1) que representan la probabilidad estimada P(y=1|x). El umbral 0.5 es el punto de decisión estándar: si ŷ≥0.5, la red predice clase 1; si ŷ<0.5, predice clase 0. No es un valor de normalización ni de confianza mínima. En problemas desbalanceados, puede ser conveniente ajustar el umbral a un valor diferente de 0.5 según la curva ROC.

---
### Pregunta 10

En el Bloque B5 se ejecuta el bucle de entrenamiento durante 1000 épocas con tasa de aprendizaje lr=0.1. ¿Cuál sería el efecto de aumentar lr a 10.0?

**Opciones:**
- **A** El modelo convergería 100 veces más rápido sin afectar la calidad final de los pesos aprendidos.
- **B** Los pesos oscilarían o divergirían porque los pasos de actualización superarían el mínimo de la función de pérdida.
- **C** El gradiente descendente se volvería estocástico, eligiendo aleatoriamente la dirección de actualización en cada paso.
- **D** La función de pérdida convergería al mismo mínimo pero con mayor precisión numérica en los pesos.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Con lr=10.0, en cada iteración los pesos se actualizan con pasos enormes: W = W - 10.0 * dL/dW. Si estos pasos superan el ancho del valle del mínimo de la función de pérdida, los pesos 'saltan' de un lado al otro sin converger (oscilación) o incluso se alejan indefinidamente (divergencia). La loss puede crecer en lugar de decrecer. Una lr adecuada requiere que los pasos sean lo suficientemente pequeños para descender gradualmente.

---
### Pregunta 11

Al visualizar la frontera de decisión en el Bloque B6, la red con capa oculta produce una frontera curva. ¿Qué forma produce la red sin capa oculta (modelo logístico directo)?

**Opciones:**
- **A** Una curva parabólica, porque sigmoid transforma la entrada lineal en una curva de segundo grado.
- **B** Una frontera circular, porque la distancia euclidiana al centroide define la región de decisión.
- **C** Una recta (frontera lineal), porque sin capa oculta la predicción es sigmoid(W@x+b), que es lineal en x.
- **D** Una frontera escalonada, porque la discretización del threshold 0.5 produce regiones rectangulares.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Sin capa oculta, el modelo calcula ŷ=sigmoid(W@x+b). La frontera de decisión se define donde ŷ=0.5, es decir sigmoid(W@x+b)=0.5, lo que implica W@x+b=0 — una ecuación lineal en x, que en 2D define una recta. Sigmoid no curva la frontera, solo transforma la salida a probabilidad. La curvatura de la frontera requiere transformaciones no lineales del espacio de entrada, que solo la capa oculta con activación no lineal puede proveer.

---
### Pregunta 12

La línea `dz2 = y_hat - y` en el backward pass es la derivada de la Binary Cross-Entropy con respecto a z2. ¿Qué hace que esta expresión sea computacionalmente conveniente?

**Opciones:**
- **A** Que su valor siempre está acotado entre -1 y 1, evitando el problema de gradiente explosivo sin necesidad de clipping.
- **B** Que su cálculo es O(1) en tiempo constante independientemente del tamaño del batch, mejorando la escalabilidad.
- **C** Que las derivadas de la pérdida y de sigmoid se cancelan algebraicamente, dejando solo la diferencia entre predicción y etiqueta.
- **D** Que permite omitir el cálculo de la derivada de ReLU en la capa oculta, simplificando el backward a una sola operación.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. La derivada de Binary Cross-Entropy respecto a z2 resulta de aplicar la regla de la cadena: dL/dz2 = dL/dŷ · dŷ/dz2 = [-y/ŷ + (1-y)/(1-ŷ)] · ŷ(1-ŷ). Al simplificar algebraicamente, los términos se cancelan y el resultado es simplemente ŷ-y. Esta cancelación elegante evita calcular explícitamente las derivadas de sigmoid y de la cross-entropy por separado, reduciendo operaciones y mejorando la estabilidad numérica.

---
### Pregunta 13

En el Bloque C del taller se replica la red con Keras usando model.add(Dense(2, activation='relu')). ¿Qué ventaja principal ofrece Keras sobre la implementación manual del Bloque B?

**Opciones:**
- **A** Keras calcula automáticamente los gradientes mediante diferenciación automática, eliminando la necesidad de implementar el backward pass manualmente.
- **B** Keras usa exclusivamente GPU para los cálculos, mientras que la implementación manual con NumPy siempre usa CPU.
- **C** Keras garantiza que el modelo nunca sobreajuste porque incluye regularización L2 por defecto en todas las capas.
- **D** Keras ejecuta el entrenamiento en paralelo sobre múltiples datasets simultáneamente para acelerar la convergencia.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. La principal ventaja de frameworks como Keras/TensorFlow es la diferenciación automática (autodiff): el sistema rastrea todas las operaciones del forward pass en un grafo computacional y calcula automáticamente los gradientes para el backward pass. En el Bloque B, el estudiante tuvo que derivar e implementar manualmente cada gradiente (dz2, dW2, db2, da1, dz1, dW1, db1). Con Keras, model.fit() hace todo eso internamente. La opción b es incorrecta: Keras puede ejecutarse en CPU sin GPU.

---
### Pregunta 14

La línea del backward pass `dz1 = da1 * (z1 > 0).astype(float)` implementa la derivada de ReLU. ¿Por qué se usa z1>0 en lugar de a1>0?

**Opciones:**
- **A** Porque a1 ya tiene los valores positivos activados y usarla generaría una doble aplicación de ReLU durante el backward.
- **B** Porque z1>0 identifica qué entradas a ReLU eran positivas (antes de la activación), que es exactamente donde la derivada de ReLU vale 1.
- **C** Porque a1 puede contener valores NaN generados por la exponencial de sigmoid, que contaminan el cálculo del gradiente.
- **D** Porque z1>0 comprueba si la entrada supera el umbral del bias, lo que activa la neurona en la capa oculta.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. La derivada de ReLU es: d/dz[max(0,z)] = 1 si z>0, 0 si z≤0. Para aplicar esta derivada necesitamos saber qué elementos de z1 (la entrada a ReLU, antes de la activación) eran positivos. a1=relu(z1)=max(0,z1) ya tiene los negativos convertidos en 0, por lo que a1>0 y z1>0 darían el mismo resultado booleano, pero usar z1 es semánticamente más correcto: estamos evaluando la derivada en el punto de entrada a la función, no en la salida.

---
### Pregunta 15

En el Bloque B4, el gradiente de W1 se calcula como `dW1 = X.T @ dz1 / m`. ¿Cuál es el propósito de dividir entre m (tamaño del batch)?

**Opciones:**
- **A** Para normalizar el gradiente al rango (0,1) y evitar que los pesos crezcan más allá de 1 durante el entrenamiento.
- **B** Para obtener el gradiente promedio sobre todas las muestras, haciendo la actualización independiente del tamaño del dataset.
- **C** Para transformar el gradiente de forma matricial a forma vectorial compatible con la operación de actualización de pesos.
- **D** Para que la tasa de aprendizaje tenga el mismo efecto sin importar si se usa batch completo o mini-batches de diferente tamaño.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Al procesar m muestras simultáneamente (batch gradient descent), X.T @ dz1 suma los gradientes de las m muestras. Sin dividir entre m, el gradiente efectivo sería m veces mayor cuando se usa el dataset completo que cuando se usa una sola muestra, haciendo que lr tenga un efecto diferente según el tamaño del batch. Dividir entre m promedia el gradiente: cada actualización de peso representa el 'efecto promedio' de un ejemplo de entrenamiento, independientemente de m.

---
### Pregunta 16

Al comparar los resultados del Bloque B (implementación manual) y el Bloque C (Keras), ambos deberían llegar a un accuracy similar (~0.92). Sin embargo, puede haber diferencias menores. ¿Cuál es la causa más probable de pequeñas discrepancias entre ambas implementaciones?

**Opciones:**
- **A** Keras utiliza una función de pérdida diferente a Binary Cross-Entropy, lo que modifica la dirección de los gradientes calculados.
- **B** Diferente inicialización aleatoria de pesos: cada ejecución parte de pesos distintos y puede converger a mínimos locales ligeramente diferentes.
- **C** Keras no admite activación ReLU en capas ocultas, por lo que usa una aproximación polinómica que genera resultados distintos.
- **D** La normalización Min-Max aplicada en el Bloque B no es compatible con el optimizador Adam usado internamente por Keras.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Las redes neuronales se inicializan con pesos aleatorios (np.random.randn en el Bloque B, inicialización Glorot/He en Keras por defecto). Diferentes semillas aleatorias llevan a diferentes pesos iniciales, lo que puede resultar en convergencia a mínimos locales distintos con pequeñas diferencias en accuracy final. Para resultados reproducibles se debe fijar np.random.seed() y tf.random.set_seed(). La opción c es incorrecta: Keras sí admite 'relu' como parámetro de activación.

---
### Pregunta 17

En el Bloque B5, después de cada iteración se ejecuta la actualización: W1 -= lr * dW1. ¿Qué significa el operador -= en este contexto?

**Opciones:**
- **A** Resta el gradiente completo de W1, reiniciando los pesos a cero antes de cada actualización.
- **B** Actualiza W1 en su lugar restándole lr*dW1, equivalente a W1 = W1 - lr*dW1.
- **C** Aplica el gradiente con signo negativo para escalar la función de pérdida en dirección contraria.
- **D** Disminuye la tasa de aprendizaje lr en cada iteración multiplicándola por el gradiente dW1.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. El operador -= es la asignación compuesta de sustracción: W1 -= lr * dW1 es exactamente equivalente a W1 = W1 - lr * dW1. Esto implementa el paso de gradiente descendente: los pesos se mueven en la dirección opuesta al gradiente (que apunta hacia el máximo de la función), con magnitud lr*dW1. No reinicia los pesos ni modifica lr. Es una operación in-place que modifica el array NumPy directamente sin crear una copia.

---
### Pregunta 18

El taller muestra que la red sin capa oculta (Bloque A) alcanza accuracy=0.705. ¿Qué significa que un modelo tenga accuracy=0.705 con datos binarios?

**Opciones:**
- **A** Que el modelo clasifica correctamente el 70.5% de las muestras del conjunto evaluado.
- **B** Que la función de pérdida tiene valor 0.705, indicando que el modelo está al 70.5% de convergencia.
- **C** Que la probabilidad promedio de las predicciones sigmoid es 0.705, reflejando sesgo hacia la clase positiva.
- **D** Que el modelo comete 70.5 errores por cada 100 predicciones, equivalente a un error rate del 29.5%.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. Accuracy = (predicciones correctas) / (total de muestras). Un accuracy=0.705 significa que el 70.5% de las muestras fueron clasificadas correctamente (es decir, (y_hat>0.5)==y). La opción d confunde accuracy con error rate: si accuracy=0.705, entonces error rate=1-0.705=0.295=29.5% (el modelo falla en el 29.5%, no en el 70.5%).

---
### Pregunta 19

En el Bloque B2 se inicializan los sesgos con np.zeros. ¿Por qué es aceptable inicializar los sesgos en cero aunque los pesos se inicialicen aleatoriamente?

**Opciones:**
- **A** Porque el sesgo no afecta el gradiente durante el backpropagation y solo ajusta la constante de desplazamiento al final.
- **B** Porque el sesgo es un escalar en cada neurona y su simetría no importa; la ruptura de simetría la proveen los pesos aleatorios.
- **C** Porque NumPy inicializa automáticamente los sesgos en su valor óptimo antes de comenzar el entrenamiento.
- **D** Porque inicializar sesgos en cero equivale a no tener sesgo, simplificando el modelo para facilitar la convergencia.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. El problema de simetría afecta a los pesos porque múltiples neuronas en la misma capa reciben las mismas entradas y, si tienen los mismos pesos, aprenden lo mismo. Los sesgos no tienen este problema: cada neurona tiene su propio sesgo independiente, y aunque todos empiecen en 0, los gradientes distintos (por los pesos aleatorios diferentes) los actualizarán a valores diferentes desde la primera iteración. Inicializar b=0 es práctica estándar y funciona correctamente.

---
### Pregunta 20

Al visualizar la curva de pérdida en el Bloque B5, se observa que la loss decrece rápidamente en las primeras épocas y luego se aplana. ¿Cuál es el nombre de este fenómeno y qué indica?

**Opciones:**
- **A** Plateau de gradiente — indica que los pesos alcanzaron el valor máximo permitido por la inicialización aleatoria.
- **B** Convergencia — el gradiente descendente está encontrando un mínimo (local o global) donde los gradientes son cercanos a cero.
- **C** Saturación de sigmoid — la función de activación saturó todos los pesos, bloqueando las actualizaciones futuras.
- **D** Overfitting temprano — el modelo memorizó el training set en las primeras épocas y dejó de generalizar.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. El aplanamiento de la curva de pérdida indica convergencia: en zonas cercanas al mínimo de la función de pérdida, los gradientes son pequeños (la pendiente es casi cero), por lo que las actualizaciones de peso son ínfimas y la loss ya no disminuye apreciablemente. No indica que el modelo saturó ni que sobreajustó; simplemente que el gradiente descendente encontró un punto de equilibrio. Para detectar overfitting se necesita monitorizar también la loss de validación.

---
### Pregunta 21

La operación `z1 = W1 @ x + b1` usa el operador @ de NumPy. Si W1 tiene forma (2,2) y x tiene forma (2,100) representando 100 muestras, ¿cuál es la forma de z1?

**Opciones:**
- **A** (2,100), porque la multiplicación matricial (2,2)@(2,100) produce (2,100).
- **B** (100,2), porque NumPy transpone automáticamente el resultado para mantener las muestras en filas.
- **C** (4,100), porque la multiplicación combina todas las combinaciones de las 2 neuronas con las 2 entradas.
- **D** (2,2), porque el resultado siempre hereda la forma de la primera matriz en la operación matricial.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. La multiplicación matricial (m,n)@(n,p) produce (m,p). Con W1(2,2) y x(2,100): el resultado z1 tiene forma (2,100). Cada columna de z1 corresponde a las activaciones pre-ReLU de las 2 neuronas ocultas para una muestra específica. Luego al sumar b1 de forma (2,), NumPy hace broadcasting: b1 se suma a cada una de las 100 columnas, manteniendo la forma (2,100).

---
### Pregunta 22

En el Bloque C se usa model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy']). ¿Qué ventaja tiene Adam sobre el gradiente descendente clásico (SGD) usado en el Bloque B?

**Opciones:**
- **A** Adam garantiza encontrar el mínimo global de la función de pérdida, mientras que SGD solo encuentra mínimos locales.
- **B** Adam adapta la tasa de aprendizaje individualmente para cada parámetro usando momentos de primer y segundo orden, convergiendo más rápido.
- **C** Adam elimina la necesidad de normalizar los datos de entrada porque ajusta automáticamente la escala de cada característica.
- **D** Adam ejecuta el backpropagation en paralelo sobre múltiples CPUs, reduciendo el tiempo de entrenamiento en factor O(n).

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Adam (Adaptive Moment Estimation) mantiene dos momentos para cada parámetro: la media de los gradientes recientes (m, primer momento) y la varianza de los gradientes recientes (v, segundo momento). La tasa de aprendizaje efectiva se ajusta por parámetro como lr/√v, siendo mayor para parámetros con gradientes pequeños y menor para parámetros con gradientes grandes. Esto produce convergencia más rápida y robusta que SGD puro con lr fijo. La opción a es incorrecta: ningún optimizador garantiza mínimo global en redes no convexas.

---
### Pregunta 23

El Bloque B implementa batch gradient descent (procesa todas las muestras en cada iteración). ¿Cuál es la principal desventaja de este enfoque frente a mini-batch gradient descent?

**Opciones:**
- **A** Batch GD no puede usar la función Binary Cross-Entropy porque esta requiere procesar las muestras de una en una.
- **B** Batch GD requiere cargar todo el dataset en memoria y calcula gradientes más lentos cuando el dataset es muy grande.
- **C** Batch GD produce gradientes ruidosos que impiden la convergencia cuando el learning rate es menor a 0.01.
- **D** Batch GD solo funciona con funciones de activación lineales y no admite ReLU en capas ocultas.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Batch GD calcula el gradiente sobre todas las m muestras en cada paso. Para datasets grandes (millones de ejemplos), esto implica: (1) cargar todo el dataset en RAM en cada iteración, lo que puede ser imposible, y (2) realizar cálculos costosos antes de hacer una sola actualización de pesos. Mini-batch GD divide el dataset en subconjuntos (batches de 32, 64, 128 muestras) y actualiza los pesos con más frecuencia, usando menos memoria y convergiendo más rápido en la práctica.

---
### Pregunta 24

Al comparar la red 2→2→1 con la red 3→3→1 en el taller, ¿cuál sería el efecto esperado de agregar más neuronas a las capas ocultas en datos relativamente simples?

**Opciones:**
- **A** El accuracy siempre aumenta porque más neuronas implican más capacidad de representación sin ningún costo.
- **B** Mayor capacidad puede mejorar el ajuste en entrenamiento, pero puede causar overfitting si el dataset es pequeño.
- **C** El modelo se vuelve más lento de entrenar pero sin ningún riesgo adicional de sobreajuste al dataset de entrenamiento.
- **D** Más neuronas hacen que la red aprenda más lento porque los gradientes deben propagarse por más conexiones.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Aumentar el número de neuronas incrementa la capacidad del modelo (más parámetros). En datos simples o datasets pequeños, esta mayor capacidad puede llevar a overfitting: el modelo memoriza el training set en lugar de aprender patrones generalizables, resultando en alta accuracy de entrenamiento pero baja accuracy de validación/test. El equilibrio entre capacidad del modelo y tamaño del dataset es fundamental. La opción a ignora el problema de overfitting.

---
### Pregunta 25

En el Bloque B se imprime la pérdida cada 100 épocas con `if epoch % 100 == 0`. ¿Qué hace el operador % en Python?

**Opciones:**
- **A** Calcula el porcentaje de epoch respecto a 100, mostrando el progreso en términos porcentuales del entrenamiento.
- **B** Calcula el módulo (resto de la división entera): epoch % 100 == 0 es True cuando epoch es múltiplo de 100.
- **C** Verifica si epoch es mayor o igual a 100, activando el monitoreo solo después de las primeras 100 épocas.
- **D** Divide epoch entre 100 con decimales y compara con 0.0, siendo True solo cuando epoch vale exactamente 0.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. % es el operador módulo en Python: devuelve el resto de la división entera. 100%100=0 (True), 200%100=0 (True), 150%100=50 (False). La condición epoch%100==0 se cumple exactamente cuando epoch es múltiplo de 100: 0, 100, 200, ..., 1000. Esto permite imprimir el progreso del entrenamiento solo 11 veces durante las 1000 épocas en lugar de imprimirlo en cada iteración (que llenarían la pantalla de output).

---
### Pregunta 26

La función sigmoid se usa como activación de salida para clasificación binaria. ¿Por qué NO se usa sigmoid como activación de las capas ocultas en redes profundas modernas?

**Opciones:**
- **A** Porque sigmoid produce valores en (0,1) que son demasiado pequeños para servir como entrada a las siguientes capas.
- **B** Porque sigmoid satura para valores grandes de |z|, generando gradientes cercanos a cero que impiden el aprendizaje en capas profundas.
- **C** Porque sigmoid es computacionalmente más costosa que ReLU al requerir el cálculo de una exponencial en cada neurona.
- **D** Porque sigmoid no es diferenciable en z=0, lo que rompe el backward pass cuando los valores pre-activación son cercanos a cero.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Este es el problema del gradiente evanescente (vanishing gradient). Sigmoid satura cuando |z|>>0: su derivada σ'(z)=σ(z)(1-σ(z)) alcanza máximo 0.25 en z=0 y se acerca a 0 para z grandes. En redes profundas, el gradiente se multiplica por σ'(z) en cada capa hacia atrás: con 8 capas, el gradiente puede reducirse a (0.25)^8 ≈ 0.000015, haciendo que las primeras capas casi no aprendan. ReLU no tiene este problema porque su derivada es 1 para z>0.

---
### Pregunta 27

En el Bloque B1 se genera el dataset con make_classification de sklearn. ¿Qué parámetro controla la dificultad del problema de clasificación generado?

**Opciones:**
- **A** n_samples controla la dificultad porque más muestras hacen el problema más complejo para el clasificador.
- **B** class_sep controla la separación entre clases: valores bajos acercan las clases, aumentando la dificultad de clasificación.
- **C** random_state controla la dificultad porque diferentes semillas generan distribuciones de diferente complejidad intrínseca.
- **D** n_features controla la dificultad exclusivamente porque más características siempre implican un espacio de búsqueda más complejo.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. El parámetro class_sep (separación de clases) en make_classification controla cuán separadas están las distribuciones de cada clase: con class_sep=2.0 las clases están bien diferenciadas y son fáciles de clasificar; con class_sep=0.5 las distribuciones se solapan mucho y el problema es difícil. n_samples solo afecta la cantidad de datos disponibles, no la complejidad intrínseca del patrón. random_state asegura reproducibilidad pero no cambia la complejidad.

---
### Pregunta 28

Al usar model.summary() en Keras para la red 2→2→1, el número total de parámetros mostrado debería ser 9. ¿Cómo los cuenta Keras internamente?

**Opciones:**
- **A** Cuenta solo las conexiones entre capas (aristas del grafo), excluyendo los sesgos por considerarlos parámetros auxiliares.
- **B** Suma los parámetros de cada capa: Dense(2) tiene 2×2+2=6 (pesos+sesgos), Dense(1) tiene 1×2+1=3 — total: 9.
- **C** Multiplica el número de neuronas de cada capa y suma el resultado: 2×2×1=4 pesos, más 5 sesgos globales = 9.
- **D** Suma los parámetros de las capas de activación (relu y sigmoid) más los pesos de la capa densa principal.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Keras cuenta los parámetros por capa. La primera capa Dense(2) recibe 2 inputs y tiene 2 neuronas: 2×2=4 pesos + 2 sesgos = 6 parámetros. La segunda capa Dense(1) recibe 2 inputs (de las 2 neuronas ocultas) y tiene 1 neurona: 1×2=2 pesos + 1 sesgo = 3 parámetros. Total: 6+3=9. Exactamente el mismo cálculo manual del Bloque B. Las funciones de activación (relu, sigmoid) no tienen parámetros propios.

---
### Pregunta 29

En el taller se usa train_test_split con test_size=0.2. Si el dataset tiene 500 muestras, ¿cuántas muestras quedan para entrenamiento y para test?

**Opciones:**
- **A** 400 entrenamiento, 100 test.
- **B** 100 entrenamiento, 400 test.
- **C** 250 entrenamiento, 250 test.
- **D** 480 entrenamiento, 20 test.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. test_size=0.2 significa que el 20% de las muestras se reservan para test y el 80% para entrenamiento. Con 500 muestras: test=500×0.2=100 muestras, train=500×0.8=400 muestras. La división 80/20 es convencional para datasets medianos. La opción b invierte la proporción. La opción d correspondería a test_size=0.04 (4%).

---
### Pregunta 30

Tras entrenar en el Bloque C con Keras durante 100 épocas, si la loss de entrenamiento sigue bajando pero la loss de validación comienza a subir, ¿cómo se llama este fenómeno y cuál es la señal de acción?

**Opciones:**
- **A** Underfitting — se debe aumentar el número de capas o neuronas para darle más capacidad al modelo.
- **B** Overfitting — el modelo está memorizando el training set; se recomienda aplicar regularización, dropout o reducir la complejidad.
- **C** Convergencia prematura — el learning rate es demasiado bajo; se debe aumentar para escapar del mínimo local.
- **D** Gradient explosion — los pesos están divergiendo; se debe aplicar gradient clipping antes de cada actualización.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Cuando la loss de entrenamiento disminuye pero la loss de validación aumenta, el modelo está sobreajustando (overfitting): ha memorizado los patrones específicos del training set incluyendo el ruido, y ya no generaliza bien a datos nuevos. Las soluciones incluyen: regularización L1/L2, Dropout (desactivar neuronas aleatoriamente), reducir la arquitectura (menos capas/neuronas), Early Stopping (detener el entrenamiento cuando la val_loss deja de mejorar), o aumentar los datos de entrenamiento.

---
### Pregunta 31

¿Cuál de las siguientes describe con mayor precisión el rol de una red neuronal artificial en el contexto del aprendizaje supervisado?

**Opciones:**
- **A** Un sistema de reglas if-else anidadas que el programador codifica manualmente para clasificar entradas.
- **B** Un modelo paramétrico que aprende una función f(x)≈y ajustando pesos y sesgos iterativamente para minimizar el error entre predicción y etiqueta.
- **C** Un algoritmo que memoriza el training set completo y recupera la etiqueta más cercana para cada nueva entrada.
- **D** Un grafo de decisión donde cada nodo aplica un umbral fijo sobre una sola característica de entrada.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Una red neuronal es un aproximador de funciones: dados pares (x, y), ajusta sus parámetros (W, b) mediante backpropagation y descenso de gradiente para que f(x;W,b)≈y. No usa reglas manuales (eso sería un sistema experto), no memoriza (eso sería KNN con k=1) ni divide por umbrales fijos en un único atributo (eso sería un árbol de decisión). Su potencia reside en aprender representaciones jerárquicas a través de capas.

---
### Pregunta 32

Un perceptrón simple recibe dos características (x1, x2) y produce una salida binaria. ¿Cuál de las siguientes afirmaciones describe correctamente su limitación fundamental?

**Opciones:**
- **A** Solo puede procesar una característica a la vez porque su vector de pesos tiene dimensión 1.
- **B** No puede representar ninguna función booleana, ni siquiera las más simples como AND u OR.
- **C** Solo puede aprender fronteras de decisión lineales, siendo incapaz de resolver problemas como XOR sin capas adicionales.
- **D** No admite función de activación sigmoid porque su salida está restringida a valores enteros {0, 1}.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. El perceptrón simple calcula ŷ = f(W·x + b), que define una frontera lineal (un hiperplano). Puede resolver AND y OR porque estos son linealmente separables, pero no puede resolver XOR, que requiere una frontera no lineal (curva). Agregar capas ocultas con activaciones no lineales supera esta limitación. La opción b es incorrecta: el perceptrón sí representa AND y OR. La opción a es incorrecta: W puede tener cualquier dimensión.

---
### Pregunta 33

Al diseñar una red neuronal para predecir el precio de una vivienda (valor continuo), ¿cuál es la configuración correcta de la capa de salida y por qué?

**Opciones:**
- **A** 1 neurona con activación sigmoid, porque sigmoid acota la salida en (0,1) normalizando el precio.
- **B** 2 neuronas con softmax, porque el precio se modela como una distribución de probabilidad entre dos categorías.
- **C** 1 neurona sin activación (lineal), porque el precio puede tomar cualquier valor real positivo sin restricciones de rango.
- **D** 1 neurona con ReLU, porque ReLU garantiza salidas positivas y los precios siempre son no negativos.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Para regresión (predicción de un valor continuo), la capa de salida usa 1 neurona sin función de activación (activación lineal), permitiendo que ŷ ∈ (-∞, +∞). Si los precios son siempre positivos, ReLU (opción d) podría usarse, pero la convención general es activación lineal. Sigmoid (opción a) restringe la salida a (0,1), inútil para precios en miles de dólares. Softmax (opción b) es para clasificación multiclase, no para regresión.

---
### Pregunta 34

Al diseñar la arquitectura de una red neuronal, ¿cuáles son los hiperparámetros de arquitectura que el diseñador debe decidir ANTES del entrenamiento?

**Opciones:**
- **A** Los valores de W1, b1, W2, b2 — porque determinan la capacidad del modelo desde el inicio.
- **B** El número de capas ocultas, el número de neuronas por capa, las funciones de activación y la función de pérdida.
- **C** La tasa de aprendizaje, el número de épocas y el tamaño del batch — porque controlan el proceso de optimización.
- **D** El accuracy de entrenamiento y la loss final — porque son los objetivos que definen la arquitectura óptima.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Los hiperparámetros de arquitectura son decisiones de diseño previas al entrenamiento: (1) número de capas ocultas (profundidad), (2) número de neuronas por capa (ancho), (3) función de activación por capa (ReLU, Tanh, Sigmoid, etc.), (4) función de activación de salida y número de neuronas de salida según la tarea. Los valores de W y b (opción a) son parámetros que el modelo aprende. La tasa de aprendizaje y épocas (opción c) son hiperparámetros de entrenamiento (optimización), no de arquitectura.

---
### Pregunta 35

En la notación W1 y b1 de una red neuronal, ¿cuál es la diferencia conceptual entre un peso (W) y un sesgo (b)?

**Opciones:**
- **A** W escala las entradas según su importancia relativa; b desplaza la activación permitiendo que la neurona active incluso cuando todas las entradas son cero.
- **B** W controla la velocidad de aprendizaje de cada neurona; b almacena el error acumulado de las iteraciones anteriores.
- **C** W y b son equivalentes: ambos son multiplicadores lineales de las entradas que se optimizan con gradiente descendente.
- **D** W define el umbral de activación de cada neurona; b amplifica la señal de entrada antes de aplicar la función de activación.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. Los pesos W (weight) determinan cuánto contribuye cada entrada xi a la activación de la neurona: zi = Σ(Wij · xj) + bi. Un peso grande indica que esa característica es muy relevante para la neurona. El sesgo b (bias) es una constante añadida que permite desplazar la función de activación horizontalmente: sin b, la neurona solo puede activarse cuando Σ(Wij·xj)>0, limitando los patrones que puede aprender. Con b, la neurona puede activarse incluso con entradas nulas si b>0.

