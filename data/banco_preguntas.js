window.QUIZ_DATA = {
  "semanas": [
    {
      "id": "semana_1",
      "titulo": "Semana 1 - Fundamentos e Historia",
      "categorias": [
        {
          "value": "all",
          "label": "Todas (Semana 1)"
        },
        {
          "value": "cuestionario1",
          "label": "Teoría Base (Cuestionario)"
        },
        {
          "value": "historia",
          "label": "Historia e Inviernos"
        },
        {
          "value": "definiciones",
          "label": "Definiciones y Clasificación"
        },
        {
          "value": "ml_teoria",
          "label": "Fundamentos de Machine Learning"
        },
        {
          "value": "python_practica",
          "label": "Taller: Python para Datos"
        },
        {
          "value": "bookmarked",
          "label": "Marcadas para Duda"
        }
      ],
      "preguntas": [
        {
          "id": 1000,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Una vez entrenado un modelo de regresión en scikit-learn, ¿qué método se utiliza para generar predicciones sobre datos nuevos?",
          "options": [
            "modelo.train()",
            "modelo.predict()",
            "modelo.split()",
            "modelo.fit()"
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. .predict() aplica el modelo ya entrenado a nuevas observaciones (X) para obtener sus valores estimados (ŷ). El entrenamiento se realiza con .fit(). - --"
        },
        {
          "id": 1001,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En la ecuación ŷ = β₀ + β₁x, ¿qué representa β₀?",
          "options": [
            "El intercepto: el valor de ŷ cuando x = 0.",
            "La variable independiente.",
            "El valor predicho.",
            "La pendiente de la recta."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. β₀ es el intercepto, el punto donde la recta corta el eje Y (cuando x=0); β₁ es la pendiente y ŷ es el valor predicho. - --"
        },
        {
          "id": 1002,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Según el material del curso, ¿por qué no existe una única definición universal de IA?",
          "options": [
            "Porque ninguna de las definiciones existentes es técnicamente correcta.",
            "Porque la IA es un campo demasiado nuevo para tener consenso.",
            "Porque los reguladores europeos y los científicos están en desacuerdo permanente.",
            "Porque cada definición refleja el propósito de quien la propuso."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Las cuatro definiciones (McCarthy, Russell & Norvig, Reglamento UE, y la definición técnica del curso) son complementarias, no contradictorias. - --"
        },
        {
          "id": 1003,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Por qué es útil el aprendizaje semi-supervisado, según el material?",
          "options": [
            "Porque no requiere ningún dato de entrenamiento.",
            "Porque elimina la necesidad de evaluar el modelo.",
            "Porque siempre es más preciso que el aprendizaje supervisado puro.",
            "Porque etiquetar datos a mano es caro y los datos sin etiquetar abundan."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. El material señala que etiquetar manualmente es costoso, mientras que los datos sin etiquetar son abundantes; el enfoque híbrido aprovecha ambas ventajas. - --"
        },
        {
          "id": 1004,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes es una razón mencionada en el material para usar métricas de evaluación en un modelo de regresión?",
          "options": [
            "Detectar si el modelo memorizó el entrenamiento en lugar de generalizar (overfitting).",
            "Reemplazar por completo la necesidad de un conjunto de datos de prueba.",
            "Eliminar automáticamente los valores atípicos del dataset.",
            "Convertir un problema de clasificación en uno de regresión."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. Las métricas permiten medir la calidad de la predicción, comparar modelos objetivamente y detectar overfitting (cuando el modelo memoriza en vez de aprender patrones generalizables). - --"
        },
        {
          "id": 1005,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Por qué el método de Mínimos Cuadrados Ordinarios (MCO) eleva los errores al cuadrado en lugar de solo sumarlos?",
          "options": [
            "Porque los errores nunca pueden ser negativos.",
            "Para evitar que errores positivos y negativos se cancelen entre sí, y penalizar más los errores grandes.",
            "Para reducir el tamaño de la muestra necesaria.",
            "Para acelerar el tiempo de entrenamiento del modelo."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Al elevar al cuadrado, todos los errores se vuelven positivos (evitando cancelaciones falsas) y los errores grandes (outliers) se penalizan de forma cuadrática, no lineal. - --"
        },
        {
          "id": 1006,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de los siguientes NO es uno de los cuatro supuestos básicos del modelo de regresión lineal simple?",
          "options": [
            "Linealidad.",
            "Independencia.",
            "Estacionariedad.",
            "Homocedasticidad."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. Los cuatro supuestos básicos son linealidad, independencia, homocedasticidad (varianza constante del error) y normalidad de los residuos. La estacionariedad no es uno de los cuatro supuestos mencionados en el material. - --"
        },
        {
          "id": 1007,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Según el material, ¿cuál de los siguientes es un ejemplo de aplicación de IA en el sector salud?",
          "options": [
            "Mantenimiento predictivo de flotas.",
            "Diagnóstico por imagen y predicción de enfermedades.",
            "Chatbots bancarios 24/7.",
            "Riego inteligente con IoT."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El diagnóstico por imagen y la predicción de enfermedades son aplicaciones de IA en el sector salud mencionadas en el material; las otras opciones corresponden a transporte, finanzas y agricultura respectivamente. - --"
        },
        {
          "id": 1008,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En la ecuación ŷ = β₀ + β₁x, ¿qué representa β₁?",
          "options": [
            "El valor real observado de la variable dependiente.",
            "El error o residuo del modelo.",
            "El punto de partida de la recta.",
            "Cuánto varía ŷ por cada unidad que aumenta x."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. β₁ es la pendiente: mide el cambio esperado en ŷ por cada unidad de incremento en x. β₀ es el intercepto (punto de partida). - --"
        },
        {
          "id": 1009,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes tareas corresponde a **segmentación** en Visión por Computadora?",
          "options": [
            "Separar los objetos de una imagen píxel a píxel.",
            "Generar una imagen nueva a partir de una descripción textual.",
            "Traducir el texto contenido en una imagen.",
            "Etiquetar toda la imagen con una sola categoría."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. La segmentación divide la imagen a nivel de píxel, distinguiendo con precisión los límites de cada objeto, a diferencia de la clasificación (una etiqueta general) o la detección de objetos (localización con cajas). - --"
        },
        {
          "id": 1010,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál es la diferencia principal entre IA Fuerte y AGI (Inteligencia Artificial General) según la regla práctica del curso?",
          "options": [
            "AGI ya existe, mientras que la IA Fuerte es solo teórica.",
            "Son términos idénticos sin ninguna diferencia.",
            "IA Fuerte equivale al nivel humano; AGI supera al humano y se automodifica.",
            "IA Fuerte se refiere solo a robots físicos, AGI solo a software."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. Regla práctica del curso: IA Fuerte = nivel humano (capacidad igual al humano). AGI = supera al humano y además implica automodificación. - --"
        },
        {
          "id": 1011,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de los siguientes es mencionado como un desafío para la IA en Ecuador y Latinoamérica?",
          "options": [
            "Exceso de datasets locales disponibles.",
            "Sobreabundancia de modelos sin sesgos.",
            "Brecha de talento especializado en IA.",
            "Ausencia total de casos de uso agropecuarios."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. El material señala como desafíos la brecha de talento especializado, la escasez de datasets locales y la dependencia de modelos con sesgos extranjeros. - --"
        },
        {
          "id": 1012,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "El aprendizaje no supervisado se caracteriza por",
          "options": [
            "Aprender exclusivamente mediante recompensas y penalizaciones.",
            "Requerir siempre una red neuronal profunda.",
            "Aprender de datos sin etiquetar, descubriendo estructuras ocultas.",
            "Aprender de datos etiquetados con pares entrada-salida."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. A diferencia del supervisado, el no supervisado no cuenta con etiquetas; busca patrones o estructuras (como agrupaciones) directamente en los datos. - --"
        },
        {
          "id": 1013,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Un valor de R² menor a 0 (negativo) en el conjunto de prueba generalmente indica que:",
          "options": [
            "Las unidades de medida son incorrectas.",
            "El modelo tiene una sensibilidad óptima a los outliers.",
            "El modelo tiene un ajuste perfecto.",
            "El modelo predice peor que simplemente usar el promedio de Y."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Un R² negativo significa que el modelo se equivoca más que la estrategia más simple posible (predecir siempre el promedio), lo cual suele señalar un problema severo del modelo. - --"
        },
        {
          "id": 1014,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál es la pregunta central que responde un modelo de regresión? ## A. Dado lo que sé de X, ¿qué valor numérico de Y puedo esperar? - Correcta",
          "options": [
            "¿A qué categoría pertenece este dato?",
            "¿Qué recompensa maximiza esta acción?",
            "¿Cuántos grupos distintos existen en los datos?"
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. La regresión estima un valor numérico continuo (Y) a partir de una o más variables predictoras (X); la clasificación, en cambio, predice una categoría. - --"
        },
        {
          "id": 1015,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "La definición de Inteligencia Artificial de Russell & Norvig (2020) se enfoca en:",
          "options": [
            "La capacidad de un sistema para inferir predicciones a partir de datos.",
            "El cumplimiento legal y regulatorio de los sistemas de IA.",
            "El aprendizaje de patrones de datos para generar contenido.",
            "El estudio de agentes que perciben y actúan racionalmente."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Russell & Norvig definen la IA moderna como el estudio de agentes racionales que perciben su entorno y actúan para lograr sus objetivos. - --"
        },
        {
          "id": 1016,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Qué método de un DataFrame de pandas se usa para visualizar las primeras filas de un dataset y hacer una inspección rápida?",
          "options": [
            "df.sum()",
            "df.describe()",
            "df.fit()",
            "df.head()"
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. df.head() muestra por defecto las primeras 5 filas del DataFrame, útil para una inspección rápida de la estructura y contenido de los datos. - --"
        },
        {
          "id": 1017,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "El NLP (Procesamiento de Lenguaje Natural) se define como el subcampo de la IA que:",
          "options": [
            "Detecta anomalías en series de tiempo financieras.",
            "Se encarga exclusivamente de la robótica colaborativa.",
            "Entiende y genera lenguaje humano, hoy dominado por Deep Learning.",
            "Interpreta imágenes y video mediante redes convolucionales."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. El NLP se enfoca en el lenguaje humano (texto y voz); actualmente sus mejores resultados dependen del Deep Learning y del uso de **embeddings**. - --"
        },
        {
          "id": 1018,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál es el propósito principal de dividir un dataset en conjuntos de entrenamiento (train) y prueba (test)?",
          "options": [
            "Evaluar si el modelo generaliza a datos que no vio durante el entrenamiento.",
            "Eliminar los valores nulos del dataset.",
            "Reducir el tamaño total del dataset para ahorrar memoria.",
            "Aumentar artificialmente la cantidad de datos disponibles."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. El train/test split permite medir si el modelo aprendió patrones generalizables o simplemente memorizó los datos de entrenamiento (overfitting); el modelo se ajusta solo con train y se evalúa solo con test. - --"
        },
        {
          "id": 1019,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En scikit-learn, ¿en qué submódulo se encuentran funciones como mean_squared_error y r2_score para evaluar un modelo?",
          "options": [
            "sklearn.linear_model",
            "sklearn.metrics",
            "sklearn.preprocessing",
            "sklearn.model_selection"
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Las funciones de evaluación de modelos, como mean_squared_error y r2_score, se importan típicamente desde sklearn.metrics; sklearn.linear_model contiene los modelos (como LinearRegression) y sklearn.model_selection contiene utilidades como train_test_split. - --"
        },
        {
          "id": 1020,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En el contexto del NLP, un **embedding** es",
          "options": [
            "Un algoritmo de aprendizaje por refuerzo.",
            "Un vector numérico que representa el significado de las palabras.",
            "Un tipo de red neuronal convolucional.",
            "Una métrica para evaluar modelos de regresión."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Los embeddings son representaciones numéricas (vectores) que capturan el significado semántico de palabras o frases, permitiendo que los modelos de NLP los procesen matemáticamente. - --"
        },
        {
          "id": 1021,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes afirmaciones sobre la IA Fuerte es correcta según el material?",
          "options": [
            "Es sinónimo exacto de AGI (Inteligencia Artificial General).",
            "Fue alcanzada por primera vez por AlphaGo.",
            "Ya existe en sistemas como GPT-5 y Claude.",
            "Realizaría cualquier tarea intelectual humana, comprendiendo en vez de solo predecir."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. La IA Fuerte comprendería (no solo imitaría) cualquier tarea intelectual humana. Los LLM actuales, aunque parecen inteligentes, siguen prediciendo el siguiente token: son IA Débil. - --"
        },
        {
          "id": 1022,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Los cuatro enfoques principales de Machine Learning presentados en el material se diferencian principalmente por:",
          "options": [
            "La cantidad de código necesario para implementarlos.",
            "Cuánta etiqueta usan en sus datos de entrenamiento.",
            "El país de origen del algoritmo.",
            "El lenguaje de programación utilizado."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Supervisado (datos etiquetados), no supervisado (sin etiquetar), semi-supervisado (mezcla) y por refuerzo (recompensas) se distinguen fundamentalmente por cuánta información de etiqueta emplean. - --"
        },
        {
          "id": 1023,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Qué le falta técnicamente a los sistemas actuales para alcanzar la IA Fuerte, según el material?",
          "options": [
            "Redes neuronales más profundas.",
            "Acceso a internet en tiempo real.",
            "Mayor cantidad de datos de entrenamiento.",
            "Razonamiento causal y sentido común."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. El material señala que los sistemas actuales identifican correlaciones, no causas (razonamiento causal), y fallan en inferencias triviales para un niño (sentido común). - --"
        },
        {
          "id": 1024,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Según la **regla de oro** del train/test split, ¿qué error se debe evitar?",
          "options": [
            "Ajustar el modelo usando el conjunto de prueba (test).",
            "Reutilizar el test set para tomar decisiones de diseño del modelo.",
            "Dividir el dataset antes de entrenar el modelo.",
            "Calcular las métricas usando el conjunto de prueba (test)."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El test set debe usarse únicamente para la evaluación final; reutilizarlo repetidamente para ajustar decisiones de diseño contamina la evaluación y puede llevar a conclusiones optimistas y poco realistas. - --"
        },
        {
          "id": 1025,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de los siguientes es un algoritmo típico de aprendizaje supervisado mencionado en el material?",
          "options": [
            "Isolation Forest.",
            "Regresión Lineal y Logística.",
            "DBSCAN.",
            "K-means."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. K-means, DBSCAN e Isolation Forest son algoritmos de aprendizaje no supervisado (clustering y detección de anomalías); la Regresión Lineal/Logística, SVM y KNN son supervisados. - --"
        },
        {
          "id": 1026,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En el patrón general de scikit-learn (fit/predict), ¿qué ocurre primero?",
          "options": [
            "Se elimina el conjunto de prueba antes de instanciar el modelo.",
            "Se llama a .predict() antes de crear el modelo.",
            "Se crea una instancia del modelo y se llama a .fit() con los datos de entrenamiento.",
            "Se calcula directamente el R² sin entrenar el modelo."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. El flujo estándar de scikit-learn es: instanciar el modelo (p. ej. LinearRegression()), llamar a .fit(X_train, y_train) para entrenarlo, y luego .predict(X_new) para generar predicciones. - --"
        },
        {
          "id": 1027,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "El aprendizaje supervisado se caracteriza por aprender a partir de:",
          "options": [
            "Recompensas y penalizaciones por prueba y error.",
            "Datos completamente sin estructura ni etiquetas.",
            "Datos etiquetados: pares entrada → salida correcta.",
            "Una combinación de pocos datos etiquetados y muchos sin etiquetar."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. El aprendizaje supervisado usa ejemplos ya etiquetados (entrada-salida conocida) para aprender a predecir salidas sobre datos nuevos. - --"
        },
        {
          "id": 1028,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Qué función de scikit-learn (sklearn.model_selection) se utiliza para dividir un dataset en conjuntos de entrenamiento y prueba?",
          "options": [
            "GridSearchCV()",
            "fit_transform()",
            "train_test_split()",
            "cross_val_score()"
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. train_test_split() reparte aleatoriamente las filas de un dataset en un subconjunto de entrenamiento y uno de prueba, según la proporción indicada (p. ej., 80/20). - --"
        },
        {
          "id": 1029,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Machine Learning se define en el material como",
          "options": [
            "Sinónimo exacto de Inteligencia Artificial.",
            "Un subconjunto de la Visión por Computadora.",
            "Un sistema de reglas SI-ENTONCES programadas manualmente.",
            "Una rama de la IA que aprende de datos sin ser programada tarea por tarea."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. A diferencia de la IA simbólica (reglas manuales), el ML aprende patrones a partir de ejemplos de datos, sin que cada tarea sea programada explícitamente."
        },
        {
          "id": 1030,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes clases de scikit-learn se utiliza para crear un modelo de regresión lineal?",
          "options": [
            "StandardScaler()",
            "DecisionTreeClassifier()",
            "KMeans()",
            "LinearRegression()"
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. LinearRegression() (de sklearn.linear_model) implementa el modelo de regresión lineal ajustado por mínimos cuadrados; las otras clases corresponden a un clasificador de árboles, un algoritmo de clustering y un escalador de datos, respectivamente. - --"
        },
        {
          "id": 1031,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "El coeficiente de determinación R² mide",
          "options": [
            "La proporción de la varianza de Y explicada por el modelo, comparado con simplemente predecir el promedio.",
            "El número de variables predictoras utilizadas.",
            "El error promedio del modelo en las mismas unidades que Y.",
            "La cantidad total de observaciones usadas para entrenar el modelo."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. R² compara el desempeño del modelo contra una predicción trivial (el promedio de Y): un valor cercano a 1 indica que el modelo explica gran parte de la variación de los datos. - --"
        },
        {
          "id": 1032,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Según la matriz de decisión de métricas del curso, ¿cuál es el estándar recomendado para reportar el desempeño de un modelo de regresión?",
          "options": [
            "Solo el MSE, porque es la métrica más fácil de calcular.",
            "Solo el MAE, sin ninguna otra métrica.",
            "No es necesario reportar ninguna métrica si el modelo se ajustó correctamente.",
            "RMSE para cuantificar el error y R² para comunicar la varianza explicada."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. El material establece como estándar del curso usar el RMSE (en las unidades originales del problema) junto al R² (proporción de varianza explicada) para comunicar de forma completa el desempeño de un modelo de regresión. - --"
        },
        {
          "id": 1033,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Un agente racional, tal como se define en la IA moderna, se caracteriza por:",
          "options": [
            "Comprender el significado profundo de cualquier tarea que realice.",
            "Percibir su entorno con sensores y actuar con actuadores para maximizar su desempeño.",
            "Ejecutar reglas fijas programadas por un humano.",
            "Aprender exclusivamente de datos etiquetados."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El agente racional es el concepto base de la IA moderna: percibe (sensores), decide y actúa (actuadores) buscando maximizar una medida de desempeño. - --"
        },
        {
          "id": 1034,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Qué significa la sigla CNN en el contexto de Visión por Computadora?",
          "options": [
            "Codificación Numérica de Neuronas.",
            "Conjunto de Nodos Neuronales.",
            "Clasificación No Numérica.",
            "Red Neuronal Convolucional."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. CNN (Convolutional Neural Network / Red Neuronal Convolucional) es la arquitectura de Deep Learning especializada en reconocer patrones visuales. - --"
        },
        {
          "id": 1035,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "El supuesto de **homocedasticidad** en regresión lineal se refiere a que:",
          "options": [
            "La relación entre X e Y debe ser no lineal.",
            "Los residuos deben seguir una distribución normal.",
            "La varianza del error debe ser constante a lo largo de todos los valores de X.",
            "Las observaciones deben depender unas de otras."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. La homocedasticidad exige que la dispersión (varianza) de los errores no cambie sistemáticamente a medida que varía X; lo contrario se llama heterocedasticidad. - --"
        },
        {
          "id": 1036,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál es el orden correcto de los pasos básicos del pipeline de Machine Learning presentado en el material?",
          "options": [
            "Evaluar → Ajustar → Predecir → Cargar → Dividir → Explorar.",
            "Cargar → Explorar → Dividir → Ajustar → Predecir → Evaluar.",
            "Dividir → Cargar → Evaluar → Explorar → Predecir → Ajustar.",
            "Predecir → Evaluar → Cargar → Explorar → Dividir → Ajustar."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El pipeline estándar sigue este orden: cargar los datos, explorarlos, dividir en train/test, ajustar (entrenar) el modelo, predecir sobre datos nuevos y finalmente evaluar el desempeño. - --"
        },
        {
          "id": 1037,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En scikit-learn, ¿qué método se usa para entrenar (ajustar) un modelo de regresión lineal con los datos de entrenamiento?",
          "options": [
            "modelo.transform(X_train, y_train)",
            "modelo.predict(X_train, y_train)",
            "modelo.score(X_train)",
            "modelo.fit(X_train, y_train)"
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. El método .fit() ajusta los parámetros del modelo (por ejemplo, β₀ y β₁) usando los datos de entrenamiento. .predict() se usa después, para generar predicciones. - --"
        },
        {
          "id": 1038,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Comparando IA Simbólica, ML Clásico y Deep Learning, ¿cuál de las siguientes afirmaciones es correcta?",
          "options": [
            "El Deep Learning requiere pocos datos y ofrece alta transparencia.",
            "La IA Simbólica es la más transparente pero funciona solo en dominios cerrados con reglas manuales.",
            "El ML Clásico no requiere ningún tipo de datos para funcionar.",
            "La IA Simbólica es la que mejor funciona con imagen, texto y audio."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. La IA Simbólica usa reglas manuales, es muy transparente pero limitada a dominios cerrados; el Deep Learning, en cambio, es de baja transparencia (caja negra) pero es lo mejor para imagen, texto y audio, requiriendo millones de datos. - --"
        },
        {
          "id": 1039,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "El aprendizaje por refuerzo aprende principalmente a través de:",
          "options": [
            "La combinación de pocos datos etiquetados con muchos sin etiquetar.",
            "Prueba y error, mediante recompensas y penalizaciones.",
            "Ejemplos ya etiquetados por humanos.",
            "Agrupación de datos similares sin retroalimentación."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. En el aprendizaje por refuerzo, un agente actúa en un entorno y recibe recompensas (+) o penalizaciones (–) que guían el aprendizaje, sin necesidad de un conjunto de datos etiquetado previamente. - --"
        },
        {
          "id": 1040,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Deep Learning se define en el material como",
          "options": [
            "Un algoritmo de aprendizaje por refuerzo.",
            "Una técnica exclusiva de aprendizaje no supervisado.",
            "Un subconjunto del ML con redes neuronales de múltiples capas que descubren las características por sí solas.",
            "Un sinónimo de Inteligencia Artificial Simbólica."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. A diferencia del ML clásico (donde las características/features se diseñan manualmente), el Deep Learning usa redes neuronales de múltiples capas que aprenden las características automáticamente. - --"
        },
        {
          "id": 1041,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Si el coeficiente β₁ de un modelo de regresión lineal simple es negativo, esto indica que:",
          "options": [
            "Existe una relación negativa entre x e y: al aumentar x, y disminuye.",
            "La variable x no tiene ningún efecto sobre y.",
            "El modelo no es válido.",
            "Existe una relación positiva entre x e y."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. Si β₁ < 0, la relación es negativa (a mayor x, menor y esperado); si β₁ > 0, la relación es positiva; si β₁ ≈ 0, x no tiene efecto relevante sobre y. - --"
        },
        {
          "id": 1042,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "El aprendizaje semi-supervisado combina",
          "options": [
            "Pocos datos etiquetados con muchos datos sin etiquetar.",
            "Reglas simbólicas con redes neuronales.",
            "Solo datos etiquetados en grandes volúmenes.",
            "Recompensas positivas y negativas exclusivamente."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. El enfoque semi-supervisado aprovecha la estructura que aporta el no supervisado y la precisión del supervisado, usando pocos datos etiquetados junto con una gran cantidad sin etiquetar. - --"
        },
        {
          "id": 1043,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes preguntas correspondería a un problema de regresión (y no de clasificación)? ## A. ¿El paciente tiene la enfermedad?",
          "options": [
            "¿Cuántos clientes llegarán mañana a la tienda?",
            "¿Este correo es spam o no?",
            "¿La imagen muestra un gato o un perro?"
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. Predecir un número (cantidad de clientes) es un problema de regresión; las demás opciones tienen una salida categórica (Sí/No, spam/no spam, gato/perro), propia de clasificación. - --"
        },
        {
          "id": 1044,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál es la principal diferencia entre MAE y MSE?",
          "options": [
            "El MSE se expresa en las mismas unidades que la variable Y y el MAE no.",
            "El MAE siempre da un valor mayor que el MSE.",
            "El MSE penaliza de forma cuadrática los errores grandes; el MAE trata todos los errores por igual y es más robusto a outliers.",
            "El MAE se puede calcular sobre datos categóricos y el MSE no."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. El MSE eleva los errores al cuadrado, penalizando más fuertemente los valores atípicos, mientras que el MAE es una distancia absoluta simple y por eso es más robusto ante outliers. - --"
        },
        {
          "id": 1045,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Qué método de un DataFrame de pandas permite obtener rápidamente un resumen estadístico (media, desviación, mínimo, máximo, etc.) de las columnas numéricas?",
          "options": [
            "df.head()",
            "df.plot()",
            "df.columns()",
            "df.describe()"
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. df.describe() genera un resumen estadístico (conteo, media, desviación estándar, mínimo, cuartiles, máximo) de las columnas numéricas de un DataFrame. - --"
        },
        {
          "id": 1046,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Si un error se duplica en tamaño, ¿cómo cambia su peso dentro de la función de costo de Mínimos Cuadrados Ordinarios?",
          "options": [
            "Se duplica, igual que el error.",
            "Se cuadruplica (4 veces), porque la penalización es cuadrática.",
            "Se reduce a la mitad.",
            "Se mantiene igual, porque MCO ignora la magnitud del error."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Como MCO eleva los errores al cuadrado, un error del doble de tamaño pesa 4 veces más en la función de costo: la penalización es cuadrática, no lineal ni exponencial. - --"
        },
        {
          "id": 1047,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "La Superinteligencia se describe en el material como",
          "options": [
            "Sinónimo de Machine Learning avanzado.",
            "El nivel alcanzado actualmente por los modelos de lenguaje grande.",
            "Un concepto hipotético que superaría ampliamente al humano en todo, sin consenso sobre su viabilidad.",
            "Un sistema que ya funciona en producción en varias empresas."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. La Superinteligencia es hipotética: superaría ampliamente la capacidad humana en todos los ámbitos, pero no hay consenso científico sobre si es posible ni cuándo. - --"
        },
        {
          "id": 1048,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "La diferencia central entre clasificación y regresión (dentro del aprendizaje supervisado) es:",
          "options": [
            "La regresión solo se aplica a texto; la clasificación solo a imágenes.",
            "La clasificación predice categorías exactas; la regresión predice valores continuos.",
            "No existe diferencia real entre ambas.",
            "La clasificación no usa datos etiquetados y la regresión sí."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. La clasificación produce una salida categórica (p. ej., spam / no spam); la regresión produce una salida numérica continua (p. ej., un precio). - --"
        },
        {
          "id": 1049,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "La detección de anomalías, mencionada como aplicación del aprendizaje no supervisado, consiste en:",
          "options": [
            "Clasificar correos como spam o no spam.",
            "Traducir texto automáticamente.",
            "Encontrar comportamientos o casos atípicos dentro de los datos.",
            "Maximizar una recompensa acumulada."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. La detección de anomalías (p. ej., con Isolation Forest) identifica observaciones que se desvían significativamente del patrón general de los datos. - --"
        },
        {
          "id": 1050,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Qué tipo de gráfico se utiliza típicamente para explorar visualmente la relación entre dos variables numéricas antes de ajustar un modelo de regresión?",
          "options": [
            "Un diagrama de dispersión (scatter plot).",
            "Un histograma de frecuencias acumuladas.",
            "Un gráfico de pastel (pie chart).",
            "Un mapa de calor de correlación categórica."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. El scatter plot (diagrama de dispersión) permite visualizar cómo se relacionan dos variables numéricas, por ejemplo, si la relación parece lineal, antes de entrenar el modelo. - --"
        },
        {
          "id": 1051,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "La Visión por Computadora es definida como el subcampo de la IA que:",
          "options": [
            "Genera texto de manera automática.",
            "Agrupa datos sin etiquetar.",
            "Calcula métricas de error de un modelo de regresión.",
            "Interpreta imágenes y video, hoy dominado por Deep Learning."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. La Visión por Computadora se dedica a interpretar contenido visual (imágenes, video); su arquitectura característica es la CNN (red neuronal convolucional). - --"
        },
        {
          "id": 1052,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál es el criterio técnico que distingue a la IA Débil (Narrow AI)?",
          "options": [
            "Que use redes neuronales de múltiples capas.",
            "Que resuelva una sola tarea y no funcione fuera de ella.",
            "Que haya sido entrenada con datos sin etiquetar.",
            "Que supere la capacidad humana en al menos un dominio."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El criterio técnico de la IA Débil es que resuelve una tarea específica; fuera de esa tarea el sistema es inútil. Es la única IA que existe hoy. - --"
        },
        {
          "id": 1053,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En la interpretación geométrica de la regresión lineal, el **residuo** representa:",
          "options": [
            "El número total de observaciones del dataset.",
            "El punto donde la recta cruza el eje Y.",
            "La distancia vertical entre el dato real y la predicción del modelo.",
            "La pendiente de la recta ajustada."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. El residuo es la diferencia (distancia vertical) entre el valor real observado y el valor predicho por el modelo; es la **materia prima** para calcular métricas de error como RMSE. - --"
        },
        {
          "id": 1054,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Por qué se calcula la raíz cuadrada del MSE para obtener el RMSE?",
          "options": [
            "Para convertir el problema de regresión en uno de clasificación.",
            "Para eliminar la necesidad de un conjunto de prueba.",
            "Para aumentar la sensibilidad a los outliers.",
            "Para devolver el error a las mismas unidades que la variable Y."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. El MSE queda en unidades al cuadrado (p. ej. USD²); al aplicar la raíz cuadrada, el RMSE regresa a las unidades originales de Y (p. ej. USD), haciéndolo más interpretable. - --"
        },
        {
          "id": 1055,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Qué mide la métrica MAE (Error Absoluto Medio)?",
          "options": [
            "La distancia directa entre valores reales y predichos, tratando todos los errores por igual.",
            "La proporción de varianza explicada por el modelo.",
            "La probabilidad de que el modelo esté sobreajustado.",
            "La raíz cuadrada del error cuadrático medio."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. El MAE promedia el valor absoluto de los errores, dando el mismo peso a todos ellos, sin penalizar más los errores grandes (a diferencia del MSE/RMSE). - --"
        },
        {
          "id": 1056,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes afirmaciones sobre la relación entre RMSE y MAE es correcta?",
          "options": [
            "No existe ninguna relación matemática entre ambas métricas.",
            "El RMSE siempre es mayor o igual que el MAE, y la brecha entre ambos crece con la presencia de outliers.",
            "RMSE y MAE son siempre exactamente iguales.",
            "El MAE siempre es mayor o igual que el RMSE."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Debido a la penalización cuadrática del MSE (base del RMSE), el RMSE nunca es menor que el MAE; la diferencia entre ambos aumenta cuanto más outliers o errores grandes existan. - --"
        },
        {
          "id": 1057,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En Machine Learning, una **etiqueta** es",
          "options": [
            "La respuesta correcta ya conocida de un dato de entrenamiento.",
            "La métrica usada para evaluar el modelo final.",
            "Un tipo de red neuronal profunda.",
            "El nombre del algoritmo utilizado para entrenar el modelo."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. La etiqueta es el valor de salida correcto asociado a un ejemplo (p. ej., un correo etiquetado como **spam** o **no-spam**). Los cuatro enfoques de ML se diferencian por cuánta etiqueta usan. - --"
        },
        {
          "id": 1058,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "En Python, ¿qué función de la librería pandas se utiliza típicamente para cargar un archivo CSV en un DataFrame?",
          "options": [
            "pd.read_csv()",
            "pd.DataFrame.plot()",
            "pd.to_csv()",
            "pd.merge()"
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. pd.read_csv() lee un archivo de valores separados por comas y lo carga como un DataFrame de pandas; pd.to_csv() hace lo inverso (guardar un DataFrame como CSV). - --"
        },
        {
          "id": 1059,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes es la definición de Inteligencia Artificial propuesta por McCarthy en 1956?",
          "options": [
            "Sistema que infiere de datos cómo generar predicciones o decisiones.",
            "Estudio de agentes que perciben y actúan racionalmente.",
            "Ciencia e ingeniería de crear máquinas inteligentes.",
            "Aprende patrones de datos para decidir o generar contenido."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. McCarthy acuñó el término **Inteligencia Artificial** en 1956 con esta definición fundacional, centrada en la ingeniería de máquinas inteligentes."
        },
        {
          "id": 1061,
          "category": "historia",
          "categoryName": "Historia e Inviernos",
          "text": "¿Por qué el problema XOR (demostrado por Minsky y Papert en 1969) provocó un estancamiento en las redes neuronales por casi 17 años?",
          "options": [
            "Porque requería usar tarjetas gráficas (GPUs) que no existían en esa época.",
            "Porque demostró que las redes neuronales necesitaban reglas lógicas IF-THEN escritas por humanos.",
            "Porque demostró que un perceptrón de una sola capa solo traza líneas rectas y no puede resolver problemas no lineales.",
            "Porque el gobierno británico recortó los fondos tras el Informe Lighthill en 1973."
          ],
          "correct": 2,
          "feedback": "El problema XOR no es separable con una línea recta. Resolverlo requería múltiples capas, y el algoritmo para entrenarlas (backpropagation) no se popularizó hasta 1986."
        },
        {
          "id": 1062,
          "category": "historia",
          "categoryName": "Historia e Inviernos",
          "text": "¿Qué lección ingenieril crítica nos dejó el fracaso de la IA Simbólica (Sistemas Expertos como MYCIN o DENDRAL) durante los años 80?",
          "options": [
            "Que la Inteligencia Artificial General (AGI) es inalcanzable antes del año 2040.",
            "Que solo los modelos que usan aprendizaje por refuerzo pueden resolver diagnósticos médicos.",
            "Que las redes neuronales son imposibles de explicar y operan como una \"caja negra\".",
            "Que los sistemas basados en reglas manuales estrictas funcionan bien en laboratorios, pero son frágiles y no escalan ante la incertidumbre del mundo real."
          ],
          "correct": 3,
          "feedback": "La IA Simbólica exigía reprogramar miles de reglas a mano si el mundo cambiaba (ej. una nueva bacteria). Carecían de adaptabilidad."
        },
        {
          "id": 1063,
          "category": "historia",
          "categoryName": "Historia e Inviernos",
          "text": "El despegue masivo del Deep Learning en 2012 (cuando AlexNet ganó ImageNet) fue posible gracias a la convergencia de tres ingredientes fundamentales. ¿Cuáles son?",
          "options": [
            "El Test de Turing, la arquitectura Transformer y las máquinas LISP.",
            "El algoritmo de backpropagation, la IA Simbólica y el aprendizaje por refuerzo.",
            "Modelos preentrenados, Fine-tuning y Reinforcement Learning from Human Feedback (RLHF).",
            "Cómputo en GPUs, enormes volúmenes de datos etiquetados (Big Data) y mejores algoritmos (como ReLU y Dropout)."
          ],
          "correct": 3,
          "feedback": "AlexNet demostró que con GPUs, suficientes datos (ImageNet) y algoritmos modernos, las redes muy profundas finalmente podían entrenarse y generalizar de forma espectacular."
        },
        {
          "id": 1064,
          "category": "definiciones",
          "categoryName": "Definiciones y Tipos de IA",
          "text": "¿Cuál es la definición fundacional de Inteligencia Artificial propuesta por McCarthy en 1956?",
          "options": [
            "El paradigma que aprende patrones de datos para generar contenido.",
            "Un sistema que infiere de datos cómo generar predicciones o decisiones.",
            "La ciencia e ingeniería de crear máquinas inteligentes.",
            "El estudio de agentes que perciben y actúan racionalmente."
          ],
          "correct": 2,
          "feedback": "McCarthy acuñó el término en 1956 con un enfoque en la ingeniería de sistemas."
        },
        {
          "id": 1065,
          "category": "definiciones",
          "categoryName": "Definiciones y Tipos de IA",
          "text": "Según Russell y Norvig (2020), ¿cuál es la definición científica/moderna de Inteligencia Artificial?",
          "options": [
            "Aprende patrones de datos para decidir o generar contenido.",
            "Un sistema que infiere de datos cómo generar predicciones o decisiones.",
            "La ciencia e ingeniería de crear máquinas inteligentes.",
            "El estudio de agentes que perciben y actúan racionalmente para maximizar su desempeño."
          ],
          "correct": 3,
          "feedback": "La IA moderna se define en torno al concepto del Agente Racional (sensores y actuadores guiados por objetivos)."
        },
        {
          "id": 1066,
          "category": "definiciones",
          "categoryName": "Definiciones y Tipos de IA",
          "text": "Según la regla práctica del curso, ¿cuál es el criterio técnico que distingue a la Inteligencia Artificial General (AGI) de la \"IA Fuerte\"?",
          "options": [
            "La AGI es sinónimo de IA Fuerte; no hay ninguna diferencia.",
            "La AGI se restringe a resolver tareas matemáticas, mientras la IA Fuerte entiende lenguaje.",
            "La AGI supera ampliamente al humano en todo y tiene la capacidad de automodificarse.",
            "La IA Fuerte ya existe en sistemas como GPT-4, mientras la AGI es un concepto teórico."
          ],
          "correct": 2,
          "feedback": "IA Fuerte = Nivel humano. AGI = Supera al humano y se automodifica. Ambas son actualmente hipotéticas."
        },
        {
          "id": 1067,
          "category": "ml_teoria",
          "categoryName": "Tipos de Machine Learning",
          "text": "En Machine Learning, el aprendizaje supervisado se divide en dos grandes tareas. Si debes predecir si un préstamo será pagado o no (Riesgo Alto/Bajo), y si debes predecir el precio exacto de una casa en dólares, ¿qué tareas estás usando respectivamente?",
          "options": [
            "Detección de anomalías (valores atípicos) y Clustering (agrupamiento).",
            "Clasificación (categorías exactas) y Regresión (valores numéricos continuos).",
            "Regresión (valores numéricos continuos) y Clasificación (categorías exactas).",
            "Clustering (agrupamiento) y Clasificación (categorías exactas)."
          ],
          "correct": 1,
          "feedback": "Riesgo Alto/Bajo son categorías fijas (Clasificación). El precio es un número en un espectro continuo (Regresión)."
        },
        {
          "id": 1068,
          "category": "ml_teoria",
          "categoryName": "Tipos de Machine Learning",
          "text": "¿Por qué el \"Aprendizaje Semi-supervisado\" es el enfoque detrás de grandes sistemas como Google Photos?",
          "options": [
            "Porque garantiza una precisión del 100% sin necesidad de limpieza previa de los datos.",
            "Porque es el único método capaz de procesar imágenes usando reglas IF-THEN.",
            "Porque entrena modelos compitiendo entre sí a través de penalizaciones y recompensas (como un videojuego).",
            "Porque permite aprovechar la inmensa cantidad de datos sin etiquetar descubriendo su estructura, para luego aplicar la precisión de unos pocos datos etiquetados manualmente."
          ],
          "correct": 3,
          "feedback": "Etiquetar es caro. El semi-supervisado agrupa automáticamente (ej. encuentra el rostro de \"Mamá\") y solo pide la etiqueta una vez."
        },
        {
          "id": 1069,
          "category": "ml_teoria",
          "categoryName": "Tipos de Machine Learning",
          "text": "Dentro del mapa de disciplinas de la IA, ¿qué son la Visión por Computadora y el Procesamiento de Lenguaje Natural (NLP)?",
          "options": [
            "Son ramas de la IA Simbólica que dependen de miles de reglas programadas a mano.",
            "Son algoritmos de Aprendizaje por Refuerzo usados exclusivamente en robótica.",
            "Son subcampos de la Inteligencia Artificial general que hoy en día logran sus mejores resultados utilizando técnicas de Deep Learning.",
            "Son sinónimos exactos de Machine Learning Clásico."
          ],
          "correct": 2,
          "feedback": "Ambas son ramas independientes de la IA, pero hoy se intersectan profundamente con el Deep Learning (CNNs para Visión, Transformers para NLP)."
        },
        {
          "id": 1070,
          "category": "python_practica",
          "categoryName": "Taller Práctico: Numpy y Pandas",
          "text": "Si en Python creas la lista `[1, 2, 3]` y la multiplicas por 2, obtienes `[1, 2, 3, 1, 2, 3]`. Pero si haces lo mismo con un array de NumPy (`np.array([1, 2, 3]) * 2`), ¿qué resultado obtienes y por qué?",
          "options": [
            "`[1, 2, 3, 1, 2, 3]`, porque NumPy maneja los arrays exactamente igual que las listas de Python.",
            "`[1, 4, 9]`, porque NumPy siempre eleva al cuadrado por defecto en operaciones simples.",
            "Un error de sintaxis, porque no se pueden multiplicar arrays en NumPy.",
            "`[2, 4, 6]`, porque NumPy aplica la operación de forma vectorizada a cada elemento matemáticamente."
          ],
          "correct": 3,
          "feedback": "La vectorización es la base de NumPy; aplica operaciones directamente sobre cada elemento en C por debajo, siendo infinitamente más rápido para cálculos matemáticos en IA."
        },
        {
          "id": 1071,
          "category": "python_practica",
          "categoryName": "Taller Práctico: Numpy y Pandas",
          "text": "¿Por qué es obligatorio utilizar la función `pd.to_datetime()` sobre la columna de fecha luego de cargar un archivo CSV con Pandas?",
          "options": [
            "Para evitar que los valores de fecha generen errores de \"outliers\" en los modelos de Machine Learning.",
            "Para forzar a la columna a tener valores booleanos (True/False) dependientes de si es fin de semana.",
            "Porque los archivos CSV no soportan números y todo debe ser transformado antes del análisis.",
            "Porque Pandas importa todas las fechas como cadenas de texto genéricas (object), lo que impide realizar cálculos temporales o extraer el mes y el año."
          ],
          "correct": 3,
          "feedback": "Mientras la fecha sea tipo \"object\" (texto), es imposible extraer `dt.month` o calcular días transcurridos. `to_datetime()` la convierte al formato temporal correcto."
        },
        {
          "id": 1072,
          "category": "python_practica",
          "categoryName": "Taller Práctico: Numpy y Pandas",
          "text": "Si necesitas obtener rápidamente el conteo, la media, la desviación estándar, los cuartiles y los valores máximos y mínimos de las columnas numéricas de tu DataFrame, ¿qué comando de Pandas utilizas?",
          "options": [
            "`df.describe()`",
            "`df.value_counts()`",
            "`df.info()`",
            "`df.head()`"
          ],
          "correct": 0,
          "feedback": "`describe()` arroja un cuadro estadístico completo de todas las variables numéricas, clave en la fase de exploración (EDA)."
        },
        {
          "id": 1073,
          "category": "python_practica",
          "categoryName": "Taller Práctico: Numpy y Pandas",
          "text": "En Matplotlib, al construir un histograma de ventas, ¿para qué sirve la función `plt.axvline()`?",
          "options": [
            "Para separar las barras del histograma y hacer que cambien de color automáticamente.",
            "Para eliminar de la gráfica todos los valores atípicos (outliers).",
            "Para dibujar una línea vertical (por ejemplo, marcando el promedio), lo que ayuda a interpretar visualmente la distribución de los datos.",
            "Para generar las etiquetas del eje X cuando los textos son muy largos y se sobreponen."
          ],
          "correct": 2,
          "feedback": "`axvline` (Axis Vertical Line) traza una línea perpendicular al eje X, muy útil para mostrar visualmente dónde se ubica la media respecto a la distribución."
        }
      ]
    }
  ]
};