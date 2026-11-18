# Banco de Preguntas: Semana 11 · Funciones de Activación

> Total de preguntas: 35

---
### Pregunta 1

¿Cuál es el rango de salida de la función Sigmoid σ(z) = 1/(1+e^{-z})?

**Opciones:**
- **A** (-1, 1), porque está centrada en cero como la función Tanh.
- **B** (0, 1), porque los límites son asintóticos y nunca se alcanzan para z finito.
- **C** [0, 1], porque los valores extremos sí se alcanzan cuando z=±∞.
- **D** (-∞, +∞), porque es equivalente a una función lineal sin acotamiento.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Sigmoid produce valores en el intervalo abierto (0, 1). Cuando z→-∞, σ→0 sin alcanzar 0; cuando z→+∞, σ→1 sin alcanzar 1. Los límites son asintóticos. La opción c usa corchetes cerrados [0,1] que implican que los extremos se alcanzan, lo cual es incorrecto. La opción a describe el rango de Tanh. La opción d describe una función sin activación.

---
### Pregunta 2

El taller define `def d_sigmoid(z): s = sigmoid(z); return s * (1 - s)`. ¿Cuál es el valor máximo que puede alcanzar esta derivada?

**Opciones:**
- **A** 1.0, que se alcanza cuando z=0 y sigmoid(0)=1.
- **B** 0.50, que se alcanza cuando sigmoid(z)=1 exactamente.
- **C** 0.25, que se alcanza en z=0 donde sigmoid(0)=0.5.
- **D** 0.75, que se alcanza cuando la función no ha saturado aún.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. La derivada de sigmoid es s·(1-s). Para maximizarla, se deriva respecto a s y se iguala a cero: d/ds[s(1-s)] = 1-2s = 0 → s=0.5. Esto ocurre cuando z=0 (sigmoid(0)=0.5), dando 0.5·0.5=0.25. Este valor máximo relativamente pequeño es la causa del gradiente evanescente: en 8 capas el gradiente puede reducirse a 0.25^8 ≈ 0.000015. La opción a confunde el valor de sigmoid(0)=0.5 con la derivada.

---
### Pregunta 3

En el experimento del Taller 16 con el dataset de estudiantes (arquitectura 2→2→1), ¿qué función de activación obtuvo el mayor accuracy?

**Opciones:**
- **A** Tanh con accuracy = 0.780.
- **B** Sigmoid con accuracy = 0.920.
- **C** ReLU con accuracy = 0.920.
- **D** Leaky ReLU con accuracy = 0.920.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. El ranking exacto en el dataset de estudiantes fue: ReLU (0.920) > Leaky ReLU (0.900) > Sigmoid (0.780) > Ninguna/lineal (0.735) > Tanh (0.665). Aunque tanto ReLU como Leaky ReLU son opciones plausibles con valores similares, el ganador exacto con 0.920 es ReLU; Leaky ReLU obtuvo 0.900. La opción b asigna 0.920 a Sigmoid cuando en realidad Sigmoid obtuvo solo 0.780.

---
### Pregunta 4

Una red neuronal sin función de activación en sus capas ocultas (activación lineal) colapsa algebraicamente. Según el taller, el resultado equivalente es una sola capa con:

**Opciones:**
- **A** W*=W1@W2 y b*=W1@b2+b1, invirtiendo el orden de multiplicación.
- **B** W*=W2@W1 y b*=W2@b1+b2, combinando ambas capas en una sola transformación lineal.
- **C** W*=W2+W1 y b*=b1+b2, sumando los parámetros de ambas capas.
- **D** W*=W2@W1 y b*=b1+b2, combinando los sesgos sin la transformación de W2.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Sin activación no lineal: z2 = W2(W1·x + b1) + b2 = (W2@W1)·x + (W2@b1 + b2). Esto equivale a W*·x + b* con W*=W2@W1 y b*=W2@b1+b2. El taller verificó esto con np.allclose(), obteniendo W*=[[5. 5.]] y b*=[-6.8]. La opción a invierte el orden de multiplicación (W1@W2 ≠ W2@W1). La opción d olvida que b2 se suma DESPUÉS de transformar b1 por W2.

---
### Pregunta 5

El Taller 16 implementa Leaky ReLU como `np.where(z > 0, z, alpha * z)` con alpha=0.1. ¿Qué retorna para z = np.array([-3.0, 0.0, 5.0])?

**Opciones:**
- **A** [-3.0, 0.0, 5.0], porque Leaky ReLU no modifica ningún valor.
- **B** [-0.3, 0.0, 5.0], porque para z=-3.0 retorna 0.1×(-3.0)=-0.3; z=0.0 retorna 0.0; z=5.0 retorna 5.0.
- **C** [-0.3, 0.1, 5.0], porque z=0.0 no es estrictamente positivo y retorna alpha=0.1.
- **D** [0.0, 0.0, 5.0], porque valores negativos y cero se anulan como en ReLU estándar.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. np.where(z>0, z, alpha*z): para z=-3.0 (no >0) → alpha*z = 0.1×(-3.0) = -0.3; para z=0.0 (no >0) → alpha*z = 0.1×0.0 = 0.0; para z=5.0 (>0) → z = 5.0. Resultado: [-0.3, 0.0, 5.0]. La opción c es incorrecta: para z=0.0, alpha*z = 0.1×0 = 0.0, no alpha=0.1. La opción d describe ReLU estándar, no Leaky ReLU.

