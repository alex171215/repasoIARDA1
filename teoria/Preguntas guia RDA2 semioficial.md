# Pregunta 1

¿Cuál es la principal razón por la que el margen suave (soft margin) es el estándar en la práctica, mientras que el margen duro (hard margin) casi no se usa?

- El margen suave es más rápido de calcular porque no requiere resolver el problema de optimización completo.
- El margen duro solo funciona si los datos son perfectamente separables; un único outlier puede hacer que no exista solución.
- Correcta
- El margen suave siempre produce un margen más amplio que el duro, lo que garantiza mejor generalización en todos los casos.
- El margen duro produce probabilidades incorrectas porque no incorpora variables de holgura.

- Retroalimentación
En datos reales siempre hay ruido y outliers. El margen duro exige clasificación perfecta de todos los puntos, condición imposible de cumplir en casi cualquier problema práctico.

- --

Pregunta 2

¿Por qué SVM elige el hiperplano con el mayor margen posible en lugar de cualquier hiperplano que separe correctamente las clases?

- Porque un margen mayor reduce el tiempo de entrenamiento al necesitar menos iteraciones del optimizador.
- Porque un margen mayor implica que el modelo encontró menos vectores de soporte, lo que siempre indica menor complejidad del modelo.
- Porque un margen mayor actúa como zona de seguridad, reduciendo el riesgo de clasificar mal puntos nuevos y mejorando la generalización.
- Correcta
- Porque un margen mayor garantiza que el modelo producirá probabilidades más calibradas para cada clase.

- Retroalimentación
La opción correcta es c. Un margen mayor actúa como zona de seguridad, reduciendo el riesgo de clasificar mal puntos nuevos y mejorando la generalización.

- --

Pregunta 3

Un modelo SVM tiene buen desempeño en entrenamiento pero generaliza mal en datos nuevos. ¿Qué ajuste al parámetro C es recomendable?

- Fijar C = 0 para eliminar toda penalización y obtener el margen máximo posible.
- Aumentar C para que el modelo penalice más los errores y mejore en datos nuevos.
- Mantener C fijo y cambiar únicamente el tipo de kernel a uno más simple.
- Reducir C para ampliar el margen y reducir el overfitting.
- Correcta

- Retroalimentación
Buen entrenamiento y mala generalización es la señal clásica de overfitting. Reducir C amplía el margen y hace al modelo más tolerante con errores de entrenamiento, mejorando la generalización.

- --

Pregunta 4

## ¿Qué es el muestreo Bootstrap en el contexto de Random Forest?

- Seleccionar aleatoriamente con reemplazo N filas del dataset de entrenamiento para crear una muestra del mismo tamaño que el original.
- Correcta
- Dividir el dataset en k subconjuntos de igual tamaño para evaluar el modelo k veces, como en la validación cruzada.
- Eliminar aleatoriamente el 37% de las filas del dataset antes de entrenar cada árbol para reducir el sobreajuste.
- Escalar las variables del dataset para que tengan media 0 y desviación estándar 1 antes de entrenar cada árbol.

- Retroalimentación
Bootstrap es el muestreo con reemplazo. Con N filas originales, se extraen N filas permitiendo repeticiones. Esto produce un dataset distinto del original para cada árbol del bosque.

- --

Pregunta 5

¿Cuál es el orden correcto del pipeline de preprocesamiento para entrenar una SVM?

- OHE → StandardScaler (fit en todo X) → Train/Test Split → entrenar SVM
- Train/Test Split → StandardScaler → OHE → entrenar SVM
- OHE → Train/Test Split → StandardScaler (fit solo en train) → entrenar SVM
- Correcta
- StandardScaler → OHE → Train/Test Split → entrenar SVM

- Retroalimentación
El OHE se aplica primero (no aprende estadísticas de los datos), luego se divide, y finalmente se escala ajustando el scaler solo sobre los datos de entrenamiento para evitar fuga de información.

- --

Pregunta 6

Un analista aplica DBSCAN a un dataset con dos grupos: uno muy denso (500 puntos en un área pequeña) y otro disperso (200 puntos en un área grande). ¿Qué limitación de DBSCAN es relevante aquí?

- DBSCAN tiene dificultad con clusters de densidades muy diferentes: un único valor de ε no puede capturar simultáneamente el grupo denso y el disperso.
- Correcta
- DBSCAN no funciona cuando hay diferencias de tamaño entre clusters, porque asume grupos de igual cardinalidad.
- DBSCAN requiere que todos los clusters tengan al menos MinPts × 10 puntos para ser detectados.
- DBSCAN no puede procesar datasets con más de 500 puntos en un mismo cluster.

- Retroalimentación
Correcto. DBSCAN usa un único ε global. Si ε es lo suficientemente grande para capturar el cluster disperso, probablemente fusionará el denso con sus vecinos. Si es pequeño para el denso, el disperso quedará como ruido. Un ε único no captura bien densidades muy distintas.

- --

Pregunta 7

## ¿Qué propiedad define matemáticamente a PC1 y PC2?

- PC1 es la componente que captura la menor varianza del dataset, siendo la más específica.
- PC1 es la componente que contiene únicamente la variable original con mayor varianza individual.
- PC1 captura la mayor varianza del dataset; PC2 captura la mayor varianza restante siendo perpendicular a PC1.
- Correcta
- PC1 es la componente que minimiza la correlación con todas las demás variables del dataset.

- Retroalimentación
Esta es la definición matemática documentada. PC1 es la dirección de máxima varianza; PC2 es la dirección de máxima varianza restante y debe ser perpendicular (ortogonal) a PC1 para garantizar que los componentes no estén correlacionados.

- --

Pregunta 8

## ¿Cuál es el orden correcto del flujo de PCA en scikit-learn?

- StandardScaler() → PCA(n_components=k) → fit_transform(X_train) → fit_transform(X_test) → explained_variance_ratio_
- PCA(n_components=k) → fit_transform(X) → StandardScaler() → explained_variance_ratio_
- PCA(n_components=k) → StandardScaler() → fit_transform(X_scaled) → explained_variance_ratio_
- StandardScaler() → fit_transform(X_train) → PCA(n_components=k) → fit_transform(X_scaled) → explained_variance_ratio_
- Correcta

