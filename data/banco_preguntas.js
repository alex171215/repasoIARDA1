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
            "Diagnóstico médico a partir de imágenes de rayos X con redes neuronales convolucionales.",
            "Recomendación de películas personalizada en plataformas de streaming usando ML colaborativo.",
            "Análisis de crédito bancario que combina datos financieros históricos e historial del cliente.",
            "Chatbots de atención al cliente capaces de responder preguntas frecuentes 24 horas al día."
          ],
          "correct": 0,
          "feedback": "La clave de la pregunta es identificar cuál involucra datos reales para aprender, no solo reglas manuales. Diagnóstico con imágenes, recomendaciones, chatbots y análisis de crédito son todos ejemplos de IA en producción."
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
            "Un hiperparámetro que controla la tasa de aprendizaje del algoritmo de gradiente descendente.",
            "Un vector numérico denso que codifica el significado semántico de palabras en un espacio continuo.",
            "Una técnica de regularización L2 que evita el sobreajuste en redes neuronales recurrentes.",
            "Una métrica de evaluación que mide la similitud entre frases en modelos de traducción automática."
          ],
          "correct": 1,
          "feedback": "Un embedding convierte palabras en vectores numéricos densos donde palabras similares están cerca en el espacio vectorial. Por ejemplo, 'rey' y 'reina' tendrán vectores cercanos. Esto permite a los modelos de NLP operar matemáticamente sobre el lenguaje."
        },
        {
          "id": 1021,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes afirmaciones sobre la IA Fuerte es correcta según el material?",
          "options": [
            "Es la misma definición que AGI; ambos términos son intercambiables en la literatura científica moderna.",
            "Ya fue alcanzada por AlphaGo de DeepMind al superar a campeones mundiales en el juego Go.",
            "Ya existe en GPT-4 y Claude; estos modelos comprenden el contexto igual que cualquier ser humano.",
            "Realizaría cualquier tarea intelectual humana con comprensión real, no simulación; aún es hipotética."
          ],
          "correct": 3,
          "feedback": "IA Fuerte implica comprensión genuina y capacidad universal. Los sistemas actuales como GPT-4 son impresionantes pero siguen siendo IA Estrecha (narrow AI): excelentes en tareas específicas pero sin comprensión real del mundo."
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
            "Isolation Forest, que detecta anomalías sin necesidad de etiquetas supervisadas en el dataset.",
            "Regresión Lineal y Regresión Logística, que aprenden de datos etiquetados con una variable objetivo.",
            "DBSCAN, que agrupa datos en clusters basándose en densidad sin requerir número de grupos previo.",
            "K-means, que divide el dataset en K grupos buscando minimizar la varianza intra-cluster."
          ],
          "correct": 1,
          "feedback": "En aprendizaje supervisado, el modelo aprende de pares (X, y): Regresión Lineal predice valores continuos y Logística predice clases. Isolation Forest, DBSCAN y K-means son no supervisados; no necesitan la variable objetivo y."
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
            "La proporción de varianza de Y explicada por el modelo; R²=1 es perfecto, R²=0 equivale a predecir la media.",
            "La cuenta de variables predictoras del modelo; más variables siempre producen un R² más cercano a 1.",
            "El error promedio del modelo en las mismas unidades que Y; idéntico al MAE pero escalado al rango.",
            "El tamaño total del dataset de entrenamiento relativo al número de parámetros aprendidos por el modelo."
          ],
          "correct": 0,
          "feedback": "R² = 1 - (SS_res / SS_tot). SS_res es la varianza no explicada (residuos), SS_tot es la varianza total. Un R²=0.80 significa que el modelo explica el 80% de por qué Y varía; el 20% restante es ruido o variables no incluidas."
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
            "La relación entre X e Y debe ser estrictamente no lineal para que MCO sea el método adecuado.",
            "Los residuos del modelo deben seguir una distribución normal para validar las pruebas de hipótesis.",
            "La varianza del error debe ser constante para todos los valores de X, sin aumentar ni disminuir.",
            "Las observaciones del dataset deben ser dependientes entre sí con correlación serial positiva."
          ],
          "correct": 2,
          "feedback": "Homocedasticidad (homo=igual, cedasticidad=dispersión): los residuos deben tener la misma varianza para todos los valores de X. Si la varianza crece con X (ej. residuos en forma de embudo), hay heterocedasticidad y las pruebas t y los intervalos de confianza son inválidos."
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
            "Deep Learning requiere pocos datos y ofrece alta transparencia gracias a sus capas de activación.",
            "La IA Simbólica es la más transparente pero solo funciona bien en dominios bien definidos y estrechos.",
            "ML Clásico no requiere ningún dato de entrenamiento; aprende directamente de reglas del dominio.",
            "La IA Simbólica supera al Deep Learning en tareas de imagen, texto y audio por su base lógica."
          ],
          "correct": 1,
          "feedback": "IA Simbólica: transparente (puedes leer las reglas), pero frágil fuera de su dominio (no escala a casos no previstos). ML Clásico: necesita datos y features manuales. Deep Learning: muy potente con datos masivos pero opaco (caja negra)."
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
            "Un algoritmo de aprendizaje por refuerzo que maximiza recompensas con exploración y explotación.",
            "Una técnica exclusiva de aprendizaje no supervisado para agrupación jerárquica de datos complejos.",
            "Un subconjunto del ML con redes neuronales de muchas capas que descubren representaciones automáticamente.",
            "Un sinónimo moderno de la IA Simbólica clásica que usa lógica de predicados de primer orden."
          ],
          "correct": 2,
          "feedback": "Deep Learning = redes neuronales profundas (muchas capas ocultas). A diferencia del ML clásico, no necesitas ingeniería manual de features: las capas intermedias aprenden representaciones jerárquicas (bordes → formas → objetos) de forma automática desde los datos crudos."
        },
        {
          "id": 1041,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "Si el coeficiente β₁ de un modelo de regresión lineal simple es negativo, esto indica que:",
          "options": [
            "A mayor X, menor Y en promedio; la pendiente negativa indica una relación inversa entre las variables.",
            "La variable X no tiene efecto detectable sobre Y; el modelo debería excluirla para mejorar el R².",
            "El modelo no es estadísticamente válido; los coeficientes negativos indican un error de ajuste grave.",
            "A mayor X, mayor Y en promedio; el signo negativo es solo una convención de escala del dataset."
          ],
          "correct": 0,
          "feedback": "β₁ es la pendiente. Si β₁ < 0: por cada unidad que aumenta X, Y baja en |β₁| unidades en promedio. Ejemplo: β₁=-500 en precio/antigüedad significa que cada año adicional de antigüedad reduce el precio esperado 500 USD."
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
            "MSE está en unidades² (igual que Y²) y MAE en las unidades originales de Y; son comparables en escala.",
            "El MAE produce siempre un valor numéricamente mayor que el MSE porque promedia errores absolutos.",
            "MSE penaliza errores grandes cuadráticamente, haciéndolo más sensible a outliers que el MAE lineal.",
            "El MAE sirve para variables categóricas nominales y el MSE solo para variables numéricas continuas."
          ],
          "correct": 2,
          "feedback": "MAE = promedio de |error|. MSE = promedio de error². Si tienes un error de 100 USD: MAE lo cuenta como 100, MSE como 10,000. Por eso dos outliers de 1,000 USD cada uno impactan mucho más al MSE (1,000,000) que al MAE (1,000)."
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
            "Un sinónimo técnico de Machine Learning avanzado con más de 100 capas de neuronas artificiales.",
            "El nivel actual de sistemas como GPT-4 y Claude, que superan al humano en razonamiento general.",
            "Un sistema hipotético que superaría ampliamente al humano en toda tarea cognitiva imaginable.",
            "Una tecnología en producción en varias empresas de defensa para simulaciones estratégicas complejas."
          ],
          "correct": 2,
          "feedback": "Superinteligencia es un concepto teórico: una IA que superaría al mejor humano en TODAS las dimensiones cognitivas simultáneamente. No existe hoy. Los sistemas actuales son superhuman solo en tareas muy específicas (ajedrez, Go), no en inteligencia general."
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
            "Clasificar correos electrónicos como spam o no spam usando un filtro bayesiano supervisado.",
            "Traducir automáticamente textos de inglés a español usando un modelo de lenguaje seq2seq.",
            "Encontrar observaciones atípicas en datos de transacciones que se desvían significativamente del patrón.",
            "Maximizar una recompensa acumulada mediante ensayo y error en un entorno simulado de navegación."
          ],
          "correct": 2,
          "feedback": "Detección de anomalías = encontrar puntos de datos raros que no siguen el patrón general. Ejemplos: transacciones bancarias fraudulentas, equipos industriales a punto de fallar, intrusos en redes de computadoras. Se usa en seguridad y control de calidad."
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
            "El total de observaciones usadas en el conjunto de entrenamiento para ajustar la recta de regresión.",
            "La coordenada en el eje Y donde la recta de regresión cruza el eje vertical (intercepto β₀).",
            "La distancia vertical entre el valor real y_i y la predicción ŷ_i de la recta en ese punto.",
            "La pendiente β₁ que determina cuánto cambia Y por cada unidad de incremento en la variable X."
          ],
          "correct": 2,
          "feedback": "Residuo = y_i - ŷ_i. Si el punto real está ENCIMA de la recta, el residuo es positivo. Si está DEBAJO, es negativo. MCO minimiza Σ(residuo)²: así la recta queda 'en el centro' de todos los puntos, con la menor suma de residuos al cuadrado."
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
            "El promedio de los errores absolutos |y_i - ŷ_i|, sin importar si son grandes o pequeños por igual.",
            "La proporción de varianza total de Y que el modelo logra explicar con sus variables predictoras.",
            "La probabilidad de que el modelo cometa un error mayor al umbral definido en la configuración.",
            "La raíz cuadrada del promedio de los errores cuadráticos, expresada en las unidades originales."
          ],
          "correct": 0,
          "feedback": "MAE = (1/n) × Σ|y_i - ŷ_i|. A diferencia del RMSE, trata todos los errores de igual forma sin amplificar los más grandes. Un MAE de 5,000 USD en predicción de casas significa que, en promedio, el modelo se equivoca 5,000 USD."
        },
        {
          "id": 1056,
          "category": "cuestionario1",
          "categoryName": "Cuestionario 1 (Profesor)",
          "text": "¿Cuál de las siguientes afirmaciones sobre la relación entre RMSE y MAE es correcta?",
          "options": [
            "No existe relación matemática entre ambas; se calculan con fórmulas completamente independientes.",
            "RMSE ≥ MAE siempre; la brecha crece cuando hay outliers que el cuadrado amplifica exponencialmente.",
            "RMSE y MAE son idénticos matemáticamente cuando todos los residuos del modelo son iguales entre sí.",
            "MAE ≥ RMSE siempre; el valor absoluto de los errores supera al cuadrado en distribuciones normales."
          ],
          "correct": 1,
          "feedback": "Por la desigualdad de Cauchy-Schwarz, RMSE ≥ MAE siempre. Cuando todos los errores son iguales, RMSE = MAE. Cuando hay outliers grandes, el cuadrado los amplifica y RMSE se dispara muy por encima del MAE."
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
            "Que la AGI es matemáticamente inalcanzable y los sistemas de IA siempre necesitarán supervisión humana.",
            "Que solo los modelos de aprendizaje por refuerzo con recompensa negativa pueden resolver tareas abiertas.",
            "Que las redes neuronales profundas son imposibles de explicar y siempre operan como caja negra.",
            "Que los sistemas basados en reglas manuales son frágiles; no escalan a dominios abiertos e impredecibles."
          ],
          "correct": 3,
          "feedback": "La IA Simbólica de los años 80 falló porque nadie puede escribir manualmente TODAS las reglas del mundo real. En dominios abiertos (lenguaje natural, imagen real), siempre aparecen casos no previstos. Esta lección motivó el auge del ML: en vez de escribir reglas, dejar que la máquina las aprenda de datos."
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
            "Porque garantiza una precisión del 100% al no necesitar limpieza previa ni validación humana del etiquetado.",
            "Porque es el único enfoque capaz de procesar imágenes en crudo usando reglas IF-THEN estructuradas.",
            "Porque entrena dos redes que compiten entre sí generando datos sintéticos de alta calidad automáticamente.",
            "Porque aprovecha enormes cantidades de datos no etiquetados de internet junto con una fracción etiquetada."
          ],
          "correct": 3,
          "feedback": "Semi-supervisado = mezcla de datos etiquetados (caros, pocos) y no etiquetados (baratos, abundantes). GPT-4 preentrenó con billones de tokens de internet sin etiquetas y luego se afinó con miles de conversaciones etiquetadas por humanos. Esto balancea costo y calidad de entrenamiento."
        },
        {
          "id": 1069,
          "category": "ml_teoria",
          "categoryName": "Tipos de Machine Learning",
          "text": "Dentro del mapa de disciplinas de la IA, ¿qué son la Visión por Computadora y el Procesamiento de Lenguaje Natural (NLP)?",
          "options": [
            "Son subcampos de la IA Simbólica que operan mediante reglas lingüísticas programadas manualmente.",
            "Son algoritmos de Aprendizaje por Refuerzo usados exclusivamente en robótica y sistemas de navegación.",
            "Son subcampos de la IA que hoy logran resultados sobresalientes gracias al Deep Learning con datos masivos.",
            "Son sinónimos exactos del término 'Machine Learning Clásico' según la taxonomía de la Unión Europea."
          ],
          "correct": 2,
          "feedback": "Visión por Computadora (CV) y Procesamiento de Lenguaje Natural (NLP) son subcampos de la IA que explotaron con el Deep Learning. CV detecta objetos en imágenes; NLP entiende y genera texto. Ambos se nutren de grandes datasets y redes neuronales profundas."
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
            "Para evitar que los valores de fecha generen outliers estadísticos que sesgan la media del dataset.",
            "Para transformar las fechas en valores booleanos True/False según si son anteriores o posteriores a hoy.",
            "Porque los archivos CSV codifican todas las columnas como binario y pd.to_datetime() las decodifica.",
            "Porque Pandas importa las fechas como strings 'object'; to_datetime() las convierte a tipo datetime64."
          ],
          "correct": 3,
          "feedback": "Sin pd.to_datetime(), la columna de fecha es texto (dtype='object'). Con ella, Pandas la convierte a datetime64, permitiendo operaciones temporales: extraer año/mes/día, calcular diferencias entre fechas, ordenar cronológicamente y crear features como 'días transcurridos'."
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
            "Para separar visualmente las barras del histograma usando espaciado y colorearlas automáticamente.",
            "Para filtrar y eliminar de la gráfica todos los puntos de datos atípicos detectados como outliers.",
            "Para dibujar una línea vertical sobre el gráfico, útil para marcar el promedio u otro valor de referencia.",
            "Para generar etiquetas de texto rotadas en el eje X cuando los nombres de categorías son muy largos."
          ],
          "correct": 2,
          "feedback": "axes.axvline(x=valor, color='rojo', linestyle='--') dibuja una línea vertical en x=valor. Se usa para marcar referencias como la media, mediana, un umbral de decisión o el valor objetivo. Es una herramienta de análisis visual muy usada en dashboards de ML."
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
            "`pandas` trabaja con tablas (DataFrames) para explorar datos; `numpy` ejecuta cálculos vectoriales y funciones como np.sqrt() para métricas como RMSE.",
            "`numpy` carga archivos CSV y construye los DataFrames; `pandas` genera gráficas de barras y dispersión a partir de arrays numéricos.",
            "`pandas` es la librería de modelos predictivos de Scikit-Learn; `numpy` proporciona los hiperparámetros del algoritmo de regresión.",
            "`numpy` y `pandas` son alias del mismo módulo; ambas exponen las funciones `fit()` y `predict()` del modelo de regresión."
          ],
          "correct": 0,
          "feedback": "Pandas gestiona tablas completas (DataFrames): carga archivos, filtra filas y selecciona columnas. Numpy se encarga del cómputo numérico puro: np.sqrt(), np.mean(), operaciones vectoriales. Scikit-Learn usa ambas internamente, pero como programador tú llamas a pandas para preparar y a numpy para calcular."
        },
        {
          "id": 1104,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "En Pandas, ¿qué información crítica te proporciona el comando `df.describe()` antes de entrenar el modelo?",
          "options": [
            "Entrega estadísticas resumen: conteo, media, desviación estándar, mínimo, cuartiles y máximo de cada variable numérica.",
            "Muestra los nombres y tipos de columnas junto a la cantidad de valores nulos que bloquearán el entrenamiento.",
            "Genera un heatmap de correlaciones de Pearson entre todas las variables del DataFrame de forma automática.",
            "Calcula los coeficientes β₀ y β₁ que el modelo LinearRegression utilizará como punto de partida inicial."
          ],
          "correct": 0,
          "feedback": "df.describe() devuelve un resumen estadístico: cuenta de filas, media, desviación estándar, mínimo, cuartiles (25%, 50%, 75%) y máximo. Sirve para detectar rangos anómalos (ej. área_m2 negativa) antes de entrenar."
        },
        {
          "id": 1105,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Al revisar los datos con `df.info()`, notas que la variable predictora está como 'object' (texto) en lugar de 'float'. ¿Qué sucederá si intentas ejecutar `modelo.fit()`?",
          "options": [
            "Scikit-Learn lanzará un ValueError porque LinearRegression no puede procesar texto; necesitas convertir la columna a float primero.",
            "El modelo entrenará ignorando esa columna y ajustará los pesos usando el promedio de las restantes variables numéricas.",
            "Python convertirá el texto a int usando el índice ASCII de cada carácter para continuar el proceso de ajuste.",
            "Scikit-Learn aplicará internamente un LabelEncoder automático antes de iniciar el proceso de entrenamiento del modelo."
          ],
          "correct": 0,
          "feedback": "Scikit-Learn espera que X sea numérico. Si una columna es 'object', fit() lanzará ValueError: could not convert string to float. Debes convertirla primero con pd.to_numeric() o pd.get_dummies() según corresponda."
        },
        {
          "id": 1106,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "En la librería Matplotlib, ¿por qué utilizamos `axes.scatter(X, y)` para graficar los datos de entrenamiento y NO usamos `axes.plot(X, y)`?",
          "options": [
            "scatter() muestra cada observación como un punto suelto; plot() une los puntos con líneas, lo que crea zigzags caóticos sobre datos no ordenados.",
            "scatter() solo acepta variables de tipo entero; plot() acepta float, por eso se usa para los datos del modelo de regresión.",
            "plot() genera la recta de regresión automáticamente sin necesidad de entrenar el modelo con fit() primero.",
            "Ambos comandos producen el mismo resultado visual; la diferencia es solo estética en el grosor del trazo."
          ],
          "correct": 0,
          "feedback": "scatter() dibuja cada par (X, y) como un punto independiente, mostrando la nube real de datos. plot() conecta los puntos con líneas en el orden en que aparecen, lo que en datos desordenados produce un zigzag caótico. Para la recta de predicción sí usamos plot()."
        },
        {
          "id": 1107,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Deseas graficar la recta de predicciones del modelo sobre el scatter plot. ¿Qué combinación de comandos y datos usarías?",
          "options": [
            "`axes.plot(X_test, y_pred)` superpone la línea de predicción sobre los puntos reales del conjunto de prueba.",
            "`axes.scatter(X_train, y_test)` dibuja los puntos reales de entrenamiento colorados según su valor de predicción.",
            "`axes.plot(X_train, y_train)` con linewidth=0 convierte la línea en puntos que simulan una gráfica de dispersión.",
            "`axes.scatter(y_test, y_pred)` genera la recta diagonal perfecta del gráfico predichos vs reales del modelo."
          ],
          "correct": 0,
          "feedback": "axes.plot(X_test, y_pred) es correcto porque: (1) X_test provee los valores de área en el eje X, (2) y_pred son las predicciones del modelo, (3) plot() une esos puntos formando la recta. Usar X_train con y_pred daría una recta basada en datos de entrenamiento, no de prueba."
        },
        {
          "id": 1108,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Observas un scatter plot de Precio vs Área, pero los puntos parecen formar una curva exponencial en lugar de una recta. ¿Qué deberías concluir?",
          "options": [
            "La relación no es lineal; un modelo de regresión lineal simple producirá Underfitting y errores grandes en los extremos.",
            "Los datos muestran ruido gaussiano puro; el algoritmo MCO convergerá normalmente a la recta de mínimos cuadrados.",
            "La curva exponencial se lineariza automáticamente al elevar X al cuadrado durante el proceso de fit() de Scikit-Learn.",
            "Debes eliminar los puntos del extremo superior para que la nube resultante se asemeje a una distribución lineal."
          ],
          "correct": 0,
          "feedback": "Si la relación real es curva (exponencial, cuadrática), forzar una recta producirá Underfitting: la recta promediará los puntos pero fallará sistemáticamente en los extremos. La solución es usar Regresión Polinomial o transformar la variable (ej. log(área))."
        },
        {
          "id": 1109,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Al usar `train_test_split`, siempre defines el parámetro `random_state=42`. ¿Cuál es el propósito empresarial y técnico de este comando?",
          "options": [
            "Fija la semilla aleatoria para que la misma división Train/Test se reproduzca siempre, garantizando métricas comparables entre ejecuciones.",
            "Indica que el 42% de las filas se descartan antes de dividir; el resto forma el conjunto de entrenamiento completo.",
            "Limita el error máximo aceptable a 42 unidades; si el modelo supera ese umbral, lanza una excepción de Scikit-Learn.",
            "Activa 42 iteraciones internas del algoritmo de gradiente descendente para acelerar la convergencia del modelo."
          ],
          "correct": 0,
          "feedback": "random_state fija la semilla del generador de números pseudoaleatorios. Sin ella, cada ejecución produciría una división distinta y métricas distintas. Con random_state=42, cualquier persona que ejecute el mismo código obtendrá exactamente la misma partición."
        },
        {
          "id": 1110,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Si en lugar de dividir el dataset en Train y Test (80/20), decides entrenar con el 100% de los datos y evaluar sobre ese mismo 100%, ¿qué engaño estadístico estás sufriendo?",
          "options": [
            "Mides la memorización del modelo, no su generalización; el RMSE bajo solo indica que recuerda los datos que ya vio.",
            "El modelo reporta métricas más honestas porque usa toda la información disponible sin desperdiciar datos de prueba.",
            "Scikit-Learn rechaza calcular R² si los datos de entrenamiento y evaluación son el mismo objeto Python.",
            "El RMSE se dispara porque intentar predecir los mismos datos dos veces genera un conflicto de matrices interno."
          ],
          "correct": 0,
          "feedback": "Evaluar sobre el mismo 100% de datos que usaste para entrenar no mide la capacidad de generalización: mide cuánto el modelo memorizó. El RMSE parecerá bajo porque el modelo ya 'vio' esas respuestas. Esto oculta el Overfitting y hace que el modelo se vea mejor de lo que es."
        },
        {
          "id": 1111,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "¿Cuál es la proporción estándar recomendada para separar el dataset en entrenamiento (Train) y evaluación (Test) en la industria general?",
          "options": [
            "80% Train / 20% Test es el estándar; con datasets grandes se puede usar 90/10, con datasets pequeños 70/30.",
            "10% Train / 90% Test maximiza la evaluación de generalización y reduce el sobreajuste a casi cero.",
            "50% Train / 50% Test es el único método estadísticamente neutral reconocido por la comunidad científica.",
            "100% Train sin Test es obligatorio en producción para aprovechar al máximo cada dato disponible."
          ],
          "correct": 0,
          "feedback": "La regla del 80/20 (o 70/30 para datasets pequeños) es el estándar. Si tienes millones de filas, hasta un 90/10 es razonable. La idea es que el 20% de Test sea suficientemente grande para estimar bien el error de generalización."
        },
        {
          "id": 1112,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "En Scikit-Learn, el comando que genera las predicciones para calcular las métricas sobre datos nuevos es:",
          "options": [
            "`modelo.predict(X_test)` aplica ŷ = β₀ + β₁·X a cada fila nueva y devuelve el array de predicciones numéricas.",
            "`modelo.fit(X_test, y_test)` ajusta los coeficientes usando el conjunto de prueba como datos de entrenamiento final.",
            "`modelo.evaluate(y_pred)` calcula MAE, RMSE y R² internamente y los almacena en el atributo `.metrics_`.",
            "`modelo.score(y_test, X_train)` compara las predicciones del conjunto de prueba contra las del conjunto de entrenamiento."
          ],
          "correct": 0,
          "feedback": "modelo.predict(X_test) aplica la ecuación ŷ = β₀ + β₁·X a cada fila de X_test y devuelve el array de predicciones. Luego calculas MAE, RMSE y R² comparando esas predicciones con y_test."
        },
        {
          "id": 1113,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "¿Por qué la variable `X` debe ser una estructura 2D (ej. `df[['area_m2']]`) mientras que la variable `y` puede ser 1D (ej. `df['precio_usd']`)?",
          "options": [
            "Scikit-Learn espera X como matriz 2D (filas × columnas), aunque sea 1 columna; y es 1D porque siempre hay un único valor objetivo.",
            "Pandas requiere 2D para variables de tipo float64; las variables enteras pueden pasarse en 1D directamente.",
            "Matplotlib necesita que el eje X sea 2D para renderizar correctamente las etiquetas numéricas del gráfico.",
            "Tanto X como y deben ser tensores 3D en la API oficial de Scikit-Learn para soportar datos multidimensionales."
          ],
          "correct": 0,
          "feedback": "Scikit-Learn diseña su API para la regresión múltiple: X siempre es una matriz 2D (n_muestras × n_variables). Aunque hoy tengas solo 1 variable, usar dobles corchetes [['col']] mantiene ese formato. y es 1D porque siempre hay una sola variable objetivo."
        },
        {
          "id": 1114,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Una vez entrenado el modelo, ¿qué atributos de la variable `modelo` de Scikit-Learn contienen la pendiente y el intercepto matemáticos aprendidos?",
          "options": [
            "`modelo.coef_` guarda la pendiente (β₁) y `modelo.intercept_` guarda el intercepto (β₀) tras llamar a fit().",
            "`modelo.slope` y `modelo.bias` son los atributos estándar de la clase LinearRegression de Scikit-Learn.",
            "`modelo.beta1` y `modelo.beta0` son los atributos que sigue la convención matemática de la ecuación de la recta.",
            "`modelo.weights` y `modelo.anchor` son los nombres propios del framework de regresión de Scikit-Learn versión 1.x."
          ],
          "correct": 0,
          "feedback": "En Scikit-Learn, los atributos que el modelo APRENDE llevan guión bajo al final (convenio PEP). coef_ es un array con las pendientes y intercept_ es el valor β₀. Con LinearRegression de 1 variable: coef_[0] = β₁ e intercept_ = β₀."
        },
        {
          "id": 1115,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "Predices precio vs metros cuadrados. Tu modelo dice que el Intercepto (β₀) es -5,000 USD y la Pendiente (β₁) es +1,200 USD. ¿Qué significado lógico en el negocio tiene el Intercepto aquí?",
          "options": [
            "Es el valor matemático de ŷ cuando X=0 m², sin sentido físico real; actúa como ancla de la recta para el rango de datos.",
            "Indica que la constructora subsidiará 5,000 USD a compradores de departamentos en zonas de alto riesgo sísmico.",
            "Representa el costo fijo de terreno antes de construir; siempre debe ser positivo en modelos inmobiliarios reales.",
            "Significa que el modelo está errado y debe descartarse; un β₀ negativo viola las asunciones del MCO clásico."
          ],
          "correct": 0,
          "feedback": "El intercepto β₀ representa el valor de ŷ cuando X=0. En contextos físicos (0 m² es imposible), el intercepto no tiene interpretación de negocio directa: solo 'ancla' la recta para que cuadre bien en el rango real de datos (ej. 40-150 m²)."
        },
        {
          "id": 1116,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "Continuando con la pregunta anterior (β₁ = +1,200). ¿Qué le explicas al cliente que significa este coeficiente?",
          "options": [
            "Por cada m² adicional el precio sube en promedio 1,200 USD, manteniendo los demás factores constantes.",
            "El precio inicial de cualquier departamento es de 1,200 USD y baja a medida que sube el área construida.",
            "Solo los departamentos mayores a 1,200 m² tienen un precio definido; los más pequeños quedan fuera del modelo.",
            "El error promedio del sistema de estimación es de ±1,200 USD, equivalente al MAE del modelo de regresión."
          ],
          "correct": 0,
          "feedback": "β₁ es la pendiente: cuánto aumenta ŷ por cada unidad que aumenta X. Aquí: por cada m² adicional, el precio sube en promedio 1,200 USD. Esto se asume 'manteniendo todo lo demás constante' (ceteris paribus)."
        },
        {
          "id": 1117,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Interpolación vs Extrapolación: Entrenas tu modelo con departamentos de 40 m² a 150 m². Luego, el banco te pide predecir el precio de un inmenso terreno de 5,000 m². ¿Por qué confiar ciegamente en esta predicción lineal es un error gravísimo?",
          "options": [
            "Extrapolás fuera del rango de entrenamiento; la pendiente calibrada para 40-150 m² puede no aplicar a 5,000 m².",
            "La interpolación masiva sobrecarga la CPU de Colab y Scikit-Learn no puede manejar valores tan grandes.",
            "Los terrenos grandes requieren Regresión Logística Multinomial para estimar precio por categoría de zona.",
            "No hay error; la matemática de la recta es universal y las predicciones serán exactas a cualquier escala."
          ],
          "correct": 0,
          "feedback": "Extrapolación: usar el modelo fuera del rango en que fue entrenado. La recta fue calibrada para 40-150 m²; no hay evidencia de que su pendiente se mantenga igual para 5,000 m² (quizá el precio por m² baja en grandes terrenos). Interpolación es predecir dentro del rango conocido, lo cual es mucho más confiable."
        },
        {
          "id": 1118,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "En el contexto de estimar el salario de un desarrollador de software (en dólares), si obtienes un MAE de 400. ¿Qué significa exactamente ese número?",
          "options": [
            "En promedio, las predicciones se desvían ±400 USD del valor real; es la métrica más intuitiva para no técnicos.",
            "El modelo asigna automáticamente un salario base de 400 USD a todos los desarrolladores sin experiencia previa.",
            "El 400% de la varianza total del salario no puede ser capturada por ninguna variable del dataset actual.",
            "Los errores cuadráticos promedian 160,000 USD², y la raíz cuadrada de ese valor equivale al RMSE del modelo."
          ],
          "correct": 0,
          "feedback": "MAE = promedio de |y_real - y_pred|. Un MAE de 400 USD significa que, en promedio, las predicciones se desvían 400 dólares del valor real, sin importar si es por encima o por debajo. Es la métrica más fácil de explicar a un no técnico."
        },
        {
          "id": 1119,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "¿Por qué en los laboratorios calculamos el RMSE (Root Mean Squared Error) aplicando la raíz cuadrada al MSE (`np.sqrt(mean_squared_error)`)?",
          "options": [
            "Para convertir el MSE (en unidades²) a la unidad original, haciendo el error directamente interpretable.",
            "Para normalizar el error entre 0 y 1, convirtiéndolo en un porcentaje de error similar al R².",
            "Scikit-Learn devuelve MSE como string y np.sqrt() lo convierte al tipo float antes de imprimirlo en pantalla.",
            "Para compensar la magnificación de outliers que produce el cuadrado, reduciendo su impacto visual en el reporte."
          ],
          "correct": 0,
          "feedback": "MSE = promedio de (y - ŷ)². Sus unidades son dólares² (o metros², o lo que sea al cuadrado), lo que es difícil de interpretar. Al aplicar np.sqrt() obtienes RMSE en la misma unidad que y, por lo que puedes decir 'el modelo se equivoca en promedio X dólares'."
        },
        {
          "id": 1120,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "Si tu R² en el conjunto de entrenamiento (Train) es 0.95 pero tu R² en el conjunto de prueba (Test) es 0.10. ¿Cuál es el diagnóstico inequívoco de este modelo?",
          "options": [
            "Overfitting severo: el modelo memorizó el ruido del entrenamiento y falla con datos nuevos (Test).",
            "El modelo es perfecto; un R² de Test bajo indica que los datos de prueba son de calidad inferior.",
            "Underfitting severo: el modelo no logró aprender ni con los datos de entrenamiento que tenía disponibles.",
            "Es un resultado estadísticamente imposible; por definición R²_test siempre debe estar cerca de R²_train."
          ],
          "correct": 0,
          "feedback": "Cuando R²_train >> R²_test, el modelo memorizó los datos de entrenamiento (sobreajuste). En el test, ese 'conocimiento memorizado' no sirve porque son datos nuevos. Soluciones: regularización (Ridge/Lasso), menos variables, o más datos de entrenamiento."
        },
        {
          "id": 1121,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "¿Qué sucedería matemáticamente si Mínimos Cuadrados Ordinarios (MCO) solo intentara minimizar la suma de los errores normales (sin elevarlos al cuadrado ni aplicar valor absoluto)?",
          "options": [
            "Los errores positivos y negativos se cancelarían mutuamente, dando una suma de cero aunque el modelo sea pésimo.",
            "La recta de regresión se volvería vertical al intentar minimizar sumas que tienden al infinito negativo.",
            "El modelo ajustaría una recta perfecta que pasa por todos los puntos mediante interpolación de Lagrange.",
            "El R² ordinario se transformaría en R² ajustado de manera automática sin necesidad de conocer n ni p."
          ],
          "correct": 0,
          "feedback": "Si usamos Σ(y_i - ŷ_i) sin valor absoluto ni cuadrado, las predicciones por encima del real (+errores) y por debajo (-errores) se cancelan entre sí, dando una suma cercana a cero aunque el modelo sea terrible. Por eso MCO usa Σ(y_i - ŷ_i)² para que todos los errores sean positivos y contribuyan."
        },
        {
          "id": 1122,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Al revisar el gráfico predichos vs reales de un modelo inmobiliario, ves que para precios por debajo de USD 100,000 los puntos se alinean perfecto a la diagonal, pero para propiedades de USD 500,000 los puntos caen muy por debajo de la diagonal. ¿Qué significa?",
          "options": [
            "El modelo subestima las propiedades de lujo: sus predicciones quedan por debajo del valor real para precios altos.",
            "El modelo sobrestima las propiedades baratas: sus predicciones superan el valor real en el rango bajo.",
            "El R² es perfecto (1.0) para propiedades de alto valor, lo cual indica que el modelo funciona mejor ahí.",
            "La librería Matplotlib tiene un bug de renderizado que desplaza los puntos hacia abajo en gráficas de precios altos."
          ],
          "correct": 0,
          "feedback": "En el gráfico Predicho vs Real, los puntos deben estar sobre la diagonal y=x. Si para valores altos caen por debajo, ŷ < y_real → el modelo subestima. Esto puede deberse a que hay muy pocas propiedades de lujo en el dataset de entrenamiento."
        },
        {
          "id": 1123,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "¿Cuál es la premisa fundamental del algoritmo de Mínimos Cuadrados Ordinarios (MCO / OLS) que usa Scikit-Learn por debajo de la mesa?",
          "options": [
            "Minimiza la suma de residuos al cuadrado Σ(y_i - ŷ_i)², encontrando la única recta óptima de forma exacta.",
            "Maximiza el R² tocando el mayor número posible de puntos de datos simultáneamente con la recta ajustada.",
            "Calcula el promedio de Y y lo usa como recta horizontal, asegurando que ningún punto quede muy alejado.",
            "Divide el dataset en grupos pequeños y usa redes neuronales para encontrar la curva óptima entre ellos."
          ],
          "correct": 0,
          "feedback": "MCO (Ordinary Least Squares) busca los valores de β₀ y β₁ que minimizan Σ(y_i - ŷ_i)². Tiene solución analítica cerrada: β = (XᵀX)⁻¹Xᵀy. Por eso es determinista: siempre da el mismo resultado exacto sin iteraciones."
        },
        {
          "id": 1124,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "En el contexto de Regresión Lineal, ¿a qué llamamos formalmente un 'residuo'?",
          "options": [
            "La distancia vertical entre el valor real y_i y la predicción ŷ_i de la recta; puede ser positiva o negativa.",
            "El número de filas que el train_test_split eliminó del dataset original antes de comenzar el ajuste.",
            "La diferencia entre MAE y RMSE, que indica cuánto amplifican los outliers el error cuadrático del modelo.",
            "El ángulo en grados que forma la recta de regresión con el eje X cuando cruza por el punto (0, β₀)."
          ],
          "correct": 0,
          "feedback": "Residuo = y_i - ŷ_i (distancia vertical al signo). Si el punto está por encima de la recta, el residuo es positivo; si está por debajo, es negativo. Analizar los residuos es clave: si muestran patrones (curvas, embudos), la recta no es el modelo correcto."
        },
        {
          "id": 1125,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Tienes un R² de 0.05 (5%) al intentar predecir el precio del oro basándote en la cantidad de lluvias en Japón. ¿Cuál es el análisis correcto?",
          "options": [
            "El modelo es prácticamente inútil; solo explica el 5% de la varianza del precio del oro con esa variable.",
            "Un R²=0.05 equivale al 5% de certeza, que en mercados financieros es suficiente para operar con ganancias.",
            "El R² nunca toma valores decimales; un resultado como 0.05 indica un error de cálculo en pandas.",
            "El modelo puede predecir el precio del oro con un 5% de error absoluto, lo que es excelente para inversiones."
          ],
          "correct": 0,
          "feedback": "R² = 0.05 significa que el modelo explica solo el 5% de la variabilidad del precio del oro. El 95% restante depende de factores no incluidos (demanda global, política monetaria, etc.). Usar ese modelo para invertir sería una decisión pésima."
        },
        {
          "id": 1126,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "¿Qué sucede con la métrica MAE si dentro de un dataset de casas hay UNA sola casa multimillonaria catalogada por error como 10 veces su valor real (outlier masivo)?",
          "options": [
            "El MAE sube, pero menos que el RMSE, porque el MAE promedia errores absolutos sin elevarlos al cuadrado.",
            "El MAE se vuelve negativo automáticamente cuando la diferencia entre real y predicho supera el rango del dataset.",
            "El MAE ignora el outlier por su filtro interno basado en percentiles y mediana de la distribución residual.",
            "El MAE y el RMSE se igualan matemáticamente cuando el outlier es exactamente 10 veces el valor real esperado."
          ],
          "correct": 0,
          "feedback": "MAE = promedio de |errores|. Un outlier masivo genera un error enorme (ej. 5,000,000 USD de diferencia), que eleva el promedio pero linealmente. RMSE lo elevaría al cuadrado (25 trillones), amplificando mucho más su efecto. Por eso MAE es más robusto a outliers que RMSE."
        },
        {
          "id": 1127,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "¿Por qué es una mala práctica empresarial confiar en un modelo solo mirando el R² de entrenamiento sin validar nunca sobre el Test Set?",
          "options": [
            "Un R² alto en Train puede indicar memorización (Overfitting); solo el Test revela si el modelo generaliza de verdad.",
            "Los gerentes no comprenden decimales ni porcentajes, por lo que siempre se recomienda usar gráficos circulares.",
            "Scikit-Learn falsea los datos del Train internamente para evitar sesgos; por eso su R² no es confiable.",
            "El R² de Train es la métrica oficial más rigurosa avalada por el Reglamento de IA de la Unión Europea 2024."
          ],
          "correct": 0,
          "feedback": "Un R² alto en Train puede deberse a que el modelo memorizó el ruido específico de ese conjunto. Solo validando en Test (datos que el modelo nunca vio) puedes saber si aprendió una relación genuina o solo memorizó. Esta separación es la base de la evaluación honesta en ML."
        },
        {
          "id": 1128,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Para evitar Overfitting en regresión, el principio de la Navaja de Ockham sugiere que:",
          "options": [
            "Entre modelos de rendimiento similar en Test, el más simple es preferible: más mantenible y menos propenso a Overfitting.",
            "Debes elegir siempre el modelo más complejo porque captura más matices de los fenómenos del mundo real.",
            "Recortar el dataset de entrenamiento a la mitad elimina el Overfitting al reducir la exposición del modelo.",
            "Eliminar todas las variables categóricas simplifica la arquitectura y siempre mejora el R² en conjunto de prueba."
          ],
          "correct": 0,
          "feedback": "La Navaja de Ockham: entre varias explicaciones igualmente buenas, la más simple es preferible. En ML: si un Modelo A (polinomial, 50 variables) y un Modelo B (lineal, 5 variables) tienen R² similares en Test, Modelo B es mejor: más barato de mantener, menos propenso a Overfitting en el futuro."
        },
        {
          "id": 1129,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "Si graficas un Histograma de la variable 'Salario', y la forma es como una pirámide perfecta centrada. ¿Qué tipo de distribución es?",
          "options": [
            "Distribución Normal o Gaussiana: campana simétrica donde media, mediana y moda coinciden en el centro.",
            "Distribución Bimodal: dos picos separados que sugieren dos grupos poblacionales distintos en los datos.",
            "Distribución Uniforme: todas las barras del histograma tienen la misma altura sin ningún pico dominante.",
            "Distribución Sesgada a la izquierda: la cola larga está en el lado negativo con pocos salarios extremadamente bajos."
          ],
          "correct": 0,
          "feedback": "Una distribución Normal (Gaussiana) tiene forma de campana simétrica: la media, mediana y moda coinciden en el centro. En regresión, es deseable que los residuos sigan distribución normal, lo cual valida los supuestos de MCO."
        },
        {
          "id": 1130,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "El código `df = pd.read_csv('datos.csv')` en Google Colab o Jupyter requiere que:",
          "options": [
            "El archivo CSV debe existir en la ruta indicada; en Colab significa haberlo subido al entorno virtual de la sesión.",
            "El archivo debe estar en un servidor FTP gubernamental de la NASA para que Colab pueda descargarlo vía HTTP.",
            "El código debe estar transpilado desde C++ para que Python pueda interpretar la lectura de archivos binarios.",
            "Scikit-Learn debe estar desactivado temporalmente para evitar conflictos de acceso a disco con pandas."
          ],
          "correct": 0,
          "feedback": "pd.read_csv() busca el archivo en la ruta especificada. En Colab, debes subir el CSV al entorno local (ícono de carpeta → Upload). Si el archivo no existe en esa ruta, Python lanzará FileNotFoundError. La ruta '/content/archivo.csv' es la ruta predeterminada en Colab."
        },
        {
          "id": 1131,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "¿Cuál es la principal limitación estructural de la Regresión Lineal Simple?",
          "options": [
            "Solo usa una variable predictora; en la práctica casi todo depende de múltiples factores simultáneos.",
            "Solo puede predecir valores positivos; si β₀ es negativo, el modelo colapsa y arroja NaN en todas las predicciones.",
            "El programador debe derivar manualmente la función de costo antes de instanciar el objeto LinearRegression.",
            "No puede integrarse con Matplotlib; para visualizar sus resultados requiere la librería externa Plotly Express."
          ],
          "correct": 0,
          "feedback": "La Regresión Lineal Simple solo tiene 1 variable predictora. En la vida real casi todo depende de múltiples factores: el precio de un departamento depende de área, piso, barrio, antigüedad, etc. Para eso existe la Regresión Lineal Múltiple."
        },
        {
          "id": 1132,
          "category": "visual",
          "categoryName": "Análisis Visual y Residuos",
          "text": "¿Para qué sirve el método `alpha=0.5` en un `plt.scatter()` cuando graficamos miles de puntos de datos?",
          "options": [
            "Hace los puntos semitransparentes; donde se acumulan muchos se oscurece, revelando zonas densas del dataset.",
            "Fija el tamaño del marcador al 50% del tamaño base definido por el parámetro s de la función scatter().",
            "Representa el nivel de significancia estadística del 50% para pruebas de hipótesis sobre los datos graficados.",
            "Instruye a Scikit-Learn a ignorar observaciones con residuos mayores a 0.5 desviaciones estándar del promedio."
          ],
          "correct": 0,
          "feedback": "alpha controla la opacidad de los marcadores (0=invisible, 1=sólido). Con 5,000 puntos que se superponen, alpha=0.5 hace que las zonas densas se vean más oscuras (muchos puntos semitransparentes apilados) y las zonas dispersas más claras. Así detectas clusters y outliers visualmente."
        },
        {
          "id": 1133,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "Un modelo predice ingresos en función de los años de estudio. Un niño de 1 año tiene un ingreso estimado de -500 dólares según la recta. ¿Qué sucedió?",
          "options": [
            "Extrapolación ilógica: la recta calibrada para adultos no puede interpretarse para un rango de edad de 1 año.",
            "Underfitting: la curva de aprendizaje no convergió, produciendo pendientes negativas espurias en el extremo.",
            "El modelo detecta correctamente la dependencia económica del niño como deuda implícita en la predicción.",
            "Error de librería: Numpy suma incorrectamente cuando la variable predictora contiene el valor entero 1."
          ],
          "correct": 0,
          "feedback": "Extrapolación: aplicar el modelo fuera del rango en que fue calibrado. El modelo fue entrenado con personas de 18-60 años; extrapolar a 1 año produce un resultado sin sentido físico. La recta no 'sabe' que hay límites biológicos de edad e ingreso."
        },
        {
          "id": 1134,
          "category": "metricas",
          "categoryName": "Métricas de Evaluación (MAE, RMSE, R²)",
          "text": "MSE (Mean Squared Error) y RMSE (Root Mean Squared Error) castigan fuertemente los errores grandes. Si quisieras una métrica que NO se altere tan violentamente por dos o tres predicciones desastrosas, usarías:",
          "options": [
            "MAE (Mean Absolute Error) promedia errores absolutos, sin amplificar outliers como sí lo hace MSE/RMSE.",
            "R² ordinario es la única métrica que no eleva errores al cuadrado y es insensible a valores extremos.",
            "R² Ajustado penaliza la complejidad pero también eleva los residuos al cuadrado en su cálculo interno.",
            "No existe tal métrica; todas las métricas estándar de regresión requieren elevar los residuos al cuadrado."
          ],
          "correct": 0,
          "feedback": "MAE usa |error|, que trata todos los errores de igual forma. MSE/RMSE usan error², que amplifica los errores grandes al cuadrado. Por eso 2-3 outliers devastadores inflan mucho el RMSE pero impactan de forma proporcional al MAE. Elige MAE si quieres robustez a outliers."
        },
        {
          "id": 1135,
          "category": "comandos",
          "categoryName": "Implementación en Scikit-Learn",
          "text": "Si olvidaste llamar a `modelo.fit(X_train, y_train)` e intentas ejecutar `modelo.predict(X_test)`, el intérprete de Python:",
          "options": [
            "Scikit-Learn lanza NotFittedError: el modelo aún no tiene coeficientes porque nunca llamaste a fit().",
            "Python adivina los coeficientes tomando la media de y_test, garantizando al menos una predicción de referencia.",
            "Scikit-Learn entrena silenciosamente con X_test para no interrumpir el flujo de ejecución del notebook.",
            "Python elimina el objeto modelo de la memoria RAM para proteger la integridad de los datos del sistema."
          ],
          "correct": 0,
          "feedback": "Si llamas predict() antes de fit(), Scikit-Learn detecta que el modelo no tiene coeficientes aprendidos y lanza sklearn.exceptions.NotFittedError con el mensaje 'Call fit before predict'. Esta protección evita que devuelvas predicciones basadas en valores no inicializados."
        },
        {
          "id": 1136,
          "category": "teoria_ml",
          "categoryName": "Conceptos Teóricos y Extrapolación",
          "text": "A diferencia de un modelo determinista de la física (ej. Gravedad = masa / distancia²), la regresión lineal en Machine Learning es un modelo estadístico, lo que implica que:",
          "options": [
            "Incluye un término de error ε que captura variables no medidas y aleatoriedad; nunca predice con exactitud perfecta.",
            "Sus predicciones son exactas al 100% con suficientes datos porque aprende la ecuación física del fenómeno.",
            "Se limita a variables categóricas como colores y etiquetas; no puede modelar variables numéricas continuas.",
            "No usa álgebra lineal estándar; aplica aproximaciones empíricas informales rechazadas por la estadística moderna."
          ],
          "correct": 0,
          "feedback": "La física tiene leyes deterministas (ej. F=ma). Un modelo estadístico como la regresión incluye un término de error ε: y = β₀ + β₁X + ε. Ese ε captura todo lo que no medimos (variables ocultas, errores de medición, aleatoriedad inherente). Por eso la regresión nunca predice exacto."
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
        },
        {
          "value": "eda_correlacion",
          "label": "EDA y Correlación"
        },
        {
          "value": "modelos_regresion",
          "label": "Modelos de Regresión"
        },
        {
          "value": "metricas_comparacion",
          "label": "Métricas y Comparación de Modelos"
        },
        {
          "value": "despliegue",
          "label": "Despliegue y API"
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
            "Contaminas el preprocesador con info del Test; las métricas resultantes son falsamente optimistas e irreales.",
            "Optimizas la RAM porque fit_transform simultáneo es más eficiente que llamar fit y transform por separado.",
            "Es el procedimiento obligatorio; sin aplicar fit_transform al Test las columnas quedan sin escalar.",
            "Mejoras la generalización al exponerle al modelo el vocabulario completo antes del ajuste final."
          ],
          "correct": 0,
          "feedback": "Data Leakage (Fuga de Datos): si haces fit_transform() sobre X_test, el preprocesador aprende las categorías/estadísticas del test set ANTES de la evaluación. Esas estadísticas 'contaminan' el ajuste. La evaluación resultante es ilegítima porque el modelo indirectamente ya 'conoce' los datos de examen."
        },
        {
          "id": 1138,
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "¿Cuál es la secuencia estricta y correcta para preprocesar datos usando un `ColumnTransformer` en Scikit-Learn?",
          "options": [
            "fit_transform() en X_train para aprender + transformar; solo transform() en X_test para aplicar sin re-aprender.",
            "transform() en X_train primero para normalizar; luego fit_transform() en X_test para ajustar a la distribución real.",
            "fit_transform() sobre el 100% de los datos antes del split, para asegurar consistencia estadística global.",
            "fit() sobre la variable objetivo y; transform() sobre la matriz X de variables predictoras del modelo."
          ],
          "correct": 0,
          "feedback": "La secuencia correcta: (1) preprocesador.fit_transform(X_train) → aprende de los datos de entrenamiento Y los transforma. (2) preprocesador.transform(X_test) → solo aplica lo aprendido al test, sin volver a aprender nada. Así el test permanece 'ciego' durante el ajuste."
        },
        {
          "id": 1139,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Al usar `ColumnTransformer`, configuras el parámetro `remainder='passthrough'`. ¿Cuál es su propósito vital en el flujo de datos?",
          "options": [
            "Las columnas no transformadas explícitamente pasan intactas al dataset resultante en lugar de ser eliminadas.",
            "El pipeline continúa ejecutándose aunque una transformación lance un error, evitando interrupciones del flujo.",
            "Elimina automáticamente las filas con valores NaN en columnas que no fueron incluidas en el transformer.",
            "Aplica regresión polinomial de grado 1 a las columnas restantes como transformación por defecto."
          ],
          "correct": 0,
          "feedback": "Con remainder='passthrough', el ColumnTransformer aplica las transformaciones especificadas a las columnas listadas, y las demás columnas (las no listadas) pasan al resultado sin modificar. Sin esto, las columnas no mencionadas se eliminan silenciosamente del dataset transformado."
        },
        {
          "id": 1140,
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "En el dataset de salarios TI, la variable 'nivel_ingles' (1=Básico, 5=Nativo) se dejó intacta, mientras que 'rol' (Backend, Frontend) se pasó por One-Hot Encoding. ¿Por qué esta decisión técnica es crucial?",
          "options": [
            "Nivel de inglés es ordinal (5>4>3...) y se puede mantener numérico; rol es nominal sin jerarquía válida.",
            "Python prohíbe aplicar OHE a columnas que contienen números; por eso nivel_ingles se deja sin transformar.",
            "El gerente solicitó reducir columnas al mínimo, por lo que solo se codificó la variable con mayor cardinalidad.",
            "Las librerías de ML solo permiten codificar variables cuyo nombre tenga más de 5 caracteres ASCII."
          ],
          "correct": 0,
          "feedback": "Escala Nominal vs Ordinal. 'Nivel de inglés' tiene un orden matemático claro (5 > 4 > 3 ...), así que los números tienen sentido y la regresión los usará bien. 'Rol' (Backend, QA, Frontend) no tiene jerarquía numérica real; si pones Backend=1 y QA=3, el modelo asumirá incorrectamente que QA es 3 veces más que Backend."
        },
        {
          "id": 1141,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Al configurar `OneHotEncoder`, es mandatorio usar el parámetro `drop='first'`. ¿Qué problema estadístico previene esto?",
          "options": [
            "Elimina la primera columna dummy (categoría de referencia) para evitar multicolinealidad perfecta en la matriz.",
            "Mejora la capacidad predictiva forzando al modelo a aprender patrones más complejos de las variables restantes.",
            "Borra el ID del usuario (típicamente en la primera columna) que es irrelevante para la predicción del salario.",
            "Protege contra Overfitting eliminando la fila de outliers más extremo del Dataset antes de codificar."
          ],
          "correct": 0,
          "feedback": "Si tienes 3 categorías (A, B, C) → OHE crea 3 columnas (col_A, col_B, col_C). Pero col_C = 1 - col_A - col_B siempre, lo que genera multicolinealidad perfecta. Con drop='first' eliminas col_C (la categoría de referencia) y el modelo puede invertir la matriz XᵀX correctamente."
        },
        {
          "id": 1142,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "¿Para qué se usa comúnmente el parámetro `handle_unknown='ignore'` dentro del OneHotEncoder en producción?",
          "options": [
            "Si el modelo recibe una categoría nueva no vista en entrenamiento, asigna ceros en vez de lanzar un error.",
            "Instruye a Python para que ignore los errores de sintaxis en el código de preprocesamiento del pipeline.",
            "Elimina automáticamente las filas con valores desconocidos (NaN) antes de aplicar la codificación binaria.",
            "Desactiva el conjunto de prueba (Test) para que el modelo entrene con todos los datos disponibles en producción."
          ],
          "correct": 0,
          "feedback": "Si en producción llega un rol nuevo que no existía en entrenamiento (ej. 'Scrum Master' que no estaba en train), sin este parámetro OHE lanzaría un error. Con handle_unknown='ignore', simplemente pone ceros en todas las columnas dummy de ese registro y el modelo puede igual hacer su predicción."
        },
        {
          "id": 1143,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Entrenaste una Regresión Lineal Múltiple para salarios TI y obtuviste la ecuación ŷ = 500 + 300(experiencia) - 200(modalidad_Presencial). ¿Qué puedes deducir sobre la modalidad de trabajo?",
          "options": [
            "Manteniendo el resto constante, trabajar presencialmente se asocia a un salario promedio 200 USD menor.",
            "La modalidad presencial es la más cotizada del mercado; el signo negativo indica una deducción fiscal obligatoria.",
            "El coeficiente negativo en regresión múltiple es un error; los coeficientes de dummies siempre son positivos.",
            "Los trabajadores presenciales deben devolver 200 USD mensuales a la empresa por uso de instalaciones físicas."
          ],
          "correct": 0,
          "feedback": "El coeficiente de la variable dummy 'modalidad_Presencial' = -200. Esto se interpreta como: ceteris paribus (igual experiencia, rol, etc.), un trabajador presencial gana en promedio 200 USD menos que el trabajador remoto (la categoría de referencia que drop='first' eliminó)."
        },
        {
          "id": 1144,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Luego de usar `ColumnTransformer` con OHE, tu matriz X pasa de tener 4 columnas a 15 columnas de números sin nombre. ¿Qué comando usas para recuperar los nombres reales (ej. 'rol_Backend') y poder graficar los coeficientes?",
          "options": [
            "`preprocesador.get_feature_names_out()` devuelve los nombres de las columnas tras la transformación OHE.",
            "`preprocesador.columns_names_recover()` reconstruye los nombres desde el archivo CSV original en disco.",
            "`preprocesador.describe()` genera estadísticas de las columnas transformadas con sus nombres correspondientes.",
            "`df.columns()` devuelve los nombres actualizados del DataFrame ya transformado por el ColumnTransformer."
          ],
          "correct": 0,
          "feedback": "get_feature_names_out() devuelve los nombres de todas las columnas tras la transformación. Si OHE expandió 'rol' en ['rol_Backend','rol_QA','rol_Frontend'], este método los lista. Sin él, las columnas son anónimas (números) y no puedes interpretar qué variable tiene el mayor impacto."
        },
        {
          "id": 1145,
          "category": "teoria_ml",
          "categoryName": "Fundamentos y Multicolinealidad",
          "text": "Si en un modelo de regresión múltiple eliminas dos variables predictoras irrelevantes y el R² ajustado SUBE. ¿Qué te está diciendo el comportamiento de la métrica?",
          "options": [
            "El R² ajustado subió porque esas variables aportaban ruido; al eliminarlas el modelo se vuelve más preciso.",
            "Es un error de cálculo; eliminar variables predictoras siempre reduce R² ajustado sin excepción matemática.",
            "Las variables eliminadas eran las más importantes; el sistema compensó aumentando los coeficientes restantes.",
            "El R² ajustado siempre mejora sin importar qué variables elimines; es una propiedad matemática garantizada."
          ],
          "correct": 0,
          "feedback": "El R² ajustado = 1 - [(1-R²)(n-1)/(n-p-1)]. Si eliminas variables inútiles, 'p' baja (menos penalización) y aunque R² ordinario también baje levemente, la fórmula ajustada puede subir. Esto indica que las variables eliminadas añadían ruido, no información."
        },
        {
          "id": 1146,
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "Deseas crear un modelo capaz de capturar relaciones curvas en los años de experiencia usando `PolynomialFeatures(degree=2)`. ¿Por qué aplicas esto SOLO a las variables numéricas y NO a las variables dummy (categóricas)?",
          "options": [
            "1² = 1 y 0² = 0; elevar dummies al cuadrado no agrega información y genera columnas redundantes.",
            "Scikit-Learn prohíbe mezclar tipos en PolynomialFeatures; lanza un TypeError con datos mixtos categóricos.",
            "Las dummies al cuadrado producen valores negativos que colapsan la matriz de correlación del modelo.",
            "Siempre debes aplicar polinomial a todas las variables del dataset para que el modelo alcance su máximo R²."
          ],
          "correct": 0,
          "feedback": "Una dummy (0 o 1) elevada al cuadrado sigue siendo 0 o 1. Dos dummies multiplicadas (interacción) producen otra columna de 0s y 1s que podría ser idéntica a una ya existente → multicolinealidad. PolynomialFeatures solo aporta información real cuando se aplica a variables continuas con variabilidad."
        },
        {
          "id": 1147,
          "category": "comandos_avanzados",
          "categoryName": "Comandos: ColumnTransformer y Matrices",
          "text": "Tras procesar las numéricas con Polinomial (grado 2) y las categóricas con OHE, obtienes dos matrices separadas (`X_train_poly` y `dummies_train`). ¿Cómo las unes horizontalmente para alimentar tu `LinearRegression`?",
          "options": [
            "`np.hstack([X_poly, dummies])` concatena columnas horizontalmente para crear la matriz de entrenamiento final.",
            "`np.vstack([X_poly, dummies])` apila filas verticalmente, duplicando el número de observaciones del dataset.",
            "El operador `+` en Python suma los arrays elemento a elemento, produciendo la misma matriz de 15 columnas.",
            "LinearRegression acepta hasta 5 matrices separadas como parámetros de fit() sin necesidad de unirlas antes."
          ],
          "correct": 0,
          "feedback": "np.hstack([A, B]) concatena horizontalmente dos arrays numpy: si A tiene 200 filas × 3 cols y B tiene 200 filas × 12 cols dummy, el resultado es 200 filas × 15 cols. Así tienes una única matriz lista para LinearRegression. np.vstack apila verticalmente (agrega filas, no columnas)."
        },
        {
          "id": 1148,
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "Tu Modelo Polinomial (Grado 3) logra un R² brutal de 0.99 en entrenamiento, pero en el conjunto de prueba (Test) su R² se desploma a -1.50. ¿Cómo interpretas y solucionas este evento?",
          "options": [
            "Overfitting catastrófico: memorizó ruido del Train y es peor que predecir la media en Test (R² negativo).",
            "Underfitting extremo: necesita más complejidad; el grado 3 no alcanza para capturar la curva real.",
            "El Test set es defectuoso o tiene outliers; descártalo y usa el 100% de los datos para evaluar el modelo.",
            "La RAM de Colab se saturó al procesar el grado 3; reiniciar el entorno resolverá el problema matemático."
          ],
          "correct": 0,
          "feedback": "R²_train=0.99 con R²_test=-1.50 es Overfitting catastrófico. El modelo memorizó hasta el ruido del entrenamiento. R² negativo en test significa que el modelo es PEOR que simplemente predecir la media de Y. Solución: bajar el grado polinomial o agregar regularización."
        },
        {
          "id": 1149,
          "category": "comparativa",
          "categoryName": "Comparativa y Selección de Modelos",
          "text": "Comparativa Final: Modelo Lineal (15 predictores, R² Ajustado = 0.81). Modelo Polinomial Grado 2 (45 predictores, R² Ajustado = 0.82). Basado en la 'Navaja de Ockham', ¿qué recomiendas para el sistema en producción?",
          "options": [
            "El Modelo Lineal: 1% de mejora no justifica triplicar las variables ni el riesgo adicional de Overfitting.",
            "El Polinomial siempre: en industria, cualquier mejora del R², por pequeña que sea, justifica la complejidad.",
            "Promediar ambos modelos y crear un ensamble híbrido con la media de sus predicciones individuales.",
            "Ninguno: ambos tienen R² insuficiente y deben reemplazarse por una red neuronal profunda de 10 capas."
          ],
          "correct": 0,
          "feedback": "Navaja de Ockham en ML: si el Modelo Lineal (15 vars, R²_adj=0.81) y el Polinomial (45 vars, R²_adj=0.82) tienen desempeño casi idéntico en Test, el Lineal gana. Motivos: triplicar variables aumenta coste computacional, dificulta el mantenimiento y eleva el riesgo de Overfitting futuro con nuevos datos."
        },
        {
          "id": 1150,
          "category": "comparativa",
          "categoryName": "Comparativa y Selección de Modelos",
          "text": "¿Por qué NUNCA utilizaríamos un 'Dataset Sintético Didáctico' (como el usado en la Tarea 2) para presentar un informe ejecutivo o entrenar una IA de contratación real?",
          "options": [
            "Los datos sintéticos no reflejan el ruido y la complejidad del mercado real; el modelo no generalizaría bien.",
            "Scikit-Learn detecta datos sintéticos automáticamente y rechaza entrenar modelos con ellos en producción.",
            "Los datos sintéticos siempre tienen distribución uniforme; los datos reales tienen distribución normal estricta.",
            "Los datos sintéticos son indistinguibles de los reales para cualquier algoritmo de Machine Learning existente."
          ],
          "correct": 0,
          "feedback": "Un dataset sintético es artificial: los valores fueron generados por código o inventados por el docente para que sean pedagógicamente claros. En el mercado real, los salarios tienen mucho más ruido, sesgos y variables ocultas. Un modelo entrenado en datos sintéticos puede ser incapaz de generalizar al mundo real."
        },
        {
          "category": "eda_correlacion",
          "categoryName": "EDA y Correlación",
          "text": "En el taller de autos usados, la correlación de Pearson entre 'kilometraje_km' y 'precio_usd' es +0.68. ¿Cómo interpretas este valor?",
          "options": [
            "Existe una relación lineal positiva moderada-fuerte: los autos con más kilómetros tienden a costar más, aunque no perfectamente.",
            "Existe una relación lineal negativa fuerte: los autos más viejos con muchos kilómetros valen significativamente menos.",
            "No existe ninguna relación entre kilometraje y precio; el 0.68 es un valor de p-value que indica significancia estadística.",
            "El 68% de los autos en el dataset tienen un precio superior al promedio en función de su kilometraje acumulado."
          ],
          "correct": 0,
          "feedback": "La correlación de Pearson va de -1 a +1. Un valor de +0.68 indica relación positiva moderada-fuerte: a mayor kilometraje, mayor precio. Nota: en el contexto de autos usados esto podría parecer ilógico; la correlación captura tendencia lineal pero no causalidad.",
          "id": 1151
        },
        {
          "category": "eda_correlacion",
          "categoryName": "EDA y Correlación",
          "text": "Al construir el heatmap de correlaciones con `df[cols_num].corr()`, notas que 'motor_cc' y 'potencia_hp' tienen correlación 0.91 entre sí. ¿Qué riesgo introduce esto en tu modelo de regresión múltiple?",
          "options": [
            "Multicolinealidad: el modelo no puede separar el efecto individual de cada variable, haciendo inestables ambos coeficientes.",
            "Heterocedasticidad: la varianza de los residuos crecerá en los extremos del rango de la variable motor_cc.",
            "Overfitting garantizado: tener dos variables muy correlacionadas siempre eleva el R² por encima de 0.99.",
            "Underfitting: las variables redundantes se cancelan mutuamente, forzando al modelo a ignorar ambas en el ajuste."
          ],
          "correct": 0,
          "feedback": "Multicolinealidad ocurre cuando dos predictores están muy correlacionados entre sí. El modelo no puede determinar cuánto del precio se debe a motor_cc y cuánto a potencia_hp por separado. Los coeficientes β se vuelven inestables: pequeños cambios en los datos producen coeficientes muy distintos.",
          "id": 1152
        },
        {
          "category": "eda_correlacion",
          "categoryName": "EDA y Correlación",
          "text": "En el dataset del taller, la variable 'anio' tiene correlación -0.41 con 'precio_usd'. ¿Cómo interpretas el signo negativo en el contexto de autos usados?",
          "options": [
            "A mayor año de fabricación, menor precio: los autos más recientes son más baratos. Esto es ilógico y el signo debe ser error.",
            "A menor año de fabricación (autos más viejos), mayor precio: los autos más antiguos tienden a costar menos.",
            "A mayor año de fabricación, mayor precio; el signo negativo indica que la correlación está invertida por error de cálculo.",
            "El año y el precio no tienen relación; la correlación negativa pequeña indica que son estadísticamente independientes."
          ],
          "correct": 1,
          "feedback": "La variable 'anio' guarda el año de fabricación (ej. 2005 es pequeño, 2023 es grande). Correlación negativa con precio: a menor valor de 'anio' (auto más antiguo), menor precio. Es decir: autos más antiguos (2005) cuestan menos que autos nuevos (2023). El signo negativo es correcto y lógico.",
          "id": 1153
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "El taller establece la 'Regla Fundamental' del preprocesamiento. ¿En qué momento exacto debe hacerse el `train_test_split` para evitar Data Leakage?",
          "options": [
            "El split debe hacerse ANTES de cualquier transformación: primero dividir, luego ajustar los transformadores solo en X_train.",
            "El split puede hacerse en cualquier momento, siempre que el OneHotEncoder se aplique al dataset completo primero.",
            "El split debe hacerse DESPUÉS de aplicar PolynomialFeatures para garantizar que ambos conjuntos tengan el mismo número de columnas.",
            "El split debe hacerse sobre la variable Y solamente; la variable X se usa completa tanto en train como en test."
          ],
          "correct": 0,
          "feedback": "Regla fundamental del taller: PRIMERO divide en train/test, LUEGO aplica las transformaciones ajustando (.fit) solo en X_train. Si transformas todo el dataset antes del split, el test 'se cuela' en el ajuste del preprocesador, contaminando la evaluación con data leakage.",
          "id": 1154
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "En el taller de autos, las variables 'marca', 'tipo_cambio', 'combustible' y 'provincia' son categóricas nominales. ¿Por qué NO las codificamos como números enteros (1, 2, 3...) con un LabelEncoder?",
          "options": [
            "Porque LabelEncoder asigna un orden numérico implícito (Toyota=1 < Volkswagen=2) que no existe en la realidad entre marcas.",
            "Porque LabelEncoder produce columnas flotantes que Scikit-Learn no puede procesar en LinearRegression.",
            "Porque LabelEncoder solo funciona con variables ordinales de más de 10 categorías únicas en el dataset.",
            "Porque las marcas de autos son variables continuas que requieren PolynomialFeatures antes de codificarse."
          ],
          "correct": 0,
          "feedback": "LabelEncoder asigna enteros arbitrarios: si Toyota=1 y Ford=2, el modelo asume Ford > Toyota matemáticamente. Eso es mentira para variables nominales sin jerarquía real. One-Hot Encoding crea una columna binaria por categoría (0 o 1), sin asumir ningún orden entre ellas.",
          "id": 1155
        },
        {
          "category": "modelos_regresion",
          "categoryName": "Modelos de Regresión (Lineal, Múltiple y Polinomial)",
          "text": "El taller construye 4 modelos progresivos: A1 (lineal simple con kilometraje), A2 (múltiple con todas las numéricas), A3 (múltiple con numéricas + dummies de categoricas), A4 (polinomial grado 2). ¿Cuál es el orden esperado de mejora del R²?",
          "options": [
            "A1 < A2 < A3 < A4: cada modelo agrega más información (más variables o más complejidad), mejorando el poder predictivo.",
            "A4 < A3 < A2 < A1: la regresión lineal simple siempre supera a los modelos más complejos por la Navaja de Ockham.",
            "Todos tienen el mismo R²: agregar variables no cambia el poder predictivo si el algoritmo es LinearRegression.",
            "A2 < A1 < A4 < A3: las variables categóricas siempre mejoran más que las polinomiales en datasets de autos."
          ],
          "correct": 0,
          "feedback": "Agregar variables relevantes (numéricas + categóricas) y complejidad (polinomial) generalmente mejora el R² en train. Sin embargo, el R² ajustado y el R² en Test son más honestos: pueden bajar si las variables no aportan o si hay Overfitting en A4.",
          "id": 1156
        },
        {
          "category": "modelos_regresion",
          "categoryName": "Modelos de Regresión (Lineal, Múltiple y Polinomial)",
          "text": "Comparas el Modelo A3 (múltiple con OHE) vs Modelo A4 (polinomial grado 2). A3 tiene R²_test=0.78 y A4 tiene R²_test=0.79, pero A4 tiene 45 columnas vs 12 de A3. ¿Cuál recomiendas y por qué?",
          "options": [
            "A3: una mejora de 0.01 en R² no justifica triplicar las columnas, aumentar el costo computacional y el riesgo de Overfitting futuro.",
            "A4: en Machine Learning siempre se debe maximizar el R², aunque sea en centésimas, sin importar la complejidad del modelo.",
            "A3: porque PolynomialFeatures está prohibido en datasets con variables categóricas según las reglas de Scikit-Learn.",
            "A4: las 45 columnas adicionales garantizan que el modelo nunca sufra Underfitting en producción real con datos nuevos."
          ],
          "correct": 0,
          "feedback": "Principio de parsimonia (Navaja de Ockham): si dos modelos tienen desempeño casi idéntico en Test, elige el más simple. El modelo complejo es más difícil de mantener, más lento en producción y más propenso a Overfitting cuando lleguen datos nuevos del mercado.",
          "id": 1157
        },
        {
          "category": "modelos_regresion",
          "categoryName": "Modelos de Regresión (Lineal, Múltiple y Polinomial)",
          "text": "En el taller, la Sección B.1 pide construir el Modelo A2 usando solo numéricas. ¿Cuál es el comando correcto para separar las columnas numéricas de las categóricas antes de entrenar?",
          "options": [
            "`cols_num = df.select_dtypes(include='number').columns.tolist()` selecciona automáticamente todas las columnas numéricas.",
            "`cols_num = df.filter(dtype=int).keys()` filtra columnas de tipo entero usando el método nativo de Pandas.",
            "`cols_num = df.get_numerics()` devuelve un dict con los nombres y valores de las columnas numéricas.",
            "`cols_num = sklearn.utils.get_numeric_cols(df)` usa la función utilitaria de Scikit-Learn para esto."
          ],
          "correct": 0,
          "feedback": "`df.select_dtypes(include='number')` devuelve un DataFrame con solo las columnas numéricas (int64, float64). Luego `.columns.tolist()` las convierte en una lista de nombres de columna. Es el método estándar en Pandas para separar tipos de datos antes de aplicar transformadores.",
          "id": 1158
        },
        {
          "category": "modelos_regresion",
          "categoryName": "Modelos de Regresión (Lineal, Múltiple y Polinomial)",
          "text": "Ejercicio B.2 del taller: al agregar la variable 'marca' (OHE) al modelo lineal múltiple, el R² ajustado pasa de 0.71 a 0.76. ¿Qué concluyes sobre la variable 'marca'?",
          "options": [
            "La marca aporta información real al modelo: saber qué marca es el auto ayuda a predecir mejor el precio.",
            "La mejora del R² ajustado es ficticia; agregar variables siempre sube el R² ajustado sin excepción matemática.",
            "La marca no sirve como predictor; el aumento del R² se debe exclusivamente al incremento de columnas dummy.",
            "La marca debe eliminarse porque produce Multicolinealidad al crear múltiples columnas binarias correlacionadas."
          ],
          "correct": 0,
          "feedback": "El R² ajustado penaliza por el número de variables. Si sube al agregar 'marca' (con sus dummies), significa que las columnas dummy de marca aportan información genuina que supera la penalización por complejidad. La marca tiene poder predictivo real sobre el precio.",
          "id": 1159
        },
        {
          "category": "modelos_regresion",
          "categoryName": "Modelos de Regresión (Lineal, Múltiple y Polinomial)",
          "text": "En el taller, el coeficiente del predictor 'tipo_cambio_automatico' (dummy OHE) es +3,500 USD. ¿Qué significa?",
          "options": [
            "Ceteris paribus, un auto con transmisión automática se espera que cueste en promedio 3,500 USD más que uno con transmisión manual.",
            "El 3,500% de los autos automáticos en el dataset son más caros que los manuales de la misma marca y año.",
            "Comprar un auto automático genera un costo adicional único de 3,500 USD en impuestos de importación en Ecuador.",
            "El coeficiente positivo indica que la variable tipo_cambio es irrelevante y debe eliminarse del modelo final."
          ],
          "correct": 0,
          "feedback": "En regresión con variables dummy, el coeficiente indica la diferencia promedio respecto a la categoría base (manual) manteniendo todo lo demás igual (ceteris paribus). Coeficiente +3,500 en 'automatico': un auto automático vale en promedio 3,500 USD más que el mismo auto con transmisión manual.",
          "id": 1160
        },
        {
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "¿Qué columnas ADICIONALES crea `PolynomialFeatures(degree=2)` cuando le pasas una sola variable X (ej. kilometraje)?",
          "options": [
            "Crea: 1 (intercepto), X (original) y X² (cuadrado). Con include_bias=True son 3 columnas en total.",
            "Crea: X (original) y √X (raíz cuadrada). Solo genera transformaciones que mantienen la unidad original.",
            "Crea: X, X², X³, X⁴... hasta el infinito; el parámetro degree=2 indica que empieza desde el grado 2.",
            "Crea: X y log(X). PolynomialFeatures siempre aplica transformación logarítmica al grado especificado."
          ],
          "correct": 0,
          "feedback": "PolynomialFeatures(degree=2) con 1 variable genera: [1, X, X²]. Con include_bias=False (sin el 1): [X, X²]. Con 2 variables (X1, X2): genera [1, X1, X2, X1², X1·X2, X2²]. La cantidad de columnas crece exponencialmente con el número de variables y el grado.",
          "id": 1161
        },
        {
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "Entrenas un modelo polinomial de grado 4 con el dataset de autos. R²_train=0.97, R²_test=0.41. ¿Qué diagnóstico y solución aplicarías?",
          "options": [
            "Overfitting severo: el modelo memorizó el ruido del training. Solución: bajar el grado (probar grado 2 o 3).",
            "Underfitting severo: el modelo necesita más variables. Solución: agregar todas las columnas disponibles del CSV.",
            "Dataset contaminado: el test set tiene outliers que distorsionan el R². Solución: eliminar el 20% de outliers.",
            "Error de implementación: Scikit-Learn calcula mal el R² para grados polinomiales superiores a 3 con datos reales."
          ],
          "correct": 0,
          "feedback": "Diferencia masiva entre R²_train (0.97) y R²_test (0.41) es la firma del Overfitting. El grado 4 creó demasiadas columnas (combinaciones de variables elevadas a la 4), memorizando hasta el ruido. Solución: usar validación cruzada o grid search para encontrar el grado óptimo (probablemente 1 o 2).",
          "id": 1162
        },
        {
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "En el taller, al aplicar `PolynomialFeatures(degree=2)` sobre 5 variables numéricas, ¿cuántas columnas aproximadas genera la transformación?",
          "options": [
            "21 columnas: 1 intercepto + 5 originales + 15 términos cuadráticos e interacciones (C(5+2,2) = 21).",
            "10 columnas: simplemente duplica cada variable original con su cuadrado sin crear interacciones cruzadas.",
            "5 columnas: PolynomialFeatures solo eleva al cuadrado cada variable sin crear términos de interacción.",
            "100 columnas: el cuadrado del número de variables × el grado polinomial × 4 factores de ajuste interno."
          ],
          "correct": 0,
          "feedback": "La fórmula es C(n+d, d) donde n=variables y d=grado. Con n=5, d=2: C(7,2) = 21 columnas (incluyendo el intercepto y todos los términos de interacción como X1·X2, X1·X3, etc.). Por eso con muchas variables el grado 2 ya explota la dimensionalidad y puede causar Overfitting.",
          "id": 1163
        },
        {
          "category": "metricas_comparacion",
          "categoryName": "Métricas y Comparación de Modelos",
          "text": "Tienes 3 modelos evaluados en el Test Set de autos. ¿Cuál seleccionarías y por qué? — M1: RMSE=4,200, R²=0.72, 8 predictores — M2: RMSE=3,800, R²=0.79, 42 predictores — M3: RMSE=3,750, R²=0.80, 45 predictores",
          "options": [
            "M2: mejor balance entre error bajo, buen R² y complejidad razonable; M3 solo mejora 0.01 con 3 variables más.",
            "M3: siempre el mejor R² gana; la diferencia de 3 variables entre M2 y M3 es despreciable en producción.",
            "M1: el modelo con menos predictores siempre es el mejor independientemente del RMSE y el R² obtenidos.",
            "Los tres modelos son equivalentes: cualquier diferencia en métricas del conjunto de test se debe al azar del split."
          ],
          "correct": 0,
          "feedback": "M2 vs M3: el R² mejora apenas 0.01 (de 0.79 a 0.80) pero M3 tiene 3 predictores más. Con el principio de parsimonia, M2 es preferible: misma potencia predictiva práctica, más simple de mantener e interpretar. M1 queda descartado por su RMSE y R² claramente inferiores.",
          "id": 1164
        },
        {
          "category": "metricas_comparacion",
          "categoryName": "Métricas y Comparación de Modelos",
          "text": "El RMSE del Modelo A1 (simple) es USD 5,800 y el del Modelo A3 (múltiple con dummies) es USD 3,200. ¿Cómo interpretas esta diferencia en el contexto del negocio de autos usados?",
          "options": [
            "El Modelo A3 es mucho mejor: sus predicciones de precio se equivocan en promedio 2,600 USD menos por auto.",
            "El Modelo A1 es mejor: el RMSE de 5,800 indica que predice con 5,800 veces más precisión que el promedio.",
            "La diferencia no es significativa; ambos errores son aceptables si el dataset tiene menos de 10,000 filas.",
            "Un RMSE más alto siempre es preferible: significa que el modelo es más conservador y no sobreestima precios."
          ],
          "correct": 0,
          "feedback": "RMSE está en las mismas unidades que la variable objetivo (USD). Modelo A1 se equivoca en promedio 5,800 USD por auto, A3 se equivoca 3,200 USD. Para una empresa inmobiliaria o concesionaria, reducir el error en 2,600 USD por predicción es una mejora económicamente significativa.",
          "id": 1165
        },
        {
          "category": "metricas_comparacion",
          "categoryName": "Métricas y Comparación de Modelos",
          "text": "¿Para qué sirve el `r2_score()` de Scikit-Learn y cuándo puede devolver un valor NEGATIVO?",
          "options": [
            "Mide qué tan bien predice el modelo vs predecir la media. Es negativo cuando el modelo es peor que usar la media de Y como predicción.",
            "Mide el porcentaje de datos correctamente clasificados; es negativo cuando el modelo confunde más del 50% de las clases.",
            "Mide la correlación de Pearson al cuadrado; es negativo cuando las variables predictoras tienen correlación inversa con Y.",
            "Mide el error relativo respecto a la desviación estándar; es negativo cuando el dataset tiene más ruido que señal útil."
          ],
          "correct": 0,
          "feedback": "R² = 1 - (SS_residual / SS_total). SS_total es la varianza de Y alrededor de su media. Si el modelo predice tan mal que su SS_residual > SS_total, el R² se vuelve negativo, indicando que simplemente predecir ȳ (la media) hubiera sido mejor predictor que el modelo ajustado.",
          "id": 1166
        },
        {
          "category": "eda_correlacion",
          "categoryName": "EDA y Correlación",
          "text": "Ejercicio B.5 del taller: al graficar un boxplot de 'precio_usd', identificas varios puntos por encima del bigote superior. ¿Qué representan y qué efecto tienen en el modelo?",
          "options": [
            "Son outliers: autos con precios inusualmente altos. Inflaman el RMSE del modelo porque el cuadrado del error grande es enorme.",
            "Son la mediana del dataset: el boxplot siempre marca la mediana como puntos separados sobre el bigote superior.",
            "Son el 75% de los datos más caros: el boxplot divide el dataset en cuartiles y pinta el último como puntos.",
            "Son ruido estadístico sin efecto en el modelo; Scikit-Learn filtra automáticamente los puntos fuera del bigote."
          ],
          "correct": 0,
          "feedback": "En un boxplot, los puntos fuera de 1.5×RIC (rango intercuartílico) son outliers. Un auto de USD 55,000 con precio esperado de USD 30,000 genera un residuo de 25,000. Al elevarse al cuadrado (625,000,000), domina el MSE y 'castiga' desproporcionadamente al RMSE del modelo.",
          "id": 1167
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (OHE y Data Leakage)",
          "text": "En el Ejercicio B.3 del taller, debes construir el ColumnTransformer que aplica OHE a las variables categóricas y deja pasar las numéricas. ¿Cuál de las siguientes implementaciones es correcta?",
          "options": [
            "`ColumnTransformer([('ohe', OneHotEncoder(drop='first'), cols_cat)], remainder='passthrough')`",
            "`ColumnTransformer([('ohe', OneHotEncoder(), cols_num)], remainder='drop')`",
            "`ColumnTransformer([('ohe', LabelEncoder(), cols_cat), ('poly', PolynomialFeatures(), cols_num)])`",
            "`ColumnTransformer(OneHotEncoder(drop='first', handle_unknown='ignore'), input_cols=cols_cat)`"
          ],
          "correct": 0,
          "feedback": "La sintaxis correcta es: ColumnTransformer([(nombre, transformador, columnas)], remainder=...). Usamos 'ohe' como nombre, OneHotEncoder(drop='first') para evitar la Dummy Trap, cols_cat para las categóricas, y remainder='passthrough' para que las numéricas pasen sin transformar.",
          "id": 1168
        },
        {
          "category": "modelos_regresion",
          "categoryName": "Modelos de Regresión (Lineal, Múltiple y Polinomial)",
          "text": "Al terminar el taller B.8, debes reportar cuál de tus 4 modelos fue el mejor. ¿Qué criterios debes considerar para hacer una recomendación completa y profesional?",
          "options": [
            "R² ajustado en test (poder predictivo real), RMSE en test (error en USD), número de predictores (complejidad) y diferencia entre R²_train y R²_test (Overfitting).",
            "Solo el R² más alto en entrenamiento; las demás métricas son redundantes si el ajuste en train es cercano a 1.0.",
            "Solo el RMSE más bajo sin importar el número de predictores ni la diferencia entre train y test del modelo.",
            "El tiempo de entrenamiento en segundos y el uso de memoria RAM de Google Colab durante la ejecución."
          ],
          "correct": 0,
          "feedback": "Una recomendación profesional de modelo evalúa: (1) Poder predictivo real (R²_test, RMSE_test), (2) Overfitting (gap entre R²_train y R²_test), (3) Complejidad (número de predictores, mantenibilidad) y (4) Interpretabilidad para el cliente. Reportar solo R²_train es una práctica inaceptable en entornos reales.",
          "id": 1169
        },
        {
          "category": "metricas_comparacion",
          "categoryName": "Métricas y Comparación de Modelos",
          "text": "En el taller, ¿cuál es la diferencia clave entre usar `r2_score(y_test, y_pred)` y el atributo `modelo.score(X_test, y_test)` de Scikit-Learn?",
          "options": [
            "Producen exactamente el mismo resultado: ambos calculan R² = 1 - (SS_res/SS_tot) sobre los mismos datos de prueba.",
            "`r2_score()` evalúa con datos de entrenamiento y `modelo.score()` evalúa con el conjunto de prueba automáticamente.",
            "`modelo.score()` calcula el R² ajustado por defecto, mientras que `r2_score()` calcula el R² ordinario sin ajuste.",
            "`r2_score()` requiere dos arrays de igual tamaño; `modelo.score()` puede operar con DataFrames de diferente forma."
          ],
          "correct": 0,
          "feedback": "Internamente, `modelo.score(X_test, y_test)` llama `modelo.predict(X_test)` y luego calcula `r2_score(y_test, y_pred)`. Son equivalentes. La función `r2_score()` es más flexible porque puedes pasarle cualquier array de predicciones, no necesariamente del mismo modelo.",
          "id": 1170
        },
        {
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "¿Por qué el Ejercicio B.8 del taller insiste en comparar modelos usando R² en el TEST SET y no solo en el TRAIN SET?",
          "options": [
            "Porque el test set simula datos nuevos nunca vistos; solo ese R² refleja si el modelo generalizará correctamente al mundo real.",
            "Porque Scikit-Learn no puede calcular R² sobre el training set; la función r2_score requiere datos distintos a los de ajuste.",
            "Porque el R² en train siempre es exactamente 1.0 en regresión múltiple, haciendo imposible la comparación entre modelos.",
            "Porque el test set es estadísticamente más grande que el train set y ofrece mayor poder estadístico de evaluación."
          ],
          "correct": 0,
          "feedback": "El train set fue visto por el modelo durante el ajuste, por lo que su R² mide principalmente la capacidad de memorización. El test set (nunca visto) mide la capacidad de generalización: cuánto de bueno será el modelo al predecir autos nuevos que lleguen mañana al inventario de la concesionaria.",
          "id": 1171
        },
        {
          "id": 1172,
          "category": "despliegue",
          "categoryName": "Despliegue y API",
          "text": "En el código `pipeline = joblib.load('modelo.pkl')` ubicado fuera (antes) de la función del endpoint `/predict`, ¿por qué se carga el modelo en ese punto y no dentro de la función de predicción?",
          "options": [
            "Porque así el modelo se reentrena automáticamente con cada solicitud que llega al servidor.",
            "Porque FastAPI lo exige por razones de sintaxis, sin ninguna ventaja real de rendimiento.",
            "Porque dentro de la función del endpoint no se puede usar la librería joblib por seguridad.",
            "Para cargar el modelo una sola vez al iniciar el servidor, en vez de releerlo desde disco en cada solicitud."
          ],
          "correct": 3,
          "feedback": "Cargar el modelo una sola vez al iniciar el servidor evita releerlo desde disco en cada solicitud, haciendo que cada predicción sea más rápida y consuma menos recursos."
        },
        {
          "id": 1173,
          "category": "despliegue",
          "categoryName": "Despliegue y API",
          "text": "¿Para qué se utiliza `joblib.dump()` y `joblib.load()` en el flujo de despliegue de un modelo?",
          "options": [
            "Para guardar y cargar el objeto (pipeline) entrenado, de modo que pueda reutilizarse sin volver a entrenarlo.",
            "Para dividir los datos en conjuntos de entrenamiento y prueba antes de iniciar el servidor web.",
            "Para entrenar el modelo desde cero cada vez que se necesita realizar una nueva predicción.",
            "Para calcular automáticamente el RMSE del modelo después de que ha sido desplegado en el servidor."
          ],
          "correct": 0,
          "feedback": "joblib.dump() guarda el pipeline entrenado en un archivo, y joblib.load() lo recupera en otro programa sin necesidad de reentrenarlo."
        },
        {
          "id": 1174,
          "category": "despliegue",
          "categoryName": "Despliegue y API",
          "text": "¿Qué indica el decorador `@app.post('/predict')` sobre una función en FastAPI?",
          "options": [
            "Que esa función se ejecuta automáticamente de forma periódica cada cierto tiempo (ej. cada minuto).",
            "Que esa función solo puede ejecutarse si la solicitud proviene de una aplicación móvil nativa.",
            "Que esa función entrena el modelo de regresión desde cero cada vez que es llamada externamente.",
            "Que esa función maneja las peticiones POST que llegan al endpoint /predict en la aplicación."
          ],
          "correct": 3,
          "feedback": "El decorador @app.post('/predict') indica que la función definida debajo se ejecuta cuando llega una petición HTTP POST a esa ruta específica."
        },
        {
          "id": 1175,
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "En `PolynomialFeatures(degree=2, include_bias=False)`, ¿qué logra el parámetro include_bias=False?",
          "options": [
            "Excluye la columna constante del término independiente, porque el modelo de regresión lineal ya agrega su propio intercepto.",
            "Elimina automáticamente todas las variables categóricas del dataset antes de aplicar la expansión polinomial.",
            "Impide que se generen términos de grado 2, limitando la transformación solo a interacciones de primer grado.",
            "Evita el data leakage entre el conjunto de entrenamiento y el conjunto de prueba durante la transformación."
          ],
          "correct": 0,
          "feedback": "include_bias=False excluye la columna constante (de puros unos) que representaría el término independiente, ya que el propio modelo (ej. LinearRegression) añade su intercepto por separado por defecto."
        },
        {
          "id": 1176,
          "category": "despliegue",
          "categoryName": "Despliegue y API",
          "text": "¿Cuál es la diferencia entre una API y un endpoint?",
          "options": [
            "La API es la interfaz general que expone el servicio; el endpoint es una dirección específica dentro de esa API que realiza una tarea concreta.",
            "Son sinónimos exactos en el contexto del desarrollo web y no existe ninguna diferencia técnica entre ellos.",
            "El endpoint es el servicio completo que se expone, mientras que la API es una ruta específica dentro de él.",
            "La API es una base de datos que almacena información y el endpoint es la interfaz visual para consultarla."
          ],
          "correct": 0,
          "feedback": "La API es el servicio completo (ej. el sistema de predicción); dentro de ella puede haber varios endpoints (por ejemplo, /predict y /health), cada uno encargado de una tarea concreta."
        },
        {
          "id": 1177,
          "category": "despliegue",
          "categoryName": "Despliegue y API",
          "text": "¿Qué realiza la línea `pipeline = joblib.load('modelo.pkl')`?",
          "options": [
            "Convierte el archivo modelo.pkl en un archivo JSON para poder ser transmitido por la red rápidamente.",
            "Elimina de la memoria el modelo entrenado anteriormente para liberar recursos del servidor web.",
            "Carga en memoria el objeto (pipeline) previamente entrenado y guardado en el archivo modelo.pkl.",
            "Entrena un nuevo pipeline de regresión usando los datos contenidos en el archivo modelo.pkl como dataset."
          ],
          "correct": 2,
          "feedback": "joblib.load() recupera (deserializa) el objeto previamente guardado con joblib.dump(), dejándolo listo para usarse con el método .predict()."
        },
        {
          "id": 1178,
          "category": "polinomial",
          "categoryName": "Regresión Polinomial (No Lineal)",
          "text": "¿Por qué la regresión polinomial se considera un caso especial de la regresión lineal múltiple?",
          "options": [
            "Porque solo puede usarse con una única variable categórica convertida mediante One-Hot Encoding.",
            "Porque el modelo es lineal en los parámetros β (coeficientes), aunque no lo sea en las variables x.",
            "Porque a diferencia de la regresión lineal, la regresión polinomial no utiliza coeficientes β.",
            "Porque siempre tiene exactamente el mismo grado matemático que el número de variables predictoras."
          ],
          "correct": 1,
          "feedback": "Aunque la relación con x no es lineal (hay potencias de x como x² o x³), el modelo sigue siendo una suma lineal de términos multiplicados por coeficientes β (ej. y = β₀ + β₁x + β₂x²), por lo que se ajusta con las técnicas estándar de regresión lineal."
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