---
### Pregunta 6

¿Cuál es la derivada de Tanh implementada en el Taller 16?

**Opciones:**
- **A** `1 + np.tanh(z)**2`, con signo positivo antes del cuadrado.
- **B** `np.tanh(z) * (1 - np.tanh(z))`, análoga a la derivada de Sigmoid.
- **C** `1 - np.tanh(z)**2`, que se maximiza en z=0 con valor 1.0.
- **D** `(1 - np.tanh(z)) * (1 + np.tanh(z))`, expresión equivalente pero diferente a la del taller.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. La derivada de tanh(z) es 1 - tanh²(z), implementada en el taller como `return 1 - np.tanh(z)**2`. Su valor máximo es 1.0 (cuando z=0, tanh(0)=0, dando 1-0=1). Nótese que las opciones c y d son matemáticamente equivalentes (diferencia de cuadrados), pero la implementación exacta del taller es la opción c. La opción a tiene signo incorrecto. La opción b corresponde a la derivada de Sigmoid, no de Tanh.

---
### Pregunta 7

La función `forward_act` del Taller 16 recibe un parámetro `activacion` que cambia la función usada en la capa oculta. ¿Qué función de activación usa SIEMPRE la capa de SALIDA, independientemente del parámetro?

**Opciones:**
- **A** La misma función pasada como parámetro, para mantener consistencia entre capas.
- **B** ReLU, porque produce valores positivos compatibles con la clasificación binaria.
- **C** Sigmoid, porque el problema es clasificación binaria y necesita una probabilidad en (0,1).
- **D** Softmax, porque normaliza la salida a una distribución de probabilidad que suma 1.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. En el código del taller, la última línea siempre es `return sigmoid(z2)`, independientemente del parámetro `activacion` pasado. La clasificación binaria requiere una sola probabilidad en (0,1), que solo Sigmoid proporciona con 1 neurona de salida. Softmax se usaría para clasificación multiclase con K neuronas de salida, donde las probabilidades deben sumar 1 entre K clases. ReLU no produce probabilidades acotadas.

---
### Pregunta 8

El taller describe el problema del 'Dying ReLU'. ¿Cuándo ocurre exactamente este problema?

**Opciones:**
- **A** Cuando la derivada de ReLU es siempre 1, saturando el gradiente hacia arriba de forma indefinida.
- **B** Cuando una neurona recibe entradas que siempre producen z≤0, haciendo que su gradiente sea 0 y nunca actualice sus pesos.
- **C** Cuando una neurona recibe entradas que siempre producen z>0, haciendo que su derivada sea 1 y el gradiente explote.
- **D** Cuando el learning rate es demasiado alto y los pesos oscilan entre valores positivos y negativos indefinidamente.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. El Dying ReLU ocurre cuando una neurona recibe entradas que siempre producen z≤0: en esa región la derivada de ReLU es 0, el gradiente no se propaga hacia atrás, y los pesos nunca se actualizan. La neurona queda 'muerta' de forma permanente. En el taller, con ReLU en el dataset de crédito, h1 tenía 105/200=52.5% de activaciones en cero. La solución es Leaky ReLU: para z≤0 retorna alpha·z (≠0), manteniendo un gradiente no nulo.

---
### Pregunta 9

En el dataset de crédito (3→3→1) del Taller 16, ¿cuántas neuronas de la capa oculta estaban 'apagadas' (output=0) cuando se usó Leaky ReLU con alpha=0.1?

**Opciones:**
- **A** h1=105, h2=102, h3=109 — mismo resultado que con ReLU estándar.
- **B** h1=52, h2=51, h3=54 — exactamente la mitad respecto a ReLU.
- **C** h1=0, h2=0, h3=0 — ninguna neurona quedó apagada.
- **D** h1=1, h2=0, h3=1 — casi ninguna, pero no exactamente cero.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Con Leaky ReLU, el conteo de neuronas apagadas fue 0 en las tres neuronas ocultas. Esto es porque Leaky ReLU nunca devuelve exactamente 0: para z≤0 retorna alpha·z = 0.1·z, que es distinto de cero mientras z≠0. La opción a corresponde a los resultados de ReLU estándar en ese mismo dataset. La opción b no tiene sustento numérico. Esta es la ventaja clave de Leaky ReLU: elimina completamente el Dying ReLU.

---
### Pregunta 10

¿Cuál es la fórmula de la función Softmax para el elemento i de un vector z?

