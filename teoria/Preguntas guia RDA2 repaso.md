# Pregunta 1

En el taller de DBSCAN se calcula el Silhouette de la siguiente forma:

mascara_validos = labels != -1
sil = silhouette_score(X_scaled[mascara_validos], labels[mascara_validos])

## ¿Por qué se filtra con labels != -1 antes de calcular el Silhouette?

- Para acelerar el cálculo excluyendo los puntos más alejados del centro del dataset.
- Porque los puntos de ruido tienen etiqueta −1 y no pertenecen a ningún cluster; incluirlos distorsionaría el cálculo del Silhouette.
- Correcta
Correcto. Los puntos de ruido (etiqueta −1) no tienen cluster asignado. El Silhouette mide cohesión y separación respecto al cluster propio y al vecino; incluir puntos sin cluster produciría un cálculo sin sentido.
- Porque scikit-learn lanza un error si se incluyen etiquetas negativas en silhouette_score.
- Para normalizar las etiquetas entre 0 y el número de clusters antes de pasarlas a la función.

- Retroalimentación
Correcto. Los puntos de ruido (etiqueta −1) no tienen cluster asignado. El Silhouette mide cohesión y separación respecto al cluster propio y al vecino; incluir puntos sin cluster produciría un cálculo sin sentido.

- --

Pregunta 2

¿Qué condición debe cumplir un punto para ser clasificado como Core Point en DBSCAN?

- No estar dentro del radio ε de ningún Core Point y no pertenecer a ningún cluster.
- Estar dentro del radio ε de otro punto Core, pero tener menos de MinPts vecinos propios.
- Tener al menos MinPts vecinos dentro de su radio ε. Es la semilla de un cluster.
- Correcta
Correcto. Un punto Core tiene ≥ MinPts vecinos (incluido él mismo) dentro del radio ε. Es el punto que inicia o expande un cluster.
- Tener exactamente MinPts vecinos fuera de su radio ε.

- Retroalimentación
Correcto. Un punto Core tiene ≥ MinPts vecinos (incluido él mismo) dentro del radio ε. Es el punto que inicia o expande un cluster.

- --

Pregunta 3

## ¿Cuál es la diferencia principal entre GridSearchCV y RandomizedSearchCV?

- GridSearchCV optimiza una sola métrica; RandomizedSearchCV puede optimizar múltiples métricas simultáneamente.
- GridSearchCV explora todas las combinaciones del espacio definido; RandomizedSearchCV muestrea aleatoriamente n_iter combinaciones y no garantiza el óptimo global.
- Correcta
Esta es la diferencia fundamental. GridSearchCV es exhaustivo pero costoso en espacios grandes; RandomizedSearchCV es más eficiente pero no garantiza encontrar la mejor combinación posible.
- GridSearchCV solo funciona con SVM; RandomizedSearchCV puede usarse con cualquier estimador de scikit-learn.
- GridSearchCV usa validación cruzada; RandomizedSearchCV no usa validación cruzada para evaluar cada combinación.

- Retroalimentación
Esta es la diferencia fundamental. GridSearchCV es exhaustivo pero costoso en espacios grandes; RandomizedSearchCV es más eficiente pero no garantiza encontrar la mejor combinación posible.

- --

Pregunta 4

En scikit-learn, KMeans tiene el parámetro n_init=10. ¿Cuál es el propósito de este parámetro?

- Asegurar que los 10 primeros puntos del dataset sean usados como centroides iniciales.
- Definir el número de clusters K que el modelo debe encontrar.
- Limitar el número máximo de pasos que el algoritmo ejecuta dentro de cada ejecución.
- Repetir el algoritmo 10 veces con distintas inicializaciones aleatorias de centroides y conservar el resultado con menor inercia.
- Correcta
Correcto. Como K-Means puede quedar atrapado en mínimos locales dependiendo de la inicialización, scikit-learn repite el proceso n_init veces con distintos puntos de partida y conserva el resultado con menor inercia.

- Retroalimentación
Correcto. Como K-Means puede quedar atrapado en mínimos locales dependiendo de la inicialización, scikit-learn repite el proceso n_init veces con distintos puntos de partida y conserva el resultado con menor inercia.

- --

Pregunta 5

### Observa el siguiente código

svc = SVC(random_state=42)
grid_search = GridSearchCV(
```
estimator=svc,
param_grid=param_grid,
cv=5,
scoring='f1',
n_jobs=-1
```
- )
- grid_search.fit(X_train_s, y_train)
mejor_modelo = grid_search.best_estimator_
y_pred = mejor_modelo.predict(X_test_s)

## ¿Sobre qué datos se entrena el modelo final que queda en mejor_modelo?

- Sobre todo X_train_s, después de identificar los mejores hiperparámetros mediante validación cruzada.
- Correcta
Tras seleccionar los mejores hiperparámetros por validación cruzada, GridSearchCV re-entrena automáticamente el modelo sobre todo X_train_s. Esto maximiza los datos de entrenamiento para el modelo final.
- Sobre X_test_s, para garantizar que el modelo visto por el evaluador sea el mismo que predice.
- Solo sobre el fold de validación que produjo el mejor score durante la búsqueda.
- Sobre todos los datos disponibles (X_train_s + X_test_s) para maximizar el número de ejemplos de entrenamiento.

- Retroalimentación
Tras seleccionar los mejores hiperparámetros por validación cruzada, GridSearchCV re-entrena automáticamente el modelo sobre todo X_train_s. Esto maximiza los datos de entrenamiento para el modelo final.

- --

Pregunta 6

En una SVM, el hiperplano de separación se define matemáticamente como w·x + b = 0. ¿Qué representa el vector w en esta ecuación?

- El vector de distancias de cada punto al centroide de su clase.
- El vector de probabilidades de clase calculado por el modelo.
- El vector perpendicular al hiperplano que define su dirección en el espacio.
- Correcta
w es el vector normal al hiperplano. Su dirección determina la orientación de la frontera de decisión en el espacio de características.
- El vector de medias de cada variable del dataset de entrenamiento.

- Retroalimentación
w es el vector normal al hiperplano. Su dirección determina la orientación de la frontera de decisión en el espacio de características.

- --

Pregunta 7

En el siguiente fragmento del flujo combinado PCA + K-Means:

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

kmeans = KMeans(n_clusters=k_elegido, random_state=42, n_init=10)
clusters = kmeans.fit_predict(X_pca)

## ¿Por qué se aplica K-Means sobre X_pca en lugar de sobre X_scaled?

- Porque scikit-learn requiere que KMeans reciba exactamente 2 columnas como entrada.
- Porque X_pca tiene valores acotados entre -1 y 1, lo que estabiliza la convergencia de K-Means.
- Porque K-Means no funciona con más de 2 variables; PCA es obligatorio siempre antes de K-Means.
- Porque trabajar en el espacio reducido por PCA hace que los grupos sean más separables y permite visualizar los clusters directamente en un plano 2D.
- Correcta
Correcto. Al aplicar K-Means sobre X_pca se aprovecha que los datos quedan en un espacio 2D fácil de graficar, se eliminan dimensiones redundantes o ruidosas, y K-Means converge más rápido con menos dimensiones.

- Retroalimentación
Correcto. Al aplicar K-Means sobre X_pca se aprovecha que los datos quedan en un espacio 2D fácil de graficar, se eliminan dimensiones redundantes o ruidosas, y K-Means converge más rápido con menos dimensiones.

- --

Pregunta 8

## ¿Cuál es la definición formal de PCA (Principal Component Analysis)?