- Retroalimentación
El flujo documentado es: primero estandarizar con StandardScaler, luego aplicar PCA sobre los datos escalados, y finalmente leer la varianza explicada con explained_variance_ratio_.

- --

Pregunta 9

## ¿Cuál es la definición formal de un árbol de decisión según el material?

- Un modelo no supervisado que agrupa observaciones similares en clusters mediante preguntas binarias sobre sus atributos.
- Un modelo supervisado que clasifica nuevas observaciones siguiendo una jerarquía de preguntas binarias sobre sus atributos, donde cada camino raíz-hoja equivale a una regla IF-THEN.
- Correcta
- Un modelo supervisado que maximiza el margen entre dos clases usando un hiperplano de separación.
- Un algoritmo de optimización que busca exhaustivamente la mejor combinación de hiperparámetros mediante validación cruzada.

- Retroalimentación
Esta es la definición formal de Breiman et al. (1984 — CART). El árbol es supervisado, usa preguntas binarias jerarquizadas, y cada ruta completa se traduce en una regla IF-THEN interpretable.

- --

Pregunta 10

## Después de ejecutar GridSearchCV, ¿qué representa grid_search.best_score_?

- El score del mejor modelo evaluado sobre el conjunto de test (X_test).
- El score promedio de todos los modelos probados, incluyendo los de peor rendimiento.
- El score del modelo base antes de aplicar GridSearchCV, usado como referencia de comparación.
- El score promedio de validación cruzada del mejor modelo, calculado exclusivamente sobre X_train.
- Correcta

- Retroalimentación
best_score_ es el promedio de los k scores obtenidos en los k folds de validación cruzada, calculado sobre particiones de X_train. Nunca involucra X_test.

- --

Pregunta 11

¿Cuál de las siguientes afirmaciones describe correctamente qué es el clustering?

- Una técnica no supervisada que agrupa observaciones de modo que los objetos de un mismo grupo sean más similares entre sí que con los de otros grupos.
- Correcta
- Un método de reducción de dimensiones que transforma variables correlacionadas en componentes ortogonales.
- Una técnica supervisada que clasifica nuevas observaciones usando etiquetas aprendidas durante el entrenamiento.
- Un algoritmo de regresión que minimiza el error cuadrático medio entre predicciones y valores reales.

- Retroalimentación
Correcto. El clustering es una técnica de aprendizaje no supervisado cuyo criterio de agrupación es la similitud interna: los objetos de un mismo cluster deben parecerse más entre sí que con los de otros clusters.

- --

Pregunta 12

Al comparar los resultados de K-Means y DBSCAN sobre el mismo dataset se genera:

tabla = pd.crosstab(df[**cluster_kmeans**], df[**cluster_dbscan**],
```
rownames=['K-Means'], colnames=['DBSCAN'])
```

## ¿Qué información proporciona la columna -1 de esta tabla?

- Los puntos que ambos algoritmos coincidieron en clasificar como outliers y que no pertenecen a ningún cluster.
- Los puntos que K-Means clasificó incorrectamente y que deberían ser eliminados del análisis.
- La cantidad de puntos que DBSCAN asignó al cluster número -1, que es siempre el cluster de mayor tamaño.
- En qué cluster de K-Means cayeron los puntos que DBSCAN etiquetó como ruido, revelando cómo K-Means absorbió los outliers.
- Correcta

- Retroalimentación
Correcto. La columna -1 muestra los puntos de ruido de DBSCAN (etiqueta -1) distribuidos por los clusters de K-Means. Esto revela en qué grupo K-Means **forzó** cada outlier, información útil para entender si el modelo supervisado los absorbió correctamente.

- --

Pregunta 13

¿Por qué la inercia (WCSS), usada para evaluar K-Means, no es una métrica válida para evaluar DBSCAN?

- Porque la inercia solo es válida cuando todos los puntos están asignados a un cluster, y DBSCAN produce puntos de ruido sin asignar.
- Porque DBSCAN no utiliza distancias euclidianas en su proceso de agrupamiento.
- Porque DBSCAN no tiene centroides, por lo que no existe la distancia de cada punto a su centroide que define la inercia.
- Correcta
- Porque la inercia no puede calcularse con scikit-learn para objetos DBSCAN.

- Retroalimentación
La opción correcta es c. La inercia se define como la distancia de cada punto a su centroide; DBSCAN no tiene centroides, por lo que esa métrica no aplica.

- --

Pregunta 14

## ¿Cuál de las siguientes es una situación en la que NO se debe usar PCA?

- Cuando se busca reducir el ruido antes de entrenar un modelo de Machine Learning.
- Cuando el dataset tiene muchas variables numéricas con alta multicolinealidad.
- Cuando se quiere visualizar datos de alta dimensión en 2D o 3D.
- Cuando las variables son categóricas, porque PCA requiere variables numéricas continuas.
- Correcta

- Retroalimentación
PCA opera calculando covarianzas y buscando direcciones de máxima varianza, lo que solo tiene sentido con variables numéricas continuas. Las variables categóricas no tienen relaciones de varianza interpretables en ese contexto.

- --

Pregunta 15

## ¿Qué hace el siguiente fragmento de código?

from sklearn.svm import LinearSVC
from sklearn.preprocessing import StandardScaler

sc = StandardScaler()
X_train_s = sc.fit_transform(X_train)
X_test_s  = sc.transform(X_test)

modelo = LinearSVC(C=1.0, max_iter=2000, random_state=42)
modelo.fit(X_train_s, y_train)

- Escala los datos ajustando el scaler solo sobre el entrenamiento, y entrena una SVM lineal con C=1.0.
- Correcta
- Entrena el scaler sobre el conjunto de prueba y luego entrena la SVM sobre el conjunto de entrenamiento.
- Entrena una SVM con kernel RBF después de escalar los datos de entrenamiento y prueba con el mismo scaler.
- Escala todo el dataset completo y entrena una SVM polinómica de grado 2.

- Retroalimentación
fit_transform en X_train ajusta y transforma; transform en X_test aplica la misma escala sin reaprender. LinearSVC implementa un kernel lineal, no RBF ni polinómico.

- --

Pregunta 16

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

- train_test_split debe ejecutarse antes de definir el param_grid para que las combinaciones se ajusten al tamaño del train set.
- El scaler se ajusta sobre todo el dataset antes de dividir, lo que filtra información del test set al entrenamiento (data leakage).
- Correcta
- scoring=**f1** no es compatible con SVC; se debe usar scoring=**accuracy** con este estimador.
- GridSearchCV no acepta datos ya escalados; el escalado debe hacerse dentro de un Pipeline.

- Retroalimentación
Al hacer fit_transform(X) antes del split, el scaler aprende la media y desviación de todo el dataset incluyendo X_test. Esto contamina la evaluación: el modelo conoce indirectamente estadísticas del conjunto de prueba.

- --

Pregunta 17

¿Cuál es el valor por defecto de max_features en RandomForestClassifier para tareas de clasificación?

- **None**, que evalúa todas las variables disponibles en cada nodo (equivalente a un árbol CART estándar).
- **log2**, que evalúa log₂(p) variables en cada nodo.
- El valor 1, que evalúa exactamente una variable aleatoria en cada nodo.
- **sqrt**, que evalúa √p variables en cada nodo.
- Correcta

- Retroalimentación
La opción correcta es d. En clasificación, el valor por defecto es **sqrt**, que evalúa √p variables en cada nodo.

- --

Pregunta 18

## ¿Cuál es la diferencia principal entre GridSearchCV y RandomizedSearchCV?

- GridSearchCV usa validación cruzada; RandomizedSearchCV no usa validación cruzada para evaluar cada combinación.
- GridSearchCV solo funciona con SVM; RandomizedSearchCV puede usarse con cualquier estimador de scikit-learn.
- GridSearchCV optimiza una sola métrica; RandomizedSearchCV puede optimizar múltiples métricas simultáneamente.
- GridSearchCV explora todas las combinaciones del espacio definido; RandomizedSearchCV muestrea aleatoriamente n_iter combinaciones y no garantiza el óptimo global.
- Correcta

- Retroalimentación
Esta es la diferencia fundamental. GridSearchCV es exhaustivo pero costoso en espacios grandes; RandomizedSearchCV es más eficiente pero no garantiza encontrar la mejor combinación posible.

- --

Pregunta 19

En un biplot de PCA, ¿qué indica que dos flechas de variables apunten en la misma dirección?

- Que ambas variables están correlacionadas positivamente entre sí.
- Correcta
- Que ambas variables tienen loading cercano a cero en PC1 y PC2.
- Que ambas variables tienen el mismo loading absoluto en todos los componentes del PCA.
- Que ambas variables son irrelevantes para los dos componentes visualizados.

- Retroalimentación
La opción correcta es a. Si dos flechas apuntan en la misma dirección, las variables están correlacionadas positivamente entre sí.

- --

Pregunta 20

¿Qué ventaja ofrece DBSCAN frente a K-Means para la detección de anomalías en los datos?

- DBSCAN produce clusters más compactos que K-Means, lo que facilita identificar puntos fuera de rango.
- DBSCAN calcula automáticamente el número óptimo de clusters mediante validación cruzada interna.
- DBSCAN requiere que el analista marque manualmente los outliers antes de ejecutar el algoritmo.
- DBSCAN identifica automáticamente los outliers etiquetándolos como ruido (etiqueta −1), mientras que K-Means fuerza todos los puntos a pertenecer a un cluster.
- Correcta

- Retroalimentación
Correcto. DBSCAN clasifica los puntos que no entran en ninguna región densa como ruido (etiqueta −1), identificándolos automáticamente como outliers. K-Means asigna todos los puntos a algún cluster, incluso los atípicos.

- --

Pregunta 21

Después de ajustar pca = PCA(n_components=2) sobre un dataset con 10 variables, ¿cuál es la estructura de pca.components_?

- Un array de forma (2,) con el porcentaje de varianza explicada por PC1 y PC2 respectivamente.
- Un array de forma (10,) con la varianza explicada de cada variable original.
- Una matriz de forma (2, 10): 2 filas (una por componente) y 10 columnas (una por variable original).
- Correcta
- Una matriz de forma (n_muestras, 2) con las coordenadas de cada observación en el espacio PCA.

- Retroalimentación
La opción correcta es c. pca.components_ tiene forma (n_components, n_features): una fila por componente y una columna por variable original.

- --

Pregunta 22

Para construir el k-dist graph antes de ejecutar DBSCAN se usa:

## MIN_PTS = 5
nbrs = NearestNeighbors(n_neighbors=MIN_PTS).fit(X_scaled)
distancias, _ = nbrs.kneighbors(X_scaled)
kdist = np.sort(distancias[:, MIN_PTS - 1])[::-1]

## ¿Qué contiene el array kdist después de ejecutar este código?

- Las distancias de cada punto a su MIN_PTS-ésimo vecino más cercano, ordenadas de mayor a menor, para visualizar el codo que indica ε.
- Correcta
- Los índices de los MIN_PTS vecinos más cercanos para cada punto del dataset.
- La distancia euclidiana media de cada punto a todos los demás puntos del dataset.
- La inercia de DBSCAN para distintos valores de MIN_PTS, equivalente al Método del Codo de K-Means.

- Retroalimentación
Correcto. kneighbors retorna las distancias a los n_neighbors vecinos; la columna [-1] o [MIN_PTS-1] es la del vecino más lejano dentro de ese grupo. Ordenar de mayor a menor y graficar produce la curva cuyo codo indica el ε óptimo.

- --

Pregunta 23

Un analista entrena K-Means para K = 1, 2, 3, …, 10 y observa que la inercia disminuye en todos los casos al aumentar K. ¿Cuál es la conclusión correcta?

- Debe aplicarse estandarización antes de continuar, porque sin escalar la inercia no puede ser comparada entre valores de K.
- Los datos no tienen estructura de clusters, porque una buena agrupación debería mostrar inercia creciente para valores altos de K.
- El modelo tiene sobreajuste para todos los valores de K mayores a 3.
- El comportamiento es esperado: la inercia siempre disminuye al aumentar K, por lo que no se puede usar sola para elegir el K óptimo.
- Correcta

- Retroalimentación
Correcto. La inercia siempre disminuye al aumentar K porque con más clusters cada punto puede estar más cerca de su centroide. Con K = n la inercia llega a 0. Por eso se necesita el método del Codo para identificar el punto donde la reducción se vuelve marginal.

- --

Pregunta 24

¿Por qué el Bootstrap garantiza que los árboles de un Random Forest sean distintos entre sí?

- Porque Bootstrap asigna a cada árbol un criterio de división diferente (Gini para unos, entropía para otros).
- Porque cada árbol recibe una muestra con reemplazo que contiene algunas filas repetidas y excluye otras, resultando en un conjunto de entrenamiento diferente para cada árbol.
- Correcta
- Porque Bootstrap elimina aleatoriamente las variables menos importantes antes de entrenar cada árbol.
- Porque Bootstrap aplica una transformación aleatoria a los valores de las variables numéricas en cada muestra.

- Retroalimentación
Al muestrear con reemplazo, cada árbol ve un conjunto de datos diferente: algunas filas aparecen varias veces, otras no aparecen. El material lo documenta: **Con 100 árboles, hay 100 datasets ligeramente distintos → 100 árboles distintos.**

- --

Pregunta 25

## ¿Qué produce el siguiente código?

arbol = DecisionTreeClassifier(max_depth=3, random_state=42)
arbol.fit(X_train, y_train)
print(arbol.get_depth())
print(arbol.get_n_leaves())

- Entrena un árbol con profundidad máxima de 3, luego imprime la profundidad real alcanzada y el número de nodos hoja.
- Correcta
- Entrena un árbol sin límite de profundidad y muestra el número de variables usadas en cada nivel.
- Entrena un árbol y muestra el índice Gini promedio de todos los nodos y el número total de divisiones realizadas.
- Entrena un árbol de profundidad 3 y muestra el accuracy en entrenamiento y el número de vectores de soporte encontrados.

- Retroalimentación
max_depth=3 limita la profundidad máxima. get_depth() devuelve la profundidad real alcanzada (puede ser ≤ 3 si los datos se vuelven puros antes) y get_n_leaves() devuelve el número de nodos hoja del árbol entrenado.

- --

Pregunta 26

¿Cuál es la diferencia principal entre el aprendizaje supervisado y el clustering en cuanto a los datos de entrenamiento?

- El clustering solo funciona con variables numéricas, mientras que el supervisado acepta cualquier tipo de variable.
- El aprendizaje supervisado entrena con etiquetas conocidas (y), mientras que el clustering trabaja únicamente con las variables de entrada (X) sin etiquetas.
- Correcta
- El aprendizaje supervisado requiere más datos que el clustering para producir resultados útiles.
- El aprendizaje supervisado produce grupos de observaciones, mientras que el clustering produce una función predictiva.

- Retroalimentación
Correcto. En supervisado, y es conocida antes de entrenar. En clustering, no existen etiquetas: el algoritmo descubre la estructura en X por sí mismo, sin respuestas predefinidas.

- --

Pregunta 27

En el algoritmo K-Means, después de asignar cada observación al centroide más cercano, ¿cómo se actualiza la posición de cada centroide?

- Se reposiciona aleatoriamente para evitar mínimos locales.
- Se mueve al promedio de todas las observaciones asignadas a ese cluster.
- Correcta
- Se calcula como el punto más alejado del centroide del cluster vecino más cercano.
- Se desplaza al punto más cercano a la media del cluster anterior.

- Retroalimentación
La opción correcta es b. Cada centroide se recalcula como el promedio de todas las observaciones asignadas a ese cluster.

- --

Pregunta 28

En una SVM, el hiperplano de separación se define matemáticamente como w·x + b = 0. ¿Qué representa el vector w en esta ecuación?

- El vector de distancias de cada punto al centroide de su clase.
- El vector de medias de cada variable del dataset de entrenamiento.
- El vector perpendicular al hiperplano que define su dirección en el espacio.
- Correcta
- El vector de probabilidades de clase calculado por el modelo.

- Retroalimentación
w es el vector normal al hiperplano. Su dirección determina la orientación de la frontera de decisión en el espacio de características.

- --

Pregunta 29

### En el siguiente fragmento

score = silhouette_score(X_scaled, labels)

## ¿Por qué se pasa X_scaled en lugar de X (los datos sin estandarizar)?

- Porque silhouette_score de scikit-learn solo acepta arrays con media 0 y desviación estándar 1 en su implementación interna.
- Porque el Silhouette requiere que los datos estén en escala logarítmica antes de calcularse.
- Porque X_scaled tiene menos filas que X, lo que hace el cálculo más eficiente.
- Porque el Silhouette se basa en distancias euclidianas, y sin estandarizar una variable con rango mayor dominaría artificialmente esas distancias.
- Correcta

- Retroalimentación
La opción correcta es d. El Silhouette se basa en distancias euclidianas; sin estandarizar, una variable con rango mayor dominaría artificialmente esas distancias.

- --

Pregunta 30

### En el taller se divide el dataset con

X_train, X_test, y_train, y_test = train_test_split(
```
X, y, test_size=0.2, random_state=42, stratify=y
```
- )

## ¿Para qué sirve el parámetro stratify=y?

- Para ordenar las filas del dataset por la variable objetivo antes de dividir.
- Para aplicar el mismo escalado tanto a X_train como a X_test durante la división.
- Para que el árbol reciba los datos de entrenamiento siempre en el mismo orden aleatorio.
- Para garantizar que la proporción de clases en train y test sea representativa de la distribución original del dataset.
- Correcta

- Retroalimentación
stratify=y hace que train_test_split mantenga la misma proporción de cada clase tanto en entrenamiento como en prueba. El taller aplica este parámetro y luego verifica la distribución resultante con y_train.value_counts().

- --

Pregunta 31

### Después de entrenar el siguiente modelo

modelo_rbf = SVC(kernel=**rbf**, C=1.0, gamma=**scale**, random_state=42)
modelo_rbf.fit(X_train_s, y_train)
print(modelo_rbf.n_support_)

## La salida es [452 410]. ¿Qué indica este resultado?

- El modelo clasificó correctamente 452 registros de la clase 0 y 410 de la clase 1 en el conjunto de prueba.
- El modelo encontró 452 vectores de soporte de la clase 0 (Legítima) y 410 de la clase 1 (Fraude) en el conjunto de entrenamiento.
- Correcta
- El modelo necesitó 452 iteraciones para converger en la clase 0 y 410 para la clase 1.
- El modelo descartó 452 y 410 registros por ser outliers antes de encontrar el hiperplano.

- Retroalimentación
La opción correcta es b. n_support_ indica el número de vectores de soporte por clase en el conjunto de entrenamiento.

- --

Pregunta 32

En el coeficiente de Silhouette s(i) = (b − a) / max(a, b), ¿qué representan los valores a y b para una observación dada?

- a es la distancia al centroide propio y b es la distancia al centroide del cluster más lejano.
- a es la distancia media de la observación al resto de puntos de su propio cluster, y b es la distancia media al cluster vecino más cercano.
- Correcta
- a es el número de puntos en su cluster y b es el número de puntos en el cluster vecino más cercano.
- a es la inercia del cluster propio y b es la inercia del cluster más alejado.

- Retroalimentación
Correcto. a mide la cohesión interna (qué tan cerca está el punto de los demás miembros de su cluster) y b mide la separación (qué tan lejos está del cluster vecino más próximo). Un Silhouette alto indica que b es mucho mayor que a.

- --

Pregunta 33

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

- Solo sobre el fold de validación que produjo el mejor score durante la búsqueda.
- Sobre X_test_s, para garantizar que el modelo visto por el evaluador sea el mismo que predice.
- Sobre todo X_train_s, después de identificar los mejores hiperparámetros mediante validación cruzada.
- Correcta
- Sobre todos los datos disponibles (X_train_s + X_test_s) para maximizar el número de ejemplos de entrenamiento.

- Retroalimentación
La opción correcta es c. GridSearchCV reentrena el mejor estimador con todo X_train_s después de identificar los mejores hiperparámetros mediante validación cruzada.

- --

Pregunta 34

Antes de entrenar un Random Forest, se recomienda entrenar primero un árbol de decisión individual sobre el mismo dataset. ¿Cuál es el propósito principal de este paso?

- Validar que el dataset no tiene errores de preprocesamiento antes de entrenar el modelo más complejo.
- Reemplazar el árbol de decisión con Random Forest una vez verificado que el árbol no funciona correctamente.
- Establecer una línea base (baseline) de rendimiento para cuantificar cuánto mejora el ensamble sobre el modelo más simple.
- Correcta
- Usar el árbol de decisión como inicialización de los primeros árboles del bosque de Random Forest.

- Retroalimentación
El baseline permite medir objetivamente el valor agregado del ensamble respecto al modelo más simple.

- --

Pregunta 35

¿Por qué la función objetivo de K-Means usa las distancias elevadas al cuadrado en lugar de las distancias simples?

- Para garantizar que la función objetivo sea monótonamente decreciente con K, lo que permite identificar el codo.
- Porque la distancia al cuadrado siempre produce valores entre 0 y 1, lo que facilita la comparación entre clusters.
- Porque el cuadrado hace que el cálculo sea más rápido computacionalmente al evitar raíces cuadradas en la comparación.
- Para penalizar los puntos muy alejados de su centroide más que los moderadamente alejados, dando más peso a las desviaciones grandes.
- Correcta

- Retroalimentación
Correcto. Al elevar al cuadrado, las distancias grandes penalizan proporcionalmente más que las pequeñas. Un punto muy lejano al centroide contribuye mucho más al WCSS que varios puntos moderadamente lejanos.

- --

Pregunta 36

## ¿Qué visualiza el siguiente código?

resultados = pd.DataFrame(grid_search.cv_results_)
rbf_df = resultados[resultados[**param_kernel**] == **rbf**]
pivot_rbf = rbf_df.pivot_table(
```
values='mean_test_score',
index='param_C',
columns='param_gamma'
```
- )
sns.heatmap(pivot_rbf, annot=True, fmt=**.3f**, cmap=**Blues**)

- El número de vectores de soporte encontrados por cada combinación de C y gamma con kernel RBF.
- La distribución de probabilidades de clase para cada combinación de hiperparámetros probada.
- La matriz de confusión del mejor modelo evaluado sobre X_test.
- Un mapa de calor con el F1 promedio de validación cruzada para cada combinación de C y gamma, filtrado solo para el kernel RBF.
- Correcta

- Retroalimentación
El código filtra cv_results_ para kernel RBF, construye una tabla pivote con mean_test_score (el F1 CV promedio) en función de C y gamma, y lo visualiza como heatmap. Permite identificar visualmente las mejores combinaciones.

- --

Pregunta 37

Una SVM se entrena con 10 000 registros y al revisar el modelo se encuentra que solo 45 puntos son vectores de soporte. ¿Qué ocurriría si se eliminaran los otros 9 955 registros del dataset y se reentrenara el modelo?

- El modelo fallaría porque scikit-learn requiere un mínimo de registros para entrenar una SVM.
- El modelo mejoraría su accuracy porque eliminar datos reduce el ruido en el entrenamiento.
- El modelo cambiaría completamente porque necesita todos los datos para calcular el hiperplano óptimo.
- El modelo sería exactamente el mismo, porque el hiperplano queda determinado únicamente por los vectores de soporte.
- Correcta

- Retroalimentación
La opción correcta es d. El hiperplano de una SVM depende únicamente de los vectores de soporte; los demás puntos no influyen en la frontera de decisión.

- --

Pregunta 38

En scikit-learn, KMeans tiene el parámetro n_init=10. ¿Cuál es el propósito de este parámetro?

- Definir el número de clusters K que el modelo debe encontrar.
- Limitar el número máximo de pasos que el algoritmo ejecuta dentro de cada ejecución.
- Asegurar que los 10 primeros puntos del dataset sean usados como centroides iniciales.
- Repetir el algoritmo 10 veces con distintas inicializaciones aleatorias de centroides y conservar el resultado con menor inercia.
- Correcta

- Retroalimentación
Correcto. Como K-Means puede quedar atrapado en mínimos locales dependiendo de la inicialización, scikit-learn repite el proceso n_init veces con distintos puntos de partida y conserva el resultado con menor inercia.

- --

Pregunta 39

Cuando PCA se usa como preproceso antes de un modelo supervisado, ¿cuál es la práctica correcta para evitar data leakage?

- Aplicar PCA por separado a X_train y X_test para que cada conjunto tenga sus propios componentes principales.
- Ajustar (fit) el PCA solo sobre X_train y luego aplicar transform sobre X_test con los mismos componentes aprendidos.
- Correcta
- No estandarizar antes de PCA cuando se usa en pipeline supervisado, para evitar que el scaler filtre información del test set.
- Aplicar fit_transform sobre todo el dataset antes de dividir en train y test, para que los componentes capturen toda la varianza disponible.

- Retroalimentación
La opción correcta es b. Se ajusta PCA solo sobre X_train y se transforma X_test con los mismos componentes, evitando data leakage.

- --

Pregunta 40

## ¿Qué cantidad minimiza el algoritmo K-Means en cada iteración?

- La distancia euclidiana máxima entre cualquier par de puntos del dataset.
- El número de puntos que cambian de cluster entre iteraciones.
- La varianza total explicada por los componentes principales del dataset.
- La suma de las distancias al cuadrado de cada punto a su centroide asignado (WCSS o inercia).
- Correcta

- Retroalimentación
Correcto. K-Means minimiza el WCSS (Within-Cluster Sum of Squares): la suma de las distancias al cuadrado de cada punto a su centroide. Cada iteración de asignación y actualización garantiza que esta cantidad no aumente.

- --

Pregunta 41

En el taller de DBSCAN se calcula el Silhouette de la siguiente forma:

mascara_validos = labels != -1
sil = silhouette_score(X_scaled[mascara_validos], labels[mascara_validos])

## ¿Por qué se filtra con labels != -1 antes de calcular el Silhouette?

- Para normalizar las etiquetas entre 0 y el número de clusters antes de pasarlas a la función.
- Porque los puntos de ruido tienen etiqueta −1 y no pertenecen a ningún cluster; incluirlos distorsionaría el cálculo del Silhouette.
- Correcta
- Para acelerar el cálculo excluyendo los puntos más alejados del centro del dataset.
- Porque scikit-learn lanza un error si se incluyen etiquetas negativas en silhouette_score.

- Retroalimentación
Correcto. Los puntos de ruido (etiqueta −1) no tienen cluster asignado. El Silhouette mide cohesión y separación respecto al cluster propio y al vecino; incluir puntos sin cluster produciría un cálculo sin sentido.

- --

Pregunta 42

## ¿Cuál es la diferencia fundamental entre PCA y la selección de variables?

- PCA y la selección de variables son equivalentes; ambas reducen el número de columnas del dataset sin transformar los valores.
- PCA elimina las variables menos importantes del dataset; la selección de variables crea nuevas variables combinando las originales.
- PCA elimina filas del dataset con valores extremos; la selección de variables elimina columnas con alta correlación.
- PCA crea variables nuevas (componentes) que combinan las originales de forma óptima; no elimina variables del dataset original.
- Correcta

- Retroalimentación
PCA transforma el espacio de variables creando combinaciones lineales que maximizan la varianza capturada. Las variables originales siguen existiendo; lo que cambia es la representación de los datos.

- --

Pregunta 43

## ¿Qué ventaja ofrece activar oob_score=True en RandomForestClassifier?

- Activa la visualización automática del árbol más importante del bosque al finalizar el entrenamiento.
- Aumenta el número de árboles del bosque en un 37% para compensar las muestras que quedaron fuera del Bootstrap.
- Genera automáticamente un estimado de la accuracy del modelo sin necesidad de un conjunto de validación separado, sin costo adicional.
- Correcta
- Permite que el modelo use X_test durante el entrenamiento para ajustar mejor los hiperparámetros.

- Retroalimentación
El OOB score aprovecha las muestras que el Bootstrap dejó fuera de cada árbol para evaluarlo. El material lo describe como **validación sin necesidad de separar un conjunto adicional** y comparable a un k-fold cross-validation sin costo adicional.

- --

Pregunta 44

## En un árbol de decisión, ¿qué es un nodo hoja?

- El nodo final que emite la predicción de clase para los ejemplos que llegaron hasta él.
- Correcta
- El nodo que contiene todos los ejemplos de entrenamiento al inicio del proceso.
- Un nodo intermedio que realiza una pregunta binaria para dividir el conjunto en dos subconjuntos.
- El nodo con mayor impureza Gini del árbol, donde la separación entre clases es más difícil.

- Retroalimentación
El nodo hoja es el punto final de un camino en el árbol. No realiza más divisiones; predice la clase más frecuente entre los ejemplos que lo alcanzaron.

- --

Pregunta 45

¿Por qué Random Forest es menos interpretable que un árbol de decisión individual?

- Porque el parámetro max_features=**sqrt** oculta cuáles variables se usaron en cada división.
- Porque Random Forest no puede generar probabilidades; solo produce etiquetas de clase sin ninguna explicación.
- Porque la predicción final es un consenso de múltiples árboles y no puede representarse como una regla única legible.
- Correcta
- Porque Random Forest usa variables transformadas internamente que no corresponden a las variables originales del dataset.

- Retroalimentación
Mientras que un árbol produce una única cadena de reglas IF-THEN verificable, Random Forest combina las decisiones de cientos de árboles distintos. El material lo describe explícitamente: **La decisión es un consenso, no una regla única.**

- --

Pregunta 46

Dos modelos SVM producen los siguientes resultados sobre el mismo conjunto de prueba:

Modelo              Accuracy   Recall fraude   F1 fraude
LinearSVC            0.7475        0.2818        0.3804
SVC (Kernel RBF)     0.7325        0.2182        0.3097

¿Cuál modelo es preferible para un sistema de detección de fraude bancario y por qué?

- SVC (Kernel RBF), porque el kernel RBF siempre supera al lineal cuando los datos tienen variables categóricas.
- LinearSVC, porque tiene mayor accuracy, recall de fraude y F1 de fraude en todas las métricas.
- Correcta
- Ninguno de los dos; ambos deben descartarse porque el recall de fraude es inferior al 50%.
- SVC (Kernel RBF), porque tiene menor accuracy, lo que indica que el modelo no está sobreajustado.

- Retroalimentación
LinearSVC supera al RBF en las tres métricas: accuracy (0.7475 vs 0.7325), recall de fraude (0.2818 vs 0.2182) y F1 de fraude (0.3804 vs 0.3097). El kernel más complejo no siempre gana; la elección debe basarse en evidencia empírica.

- --

Pregunta 47

¿Qué garantiza el atributo pca.explained_variance_ratio_ sobre la suma de todos sus valores cuando se calculan todos los componentes posibles?

- Que los valores sumen 1.0 (100%), porque en conjunto los componentes capturan toda la varianza del dataset.
- Correcta
- Que los valores sumen 0, porque los componentes son variables centradas en media cero.
- Que los valores sean iguales entre sí, porque PCA distribuye la varianza uniformemente.
- Que el primer valor sea siempre mayor que 0.5, porque PC1 debe capturar al menos la mitad de la varianza.

- Retroalimentación
Si se calculan todos los componentes posibles (igual al número de variables), en conjunto capturan el 100% de la varianza. El material lo documenta explícitamente: **La suma de todos los componentes siempre es 100%.**

- --

Pregunta 48

¿Cuál es el valor por defecto de max_depth en DecisionTreeClassifier y qué riesgo implica?

- max_depth=5 por defecto, rango recomendado según el material para la mayoría de datasets.
- max_depth=None por defecto (sin límite), lo que permite que el árbol crezca hasta memorizar completamente el entrenamiento.
- Correcta
- max_depth=3 por defecto, lo que produce underfitting en datasets complejos.
- max_depth=10 por defecto, lo que generalmente produce un buen balance entre sesgo y varianza.

- Retroalimentación
La opción correcta es b. Por defecto max_depth=None, sin límite, lo que permite que el árbol crezca hasta memorizar el entrenamiento y aumenta el riesgo de overfitting.

- --

Pregunta 49

¿Por qué se recomienda usar el Método del Codo y el coeficiente de Silhouette conjuntamente para elegir K, en lugar de usar solo uno?

- Porque scikit-learn solo permite calcular ambas métricas de forma simultánea, nunca por separado.
- Porque el Método del Codo requiere datos estandarizados y el Silhouette no, de modo que se usan en etapas distintas del pipeline.
- Porque ambas métricas miden exactamente lo mismo, y usar las dos evita errores de cálculo.
- Porque el Codo mide compacidad y siempre disminuye con K, mientras que el Silhouette mide cohesión y separación; juntos compensan las limitaciones individuales de cada métrica.
- Correcta

- Retroalimentación
Correcto. La inercia siempre baja con K y no tiene un máximo útil. El Silhouette tiene un máximo que indica separación óptima pero es costoso en datos grandes. Usarlos juntos permite una elección fundamentada: cuando el codo y el máximo de Silhouette coinciden en el mismo K, la decisión es sólida.

- --

Pregunta 50

Un punto está dentro del radio ε de un Core Point, pero cuando se calcula su propia vecindad tiene menos de MinPts vecinos. ¿Cómo clasifica DBSCAN a ese punto?

- Como punto Core, porque está cerca de otro Core.
- Como punto Borde: pertenece al cluster del Core vecino, pero no puede expandirlo.
- Correcta
- Como un cluster independiente de un solo punto.
- Como punto de Ruido, porque no tiene suficientes vecinos para formar un cluster.

- Retroalimentación
Correcto. El punto Borde está dentro del radio ε de un Core (y por eso pertenece al cluster) pero tiene menos de MinPts vecinos propios, por lo que no puede ser semilla de expansión.

- --

Pregunta 51

## ¿Por qué es obligatorio aplicar StandardScaler antes de entrenar una SVM?

- Porque sin escalado, la función de kernel RBF produce siempre similitud = 1 entre todos los puntos.
- Porque SVM calcula distancias entre puntos para encontrar el margen, y variables con mayor rango dominarían ese cálculo injustamente.
- Correcta
- Porque el escalado convierte las variables categóricas a numéricas, paso previo necesario para SVM.
- Porque scikit-learn lanza un error si las variables no están escaladas antes de llamar a fit().

- Retroalimentación
El margen se define en términos de distancias euclidianas. Si una variable tiene un rango mucho mayor que las demás, domina el cálculo del margen independientemente de su relevancia predictiva.

- --

Pregunta 52

### Dado el siguiente fragmento de código

modelo = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = modelo.fit_predict(X_scaled)

## ¿Cuál es el resultado almacenado en la variable labels?

- Las coordenadas de los 3 centroides en el espacio escalado.
- Un array con el índice del cluster asignado a cada observación de X_scaled.
- Correcta
- La matriz de distancias de cada observación a cada uno de los 3 centroides.
- Los valores de inercia para K = 1, 2 y 3.

- Retroalimentación
La opción correcta es b. fit_predict() devuelve la asignación de cada observación a un cluster, no las posiciones de los centroides.

- --

Pregunta 53

¿Por qué se recomienda usar escala logarítmica al definir los valores de C y gamma en param_grid?

- Porque estos parámetros actúan en órdenes de magnitud; la diferencia entre C=1 y C=10 es mucho más significativa que entre C=1 y C=2.
- Correcta
- Porque scikit-learn requiere que los valores de C y gamma estén en escala logarítmica para funcionar correctamente.
- Porque con escala logarítmica el heatmap de cv_results_ siempre muestra un gradiente de color más uniforme.
- Porque la escala logarítmica reduce el número de combinaciones totales, acelerando GridSearchCV.

- Retroalimentación
C y gamma tienen efecto multiplicativo sobre el comportamiento del modelo. La escala logarítmica permite explorar órdenes de magnitud con pocos valores, cubriendo eficientemente un rango amplio como [0.001, 0.01, 0.1, 1, 10, 100].

- --

Pregunta 54

¿Por qué GridSearchCV evalúa cada combinación de hiperparámetros con validación cruzada en lugar de una sola partición de validación?

- Para reducir el tiempo de entrenamiento, ya que k folds pequeños entrenan más rápido que un dataset completo.
- Para generar k modelos distintos que luego se combinan mediante votación, formando un ensemble.
- Para garantizar que la mejor combinación encontrada sea válida en el conjunto de test, que nunca se usa durante la búsqueda.
- Porque sin validación cruzada el modelo podría quedar sobreajustado a una partición de validación específica, produciendo una estimación poco confiable del rendimiento real.
- Correcta

- Retroalimentación
Si se usara una sola partición de validación, la mejor combinación podría ser la que mejor funciona para ese subconjunto específico de datos. La validación cruzada evalúa sobre k subconjuntos distintos para una estimación más confiable.

- --

Pregunta 55

Según la regla práctica para elegir MinPts en DBSCAN, ¿qué valor mínimo se recomienda para datos en 2 dimensiones?

- MinPts debe ser igual al número de clusters esperados más uno.
- MinPts = 2, porque en 2D solo se necesita un vecino adicional para definir densidad.
- MinPts = 4 o 5, porque la regla práctica indica MinPts ≥ dimensiones + 1.
- Correcta
- MinPts = 10, porque valores bajos producen clusters con sobreajuste.

- Retroalimentación
La opción correcta es c. La regla práctica indica MinPts ≥ dimensiones + 1. Para 2D eso da MinPts ≥ 3, y se recomienda específicamente 4 o 5.

- --

Pregunta 56

## ¿Qué hace el siguiente código?

rf = RandomForestClassifier(
```
n_estimators=100,
max_features='sqrt',
oob_score=True,
random_state=42,
n_jobs=-1
```
- )
- rf.fit(X_train, y_train)
print(rf.oob_score_)

- Entrena un único árbol de decisión con 100 nodos máximos y evalúa su Gini promedio.
- Aplica validación cruzada de 100 folds sobre un árbol de decisión e imprime el accuracy promedio.
- Entrena 100 modelos de regresión logística en paralelo y promedia sus probabilidades para obtener la predicción final.
- Entrena 100 árboles usando Bootstrap y √p variables por nodo, calcula el OOB score usando todos los núcleos disponibles, e imprime ese estimado de accuracy.
- Correcta

- Retroalimentación
n_estimators=100 construye 100 árboles, max_features=**sqrt** evalúa √p variables por nodo, oob_score=True activa el cálculo OOB, n_jobs=-1 usa todos los núcleos disponibles, y oob_score_ imprime el accuracy estimado sobre las muestras OOB.

- --

Pregunta 57

En el taller se define el siguiente param_grid para optimizar el árbol con GridSearchCV(cv=5):

param_grid = {
**max_depth**:         [3, 5, 7, 10, None],
**min_samples_split**: [2, 5, 10],
**min_samples_leaf**:  [1, 3, 5],
- **criterion**:         [**gini**, **entropy**]
- }

## ¿Cuántos entrenamientos totales ejecutará GridSearchCV?

- 450 entrenamientos (90 combinaciones × 5 folds).
- Correcta
- 90 entrenamientos (producto cartesiano: 5 × 3 × 3 × 2, sin contar folds).
- 13 entrenamientos (suma de valores: 5 + 3 + 3 + 2).
- 900 entrenamientos (90 combinaciones × 5 folds × 2 criterios).

- Retroalimentación
Producto cartesiano: 5 × 3 × 3 × 2 = 90 combinaciones. Con cv=5: 90 × 5 = 450 entrenamientos totales. El taller calcula este resultado directamente con el código que multiplica todos los len(v) del param_grid.

- --

Pregunta 58

## ¿Qué hace PCA(n_components=0.90) en scikit-learn?

- Aplica PCA con un factor de escala de 0.90 sobre los loadings de cada componente.
- Aplica PCA y conserva exactamente 90 componentes, independientemente del número de variables del dataset.
- Aplica PCA y conserva automáticamente el número mínimo de componentes que acumulen al menos el 90% de la varianza explicada.
- Correcta
- Aplica PCA y descarta el 90% de las variables originales, conservando solo el 10% más informativo.

- Retroalimentación
Cuando n_components es un float entre 0 y 1, scikit-learn selecciona automáticamente el número mínimo de componentes necesarios para acumular ese porcentaje de varianza. Es la forma de aplicar la regla práctica de forma automática.

- --

Pregunta 59

Al aplicar K-Means y DBSCAN al mismo dataset, K-Means produce Silhouette = 0.652 y DBSCAN produce Silhouette = 0.675 (excluyendo outliers). ¿Cuál es la diferencia conceptual más relevante entre ambos resultados?

- DBSCAN tiene Silhouette más alto porque usa más iteraciones que K-Means para encontrar los clusters.
- Ambos algoritmos producen el mismo agrupamiento; la diferencia de Silhouette es solo por la exclusión de puntos en DBSCAN.
- K-Means es mejor porque su Silhouette es más alto y siempre produce más clusters que DBSCAN.
- K-Means asigna todos los puntos a un cluster incluso los atípicos, mientras que DBSCAN reconoce que esos puntos no encajan en ningún grupo denso y los etiqueta como ruido.
- Correcta

- Retroalimentación
Correcto. Esta es la diferencia conceptual clave: K-Means fuerza todos los puntos a pertenecer a algún cluster, absorbiendo los outliers en el grupo más cercano. DBSCAN identifica explícitamente los puntos que no pertenecen a ninguna región densa y los etiqueta con -1.

- --

Pregunta 60

Un estudiante entrena GridSearchCV y reporta best_score_ = 0.93 como el rendimiento final de su modelo. ¿Por qué este reporte es incorrecto?

- Porque best_score_ mide accuracy y no puede usarse para reportar el rendimiento cuando se usó scoring=**f1**.
- Porque best_score_ incluye los resultados de todos los modelos probados, no solo el mejor.
- Porque best_score_ es el score de validación cruzada sobre X_train, no el rendimiento sobre datos completamente nuevos (X_test).
- Correcta
- Porque best_score_ siempre sobrestima el rendimiento; el score real es siempre la mitad de ese valor.

- Retroalimentación
best_score_ es un estimado de validación cruzada calculado sobre particiones de X_train. Para reportar el rendimiento real del modelo hay que evaluarlo sobre X_test, que no participó en ningún momento de la búsqueda.