**Opciones:**
- **A** e^zi / max(e^zj para j en todos), normalizando por el máximo exponencial.
- **B** zi / Σzj, normalizando linealmente cada logit por la suma total.
- **C** e^zi / Σe^zj, donde la suma recorre todos los elementos j del vector.
- **D** log(e^zi) / Σlog(e^zj), aplicando logaritmo antes de normalizar.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Softmax(zi) = e^zi / Σe^zj — se exponencia cada logit y se divide entre la suma de todos los exponenciales. Esto garantiza: (1) todas las salidas son positivas (e^z > 0), y (2) todas las salidas suman 1 (es una distribución de probabilidad). La opción a usa el máximo en el denominador, que no es Softmax. La opción b es normalización lineal simple y no garantiza positividad ni suma=1 si hay logits negativos.

---
### Pregunta 11

El taller implementa Softmax como `def softmax(z): e = np.exp(z - z.max()); return e / e.sum()`. ¿Por qué se resta `z.max()` antes de exponenciar?

**Opciones:**
- **A** Para que la suma de probabilidades resultante sea exactamente 1.0 en todos los casos posibles.
- **B** Para cambiar la distribución de probabilidad y favorecer la clase con mayor logit.
- **C** Para evitar desbordamiento numérico (overflow), ya que e^z puede ser enorme para z muy grandes.
- **D** Para centrar los logits en 0 y mejorar la precisión del gradiente durante el backpropagation.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. e^z puede desbordarse (overflow) para z muy grandes, generando Inf en Python/NumPy. Al restar z.max(), el exponente más alto se convierte en e^0=1, y todos los demás son <1, eliminando el riesgo de overflow. Matemáticamente, e^(zi-max)/Σe^(zj-max) = e^zi/Σe^zj (el max se cancela en numerador y denominador), así que el resultado no cambia. La suma de probabilidades siempre es 1 sin este truco también (descartando a).

---
### Pregunta 12

En el taller se aplica Softmax a `logits_riesgo = np.array([-1.0, 0.5, 2.5])`. ¿Cuál opción describe correctamente el resultado aproximado?

**Opciones:**
- **A** [0.333, 0.333, 0.333] — distribución uniforme porque Softmax normaliza igual.
- **B** [0.858, 0.116, 0.026] — el primer elemento domina porque tiene el logit menor.
- **C** [0.026, 0.116, 0.858] — el tercer elemento (2.5) domina con ~85.8% de probabilidad.
- **D** [0.116, 0.858, 0.026] — el segundo elemento (0.5) domina por ser intermedio.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Con logits [-1.0, 0.5, 2.5], el tercer elemento (2.5) es mucho mayor que los demás. Softmax amplifica estas diferencias mediante la exponencial: e^2.5 ≈ 12.18, e^0.5 ≈ 1.65, e^(-1) ≈ 0.37. Total ≈ 14.2. Probabilidades: [0.37/14.2, 1.65/14.2, 12.18/14.2] ≈ [0.026, 0.116, 0.858]. La distribución uniforme solo ocurre cuando todos los logits son iguales. Softmax preserva el orden relativo de los logits.

---
### Pregunta 13

¿Cuál es el rango de salida de la función Tanh?

**Opciones:**
- **A** (0, 1), igual que Sigmoid pero reescalada.
- **B** [-1, 1], incluyendo los extremos exactamente en sus límites.
- **C** (-1, 1), intervalo abierto con límites asintóticos que no se alcanzan.
- **D** (-∞, +∞), porque puede tomar cualquier valor real.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Tanh produce valores en el intervalo abierto (-1, 1); cuando z→-∞, tanh→-1 sin alcanzarlo; cuando z→+∞, tanh→1 sin alcanzarlo. La opción b usa corchetes cerrados [-1,1], lo que implicaría que los extremos se alcanzan para algún z finito, lo cual es incorrecto. Tanh es una versión reescalada de Sigmoid: tanh(z) = 2σ(2z) - 1. La opción a describe el rango de Sigmoid.

---
### Pregunta 14

En el experimento del Taller 16 con el dataset de crédito (3→3→1), ¿qué función de activación tuvo el PEOR desempeño?

**Opciones:**
- **A** Ninguna (lineal) con accuracy = 0.735.
- **B** Sigmoid con accuracy = 0.800.
- **C** Tanh con accuracy = 0.745.
- **D** Ninguna (lineal) con accuracy = 0.795.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. En el dataset de crédito, Tanh obtuvo el menor accuracy: 0.745. El ranking fue: ReLU (0.850) > Leaky ReLU (0.830) > Sigmoid (0.800) > Ninguna/lineal (0.795) > Tanh (0.745). Atención: en el dataset de estudiantes los valores son distintos (Tanh: 0.665, Ninguna: 0.735). Las opciones a y d confunden los valores de uno con otro dataset. En crédito, la activación lineal obtuvo 0.795, superior a Tanh.