- Una técnica estadística de reducción de dimensionalidad que transforma variables posiblemente correlacionadas en un conjunto menor de variables no correlacionadas llamadas componentes principales, ordenadas de mayor a menor varianza explicada.
- Correcta
Esta es la definición formal (Jolliffe, 2002). Los elementos clave son: técnica estadística, reducción de dimensionalidad, variables no correlacionadas resultantes, y orden por varianza explicada decreciente.
- Un algoritmo de clustering no supervisado que agrupa observaciones en k grupos minimizando la distancia a cada centroide.
- Un algoritmo de clasificación que proyecta los datos sobre un hiperplano de separación de máximo margen entre clases.
- Un método supervisado que entrena un modelo predictivo eliminando las variables con menor correlación con la variable objetivo.

- Retroalimentación
Esta es la definición formal (Jolliffe, 2002). Los elementos clave son: técnica estadística, reducción de dimensionalidad, variables no correlacionadas resultantes, y orden por varianza explicada decreciente.

- --

Pregunta 9

¿Cuál de los siguientes es un ejemplo de hiperparámetro, a diferencia de un parámetro del modelo?

- Los pesos w y el sesgo b que una regresión logística ajusta automáticamente al ver los datos.
- El valor de C en una SVM, que el programador define antes de iniciar el entrenamiento.
- Correcta
C es un hiperparámetro porque el programador lo fija antes de entrenar. El modelo no lo ajusta al ver los datos; es una decisión de diseño externa al proceso de entrenamiento.
- Los coeficientes β₀ y β₁ aprendidos por una regresión lineal durante el entrenamiento.
- Los vectores de soporte identificados por una SVM al ajustarse a los datos de entrenamiento.

- Retroalimentación
C es un hiperparámetro porque el programador lo fija antes de entrenar. El modelo no lo ajusta al ver los datos; es una decisión de diseño externa al proceso de entrenamiento.

- --

Pregunta 10

Se entrenan cuatro modelos RandomForestClassifier con n_estimators = 10, 50, 100, 200 sobre el mismo dataset y se grafica la accuracy en prueba para cada valor. ¿Cuál es el objetivo principal de este experimento?

- Determinar cuántos árboles se necesitan para que el OOB score iguale exactamente la accuracy en prueba.
- Comparar la velocidad de entrenamiento de Random Forest con distintos valores de n_estimators.
- Encontrar el valor de n_estimators que minimiza el sobreajuste comparando accuracy en entrenamiento versus prueba.
- Explorar cómo varía la accuracy en prueba según el número de árboles e identificar a partir de cuántos se estabiliza.
- Correcta
El experimento permite observar empíricamente la estabilización del accuracy. El material indica que 100-500 árboles es suficiente en la mayoría de casos; este tipo de gráfico ayuda a identificar ese punto de forma práctica.

- Retroalimentación
El experimento permite observar empíricamente la estabilización del accuracy. El material indica que 100-500 árboles es suficiente en la mayoría de casos; este tipo de gráfico ayuda a identificar ese punto de forma práctica.

- --

Pregunta 11

¿Cuál es la ventaja principal del **truco del kernel** frente a transformar explícitamente los datos a un espacio de mayor dimensión?

- Permite visualizar los datos en el espacio transformado mediante gráficos de dispersión en 3D.
- Reduce automáticamente el número de variables del dataset original para acelerar el entrenamiento.
- Calcula el producto interno en el espacio transformado sin necesidad de calcular las coordenadas de los puntos en ese espacio.
- Correcta
Esta es la propiedad esencial del truco del kernel: operar en el espacio transformado usando solo productos internos, sin materializar las nuevas coordenadas. Es especialmente útil cuando el espacio tiene dimensión infinita, como en el kernel RBF.
- Elimina la necesidad de escalar los datos antes del entrenamiento.

- Retroalimentación
Esta es la propiedad esencial del truco del kernel: operar en el espacio transformado usando solo productos internos, sin materializar las nuevas coordenadas. Es especialmente útil cuando el espacio tiene dimensión infinita, como en el kernel RBF.

- --

Pregunta 12

¿Por qué se recomienda usar escala logarítmica al definir los valores de C y gamma en param_grid?

- Porque con escala logarítmica el heatmap de cv_results_ siempre muestra un gradiente de color más uniforme.
- Porque estos parámetros actúan en órdenes de magnitud; la diferencia entre C=1 y C=10 es mucho más significativa que entre C=1 y C=2.
- Correcta
C y gamma tienen efecto multiplicativo sobre el comportamiento del modelo. La escala logarítmica permite explorar órdenes de magnitud con pocos valores, cubriendo eficientemente un rango amplio como [0.001, 0.01, 0.1, 1, 10, 100].
- Porque scikit-learn requiere que los valores de C y gamma estén en escala logarítmica para funcionar correctamente.
- Porque la escala logarítmica reduce el número de combinaciones totales, acelerando GridSearchCV.

- Retroalimentación
C y gamma tienen efecto multiplicativo sobre el comportamiento del modelo. La escala logarítmica permite explorar órdenes de magnitud con pocos valores, cubriendo eficientemente un rango amplio como [0.001, 0.01, 0.1, 1, 10, 100].

- --

Pregunta 13

¿Por qué los árboles de decisión no requieren normalizar ni escalar las variables numéricas, a diferencia de SVM?

- Porque los árboles no requieren escalar datos; esta es una de sus ventajas sobre modelos basados en distancias como SVM.
- Correcta
El material documenta explícitamente que no requerir escalado es una ventaja del árbol de decisión. Es una característica que lo diferencia de modelos como SVM, que sí dependen del cálculo de distancias entre puntos.
- Porque los árboles transforman internamente todas las variables a una escala logarítmica antes de calcular las divisiones.
- Porque los árboles solo pueden procesar variables binarias, que por definición ya están en la misma escala.
- Porque el índice Gini normaliza automáticamente las proporciones de clase, compensando cualquier diferencia de escala entre variables.

- Retroalimentación
El material documenta explícitamente que no requerir escalado es una ventaja del árbol de decisión. Es una característica que lo diferencia de modelos como SVM, que sí dependen del cálculo de distancias entre puntos.

- --

Pregunta 14

Para construir el k-dist graph antes de ejecutar DBSCAN se usa:

## MIN_PTS = 5
nbrs = NearestNeighbors(n_neighbors=MIN_PTS).fit(X_scaled)
distancias, _ = nbrs.kneighbors(X_scaled)
kdist = np.sort(distancias[:, MIN_PTS - 1])[::-1]

## ¿Qué contiene el array kdist después de ejecutar este código?

- Los índices de los MIN_PTS vecinos más cercanos para cada punto del dataset.
- La inercia de DBSCAN para distintos valores de MIN_PTS, equivalente al Método del Codo de K-Means.
- Las distancias de cada punto a su MIN_PTS-ésimo vecino más cercano, ordenadas de mayor a menor, para visualizar el codo que indica ε.
- Correcta
Correcto. kneighbors retorna las distancias a los n_neighbors vecinos; la columna [-1] o [MIN_PTS-1] es la del vecino más lejano dentro de ese grupo. Ordenar de mayor a menor y graficar produce la curva cuyo codo indica el ε óptimo.
- La distancia euclidiana media de cada punto a todos los demás puntos del dataset.

- Retroalimentación
Correcto. kneighbors retorna las distancias a los n_neighbors vecinos; la columna [-1] o [MIN_PTS-1] es la del vecino más lejano dentro de ese grupo. Ordenar de mayor a menor y graficar produce la curva cuyo codo indica el ε óptimo.

- --

Pregunta 15

Al comparar los resultados de K-Means y DBSCAN sobre el mismo dataset se genera:

tabla = pd.crosstab(df[**cluster_kmeans**], df[**cluster_dbscan**],
```
rownames=['K-Means'], colnames=['DBSCAN'])
```

## ¿Qué información proporciona la columna -1 de esta tabla?

- Los puntos que K-Means clasificó incorrectamente y que deberían ser eliminados del análisis.
- La cantidad de puntos que DBSCAN asignó al cluster número -1, que es siempre el cluster de mayor tamaño.
- En qué cluster de K-Means cayeron los puntos que DBSCAN etiquetó como ruido, revelando cómo K-Means absorbió los outliers.
- Correcta
Correcto. La columna -1 muestra los puntos de ruido de DBSCAN (etiqueta -1) distribuidos por los clusters de K-Means. Esto revela en qué grupo K-Means **forzó** cada outlier, información útil para entender si el modelo supervisado los absorbió correctamente.
- Los puntos que ambos algoritmos coincidieron en clasificar como outliers y que no pertenecen a ningún cluster.

- Retroalimentación
Correcto. La columna -1 muestra los puntos de ruido de DBSCAN (etiqueta -1) distribuidos por los clusters de K-Means. Esto revela en qué grupo K-Means **forzó** cada outlier, información útil para entender si el modelo supervisado los absorbió correctamente.

- --

Pregunta 16

En el coeficiente de Silhouette s(i) = (b − a) / max(a, b), ¿qué representan los valores a y b para una observación dada?

- a es la distancia al centroide propio y b es la distancia al centroide del cluster más lejano.
- a es la inercia del cluster propio y b es la inercia del cluster más alejado.
- a es el número de puntos en su cluster y b es el número de puntos en el cluster vecino más cercano.
- a es la distancia media de la observación al resto de puntos de su propio cluster, y b es la distancia media al cluster vecino más cercano.
- Correcta
Correcto. a mide la cohesión interna (qué tan cerca está el punto de los demás miembros de su cluster) y b mide la separación (qué tan lejos está del cluster vecino más próximo). Un Silhouette alto indica que b es mucho mayor que a.

- Retroalimentación
Correcto. a mide la cohesión interna (qué tan cerca está el punto de los demás miembros de su cluster) y b mide la separación (qué tan lejos está del cluster vecino más próximo). Un Silhouette alto indica que b es mucho mayor que a.

- --

Pregunta 17

## ¿Cuándo se dice que el algoritmo K-Means ha convergido?

- Cuando ningún punto cambia de cluster entre dos iteraciones consecutivas, o se alcanza el número máximo de iteraciones.
- Correcta
Correcto. K-Means converge cuando las asignaciones de cluster se estabilizan: ningún punto cambia de cluster. La convergencia no garantiza el óptimo global, ya que depende de la inicialización.
- Cuando los centroides se ubican en los puntos de datos más alejados entre sí.
- Cuando el coeficiente de Silhouette supera el umbral de 0.5.
- Cuando la inercia llega exactamente a cero.

- Retroalimentación
Correcto. K-Means converge cuando las asignaciones de cluster se estabilizan: ningún punto cambia de cluster. La convergencia no garantiza el óptimo global, ya que depende de la inicialización.

- --

Pregunta 18

¿Qué efecto tiene usar un valor de C muy alto (por ejemplo, C = 1000) en una SVM de margen suave?

- El modelo produce un margen muy amplio y tolera muchas violaciones, lo que puede llevar a underfitting.
- El modelo penaliza duramente cada error de clasificación, ajustando el hiperplano muy cerca de los datos, con riesgo de overfitting.
- Correcta
C alto hace que el modelo sea muy intolerante con los errores de entrenamiento. El hiperplano se acerca a los datos para clasificarlos todos correctamente, memorizando el ruido.
- El modelo reduce automáticamente el número de vectores de soporte a cero, simplificando la frontera de decisión.
- El modelo ignora el parámetro kernel y se comporta siempre como un clasificador lineal.

- Retroalimentación
C alto hace que el modelo sea muy intolerante con los errores de entrenamiento. El hiperplano se acerca a los datos para clasificarlos todos correctamente, memorizando el ruido.

- --

Pregunta 19

En la tabla de loadings de PCA, una variable tiene loading = −0.74 en PC1. ¿Qué significa esto?

- Que la variable solo aporta al componente PC2 y su contribución a PC1 debe ignorarse.
- Que la variable tiene alta influencia en PC1 y empuja el componente hacia valores bajos cuando esa variable es alta.
- Correcta
El signo indica la dirección de la contribución y el valor absoluto indica su magnitud. Un loading de −0.74 supera el umbral |0.6| de alta influencia y tiene signo negativo: cuando la variable es alta, empuja PC1 hacia valores bajos.
- Que la variable está incorrectamente estandarizada y produce una inversión en el componente.
- Que la variable no tiene influencia en PC1, porque los loadings negativos se cancelan matemáticamente.

- Retroalimentación
El signo indica la dirección de la contribución y el valor absoluto indica su magnitud. Un loading de −0.74 supera el umbral |0.6| de alta influencia y tiene signo negativo: cuando la variable es alta, empuja PC1 hacia valores bajos.

- --

Pregunta 20

¿Cuál de los siguientes problemas del exceso de dimensiones se define como **a más variables, más datos se necesitan para entrenar un modelo confiable**?

- Visualización imposible: los humanos solo comprenden hasta 3 dimensiones visualmente.
- Maldición de la dimensionalidad: a más variables, más datos se necesitan para entrenar un modelo confiable.
- Correcta
Esta es la definición exacta documentada. Al aumentar las variables, el espacio de datos crece y se necesitan más observaciones para cubrirlo adecuadamente y obtener modelos confiables.
- Sobreajuste estructural: modelos con muchas variables tienden a memorizar el entrenamiento.
- Variables redundantes: variables altamente correlacionadas que no aportan información nueva.

- Retroalimentación
Esta es la definición exacta documentada. Al aumentar las variables, el espacio de datos crece y se necesitan más observaciones para cubrirlo adecuadamente y obtener modelos confiables.

- --

Pregunta 21

### Después de ejecutar DBSCAN, se calcula

n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_ruido = list(labels).count(-1)

## ¿Por qué se resta 1 en el cálculo de n_clusters?

- Porque DBSCAN siempre genera un cluster vacío adicional al final que debe descartarse.
- Porque el primer cluster de DBSCAN tiene índice 0 y los índices empiezan en 1 en Python.
- Para descontar la etiqueta −1 del conjunto de etiquetas únicas, ya que −1 representa ruido y no un cluster.
- Correcta
Correcto. set(labels) incluye todas las etiquetas únicas, entre ellas −1 si hay puntos de ruido. Al restar 1 cuando −1 está presente, se cuenta solo el número de clusters reales, excluyendo el ruido.
- Para excluir el cluster número 0, que siempre es el más grande y no se considera un cluster real.

- Retroalimentación
Correcto. set(labels) incluye todas las etiquetas únicas, entre ellas −1 si hay puntos de ruido. Al restar 1 cuando −1 está presente, se cuenta solo el número de clusters reales, excluyendo el ruido.

- --

Pregunta 22

¿Por qué K-Means falla cuando los datos forman curvas, arcos o anillos, y DBSCAN no?

- Porque K-Means minimiza distancias a centroides y asume clusters esféricos, mientras que DBSCAN define cluster como una región densa conectada, sin importar la forma.
- Correcta
Correcto. K-Means asume que los clusters tienen forma esférica porque trabaja con centroides y distancias euclidianas. DBSCAN define un cluster como cualquier región de alta densidad conectada, independientemente de su forma.
- Porque K-Means requiere normalización previa y DBSCAN no es sensible a la escala de las variables.
- Porque K-Means solo funciona en espacios bidimensionales mientras que DBSCAN opera en cualquier número de dimensiones.
- Porque K-Means no puede manejar datasets con más de 1,000 observaciones, mientras que DBSCAN escala sin restricciones.

- Retroalimentación
Correcto. K-Means asume que los clusters tienen forma esférica porque trabaja con centroides y distancias euclidianas. DBSCAN define un cluster como cualquier región de alta densidad conectada, independientemente de su forma.

- --

Pregunta 23

## ¿Qué indica un índice Gini = 0 en un nodo del árbol?

- Que el nodo tiene exactamente el 50% de muestras de cada clase, representando máxima incertidumbre.
- Que el nodo es completamente puro: todas las muestras pertenecen a la misma clase.
- Correcta
Gini = 0 significa que todos los ejemplos del nodo pertenecen a una sola clase. Es el estado ideal que CART intenta alcanzar con cada división.
- Que la variable usada en esa división no aportó información útil al modelo.
- Que el nodo no tiene suficientes muestras para seguir dividiendo y debe convertirse en hoja.

- Retroalimentación
Gini = 0 significa que todos los ejemplos del nodo pertenecen a una sola clase. Es el estado ideal que CART intenta alcanzar con cada división.

- --

Pregunta 24

Un analista tiene un dataset con dos variables: ventas_promedio_semanal (rango 100–10,000 USD) y rotacion_inventario (rango 0.1–10). Aplica K-Means directamente sin estandarizar. ¿Cuál es la consecuencia más probable?

- Los clusters quedan determinados casi exclusivamente por ventas_promedio_semanal, porque su escala mayor domina el cálculo de distancias euclidianas.
- Correcta
Correcto. La distancia euclidiana suma diferencias al cuadrado. Con rangos tan distintos (10,000 vs 10), las diferencias en ventas_promedio_semanal dominan completamente la distancia, haciendo que rotacion_inventario sea prácticamente irrelevante para la asignación de clusters. StandardScaler elimina este sesgo.
- Los clusters quedan determinados casi exclusivamente por rotacion_inventario, porque las variables con valores pequeños son más precisas numéricamente.
- El algoritmo no converge y arroja un error de ejecución.
- Los clusters son idénticos a los que se obtendrían con estandarización, porque K-Means normaliza internamente las variables.

- Retroalimentación
Correcto. La distancia euclidiana suma diferencias al cuadrado. Con rangos tan distintos (10,000 vs 10), las diferencias en ventas_promedio_semanal dominan completamente la distancia, haciendo que rotacion_inventario sea prácticamente irrelevante para la asignación de clusters. StandardScaler elimina este sesgo.

- --

Pregunta 25

## ¿Qué controla el hiperparámetro min_samples_split en un árbol de decisión?

- El número mínimo de muestras que debe contener cada nodo hoja al final del entrenamiento.
- El número mínimo de muestras que debe tener un nodo para que el algoritmo intente dividirlo.
- Correcta
- El número mínimo de variables que deben evaluarse en cada división del árbol.
- La profundidad máxima hasta la que el árbol puede crecer antes de detenerse.

- Retroalimentación
La opción correcta es b. min_samples_split controla el número mínimo de muestras que debe tener un nodo para que el algoritmo intente dividirlo.

- --

Pregunta 26

### Se instancia y ejecuta DBSCAN de la siguiente forma

db = DBSCAN(eps=0.5, min_samples=5)
labels = db.fit_predict(X_scaled)

## ¿Qué representan los parámetros eps y min_samples en esta llamada?

- eps es el número de clusters a encontrar y min_samples es el tamaño mínimo de cada cluster.
- eps es la desviación estándar máxima permitida dentro de un cluster y min_samples es el porcentaje mínimo de puntos por cluster.
- eps es la tolerancia de convergencia y min_samples es el número mínimo de iteraciones del algoritmo.
- eps es el radio ε de vecindad y min_samples es el MinPts: mínimo de puntos (incluido el punto mismo) dentro del radio ε para que un punto sea Core Point.
- Correcta
Correcto. eps define el tamaño de la **burbuja** alrededor de cada punto (radio máximo de vecindad). min_samples es el MinPts: cuántos vecinos debe tener un punto dentro de eps para ser clasificado como Core Point.

- Retroalimentación
Correcto. eps define el tamaño de la **burbuja** alrededor de cada punto (radio máximo de vecindad). min_samples es el MinPts: cuántos vecinos debe tener un punto dentro de eps para ser clasificado como Core Point.

- --

Pregunta 27

Un nodo de un árbol de decisión tiene 10 muestras: 7 de clase A y 3 de clase B. ¿Cuál es su índice Gini?

- 1.0 — impureza máxima para distribuciones con más de dos clases.
- 0.5 — máxima impureza, clases perfectamente mezcladas.
- 0.0 — nodo puro, todas las muestras son de la misma clase.
- 0.42 — impureza moderada, calculada como 1 − (0.70² + 0.30²).
- Correcta
Con p(A) = 7/10 = 0.70 y p(B) = 3/10 = 0.30: Gini = 1 − (0.70² + 0.30²) = 1 − (0.49 + 0.09) = 1 − 0.58 = 0.42. Este es el ejemplo numérico exacto del material.

- Retroalimentación
Con p(A) = 7/10 = 0.70 y p(B) = 3/10 = 0.30: Gini = 1 − (0.70² + 0.30²) = 1 − (0.49 + 0.09) = 1 − 0.58 = 0.42. Este es el ejemplo numérico exacto del material.

- --

Pregunta 28

### Después de entrenar un Random Forest, se ejecuta

prob = rf.predict_proba(X_test)
- print(prob[0])
# Salida: [0.28, 0.72]

## ¿Qué indica este resultado?

- Que la clase 0 tiene 28 muestras en el conjunto de prueba y la clase 1 tiene 72 muestras.
- Que el modelo tiene 72% de accuracy general sobre el conjunto de prueba completo.
- Que para el primer registro, el 28% de los árboles votó por la clase 0 y el 72% votó por la clase 1.
- Correcta
En Random Forest, predict_proba() devuelve la proporción de árboles que votó por cada clase. [0.28, 0.72] significa que 28 de cada 100 árboles votaron clase 0 y 72 votaron clase 1.
- Que el modelo tardó 0.28 segundos en predecir y tiene un OOB score de 0.72.

- Retroalimentación
En Random Forest, predict_proba() devuelve la proporción de árboles que votó por cada clase. [0.28, 0.72] significa que 28 de cada 100 árboles votaron clase 0 y 72 votaron clase 1.

- --

Pregunta 29

## ¿Cuál de las siguientes es una situación en la que NO se debe usar PCA?

- Cuando se quiere visualizar datos de alta dimensión en 2D o 3D.
- Cuando el dataset tiene muchas variables numéricas con alta multicolinealidad.
- Cuando se busca reducir el ruido antes de entrenar un modelo de Machine Learning.
- Cuando las variables son categóricas, porque PCA requiere variables numéricas continuas.
- Correcta
PCA opera calculando covarianzas y buscando direcciones de máxima varianza, lo que solo tiene sentido con variables numéricas continuas. Las variables categóricas no tienen relaciones de varianza interpretables en ese contexto.

- Retroalimentación
PCA opera calculando covarianzas y buscando direcciones de máxima varianza, lo que solo tiene sentido con variables numéricas continuas. Las variables categóricas no tienen relaciones de varianza interpretables en ese contexto.

- --

Pregunta 30

## ¿Qué propiedad define matemáticamente a PC1 y PC2?

- PC1 es la componente que minimiza la correlación con todas las demás variables del dataset.
- PC1 captura la mayor varianza del dataset; PC2 captura la mayor varianza restante siendo perpendicular a PC1.
- Correcta
Esta es la definición matemática documentada. PC1 es la dirección de máxima varianza; PC2 es la dirección de máxima varianza restante y debe ser perpendicular (ortogonal) a PC1 para garantizar que los componentes no estén correlacionados.
- PC1 es la componente que captura la menor varianza del dataset, siendo la más específica.
- PC1 es la componente que contiene únicamente la variable original con mayor varianza individual.

- Retroalimentación
Esta es la definición matemática documentada. PC1 es la dirección de máxima varianza; PC2 es la dirección de máxima varianza restante y debe ser perpendicular (ortogonal) a PC1 para garantizar que los componentes no estén correlacionados.

- --

Pregunta 31

¿Cuál de las siguientes diferencias entre SVM y Regresión Logística es correcta?

- SVM es más rápida que la Regresión Logística en datasets con más de 100 000 registros.
- SVM produce probabilidades de clase directamente, mientras que la Regresión Logística no.
- La Regresión Logística maximiza el margen entre clases; SVM maximiza la verosimilitud.
- SVM es más eficiente en espacios de alta dimensionalidad; la Regresión Logística produce probabilidades directamente.
- Correcta
Esta afirmación recoge correctamente dos diferencias documentadas: la ventaja de SVM en alta dimensionalidad y la ventaja de Regresión Logística en producir probabilidades nativas sin configuración adicional.

- Retroalimentación
Esta afirmación recoge correctamente dos diferencias documentadas: la ventaja de SVM en alta dimensionalidad y la ventaja de Regresión Logística en producir probabilidades nativas sin configuración adicional.

- --

Pregunta 32

Una SVM se entrena con 10 000 registros y al revisar el modelo se encuentra que solo 45 puntos son vectores de soporte. ¿Qué ocurriría si se eliminaran los otros 9 955 registros del dataset y se reentrenara el modelo?

- El modelo cambiaría completamente porque necesita todos los datos para calcular el hiperplano óptimo.
- El modelo fallaría porque scikit-learn requiere un mínimo de registros para entrenar una SVM.
- El modelo sería exactamente el mismo, porque el hiperplano queda determinado únicamente por los vectores de soporte.
- Correcta
Los vectores de soporte son los únicos puntos que determinan la posición del hiperplano. Todos los demás registros son irrelevantes para la frontera de decisión final.
- El modelo mejoraría su accuracy porque eliminar datos reduce el ruido en el entrenamiento.

- Retroalimentación
Los vectores de soporte son los únicos puntos que determinan la posición del hiperplano. Todos los demás registros son irrelevantes para la frontera de decisión final.

- --

Pregunta 33

¿Por qué Random Forest es menos interpretable que un árbol de decisión individual?

- Porque la predicción final es un consenso de múltiples árboles y no puede representarse como una regla única legible.
- Correcta
Mientras que un árbol produce una única cadena de reglas IF-THEN verificable, Random Forest combina las decisiones de cientos de árboles distintos. El material lo describe explícitamente: **La decisión es un consenso, no una regla única.**
- Porque el parámetro max_features=**sqrt** oculta cuáles variables se usaron en cada división.
- Porque Random Forest usa variables transformadas internamente que no corresponden a las variables originales del dataset.
- Porque Random Forest no puede generar probabilidades; solo produce etiquetas de clase sin ninguna explicación.

- Retroalimentación
Mientras que un árbol produce una única cadena de reglas IF-THEN verificable, Random Forest combina las decisiones de cientos de árboles distintos. El material lo describe explícitamente: **La decisión es un consenso, no una regla única.**

- --

Pregunta 34

### En el taller se divide el dataset con

X_train, X_test, y_train, y_test = train_test_split(
```
X, y, test_size=0.2, random_state=42, stratify=y
```
- )

## ¿Para qué sirve el parámetro stratify=y?

- Para aplicar el mismo escalado tanto a X_train como a X_test durante la división.
- Para ordenar las filas del dataset por la variable objetivo antes de dividir.
- Para que el árbol reciba los datos de entrenamiento siempre en el mismo orden aleatorio.
- Para garantizar que la proporción de clases en train y test sea representativa de la distribución original del dataset.
- Correcta
stratify=y hace que train_test_split mantenga la misma proporción de cada clase tanto en entrenamiento como en prueba. El taller aplica este parámetro y luego verifica la distribución resultante con y_train.value_counts().

- Retroalimentación
stratify=y hace que train_test_split mantenga la misma proporción de cada clase tanto en entrenamiento como en prueba. El taller aplica este parámetro y luego verifica la distribución resultante con y_train.value_counts().

- --

Pregunta 35

¿Por qué SVM elige el hiperplano con el mayor margen posible en lugar de cualquier hiperplano que separe correctamente las clases?

- Porque un margen mayor garantiza que el modelo producirá probabilidades más calibradas para cada clase.
- Porque un margen mayor actúa como zona de seguridad, reduciendo el riesgo de clasificar mal puntos nuevos y mejorando la generalización.
- Correcta
El margen actúa como un colchón de seguridad geométrico. Un margen amplio significa que un punto nuevo necesita alejarse bastante de la frontera para ser mal clasificado, dando robustez al modelo.
- Porque un margen mayor reduce el tiempo de entrenamiento al necesitar menos iteraciones del optimizador.
- Porque un margen mayor implica que el modelo encontró menos vectores de soporte, lo que siempre indica menor complejidad del modelo.

- Retroalimentación
El margen actúa como un colchón de seguridad geométrico. Un margen amplio significa que un punto nuevo necesita alejarse bastante de la frontera para ser mal clasificado, dando robustez al modelo.

- --

Pregunta 36

## ¿Qué produce la siguiente instrucción?

from sklearn.tree import export_text
reglas = export_text(arbol, feature_names=features)
- print(reglas)

- La importancia de cada variable en formato de tabla ordenada de mayor a menor contribución.
- Un gráfico visual del árbol con colores por clase y valores Gini en cada nodo.
- Las reglas IF-THEN aprendidas por el árbol en formato de texto, mostrando las condiciones de cada división.
- Correcta
export_text convierte la estructura del árbol en texto legible con reglas IF-THEN. El taller lo describe como una de las ventajas más importantes del árbol: su interpretabilidad en forma de reglas de decisión.
- Un reporte con accuracy, precision, recall y F1 del árbol evaluado sobre el conjunto de prueba.

- Retroalimentación
export_text convierte la estructura del árbol en texto legible con reglas IF-THEN. El taller lo describe como una de las ventajas más importantes del árbol: su interpretabilidad en forma de reglas de decisión.

- --

Pregunta 37

¿Por qué se recomienda usar el Método del Codo y el coeficiente de Silhouette conjuntamente para elegir K, en lugar de usar solo uno?

- Porque el Codo mide compacidad y siempre disminuye con K, mientras que el Silhouette mide cohesión y separación; juntos compensan las limitaciones individuales de cada métrica.
- Correcta
Correcto. La inercia siempre baja con K y no tiene un máximo útil. El Silhouette tiene un máximo que indica separación óptima pero es costoso en datos grandes. Usarlos juntos permite una elección fundamentada: cuando el codo y el máximo de Silhouette coinciden en el mismo K, la decisión es sólida.
- Porque scikit-learn solo permite calcular ambas métricas de forma simultánea, nunca por separado.
- Porque ambas métricas miden exactamente lo mismo, y usar las dos evita errores de cálculo.
- Porque el Método del Codo requiere datos estandarizados y el Silhouette no, de modo que se usan en etapas distintas del pipeline.

- Retroalimentación
Correcto. La inercia siempre baja con K y no tiene un máximo útil. El Silhouette tiene un máximo que indica separación óptima pero es costoso en datos grandes. Usarlos juntos permite una elección fundamentada: cuando el codo y el máximo de Silhouette coinciden en el mismo K, la decisión es sólida.

- --

Pregunta 38

Un equipo entrena una SVM para detectar diabetes. El dataset tiene 85% de pacientes sin diabetes y 15% con diabetes. ¿Qué métrica de scoring es más adecuada para GridSearchCV en este caso?

- **accuracy**, porque mide el porcentaje global de predicciones correctas y siempre es la métrica más informativa.
- **recall**, porque en detección de enfermedad los falsos negativos (no detectar diabetes real) son más costosos que los falsos positivos.
- Correcta
En detección de enfermedades, perder un caso real (falso negativo) es más grave que alertar a un paciente sano (falso positivo). Recall maximiza la detección de casos positivos reales.
- **accuracy**, porque con datasets desbalanceados esta métrica es más confiable que recall o f1.
- **precision**, porque en detección de enfermedad lo más importante es no alarmar innecesariamente a pacientes sanos.

- Retroalimentación
En detección de enfermedades, perder un caso real (falso negativo) es más grave que alertar a un paciente sano (falso positivo). Recall maximiza la detección de casos positivos reales.

- --

Pregunta 39

## ¿Qué hace PCA(n_components=0.90) en scikit-learn?

- Aplica PCA y descarta el 90% de las variables originales, conservando solo el 10% más informativo.
- Aplica PCA con un factor de escala de 0.90 sobre los loadings de cada componente.
- Aplica PCA y conserva automáticamente el número mínimo de componentes que acumulen al menos el 90% de la varianza explicada.
- Correcta
Cuando n_components es un float entre 0 y 1, scikit-learn selecciona automáticamente el número mínimo de componentes necesarios para acumular ese porcentaje de varianza. Es la forma de aplicar la regla práctica de forma automática.
- Aplica PCA y conserva exactamente 90 componentes, independientemente del número de variables del dataset.

- Retroalimentación
Cuando n_components es un float entre 0 y 1, scikit-learn selecciona automáticamente el número mínimo de componentes necesarios para acumular ese porcentaje de varianza. Es la forma de aplicar la regla práctica de forma automática.

- --

Pregunta 40

## ¿Cuáles son las tres propiedades clave de las componentes principales?

- Son independientes entre sí, tienen media 1 y desviación estándar 0, y eliminan todas las variables originales del dataset.
- Son no correlacionadas entre sí, ordenadas de mayor a menor varianza explicada, y cada una es una combinación lineal de las variables originales.
- Correcta
Estas son exactamente las tres propiedades documentadas: no correlación entre componentes, orden por varianza decreciente (PC1 mayor, PC2 siguiente), y naturaleza de combinación lineal (suma ponderada) de las variables originales.
- Son variables originales seleccionadas, ordenadas por correlación con la variable objetivo, y siempre positivas.
- Son variables binarias (0/1), perpendiculares al hiperplano de separación, y se obtienen mediante un proceso de muestreo.

- Retroalimentación
Estas son exactamente las tres propiedades documentadas: no correlación entre componentes, orden por varianza decreciente (PC1 mayor, PC2 siguiente), y naturaleza de combinación lineal (suma ponderada) de las variables originales.

- --

Pregunta 41

En el taller se define el siguiente param_grid para optimizar el árbol con GridSearchCV(cv=5):

param_grid = {
**max_depth**:         [3, 5, 7, 10, None],
**min_samples_split**: [2, 5, 10],
**min_samples_leaf**:  [1, 3, 5],
- **criterion**:         [**gini**, **entropy**]
- }

## ¿Cuántos entrenamientos totales ejecutará GridSearchCV?

- 90 entrenamientos (producto cartesiano: 5 × 3 × 3 × 2, sin contar folds).
- 13 entrenamientos (suma de valores: 5 + 3 + 3 + 2).
- 900 entrenamientos (90 combinaciones × 5 folds × 2 criterios).
- 450 entrenamientos (90 combinaciones × 5 folds).
- Correcta
Producto cartesiano: 5 × 3 × 3 × 2 = 90 combinaciones. Con cv=5: 90 × 5 = 450 entrenamientos totales. El taller calcula este resultado directamente con el código que multiplica todos los len(v) del param_grid.

- Retroalimentación
Producto cartesiano: 5 × 3 × 3 × 2 = 90 combinaciones. Con cv=5: 90 × 5 = 450 entrenamientos totales. El taller calcula este resultado directamente con el código que multiplica todos los len(v) del param_grid.

- --

Pregunta 42

Antes de entrenar un Random Forest, se recomienda entrenar primero un árbol de decisión individual sobre el mismo dataset. ¿Cuál es el propósito principal de este paso?

- Establecer una línea base (baseline) de rendimiento para cuantificar cuánto mejora el ensamble sobre el modelo más simple.
- Correcta
El baseline permite medir objetivamente el valor agregado del ensamble respecto al modelo más simple.
- Reemplazar el árbol de decisión con Random Forest una vez verificado que el árbol no funciona correctamente.
- Validar que el dataset no tiene errores de preprocesamiento antes de entrenar el modelo más complejo.
- Usar el árbol de decisión como inicialización de los primeros árboles del bosque de Random Forest.

- Retroalimentación
El baseline permite medir objetivamente el valor agregado del ensamble respecto al modelo más simple.

- --

Pregunta 43

Con un dataset de 1 000 registros, cada árbol de Random Forest se entrena con una muestra Bootstrap. Aproximadamente, ¿cuántos registros quedan fuera de esa muestra (muestras OOB)?

- 0 registros (0%), porque Bootstrap selecciona todas las filas del dataset antes de repetir alguna.
- 370 registros (~37%), porque con muestreo con reemplazo aproximadamente ese porcentaje de filas únicas queda fuera.
- Correcta
Con muestreo con reemplazo de N elementos, aproximadamente el 37% de las filas únicas queda fuera de cada muestra. El material documenta explícitamente esta proporción: **~37% quedan fuera** y **~370 jugadores NO seleccionados → muestras OOB**.
- 100 registros (10%), porque Bootstrap elimina el 10% de los datos más ruidosos.
- 500 registros (50%), porque Bootstrap divide el dataset exactamente a la mitad.

- Retroalimentación
Con muestreo con reemplazo de N elementos, aproximadamente el 37% de las filas únicas queda fuera de cada muestra. El material documenta explícitamente esta proporción: **~37% quedan fuera** y **~370 jugadores NO seleccionados → muestras OOB**.

- --

Pregunta 44

### Después de entrenar el siguiente modelo

modelo_rbf = SVC(kernel=**rbf**, C=1.0, gamma=**scale**, random_state=42)
modelo_rbf.fit(X_train_s, y_train)
print(modelo_rbf.n_support_)

## La salida es [452 410]. ¿Qué indica este resultado?

- El modelo clasificó correctamente 452 registros de la clase 0 y 410 de la clase 1 en el conjunto de prueba.
- El modelo descartó 452 y 410 registros por ser outliers antes de encontrar el hiperplano.
- El modelo necesitó 452 iteraciones para converger en la clase 0 y 410 para la clase 1.
- El modelo encontró 452 vectores de soporte de la clase 0 (Legítima) y 410 de la clase 1 (Fraude) en el conjunto de entrenamiento.
- Correcta
n_support_ es un atributo de SVC entrenado que indica cuántos vectores de soporte pertenecen a cada clase. Estos son los puntos del conjunto de entrenamiento que determinan el hiperplano.

- Retroalimentación
n_support_ es un atributo de SVC entrenado que indica cuántos vectores de soporte pertenecen a cada clase. Estos son los puntos del conjunto de entrenamiento que determinan el hiperplano.

- --

Pregunta 45

¿Cuál de las siguientes afirmaciones describe correctamente qué es el clustering?

- Una técnica no supervisada que agrupa observaciones de modo que los objetos de un mismo grupo sean más similares entre sí que con los de otros grupos.
- Correcta
Correcto. El clustering es una técnica de aprendizaje no supervisado cuyo criterio de agrupación es la similitud interna: los objetos de un mismo cluster deben parecerse más entre sí que con los de otros clusters.
- Un método de reducción de dimensiones que transforma variables correlacionadas en componentes ortogonales.
- Un algoritmo de regresión que minimiza el error cuadrático medio entre predicciones y valores reales.
- Una técnica supervisada que clasifica nuevas observaciones usando etiquetas aprendidas durante el entrenamiento.

- Retroalimentación
Correcto. El clustering es una técnica de aprendizaje no supervisado cuyo criterio de agrupación es la similitud interna: los objetos de un mismo cluster deben parecerse más entre sí que con los de otros clusters.

- --

Pregunta 46

## ¿Cuál es la diferencia fundamental entre PCA y la selección de variables?

- PCA y la selección de variables son equivalentes; ambas reducen el número de columnas del dataset sin transformar los valores.
- PCA crea variables nuevas (componentes) que combinan las originales de forma óptima; no elimina variables del dataset original.
- Correcta
PCA transforma el espacio de variables creando combinaciones lineales que maximizan la varianza capturada. Las variables originales siguen existiendo; lo que cambia es la representación de los datos.
- PCA elimina filas del dataset con valores extremos; la selección de variables elimina columnas con alta correlación.
- PCA elimina las variables menos importantes del dataset; la selección de variables crea nuevas variables combinando las originales.

- Retroalimentación
PCA transforma el espacio de variables creando combinaciones lineales que maximizan la varianza capturada. Las variables originales siguen existiendo; lo que cambia es la representación de los datos.

- --

Pregunta 47

Según la regla práctica para elegir MinPts en DBSCAN, ¿qué valor mínimo se recomienda para datos en 2 dimensiones?

- MinPts debe ser igual al número de clusters esperados más uno.
- MinPts = 10, porque valores bajos producen clusters con sobreajuste.
- MinPts = 4 o 5, porque la regla práctica indica MinPts ≥ dimensiones + 1.
- Correcta
Correcto. La regla práctica (Sander et al., 1998) establece MinPts ≥ dimensiones + 1. Para datos en 2D eso da MinPts ≥ 3, y el rango recomendado es 4 o 5.
- MinPts = 2, porque en 2D solo se necesita un vecino adicional para definir densidad.

- Retroalimentación
Correcto. La regla práctica (Sander et al., 1998) establece MinPts ≥ dimensiones + 1. Para datos en 2D eso da MinPts ≥ 3, y el rango recomendado es 4 o 5.

- --

Pregunta 48

¿Por qué la inercia (WCSS), usada para evaluar K-Means, no es una métrica válida para evaluar DBSCAN?

- Porque la inercia no puede calcularse con scikit-learn para objetos DBSCAN.
- Porque la inercia solo es válida cuando todos los puntos están asignados a un cluster, y DBSCAN produce puntos de ruido sin asignar.
- Porque DBSCAN no utiliza distancias euclidianas en su proceso de agrupamiento.
- Porque DBSCAN no tiene centroides, por lo que no existe la distancia de cada punto a su centroide que define la inercia.
- Correcta
Correcto. La inercia es la suma de distancias al cuadrado de cada punto a su centroide. DBSCAN no genera centroides: agrupa por densidad, no por proximidad a un punto representativo. Por eso se usan métricas como Silhouette o Davies-Bouldin.

- Retroalimentación
Correcto. La inercia es la suma de distancias al cuadrado de cada punto a su centroide. DBSCAN no genera centroides: agrupa por densidad, no por proximidad a un punto representativo. Por eso se usan métricas como Silhouette o Davies-Bouldin.

- --

Pregunta 49

En el algoritmo K-Means, después de asignar cada observación al centroide más cercano, ¿cómo se actualiza la posición de cada centroide?

- Se desplaza al punto más cercano a la media del cluster anterior.
- Se mueve al promedio de todas las observaciones asignadas a ese cluster.
- Correcta
Correcto. En K-Means, el centroide se actualiza como el promedio (media aritmética) de todos los puntos asignados a ese cluster. Por eso el algoritmo se llama K-Means (K-medias).
- Se reposiciona aleatoriamente para evitar mínimos locales.
- Se calcula como el punto más alejado del centroide del cluster vecino más cercano.

- Retroalimentación
Correcto. En K-Means, el centroide se actualiza como el promedio (media aritmética) de todos los puntos asignados a ese cluster. Por eso el algoritmo se llama K-Means (K-medias).

- --

Pregunta 50

Dos modelos SVM producen los siguientes resultados sobre el mismo conjunto de prueba:

Modelo              Accuracy   Recall fraude   F1 fraude
LinearSVC            0.7475        0.2818        0.3804
SVC (Kernel RBF)     0.7325        0.2182        0.3097

¿Cuál modelo es preferible para un sistema de detección de fraude bancario y por qué?

- SVC (Kernel RBF), porque el kernel RBF siempre supera al lineal cuando los datos tienen variables categóricas.
- Ninguno de los dos; ambos deben descartarse porque el recall de fraude es inferior al 50%.
- SVC (Kernel RBF), porque tiene menor accuracy, lo que indica que el modelo no está sobreajustado.
- LinearSVC, porque tiene mayor accuracy, recall de fraude y F1 de fraude en todas las métricas.
- Correcta
LinearSVC supera al RBF en las tres métricas: accuracy (0.7475 vs 0.7325), recall de fraude (0.2818 vs 0.2182) y F1 de fraude (0.3804 vs 0.3097). El kernel más complejo no siempre gana; la elección debe basarse en evidencia empírica.

- Retroalimentación
LinearSVC supera al RBF en las tres métricas: accuracy (0.7475 vs 0.7325), recall de fraude (0.2818 vs 0.2182) y F1 de fraude (0.3804 vs 0.3097). El kernel más complejo no siempre gana; la elección debe basarse en evidencia empírica.

- --

Pregunta 51

¿Cuál es el orden correcto del pipeline de preprocesamiento para entrenar una SVM?

- OHE → Train/Test Split → StandardScaler (fit solo en train) → entrenar SVM
- Correcta
El OHE se aplica primero (no aprende estadísticas de los datos), luego se divide, y finalmente se escala ajustando el scaler solo sobre los datos de entrenamiento para evitar fuga de información.
- StandardScaler → OHE → Train/Test Split → entrenar SVM
- Train/Test Split → StandardScaler → OHE → entrenar SVM
- OHE → StandardScaler (fit en todo X) → Train/Test Split → entrenar SVM

- Retroalimentación
El OHE se aplica primero (no aprende estadísticas de los datos), luego se divide, y finalmente se escala ajustando el scaler solo sobre los datos de entrenamiento para evitar fuga de información.

- --

Pregunta 52

En un Random Forest de 100 árboles, 72 predicen la clase 1 y 28 predicen la clase 0 para un registro. ¿Cuál es la predicción final y qué devuelve predict_proba()?

- La predicción final es la clase 1 por votación por mayoría; predict_proba() devuelve [0.28, 0.72].
- Correcta
La clase con más votos gana (72 > 28 → clase 1). predict_proba() devuelve la proporción de votos por clase: [0.28, 0.72], donde el primer valor corresponde a la clase 0 y el segundo a la clase 1.
- La predicción final es la clase 1; predict_proba() devuelve [0.72, 0.28] en ese mismo orden.
- La predicción final es la clase 0 porque la mayoría de árboles en desacuerdo indica incertidumbre; predict_proba() devuelve [0.50, 0.50].
- La predicción final requiere un umbral de al menos 80% de votos; con 72% no se emite predicción.

- Retroalimentación
La clase con más votos gana (72 > 28 → clase 1). predict_proba() devuelve la proporción de votos por clase: [0.28, 0.72], donde el primer valor corresponde a la clase 0 y el segundo a la clase 1.

- --

Pregunta 53

¿Qué representa el valor rf.oob_score_ después de entrenar un RandomForestClassifier con oob_score=True?

- El accuracy del modelo evaluado sobre el conjunto de prueba X_test.
- El número de muestras que quedaron fuera del Bootstrap, expresado como proporción del dataset total.
- El promedio del índice Gini de todos los nodos hoja de todos los árboles del bosque.
- Un estimado de la accuracy del modelo, calculado usando las muestras OOB de cada árbol, sin haber usado X_test.
- Correcta
oob_score_ es la accuracy estimada usando las muestras que el Bootstrap dejó fuera de cada árbol. El material lo describe como **87.3% de accuracy estimada sin tocar X_test** y lo compara con un k-fold cross-validation sin costo adicional.

- Retroalimentación
oob_score_ es la accuracy estimada usando las muestras que el Bootstrap dejó fuera de cada árbol. El material lo describe como **87.3% de accuracy estimada sin tocar X_test** y lo compara con un k-fold cross-validation sin costo adicional.

- --

Pregunta 54

## ¿Qué son los loadings en PCA y dónde se encuentran en scikit-learn?

- Los loadings son los porcentajes de varianza explicada por cada componente, accesibles en pca.explained_variance_ratio_.
- Los loadings son los pesos con que cada variable original contribuye a una componente; se acceden en pca.components_.
- Correcta
Los loadings definen cómo se construye cada componente a partir de las variables originales. pca.components_ es una matriz donde cada fila es un componente y cada columna es una variable original.
- Los loadings son las coordenadas de cada observación en el nuevo espacio de componentes, almacenadas en la matriz transformada por fit_transform.
- Los loadings son los valores propios (eigenvalues) de la matriz de covarianza, que determinan el número óptimo de componentes.

- Retroalimentación
Los loadings definen cómo se construye cada componente a partir de las variables originales. pca.components_ es una matriz donde cada fila es un componente y cada columna es una variable original.

- --

Pregunta 55

En un biplot de PCA, ¿qué indica que dos flechas de variables apunten en la misma dirección?

- Que ambas variables están correlacionadas positivamente entre sí.
- Correcta
Cuando dos flechas apuntan en la misma dirección, ambas variables aumentan o disminuyen juntas. Esto indica correlación positiva: las observaciones con alto valor en una tienden a tener alto valor en la otra.
- Que ambas variables tienen loading cercano a cero en PC1 y PC2.
- Que ambas variables tienen el mismo loading absoluto en todos los componentes del PCA.
- Que ambas variables son irrelevantes para los dos componentes visualizados.

- Retroalimentación
Cuando dos flechas apuntan en la misma dirección, ambas variables aumentan o disminuyen juntas. Esto indica correlación positiva: las observaciones con alto valor en una tienden a tener alto valor en la otra.

- --

Pregunta 56

Según el material, ¿qué ocurre al agregar más árboles (aumentar n_estimators) en un Random Forest?

- El modelo nunca empeora al agregar más árboles; se vuelve más estable, aunque con mayor costo computacional.
- Correcta
El material documenta que agregar más árboles nunca empeora el modelo. Con n_estimators suficientemente alto, el error generaliza bien. Sin embargo, el costo computacional y de memoria sí aumenta, por lo que 100-500 es suficiente en la mayoría de casos.
- El modelo se vuelve más propenso al sobreajuste porque cada árbol adicional memoriza más detalles del entrenamiento.
- Los árboles adicionales reemplazan a los de menor accuracy, produciendo un bosque formado solo por los mejores árboles.
- La accuracy mejora indefinidamente con más árboles, por eso siempre se recomienda usar el mayor valor posible.

- Retroalimentación
El material documenta que agregar más árboles nunca empeora el modelo. Con n_estimators suficientemente alto, el error generaliza bien. Sin embargo, el costo computacional y de memoria sí aumenta, por lo que 100-500 es suficiente en la mayoría de casos.

- --

Pregunta 57

Si se configura un valor de ε muy grande en DBSCAN, manteniendo MinPts fijo, ¿qué resultado se espera?

- Clusters coherentes con ruido justo, correspondiente a outliers reales.
- Muchos puntos de ruido y clusters muy fragmentados.
- El algoritmo no converge y produce un error de ejecución.
- Todo se fusiona en un solo cluster y se pierde la estructura de los datos.
- Correcta
Correcto. Con ε muy grande, la vecindad de cada punto abarca prácticamente todos los demás puntos del dataset, por lo que todo queda conectado en un único cluster sin estructura.

- Retroalimentación
Correcto. Con ε muy grande, la vecindad de cada punto abarca prácticamente todos los demás puntos del dataset, por lo que todo queda conectado en un único cluster sin estructura.

- --

Pregunta 58

¿En cuál de los siguientes escenarios K-Means produciría resultados incorrectos aunque los grupos sean claramente distinguibles visualmente?

- Cuando la variable con mayor rango numérico no ha sido estandarizada antes de aplicar el algoritmo.
- Cuando los grupos reales tienen forma de anillo o de media luna en el espacio de variables.
- Correcta
Correcto. K-Means asume que los clusters tienen forma de esfera. Para estructuras como anillos o medias lunas, el algoritmo divide mal los grupos aunque sean visualmente evidentes. Para esos casos el material sugiere explorar DBSCAN o clustering jerárquico.
- Cuando el dataset tiene más de 1,000 observaciones y pocas variables.
- Cuando se usa random_state=42 en lugar de un valor aleatorio.

- Retroalimentación
Correcto. K-Means asume que los clusters tienen forma de esfera. Para estructuras como anillos o medias lunas, el algoritmo divide mal los grupos aunque sean visualmente evidentes. Para esos casos el material sugiere explorar DBSCAN o clustering jerárquico.

- --

Pregunta 59

El índice Davies-Bouldin y el coeficiente de Silhouette son dos métricas para evaluar clustering. ¿Cuál es la diferencia principal entre ellas?

- El Silhouette va de 0 a 1 y Davies-Bouldin de -1 a 1; en ambos casos valores más altos son mejores.
- Davies-Bouldin solo puede usarse con K-Means, mientras que Silhouette es válido para cualquier algoritmo de clustering.
- El Silhouette evalúa cada punto individualmente comparando cohesión y separación, mientras que Davies-Bouldin evalúa explícitamente la separación entre cada par de clusters. En Davies-Bouldin, valores más bajos indican mejor separación.
- Correcta
Correcto. El Silhouette mide por punto: (b-a)/max(a,b). Davies-Bouldin calcula el promedio de la razón entre dispersión intra-cluster y distancia entre clusters para cada par; valores más bajos son mejores.
- Son equivalentes en los resultados que producen; la única diferencia es la escala numérica.

- Retroalimentación
Correcto. El Silhouette mide por punto: (b-a)/max(a,b). Davies-Bouldin calcula el promedio de la razón entre dispersión intra-cluster y distancia entre clusters para cada par; valores más bajos son mejores.

- --

Pregunta 60

### Un estudiante escribe el siguiente código

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # sobre todo el dataset

X_train, X_test, y_train, y_test = train_test_split(
```
X_scaled, y, test_size=0.2, random_state=42
```
- )
grid_search = GridSearchCV(SVC(), param_grid, cv=5, scoring=**f1**)
grid_search.fit(X_train, y_train)

## ¿Cuál es el problema de este código?

- GridSearchCV no acepta datos ya escalados; el escalado debe hacerse dentro de un Pipeline.
- train_test_split debe ejecutarse antes de definir el param_grid para que las combinaciones se ajusten al tamaño del train set.
- scoring=**f1** no es compatible con SVC; se debe usar scoring=**accuracy** con este estimador.
- El scaler se ajusta sobre todo el dataset antes de dividir, lo que filtra información del test set al entrenamiento (data leakage).
- Correcta
Al hacer fit_transform(X) antes del split, el scaler aprende la media y desviación de todo el dataset incluyendo X_test. Esto contamina la evaluación: el modelo conoce indirectamente estadísticas del conjunto de prueba.

- Retroalimentación
Al hacer fit_transform(X) antes del split, el scaler aprende la media y desviación de todo el dataset incluyendo X_test. Esto contamina la evaluación: el modelo conoce indirectamente estadísticas del conjunto de prueba.