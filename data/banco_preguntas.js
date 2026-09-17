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
    },
    {
      "id": "semana_2",
      "titulo": "Semana 2 - Regresión Lineal Simple y Métricas",
      "categorias": [
        {
          "value": "all",
          "label": "Todas (Semana 2)"
        },
        {
          "value": "metricas",
          "label": "Métricas de Evaluación (MAE, RMSE, R²)"
        },
        {
          "value": "visual",
          "label": "Análisis Visual y Residuos"
        },
        {
          "value": "teoria_ml",
          "label": "Conceptos Teóricos y Extrapolación"
        },
        {
          "value": "comandos",
          "label": "Pipeline de Scikit-Learn"
        },
        {
          "value": "bookmarked",
          "label": "Marcadas para Duda"
        }
      ],
      "preguntas": [
        {
          "category": "metricas",
          "categoryName": "Métricas de Evaluación",
          "text": "En el contexto de evaluar un modelo predictivo, ¿qué representa matemáticamente la métrica R² (Coeficiente de Determinación)?",
          "options": [
            "El peso que se le asigna a los errores más grandes para penalizar modelos inestables.",
            "La distancia promedio absoluta entre cada predicción y su valor real correspondiente en el dataset de prueba.",
            "La probabilidad porcentual de que la predicción del modelo sea exactamente igual a la realidad en nuevos datos.",
            "La proporción de la varianza en la variable a predecir que el modelo logra explicar frente a simplemente adivinar usando el promedio."
          ],
          "correct": 3,
          "feedback": "R² es una métrica relativa (sin unidades). R²=0.92 significa que el modelo explica el 92% de la varianza. El resto es ruido o requiere más variables.",
          "id": 1074
        },
        {
          "category": "metricas",
          "categoryName": "Métricas de Evaluación",
          "text": "Al evaluar un modelo de regresión, observas que el RMSE es significativamente mayor que el MAE. ¿Qué te indica estadísticamente esta diferencia?",
          "options": [
            "El modelo es perfecto; un RMSE mayor que el MAE es la prueba definitiva de que la varianza es constante.",
            "La relación entre las variables de entrada y salida no es lineal, por lo que MCO no logró ajustar una recta adecuada.",
            "El modelo está cometiendo errores inusualmente grandes (outliers) en ciertas predicciones, ya que el RMSE amplifica los errores al elevarlos al cuadrado.",
            "El modelo sufre de un overfitting severo, memorizando el conjunto de entrenamiento en lugar de aprender el patrón general."
          ],
          "correct": 2,
          "feedback": "El MAE trata todos los errores por igual. El RMSE eleva el error al cuadrado antes de promediar, por lo que unos pocos errores enormes disparan el valor del RMSE por encima del MAE.",
          "id": 1075
        },
        {
          "category": "metricas",
          "categoryName": "Métricas de Evaluación",
          "text": "El algoritmo de Mínimos Cuadrados Ordinarios (MCO) ajusta la recta de regresión minimizando la suma de los errores. ¿Por qué eleva los errores al cuadrado en lugar de solo usar el valor absoluto?",
          "options": [
            "Para transformar automáticamente distribuciones sesgadas en distribuciones normales y cumplir los supuestos.",
            "Porque el valor absoluto consume demasiada memoria computacional en datasets de millones de filas.",
            "Para asegurar que la métrica de error siempre devuelva valores en el rango estadístico entre 0 y 1.",
            "Para evitar que subestimaciones y sobreestimaciones se cancelen entre sí, y porque la función cuadrática es diferenciable (ideal para cálculo matemático)."
          ],
          "correct": 3,
          "feedback": "Elevar al cuadrado resuelve el problema de signos (cancelación) y crea una curva convexa suave (parábola) que matemáticamente permite encontrar el mínimo exacto con derivadas.",
          "id": 1076
        },
        {
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Antes de entrenar un modelo de regresión lineal, la regla de oro es realizar una exploración visual con un diagrama de dispersión (scatter plot). ¿Cuál es el objetivo principal de este paso?",
          "options": [
            "Calcular directamente la ecuación de la recta (pendiente e intercepto) sin usar código de Scikit-Learn.",
            "Dividir visualmente los datos en un conjunto de entrenamiento (80%) y un conjunto de prueba (20%).",
            "Detectar si realmente existe una tendencia lineal clara entre las variables y visualizar si existen valores atípicos extremos (outliers).",
            "Convertir las variables categóricas de texto a números para que el modelo pueda procesarlas."
          ],
          "correct": 2,
          "feedback": "El scatter plot te dice a simple vista si intentar aplicar regresión lineal tiene sentido. Si los puntos forman una curva de U, una recta será inútil.",
          "id": 1077
        },
        {
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "En un gráfico de residuos (errores vs valores predichos), observas que los puntos forman un claro patrón de 'embudo' o 'cono' que se abre hacia la derecha. ¿Qué supuesto matemático está violando el modelo?",
          "options": [
            "Normalidad: los residuos no siguen la forma simétrica de una campana de Gauss.",
            "Linealidad: la verdadera relación en el mundo real es una curva polinómica y no una línea recta.",
            "Independencia: una observación está directamente influenciada por la observación anterior.",
            "Homocedasticidad: la varianza del error no es constante, sino que crece a medida que los valores de X aumentan."
          ],
          "correct": 3,
          "feedback": "El patrón de embudo (heterocedasticidad) es común: predecir el precio de casas pequeñas tiene poco margen de error, pero el precio de mansiones gigantes varía brutalmente.",
          "id": 1078
        },
        {
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "En la evaluación de tu modelo, construyes un gráfico con los Valores Predichos (eje X) frente a los Valores Reales (eje Y). ¿Qué patrón visual indicaría un modelo de regresión absolutamente perfecto?",
          "options": [
            "Los puntos se agrupan en un círculo denso en el centro exacto del gráfico.",
            "Los puntos forman una línea totalmente horizontal cruzando el promedio de la variable Y.",
            "Los puntos forman una nube completamente aleatoria (sin patrón) alrededor de la línea de cero.",
            "Todos los puntos caen alineados exactamente sobre una recta diagonal perfecta de 45 grados."
          ],
          "correct": 3,
          "feedback": "Si Predicho = Real, entonces X=Y. La gráfica de X=Y es una línea recta diagonal de 45 grados.",
          "id": 1079
        },
        {
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Al graficar el histograma del precio de departamentos, notas que la gran mayoría de propiedades son baratas o de precio medio, pero hay un pequeño grupo de mansiones de lujo que extienden el gráfico como una larga 'cola' hacia la derecha. ¿Cómo se clasifica esta distribución?",
          "options": [
            "Distribución Uniforme (Uniform distribution), ya que hay precios a lo largo de todo el espectro.",
            "Distribución Normal (Campana de Gauss), ya que es el comportamiento esperado en la economía humana.",
            "Distribución Sesgada (Skewed distribution), lo que indica asimetría extrema provocada por outliers.",
            "Distribución Bimodal, porque claramente existen dos mercados diferentes (barato y caro) compitiendo."
          ],
          "correct": 2,
          "feedback": "El sesgo hacia la derecha (right skew) es típico en salarios o precios: un límite inferior estricto (0 dólares) pero sin límite superior (multimillonarios).",
          "id": 1080
        },
        {
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "¿Cuál es el riesgo fundamental de medir la calidad de tu modelo evaluando su MAE y RMSE sobre los MISMOS datos que usaste para entrenarlo (el Train Set)?",
          "options": [
            "El modelo arrojará un error de sintaxis en Scikit-Learn porque no está permitido predecir sobre datos de entrenamiento.",
            "El modelo subestimará su propio desempeño, haciéndote creer que es mucho peor de lo que en realidad es.",
            "No podrás saber si el modelo aprendió a generalizar el patrón real, o si simplemente memorizó las respuestas específicas, lo cual ocultaría un posible 'overfitting'.",
            "Los valores de MAE y RMSE se volverán negativos, lo cual arruina la interpretación estadística."
          ],
          "correct": 2,
          "feedback": "Evaluar un modelo sobre sus datos de entrenamiento es como darle a un alumno las respuestas exactas antes del examen. Siempre sacarás un 10 falso. Por eso siempre hay que ocultar el 20% (Test Set).",
          "id": 1081
        },
        {
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Tu modelo de regresión predice rendimiento agrícola. Fue entrenado con dosis de fertilizante entre 50 y 200 kg/ha. Si usas el modelo para predecir el rendimiento usando 800 kg/ha, ¿qué falacia matemática y de negocio estás cometiendo?",
          "options": [
            "Estás extrapolando; assumes que la línea recta seguirá subiendo hasta el infinito, ignorando la realidad (ej. exceso de químico quema la planta).",
            "Estás induciendo overfitting; el modelo intentará memorizar la predicción de 800 kg/ha y dañará sus pesos internos.",
            "Estás interpolando; es seguro porque el modelo ya aprendió la pendiente matemática exacta de la naturaleza.",
            "Estás rompiendo el supuesto de independencia, ya que la predicción de 800 depende de las predicciones menores."
          ],
          "correct": 0,
          "feedback": "Extrapolar con un modelo lineal es sumamente peligroso. Las líneas rectas no tienen tope matemático, pero el mundo físico sí lo tiene.",
          "id": 1082
        },
        {
          "category": "comandos",
          "categoryName": "Pipeline de Scikit-Learn",
          "text": "En el flujo clásico de Machine Learning, usamos el comando `train_test_split(X, y, test_size=0.2)`. ¿Cuál es el propósito exacto de esta instrucción?",
          "options": [
            "Recortar el 20% de los valores atípicos (outliers) extremos para limpiar la base de datos antes de entrenar.",
            "Comprobar si el modelo es al menos un 20% mejor que predecir utilizando simplemente el promedio.",
            "Extraer aleatoriamente el 20% del dataset original para ocultarlo durante el entrenamiento, garantizando una evaluación honesta sobre datos nunca vistos.",
            "Dividir cada columna en 20 pedazos independientes para que el modelo entrene más rápido en paralelo."
          ],
          "correct": 2,
          "feedback": "Garantiza la regla de oro del ML: nunca debes evaluar el modelo usando datos que usó para entrenar.",
          "id": 1083
        },
        {
          "category": "comandos",
          "categoryName": "Pipeline de Scikit-Learn",
          "text": "Una vez inicializado tu modelo (`modelo = LinearRegression()`), ¿qué comando en Scikit-Learn desencadena el algoritmo matemático que procesa los datos y calcula la pendiente y el intercepto óptimos?",
          "options": [
            "`modelo.train(X, y)`",
            "`modelo.predict(X_test)`",
            "`modelo.optimize_weights()`",
            "`modelo.fit(X_train, y_train)`"
          ],
          "correct": 3,
          "feedback": "El método `.fit()` ('ajustar') es el estándar absoluto en scikit-learn para entrenar cualquier algoritmo, desde Regresión hasta Random Forests.",
          "id": 1084
        },
        {
          "category": "comandos",
          "categoryName": "Pipeline de Scikit-Learn",
          "text": "En la fórmula clásica de la regresión lineal simple: ŷ = β₀ + β₁x, ¿a qué componente matemático hace referencia exactamente el término β₁ (beta sub uno)?",
          "options": [
            "El coeficiente de determinación (R²); evalúa qué tan confiable es la predicción.",
            "El error residual; cuantifica la distancia entre el punto real y la línea de predicción.",
            "El intercepto (intercept); indica el valor inicial de ŷ asumiendo que x fuera exactamente cero.",
            "La pendiente (slope); indica cuánto sube o baja el valor estimado de ŷ por cada unidad extra de la variable x."
          ],
          "correct": 3,
          "feedback": "β₀ es el intercepto (el punto de partida) y β₁ es la pendiente (el motor de cambio). Juntos forman los 'parámetros' que el modelo aprende de los datos.",
          "id": 1085
        },
        {
          "id": 1103,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "¿Cuál es la diferencia técnica estricta entre las librerías `pandas` y `numpy` en el pipeline del Laboratorio 1?",
          "options": [
            "No hay diferencia; ambas son nombres distintos para la misma librería creada por Scikit-Learn.",
            "`pandas` manipula la tabla de datos completa (DataFrame) y `numpy` ejecuta cálculos matemáticos sobre arreglos (ej. calcular la raíz cuadrada para RMSE).",
            "`numpy` solo funciona con variables de texto (strings) y `pandas` con variables numéricas enteras.",
            "`pandas` es para modelos de Machine Learning y `numpy` es para generar gráficos de dispersión interactivos."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1104,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "En Pandas, ¿qué información crítica te proporciona el comando `df.describe()` antes de entrenar el modelo?",
          "options": [
            "La ecuación matemática exacta de la recta de regresión que mejor se ajusta a los datos.",
            "Un mapa de calor automático que muestra la correlación de Pearson entre todas las variables.",
            "Estadísticas descriptivas completas como media, desviación estándar, valores mínimos y máximos de las variables numéricas.",
            "Un listado de todas las celdas nulas o vacías que impedirán que el modelo de regresión se ejecute."
          ],
          "correct": 2,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1105,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Al revisar los datos con `df.info()`, notas que la variable predictora está como 'object' (texto) en lugar de 'float'. ¿Qué sucederá si intentas ejecutar `modelo.fit()`?",
          "options": [
            "Scikit-Learn aplicará One-Hot Encoding por defecto a cualquier columna tipo 'object'.",
            "El modelo entrenará normalmente, ignorando internamente la columna de texto y usando promedios aleatorios.",
            "El modelo automáticamente convertirá el texto a números usando la longitud de la cadena de caracteres.",
            "Scikit-Learn lanzará un error, ya que los modelos de regresión lineal pura no pueden procesar texto sin ser convertido a números."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1106,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "En la librería Matplotlib, ¿por qué utilizamos `axes.scatter(X, y)` para graficar los datos de entrenamiento y NO usamos `axes.plot(X, y)`?",
          "options": [
            "Porque `scatter` es el único comando que soporta variables de tipo decimal (float) en el eje X.",
            "Porque `scatter` dibuja puntos individuales sueltos (la 'nube' de datos real), mientras que `plot` dibuja una línea continua que une cada punto, creando un gráfico confuso de zigzag.",
            "Porque `plot` automáticamente ajusta y dibuja la línea de regresión perfecta sin necesidad de entrenar un modelo.",
            "No importa, ambos comandos generan exactamente el mismo resultado visual en gráficos bidimensionales."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1107,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Deseas graficar la recta de predicciones del modelo sobre el scatter plot. ¿Qué combinación de comandos y datos usarías?",
          "options": [
            "`axes.scatter(y_test, y_pred)` para dibujar la línea horizontal promedio.",
            "`axes.scatter(X_train, y_test)` usando un color azul oscuro.",
            "`axes.plot(X_train, y_train)` con el parámetro linewidth=0.",
            "`axes.plot(X_test, y_pred)` usando color rojo para sobreponer la línea sobre los puntos reales."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1108,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Observas un scatter plot de Precio vs Área, pero los puntos parecen formar una curva exponencial en lugar de una recta. ¿Qué deberías concluir?",
          "options": [
            "Que la relación no es lineal; intentar ajustar un modelo de regresión lineal simple estándar resultará en un modelo ineficiente (underfitting).",
            "Que el modelo de regresión lineal simple será perfecto porque las curvas exponenciales se aplanan durante el entrenamiento.",
            "Que debes eliminar todos los datos de la parte superior de la curva para forzar que parezca una recta.",
            "Que los datos tienen ruido aleatorio extremo y es imposible aplicar Machine Learning."
          ],
          "correct": 0,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1109,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Al usar `train_test_split`, siempre defines el parámetro `random_state=42`. ¿Cuál es el propósito empresarial y técnico de este comando?",
          "options": [
            "Fijar el límite máximo de error (42%) que el modelo de regresión puede tolerar antes de colapsar.",
            "Garantizar la 'reproducibilidad': asegura que cada vez que tú o tu jefe ejecuten el código, la división aleatoria sea idéntica y las métricas no cambien misteriosamente.",
            "Asegurar que el 42% de los datos sean siempre descartados para acelerar el procesamiento en servidores locales.",
            "Mejorar la exactitud del modelo inyectando una semilla matemática secreta que optimiza los pesos de Scikit-Learn."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1110,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Si en lugar de dividir el dataset en Train y Test (80/20), decides entrenar con el 100% de los datos y evaluar sobre ese mismo 100%, ¿qué engaño estadístico estás sufriendo?",
          "options": [
            "El error RMSE será ridículamente alto porque el modelo intentará adivinar dos veces los mismos datos, colisionando matemáticamente.",
            "Ninguno; evaluar sobre el 100% es la única forma estadísticamente pura de obtener el R² real del mercado inmobiliario.",
            "El modelo reportará un R² negativo porque Scikit-Learn prohíbe evaluar modelos sin la función `train_test_split`.",
            "Crees que tu modelo generaliza perfecto (RMSE bajo), pero en realidad estás evaluando su capacidad de memorizar los datos que ya vio, ocultando el posible Overfitting."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1111,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "¿Cuál es la proporción estándar recomendada para separar el dataset en entrenamiento (Train) y evaluación (Test) en la industria general?",
          "options": [
            "100% para entrenar y luego descargar datos aleatorios de internet para evaluar.",
            "50% para entrenar y 50% para evaluar estrictamente.",
            "10% para entrenar y 90% para evaluar.",
            "80% para entrenar y 20% para evaluar (o 70% / 30% dependiendo de la cantidad de datos)."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1112,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "En Scikit-Learn, el comando que genera las predicciones para calcular las métricas sobre datos nuevos es:",
          "options": [
            "`modelo.fit(X_test, y_test)`",
            "`modelo.score(y_test, X_train)`",
            "`modelo.predict(X_test)`",
            "`modelo.evaluate(y_pred)`"
          ],
          "correct": 2,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1113,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "¿Por qué la variable `X` debe ser una estructura 2D (ej. `df[['area_m2']]`) mientras que la variable `y` puede ser 1D (ej. `df['precio_usd']`)?",
          "options": [
            "No es cierto, ambas variables deben ser estrictamente estructuras 3D (Tensores) en Scikit-Learn.",
            "Porque Scikit-Learn espera que `X` sea una matriz (tabla) capaz de contener múltiples columnas predictoras en el futuro, pero `y` siempre es un único vector de respuestas.",
            "Porque Pandas exige que las variables con números decimales sean forzadas a estar en formato 2D bidimensional para ahorrar memoria.",
            "Porque el eje X de Matplotlib requiere obligatoriamente una estructura 2D para graficar, mientras que el eje Y no."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1114,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Una vez entrenado el modelo, ¿qué atributos de la variable `modelo` de Scikit-Learn contienen la pendiente y el intercepto matemáticos aprendidos?",
          "options": [
            "`modelo.weights` y `modelo.anchor`.",
            "`modelo.coef_` (para la pendiente) y `modelo.intercept_` (para el intercepto).",
            "`modelo.beta1` y `modelo.beta0`.",
            "`modelo.slope` y `modelo.bias`."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1115,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "Predices precio vs metros cuadrados. Tu modelo dice que el Intercepto (β₀) es -5,000 USD y la Pendiente (β₁) es +1,200 USD. ¿Qué significado lógico en el negocio tiene el Intercepto aquí?",
          "options": [
            "Significa que los materiales base (sin área construida) cuestan 5,000 USD.",
            "Significa que la constructora te pagará 5,000 USD por llevarte el departamento.",
            "Significa que el modelo ha fallado miserablemente y debe ser descartado, porque el intercepto siempre debe ser cero absoluto.",
            "No tiene sentido lógico real, ya que un departamento de 0 m² no puede tener un precio negativo; el intercepto actúa solo como un ancla matemática para que la recta cuadre con los datos mayores a 30 m²."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1116,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "Continuando con la pregunta anterior (β₁ = +1,200). ¿Qué le explicas al cliente que significa este coeficiente?",
          "options": [
            "'El error máximo que comete nuestro sistema al estimar tu propiedad es de 1,200 dólares'.",
            "'Por cada metro cuadrado adicional que decidas construir o comprar, el precio del departamento aumentará en promedio 1,200 dólares'.",
            "'El departamento costará 1,200 dólares solo si tiene más de 100 metros cuadrados'.",
            "'El precio inicial de cualquier departamento es de 1,200 dólares, y va disminuyendo según el área'."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1117,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Interpolación vs Extrapolación: Entrenas tu modelo con departamentos de 40 m² a 150 m². Luego, el banco te pide predecir el precio de un inmenso terreno de 5,000 m². ¿Por qué confiar ciegamente en esta predicción lineal es un error gravísimo?",
          "options": [
            "Porque los terrenos grandes requieren automáticamente regresión logística en lugar de regresión lineal.",
            "No es un error. Las matemáticas son universales y la recta infinita garantizará un precio perfecto al 100% de precisión.",
            "Porque estás extrapolando masivamente; la tendencia lineal del precio por m² de los departamentos casi seguro no se mantiene igual para hectáreas de terreno vacío.",
            "Porque estás interpolando masivamente, lo que genera colapso en la memoria de la CPU de Scikit-Learn."
          ],
          "correct": 2,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1118,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "En el contexto de estimar el salario de un desarrollador de software (en dólares), si obtienes un MAE de 400. ¿Qué significa exactamente ese número?",
          "options": [
            "Significa que el 400% de la varianza salarial no puede ser explicada por tu modelo de regresión.",
            "Significa que el salario base de cualquier desarrollador junior comenzará siempre en 400 dólares mensuales.",
            "Significa que el modelo comete un error cuadrático masivo y las predicciones están desviadas en 160,000 dólares (400 al cuadrado).",
            "Significa que, en promedio, cuando el modelo intenta predecir el salario de alguien, se equivoca por 400 dólares (ya sea pagando de más o pagando de menos)."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1119,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "¿Por qué en los laboratorios calculamos el RMSE (Root Mean Squared Error) aplicando la raíz cuadrada al MSE (`np.sqrt(mean_squared_error)`)?",
          "options": [
            "Porque Scikit-Learn no permite imprimir números grandes por pantalla sin antes aplicarles la raíz cuadrada.",
            "Para devolver el error a las unidades originales del problema (ej. de 'dólares al cuadrado' a 'dólares normales') para que sea entendible por un ser humano.",
            "Para que el error siempre dé un número entre 0 y 1, similar a una probabilidad.",
            "Para ocultar los errores catastróficos causados por los outliers, reduciendo artificialmente el impacto visual de los errores grandes."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1120,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "Si tu R² en el conjunto de entrenamiento (Train) es 0.95 pero tu R² en el conjunto de prueba (Test) es 0.10. ¿Cuál es el diagnóstico inequívoco de este modelo?",
          "options": [
            "Sufre un Underfitting severo. No pudo entender la relación ni siquiera con los datos que tenía frente a sus ojos.",
            "Es un modelo matemáticamente imposible; el R² de Test siempre debe ser idéntico al R² de Train por ley estadística.",
            "Sufre un Overfitting extremo. Memorizó los datos con los que entrenó pero es totalmente inútil para predecir sobre datos nuevos y reales.",
            "Es el modelo perfecto. El R² de prueba bajo demuestra que el modelo es humilde y no sufre de data leakage."
          ],
          "correct": 2,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1121,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "¿Qué sucedería matemáticamente si Mínimos Cuadrados Ordinarios (MCO) solo intentara minimizar la suma de los errores normales (sin elevarlos al cuadrado ni aplicar valor absoluto)?",
          "options": [
            "El modelo ajustaría una recta perfecta que pasaría exactamente por todos y cada uno de los puntos, creando un sobreajuste del 100%.",
            "Las predicciones que superan el valor real cancelarían mágicamente a las predicciones que están por debajo del valor real, dando una suma engañosa de error cero.",
            "La línea de regresión explotaría buscando el infinito vertical porque no hay techo para los errores.",
            "El R² ordinario se transformaría automáticamente en R² ajustado sin necesidad de calcular 'p' ni 'n'."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1122,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Al revisar el gráfico predichos vs reales de un modelo inmobiliario, ves que para precios por debajo de USD 100,000 los puntos se alinean perfecto a la diagonal, pero para propiedades de USD 500,000 los puntos caen muy por debajo de la diagonal. ¿Qué significa?",
          "options": [
            "Significa que la métrica de R² es del 100% para todas las propiedades millonarias.",
            "El modelo está subestimando sistemáticamente los precios de las propiedades de lujo (predice que valen mucho menos de lo que realmente valen).",
            "El modelo está sobrestimando sistemáticamente el precio de las propiedades baratas.",
            "Significa que es momento de descartar completamente la librería Matplotlib por fallos en renderizado gráfico."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1123,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "¿Cuál es la premisa fundamental del algoritmo de Mínimos Cuadrados Ordinarios (MCO / OLS) que usa Scikit-Learn por debajo de la mesa?",
          "options": [
            "Encuentra la línea recta que toca la mayor cantidad de puntos de datos físicos simultáneamente en el gráfico.",
            "Calcula el promedio matemático de la variable Y y dibuja una línea horizontal inamovible.",
            "Encuentra la única línea recta matemática que hace que la suma de todos los 'residuos' (errores) elevados al cuadrado sea la menor posible.",
            "Divide el dataset en múltiples líneas pequeñas y aplica redes neuronales para unirlas en una curva hiperbólica."
          ],
          "correct": 2,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1124,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "En el contexto de Regresión Lineal, ¿a qué llamamos formalmente un 'residuo'?",
          "options": [
            "A la pendiente de la recta cuando intercepta el eje X en el punto cero.",
            "Al número de filas descartadas por el `train_test_split` que no fueron usadas en el entrenamiento.",
            "A la diferencia matemática entre el MAE y el RMSE cuando existen demasiados valores atípicos.",
            "A la distancia vertical exacta entre el dato real (y_i) y el punto correspondiente estimado por la línea de predicción (ŷ_i)."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1125,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Tienes un R² de 0.05 (5%) al intentar predecir el precio del oro basándote en la cantidad de lluvias en Japón. ¿Cuál es el análisis correcto?",
          "options": [
            "Hubo un error de sintaxis en Pandas. El R² siempre varía entre 1 y 100, nunca da decimales tan bajos.",
            "El R² es lo suficientemente alto para justificar una inversión millonaria, ya que en el mundo financiero cualquier número sobre 0 es ganancia.",
            "El modelo es inútil. Prácticamente toda la variabilidad del precio del oro (95%) depende de factores externos que el modelo desconoce totalmente.",
            "El modelo tiene un 5% de probabilidad de adivinar el precio del oro exacto en el próximo año bisiesto."
          ],
          "correct": 2,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1126,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "¿Qué sucede con la métrica MAE si dentro de un dataset de casas hay UNA sola casa multimillonaria catalogada por error como 10 veces su valor real (outlier masivo)?",
          "options": [
            "El MAE aumentará, pero no tan violentamente como lo haría el RMSE, ya que el MAE no eleva los errores enormes al cuadrado.",
            "El MAE se volverá instantáneamente negativo, indicando la presencia del outlier.",
            "El MAE y el R² se volverán idénticos matemáticamente.",
            "El MAE la ignorará por completo de forma automática gracias al filtro de la mediana matemática."
          ],
          "correct": 0,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1127,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "¿Por qué es una mala práctica empresarial confiar en un modelo solo mirando el R² de entrenamiento sin validar nunca sobre el Test Set?",
          "options": [
            "Porque un R² alto en entrenamiento solo prueba que el algoritmo logró acoplarse a los datos pasados, no que haya descubierto la ley subyacente útil para el futuro.",
            "No es mala práctica. El R² de entrenamiento es la métrica de oro avalada mundialmente por la Unión Europea.",
            "Porque Scikit-Learn inserta datos falsos aleatoriamente en la matriz de entrenamiento por temas de seguridad de la memoria RAM.",
            "Porque los gerentes no entienden de porcentajes y es mejor entregarles gráficos de torta circulares."
          ],
          "correct": 0,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1128,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Para evitar Overfitting en regresión, el principio de la Navaja de Ockham sugiere que:",
          "options": [
            "Debes recortar (afeitar) la cantidad de datos del conjunto de entrenamiento a la mitad para que el modelo entrene más rápido.",
            "Ante dos modelos con poder predictivo similar en el test set, debes elegir siempre el modelo más simple matemáticamente.",
            "Debes eliminar todas las variables categóricas siempre, sin excepción, para simplificar el código.",
            "Debes elegir el modelo que tenga la ecuación polinomial más compleja, ya que refleja mejor la profundidad del universo."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1129,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Si graficas un Histograma de la variable 'Salario', y la forma es como una pirámide perfecta centrada. ¿Qué tipo de distribución es?",
          "options": [
            "Distribución Bimodal o de dos picos.",
            "Distribución Normal o Gaussiana (simétrica).",
            "Distribución Uniforme (plana).",
            "Distribución Severamente Sesgada a la Izquierda."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1130,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "El código `df = pd.read_csv('datos.csv')` en Google Colab o Jupyter requiere que:",
          "options": [
            "El archivo `datos.csv` esté alojado exclusivamente en los servidores de la NASA para descarga HTTP.",
            "Scikit-Learn esté desactivado temporalmente para no causar conflictos de lectura binaria.",
            "El archivo `datos.csv` esté físicamente disponible en la ruta especificada (ej. subido a la memoria local del entorno virtual).",
            "El código esté escrito obligatoriamente en C++ transpilado a Python."
          ],
          "correct": 2,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1131,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "¿Cuál es la principal limitación estructural de la Regresión Lineal Simple?",
          "options": [
            "No permite graficar sus resultados usando Matplotlib.",
            "Solo admite UNA única variable predictora (X) para predecir Y, ignorando que en la vida real los fenómenos dependen de docenas de variables.",
            "Exige que el programador calcule manualmente la fórmula de derivadas antes de instanciar el modelo.",
            "Solo puede predecir números positivos, colapsando si Y es negativo."
          ],
          "correct": 1,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1132,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "¿Para qué sirve el método `alpha=0.5` en un `plt.scatter()` cuando graficamos miles de puntos de datos?",
          "options": [
            "Para volver los puntos semitransparentes, revelando las zonas de alta densidad (donde los puntos se superponen oscureciendo el área).",
            "Para reducir el tamaño del punto a la mitad de su radio original en píxeles.",
            "Para indicar el grado de confianza (p-value) matemático del 50%.",
            "Para indicarle a Scikit-Learn que ignore los datos atípicos más allá de 0.5 desviaciones estándar."
          ],
          "correct": 0,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1133,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Un modelo predice ingresos en función de los años de estudio. Un niño de 1 año tiene un ingreso estimado de -500 dólares según la recta. ¿Qué sucedió?",
          "options": [
            "Extrapolación ilógica: aplicar la recta de regresión fuera del rango lógico con el que fue entrenada produce absurdos matemáticos.",
            "Underfitting severo: un R² negativo obliga a la pendiente a volverse negativa.",
            "El modelo es brillante e indica la deuda en pañales y comida que genera el niño.",
            "Falla de librerías: se requiere reinstalar Numpy porque el motor aritmético sumó mal los vectores."
          ],
          "correct": 0,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1134,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "MSE (Mean Squared Error) y RMSE (Root Mean Squared Error) castigan fuertemente los errores grandes. Si quisieras una métrica que NO se altere tan violentamente por dos o tres predicciones desastrosas, usarías:",
          "options": [
            "MAE (Mean Absolute Error).",
            "R² Ordinario.",
            "Ninguna; todas las métricas en Machine Learning elevan al cuadrado los residuos.",
            "R² Ajustado."
          ],
          "correct": 0,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1135,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Si olvidaste llamar a `modelo.fit(X_train, y_train)` e intentas ejecutar `modelo.predict(X_test)`, el intérprete de Python:",
          "options": [
            "Entrenará el modelo silenciosamente sobre el set de pruebas para no interrumpir la ejecución del código.",
            "Borrará los archivos de tu disco duro para proteger la integridad estadística del sistema operativo.",
            "Adivinará los valores usando promedios globales extraídos secretamente de `y_test`.",
            "Lanzará un `NotFittedError`, recordándote que el modelo está 'vacío' y no ha aprendido ninguna pendiente ni intercepto aún."
          ],
          "correct": 3,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        },
        {
          "id": 1136,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "A diferencia de un modelo determinista de la física (ej. Gravedad = masa / distancia²), la regresión lineal en Machine Learning es un modelo estadístico, lo que implica que:",
          "options": [
            "Nunca será 100% exacto; incluye inherentemente un término de error o 'ruido' originado por variables que desconocemos o no medimos.",
            "Se limita a predecir datos categóricos (ej. Perro, Gato) y jamás datos continuos (ej. dinero, peso).",
            "Siempre acertará el 100% del tiempo si logras recopilar al menos 100,000 datos (Ley de los Grandes Números).",
            "No usa las matemáticas reales, sino simples aproximaciones empíricas descartadas por la ciencia."
          ],
          "correct": 0,
          "feedback": "Explicación aprendida de la teoría y los laboratorios."
        }
      ]
    },
    {
      "id": "semana_3",
      "titulo": "Semana 3 - Regresión Múltiple, Polinomios y Dummies",
      "categorias": [
        {
          "value": "all",
          "label": "Todas (Semana 3)"
        },
        {
          "value": "multiple",
          "label": "Regresión Múltiple y R² Ajustado"
        },
        {
          "value": "dummies",
          "label": "Variables Categóricas y Dummies"
        },
        {
          "value": "polinomial",
          "label": "Regresión Polinomial y Overfitting"
        },
        {
          "value": "comandos",
          "label": "Implementación en Scikit-Learn"
        },
        {
          "value": "bookmarked",
          "label": "Marcadas para Duda"
        }
      ],
      "preguntas": [
        {
          "category": "multiple",
          "categoryName": "Regresión Múltiple y R² Ajustado",
          "text": "En una regresión múltiple, ¿cómo se interpreta estrictamente el coeficiente β₁ asociado al kilometraje del auto?",
          "options": [
            "Indica la correlación directa entre el kilometraje y el precio, sin tomar en cuenta las otras variables.",
            "Indica el cambio promedio en el precio por cada kilómetro adicional, asumiendo que el año, el motor y las demás variables se mantienen constantes (ceteris paribus).",
            "Indica el porcentaje de varianza en el precio que es explicado exclusivamente por el kilometraje.",
            "Indica el precio base del auto cuando el kilometraje es exactamente igual a cero."
          ],
          "correct": 1,
          "feedback": "El poder de la regresión múltiple es el análisis 'ceteris paribus' (todo lo demás constante). Permite aislar el efecto puro de una sola variable.",
          "id": 1086
        },
        {
          "category": "multiple",
          "categoryName": "Regresión Múltiple y R² Ajustado",
          "text": "Tienes un modelo con 5 variables. Eliminas 2 de ellas y notas que el R² ordinario baja ligeramente, pero el R² Ajustado sube. ¿Qué conclusión técnica extraes de esto?",
          "options": [
            "Significa que el modelo pasó de estar bajoajustado (underfitting) a estar sobreajustado (overfitting).",
            "Las 2 variables eliminadas eran 'ruido' o redundantes. El R² Ajustado subió porque premia a los modelos más simples que no incluyen variables inútiles.",
            "El modelo empeoró; el R² ordinario es la única métrica válida, y cualquier caída significa que el modelo perdió capacidad predictiva.",
            "Ocurrió un error matemático, ya que es estadísticamente imposible que el R² ordinario baje mientras el R² Ajustado sube."
          ],
          "correct": 1,
          "feedback": "El R² ordinario NUNCA baja al añadir variables, aunque sean basura. El R² Ajustado resuelve esto penalizando la adición de variables que no aportan valor predictivo real.",
          "id": 1087
        },
        {
          "category": "multiple",
          "categoryName": "Regresión Múltiple y R² Ajustado",
          "text": "Al calcular el VIF (Factor de Inflación de la Varianza) para tus variables predictoras, notas que 'cilindrada_cc' tiene un VIF de 12. ¿Qué problema estadístico advierte este valor y cómo deberías actuar?",
          "options": [
            "Advierte Multicolinealidad severa (VIF > 10). La variable está altamente correlacionada con otra, lo que vuelve inestables a los coeficientes. Se debe considerar eliminarla.",
            "Advierte Overfitting severo. El modelo ha memorizado los datos de la cilindrada. Se debe cambiar a un modelo no lineal.",
            "Advierte Homocedasticidad. Significa que la varianza del error no es constante a lo largo de la cilindrada.",
            "Advierte un excelente poder predictivo. Un VIF alto significa que la variable es la que más explica el precio. Se debe mantener obligatoriamente."
          ],
          "correct": 0,
          "feedback": "La multicolinealidad ocurre cuando dos variables X miden prácticamente lo mismo (ej. cc del motor y caballos de fuerza). El VIF > 10 exige revisar y posiblemente eliminar la variable redundante.",
          "id": 1088
        },
        {
          "category": "dummies",
          "categoryName": "Variables Categóricas y Dummies",
          "text": "¿Cuál es la justificación matemática fundamental para convertir una variable categórica nominal (ej. 'combustible: diésel, gasolina, híbrido') en variables 'dummy' en lugar de codificarlas numéricamente como 0, 1 y 2?",
          "options": [
            "Las variables 'dummy' reducen el espacio de memoria requerido en disco, acelerando drásticamente el tiempo de entrenamiento del modelo.",
            "Codificarlas como 0, 1 y 2 impondría un orden jerárquico y distancias numéricas que no existen en la realidad (ej. inferiría que híbrido vale el doble que gasolina).",
            "Scikit-Learn es incapaz de procesar números enteros en sus modelos de regresión; solo acepta formatos binarios (0 y 1).",
            "Evita el riesgo de extrapolación, ya que el modelo nunca podrá predecir un combustible de categoría 3."
          ],
          "correct": 1,
          "feedback": "En variables nominales (sin orden jerárquico), codificarlas con enteros engaña al modelo matemático, haciéndole creer que hay una progresión lineal entre categorías.",
          "id": 1089
        },
        {
          "category": "dummies",
          "categoryName": "Variables Categóricas y Dummies",
          "text": "Conocemos el fenómeno de la 'Trampa de la Colinealidad Perfecta' (Dummy Trap). Si la variable 'provincia' tiene 6 categorías, ¿por qué los comandos como `drop_first=True` obligan a crear solo 5 columnas dummy?",
          "options": [
            "Porque si incluyes las 6, la suma de esas columnas para cualquier fila siempre será exactamente 1. Esto genera colinealidad perfecta (redundancia total) y la ecuación matemática no se puede resolver.",
            "Para forzar al modelo a aplicar regularización (Ridge/Lasso) automáticamente sobre la categoría que fue descartada.",
            "Para ahorrar memoria computacional, ya que en datasets masivos, agregar 1 columna extra por variable categórica consumiría toda la RAM disponible.",
            "Porque siempre habrá al menos una provincia en la base de datos que no tenga ninguna venta, por lo que su columna estaría llena de ceros."
          ],
          "correct": 0,
          "feedback": "La regla matemática es crear 'k - 1' dummies. La categoría descartada no se pierde, se convierte en la línea base (baseline) contra la cual se comparan las demás.",
          "id": 1090
        },
        {
          "category": "dummies",
          "categoryName": "Variables Categóricas y Dummies",
          "text": "Al evaluar tu regresión, ves que la categoría base omitida para transmisión es 'Manual'. El coeficiente de la variable dummy 'tipo_cambio_automatico' resultó en +2,500. ¿Qué significa esto?",
          "options": [
            "Significa que un auto automático recorre 2,500 kilómetros más que un auto manual antes de dañarse.",
            "Significa que el precio inicial de cualquier auto automático es estrictamente de 2,500 USD.",
            "Significa que, manteniendo todo lo demás constante, los autos automáticos cuestan en promedio 2,500 USD más que los autos manuales.",
            "Significa que cambiar la transmisión de un auto de manual a automático costará exactamente 2,500 USD en el taller."
          ],
          "correct": 2,
          "feedback": "Los coeficientes dummy siempre se leen como la 'diferencia' en el precio (Ŷ) respecto a la categoría de referencia (baseline), ceteris paribus.",
          "id": 1091
        },
        {
          "category": "dummies",
          "categoryName": "Variables Categóricas y Dummies",
          "text": "Tienes la variable categórica 'nivel educativo' con los valores: básica, secundaria, superior. ¿Deberías usar obligatoriamente One-Hot Encoding (dummies) para esta variable?",
          "options": [
            "Sí, porque One-Hot Encoding es el único método capaz de descubrir el orden oculto entre las categorías sin intervención humana.",
            "No necesariamente. Al ser una variable 'ordinal' (tiene un orden lógico claro), puede codificarse con enteros (ej. 1, 2, 3) si asumimos que la distancia entre niveles es similar.",
            "Sí, es absolutamente obligatorio. Si no se usa One-Hot Encoding, el modelo de regresión lineal mostrará un error de compilación.",
            "No, las variables categóricas relacionadas con educación deben eliminarse siempre, ya que causan multicolinealidad con el salario."
          ],
          "correct": 1,
          "feedback": "A diferencia de las variables nominales (ej. colores o marcas), las variables ordinales sí tienen jerarquía. Codificarlas como 1, 2, 3 mediante `OrdinalEncoder` es una práctica válida e interpretable.",
          "id": 1092
        },
        {
          "category": "polinomial",
          "categoryName": "Regresión Polinomial y Overfitting",
          "text": "Si los datos del mundo real muestran que el consumo de energía de un edificio aumenta drásticamente tanto con el frío extremo (calefacción) como con el calor extremo (aire acondicionado), formando una curva en U. ¿Qué ajuste necesita el modelo predictivo?",
          "options": [
            "Requiere una regresión múltiple estándar, agregando más variables lineales como la humedad o el viento, lo que automáticamente curvará la línea.",
            "Requiere eliminar los datos de frío extremo, ya que matemáticamente son considerados valores atípicos (outliers) que dañan el R².",
            "Requiere transformar la variable objetivo (Y) utilizando una escala logarítmica para aplanar la U en una línea recta perfecta.",
            "Requiere una regresión polinomial (ej. agregar la variable temperatura al cuadrado, X²) para que la línea matemática pueda curvarse y capturar la relación en forma de U."
          ],
          "correct": 3,
          "feedback": "La regresión lineal simple asume una línea recta interminable. Los fenómenos en 'U' o 'campana' requieren grados polinomiales (cuadrático o cúbico) para otorgarle flexibilidad a la curva.",
          "id": 1093
        },
        {
          "category": "polinomial",
          "categoryName": "Regresión Polinomial y Overfitting",
          "text": "Ajustas un polinomio de grado 2 y obtienes un RMSE de prueba de 1,500 USD. Luego subes la complejidad a un polinomio de grado 5; el RMSE de entrenamiento baja casi a cero, pero el RMSE de prueba se dispara a 8,000 USD. ¿A qué se debe esto?",
          "options": [
            "Underfitting (subajuste): El polinomio de grado 5 es demasiado simple para capturar la verdadera complejidad del mercado automotriz.",
            "Data Leakage (fuga de datos): Al usar grado 5, el modelo accidentalmente accedió a los datos del conjunto de prueba durante el entrenamiento.",
            "Overfitting (sobreajuste): El polinomio de grado 5 es tan complejo que memorizó perfectamente el ruido y fluctuaciones de los datos de entrenamiento, perdiendo la capacidad de generalizar a datos nuevos.",
            "Multicolinealidad: Los grados polinomiales superiores siempre causan que la variable objetivo (Y) se correlacione perfectamente consigo misma."
          ],
          "correct": 2,
          "feedback": "Aumentar el grado del polinomio indiscriminadamente hace que la curva comience a 'zigzaguear' locamente para tocar todos los puntos de entrenamiento, destruyendo su utilidad en la vida real.",
          "id": 1094
        },
        {
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Regla crítica para evitar 'Data Leakage': al usar herramientas como `OneHotEncoder` o `PolynomialFeatures`, ¿por qué DEBEMOS ajustarlas (usar el comando `.fit_transform()`) ÚNICAMENTE sobre el conjunto de entrenamiento (X_train)?",
          "options": [
            "Porque el conjunto de prueba (X_test) se corrompería irreversiblemente y perderíamos los datos originales para futuras consultas.",
            "Porque Scikit-Learn tiene un límite de memoria; aplicar `.fit_transform()` al dataset completo siempre provocará un desbordamiento de RAM.",
            "Porque si ajustamos el transformador usando todo el dataset (incluyendo X_test), el modelo 'aprenderá' información de los datos de prueba antes de tiempo, volviendo la evaluación final completamente engañosa y optimista.",
            "Porque los datos del conjunto de prueba (X_test) no contienen la variable objetivo (y), por lo que el transformador fallará al buscarla."
          ],
          "correct": 2,
          "feedback": "El conjunto de prueba (Test set) debe ser un examen sorpresa total. Si el transformador 've' las categorías o los rangos del test set durante el procesamiento previo, estás haciendo trampa (Data Leakage).",
          "id": 1095
        },
        {
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Tanto `pd.get_dummies()` de Pandas como `OneHotEncoder` de Scikit-Learn sirven para crear columnas dummy. En un entorno de producción (software en la vida real), ¿por qué se prefiere usar fuertemente `OneHotEncoder` integrado en un `ColumnTransformer`?",
          "options": [
            "Porque memoriza estrictamente las categorías vistas en el entrenamiento. Si en producción llega un dato con una categoría desconocida, el parámetro `handle_unknown='ignore'` evita que el sistema colapse.",
            "Porque `OneHotEncoder` puede predecir automáticamente el precio (Y) sin necesidad de instanciar el modelo `LinearRegression`.",
            "Porque Pandas es incapaz de aplicar `drop_first=True` para evitar la trampa dummy, obligando al usuario a borrar columnas manualmente.",
            "Porque `OneHotEncoder` se ejecuta en la GPU (Tarjeta Gráfica) usando redes neuronales, lo que es mil veces más rápido que Pandas."
          ],
          "correct": 0,
          "feedback": "`pd.get_dummies()` es genial para explorar datos rápido, pero peligroso en producción: si el test set no tiene una categoría rara que sí estaba en train, las matrices no cuadrarán y el código fallará.",
          "id": 1096
        },
        {
          "id": 1137,
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "Regla Fundamental en Machine Learning (Data Leakage): ¿Qué ocurre estadísticamente si aplicas `.fit_transform()` de tu preprocesador usando el conjunto X_test?",
          "options": [
            "Nada malo; es obligatorio aplicar `.fit_transform()` tanto en el Train como en el Test para mantener la simetría matemática.",
            "Optimizas la memoria RAM de Scikit-Learn al realizar el ajuste de forma simultánea en una sola línea de código.",
            "Cometes 'Fuga de Datos' o Data Leakage: el preprocesador espía las características del examen sorpresa (test), contaminando la evaluación y reportando métricas falsamente altas e irreales.",
            "Mejoras la precisión del modelo porque le permites aprender el vocabulario completo de la base de datos antes de entrenar."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1138,
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "¿Cuál es la secuencia estricta y correcta para preprocesar datos usando un `ColumnTransformer` en Scikit-Learn?",
          "options": [
            "`.transform()` sobre el X_train; y `.fit_transform()` sobre el X_test.",
            "`.fit_transform()` sobre el dataset completo antes de aplicar el `train_test_split`.",
            "`.fit()` a la variable dependiente `y`, y `.transform()` a la variable independiente `X`.",
            "`.fit_transform()` sobre el X_train (aprende de los datos y los transforma); y exclusivamente `.transform()` sobre el X_test (solo aplica lo que ya aprendió)."
          ],
          "correct": 3,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1139,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Al usar `ColumnTransformer`, configuras el parámetro `remainder='passthrough'`. ¿Cuál es su propósito vital en el flujo de datos?",
          "options": [
            "Sirve para borrar silenciosamente cualquier columna que contenga valores nulos ('NaN') en el dataset.",
            "Indica que si el modelo falla, debe dejar pasar el error y continuar ejecutando la siguiente línea de código.",
            "Indica que las columnas que NO fueron transformadas explícitamente (ej. las numéricas) pasen intactas al nuevo dataset, evitando que se borren o desaparezcan.",
            "Instruye al modelo a aplicar una regresión polinomial 'a través' de las variables restantes automáticamente."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1140,
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "En el dataset de salarios TI, la variable 'nivel_ingles' (1=Básico, 5=Nativo) se dejó intacta, mientras que 'rol' (Backend, Frontend) se pasó por One-Hot Encoding. ¿Por qué esta decisión técnica es crucial?",
          "options": [
            "Porque One-Hot Encoding está diseñado exclusivamente para variables de texto largo, y 'nivel_ingles' solo tiene números enteros cortos.",
            "Porque el nivel de inglés es Ordinal (tiene una jerarquía matemática lógica donde 5 es mejor que 1). En cambio, el 'rol' es Nominal (no hay orden real donde Backend sea matemáticamente mayor a QA).",
            "Porque el gerente pidió ahorrar columnas, así que se decidió procesar solo la mitad de las variables del dataset.",
            "Porque las librerías de Python no soportan aplicar One-Hot Encoding a columnas que tienen la letra 'i' en su nombre."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1141,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Al configurar `OneHotEncoder`, es mandatorio usar el parámetro `drop='first'`. ¿Qué problema estadístico previene esto?",
          "options": [
            "Previene el Underfitting, forzando al modelo a aprender patrones más oscuros en los datos.",
            "Borra automáticamente la primera columna del DataFrame original por ser típicamente el 'ID' irrelevante del usuario.",
            "Previene la Trampa de las Variables Ficticias (Multicolinealidad perfecta), evitando información redundante donde una categoría puede adivinarse sumando las otras.",
            "Evita que la primera fila del dataset contamine el modelo si contiene valores extremos (outliers)."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1142,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "¿Para qué se usa comúnmente el parámetro `handle_unknown='ignore'` dentro del OneHotEncoder en producción?",
          "options": [
            "Para que si el modelo encuentra en el futuro una nueva categoría que nunca vio en el entrenamiento (ej. un rol 'Astronauta TI'), no rompa el código y le asigne ceros a todo.",
            "Para que el algoritmo ignore por completo los errores de sintaxis en el código de Python.",
            "Para borrar automáticamente cualquier fila que tenga un valor vacío (NaN) en la base de datos de producción.",
            "Para decirle al modelo que ignore la existencia del conjunto de prueba (Test set) y entrene sin él."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1143,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Entrenaste una Regresión Lineal Múltiple para salarios TI y obtuviste la ecuación ŷ = 500 + 300(experiencia) - 200(modalidad_Presencial). ¿Qué puedes deducir sobre la modalidad de trabajo?",
          "options": [
            "Que la modalidad presencial es la más demandada del mercado y por ende siempre se pagará menos.",
            "Que la modalidad presencial genera un salario negativo, debiéndole dinero a la empresa.",
            "Que trabajar de manera 'Presencial', manteniendo todas las demás variables constantes (experiencia, rol), reduce el salario esperado en 200 dólares en promedio.",
            "Que el modelo está matemáticamente errado; la regresión múltiple no permite coeficientes negativos bajo ninguna circunstancia."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1144,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Luego de usar `ColumnTransformer` con OHE, tu matriz X pasa de tener 4 columnas a 15 columnas de números sin nombre. ¿Qué comando usas para recuperar los nombres reales (ej. 'rol_Backend') y poder graficar los coeficientes?",
          "options": [
            "`preprocesador.get_feature_names_out()`",
            "`preprocesador.columns_names_recover()`",
            "`preprocesador.describe()`",
            "`df.columns()`"
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1145,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Si en un modelo de regresión múltiple eliminas dos variables predictoras irrelevantes y el R² ajustado SUBE. ¿Qué te está diciendo el comportamiento de la métrica?",
          "options": [
            "Significa que las variables eliminadas eran las más importantes del modelo y el sistema está intentando compensarlo.",
            "Te indica que cometiste un grave error de programación y perdiste poder predictivo valioso.",
            "Demuestra matemáticamente que la regresión múltiple siempre funciona mejor con menos variables, sin importar cuáles sean.",
            "Te confirma que esas variables estaban aportando puro ruido al modelo; el R² ajustado premia la simplicidad si eliminas datos inútiles."
          ],
          "correct": 3,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1146,
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "Deseas crear un modelo capaz de capturar relaciones curvas en los años de experiencia usando `PolynomialFeatures(degree=2)`. ¿Por qué aplicas esto SOLO a las variables numéricas y NO a las variables dummy (categóricas)?",
          "options": [
            "No importa, siempre se debe aplicar polinomial a todo el dataset completo sin discriminar para maximizar el R².",
            "Porque elevar al cuadrado o interactuar variables dummy (ceros y unos) generaría redundancia absoluta y columnas repetidas inútiles, estallando la matriz de datos sin aportar valor predictivo.",
            "Porque las variables dummy al elevarse al cuadrado producen automáticamente números negativos infinitos.",
            "Porque la librería Scikit-Learn prohíbe terminantemente por defecto cruzar texto con números en funciones polinómicas."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1147,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Tras procesar las numéricas con Polinomial (grado 2) y las categóricas con OHE, obtienes dos matrices separadas (`X_train_poly` y `dummies_train`). ¿Cómo las unes horizontalmente para alimentar tu `LinearRegression`?",
          "options": [
            "Usando `np.hstack((X_train_poly, dummies_train))` para concatenarlas horizontalmente como columnas de una sola gran tabla.",
            "No hace falta unirlas, la función `LinearRegression` permite ingresar hasta 5 matrices distintas en sus parámetros.",
            "Sumándolas matemáticamente con el signo de suma `+` en Python.",
            "Usando `np.vstack((X_train_poly, dummies_train))` para apilarlas verticalmente, agregando nuevas filas al dataset."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1148,
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "Tu Modelo Polinomial (Grado 3) logra un R² brutal de 0.99 en entrenamiento, pero en el conjunto de prueba (Test) su R² se desploma a -1.50. ¿Cómo interpretas y solucionas este evento?",
          "options": [
            "Interpretación: El modelo es excelente, pero el conjunto de pruebas es defectuoso. Solución: Borrar el conjunto de pruebas.",
            "Interpretación: Overfitting severo y catastrófico. El modelo aprendió el ruido exacto memorizando los datos. Solución: Bajar la complejidad (regresar a Grado 2 o 1).",
            "Interpretación: Underfitting grave. El modelo necesita aún más complejidad. Solución: Aumentar la regresión a Grado 15.",
            "Interpretación: Falta memoria RAM en Google Colab para procesar la curva. Solución: Usar la librería `pandas` en lugar de `numpy`."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1149,
          "category": "comparativa",
          "categoryName": "Comparativa y Selección de Modelos",
          "text": "Comparativa Final: Modelo Lineal (15 predictores, R² Ajustado = 0.81). Modelo Polinomial Grado 2 (45 predictores, R² Ajustado = 0.82). Basado en la 'Navaja de Ockham', ¿qué recomiendas para el sistema en producción?",
          "options": [
            "El Modelo Lineal. Ganar apenas un 1% de R² no justifica triplicar la complejidad, dificultar la mantenibilidad y elevar el riesgo de Overfitting en producción.",
            "El Modelo Polinomial. En la industria del software, un incremento del 1% es la ley absoluta y siempre debe sacrificarse toda la mantenibilidad del código para conseguirlo.",
            "Ninguno. Ambos modelos son basura estadística porque su R² no es 0.99 perfecto.",
            "Promediar ambos modelos sumando sus ecuaciones matemáticas línea por línea y construir un tercer modelo híbrido manual."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1150,
          "category": "comparativa",
          "categoryName": "Comparativa y Selección de Modelos",
          "text": "¿Por qué NUNCA utilizaríamos un 'Dataset Sintético Didáctico' (como el usado en la Tarea 2) para presentar un informe ejecutivo o entrenar una IA de contratación real?",
          "options": [
            "Porque los valores y patrones (aunque plausibles) son inventados por el profesor o una computadora; no reflejan la cruda y ruidosa realidad del mercado laboral real. Generaríamos un modelo inútil que discriminaría o pagaría mal en la vida real.",
            "Sí podemos usarlo sin problema; en Data Science los datos falsos valen lo mismo que los datos reales si están en formato CSV.",
            "Porque Scikit-Learn detecta mediante algoritmos internos si los números son reales o falsos, y se niega a compilar la regresión lineal.",
            "Porque los datasets sintéticos siempre tienen distribución uniforme, mientras que la vida real siempre tiene distribución bimodal obligatoriamente."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1151,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 1: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes."
          ],
          "correct": 3,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1152,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 2: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1153,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 3: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes."
          ],
          "correct": 3,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1154,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 4: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1155,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 5: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1156,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 6: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1157,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 7: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1158,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 8: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1159,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 9: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1160,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 10: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1161,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 11: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1162,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 12: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1163,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 13: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1164,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 14: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1165,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 15: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1166,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 16: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 0,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1167,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 17: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 1,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1168,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 18: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1169,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 19: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1170,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 20: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente."
          ],
          "correct": 2,
          "feedback": "Razonamiento clave de la Semana 3."
        },
        {
          "id": 1171,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Escenario de práctica de razonamiento 21: Supongamos que añadimos la variable 'Edad' (altamente correlacionada con 'Años de Experiencia') a nuestro modelo múltiple. ¿Qué fenómeno estadístico peligroso introducimos al sistema?",
          "options": [
            "Underfitting automático. El modelo rechazará trabajar con más de 10 columnas numéricas simultáneamente.",
            "Heterocedasticidad. Los errores del modelo se volverán más grandes para las personas más jóvenes.",
            "Ninguno, cuantas más variables correlacionadas le pasemos al modelo, el R² aumentará más y más, lo cual siempre es excelente.",
            "Multicolinealidad. El modelo se confundirá al intentar separar el impacto de la edad y el impacto de la experiencia sobre el salario, volviendo inestables e interpretativamente inútiles a ambos coeficientes."
          ],
          "correct": 3,
          "feedback": "Razonamiento clave de la Semana 3."
        }
      ]
    },
    {
      "id": "paul",
      "titulo": "Preguntas Paúl",
      "categorias": [
        {
          "value": "all",
          "label": "Todas (Paúl)"
        },
        {
          "value": "teoria",
          "label": "Teoría Básica"
        },
        {
          "value": "bookmarked",
          "label": "Marcadas para Duda"
        }
      ],
      "preguntas": [
        {
          "category": "teoria",
          "categoryName": "Teoría Básica",
          "text": "¿Cuál es la definición Fundacional de Inteligencia Artificial propuesta por McCarthy (1956)?",
          "options": [
            "Ciencia e ingeniería de crear máquinas inteligentes.",
            "Estudio de agentes que perciben y actúan racionalmente.",
            "Sistema que infiere de datos cómo generar predicciones o decisiones.",
            "Aprende patrones de datos para decidir o generar contenido."
          ],
          "correct": 0,
          "feedback": "McCarthy acuñó el término en la conferencia de Dartmouth en 1956 definiéndola como la ciencia e ingeniería de crear máquinas inteligentes.",
          "id": 1099
        },
        {
          "category": "teoria",
          "categoryName": "Teoría Básica",
          "text": "¿Cuál es la definición Moderna de Inteligencia Artificial según Russell & Norvig (2020)?",
          "options": [
            "Estudio de agentes que perciben y actúan racionalmente.",
            "Ciencia e ingeniería de crear máquinas inteligentes.",
            "Sistema que infiere de datos cómo generar predicciones o decisiones.",
            "Aprende patrones de datos para decidir o generar contenido."
          ],
          "correct": 0,
          "feedback": "Russell y Norvig le dan un enfoque de agentes racionales: percibir el entorno y actuar para maximizar el éxito.",
          "id": 1100
        },
        {
          "category": "teoria",
          "categoryName": "Teoría Básica",
          "text": "¿Cuál es la definición Regulatoria de IA según el Reglamento de la Unión Europea (2024/1689)?",
          "options": [
            "Sistema que infiere de datos cómo generar predicciones o decisiones.",
            "Estudio de agentes que perciben y actúan racionalmente.",
            "Ciencia e ingeniería de crear máquinas inteligentes.",
            "Aprende patrones de datos para decidir o generar contenido."
          ],
          "correct": 0,
          "feedback": "La UE se enfoca en el aspecto legal: sistemas basados en datos que infieren predicciones, decisiones o contenido que influyen en el entorno.",
          "id": 1101
        },
        {
          "category": "teoria",
          "categoryName": "Teoría Básica",
          "text": "¿Cuál es la definición Técnica de IA que utilizaremos en este curso?",
          "options": [
            "Aprende patrones de datos para decidir o generar contenido.",
            "Sistema que infiere de datos cómo generar predicciones o decisiones.",
            "Estudio de agentes que perciben y actúan racionalmente.",
            "Ciencia e ingeniería de crear máquinas inteligentes."
          ],
          "correct": 0,
          "feedback": "En la práctica técnica de este curso, la IA trata sobre aprender patrones a partir de datos para tomar decisiones (ML predictivo) o generar cosas nuevas (GenAI).",
          "id": 1102
        },
        {
          "category": "teoria",
          "categoryName": "Teoría Básica",
          "text": "¿Qué es un scatter plot (diagrama de dispersión) y para qué sirve principalmente en Machine Learning?",
          "options": [
            "Es un gráfico circular que muestra la proporción porcentual que representa cada categoría respecto al total de datos recolectados.",
            "Es un gráfico que dibuja puntos en un plano usando valores de dos variables. Sirve para detectar visualmente si existe una relación (tendencia) entre ambas antes de modelar, y para identificar valores atípicos (outliers).",
            "Es un gráfico de barras múltiples que sirve para comparar el promedio matemático de diferentes categorías dentro de un dataset.",
            "Es un gráfico de líneas continuas que se utiliza exclusivamente para analizar el comportamiento de una sola variable a lo largo del tiempo."
          ],
          "correct": 1,
          "feedback": "El scatter plot es el paso 'Cero' antes de aplicar regresión lineal. Si los puntos forman una nube redonda sin forma, o una curva pronunciada, sabrás que la regresión lineal simple fallará.",
          "id": 1097
        },
        {
          "category": "teoria",
          "categoryName": "Teoría Básica",
          "text": "En la fórmula estadística del R² Ajustado, ¿qué significan exactamente las variables 'n' y 'p'?",
          "options": [
            "n = número máximo de iteraciones permitidas para el algoritmo; p = probabilidad de cometer un error en la predicción.",
            "n = número de grados de libertad del modelo; p = porcentaje total de varianza que el modelo logró explicar.",
            "n = número de observaciones (filas) en el test set; p = número de variables predictoras (columnas) del modelo.",
            "n = número de variables predictoras del modelo; p = número de observaciones en el test set."
          ],
          "correct": 2,
          "feedback": "El R² Ajustado usa 'p' (cantidad de variables) para castigar al modelo si le metes demasiadas columnas inútiles, restándole puntos por complejidad innecesaria.",
          "id": 1098
        }
      ]
    }
  ]
};