---
### Pregunta 15

Si se apilan 8 capas con función Sigmoid, ¿cuál es el límite superior aproximado por el que el gradiente se multiplica al atravesar todas las capas hacia atrás?

**Opciones:**
- **A** 0.25^8 ≈ 0.000015 — el gradiente prácticamente desaparece.
- **B** 0.50^8 ≈ 0.004 — reducción moderada pero controlable.
- **C** 1.0^8 = 1.0 — sin reducción, igual que ReLU.
- **D** 0.25^4 ≈ 0.004 — solo se aplica el límite en la mitad de las capas.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. La derivada máxima de Sigmoid es 0.25. Durante backpropagation, el gradiente se multiplica por la derivada de la función de activación en cada capa. Con 8 capas de Sigmoid, en el peor caso el gradiente total se multiplica por 0.25^8 ≈ 1.5×10^{-5}. Este valor extremadamente pequeño hace que las primeras capas reciban gradientes casi nulos y no aprendan, lo que se conoce como gradiente evanescente (vanishing gradient).

---
### Pregunta 16

Para un problema de regresión continua donde la salida puede tomar cualquier valor real, ¿qué función de activación se recomienda en la capa de salida?

**Opciones:**
- **A** Sigmoid, porque acota la salida en (0,1) y facilita la interpretación.
- **B** Softmax, porque normaliza las salidas a una distribución de probabilidad.
- **C** Ninguna (activación lineal), porque permite cualquier valor real de salida en (-∞,+∞).
- **D** ReLU, porque produce valores positivos y acelera la convergencia del gradiente.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Para regresión continua se usa activación lineal (ninguna), permitiendo que la salida tome cualquier valor real en (-∞,+∞). Sigmoid acota a (0,1) y no es adecuada salvo que la variable objetivo esté en ese rango. Softmax produce distribución de probabilidad, solo para clasificación multiclase. ReLU acotaría la salida a [0,+∞), útil si la variable objetivo es siempre positiva (como precios o temperaturas absolutas), pero no para valores reales arbitrarios.

---
### Pregunta 17

El taller define `def d_relu(z): return (z > 0).astype(float)`. Para z = np.array([-2.0, 0.0, 3.0]), ¿qué retorna esta función?

**Opciones:**
- **A** [-1.0, 0.0, 1.0] — retorna -1 para negativos, 0 en cero y 1 para positivos.
- **B** [0.0, 1.0, 1.0] — retorna 0 para negativos y 1 para z≥0.
- **C** [0.0, 0.0, 1.0] — retorna 0 para z≤0 y 1 para z>0 (condición estricta).
- **D** [-2.0, 0.0, 3.0] — retorna el valor original sin modificar.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. La condición `z > 0` es estricta: z=-2.0 → False→0.0; z=0.0 → False→0.0 (cero NO es estrictamente mayor que cero); z=3.0 → True→1.0. Resultado: [0.0, 0.0, 1.0]. La opción b asume que z=0 retorna 1, usando implícitamente z≥0 en lugar de z>0. La opción a sería la derivada con valores negativos para z<0, lo cual no corresponde a ninguna función estándar.

---
### Pregunta 18

¿Cuál es la principal ventaja de Leaky ReLU frente a ReLU estándar, según el experimento del taller?

**Opciones:**
- **A** Leaky ReLU tiene rango acotado (-1,1), lo que estabiliza el entrenamiento frente a valores extremos.
- **B** La derivada de Leaky ReLU nunca es exactamente 0, resolviendo el problema de neuronas muertas (Dying ReLU).
- **C** La derivada de Leaky ReLU es siempre 1 en toda la región real, eliminando el gradiente evanescente completamente.
- **D** Leaky ReLU produce salidas probabilísticas que pueden usarse directamente en la capa de salida binaria.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. La ventaja clave de Leaky ReLU es que su derivada es alpha (0.1 en el taller) para z≤0, nunca exactamente 0. Esto resuelve el Dying ReLU: incluso cuando z≤0, el gradiente se propaga (multiplicado por alpha) y los pesos pueden actualizarse. El taller confirmó: con ReLU había 105 neuronas apagadas en h1; con Leaky ReLU, 0 neuronas apagadas. La opción c es incorrecta: la derivada de Leaky ReLU es 1 para z>0 y alpha=0.1 para z≤0, no siempre 1.

---
### Pregunta 19

Para un problema de clasificación multiclase con 5 categorías excluyentes, ¿qué configuración de capa de salida es la correcta?

**Opciones:**
- **A** 1 neurona con Sigmoid, usando umbral 0.2 para separar las 5 clases.
- **B** 5 neuronas con Sigmoid independientes, una por clase.
- **C** 5 neuronas con Softmax, que convierte los logits en distribución de probabilidad que suma 1.
- **D** 5 neuronas con ReLU, para garantizar activaciones positivas en todas las clases.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Para clasificación multiclase con K clases excluyentes se usan K neuronas con Softmax, que convierte logits en probabilidades que suman exactamente 1 (garantizando exclusividad mutua). La opción b usaría Sigmoid independiente para cada clase, útil en clasificación multietiqueta (una muestra puede pertenecer a múltiples clases simultáneamente), pero no garantiza que las probabilidades sumen 1. Con 1 neurona + Sigmoid solo se modela clasificación binaria.

---
### Pregunta 20

En el experimento del taller, el ranking de accuracy en el dataset de estudiantes de mayor a menor fue:

**Opciones:**
- **A** ReLU > Leaky ReLU > Sigmoid > Tanh > Ninguna.
- **B** ReLU > Leaky ReLU > Sigmoid > Ninguna > Tanh.
- **C** Leaky ReLU > ReLU > Sigmoid > Ninguna > Tanh.
- **D** ReLU > Sigmoid > Leaky ReLU > Ninguna > Tanh.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. El ranking exacto fue: ReLU (0.920) > Leaky ReLU (0.900) > Sigmoid (0.780) > Ninguna/lineal (0.735) > Tanh (0.665). La opción a invierte el orden de Tanh y Ninguna: Tanh (0.665) fue peor que Ninguna (0.735). La opción c pone Leaky ReLU antes que ReLU, cuando ReLU fue superior. La opción d coloca Sigmoid entre ReLU y Leaky ReLU incorrectamente.

---
### Pregunta 21

¿Por qué Softmax no es adecuada como función de activación en capas ocultas intermedias de una red neuronal?

**Opciones:**
- **A** Porque Softmax produce valores en (0,1) que son demasiado pequeños para propagarse a las siguientes capas.
- **B** Porque Softmax acopla todas las salidas: cambiar el logit de una neurona afecta las activaciones de todas las demás.
- **C** Porque Softmax no es diferenciable, lo que impide calcular gradientes durante el backpropagation.
- **D** Porque Softmax tiene derivada siempre cercana a 0, lo que causa gradiente evanescente severo.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Softmax crea dependencia entre todas las salidas de una capa: e^zi/Σe^zj significa que cada salida depende de todos los logits. Esto es deseable en la capa de salida (las clases compiten entre sí sumando 1), pero en capas ocultas crea acoplamiento indeseado que dificulta que cada neurona aprenda representaciones independientes. Softmax sí es diferenciable (descartando c). No tiene el problema de gradiente evanescente severo de Sigmoid/Tanh (descartando d).

---
### Pregunta 22

El taller verifica algebraicamente que sin activación, la red 2→2→1 equivale a una sola neurona. Se ejecuta `np.allclose(y_red, y_neurona)` que retorna True. ¿Qué concluye el taller de este resultado?

**Opciones:**
- **A** Que agregar más capas lineales siempre mejora la capacidad del modelo, con o sin activaciones.
- **B** Que sin no-linealidad, agregar capas ocultas no aumenta la capacidad expresiva de la red.
- **C** Que la red sin activación es equivalente a una red con activación Sigmoid de una sola capa.
- **D** Que los valores de W* y b* encontrados son el mínimo global de la función de pérdida.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. La equivalencia algebraica con W*=W2@W1=[[5. 5.]] y b*=W2@b1+b2=[-6.8] demuestra que múltiples capas lineales se colapsan en una sola transformación lineal. Independientemente de cuántas capas lineales se apilen, el modelo sigue siendo equivalente a una sola neurona. Las no-linealidades (ReLU, Tanh, Sigmoid) son las que aportan la capacidad expresiva adicional. La opción a es exactamente lo contrario de lo que el experimento demuestra.

---
### Pregunta 23

La función `d_leaky_relu(z, alpha=0.1)` del taller usa `np.where(z > 0, 1.0, alpha)`. Para z = np.array([-1.0, 0.0, 2.0]), ¿cuál es el resultado?

**Opciones:**
- **A** [-0.1, 0.1, 1.0] — retorna -alpha para negativos, alpha para cero y 1 para positivos.
- **B** [0.1, 1.0, 1.0] — retorna alpha para negativos y 1 para z≥0.
- **C** [0.1, 0.1, 1.0] — retorna alpha para z≤0 y 1.0 para z>0 (condición estricta).
- **D** [-1.0, 0.0, 1.0] — retorna el valor original para negativos y 1 para positivos.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. np.where(z>0, 1.0, alpha): para z=-1.0 (no >0) → alpha=0.1; para z=0.0 (no >0, condición estricta) → alpha=0.1; para z=2.0 (>0) → 1.0. Resultado: [0.1, 0.1, 1.0]. La opción b asume que z=0 retorna 1.0, ignorando que la condición es estricta (z>0, no z≥0). La opción a usa valores negativos (-0.1) que no aparecen en d_leaky_relu ya que la función retorna siempre alpha (positivo) para z≤0.

---
### Pregunta 24

¿Por qué Tanh es preferible a Sigmoid en capas ocultas, aunque ambas sufren gradiente evanescente?

**Opciones:**
- **A** Porque Tanh no satura nunca para ningún valor de z, a diferencia de Sigmoid.
- **B** Porque Tanh tiene salidas centradas en 0, evitando el sesgo de gradiente que ocurre con salidas siempre positivas.
- **C** Porque Tanh tiene derivada máxima 0.25, mayor que la derivada máxima 0.1 de Sigmoid.
- **D** Porque Tanh tiene rango (0,2), más amplio que el rango (0,1) de Sigmoid.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Tanh produce salidas en (-1,1) centradas en 0. Sigmoid produce salidas siempre positivas en (0,1). Cuando las activaciones son siempre positivas, los gradientes de los pesos de una capa tienen todos el mismo signo, forzando al optimizador a moverse en zigzag y ralentizando la convergencia. Las salidas centradas en 0 de Tanh evitan este sesgo. La opción c invierte los valores: la derivada máxima de Tanh es 1.0 (no 0.25) y la de Sigmoid es 0.25 (no 0.1).

---
### Pregunta 25

En el dataset de crédito (3→3→1), con ReLU, ¿qué porcentaje aproximado de activaciones en la neurona h1 estaban apagadas (valor=0)?

**Opciones:**
- **A** 0% — ReLU no apaga neuronas en datos financieros.
- **B** 54.5% — 109 de 200 activaciones en h1 eran cero.
- **C** 51.0% — 102 de 200 activaciones en h1 eran cero.
- **D** 52.5% — 105 de 200 activaciones en h1 eran cero.

**Respuesta correcta:** **D**

**Retroalimentación / Explicación:**
> Correcto. En h1 con ReLU estándar, 105 de las 200 muestras producían z1[0]≤0, resultando en activación 0. 105/200 = 52.5%. En h2 fueron 102/200 = 51.0% (opción c) y en h3 fueron 109/200 = 54.5% (opción b). La opción a es incorrecta: ReLU sí apaga neuronas cuando z≤0, que es exactamente el Dying ReLU que Leaky ReLU soluciona (0 neuronas apagadas).

---
### Pregunta 26

Comparando el gradiente evanescente, ¿cuál afirmación compara CORRECTAMENTE la derivada de Sigmoid y la de ReLU (zona activa)?

**Opciones:**
- **A** Sigmoid tiene derivada máxima 1.0; ReLU tiene derivada 0.25 en z>0 — Sigmoid evita mejor el problema.
- **B** Sigmoid tiene derivada máxima 0.25; ReLU tiene derivada 1.0 en z>0 — ReLU evita el gradiente evanescente.
- **C** Ambas tienen derivada máxima 0.25; ReLU lo evita porque tiene rango de salida más amplio.
- **D** Sigmoid tiene derivada máxima 0.25; ReLU tiene derivada 0.5 en z>0 — ambas sufren el problema.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Sigmoid: derivada máxima = 0.25 (en z=0). ReLU: derivada = 1.0 para todo z>0, constante y sin degradación. Con muchas capas, los gradientes de Sigmoid se multiplican por 0.25 repetidamente → se acercan a 0. Con ReLU, el gradiente en la zona activa (z>0) se multiplica por 1.0 → se mantiene estable. La opción a invierte completamente los valores: 1.0 pertenece a ReLU/Tanh, no a Sigmoid. La opción d asigna incorrectamente 0.5 a ReLU.

---
### Pregunta 27

Si se tienen logits `z = np.array([1.2, 0.4, -0.8])` y se aplica Softmax, ¿qué clase recibirá la mayor probabilidad?

**Opciones:**
- **A** La segunda clase (0.4), porque es el logit más cercano a cero y más equilibrado.
- **B** La tercera clase (-0.8), porque Softmax invierte el orden favoreciendo los logits menores.
- **C** La primera clase (1.2), porque es el logit más alto y Softmax preserva el orden relativo.
- **D** Todas reciben la misma probabilidad porque Softmax normaliza uniformemente.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Softmax preserva el orden relativo de los logits: el logit más alto (1.2) produce la mayor probabilidad. Calculando: e^1.2≈3.32, e^0.4≈1.49, e^(-0.8)≈0.45. Total≈5.26. Probabilidades: [3.32/5.26, 1.49/5.26, 0.45/5.26] ≈ [0.631, 0.283, 0.086]. La clase 1 (logit=1.2) tiene ~63.1%. Softmax amplifica las diferencias mediante la función exponencial, no las invierte (descartando b). La distribución uniforme solo ocurre cuando todos los logits son iguales (descartando d).

---
### Pregunta 28

Un ingeniero diseña una red para predecir si un cliente pagará su crédito (Sí/No). Según el Taller 16, ¿cuál es la configuración correcta de la capa de salida?

**Opciones:**
- **A** 2 neuronas con Softmax, una por clase (Sí y No).
- **B** 1 neurona con Sigmoid, produciendo P(Sí) ∈ (0,1); implícitamente P(No) = 1 - P(Sí).
- **C** 1 neurona con ReLU, para producir un score positivo de propensión al pago.
- **D** 2 neuronas con Sigmoid independientes, una para P(Sí) y otra para P(No).

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Para clasificación binaria (Sí/No), la convención estándar es 1 neurona + Sigmoid, que produce P(Sí) ∈ (0,1). Implícitamente P(No) = 1 - P(Sí), garantizando que las probabilidades sumen 1. Esta es exactamente la configuración de forward_act del taller: `return sigmoid(z2)` con 1 neurona de salida. La opción a (2 neuronas + Softmax) funcionaría matemáticamente pero es redundante y no es la convención estándar para binaria. ReLU no produce probabilidades acotadas.

---
### Pregunta 29

En el taller se calcula σ(z)·(1-σ(z)) para la derivada de Sigmoid. Si σ(z) = 0.8, ¿cuánto vale la derivada en ese punto?

**Opciones:**
- **A** 0.20, que es 1 - σ(z) directamente.
- **B** 0.16, que es σ(z) · (1 - σ(z)) = 0.8 × 0.2.
- **C** 0.64, que es σ(z)² = 0.8².
- **D** 0.80, que es el valor de σ(z) sin modificar.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. La derivada de Sigmoid en un punto es σ(z)·(1-σ(z)). Con σ(z)=0.8: derivada = 0.8 × (1-0.8) = 0.8 × 0.2 = 0.16. Este valor (0.16) es menor que el máximo posible (0.25 en z=0), lo que ilustra que cuando Sigmoid se aleja de 0.5 (es decir, cuando |z| crece), su derivada decrece y el gradiente se atenúa. La opción a calcula solo (1-σ), sin multiplicar por σ.

---
### Pregunta 30

El experimento del Taller 16 usó los MISMOS pesos iniciales para comparar todas las funciones de activación. ¿Por qué es importante este control experimental?

**Opciones:**
- **A** Para garantizar que todas las redes converjan al mismo mínimo global de la función de pérdida.
- **B** Para que las diferencias en accuracy se deban exclusivamente a la función de activación, no a la inicialización aleatoria.
- **C** Para que el tiempo de entrenamiento sea idéntico en todos los experimentos comparados.
- **D** Para que el gradiente descendente no quede atrapado en mínimos locales durante los primeros pasos.

**Respuesta correcta:** **B**

**Retroalimentación / Explicación:**
> Correcto. Al usar los mismos pesos iniciales (misma semilla aleatoria), el único factor que varía entre experimentos es la función de activación. Si se usaran pesos aleatorios diferentes, las diferencias en accuracy podrían deberse a la inicialización y no a la función de activación. Este es el principio del control experimental: aislar la variable de interés (función de activación) manteniendo todo lo demás constante. La opción a es incorrecta: los mismos pesos iniciales no garantizan convergencia al mismo mínimo global.

---
### Pregunta 31

¿Cuál es el propósito fundamental de una función de activación en una neurona artificial?

**Opciones:**
- **A** Normalizar los valores de los pesos W al rango (0,1) antes de multiplicarlos por las entradas.
- **B** Calcular el gradiente del error respecto a cada parámetro durante el backpropagation.
- **C** Introducir no linealidad en la transformación, permitiendo que la red aprenda patrones que un modelo lineal no puede capturar.
- **D** Reducir la dimensionalidad de las activaciones para acelerar el forward pass en capas profundas.

**Respuesta correcta:** **C**

**Retroalimentación / Explicación:**
> Correcto. Sin función de activación, una red de múltiples capas colapsaría en una sola transformación lineal (W*·x + b*), sin importar cuántas capas se apilen. La función de activación —ReLU, Tanh, Sigmoid— introduce no linealidad en cada neurona, permitiendo que la red aprenda representaciones complejas y fronteras de decisión curvas. Es el ingrediente que da a las redes neuronales su capacidad de aproximar cualquier función continua (teorema de aproximación universal).

---
### Pregunta 32

¿Por qué la derivada de la función de activación es un componente crítico durante el entrenamiento de una red neuronal?

**Opciones:**
- **A** Porque backpropagation usa la regla de la cadena multiplicando la derivada de la activación en cada capa; si es cercana a cero, el gradiente desaparece y los pesos no aprenden.
- **B** Porque la derivada determina el rango de salida de la función, limitando los valores que puede tomar la activación.
- **C** Porque la derivada indica la velocidad máxima de convergencia, y una derivada alta siempre garantiza entrenamiento más rápido.
- **D** Porque la derivada de la activación es el único factor que diferencia a una red neuronal de un modelo de regresión logística clásica.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. Durante backpropagation, la regla de la cadena multiplica las derivadas de cada capa hacia atrás: dL/dW1 = dL/dŷ · (derivadas de capas intermedias) · dz1/dW1. Si la derivada de la activación es muy pequeña (como 0.25 de Sigmoid en cada capa), el producto se acerca a cero exponencialmente en capas profundas: 0.25^8 ≈ 0.000015. Los pesos de las primeras capas casi no se actualizan (gradiente evanescente). Por eso ReLU (derivada=1 para z>0) es preferida en capas ocultas profundas.

---
### Pregunta 33

La tabla de funciones de activación indica que Tanh se usa preferentemente en 'ocultas de RNN / LSTM'. ¿Por qué Tanh es la función estándar en redes recurrentes, en lugar de ReLU?

**Opciones:**
- **A** Porque Tanh tiene derivada máxima 1.0 y no satura nunca, garantizando gradiente constante en cualquier red recurrente.
- **B** Porque ReLU no es diferenciable en z=0, lo que rompe el backward pass en las conexiones temporales de las RNN.
- **C** Porque Tanh tiene rango (0,1) como Sigmoid pero con mayor velocidad de convergencia en datos secuenciales.
- **D** Porque Tanh produce salidas en (-1, 1) centradas en cero, estabilizando los estados ocultos recurrentes que se acumulan en el tiempo y evitando que crezcan indefinidamente.

**Respuesta correcta:** **D**

**Retroalimentación / Explicación:**
> Correcto. En las RNN, el estado oculto h_t = f(W·x_t + U·h_{t-1} + b) se recalcula en cada paso de tiempo multiplicándose consigo mismo repetidamente. Con ReLU, una activación grande se amplifica en cada paso temporal pudiendo explotar (gradiente explosivo). Tanh acota las salidas a (-1,1) y está centrada en 0, estabilizando estos estados recurrentes. LSTM usa Tanh para el estado de celda precisamente por esta propiedad de acotamiento y centrado. La opción a es incorrecta: Tanh satura para |z| grande.

---
### Pregunta 34

Según la tabla-resumen de funciones de activación, ¿cuál de las siguientes afirmaciones sobre rangos y problemas principales es CORRECTA?

**Opciones:**
- **A** Sigmoid tiene rango (0,1) con problema de gradiente evanescente; ReLU tiene rango [0,+∞) con problema Dying ReLU; Ninguna (lineal) tiene rango (-∞,+∞) con problema de colapso lineal en ocultas.
- **B** ReLU tiene rango (-∞,+∞), Sigmoid tiene problema 'Dying ReLU' y Leaky ReLU tiene rango (0,1).
- **C** Tanh tiene rango (0,1), Softmax tiene problema de gradiente evanescente y Leaky ReLU se usa en la capa de salida para regresión.
- **D** Sigmoid tiene rango (-1,1), ReLU tiene derivada siempre 0.25 y Softmax se usa en capas ocultas para normalización.

**Respuesta correcta:** **A**

**Retroalimentación / Explicación:**
> Correcto. La tabla establece: Sigmoid → rango (0,1), problema: gradiente evanescente, uso: salida clasificación binaria. ReLU → rango [0,+∞), problema: Dying ReLU, uso: capas ocultas (opción por defecto). Ninguna (lineal) → rango (-∞,+∞), problema: colapso lineal en ocultas, uso: salida regresión. Leaky ReLU → rango (-∞,+∞), problema: hiperparámetro extra α. Tanh → rango (-1,1), uso: ocultas en RNN/LSTM. Softmax → rango (0,1) sumando 1, uso: salida clasificación multiclase.

---
### Pregunta 35

Un ingeniero debe elegir la función de activación para la capa de salida de tres redes diferentes: (A) clasificación binaria, (B) clasificación entre 4 clases excluyentes, (C) predicción de temperatura. ¿Cuál combinación es correcta?

**Opciones:**
- **A** A: ReLU, B: Sigmoid, C: Softmax — porque ReLU es la más eficiente y Sigmoid puede usarse en multiclase.
- **B** A: Tanh (1 neurona), B: Softmax (4 neuronas), C: Sigmoid (1 neurona) — porque Tanh es más estable que Sigmoid.
- **C** A: Sigmoid (1 neurona), B: Sigmoid (4 neuronas), C: ReLU (1 neurona) — usando Sigmoid independiente para cada clase.
- **D** A: Sigmoid (1 neurona), B: Softmax (4 neuronas), C: Ninguna/lineal (1 neurona) — según el tipo de tarea de cada red.

**Respuesta correcta:** **D**

**Retroalimentación / Explicación:**
> Correcto. La regla es: (A) clasificación binaria → 1 neurona + Sigmoid, produce P(clase=1) ∈ (0,1). (B) clasificación multiclase con K clases excluyentes → K neuronas + Softmax, produce distribución de probabilidad que suma 1. (C) regresión continua → 1 neurona sin activación (lineal), permite cualquier valor real. La opción c usa Sigmoid independiente para 4 clases: esto sirve para clasificación multietiqueta (varias clases simultáneas posibles), no para multiclase excluyente, porque las probabilidades no garantizan sumar 1.

