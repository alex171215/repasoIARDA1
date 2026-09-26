window.QUIZ_DATA = {
  "semanas": [
    {
      "id": "mega_banco",
      "titulo": "Mega Banco Definitivo (Examen)",
      "categorias": [
        {
          "value": "all",
          "label": "Todas (Examen Definitivo)"
        },
        {
          "value": "teoria_base",
          "label": "Guía Base (Depurada)"
        },
        {
          "value": "python_practica",
          "label": "Taller: Python"
        },
        {
          "value": "analisis_residuos",
          "label": "Análisis y Residuos"
        },
        {
          "value": "extrapolacion",
          "label": "Extrapolación"
        },
        {
          "value": "metricas",
          "label": "Métricas Lin. Simp."
        },
        {
          "value": "pipeline",
          "label": "Pipeline (Scikit)"
        },
        {
          "value": "eda",
          "label": "EDA y Exploración"
        },
        {
          "value": "polinomial",
          "label": "Polinomial/Overfitting"
        },
        {
          "value": "comparativa",
          "label": "Comparativa"
        },
        {
          "value": "costo_mle",
          "label": "Reg. Log: Costo y MLE"
        },
        {
          "value": "metricas_roc",
          "label": "Reg. Log: ROC y AUC"
        },
        {
          "value": "preprocesamiento",
          "label": "Preprocesamiento (OHE/Scaler)"
        },
        {
          "value": "teoria_extra",
          "label": "Preguntas de Refuerzo"
        },
        {
          "value": "bookmarked",
          "label": "Solo Preguntas Marcadas"
        }
      ],
      "preguntas": [
        {
          "id": "2fc7f0f5-4dd3-4cf7-9028-387a361941d2",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El informe Lighthill (1973) fue determinante para el Primer Invierno de la IA. ¿Qué concluyó ese informe?",
          "options": [
            "Que la IA había cumplido todas sus promesas y merecía mayor financiamiento para la siguiente década.",
            "Que la IA era una amenaza para la seguridad nacional y debía regularse urgentemente.",
            "Que la IA no había cumplido ninguna de sus promesas fundamentales, justificando el recorte masivo de fondos.",
            "Que las redes neuronales eran superiores a los sistemas expertos y merecían toda la inversión futura."
          ],
          "correct": 2,
          "feedback": "Correcto. Lighthill concluyó que el campo había sobreprometido y subentregado. Su informe fue la justificación técnica para el recorte masivo de financiamiento que desencadenó el Primer Invierno. James Lighthill, matemático contratado por el gobierno británico, evaluó el progreso de la IA y concluyó que los avances reales eran muy modestos en comparación con las promesas realizadas. Su informe justificó el recorte casi total del financiamiento gubernamental en el Reino Unido y envió una señal negativa a otros organismos financiadores, incluyendo DARPA en EE.UU. Es el ejemplo clásico del ciclo: promesas exageradas → expectativas no cumplidas → invierno."
        },
        {
          "id": "ee16083d-8557-4c77-8040-58565a77e8dc",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "GPT-3 (2020) introdujo el concepto de \"few-shot learning\". ¿Qué significa exactamente en el contexto de los LLMs?",
          "options": [
            "El modelo puede realizar una nueva tarea viéndola demostrada solo 3 o 5 veces dentro del prompt, sin modificar sus pesos.",
            "El modelo selecciona automáticamente las 3 características más importantes de cada dataset sin preprocesamiento.",
            "El modelo aprende una nueva tarea entrenándose con solo 3 a 5 ejemplos etiquetados durante varios días de re-entrenamiento.",
            "El modelo genera pocos tokens de respuesta para ahorrar cómputo en tareas sencillas de clasificación."
          ],
          "correct": 0,
          "feedback": "Correcto. Few-shot learning en LLMs ocurre completamente en el prompt (in-context learning): los ejemplos se incluyen en el texto de entrada y el modelo infiere la tarea sin ningún cambio en sus parámetros. Few-shot learning en LLMs es radicalmente diferente al fine-tuning tradicional: no hay re-entrenamiento, no se modifican los pesos del modelo. Se incluyen 3-5 ejemplos de la tarea directamente en el prompt y el modelo generaliza el patrón para resolver el nuevo caso. Esto es posible porque el pre-entrenamiento masivo da al modelo suficiente comprensión del lenguaje y los patrones para inferir la tarea a partir de muy pocos ejemplos."
        },
        {
          "id": "468a5a8f-b5f6-494e-8244-6763e9ef8f07",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "Un \"token\" es la unidad mínima de procesamiento en un LLM. ¿Cuál de las siguientes describe mejor qué es un token?",
          "options": [
            "Un token es un símbolo binario (0 o 1) que representa el estado de activación de una neurona.",
            "Un token es siempre una palabra completa del diccionario en el idioma de entrenamiento.",
            "Un token puede ser una palabra completa, una parte de palabra o un símbolo; GPT-4 maneja aproximadamente 100.000 tokens distintos.",
            "Un token es una oración completa codificada como un vector de alta dimensión."
          ],
          "correct": 2,
          "feedback": "Correcto. La tokenización por subpalabras (BPE, WordPiece) es el estándar en LLMs modernos. Permite representar cualquier texto con un vocabulario finito de tokens. La tokenización no se hace palabra por palabra. Los LLMs modernos usan tokenización por subpalabras (como Byte-Pair Encoding): palabras frecuentes se representan como un solo token, pero palabras raras se dividen en subunidades. Por ejemplo, \"subcategorización\" podría tokenizarse en varias partes. GPT-4 tiene aproximadamente 100.000 tokens en su vocabulario, lo que le permite manejar cualquier texto en múltiples idiomas."
        },
        {
          "id": "d05686d7-d08b-478f-bb6c-65e34ab5645d",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La victoria de AlexNet en ImageNet (2012) se considera el inicio de la revolución del Deep Learning. ¿Cuál de los tres factores que la hicieron posible describe CORRECTAMENTE el rol de las GPUs?",
          "options": [
            "Las GPUs reemplazaron el backpropagation por un nuevo algoritmo de optimización más eficiente.",
            "Las GPUs permitieron almacenar datasets de 14 millones de imágenes en memoria de alta velocidad.",
            "Las GPUs eliminaron la necesidad de datos etiquetados al generar ejemplos sintéticos automáticamente.",
            "Las GPUs aceleraron el entrenamiento hasta 100 veces respecto a las CPUs al ejecutar miles de operaciones matriciales en paralelo."
          ],
          "correct": 3,
          "feedback": "Correcto. El paralelismo masivo de las GPUs (miles de núcleos) es ideal para las multiplicaciones de matrices que dominan el entrenamiento de redes neuronales. Sin GPUs, entrenar AlexNet habría sido imprácticamente lento. El entrenamiento de redes profundas implica millones de multiplicaciones de matrices simultáneas. Las CPUs ejecutan operaciones secuencialmente; las GPUs tienen miles de núcleos diseñados para paralelismo masivo. NVIDIA lanzó CUDA en 2007, habilitando el uso de GPUs para cómputo científico general. AlexNet se entrenó en dos GPUs NVIDIA GTX 580 en una semana; en CPU habría tardado meses. Las GPUs fueron el acelerador que desbloqueó el Deep Learning a escala."
        },
        {
          "id": "634cefcf-7489-4f7a-8e26-7f472cbcf81a",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El paper \"Attention is All You Need\" (Google Brain, 2017) reemplazó las RNNs como arquitectura dominante para NLP. ¿Cuál es la ventaja central del mecanismo de atención sobre las RNNs?",
          "options": [
            "Las RNNs no pueden procesar texto en español; los Transformers sí lo hacen gracias al mecanismo de atención multilingüe.",
            "El mecanismo de atención permite procesar toda la secuencia en paralelo y ponderar dinámicamente la relevancia de cada parte, en lugar de procesarla token por token en orden.",
            "Los Transformers no requieren datos de entrenamiento porque generan su propio conocimiento mediante atención recursiva.",
            "El mecanismo de atención reduce el número de parámetros necesarios al reutilizar pesos entre todas las capas del modelo."
          ],
          "correct": 1,
          "feedback": "Correcto. El paralelismo y la atención global son las dos ventajas clave: velocidad de entrenamiento y capacidad de capturar dependencias a largas distancias sin degradación. Las RNNs procesan la secuencia de izquierda a derecha manteniendo un estado oculto que resume el contexto anterior — lento y con pérdida de información a largas distancias. El mecanismo de atención calcula para cada token de salida un peso de relevancia sobre todos los tokens de entrada simultáneamente, permitiendo capturar dependencias a cualquier distancia y procesar toda la secuencia en paralelo. Este fue el salto que hizo posibles los LLMs modernos."
        },
        {
          "id": "d9c0afeb-9768-43a4-9a99-d1478d7381b4",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "MYCIN (1972) y DENDRAL (1965) son dos sistemas expertos históricos. ¿En qué se diferencia su dominio de aplicación?",
          "options": [
            "MYCIN procesaba datos financieros; DENDRAL optimizaba rutas de transporte logístico.",
            "MYCIN diagnosticaba infecciones bacterianas en sangre; DENDRAL identificaba estructuras moleculares en química orgánica.",
            "MYCIN clasificaba imágenes de rayos X; DENDRAL analizaba señales de audio de pacientes.",
            "MYCIN traducía textos médicos al español; DENDRAL generaba código Python para experimentos."
          ],
          "correct": 1,
          "feedback": "Correcto. DENDRAL (1965) fue el pionero en química; MYCIN (1972) lo fue en medicina. Ambos demostraron la viabilidad de la IA simbólica en dominios científicos de alta especialización. DENDRAL (Stanford, 1965) fue el primer sistema experto de la historia: analizaba datos de espectrometría de masas para identificar estructuras moleculares en química orgánica. MYCIN (Stanford, 1972) se enfocó en medicina: diagnosticaba infecciones bacterianas en sangre y recomendaba antibióticos. Ambos demostraron que la IA simbólica podía alcanzar niveles de especialista en dominios cerrados y bien definidos."
        },
        {
          "id": "5f5d653d-cdab-4cba-9679-f200f8a86bed",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La IA Simbólica (GOFAI) tiene una propiedad que la distingue claramente del Machine Learning. ¿Cuál es?",
          "options": [
            "Aprende automáticamente de grandes volúmenes de datos no etiquetados mediante redes profundas.",
            "Genera representaciones latentes del conocimiento mediante autoencoders variacionales.",
            "El conocimiento es codificado explícitamente por expertos humanos en forma de reglas; el sistema no aprende de datos.",
            "Utiliza GPUs masivas para paralelizar el entrenamiento y reducir el tiempo de convergencia."
          ],
          "correct": 2,
          "feedback": "Correcto. Esta es la diferencia fundamental: en IA simbólica el conocimiento es explícito y estático; en ML es implícito y emerge del entrenamiento con datos. En la IA simbólica, el conocimiento no emerge de los datos — lo programa directamente un experto humano en forma de reglas IF-THEN explícitas. Esto hace al sistema transparente (puedes leer las reglas) pero estático (si el dominio cambia, hay que reprogramar). En contraste, en ML el algoritmo extrae patrones estadísticos de ejemplos, sin que nadie le diga qué patrones buscar."
        },
        {
          "id": "f2891903-fb29-4298-beb6-5a06b9a8aa8d",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El problema XOR fue central en el Primer Invierno de la IA. ¿Por qué una red neuronal de una sola capa (perceptrón) no puede aprender XOR?",
          "options": [
            "Porque XOR requiere más de 1.000 ejemplos de entrenamiento y en 1969 no había tantos datos disponibles.",
            "Porque el perceptrón solo acepta entradas binarias y XOR produce salidas decimales.",
            "Porque XOR es una función no separable linealmente: ninguna línea recta puede separar correctamente sus cuatro casos.",
            "Porque el hardware de 1969 no tenía suficiente memoria RAM para almacenar la tabla de verdad de XOR."
          ],
          "correct": 2,
          "feedback": "Correcto. Esta es la limitación matemática fundamental. Un perceptrón de una capa solo puede aprender funciones linealmente separables. XOR no lo es, lo que requiere múltiples capas y no-linealidades. Una red de una capa traza una única frontera de decisión lineal (una línea recta en 2D). XOR requiere dos regiones separadas que no pueden delimitarse con una sola línea: los puntos (0,1) y (1,0) producen 1, mientras (0,0) y (1,1) producen 0, y no existe ninguna recta que los separe correctamente. La solución — múltiples capas con funciones de activación no lineales + backpropagation — no se popularizó hasta 1986."
        },
        {
          "id": "deb3fd34-bf7b-45d2-9313-9f27a6e629bf",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El argumento del Cuarto Chino de John Searle (1980) cuestiona la validez del Test de Turing. ¿Qué implica para la evaluación de la inteligencia artificial?",
          "options": [
            "Que imitar correctamente un comportamiento inteligente no implica que el sistema comprenda lo que está haciendo.",
            "Que ningún sistema informático puede superar el Test de Turing porque las computadoras solo procesan números.",
            "Que el Test de Turing es válido únicamente para idiomas con escritura fonética.",
            "Que la IA solo puede considerarse inteligente si fue programada por un hablante nativo de ese idioma."
          ],
          "correct": 0,
          "feedback": "Correcto. El Cuarto Chino muestra que la manipulación perfecta de símbolos (sintaxis) puede coexistir con ausencia total de comprensión (semántica). Un sistema puede pasar el Test de Turing sin entender nada de lo que procesa. Searle imagina a alguien encerrado en un cuarto que recibe preguntas en chino, consulta un manual de reglas y responde en chino perfectamente — sin entender una sola palabra. La analogía sugiere que un sistema puede pasar el Test de Turing mediante operaciones sintácticas (manipulación de símbolos) sin comprensión semántica (significado real). Imitar comportamiento inteligente no equivale a poseer inteligencia genuina."
        },
        {
          "id": "75f2f5d3-82b7-4e1a-8d63-a48e5a258227",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El Logic Theorist (1955) demostró 38 de 52 teoremas del Principia Mathematica. ¿Cuál es el significado histórico de ese logro?",
          "options": [
            "Demostró que las redes neuronales podían aprender lógica matemática sin datos de entrenamiento.",
            "Demostró que las computadoras podían superar a los humanos en cualquier tarea cognitiva.",
            "Fue la primera demostración de que una máquina podía razonar formalmente y resolver problemas simbólicos.",
            "Fue el primer sistema capaz de traducir lenguaje natural a código ejecutable."
          ],
          "correct": 2,
          "feedback": "Correcto. El Logic Theorist rompió la suposición de que el razonamiento lógico era exclusivamente humano, estableciendo la viabilidad de la IA simbólica como campo de investigación. Antes del Logic Theorist, se asumía que el razonamiento matemático era exclusivamente humano. Newell y Simon demostraron que una máquina podía deducir teoremas a partir de axiomas usando manipulación simbólica formal, incluso encontrando algunas pruebas más elegantes que las originales de Russell y Whitehead. Esto estableció la IA simbólica como paradigma dominante durante las siguientes tres décadas."
        },
        {
          "id": "ce178556-56b8-4891-bc46-55a373e7c25b",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "ChatGPT no es simplemente GPT-3. ¿Qué proceso adicional distingue a ChatGPT de un modelo base pre-entrenado?",
          "options": [
            "ChatGPT conecta el modelo base a bases de datos en tiempo real para responder preguntas con información actualizada.",
            "ChatGPT usa un sistema de reglas IF-THEN superpuesto al modelo base para filtrar respuestas inapropiadas.",
            "ChatGPT aplica RLHF (aprendizaje por refuerzo con feedback humano) para alinear las respuestas del modelo con las preferencias de los evaluadores humanos.",
            "ChatGPT tiene más parámetros que GPT-3 gracias a un proceso de escalado adicional con hardware más potente."
          ],
          "correct": 2,
          "feedback": "Correcto. RLHF es el proceso que convierte un predictor de texto en un asistente útil y seguro. Los evaluadores humanos califican respuestas, entrenando un modelo de recompensa que guía el fine-tuning final. Un modelo base pre-entrenado predice texto estadísticamente — puede ser útil pero también peligroso o incoherente como asistente. RLHF añade tres pasos: (1) evaluadores humanos califican pares de respuestas del modelo; (2) esas calificaciones entrenan un modelo de recompensa; (3) el LLM se optimiza con aprendizaje por refuerzo para maximizar esa recompensa. El resultado es un modelo alineado: útil, honesto y menos propenso a generar contenido dañino."
        },
        {
          "id": "d5fce9cd-9f0e-453d-85c7-2e36d7bf79de",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La neurona artificial de McCulloch y Pitts (1943) tiene tres componentes principales en su operación. ¿Cuál de las siguientes describe correctamente esos tres pasos?",
          "options": [
            "Genera datos sintéticos, los clasifica y envía el resultado a una capa de memoria.",
            "Recibe señales de entrada ponderadas, las suma y las compara con un umbral para decidir si dispara o no.",
            "Descarga un gradiente hacia atrás, ajusta pesos y actualiza su umbral automáticamente.",
            "Tokeniza texto de entrada, calcula atención y predice el siguiente símbolo en la secuencia."
          ],
          "correct": 1,
          "feedback": "Correcto. Entrada ponderada → suma → comparación con umbral → disparo (1) o silencio (0). Ese es el modelo completo de McCulloch-Pitts, que sigue siendo la intuición base de las neuronas en redes profundas actuales. El modelo de McCulloch-Pitts funciona así: cada señal de entrada (x₁, x₂…) se multiplica por un peso (w₁, w₂…), los productos se suman, y esa suma se compara con un umbral θ. Si la suma supera el umbral, la neurona \"dispara\" (salida = 1); si no, permanece inactiva (salida = 0). Es una simplificación matemática de cómo funciona una neurona biológica y es la base conceptual de todas las redes neuronales modernas."
        },
        {
          "id": "8abe218e-9475-4592-a242-7e778dacd893",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La Conferencia de Dartmouth (1956) es el evento fundacional de la IA como disciplina. ¿Cuál de los siguientes participantes acuñó el término \"Artificial Intelligence\" en ese evento?",
          "options": [
            "Claude Shannon",
            "John McCarthy",
            "Marvin Minsky",
            "Alan Turing"
          ],
          "correct": 1,
          "feedback": "Correcto. John McCarthy organizó la conferencia de Dartmouth en 1956 y acuñó el término \"Artificial Intelligence\", estableciendo el nombre del campo que ha perdurado hasta hoy. John McCarthy organizó el verano de investigación en Dartmouth College y acuñó el término \"Artificial Intelligence\". Otros participantes clave fueron Marvin Minsky (pionero de redes neuronales), Claude Shannon (padre de la teoría de la información) y Newell & Simon (creadores del Logic Theorist). Dartmouth reunió por primera vez a investigadores de disciplinas distintas bajo un objetivo común: construir máquinas inteligentes."
        },
        {
          "id": "2289a35c-f1a4-43ac-8dde-75550436fe6b",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El Test de Turing (1950) propone una forma operacional de evaluar la inteligencia de una máquina. ¿En qué consiste exactamente?",
          "options": [
            "La máquina debe resolver ecuaciones diferenciales más rápido que un matemático en menos de 10 segundos.",
            "Un juez humano conversa por escrito con una máquina y un humano; si no puede distinguir cuál es cuál, la máquina supera el test.",
            "Un comité de cinco filósofos evalúa si la máquina expresa emociones genuinas en una entrevista oral.",
            "La máquina debe demostrar 38 de 52 teoremas matemáticos del Principia Mathematica sin asistencia externa."
          ],
          "correct": 1,
          "feedback": "Correcto. El Juego de Imitación evalúa si una máquina puede imitar el comportamiento conversacional humano de forma indistinguible. Nótese que superar el test prueba imitación, no inteligencia genuina — crítica que formuló Searle en 1980. Turing reformuló la pregunta filosófica \"¿pueden las máquinas pensar?\" en algo medible: ¿puede una máquina imitar el comportamiento humano en una conversación escrita tan bien que un observador no pueda distinguirla de un humano real? Este es el Juego de Imitación. La crítica posterior de Searle (Cuarto Chino, 1980) señala que superar el test prueba imitación del comportamiento, no comprensión genuina."
        },
        {
          "id": "1a3f1a13-8e87-42c1-a995-35a694deb529",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "Un sistema experto como MYCIN logró precisión de especialista en diagnóstico bacteriano. Sin embargo, ¿cuál fue su limitación estructural más importante?",
          "options": [
            "Requería datos de laboratorio que en la época solo existían en tres hospitales de EE.UU.",
            "No podía actualizar sus reglas automáticamente cuando surgían nuevas bacterias o tratamientos.",
            "No tenía interfaz gráfica, lo que impedía su adopción por médicos no técnicos.",
            "Era demasiado lento para usarse en hospitales con muchos pacientes simultáneos."
          ],
          "correct": 1,
          "feedback": "Correcto. La incapacidad de aprender y adaptarse es la limitación definitoria de la IA simbólica. El conocimiento estático es su talón de Aquiles en dominios dinámicos. La rigidez es la limitación estructural de todos los sistemas expertos: el conocimiento está congelado en las reglas que el experto codificó en un momento dado. Cuando aparecía una nueva bacteria resistente a antibióticos, MYCIN no podía aprenderlo — un especialista debía reescribir manualmente las reglas afectadas. Escalar ese mantenimiento a cientos de reglas en dominios dinámicos resultó económicamente insostenible."
        },
        {
          "id": "5c918e9f-ddaa-4f47-aaa2-e16dcce6ea75",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "Rumelhart, Hinton y Williams popularizaron la retropropagación en 1986. ¿Qué problema fundamental resolvió este algoritmo?",
          "options": [
            "Permitió que las redes neuronales generaran imágenes fotorrealistas sin datos de entrenamiento etiquetados.",
            "Resolvió cómo ajustar los pesos de todas las capas de una red propagando el error desde la salida hacia atrás, capa por capa.",
            "Permitió que los sistemas expertos aprendieran nuevas reglas automáticamente de los casos históricos.",
            "Eliminó la necesidad de usar hardware especializado al optimizar el uso de memoria RAM."
          ],
          "correct": 1,
          "feedback": "Correcto. Backpropagation usa la regla de la cadena para calcular el gradiente de cada peso respecto al error total, permitiendo actualizar todos los pesos de una red profunda de forma eficiente. Antes de backpropagation, no había forma eficiente de entrenar redes con más de una capa: no se sabía cómo \"culpar\" a cada peso de las capas intermedias por el error final. Backpropagation calcula el gradiente del error respecto a cada peso usando la regla de la cadena del cálculo diferencial, propagando la señal de error desde la capa de salida hacia las capas de entrada. Esto hizo posible entrenar redes profundas de forma eficiente y sigue siendo el algoritmo de entrenamiento estándar hoy."
        },
        {
          "id": "a3f4cfd6-b89e-4642-9a60-db896b7aa378",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "ResNet (Microsoft Research, 2015) resolvió un problema crítico del entrenamiento de redes muy profundas. ¿Cuál era ese problema y cómo lo resolvió?",
          "options": [
            "El sobreajuste en redes con pocas capas; ResNet lo resolvió añadiendo capas de Dropout entre cada bloque convolucional.",
            "La falta de datos etiquetados; ResNet lo resolvió generando ejemplos sintéticos mediante data augmentation automático.",
            "El gradiente que desaparece en redes profundas; ResNet lo resolvió con conexiones residuales que permiten atajos entre capas.",
            "El alto costo de entrenamiento; ResNet lo resolvió distribuyendo el cómputo entre miles de GPUs en paralelo."
          ],
          "correct": 2,
          "feedback": "Correcto. Las conexiones residuales crean \"autopistas\" para el gradiente, permitiendo que fluya directamente hacia capas anteriores sin degradarse multiplicativamente. Esto desbloqueó redes de cientos de capas. En redes muy profundas, el gradiente calculado por backpropagation se vuelve cada vez más pequeño a medida que se propaga hacia las capas iniciales — el gradiente \"desaparece\" y las capas tempranas dejan de aprender. ResNet introduce conexiones residuales: atajos que saltan una o más capas, permitiendo que el gradiente fluya directamente hacia capas anteriores sin degradarse. Esto permitió entrenar redes de 152 capas con error del 3.57% en ImageNet, superando la precisión humana estimada en 5.1%."
        },
        {
          "id": "1a2b947a-c3b1-4c37-94a0-91eaf0320d06",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La idea central de un Large Language Model (LLM) es aparentemente simple. ¿Cuál es esa idea?",
          "options": [
            "Un LLM es un sistema experto que codifica todas las reglas gramaticales de un idioma en forma de tablas de decisión.",
            "Un LLM es un modelo que aprende a predecir el siguiente token en una secuencia, entrenado con cientos de miles de millones de tokens de texto.",
            "Un LLM es un motor de búsqueda semántico que recupera documentos relevantes de una base de datos indexada.",
            "Un LLM es una red neuronal que clasifica textos en categorías predefinidas usando aprendizaje supervisado con etiquetas humanas."
          ],
          "correct": 1,
          "feedback": "Correcto. Esta tarea simple — predecir el siguiente token — entrenada a escala masiva produce modelos con capacidades emergentes sorprendentes que nadie programó explícitamente. La tarea de entrenamiento de un LLM es conceptualmente simple: dado un contexto, predecir el siguiente token más probable. Al aplicar esta tarea a escala masiva — cientos de miles de millones de tokens de libros, Wikipedia, código y web — el modelo aprende estadísticas del lenguaje tan ricas que emergen capacidades de razonamiento, traducción y generación de código que nadie programó explícitamente."
        },
        {
          "id": "a9c20d04-9ae8-4a92-a7ee-35a2905bc5b6",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En 1997, Deep Blue venció a Garry Kasparov en ajedrez. ¿Cómo logró esto y qué limitación tiene respecto al Machine Learning moderno?",
          "options": [
            "Usó una red neuronal profunda entrenada con millones de partidas; su limitación es que solo juega ajedrez.",
            "Aprendió de forma autónoma jugando millones de partidas contra sí mismo; su limitación es el alto costo computacional.",
            "Usó un sistema de reglas IF-THEN generado automáticamente; su limitación es que no puede manejar situaciones nuevas.",
            "Combinó búsqueda por fuerza bruta con bases de datos de aperturas codificadas; su limitación es que no puede transferir ese conocimiento a ningún otro dominio."
          ],
          "correct": 3,
          "feedback": "Correcto. Deep Blue era esencialmente IA simbólica + fuerza bruta computacional. Podía evaluar 200 millones de posiciones por segundo pero era absolutamente inútil fuera del tablero de ajedrez. Deep Blue no \"aprendió\" en el sentido moderno: evaluaba hasta 200 millones de posiciones por segundo usando algoritmos de búsqueda (minimax + poda alpha-beta) y consultaba bases de datos de aperturas codificadas por grandes maestros. Fue un hito mediático enorme, pero demostró precisamente la limitación de la IA de la época: rendimiento sobrehumano en una tarea específica, cero transferibilidad a cualquier otro contexto."
        },
        {
          "id": "fe14f904-4a4e-4367-b3dd-5e1ea2522f8c",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La sesión describe un patrón de 5 pasos que se repite en la historia de la IA. ¿Cuál es el orden correcto de ese ciclo?",
          "options": [
            "Investigación silenciosa → Expectativas irreales → Hype → Breakthrough → Invierno",
            "Hype → Expectativas irreales → Invierno → Investigación silenciosa → Breakthrough",
            "Invierno → Hype → Expectativas irreales → Breakthrough → Investigación silenciosa",
            "Breakthrough → Investigación silenciosa → Hype → Expectativas irreales → Invierno"
          ],
          "correct": 1,
          "feedback": "Correcto. El ciclo histórico de la IA sigue un patrón predecible: (1) Hype — promesas exageradas e inversión masiva; (2) Expectativas irreales — plazos imposibles y aplicaciones más allá de lo técnicamente posible; (3) Invierno — financiamiento retirado y campo desprestigiado; (4) Investigación silenciosa — avances reales en laboratorio sin atención mediática; (5) Breakthrough — un resultado concreto que relanza el ciclo. Reconocer en qué fase se encuentra el campo es una habilidad profesional crítica. El ciclo histórico de la IA sigue un patrón predecible: (1) Hype — promesas exageradas e inversión masiva; (2) Expectativas irreales — plazos imposibles y aplicaciones más allá de lo técnicamente posible; (3) Invierno — financiamiento retirado y campo desprestigiado; (4) Investigación silenciosa — avances reales en laboratorio sin atención mediática; (5) Breakthrough — un resultado concreto que relanza el ciclo. Reconocer en qué fase se encuentra el campo es una habilidad profesional crítica."
        },
        {
          "id": "ea97f998-0762-4836-b31f-c228abf4b9bf",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué los modelos de IA preentrenados en EE.UU. o Europa pueden no funcionar bien directamente en problemas agrícolas ecuatorianos como la detección de enfermedades en cacao?",
          "options": [
            "Porque fueron entrenados con datos que no reflejan los cultivos, condiciones climáticas ni patologías locales de Ecuador.",
            "Porque los modelos preentrenados no son compatibles con el sistema operativo Linux utilizado en el país.",
            "Porque la legislación ecuatoriana prohíbe el uso de IA extranjera en el sector agrícola.",
            "Porque Ecuador no tiene acceso a Internet de alta velocidad para ejecutar esos modelos."
          ],
          "correct": 0,
          "feedback": "Correcto. El desajuste entre la distribución de datos de entrenamiento y la distribución real de aplicación es el problema central. Los modelos aprenden los patrones de sus datos; si esos datos no representan el contexto ecuatoriano, el modelo fallará. Un modelo entrenado con datos de cultivos europeos o norteamericanos aprende patrones de esas realidades específicas: sus plagas, sus suelos, sus condiciones climáticas. Al aplicarlo a cacao ecuatoriano, los datos de entrada son distribuciones distintas a las del entrenamiento — el modelo generaliza mal. Esta brecha entre los datos con que se entrenó un modelo y el contexto donde se usa es uno de los problemas centrales de la IA aplicada en Latinoamérica."
        },
        {
          "id": "8343588d-7c64-4368-bb62-26d607b432bd",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En el ejemplo del sistema experto para detección de enfermedades en cacao ecuatoriano, una regla dice: IF hoja.color='amarillo' AND hoja.manchas='negras' AND humedad>80% THEN enfermedad='monilia' (0.90). ¿Qué representa el valor 0.90 al final?",
          "options": [
            "El número de veces que esa regla fue validada por expertos en campo.",
            "El factor de certeza o confianza asociado a esa regla específica.",
            "La probabilidad de que el cultivo muera si no se aplica el tratamiento inmediatamente.",
            "El porcentaje de precisión global del sistema experto en todos sus diagnósticos."
          ],
          "correct": 1,
          "feedback": "Correcto. Los factores de certeza (CF) son valores codificados por el experto que indican cuánta confianza tiene el sistema en esa conclusión cuando se cumplen las condiciones. No son probabilidades estadísticas formales. En los sistemas expertos de la era simbólica, los factores de certeza (CF) representaban la confianza del sistema en una conclusión dado que las condiciones de la regla se cumplen. Un CF de 0.90 indica alta confianza — no una probabilidad estadística formal, sino un valor de confianza codificado por el experto. MYCIN fue pionero en usar estos factores para manejar la incertidumbre médica sin recurrir a probabilidades bayesianas completas."
        },
        {
          "id": "96124024-f831-4663-a519-2c472957e134",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El Segundo Invierno (1987-1993) fue desencadenado en parte por el colapso de las \"Lisp Machines\". ¿Qué eran y por qué colapsaron?",
          "options": [
            "Eran lenguajes de programación especializados para IA que fueron reemplazados por Python.",
            "Eran computadoras especializadas para ejecutar código LISP y sistemas expertos, que perdieron su ventaja ante las PCs convencionales más baratas.",
            "Eran unidades de memoria de alta capacidad diseñadas específicamente para almacenar bases de conocimiento.",
            "Eran modelos de simulación matemática usados para predecir el comportamiento de sistemas expertos."
          ],
          "correct": 1,
          "feedback": "Correcto. El modelo de negocio de hardware especializado para IA colapsó cuando las PCs convencionales ofrecieron mejor rendimiento a menor costo, eliminando la razón de ser de las Lisp Machines. Las Lisp Machines eran hardware especializado diseñado para ejecutar el lenguaje LISP eficientemente — el lenguaje dominante de la IA simbólica. Empresas como Symbolics y Lisp Machines Inc. vendían estas máquinas a precios muy altos. En 1987, Apple y Digital Equipment Corporation lanzaron PCs convencionales con mejor relación rendimiento/precio. Las Lisp Machines quedaron obsoletas comercialmente de golpe, arrastrando a las empresas que dependían de ese mercado."
        },
        {
          "id": "308ef80b-754b-4367-88d8-301d6eb5e9e6",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál barrera técnica describe correctamente el problema de \"razonamiento causal\" que impide la IA Fuerte?",
          "options": [
            "Los LLMs identifican correlaciones en datos pero no razonan sobre causas y efectos.",
            "Los modelos actuales no pueden procesar textos de más de 100.000 tokens.",
            "Los modelos no tienen acceso a datos del mundo real en tiempo real.",
            "Los modelos no pueden generar texto en más de 50 idiomas simultáneamente."
          ],
          "correct": 0,
          "feedback": "Correcto. El razonamiento causal implica entender que A causa B, no solo que A y B aparecen juntos frecuentemente. El razonamiento causal implica entender que A causa B, no solo que A y B aparecen juntos frecuentemente. Los LLMs actuales fallan en preguntas que requieren inferencia causal genuina."
        },
        {
          "id": "09cf7db2-fae7-4ef0-a81c-0130f4977470",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En el contexto de este curso, la definición de trabajo de IA pone énfasis en:",
          "options": [
            "La fabricación de robots físicos con comportamiento autónomo.",
            "Sistemas expertos que aplican reglas lógicas IF-THEN.",
            "El estudio formal de agentes racionales en entornos complejos.",
            "Algoritmos que aprenden patrones de datos para tomar decisiones o generar contenido."
          ],
          "correct": 3,
          "feedback": "Correcto. La definición de trabajo del curso se centra en Machine Learning como base técnica, orientada a lo que los estudiantes construirán en el semestre. La definición de trabajo del curso se centra en Machine Learning como base técnica, orientada a lo que los estudiantes construirán a lo largo del semestre."
        },
        {
          "id": "25059c75-0976-4fd3-88c3-94678acf98f9",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué relación jerárquica correcta existe entre IA, ML, Deep Learning, NLP y Visión por Computadora?",
          "options": [
            "NLP y Visión contienen a Deep Learning, que contiene a ML, que contiene a IA.",
            "IA contiene a ML, que contiene a Deep Learning, que contiene a NLP y Visión por Computadora.",
            "ML y Deep Learning son lo mismo; NLP y Visión son subcampos independientes de la IA.",
            "Son disciplinas independientes sin relación jerárquica entre sí."
          ],
          "correct": 1,
          "feedback": "Correcto. La jerarquía es: IA ⊃ ML ⊃ Deep Learning ⊃ {NLP, Visión por Computadora}. Cada nivel es un subconjunto del anterior. La jerarquía correcta es: IA ⊃ ML ⊃ Deep Learning ⊃ {NLP, Visión por Computadora}. Cada nivel es un subconjunto del anterior, especializado en tipos de datos o técnicas específicas."
        },
        {
          "id": "18804298-e00e-438e-aaf1-4d4f9e3c384d",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué descubrió GNoME (Google, 2023)?",
          "options": [
            "Los pesos óptimos para entrenar modelos de lenguaje con billones de parámetros.",
            "Un método para predecir el comportamiento de vehículos autónomos en tiempo real.",
            "2.2 millones de nuevos cristales estables con potencial para materiales avanzados.",
            "Un sistema de traducción automática que supera a humanos en todos los idiomas."
          ],
          "correct": 2,
          "feedback": "Correcto. GNoME usó aprendizaje profundo sobre química computacional para descubrir 2.2 millones de cristales estables, publicado en Nature en noviembre 2023. GNoME (Graph Networks for Materials Exploration) usó aprendizaje profundo sobre química computacional para descubrir 2.2 millones de cristales estables, publicado en Nature en noviembre 2023."
        },
        {
          "id": "b660d53e-259c-4493-b6cc-90aa8168ad69",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de los 4 componentes de un agente es responsable de decidir qué acción tomar?",
          "options": [
            "Las percepciones.",
            "La función agente.",
            "Los actuadores.",
            "Los sensores."
          ],
          "correct": 1,
          "feedback": "Correcto. La función agente es el \"cerebro\": dado el historial de percepciones, decide la mejor acción. En ML, esta función es el modelo entrenado. La función agente es el \"cerebro\" del sistema: dado el historial de percepciones, decide la mejor acción. En ML, esta función corresponde al modelo entrenado."
        },
        {
          "id": "b6aa51cd-900c-457d-aa11-0f4279f0b5cb",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de las siguientes es una tarea de clasificación de texto?",
          "options": [
            "Generar el siguiente párrafo de una novela dado un contexto inicial.",
            "Resumir un documento legal extenso en tres párrafos.",
            "Traducir un artículo del español al inglés automáticamente.",
            "Determinar si una reseña de producto tiene sentimiento positivo o negativo."
          ],
          "correct": 3,
          "feedback": "Correcto. Clasificación de texto asigna una categoría a un texto completo. El análisis de sentimientos (positivo/negativo) es su aplicación más conocida. Clasificación de texto asigna una categoría a un texto completo. El análisis de sentimientos (positivo/negativo) es su aplicación más conocida."
        },
        {
          "id": "2c16cc5d-164a-4ab4-a7e9-aafabf8b5860",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En el modelo de agente racional de Russell y Norvig, los actuadores son:",
          "options": [
            "Los dispositivos que reciben información del entorno como cámaras o micrófonos.",
            "Los criterios que el agente maximiza para elegir la mejor acción.",
            "Las representaciones internas del estado del entorno en un instante dado.",
            "Los mecanismos que ejecutan la acción en el entorno (pantalla, motor, respuesta de texto)."
          ],
          "correct": 3,
          "feedback": "Correcto. Los actuadores ejecutan la acción decidida por la función agente: generar texto, mover un motor, mostrar una recomendación o encender una alarma. Los actuadores ejecutan la acción decidida por la función agente: generar texto, mover un motor, mostrar una recomendación o encender una alarma."
        },
        {
          "id": "f38cfac3-140e-4afd-8158-e49f6a79ac2c",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de las siguientes afirmaciones sobre la IA Fuerte es correcta en 2026?",
          "options": [
            "Existe solo en aplicaciones militares clasificadas.",
            "Existe en forma de prototipos experimentales en OpenAI y DeepMind.",
            "No existe — es el objetivo a largo plazo de varias organizaciones de investigación.",
            "Existe en GPT-5 y modelos equivalentes lanzados en 2025."
          ],
          "correct": 2,
          "feedback": "Correcto. La IA Fuerte no existe en 2026. Es el objetivo declarado de OpenAI, DeepMind, Anthropic y Meta, pero no se ha logrado. La IA Fuerte no existe en 2026. Es el objetivo declarado de OpenAI, DeepMind, Anthropic y Meta, pero no se ha logrado y no hay consenso sobre cuándo o si se logrará."
        },
        {
          "id": "76c32ec7-ea80-4cf7-9cd7-c0237435f245",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué es un embedding en el contexto del NLP?",
          "options": [
            "La capa de salida del modelo que genera el texto final de respuesta.",
            "El proceso de dividir un texto en oraciones para facilitar su procesamiento.",
            "Un archivo comprimido que almacena el vocabulario del modelo de lenguaje.",
            "Una representación numérica (vector) de una palabra en un espacio de alta dimensión donde palabras similares quedan cercanas."
          ],
          "correct": 3,
          "feedback": "Correcto. Un embedding convierte palabras en vectores numéricos. \"Rey\" y \"reina\" quedan matemáticamente más cerca que \"rey\" y \"manzana\". Sin embeddings, el modelo no puede operar con lenguaje. Un embedding convierte palabras en vectores numéricos en un espacio de alta dimensión. Palabras con significado similar quedan matemáticamente cercanas — \"rey\" y \"reina\" están más cerca que \"rey\" y \"manzana\"."
        },
        {
          "id": "dcb76f19-4d14-4bcc-930d-ce7c09437535",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "NLP y Visión por Computadora tienen en común que ambos son:",
          "options": [
            "Técnicas exclusivas de IA Fuerte que aún no existen en forma práctica.",
            "Subcampos del Deep Learning que procesan distintos tipos de datos (texto/voz vs. imágenes/video).",
            "Subcampos del aprendizaje por refuerzo aplicados a distintos tipos de datos.",
            "Ramas del ML clásico que no usan redes neuronales profundas."
          ],
          "correct": 1,
          "feedback": "Correcto. NLP y Visión son subcampos del Deep Learning: ambos usan redes neuronales profundas pero especializadas para diferentes tipos de datos de entrada (texto/voz vs. imágenes/video). NLP y Visión son subcampos del Deep Learning: ambos usan redes neuronales profundas pero especializadas para diferentes tipos de datos de entrada (texto/voz vs. imágenes/video)."
        },
        {
          "id": "93e722d7-294e-4e06-bdf3-bd39d0448d2a",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué significa que el Deep Learning aprende \"representaciones jerárquicas\"?",
          "options": [
            "Que el modelo aprende primero conceptos simples y luego los olvida para aprender los complejos.",
            "Que cada capa transforma la salida de la anterior en algo más abstracto: bordes → formas → partes → conceptos.",
            "Que el entrenamiento sigue una jerarquía de autoridad entre los ingenieros del equipo.",
            "Que el modelo organiza los datos en una base de datos relacional con tablas anidadas."
          ],
          "correct": 1,
          "feedback": "Correcto. Las capas de una red profunda aprenden en cadena: Capa 1 detecta bordes, Capa 2 formas, Capa N conceptos completos como \"cara\" o \"auto\". Las capas de una red profunda aprenden en cadena: Capa 1 detecta bordes, Capa 2 combina bordes en formas, Capa N combina formas en conceptos completos como \"cara\" o \"auto\"."
        },
        {
          "id": "90057204-67e7-4316-a1e4-0bcc9b3614af",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la diferencia fundamental entre la IA Simbólica y el Machine Learning?",
          "options": [
            "ML es más antiguo que la IA Simbólica y surgió en los años 50.",
            "La IA Simbólica usa redes neuronales mientras que ML usa árboles de decisión.",
            "La IA Simbólica requiere GPUs mientras que ML puede correr en CPU estándar.",
            "En IA Simbólica el humano programa las reglas; en ML el algoritmo las descubre de los datos."
          ],
          "correct": 3,
          "feedback": "Correcto. La distinción clave es quién genera el conocimiento: en IA Simbólica, reglas IF-THEN escritas por un experto; en ML, patrones aprendidos automáticamente de datos. La distinción clave es quién genera el conocimiento: en IA Simbólica, reglas IF-THEN escritas por un experto humano; en ML, patrones aprendidos automáticamente de datos."
        },
        {
          "id": "32005cff-1b69-46af-bd7e-41982bb4d099",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿En qué contexto es más apropiado usar la definición operativa de IA del EU AI Act?",
          "options": [
            "Al seleccionar el algoritmo de aprendizaje automático más eficiente.",
            "Al diseñar arquitecturas de redes neuronales profundas.",
            "Al publicar resultados de investigación científica sobre agentes.",
            "En contratos, auditorías y cumplimiento regulatorio."
          ],
          "correct": 3,
          "feedback": "Correcto. La definición del EU AI Act (2024) es de naturaleza legal: cualquier sistema que realiza lo que un humano haría, sin importar la técnica usada. La definición del EU AI Act (2024) es de naturaleza legal y es la definición aplicable en contextos regulatorios, contratos y auditorías."
        },
        {
          "id": "32a0cfd4-6875-46bc-92a6-220bbc0e42a8",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de los siguientes sistemas es un ejemplo de IA Débil en funcionamiento en 2026?",
          "options": [
            "Un sistema capaz de aprender cualquier dominio nuevo sin re-entrenamiento.",
            "Un sistema de recomendación de películas que solo sugiere contenido similar al visto.",
            "Un sistema que se automodifica y supera a los humanos en todas las tareas cognitivas.",
            "Un sistema que razona en cualquier dominio con comprensión genuina del significado."
          ],
          "correct": 1,
          "feedback": "Correcto. Un sistema de recomendación tiene una sola función y es completamente inútil fuera de ese dominio: es IA Débil. Un sistema de recomendación tiene una sola función (recomendar contenido similar) y es inútil fuera de ese dominio: es IA Débil, el único tipo de IA real en 2026."
        },
        {
          "id": "5dc24063-fea5-4caa-8ed2-77c217bb1c76",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué GPT-4, siendo capaz en muchos dominios del lenguaje, sigue clasificando como IA Débil?",
          "options": [
            "Porque no puede generar imágenes ni audio.",
            "Porque fue lanzado antes de 2024 y la IA Fuerte aún no existía.",
            "Porque no comprende lo que produce — predice el siguiente token más probable.",
            "Porque requiere conexión a internet para funcionar."
          ],
          "correct": 2,
          "feedback": "Correcto. La IA Fuerte requiere comprensión real (semántica). GPT-4 manipula símbolos estadísticamente sin significado real. La IA Fuerte requiere comprensión real (semántica). GPT-4 predice tokens estadísticamente sin significado real — es IA Débil aunque opere en múltiples subdominios del lenguaje."
        },
        {
          "id": "4cce34b5-99b4-408e-963f-2766637df60c",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de las siguientes definiciones de IA fue propuesta por John McCarthy en 1956?",
          "options": [
            "El estudio de agentes que reciben percepciones del entorno y ejecutan acciones.",
            "Sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.",
            "Algoritmos que aprenden patrones de datos para tomar decisiones o generar contenido.",
            "La ciencia e ingeniería de fabricar máquinas inteligentes."
          ],
          "correct": 3,
          "feedback": "Correcto. McCarthy acuñó el término \"Inteligencia Artificial\" en 1956 con énfasis en la fabricación e ingeniería, sin definir formalmente qué significa \"inteligente\". McCarthy acuñó el término \"Inteligencia Artificial\" en 1956 con énfasis en la fabricación e ingeniería, sin definir formalmente qué significa \"inteligente\"."
        },
        {
          "id": "15906df0-19f2-4ec7-b00d-f423956c1415",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "El Transformer, arquitectura base del NLP moderno, fue introducido en:",
          "options": [
            "2012, con el paper de AlexNet sobre redes convolucionales.",
            "2015, con el paper de ResNet sobre redes residuales.",
            "2017, con el paper \"Attention is All You Need\".",
            "2020, con el lanzamiento de GPT-3 por OpenAI."
          ],
          "correct": 2,
          "feedback": "Correcto. El Transformer fue propuesto por Vaswani et al. en 2017 en \"Attention is All You Need\". BERT (2018) y GPT son sus derivados más conocidos. El Transformer fue propuesto por Vaswani et al. en 2017 en el paper \"Attention is All You Need\". BERT (2018) y GPT son sus derivados más conocidos."
        },
        {
          "id": "6263cd4e-16c2-49dd-9ef7-96ccddec8b33",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es el criterio técnico correcto para identificar que un sistema es IA Débil?",
          "options": [
            "Requiere supervisión humana constante para funcionar correctamente.",
            "Tiene capacidad de razonamiento inferior a la de un humano promedio.",
            "Fue desarrollado antes del año 2010.",
            "No puede hacer nada útil fuera del dominio para el que fue entrenado."
          ],
          "correct": 3,
          "feedback": "Correcto. El criterio definitorio de la IA Débil (Narrow AI) es la especificidad de dominio: fuera de su tarea específica, es completamente inútil. El criterio definitorio de la IA Débil (Narrow AI) es la especificidad de dominio: fuera de su tarea específica es completamente inútil, independientemente de su rendimiento dentro de ese dominio."
        },
        {
          "id": "a580008f-dda7-4755-91ea-e2a415fd3233",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "AlphaGo es el ejemplo paradigmático de aprendizaje por refuerzo porque:",
          "options": [
            "Aprendió jugando contra sí mismo, recibiendo +1 por ganar y −1 por perder, sin que nadie le explicara estrategias.",
            "Agrupa movimientos similares en clusters para descubrir patrones de juego.",
            "Fue entrenado con millones de partidas de Go jugadas y etiquetadas por maestros humanos.",
            "Usa reglas IF-THEN programadas por expertos en Go para decidir cada movimiento."
          ],
          "correct": 0,
          "feedback": "Correcto. El aprendizaje por refuerzo se basa en prueba-error con señales de recompensa. AlphaGo aprendió su política de juego solo a través de señales de ganancia/pérdida. El aprendizaje por refuerzo se basa en prueba-error con señales de recompensa. AlphaGo aprendió su política de juego solo a través de millones de partidas y señales de ganancia/pérdida."
        },
        {
          "id": "b0d8e9e4-cfa7-4748-8d8c-44a2ea569fad",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué el Deep Learning requiere típicamente millones de ejemplos y hardware GPU, a diferencia del ML clásico?",
          "options": [
            "Porque los algoritmos de DL son ineficientes y no han sido optimizados todavía.",
            "Porque el DL solo puede procesarse en centros de datos en la nube, no en servidores locales.",
            "Porque tiene millones de parámetros que ajustar, lo que requiere muchos datos y alta capacidad de cómputo paralelo.",
            "Porque los datos de entrenamiento del DL deben estar en formato de imagen exclusivamente."
          ],
          "correct": 2,
          "feedback": "Correcto. Las redes profundas tienen millones o miles de millones de parámetros. Ajustarlos requiere ver muchos ejemplos y el GPU realiza las multiplicaciones matriciales en paralelo. Las redes profundas tienen millones o miles de millones de parámetros. Ajustarlos requiere ver muchos ejemplos y el GPU realiza las multiplicaciones matriciales en paralelo de forma masiva."
        },
        {
          "id": "df8802ba-197d-4090-a226-eed0fa8564e4",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué no existe una única definición universal de Inteligencia Artificial?",
          "options": [
            "Porque cada definición refleja el propósito y el contexto de quien la propone.",
            "Porque la IA cambia de nombre según el país donde se aplique.",
            "Porque los científicos no se ponen de acuerdo sobre si las máquinas pueden pensar.",
            "Porque la IA es una disciplina muy nueva y aún no ha sido estudiada suficientemente."
          ],
          "correct": 0,
          "feedback": "Correcto. McCarthy quería construir, Russell y Norvig querían entender, la industria necesitaba regular, y este curso necesita una base técnica practicable. Cada definición refleja el propósito de quien la propone: McCarthy quería construir, Russell y Norvig querían entender, la industria necesitaba regular, y el curso necesita una base técnica practicable."
        },
        {
          "id": "8953afbf-9285-43aa-85af-8499aae0d430",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué tarea de Visión por Computadora determina a qué objeto pertenece cada píxel de la imagen?",
          "options": [
            "Clasificación.",
            "Reconocimiento facial.",
            "Segmentación.",
            "Detección de objetos."
          ],
          "correct": 2,
          "feedback": "Correcto. La segmentación es el nivel más granular: cada píxel se etiqueta según el objeto al que pertenece. Se usa en cirugía asistida, conducción autónoma y mapeo de terrenos. La segmentación es el nivel más granular de Visión por Computadora: cada píxel se etiqueta según el objeto al que pertenece. Se usa en cirugía asistida por imagen, conducción autónoma y mapeo de terrenos."
        },
        {
          "id": "196f7856-e53c-45af-812d-389dd841544c",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de los siguientes es un ejemplo de AGI según los contenidos de la sesión?",
          "options": [
            "Un sistema de recomendación de Netflix.",
            "Ninguno — la AGI es un concepto teórico que no existe en 2026.",
            "AlphaFold, que predijo millones de estructuras de proteínas.",
            "GPT-4 con acceso a navegador web."
          ],
          "correct": 1,
          "feedback": "Correcto. La AGI es un objetivo futuro sin hoja de ruta concreta. Ningún sistema real actual califica como AGI. La AGI es un objetivo futuro sin hoja de ruta concreta. Ningún sistema real actual califica como AGI. Todos los ejemplos mencionados (AlphaFold, GPT-4) son IA Débil."
        },
        {
          "id": "23687d59-89b3-4a3d-acea-4d41747adfab",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La diferencia principal entre IA Fuerte y AGI es que la AGI:",
          "options": [
            "Supera al humano en prácticamente todas las tareas cognitivas y generalmente implica automodificación.",
            "Se limita a tareas intelectuales mientras que la IA Fuerte incluye habilidades físicas.",
            "Es idéntica a la IA Fuerte; los dos términos son completamente sinónimos sin ninguna diferencia.",
            "Fue definida antes que la IA Fuerte, por lo que es un concepto más antiguo."
          ],
          "correct": 0,
          "feedback": "Correcto. IA Fuerte = nivel humano en cualquier tarea intelectual. AGI va más allá: supera al humano y se mejora a sí misma sin intervención humana. En la práctica se usan como sinónimos, pero conceptualmente difieren. IA Fuerte = nivel humano en cualquier tarea intelectual. AGI va más allá: supera al humano y se mejora a sí misma sin intervención humana. En la práctica se usan como sinónimos, pero conceptualmente difieren."
        },
        {
          "id": "444c4e75-73a1-448f-aff0-0695e7574f20",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "Según el modelo del agente racional, ChatGPT cumple el rol de actuador cuando:",
          "options": [
            "Genera y muestra el texto de respuesta al usuario.",
            "El modelo Transformer procesa las representaciones internas.",
            "Convierte el texto en tokens numéricos.",
            "Recibe el texto escrito por el usuario."
          ],
          "correct": 0,
          "feedback": "Correcto. En ChatGPT: sensor = texto escrito, percepción = tokens, función agente = Transformer, actuador = texto generado y mostrado al usuario. En ChatGPT: sensor = texto escrito, percepción = tokens, función agente = Transformer, actuador = texto generado y mostrado al usuario."
        },
        {
          "id": "ad9ad76c-3105-41f0-bf22-3145f59c36d0",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de los siguientes escenarios corresponde a aprendizaje no supervisado?",
          "options": [
            "Predecir el precio de una casa basándose en datos históricos de ventas con precios conocidos.",
            "Analizar el comportamiento de 100.000 clientes para descubrir grupos similares sin definir categorías previas.",
            "Un agente que aprende a jugar un videojuego recibiendo puntos como recompensa.",
            "Entrenar un modelo para clasificar radiografías como \"tumor\" o \"sin tumor\" con 5.000 imágenes etiquetadas."
          ],
          "correct": 1,
          "feedback": "Correcto. El aprendizaje no supervisado opera sin etiquetas. Descubrir grupos de clientes sin definir categorías previas es clustering. El aprendizaje no supervisado opera sin etiquetas. Descubrir grupos de clientes sin definir categorías previas es clustering — tarea típica de aprendizaje no supervisado."
        },
        {
          "id": "c9dafa50-f7d5-4f36-8eac-579c446573fe",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "Según la tabla comparativa de la sesión, ¿cuál enfoque tiene la mayor transparencia (legibilidad para humanos)?",
          "options": [
            "Deep Learning, porque visualiza sus capas ocultas claramente.",
            "ML clásico, porque sus modelos son siempre interpretables.",
            "IA Simbólica, porque las reglas IF-THEN son escritas y legibles por humanos.",
            "Los tres enfoques tienen la misma transparencia."
          ],
          "correct": 2,
          "feedback": "Correcto. IA Simbólica = alta transparencia. ML clásico = media. Deep Learning = baja (caja negra), ya que las representaciones internas no son fácilmente interpretables. IA Simbólica = alta transparencia (reglas legibles). ML clásico = media. Deep Learning = baja transparencia (caja negra), ya que las representaciones internas no son fácilmente interpretables por humanos."
        },
        {
          "id": "6184043d-950d-4faa-8473-dc05f5f1c62e",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "AlphaGo, el sistema que venció al campeón mundial de Go, es un ejemplo de:",
          "options": [
            "IA Débil, porque solo puede jugar Go y es inútil en cualquier otro dominio.",
            "IA Fuerte, porque supera a los humanos en su tarea.",
            "IA Fuerte parcial, porque transfiere conocimiento entre juegos de tablero.",
            "AGI, porque demostró inteligencia general superior."
          ],
          "correct": 0,
          "feedback": "Correcto. Superar a humanos en una tarea específica no convierte un sistema en IA Fuerte. AlphaGo no puede mantener una conversación ni jugar ajedrez. Superar a humanos en una tarea específica no convierte un sistema en IA Fuerte. AlphaGo no puede mantener una conversación ni jugar ajedrez: dominio único = IA Débil."
        },
        {
          "id": "fb071865-c5ce-4ac0-a7da-4ef921f2f4e6",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "Un agente es racional cuando:",
          "options": [
            "Aprende de datos sin intervención humana.",
            "Tiene consciencia de sí mismo y puede reflexionar sobre sus acciones.",
            "Elige la acción que maximiza su medida de desempeño dado lo que ha percibido.",
            "Siempre elige la acción más rápida de entre las posibles."
          ],
          "correct": 2,
          "feedback": "Correcto. Racionalidad no implica consciencia ni velocidad, sino que la acción elegida sea la óptima dado el historial de percepciones y la medida de desempeño del agente. Racionalidad no implica consciencia ni velocidad, sino que la acción elegida sea la óptima dado el historial de percepciones y la medida de desempeño del agente."
        },
        {
          "id": "0e335ffd-45c3-4b85-8d7d-206ffd000134",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué AlphaFold (2020) fue considerado un hito histórico en la ciencia?",
          "options": [
            "Desarrolló el mecanismo de atención que se usa en todos los Transformers modernos.",
            "Descubrió 2.2 millones de nuevos cristales estables para materiales avanzados.",
            "Fue el primer modelo de IA que superó a humanos en el juego de Go.",
            "Predijo la estructura 3D de más de 200 millones de proteínas, acelerando la biología estructural en décadas."
          ],
          "correct": 3,
          "feedback": "Correcto. AlphaFold resolvió el \"problema del plegamiento de proteínas\" que tardó 50 años en resolverse. En 2024 recibió el Premio Nobel de Química. AlphaFold resolvió el problema del plegamiento de proteínas, prediciendo la estructura 3D de más de 200 millones de proteínas. En 2024 recibió el Premio Nobel de Química."
        },
        {
          "id": "eb0c86ff-8585-4c34-8525-73941b8a4591",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La detección de plagas por imagen en cultivos de cacao y banano en Ecuador es un ejemplo de aplicación de IA en el sector:",
          "options": [
            "Agricultura, mediante Visión por Computadora aplicada a cultivos locales.",
            "Manufactura, mediante control de calidad visual en empacadoras.",
            "Finanzas, mediante scoring crediticio para pequeños agricultores.",
            "Salud, mediante diagnóstico de enfermedades en zonas rurales."
          ],
          "correct": 0,
          "feedback": "Correcto. La detección de plagas por imagen es Visión por Computadora aplicada al sector agrícola, con alta pertinencia para Ecuador dado su producción de cacao, banano y camarón. La detección de plagas por imagen es Visión por Computadora aplicada al sector agrícola — uno de los casos de uso con mayor pertinencia para Ecuador dado su producción de cacao, banano y camarón."
        },
        {
          "id": "2fc560b1-7b75-4892-a7c3-f99aa99d8abb",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "La definición de Russell y Norvig (2020) describe la IA como \"el estudio de agentes\". ¿Qué característica fundamental tiene un agente según esta definición?",
          "options": [
            "Fabrica réplicas digitales de procesos industriales.",
            "Tiene consciencia propia y puede automodificarse.",
            "Aprende de datos etiquetados provistos por humanos.",
            "Percibe su entorno a través de sensores y actúa sobre él a través de actuadores."
          ],
          "correct": 3,
          "feedback": "Correcto. Russell y Norvig definen al agente como una entidad que percibe (sensores) y actúa (actuadores), siendo racional cuando maximiza su medida de desempeño. Russell y Norvig definen al agente como una entidad que percibe (sensores) y actúa (actuadores), siendo racional cuando maximiza su medida de desempeño."
        },
        {
          "id": "caa9c3cb-efe1-4072-a560-cf49a1002d76",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál tipo de aprendizaje automático se aplica más directamente al problema de detectar fraude bancario en tiempo real?",
          "options": [
            "Por refuerzo, porque el sistema aprende de los errores de detección con penalizaciones.",
            "Simbólico, porque requiere reglas explícitas definidas por expertos en seguridad bancaria.",
            "No supervisado, porque los patrones de fraude no se conocen de antemano.",
            "Supervisado, porque se entrena con transacciones históricas etiquetadas como fraude o legítimas."
          ],
          "correct": 3,
          "feedback": "Correcto. La detección de fraude bancario usa aprendizaje supervisado: se cuenta con datos históricos donde cada transacción ya tiene la etiqueta \"fraude\" o \"legítima\". La detección de fraude bancario típicamente usa aprendizaje supervisado: se cuenta con datos históricos donde cada transacción ya tiene la etiqueta \"fraude\" o \"legítima\"."
        },
        {
          "id": "463c4ee3-e782-4eb1-a592-3c6cd106a10b",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la característica distintiva del Deep Learning frente al ML clásico en cuanto al conocimiento?",
          "options": [
            "El Deep Learning solo funciona con datos de texto mientras que el ML clásico funciona con cualquier tipo.",
            "El Deep Learning requiere menos datos que el ML clásico para funcionar correctamente.",
            "El ML clásico aprende automáticamente las características mientras que en DL el humano las diseña.",
            "En Deep Learning las representaciones útiles se aprenden automáticamente; en ML clásico las diseña el humano (feature engineering)."
          ],
          "correct": 3,
          "feedback": "Correcto. La diferencia fundamental es que el DL elimina el feature engineering manual: la red descubre sola qué características son relevantes durante el entrenamiento. La diferencia fundamental es que el DL elimina el feature engineering manual: la red descubre sola qué características son relevantes durante el entrenamiento."
        },
        {
          "id": "f7a9c6ca-120a-450b-bf4c-beb5f25e1737",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la diferencia entre clasificación y detección de objetos en Visión por Computadora?",
          "options": [
            "La detección requiere más datos que la clasificación pero produce resultados más precisos.",
            "La clasificación funciona con imágenes en color y la detección solo con imágenes en escala de grises.",
            "Clasificación asigna una etiqueta a toda la imagen; detección localiza y clasifica múltiples objetos dentro de ella.",
            "Son términos sinónimos que describen el mismo proceso con diferente nombre."
          ],
          "correct": 2,
          "feedback": "Correcto. Clasificación: \"¿qué es esta imagen?\" (una etiqueta global). Detección: \"¿dónde está cada objeto y qué es?\" (múltiples cajas delimitadoras con etiquetas). Clasificación: \"¿qué es esta imagen?\" (una etiqueta global). Detección: \"¿dónde está cada objeto y qué es?\" (múltiples cajas delimitadoras con etiquetas, como en YOLO)."
        },
        {
          "id": "7bad94c5-6285-456a-9d2c-8ed4ad69295d",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué hace una capa de convolución en una CNN de Visión por Computadora?",
          "options": [
            "Clasifica directamente la imagen asignándole una etiqueta de categoría.",
            "Normaliza el brillo y contraste de la imagen antes del procesamiento.",
            "Reduce la imagen a un vector de números comprimiendo toda la información en un solo paso.",
            "Aplica un filtro que desliza sobre la imagen para detectar patrones locales como bordes, esquinas y texturas."
          ],
          "correct": 3,
          "feedback": "Correcto. Un filtro convolucional es una pequeña matriz que desliza sobre la imagen detectando si ciertos patrones están presentes en cada región. Capas sucesivas combinan patrones simples en conceptos más complejos. Un filtro convolucional es una pequeña matriz que desliza sobre la imagen detectando si ciertos patrones están presentes en cada región. Capas sucesivas combinan patrones simples en conceptos más complejos."
        },
        {
          "id": "2160d509-46d0-4a97-91b9-14db3b81673b",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En el aprendizaje supervisado, ¿qué es una \"etiqueta\"?",
          "options": [
            "La respuesta correcta que ya se conoce para un dato de entrenamiento.",
            "El nombre que se le asigna a un modelo una vez entrenado.",
            "Un parámetro interno del algoritmo que se ajusta durante el entrenamiento.",
            "Un metadato que describe el tamaño del archivo de datos."
          ],
          "correct": 0,
          "feedback": "Correcto. Una etiqueta es la salida correcta conocida de antemano. Ej: el email tiene la etiqueta \"spam\" o \"no-spam\". Una etiqueta es la salida correcta conocida de antemano. Ej: un email + su etiqueta \"spam\" o \"no-spam\". El modelo aprende a predecir la etiqueta a partir de los datos de entrada. #"
        },
        {
          "id": "a30197bf-119e-474f-8e7b-5d56046fc30c",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué significa que un coeficiente βⱼ se interprete **ceteris paribus**?",
          "options": [
            "Que la variable xⱼ no tiene ningún efecto sobre ŷ.",
            "Que mide el efecto de xⱼ sobre ŷ manteniendo constantes las demás variables del modelo.",
            "Que el coeficiente solo aplica al conjunto de entrenamiento.",
            "Que el coeficiente cambia cada vez que se agrega una nueva variable."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. **Ceteris paribus** significa **todo lo demás constante**: βⱼ representa el efecto puro de esa variable, aislado del efecto de las demás."
        },
        {
          "id": "ba846f34-8b84-4ec3-afd7-0e2a1ce8024d",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En el código `pipeline = joblib.load(**modelo.pkl**)` ubicado fuera (antes) de la función del endpoint `/predict`, ¿por qué se carga el modelo en ese punto y no dentro de la función de predicción?",
          "options": [
            "Porque así el modelo se reentrena automáticamente con cada solicitud.",
            "Porque FastAPI lo exige por razones de sintaxis, sin ninguna ventaja de rendimiento.",
            "Para cargar el modelo una sola vez al iniciar el servidor, en vez de releerlo desde disco en cada solicitud.",
            "Porque dentro de la función del endpoint no se puede usar joblib."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. Cargar el modelo una sola vez al iniciar el servidor evita releerlo desde disco en cada solicitud, haciendo que cada predicción sea más rápida."
        },
        {
          "id": "613243d2-2887-4566-b820-a2e3a971ce92",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué un mismo endpoint de una API puede ser consumido tanto por una aplicación web como por una aplicación móvil, sin necesidad de exportar el modelo de formas distintas?",
          "options": [
            "Porque el modelo se expone como un servicio HTTP genérico: cualquier cliente que pueda enviar y recibir JSON por HTTP puede consumirlo, sin necesitar Python ni scikit-learn instalado.",
            "Porque el archivo .pkl cambia de formato según el tipo de cliente que lo consulta.",
            "Porque FastAPI genera automáticamente una app móvil distinta para cada cliente.",
            "Porque las apps web y móviles usan lenguajes de programación idénticos."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. Al exponerse como un servicio HTTP con JSON, el endpoint puede ser consumido por cualquier cliente sin importar el lenguaje que use."
        },
        {
          "id": "4669d90e-1d6a-4d11-9935-32227fa17d6f",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué efecto tiene `drop_first=True` en `pd.get_dummies(X, columns=[**tipo_cambio**], drop_first=True)`?",
          "options": [
            "Elimina la primera columna dummy generada, evitando la dummy trap (multicolinealidad perfecta).",
            "Ordena las categorías de forma alfabética antes de codificarlas.",
            "Convierte automáticamente todas las columnas numéricas en categóricas.",
            "Elimina todas las columnas categóricas del DataFrame."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. drop_first=True descarta una de las k columnas dummy generadas, dejando esa categoría como referencia y evitando la colinealidad perfecta."
        },
        {
          "id": "10a72a43-8ac7-4519-b701-3e21ae52e495",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Para qué se utiliza joblib.dump() y joblib.load() en el flujo de despliegue de un modelo?",
          "options": [
            "Para calcular automáticamente el RMSE del modelo.",
            "Para dividir los datos en train y test.",
            "Para entrenar el modelo desde cero cada vez que se necesita una predicción.",
            "Para guardar y cargar el objeto (pipeline) entrenado, de modo que pueda reutilizarse sin volver a entrenarlo."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. joblib.dump() guarda el pipeline entrenado en un archivo, y joblib.load() lo recupera en otro programa sin necesidad de reentrenarlo."
        },
        {
          "id": "2bb311cc-8fea-4753-8c91-68ec6a35eac6",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cómo se define la multicolinealidad?",
          "options": [
            "Cuando dos o más variables independientes están altamente correlacionadas entre sí.",
            "Cuando se usan variables categóricas en el modelo.",
            "Cuando la variable dependiente Y no tiene varianza.",
            "Cuando el modelo tiene un R² mayor a 0.9."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. La multicolinealidad ocurre cuando una variable independiente puede predecirse con alta precisión a partir de otras variables independientes del modelo."
        },
        {
          "id": "2e97c4a0-694d-4753-a817-e3cd109bb45e",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En la ecuación ŷ = β₀ + β₁x + β₂x² + … + βₙxⁿ, ¿qué representa n?",
          "options": [
            "El número de observaciones del dataset.",
            "El valor del intercepto.",
            "El grado del polinomio.",
            "El número de variables categóricas del modelo."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. n es el grado del polinomio, es decir, la potencia más alta de x incluida en el modelo."
        },
        {
          "id": "28b6c295-7402-41d7-916a-29f9a52a4612",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál de las siguientes afirmaciones sobre el R² ajustado es correcta?",
          "options": [
            "Nunca puede ser negativo.",
            "Es siempre menor o igual que el R² ordinario, y puede disminuir si se agrega una variable poco útil.",
            "Siempre es mayor que el R² ordinario.",
            "Es independiente del número de predictores del modelo."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El R² ajustado es siempre ≤ R² ordinario, y a diferencia de este, puede disminuir cuando se agrega una variable que no compensa la pérdida de un grado de libertad."
        },
        {
          "id": "4010397c-79c6-4247-8771-661e48592dde",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué el modelo que se exporta a producción se reentrena con el 100% de los datos disponibles, y no con el mismo 80% usado para evaluarlo?",
          "options": [
            "Porque el conjunto de prueba contiene errores que deben excluirse.",
            "Porque joblib no permite guardar modelos entrenados con menos del 100% de los datos.",
            "Porque el modelo de producción no necesita ser preciso.",
            "Porque el conjunto de prueba ya cumplió su función de medir el desempeño, y usar más datos de entrenamiento generalmente produce un modelo mejor."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Una vez medido el desempeño con el train/test split, el conjunto de prueba deja de tener un rol especial; el modelo final se reentrena con todos los datos disponibles."
        },
        {
          "id": "d0c3cf3e-d713-4962-8268-70241a58c7c9",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cómo se determina, en la práctica, el grado óptimo de un polinomio para un modelo de regresión?",
          "options": [
            "Se elige arbitrariamente el grado 2 en todos los casos.",
            "Se prueban distintos grados y se elige aquel con el menor error sobre el conjunto de prueba (test).",
            "Se calcula directamente con una fórmula matemática sin necesidad de probar datos.",
            "Se elige siempre el grado más alto posible."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El grado no se conoce de antemano: se evalúan varios grados candidatos y se elige el que produce el menor error en el conjunto de prueba (idealmente con validación cruzada)."
        },
        {
          "id": "e1612582-75b6-49e8-a1c7-04de442031b4",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es el problema de codificar una variable categórica nominal directamente como enteros (0, 1, 2, …)?",
          "options": [
            "La variable deja de poder usarse en el modelo.",
            "Se impone una jerarquía u orden numérico entre categorías que no existe en la realidad.",
            "El modelo no puede procesar números enteros.",
            "El modelo automáticamente ignora esa variable."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Codificar categorías sin orden real como enteros consecutivos hace que el modelo interprete una distancia u orden entre ellas que no existe."
        },
        {
          "id": "2533b9d9-ba98-4bc1-b421-5254ede5d2cc",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué indica el decorador @app.post(**/predict**) sobre una función en FastAPI?",
          "options": [
            "Que esa función entrena el modelo desde cero.",
            "Que esa función se ejecuta automáticamente cada minuto.",
            "Que esa función maneja las peticiones POST que llegan al endpoint /predict.",
            "Que esa función solo puede ejecutarse desde una app móvil."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. El decorador @app.post(**/predict**) indica que la función definida debajo se ejecuta cuando llega una petición HTTP POST a esa dirección."
        },
        {
          "id": "eea460fd-4104-4907-8cb7-2adf389f71f4",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En `PolynomialFeatures(degree=2, include_bias=False)`, ¿qué logra el parámetro include_bias=False?",
          "options": [
            "Evita el data leakage entre train y test.",
            "Excluye la columna constante del término independiente, porque el modelo ya agrega su propio intercepto.",
            "Impide que se generen términos de grado 2.",
            "Elimina todas las variables categóricas del dataset."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. include_bias=False excluye la columna constante (de puros unos) que representaría el término independiente, ya que el propio modelo lineal (LinearRegression) añade su intercepto por separado."
        },
        {
          "id": "e5903027-e5f9-4979-8919-1218980a9ec7",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la diferencia entre una variable categórica nominal y una ordinal?",
          "options": [
            "La nominal solo puede tener dos categorías.",
            "La nominal tiene un orden significativo entre sus categorías; la ordinal no.",
            "Ambas siempre deben codificarse de la misma manera.",
            "La ordinal tiene un orden significativo entre sus categorías; la nominal no."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Una variable ordinal tiene categorías con un orden real (ej. nivel educativo); una nominal no tiene orden ni distancia real entre sus categorías (ej. marca, provincia)."
        },
        {
          "id": "438624b8-172e-4104-93e1-77094c91b0bb",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es el problema principal del R² ordinario al comparar modelos con distinto número de variables?",
          "options": [
            "Nunca puede calcularse con más de una variable.",
            "Siempre aumenta o se mantiene igual al agregar cualquier variable, incluso si es irrelevante.",
            "Solo puede calcularse sobre el conjunto de entrenamiento.",
            "Disminuye automáticamente al agregar variables relevantes."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. El R² ordinario nunca disminuye al agregar variables, aunque sean ruido puro sin relación real con Y, lo que lo hace inadecuado para comparar modelos de distinta complejidad."
        },
        {
          "id": "58a3e068-eed2-4edf-bcb3-f5281ed83414",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "Según el vocabulario de despliegue visto en clase, ¿qué es una API?",
          "options": [
            "Un archivo que almacena el modelo entrenado.",
            "Una interfaz que permite que un programa le pida algo a otro, sin compartir su código interno.",
            "Un protocolo exclusivo para bases de datos.",
            "Un formato de texto para estructurar datos en pares clave-valor."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Una API (Interfaz de Programación de Aplicaciones) permite que un programa solicite algo a otro sin necesidad de conocer su código interno."
        },
        {
          "id": "f06a522d-6378-49ab-846b-f0a03afdc6d7",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "En un ColumnTransformer, ¿qué hace la opción `remainder=**passthrough**`?",
          "options": [
            "Elimina del DataFrame todas las columnas no mencionadas explícitamente en los transformadores.",
            "Convierte todas las columnas restantes en variables numéricas estandarizadas.",
            "Aplica One-Hot Encoding a todas las columnas del DataFrame, sin excepción.",
            "Deja pasar sin modificación las columnas que no fueron indicadas explícitamente en ningún transformador."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. remainder=**passthrough** indica que las columnas no mencionadas explícitamente se mantienen sin cambios, en lugar de ser descartadas."
        },
        {
          "id": "f343f5ee-b731-4c98-90fc-0fd2902c0ae5",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿En qué consiste el One-Hot Encoding?",
          "options": [
            "En convertir una variable categórica con k categorías en k columnas binarias, cada una indicando pertenencia a esa categoría.",
            "En convertir cualquier variable numérica en una variable categórica.",
            "En eliminar todas las variables categóricas del modelo.",
            "En asignar un número entero consecutivo a cada categoría."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. One-Hot Encoding crea una columna binaria (0/1) por cada categoría, evitando imponer un orden o distancia falsa entre ellas."
        },
        {
          "id": "47107f0b-60e3-4a75-8bdc-c9c6f196a92c",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿En qué situación es apropiado usar OrdinalEncoder en lugar de One-Hot Encoding?",
          "options": [
            "Cuando la variable categórica es nominal, sin ningún orden entre sus categorías.",
            "Cuando el modelo no tiene variable objetivo.",
            "Cuando la variable categórica es ordinal, con un orden real y significativo entre sus categorías.",
            "Cuando la variable es numérica continua."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. OrdinalEncoder es apropiado para variables ordinales, donde existe un orden real (por ejemplo, nivel educativo); para variables nominales sin orden se prefiere One-Hot Encoding."
        },
        {
          "id": "24a01eed-ee70-4792-950a-698a76e6bb84",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué, al codificar una variable categórica con k categorías, se recomienda usar solo k−1 columnas dummy?",
          "options": [
            "Porque usar k−1 columnas hace el modelo más rápido de entrenar, sin ninguna otra razón.",
            "Porque scikit-learn no permite más de k−1 columnas categóricas.",
            "Porque así se elimina la necesidad de un intercepto β₀.",
            "Porque usar las k columnas completas genera multicolinealidad perfecta (dummy trap), ya que su suma siempre es 1."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Si se incluyen las k dummies completas, la suma de todas las columnas es siempre 1 para cada fila, generando colinealidad perfecta (dummy trap). Usar k−1 columnas evita ese problema, dejando una categoría como referencia."
        },
        {
          "id": "07b529c9-b886-479a-b85b-6a40569abcd2",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la diferencia entre una API y un endpoint?",
          "options": [
            "La API es la interfaz general que expone el servicio; el endpoint es una dirección específica dentro de esa API que realiza una tarea concreta.",
            "Son sinónimos exactos y no existe ninguna diferencia.",
            "La API solo puede tener un endpoint como máximo.",
            "El endpoint siempre contiene varias APIs dentro de sí."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. La API es el servicio completo que se expone; dentro de ella puede haber varios endpoints (por ejemplo, /predict y /health), cada uno encargado de una tarea concreta."
        },
        {
          "id": "957e2fd4-b04f-4cdd-8121-0121748ad492",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la diferencia entre el momento de **entrenamiento** y el momento de **servicio** (inferencia) de un modelo?",
          "options": [
            "El entrenamiento ocurre una sola vez (o cuando hay datos nuevos) y requiere el dataset completo; el servicio ocurre muchas veces y solo necesita el objeto ya entrenado.",
            "El servicio requiere más tiempo de cómputo que el entrenamiento.",
            "El entrenamiento ocurre en la API; el servicio ocurre en el notebook.",
            "Son exactamente el mismo proceso, solo con nombres distintos."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. Entrenar es un proceso que ocurre pocas veces y necesita el dataset completo; servir (inferencia) ocurre muchas veces, una por cada solicitud, y solo requiere el modelo ya entrenado."
        },
        {
          "id": "c89cc2a0-69b2-458c-ac16-956948e82ede",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Para qué sirve el parámetro `handle_unknown=**ignore**` al crear un OneHotEncoder?",
          "options": [
            "Para evitar que ocurra un error si en el conjunto de prueba aparece una categoría que no estaba presente en el entrenamiento.",
            "Para ignorar por completo todas las variables categóricas del modelo.",
            "Para forzar a que todas las categorías generen exactamente 2 columnas.",
            "Para eliminar automáticamente las filas con datos faltantes."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. handle_unknown=**ignore** evita que el codificador falle cuando encuentra una categoría que nunca vio durante el entrenamiento."
        },
        {
          "id": "2406ca39-3a00-44ea-a346-20f45c5a6392",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué realiza la línea `pipeline = joblib.load(**modelo.pkl**)`?",
          "options": [
            "Convierte el archivo modelo.pkl en un archivo JSON.",
            "Entrena un nuevo pipeline usando el archivo modelo.pkl como dataset.",
            "Carga en memoria el objeto (pipeline) previamente guardado en el archivo modelo.pkl.",
            "Elimina el modelo entrenado."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. joblib.load() recupera (deserializa) el objeto previamente guardado con joblib.dump(), listo para usarse con .predict()."
        },
        {
          "id": "7480a92e-6544-4d78-95e7-ab1d44fa7d53",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la principal motivación para usar regresión polinomial en lugar de regresión lineal simple?",
          "options": [
            "Evitar el uso de variables categóricas.",
            "Capturar relaciones curvas entre las variables, que un modelo puramente lineal no puede representar.",
            "Reducir el número de variables del modelo.",
            "Eliminar la necesidad de dividir en train y test."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Muchos fenómenos reales no son estrictamente lineales; la regresión polinomial permite capturar esa curvatura agregando potencias de x."
        },
        {
          "id": "8411423d-5386-4230-a580-2db5cb57661d",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué PolynomialFeatures debe ajustarse (fit) únicamente sobre el conjunto de entrenamiento?",
          "options": [
            "Porque ajustarlo sobre test es más rápido computacionalmente.",
            "Porque ajustarlo sobre test provoca data leakage: el transformador **vería** información del conjunto de prueba antes de tiempo.",
            "Porque el conjunto de prueba nunca contiene variables numéricas.",
            "Porque PolynomialFeatures no puede aplicarse al conjunto de entrenamiento."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Ajustar transformaciones sobre el conjunto de prueba filtra información de ese conjunto hacia el proceso de entrenamiento (data leakage), haciendo que las métricas de evaluación resulten optimistas y poco confiables."
        },
        {
          "id": "c9a74aa2-2c53-4b62-8838-67b98239b29d",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Qué mide el Factor de Inflación de la Varianza (VIF) de una variable?",
          "options": [
            "Cuánto se infla la varianza de su coeficiente debido a la correlación con las demás variables independientes.",
            "El número óptimo de variables a incluir en el modelo.",
            "La proporción de varianza de Y explicada por el modelo completo.",
            "La diferencia entre el valor real y el valor predicho."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. El VIF cuantifica cuánto aumenta la varianza del coeficiente de una variable debido a su correlación con las demás variables independientes del modelo."
        },
        {
          "id": "ae55523f-7f6f-4851-9409-21587b464e0e",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué se prefiere joblib sobre pickle para guardar un pipeline de scikit-learn?",
          "options": [
            "Porque pickle no puede guardar ningún objeto de Python.",
            "Porque joblib no requiere que el modelo esté entrenado previamente.",
            "Porque pickle solo funciona con modelos de regresión logística.",
            "Porque joblib maneja mejor los arreglos grandes de NumPy que suelen contener los pipelines entrenados, siendo generalmente más rápido y con archivos más livianos."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Ambos pueden serializar objetos de scikit-learn, pero joblib está optimizado para manejar los arreglos de NumPy grandes típicos de un pipeline entrenado."
        },
        {
          "id": "ca49997c-de6e-46a7-8094-6c0eae725ced",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Por qué la regresión polinomial se considera un caso especial de la regresión lineal múltiple?",
          "options": [
            "Porque no tiene coeficientes β.",
            "Porque el modelo es lineal en los parámetros β, aunque no lo sea en x.",
            "Porque siempre tiene el mismo grado que el número de variables.",
            "Porque solo puede usarse con una variable categórica."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. Aunque la relación con x no es lineal (hay potencias de x), el modelo sigue siendo lineal respecto a los coeficientes β, por lo que se ajusta con las mismas técnicas de regresión lineal."
        },
        {
          "id": "649b9254-51ab-41e2-a26d-d0fbfc7111a0",
          "category": "teoria_base",
          "categoryName": "Preguntas Guía",
          "text": "¿Cuál es la forma general de la ecuación de un modelo de regresión lineal múltiple?",
          "options": [
            "ŷ = β₀ + β₁x + β₂x²",
            "ŷ = β₀ + β₁x₁ + β₂x₂ + … + βₚxₚ",
            "ŷ = β₀ + β₁x",
            "ŷ = β₀ · x₁ · x₂ · … · xₚ"
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. La regresión múltiple extiende el modelo simple a p variables independientes, cada una con su propio coeficiente βⱼ."
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
        },
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
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "¿Por qué es crucial escalar o normalizar las variables numéricas (por ejemplo, usando StandardScaler) antes de entrenar un modelo de Regresión Logística?",
          "feedback": "El escalado de variables no cambia la información, pero pone todos los predictores numéricos en una misma magnitud (media 0, varianza 1). Esto ayuda matemáticamente al algoritmo de descenso de gradiente a encontrar el mínimo de la función de costo mucho más rápido y sin oscilaciones inestables.",
          "options": [
            "Porque escalar las variables categóricas permite que OneHotEncoder detecte automáticamente cuántas columnas binarias debe generar sin riesgo de colinealidad.",
            "Porque el algoritmo de optimización (descenso de gradiente) converge mucho más lento o puede fallar si las variables tienen escalas muy distintas (ej. edad vs. ingreso).",
            "Porque la regresión logística exige obligatoriamente que todos los valores numéricos del dataset sean números enteros positivos antes de calcular las probabilidades.",
            "Porque StandardScaler convierte las probabilidades que están fuera del rango [0,1] hacia valores válidos, permitiendo que la función sigmoide se ajuste correctamente."
          ],
          "correct": 1,
          "id": 1179
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "¿Qué es el `ColumnTransformer` en scikit-learn y cómo funciona dentro del preprocesamiento?",
          "feedback": "En un dataset real tienes variables numéricas y categóricas mezcladas. ColumnTransformer te permite decir: 'aplica OneHotEncoder a estas 3 columnas' y 'aplica StandardScaler a estas otras 4'. Al ejecutarlo, procesa todo en paralelo y te devuelve una sola matriz lista para el modelo.",
          "options": [
            "Es un modelo de Machine Learning que predice qué columnas son las más importantes para el resultado final, descartando aquellas que generan multicolinealidad severa.",
            "Es el algoritmo interno de la regresión logística que transforma los coeficientes β en probabilidades utilizando la función sigmoide sobre todas las columnas continuas.",
            "Es un objeto que permite aplicar transformaciones distintas a distintos grupos de columnas (ej. OHE a categóricas, StandardScaler a numéricas) y devuelve una sola matriz unificada.",
            "Es una función matemática exclusiva de Pandas que elimina las variables categóricas del dataset para que la Regresión Logística pueda ejecutarse sin arrojar errores."
          ],
          "correct": 2,
          "id": 1180
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "Al dividir tus datos con `train_test_split` en un problema de clasificación, incluyes el argumento `stratify=y`. ¿Para qué sirve esto y por qué es vital?",
          "feedback": "Sin `stratify=y`, el azar podría hacer que tu conjunto de prueba termine solo con ejemplos de la clase mayoritaria (ej. puros créditos aprobados). Al estratificar, obligas a que si el dataset original tiene 10% de fraude, el train tenga 10% y el test tenga 10%. Es crítico para una evaluación realista.",
          "options": [
            "Fuerza a que las clases desbalanceadas se equilibren mágicamente al 50/50 generando datos sintéticos nuevos antes de separar el entrenamiento y la validación final.",
            "Sirve para ordenar el dataset alfabéticamente según la variable objetivo antes de dividirlo, asegurando que el modelo logístico procese los datos más rápido en memoria.",
            "Garantiza que la proporción de clases (ej. 80% aprobados, 20% rechazados) se mantenga exactamente igual tanto en el conjunto de entrenamiento como en el de prueba.",
            "Transforma automáticamente la variable objetivo (y) usando One-Hot Encoding internamente, evitando tener que usar un ColumnTransformer para las columnas categóricas."
          ],
          "correct": 2,
          "id": 1182
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "Un Pipeline encadena el preprocesamiento y el estimador final. ¿Por qué es estructuralmente superior usar un Pipeline en lugar de aplicar las transformaciones a mano línea por línea?",
          "feedback": "Con transformaciones manuales es facilísimo cometer el error de hacer `scaler.fit_transform(X_test)`, arruinando tu evaluación por completo al filtrar información del test. El Pipeline es una 'tubería' sellada: si le haces `.fit()`, entrena lo de adentro de forma segura. Si le haces `.predict()`, solo transforma. Es disciplina forzada por código.",
          "options": [
            "Porque encadenar pasos reduce el peso en megabytes del archivo .pkl exportado, permitiendo que las aplicaciones web con FastAPI carguen los modelos instantáneamente en memoria.",
            "Porque el Pipeline es el único objeto capaz de graficar automáticamente la matriz de confusión y calcular el F1-Score sin necesidad de importar la librería de métricas de scikit-learn.",
            "Porque asegura que `.fit()` se ejecute solo en el conjunto de entrenamiento, y aplica automáticamente `.transform()` al conjunto de prueba, eliminando el riesgo de Data Leakage accidental.",
            "Porque al usar un Pipeline, el algoritmo de Regresión Logística ignora la multicolinealidad, haciendo que el modelo se vuelva inmune al sobreajuste severo en datos nuevos."
          ],
          "correct": 2,
          "id": 1196
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "La Regla de Oro del preprocesamiento establece que funciones como `scaler.fit()` u `ohe.fit()` deben aplicarse EXCLUSIVAMENTE sobre el conjunto de Entrenamiento (X_train). ¿Por qué?",
          "feedback": "Data Leakage (Fuga de Datos). El test set debe ser un simulacro perfecto de la vida real (clientes nuevos del futuro). Si usas el test set para calcular la media del escalado, le estás pasando información del 'futuro' al modelo presente. En la realidad, no puedes sacar el promedio de clientes que aún no existen.",
          "options": [
            "Porque `.fit()` genera columnas polinomiales de forma aleatoria; si se aplica en el test, el número de columnas no coincidirá jamás con la matriz dimensional del conjunto de entrenamiento.",
            "Porque el conjunto de prueba siempre carece de la variable objetivo (Y), haciendo matemáticamente imposible que el StandardScaler o el OneHotEncoder puedan completar su rutina interna.",
            "Porque la función `.fit()` altera permanentemente la estructura del disco duro, y aplicarla múltiples veces sobrescribiría los archivos CSV originales alojados en Google Colab o tu PC.",
            "Porque `.fit()` aprende parámetros de los datos (ej. el promedio y la desviación estándar). Si los aprendes del Test, el modelo conocerá información de los datos de evaluación, perdiendo validez."
          ],
          "correct": 3,
          "id": 1197
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "En el OneHotEncoder, el parámetro `handle_unknown='ignore'` es vital para modelos en producción. ¿Qué problema previene exactamente?",
          "feedback": "Imagina entrenar tu modelo con historial crediticio 'Bueno', 'Regular' y 'Malo'. Se exporta a producción y, un año después, el sistema del banco añade el historial 'Excelente'. Si no tienes `handle_unknown='ignore'`, cuando un cliente ponga 'Excelente', el OneHotEncoder arrojará un KeyError crasheando toda tu API web.",
          "options": [
            "Ignora y elimina las categorías que generan multicolinealidad perfecta (Dummy Trap), haciendo innecesario el uso del parámetro clásico 'drop=first' durante la instanciación.",
            "Evita que el modelo evalúe observaciones que contengan la variable objetivo (y) nula, ignorando automáticamente esas filas sin interrumpir el proceso del descenso de gradiente.",
            "Ignora de manera inteligente todas las variables numéricas que no hayan sido procesadas previamente por un StandardScaler, procesándolas temporalmente en formato booleano binario.",
            "Evita que la aplicación colapse si un cliente nuevo ingresa con una categoría que el modelo no vio durante el entrenamiento (ej. aparece una provincia nueva en el formulario)."
          ],
          "correct": 3,
          "id": 1198
        },
        {
          "id": "838f8e79-376c-44f0-9068-eece52f95123",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "En la regla de actualización del descenso de gradiente, ¿qué controla el parámetro α (tasa de aprendizaje)?",
          "options": [
            "El porcentaje de datos reservado para el conjunto de prueba.",
            "El número de variables predictoras que se usan en el modelo.",
            "El tamaño del paso que se da en cada iteración al actualizar los coeficientes.",
            "El umbral de decisión que separa las dos clases."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. α determina qué tan grande es cada ajuste de los coeficientes β en cada iteración del descenso de gradiente."
        },
        {
          "id": "69430e3c-fd5e-42c4-9151-66f7aced1573",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "¿En qué situación conviene priorizar la métrica Recall sobre Precision?",
          "options": [
            "Cuando todas las clases están perfectamente balanceadas y no importa ningún tipo de error.",
            "Cuando el dataset no tiene variables categóricas.",
            "Cuando el modelo tiene un Accuracy del 100%.",
            "Cuando un falso negativo (no detectar un caso positivo real) es muy costoso."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Recall mide cuántos de los casos realmente positivos fueron detectados por el modelo; es prioritario cuando dejar pasar un positivo real (ej. rechazar un buen cliente) tiene un costo alto."
        },
        {
          "id": "6bd9f187-79cf-4732-823d-442d1bc835f3",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "¿Para qué sirve `pipeline.named_steps['modelo']` dentro de un Pipeline ya entrenado?",
          "options": [
            "Para acceder directamente al objeto de ese paso específico (en este caso, el modelo LogisticRegression ya entrenado).",
            "Para cambiar el nombre asignado a ese paso.",
            "Para reentrenar únicamente ese paso con nuevos datos.",
            "Para eliminar ese paso del pipeline."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. `named_steps` permite acceder, por su nombre, a cualquiera de los objetos que forman el pipeline — por ejemplo, para consultar atributos del modelo entrenado como `n_iter_`."
        },
        {
          "id": "d50f4c53-6ec1-4e9e-b087-8ac9b0e92048",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "¿Qué es la \"pérdida logística\" (log-loss) que scikit-learn minimiza al entrenar una regresión logística?",
          "options": [
            "El tiempo que tarda el modelo en converger.",
            "El número total de errores de clasificación cometidos por el modelo.",
            "La diferencia entre el número de aprobados y rechazados.",
            "El negativo de la log-verosimilitud, usado como función de costo J(β)."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Maximizar la log-verosimilitud equivale a minimizar su negativo; ese negativo es la función de costo que el algoritmo de optimización reduce iterativamente."
        },
        {
          "id": "337de042-9212-4d2d-9d37-dec72690047f",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "¿Qué diferencia hay entre `pipeline.fit(X_train, y_train)` y `pipeline_final.fit(X, y)` (usando el DataFrame completo)?",
          "options": [
            "`pipeline_final.fit(X, y)` no entrena ningún modelo, solo transforma los datos.",
            "El primero entrena con el 80% de los datos para evaluación; el segundo reentrena con el 100% de los datos para el modelo que se exportará.",
            "`pipeline_final.fit(X, y)` solo puede usarse con variables numéricas.",
            "Ambas líneas de código hacen exactamente lo mismo."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. `X` y `y` contienen el dataset completo (sin dividir), por lo que `pipeline_final` se entrena con toda la información disponible, a diferencia del pipeline de evaluación entrenado solo con X_train/y_train."
        },
        {
          "id": "2b77f1c1-905f-4ec1-b551-0317855badf2",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "Para calcular `roc_auc_score(y_test, y_proba)`, ¿qué debe contener `y_proba`?",
          "options": [
            "Los valores escalados de las variables numéricas.",
            "El nombre de las columnas categóricas del dataset.",
            "Las probabilidades predichas (no las clases 0/1) de que cada observación pertenezca a la clase positiva.",
            "Las clases reales del conjunto de entrenamiento."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. A diferencia de `classification_report`, que usa la clase predicha (0/1), `roc_auc_score` necesita las probabilidades (por ejemplo, de `predict_proba()[:, 1]`) para construir la curva ROC."
        },
        {
          "id": "1dce5c41-71d6-48b2-9aa3-1f22ef55fdfd",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "En `LogisticRegression(C=1.0)`, ¿qué controla el parámetro `C`?",
          "options": [
            "La cantidad de iteraciones necesarias para converger.",
            "El número de columnas categóricas que se codificarán.",
            "El umbral de decisión usado por predict().",
            "La fuerza de la regularización aplicada al modelo (a menor C, mayor regularización)."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. `C` es el inverso de la fuerza de regularización: valores más pequeños de C aplican una regularización más fuerte sobre los coeficientes del modelo."
        },
        {
          "id": "fbd5f9e3-c60d-49f2-8c96-daefa6e5e1f5",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "¿Para qué se utiliza la librería joblib en el flujo de trabajo de un modelo de machine learning?",
          "options": [
            "Para calcular automáticamente las métricas de evaluación del modelo.",
            "Para graficar la curva ROC y la matriz de confusión.",
            "Para dividir el dataset en conjuntos de entrenamiento y prueba.",
            "Para guardar y cargar objetos de Python, como un modelo o pipeline ya entrenado, en un archivo reutilizable."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. joblib serializa (guarda) objetos de Python como un modelo entrenado en un archivo .pkl, que luego puede cargarse y usarse sin necesidad de reentrenar."
        },
        {
          "id": "7f42ab61-33c9-416a-be70-4e404579cb8e",
          "category": "teoria_extra",
          "categoryName": "Preguntas de Refuerzo",
          "text": "¿Qué información entrega la función `classification_report(y_test, y_pred)` de scikit-learn?",
          "options": [
            "La curva ROC graficada automáticamente.",
            "Precision, Recall, F1-Score y el número de observaciones (support) por cada clase, además del Accuracy general.",
            "Únicamente el valor de Accuracy del modelo.",
            "Los coeficientes β estimados por el modelo."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. `classification_report` resume, para cada clase, sus métricas de Precision, Recall y F1-Score, junto con el número de observaciones y el Accuracy general del modelo."
        }
      ]
    },
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
          "label": "Solo Preguntas Marcadas"
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
          "label": "Solo Preguntas Marcadas"
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
          "label": "Solo Preguntas Marcadas"
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
          "label": "Solo Preguntas Marcadas"
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
    },
    {
      "id": "semana_4",
      "description": "Regresión Logística, Clasificación Binaria, Función Sigmoide, Pipeline, y Evaluación de Modelos (ROC/AUC, Matriz de Confusión).",
      "categorias": [
        {
          "value": "all",
          "label": "Todas (Semana 4)"
        },
        {
          "value": "fundamentos",
          "label": "Fundamentos: Regresión vs Clasificación"
        },
        {
          "value": "preprocesamiento",
          "label": "Preprocesamiento (Escalado, OHE, ColumnTransformer)"
        },
        {
          "value": "entrenamiento",
          "label": "Entrenamiento: Costo, Gradiente y MLE"
        },
        {
          "value": "evaluacion",
          "label": "Métricas de Evaluación: ROC, AUC y Reporte"
        },
        {
          "value": "despliegue",
          "label": "Despliegue y Producción"
        },
        {
          "value": "repaso_extra",
          "label": "Refuerzo Semana 4"
        },
        {
          "value": "bookmarked",
          "label": "Solo Preguntas Marcadas"
        }
      ],
      "preguntas": [
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "¿Por qué es crucial escalar o normalizar las variables numéricas (por ejemplo, usando StandardScaler) antes de entrenar un modelo de Regresión Logística?",
          "feedback": "El escalado de variables no cambia la información, pero pone todos los predictores numéricos en una misma magnitud (media 0, varianza 1). Esto ayuda matemáticamente al algoritmo de descenso de gradiente a encontrar el mínimo de la función de costo mucho más rápido y sin oscilaciones inestables.",
          "options": [
            "Porque escalar las variables categóricas permite que OneHotEncoder detecte automáticamente cuántas columnas binarias debe generar sin riesgo de colinealidad.",
            "Porque el algoritmo de optimización (descenso de gradiente) converge mucho más lento o puede fallar si las variables tienen escalas muy distintas (ej. edad vs. ingreso).",
            "Porque la regresión logística exige obligatoriamente que todos los valores numéricos del dataset sean números enteros positivos antes de calcular las probabilidades.",
            "Porque StandardScaler convierte las probabilidades que están fuera del rango [0,1] hacia valores válidos, permitiendo que la función sigmoide se ajuste correctamente."
          ],
          "correct": 1,
          "id": 1179
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "¿Qué es el `ColumnTransformer` en scikit-learn y cómo funciona dentro del preprocesamiento?",
          "feedback": "En un dataset real tienes variables numéricas y categóricas mezcladas. ColumnTransformer te permite decir: 'aplica OneHotEncoder a estas 3 columnas' y 'aplica StandardScaler a estas otras 4'. Al ejecutarlo, procesa todo en paralelo y te devuelve una sola matriz lista para el modelo.",
          "options": [
            "Es un modelo de Machine Learning que predice qué columnas son las más importantes para el resultado final, descartando aquellas que generan multicolinealidad severa.",
            "Es el algoritmo interno de la regresión logística que transforma los coeficientes β en probabilidades utilizando la función sigmoide sobre todas las columnas continuas.",
            "Es un objeto que permite aplicar transformaciones distintas a distintos grupos de columnas (ej. OHE a categóricas, StandardScaler a numéricas) y devuelve una sola matriz unificada.",
            "Es una función matemática exclusiva de Pandas que elimina las variables categóricas del dataset para que la Regresión Logística pueda ejecutarse sin arrojar errores."
          ],
          "correct": 2,
          "id": 1180
        },
        {
          "category": "entrenamiento",
          "categoryName": "Entrenamiento: Costo, Gradiente y MLE",
          "text": "En el contexto de la Regresión Logística, ¿qué son la 'Función de Costo' (log-loss) y el 'Descenso de Gradiente'?",
          "feedback": "La función de costo (Pérdida Logística o Log-Loss) cuantifica el error (penaliza más si el modelo estaba muy seguro de una predicción incorrecta). El descenso de gradiente es el 'motor' que, paso a paso, ajusta los parámetros (pesos β) bajando por la pendiente hasta encontrar el punto de menor error (convergencia).",
          "options": [
            "Ambos términos son sinónimos que describen el proceso de aplicar One-Hot Encoding a variables nominales, asegurando que el costo computacional no crezca exponencialmente.",
            "La función de costo transforma variables numéricas a valores entre 0 y 1; el descenso de gradiente divide los datos en conjuntos de entrenamiento y prueba aleatorios.",
            "La función de costo mide qué tan grandes son los errores del modelo; el descenso de gradiente es el algoritmo iterativo que actualiza los coeficientes β para minimizar dicho costo.",
            "La función de costo calcula automáticamente el R² ajustado del modelo; el descenso de gradiente añade nuevas variables polinomiales para mejorar la precisión global."
          ],
          "correct": 2,
          "id": 1181
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "Al dividir tus datos con `train_test_split` en un problema de clasificación, incluyes el argumento `stratify=y`. ¿Para qué sirve esto y por qué es vital?",
          "feedback": "Sin `stratify=y`, el azar podría hacer que tu conjunto de prueba termine solo con ejemplos de la clase mayoritaria (ej. puros créditos aprobados). Al estratificar, obligas a que si el dataset original tiene 10% de fraude, el train tenga 10% y el test tenga 10%. Es crítico para una evaluación realista.",
          "options": [
            "Fuerza a que las clases desbalanceadas se equilibren mágicamente al 50/50 generando datos sintéticos nuevos antes de separar el entrenamiento y la validación final.",
            "Sirve para ordenar el dataset alfabéticamente según la variable objetivo antes de dividirlo, asegurando que el modelo logístico procese los datos más rápido en memoria.",
            "Garantiza que la proporción de clases (ej. 80% aprobados, 20% rechazados) se mantenga exactamente igual tanto en el conjunto de entrenamiento como en el de prueba.",
            "Transforma automáticamente la variable objetivo (y) usando One-Hot Encoding internamente, evitando tener que usar un ColumnTransformer para las columnas categóricas."
          ],
          "correct": 2,
          "id": 1182
        },
        {
          "category": "despliegue",
          "categoryName": "Despliegue y Producción",
          "text": "Una vez que evaluaste tu Pipeline y determinaste que es el 'mejor modelo', ¿cuál es el paso final antes de exportarlo a producción?",
          "feedback": "El train/test split (80/20) era solo un experimento para simular el futuro y MEDIR el modelo. Una vez confirmas que el modelo es bueno, no desperdicias el 20% de tus datos: reentrenas el Pipeline final con todos los datos disponibles. Luego lo exportas con `joblib.dump(pipeline_final, 'modelo.pkl')`.",
          "options": [
            "Se aplican más transformaciones polinomiales para forzar que el Accuracy llegue al 100% en el conjunto de prueba, y luego se exportan los datos en formato CSV.",
            "Se exporta únicamente el modelo LogisticRegression entrenado con X_train, ignorando el ColumnTransformer para ahorrar espacio en la base de datos de producción.",
            "Se debe cambiar el hiperparámetro stratify a False y reentrenar solo con el conjunto de prueba, exportando el resultado mediante el comando interno pipeline.deploy().",
            "Se reentrena el Pipeline completo (preprocesamiento + modelo) utilizando el 100% de los datos (X e y completos) y se lo exporta como un archivo .pkl usando joblib."
          ],
          "correct": 3,
          "id": 1183
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "¿Qué es exactamente la curva ROC (Receiver Operating Characteristic) y qué muestra visualmente?",
          "feedback": "La curva ROC evalúa cómo se comporta el modelo en TODOS los umbrales de probabilidad posibles (no solo en 0.5). El eje Y es el Recall (cuántos positivos reales encuentro) y el eje X es el FPR (cuántas falsas alarmas genero). Un modelo perfecto sube recto por el eje Y.",
          "options": [
            "Es un gráfico tridimensional que relaciona el descenso de gradiente, la función de costo log-loss y la tasa de aprendizaje durante el entrenamiento del algoritmo logístico.",
            "Es una curva que representa la Media Armónica entre Precision y Recall, utilizada exclusivamente cuando las clases del dataset están severamente desbalanceadas en la vida real.",
            "Es un gráfico que muestra el equilibrio entre la Tasa de Verdaderos Positivos (Recall) y la Tasa de Falsos Positivos a medida que varía el umbral de decisión del modelo.",
            "Es una métrica numérica que penaliza fuertemente el Overfitting, dibujando una línea recta cuando el modelo memoriza el ruido del conjunto de datos de entrenamiento."
          ],
          "correct": 2,
          "id": 1184
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "Asociada a la curva ROC se encuentra la métrica AUC (Área Bajo la Curva). ¿Cómo se interpreta el valor del AUC en un modelo de clasificación?",
          "feedback": "AUC (Area Under the Curve) resume toda la curva ROC en un solo número. Si el AUC es 0.5, el modelo tira una moneda al azar. Si es 1.0, el modelo separa perfectamente las dos clases. En la práctica, un AUC > 0.8 se considera bueno a excelente dependiendo del problema.",
          "options": [
            "Es una penalización por complejidad: a mayor número de variables categóricas ingresadas al modelo, menor será el AUC, forzando al científico a eliminar predictores.",
            "Su rango va de 0 a 100, donde los valores más cercanos a 0 indican que el modelo generaliza bien y los valores cercanos a 100 indican un sobreajuste severo en los datos.",
            "Su rango va de 0.5 (clasificador aleatorio inútil) a 1.0 (clasificador perfecto). Un AUC más alto indica mayor capacidad general para distinguir entre la clase positiva y la negativa.",
            "Mide el porcentaje exacto de predicciones correctas sobre el total; un AUC de 0.80 significa que el modelo acertó exactamente el 80% de todas las observaciones de prueba."
          ],
          "correct": 2,
          "id": 1185
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "Dentro del Classification Report, ¿qué mide la métrica PRECISION y en qué escenario de negocio debemos priorizarla?",
          "feedback": "Precision = TP / (TP + FP). Responde a: 'Cuando el modelo grita ¡LO ENCONTRÉ!, ¿qué tan probable es que tenga razón?'. Si la Precision es baja, el modelo genera muchas 'Falsas Alarmas' (Falsos Positivos). Si un falso positivo te cuesta dinero (ej. dar crédito malo, spam en bandeja de entrada), optimiza Precision.",
          "options": [
            "Mide: el equilibrio armónico general de los errores del modelo. Se prioriza únicamente cuando las clases del dataset de entrenamiento se encuentran perfectamente balanceadas.",
            "Mide: de todos los que el modelo etiquetó como 'Positivos', ¿cuántos realmente lo eran? Se prioriza cuando un Falso Positivo es muy costoso (ej. aprobar crédito a quien no pagará).",
            "Mide: de todos los casos reales 'Positivos', ¿a cuántos logró detectar el modelo? Se prioriza cuando es vital no dejar escapar ningún caso real (ej. detección de cáncer grave).",
            "Mide: la cantidad de veces que el modelo acertó tanto en verdaderos positivos como verdaderos negativos. Se prioriza cuando ambas clases son igualmente importantes para el banco."
          ],
          "correct": 1,
          "id": 1186
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "Dentro del Classification Report, ¿qué mide la métrica RECALL y en qué escenario de negocio es crítico maximizarla?",
          "feedback": "Recall (o Sensibilidad) = TP / (TP + FN). Responde a: 'De todos los positivos que andan sueltos, ¿qué porcentaje atrapé?'. Un modelo con bajo Recall es un modelo ciego que deja escapar casos reales (Falsos Negativos). En medicina o fraude, escapar un caso es letal, por eso se exige un Recall altísimo.",
          "options": [
            "Mide: el número total de observaciones reales en cada clase (soporte). Se prioriza para asegurar que el conjunto de prueba tenga suficientes datos para ser estadísticamente válido.",
            "Mide: de todos los que el modelo predijo como 'Positivos', ¿cuántos fueron correctos? Se prioriza cuando las falsas alarmas generan enormes costos económicos a la empresa.",
            "Mide: de todos los casos reales 'Positivos' que existen, ¿a cuántos logró detectar el modelo? Se prioriza cuando un Falso Negativo es inaceptable (ej. no detectar un paciente con cáncer).",
            "Mide: la proporción de la varianza explicada por el modelo de regresión logística, útil únicamente cuando las variables predictoras superan las mil columnas transformadas."
          ],
          "correct": 2,
          "id": 1187
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "¿Qué es la métrica F1-Score y cuándo es la mejor opción para evaluar un modelo?",
          "feedback": "El F1-Score castiga los valores extremos. Si un modelo tiene 100% Precision pero 0% Recall (no detecta casi nada), su promedio simple sería 50%, lo cual es engañoso. La media armónica (F1-Score) tiraría ese número casi a 0. Es la métrica resumen más honesta en clasificación desbalanceada.",
          "options": [
            "Es el promedio simple (suma dividida para dos) de la Exactitud (Accuracy) y el Soporte (Support), y se utiliza en algoritmos de aprendizaje no supervisado sin etiquetas.",
            "Es una métrica que solo evalúa los Verdaderos Negativos; se utiliza exclusivamente para validar modelos donde la clase mayoritaria representa el 99% de las observaciones reales.",
            "Es la media armónica entre Precision y Recall. Es ideal cuando te importan tanto los Falsos Positivos como los Falsos Negativos, especialmente si las clases están muy desbalanceadas.",
            "Es el gráfico que resulta de trazar Precision en el eje Y y Recall en el eje X, calculando el área bajo dicha curva para determinar si el modelo sufrió sobreajuste en el train."
          ],
          "correct": 2,
          "id": 1188
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "En la tabla generada por `classification_report`, aparece una columna llamada 'support' (Soporte). ¿Qué indica exactamente este número?",
          "feedback": "El Support no evalúa qué tan bueno es el modelo; solo te describe la realidad de tu dataset (ej. 200 observaciones en la clase 0 y 800 en la clase 1). Te sirve para saber rápidamente si estás lidiando con clases desbalanceadas y darle el peso adecuado a las métricas.",
          "options": [
            "Indica el grado de soporte matemático que tiene cada variable predictora frente al modelo; un support bajo sugiere que la variable debe eliminarse para evitar ruido.",
            "Indica el número real de observaciones que pertenecen a esa clase específica dentro del conjunto de datos evaluado (por ejemplo, cuántos clientes realmente pagaron y cuántos no).",
            "Representa la confianza probabilística promedio con la que el modelo emitió sus predicciones; si es menor a 0.5 el reporte invalida los resultados automáticamente.",
            "Es el hiperparámetro de regularización L2 aplicado internamente por scikit-learn para evitar que el descenso de gradiente diverja durante la fase de entrenamiento."
          ],
          "correct": 1,
          "id": 1189
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "¿Qué mide el Accuracy (Exactitud) y cuál es su trampa o limitación mortal en Machine Learning?",
          "feedback": "Accuracy responde: 'De todo lo que dije, ¿en qué porcentaje acerté?'. En el mundo real, los problemas (fraude, enfermedades, clics en anuncios) son eventos raros (desbalanceados). Evaluar un modelo de fraude con Accuracy es el error de novato más común; siempre debes mirar Precision, Recall o F1-Score.",
          "options": [
            "Mide el área bajo la curva ROC. La limitación es que solo funciona en problemas de clasificación multiclase, arrojando siempre un error de sintaxis en problemas de clasificación binaria.",
            "Mide el error cuadrático medio de las predicciones probabilísticas. Su única limitación es que no puede utilizarse con la función sigmoide si las variables no han sido escaladas.",
            "Mide el porcentaje total de aciertos (TP+TN)/Total. Es engañoso con clases desbalanceadas: si el 99% de emails NO son spam, un modelo inútil que siempre diga 'No spam' tendrá 99% de Accuracy.",
            "Mide qué tan rápido convergió el modelo durante el descenso de gradiente. Es problemático porque depende enormemente de la potencia del procesador de la computadora utilizada."
          ],
          "correct": 2,
          "id": 1190
        },
        {
          "category": "fundamentos",
          "categoryName": "Fundamentos: Regresión vs Clasificación",
          "text": "Desde el punto de vista del Aprendizaje Supervisado, ¿cuál es la diferencia fundamental entre una Regresión Lineal y una Clasificación?",
          "feedback": "El tipo de algoritmo que usas depende estrictamente de tu variable objetivo (Y). Si Y es un número (dólares, edad, temperatura), es Regresión. Si Y es una clase (Spam/No Spam, Perro/Gato, Sano/Enfermo), es Clasificación.",
          "options": [
            "La regresión predice un valor numérico continuo (ej. el precio en dólares de un auto), mientras que la clasificación predice una categoría discreta predefinida (ej. crédito Aprobado o Rechazado).",
            "La regresión pertenece al aprendizaje no supervisado porque no necesita una variable objetivo (Y), mientras que la clasificación requiere etiquetas manuales generadas por humanos.",
            "La clasificación utiliza múltiples variables predictoras (X) para su análisis, pero la regresión lineal está limitada matemáticamente a usar una sola variable (regresión simple).",
            "La regresión solo se aplica a datasets con columnas numéricas puras, mientras que la clasificación es obligatoria en cuanto aparece al menos una columna categórica (como 'provincia')."
          ],
          "correct": 0,
          "id": 1191
        },
        {
          "category": "fundamentos",
          "categoryName": "Fundamentos: Regresión vs Clasificación",
          "text": "¿Por qué un modelo de Regresión Lineal clásica falla y no debe usarse para resolver un problema de clasificación binaria (0 y 1)?",
          "feedback": "Una línea recta va desde menos infinito hasta más infinito. Si mapeas clientes (0=rechazado, 1=aprobado) y trazas una recta, para un cliente muy riesgoso la recta te dará y=-2. ¿Qué significa -2% de probabilidad? No tiene sentido matemático ni estadístico. Necesitamos una curva que se acote entre 0 y 1.",
          "options": [
            "Porque la regresión lineal genera una curva en forma de 'S' que es incapaz de interceptar correctamente los puntos binarios trazados en un plano cartesiano de dos dimensiones.",
            "Porque el descenso de gradiente en la regresión lineal requiere obligatoriamente que todas las observaciones pertenezcan a la misma clase, haciendo imposible la predicción binaria.",
            "Porque la métrica R² ajustado se vuelve matemáticamente infinita cuando la variable objetivo solo contiene ceros y unos, bloqueando el código de Python internamente.",
            "Porque la recta de regresión puede predecir valores negativos (ej. -0.5) o superiores a 1 (ej. 1.8), los cuales no tienen sentido ni pueden interpretarse como probabilidades válidas."
          ],
          "correct": 3,
          "id": 1192
        },
        {
          "category": "entrenamiento",
          "categoryName": "Entrenamiento: Costo, Gradiente y MLE",
          "text": "El corazón matemático de la Regresión Logística es la función Sigmoide (σ). ¿Cuál es su propiedad matemática principal que resuelve el problema de clasificación?",
          "feedback": "La Sigmoide soluciona el problema de la regresión lineal. Toma la ecuación lineal clásica (β₀ + β₁X) y la envuelve: p = 1 / (1 + e^-(β₀ + β₁X)). Así, sin importar qué tan grande o negativo sea el resultado lineal, la sigmoide lo fuerza suavemente a ser un porcentaje válido entre 0% y 100%.",
          "options": [
            "Es un transformador de datos de Scikit-Learn que normaliza la variable objetivo (y) eliminando los valores atípicos severos para que la matriz de confusión sea simétrica.",
            "Es una ecuación cuadrática que se activa únicamente si el coeficiente de correlación de Pearson entre X e Y es superior a 0.80, garantizando alta precisión en el modelo.",
            "Es una función matemática con forma de 'S' que toma cualquier número real y lo comprime estrictamente dentro del intervalo [0, 1], permitiendo interpretarlo como una probabilidad.",
            "Es una función lineal que maximiza la distancia entre las clases creando múltiples hiperplanos de separación sin requerir preprocesamiento adicional sobre las variables predictoras."
          ],
          "correct": 2,
          "id": 1193
        },
        {
          "category": "entrenamiento",
          "categoryName": "Entrenamiento: Costo, Gradiente y MLE",
          "text": "La estimación de Máxima Verosimilitud (MLE) es el concepto teórico detrás de la Regresión Logística. En términos simples, ¿qué busca hacer MLE?",
          "feedback": "Imagina que eres el algoritmo: miras un cliente real que FUE aprobado. Ajustas tus parámetros (β) para que, al pasar por tu fórmula, ese cliente reciba un 99% de probabilidad, no un 10%. MLE busca matemáticamente los pesos que hagan que los datos que ya observaste sean 'lo más probables posible' según tu modelo.",
          "options": [
            "Maximiza el número de columnas creadas por el OneHotEncoder para asegurar que el modelo tenga suficiente varianza explicativa antes de iniciar el descenso de gradiente.",
            "Prueba muchas combinaciones de coeficientes β y se queda con aquellos que asignan probabilidades altas a los casos positivos reales y probabilidades bajas a los casos negativos reales.",
            "Busca la línea recta con el Error Cuadrático Medio (MSE) más bajo posible, penalizando únicamente a las variables que presenten alta correlación entre sí (multicolinealidad).",
            "Filtra probabilísticamente el conjunto de prueba para garantizar que los Falsos Positivos nunca excedan el 5% de las observaciones reales, ajustando el umbral dinámicamente."
          ],
          "correct": 1,
          "id": 1194
        },
        {
          "category": "entrenamiento",
          "categoryName": "Entrenamiento: Costo, Gradiente y MLE",
          "text": "¿Por qué se utiliza el 'Logaritmo' (Log-Verosimilitud) en lugar de la Verosimilitud normal al momento de derivar la Función de Costo?",
          "feedback": "Probabilidad conjunta = P(cliente1) × P(cliente2) × ... × P(cliente1000). Multiplicar mil números menores a 1 (ej. 0.8 × 0.2 × 0.9...) da un número minúsculo (0.00000000001) que las computadoras redondean a 0 (underflow matemático). Propiedad de logaritmos: log(A×B) = log(A) + log(B). Las sumas son seguras computacionalmente.",
          "options": [
            "Porque el logaritmo garantiza que las variables categóricas codificadas con OHE mantengan independencia estadística y no caigan en la Trampa de las Variables Ficticias (Dummy Trap).",
            "Porque aplicar el logaritmo reduce automáticamente el número de iteraciones necesarias en el descenso de gradiente limitándolo siempre a un máximo de 100 iteraciones (max_iter).",
            "Porque Scikit-Learn requiere que todas las métricas de evaluación sean números logarítmicos para poder graficar correctamente la curva ROC en un espacio de dos dimensiones.",
            "Porque el logaritmo transforma productos (multiplicaciones de miles de probabilidades pequeñas) en sumas, evitando un problema computacional llamado 'underflow' donde las multiplicaciones darían cero."
          ],
          "correct": 3,
          "id": 1195
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "Un Pipeline encadena el preprocesamiento y el estimador final. ¿Por qué es estructuralmente superior usar un Pipeline en lugar de aplicar las transformaciones a mano línea por línea?",
          "feedback": "Con transformaciones manuales es facilísimo cometer el error de hacer `scaler.fit_transform(X_test)`, arruinando tu evaluación por completo al filtrar información del test. El Pipeline es una 'tubería' sellada: si le haces `.fit()`, entrena lo de adentro de forma segura. Si le haces `.predict()`, solo transforma. Es disciplina forzada por código.",
          "options": [
            "Porque encadenar pasos reduce el peso en megabytes del archivo .pkl exportado, permitiendo que las aplicaciones web con FastAPI carguen los modelos instantáneamente en memoria.",
            "Porque el Pipeline es el único objeto capaz de graficar automáticamente la matriz de confusión y calcular el F1-Score sin necesidad de importar la librería de métricas de scikit-learn.",
            "Porque asegura que `.fit()` se ejecute solo en el conjunto de entrenamiento, y aplica automáticamente `.transform()` al conjunto de prueba, eliminando el riesgo de Data Leakage accidental.",
            "Porque al usar un Pipeline, el algoritmo de Regresión Logística ignora la multicolinealidad, haciendo que el modelo se vuelva inmune al sobreajuste severo en datos nuevos."
          ],
          "correct": 2,
          "id": 1196
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "La Regla de Oro del preprocesamiento establece que funciones como `scaler.fit()` u `ohe.fit()` deben aplicarse EXCLUSIVAMENTE sobre el conjunto de Entrenamiento (X_train). ¿Por qué?",
          "feedback": "Data Leakage (Fuga de Datos). El test set debe ser un simulacro perfecto de la vida real (clientes nuevos del futuro). Si usas el test set para calcular la media del escalado, le estás pasando información del 'futuro' al modelo presente. En la realidad, no puedes sacar el promedio de clientes que aún no existen.",
          "options": [
            "Porque `.fit()` genera columnas polinomiales de forma aleatoria; si se aplica en el test, el número de columnas no coincidirá jamás con la matriz dimensional del conjunto de entrenamiento.",
            "Porque el conjunto de prueba siempre carece de la variable objetivo (Y), haciendo matemáticamente imposible que el StandardScaler o el OneHotEncoder puedan completar su rutina interna.",
            "Porque la función `.fit()` altera permanentemente la estructura del disco duro, y aplicarla múltiples veces sobrescribiría los archivos CSV originales alojados en Google Colab o tu PC.",
            "Porque `.fit()` aprende parámetros de los datos (ej. el promedio y la desviación estándar). Si los aprendes del Test, el modelo conocerá información de los datos de evaluación, perdiendo validez."
          ],
          "correct": 3,
          "id": 1197
        },
        {
          "category": "preprocesamiento",
          "categoryName": "Preprocesamiento (Escalado, OHE, ColumnTransformer)",
          "text": "En el OneHotEncoder, el parámetro `handle_unknown='ignore'` es vital para modelos en producción. ¿Qué problema previene exactamente?",
          "feedback": "Imagina entrenar tu modelo con historial crediticio 'Bueno', 'Regular' y 'Malo'. Se exporta a producción y, un año después, el sistema del banco añade el historial 'Excelente'. Si no tienes `handle_unknown='ignore'`, cuando un cliente ponga 'Excelente', el OneHotEncoder arrojará un KeyError crasheando toda tu API web.",
          "options": [
            "Ignora y elimina las categorías que generan multicolinealidad perfecta (Dummy Trap), haciendo innecesario el uso del parámetro clásico 'drop=first' durante la instanciación.",
            "Evita que el modelo evalúe observaciones que contengan la variable objetivo (y) nula, ignorando automáticamente esas filas sin interrumpir el proceso del descenso de gradiente.",
            "Ignora de manera inteligente todas las variables numéricas que no hayan sido procesadas previamente por un StandardScaler, procesándolas temporalmente en formato booleano binario.",
            "Evita que la aplicación colapse si un cliente nuevo ingresa con una categoría que el modelo no vio durante el entrenamiento (ej. aparece una provincia nueva en el formulario)."
          ],
          "correct": 3,
          "id": 1198
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "En el contexto de una Matriz de Confusión para aprobación de créditos bancarios, ¿qué representa estadísticamente un 'Error Tipo I' (Falso Positivo)?",
          "feedback": "Positivo = Lo que predijo el modelo (Aprobó). Falso = Estaba equivocado (el cliente no pagó). En la medicina, un Falso Positivo es decirle a alguien que tiene una enfermedad cuando está sano. Cada dominio tiene un error que cuesta más; en bancos, los FP son usualmente el peor escenario (pérdida de capital).",
          "options": [
            "El modelo acierta la predicción de rechazo (True Negative), pero el sistema interno del banco aprueba el crédito manualmente debido a políticas secundarias de retención de usuarios.",
            "El modelo predice '0' (Rechazar crédito), pero la realidad es '1' (Era un buen cliente). Genera un costo de oportunidad al perder a un cliente muy rentable a largo plazo.",
            "El modelo predice '1' (Aprobar crédito), pero la realidad es '0' (Es un mal cliente que no pagará). Genera pérdida directa de dinero para la institución bancaria.",
            "El modelo genera internamente una predicción de 0.5 (Incertidumbre perfecta), forzando al analista humano a tomar la decisión final sobre el riesgo del cliente en cuestión."
          ],
          "correct": 2,
          "id": 1199
        },
        {
          "category": "evaluacion",
          "categoryName": "Métricas de Evaluación: ROC, AUC y Reporte",
          "text": "Siguiendo con la Matriz de Confusión, ¿qué representa estadísticamente un 'Error Tipo II' (Falso Negativo)?",
          "feedback": "Negativo = Lo que predijo el modelo (Rechazó). Falso = Estaba equivocado (el cliente SÍ habría pagado). En medicina, decirle a un paciente con cáncer que está sano es un Falso Negativo (consecuencias fatales). Reducir este error exige aumentar el Recall.",
          "options": [
            "El modelo predice un valor continuo negativo (ej. -0.80), lo que evidencia matemáticamente el error de utilizar Regresión Lineal Clásica para tareas binarias de clasificación.",
            "El modelo acierta la predicción de aprobación (True Positive), pero el crédito es rechazado posteriormente por un oficial de cuentas que revisó la documentación manual del cliente.",
            "El modelo predice '1' (Aprobar crédito), pero la realidad es '0' (Es un cliente que entrará en mora). El banco asume una pérdida directa sobre el monto total prestado al usuario.",
            "El modelo predice '0' (Rechazar crédito), pero la realidad es '1' (Era un cliente excelente). El banco pierde una oportunidad de negocio y decepciona a un buen usuario."
          ],
          "correct": 3,
          "id": 1200
        },
        {
          "category": "despliegue",
          "categoryName": "Despliegue y Producción",
          "text": "En Scikit-Learn, luego de entrenar tu Pipeline logístico, tienes acceso a los métodos `.predict()` y `.predict_proba()`. ¿Cuál es la diferencia entre ellos?",
          "feedback": "En producción (FastAPI), usar `.predict_proba()` es mucho más útil. Te permite tomar decisiones de negocio inteligentes: 'Si la probabilidad de fraude es > 90%, bloquear cuenta; si está entre 60% y 90%, mandar a revisión humana; si es < 60%, aprobar automáticamente'. Con `.predict()` pierdes todos esos matices.",
          "options": [
            ".predict() devuelve probabilidades exclusivas para la clase negativa; .predict_proba() devuelve exactamente el mismo valor pero ajustado estadísticamente para la clase positiva mayoritaria.",
            ".predict() calcula el rendimiento del modelo generando la matriz de confusión; .predict_proba() grafica directamente la curva ROC en pantalla sin necesidad de importar Matplotlib o Seaborn.",
            ".predict() devuelve directamente la etiqueta final de clase (ej. 0 o 1) asumiendo un umbral del 50%; .predict_proba() devuelve las probabilidades decimales brutas (ej. 85%) de pertenecer a la clase.",
            ".predict() se utiliza únicamente durante el entrenamiento con el conjunto X_train; .predict_proba() se habilita exclusivamente cuando el modelo pasa a fase de validación con el X_test."
          ],
          "correct": 2,
          "id": 1201
        },
        {
          "category": "entrenamiento",
          "categoryName": "Entrenamiento: Costo, Gradiente y MLE",
          "text": "Al instanciar `LogisticRegression()`, ocasionalmente puede aparecer un 'Warning de No Convergencia'. ¿Qué hiperparámetro recomienda el taller ajustar para solucionarlo?",
          "feedback": "El descenso de gradiente es como bajar una montaña dando pasos. Si al llegar a 100 pasos (el máximo por defecto) el algoritmo ve que todavía está bajando (no ha llegado al fondo llano), grita un Warning: 'STOP: TOTAL NO. of ITERATIONS REACHED LIMIT'. Le subes el límite (max_iter) y lo dejas caminar hasta que converja.",
          "options": [
            "Cambiar el parámetro `random_state` a cero. Esto asegura que el algoritmo de descenso de gradiente arranque siempre desde el mínimo local más cercano en la primera iteración.",
            "Desactivar la regularización ajustando `C=0`. Esto elimina todas las restricciones matemáticas sobre los pesos β, garantizando convergencia absoluta independientemente del estado de los datos.",
            "Aumentar `max_iter` (ej. de 100 a 500 o 1000). Esto le da al Descenso de Gradiente más 'pasos' iterativos para lograr encontrar el mínimo de la función de costo.",
            "Aumentar drásticamente la tasa de aprendizaje (`learning_rate`), provocando que los pesos den saltos gigantescos y alcancen el punto óptimo de manera forzada en menos de 10 iteraciones."
          ],
          "correct": 2,
          "id": 1202
        },
        {
          "category": "despliegue",
          "categoryName": "Despliegue y Producción",
          "text": "Al usar `pipeline_prod = joblib.load('modelo_creditos.pkl')` en un script completamente nuevo o una API web, ¿por qué es tan simple predecir clientes nuevos enviando solo un DataFrame crudo con sus datos?",
          "feedback": "Esa es la magia del Pipeline y la razón por la que en Machine Learning maduro nadie usa transformadores sueltos. El objeto .pkl que descargas contiene 'memoria': sabe que 'Azuay' es la columna 3 y sabe cuál era la media exacta de 'Edad' durante el entrenamiento. Le pasas datos crudos, él hace todo el trabajo interno sucio y escupe la predicción limpia.",
          "options": [
            "Porque el desarrollador backend debe reescribir manualmente todo el bloque del ColumnTransformer en la API web antes de ejecutar el .predict(), pero esto se considera una convención de programación estándar.",
            "Porque la librería joblib incluye un módulo de Inteligencia Artificial secundaria que detecta el formato de cualquier diccionario JSON entrante y lo adapta mágicamente sin necesitar transformadores previos.",
            "Porque el objeto importado (Pipeline) lleva guardadas en su interior tanto las reglas del preprocesamiento (OneHotEncoder, Scaler ajustados) como los coeficientes finales del modelo, aplicando todo automáticamente.",
            "Porque al exportar un modelo con scikit-learn, la herramienta deshabilita por completo la necesidad de codificar las variables categóricas, obligando a los algoritmos a procesar texto en crudo directamente."
          ],
          "correct": 2,
          "id": 1203
        },
        {
          "id": "af699941-a260-4a1b-80c1-027df0482f2e",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "En la regla de actualización del descenso de gradiente, ¿qué controla el parámetro α (tasa de aprendizaje)?",
          "options": [
            "El porcentaje de datos reservado para el conjunto de prueba.",
            "El número de variables predictoras que se usan en el modelo.",
            "El tamaño del paso que se da en cada iteración al actualizar los coeficientes.",
            "El umbral de decisión que separa las dos clases."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. α determina qué tan grande es cada ajuste de los coeficientes β en cada iteración del descenso de gradiente."
        },
        {
          "id": "be6064c7-8878-4bc6-9b8d-796fc2f85530",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "¿En qué situación conviene priorizar la métrica Recall sobre Precision?",
          "options": [
            "Cuando todas las clases están perfectamente balanceadas y no importa ningún tipo de error.",
            "Cuando el dataset no tiene variables categóricas.",
            "Cuando el modelo tiene un Accuracy del 100%.",
            "Cuando un falso negativo (no detectar un caso positivo real) es muy costoso."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Recall mide cuántos de los casos realmente positivos fueron detectados por el modelo; es prioritario cuando dejar pasar un positivo real (ej. rechazar un buen cliente) tiene un costo alto."
        },
        {
          "id": "c907ab0c-a57e-48b7-8af1-3d78c5ba3f06",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "¿Para qué sirve `pipeline.named_steps['modelo']` dentro de un Pipeline ya entrenado?",
          "options": [
            "Para acceder directamente al objeto de ese paso específico (en este caso, el modelo LogisticRegression ya entrenado).",
            "Para cambiar el nombre asignado a ese paso.",
            "Para reentrenar únicamente ese paso con nuevos datos.",
            "Para eliminar ese paso del pipeline."
          ],
          "correct": 0,
          "feedback": "Respuesta correcta. `named_steps` permite acceder, por su nombre, a cualquiera de los objetos que forman el pipeline — por ejemplo, para consultar atributos del modelo entrenado como `n_iter_`."
        },
        {
          "id": "b7596905-2b6b-4a07-b492-70140b8b8877",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "¿Qué es la \"pérdida logística\" (log-loss) que scikit-learn minimiza al entrenar una regresión logística?",
          "options": [
            "El tiempo que tarda el modelo en converger.",
            "El número total de errores de clasificación cometidos por el modelo.",
            "La diferencia entre el número de aprobados y rechazados.",
            "El negativo de la log-verosimilitud, usado como función de costo J(β)."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. Maximizar la log-verosimilitud equivale a minimizar su negativo; ese negativo es la función de costo que el algoritmo de optimización reduce iterativamente."
        },
        {
          "id": "5557aece-d94b-4084-ab29-9e8cc422fd8a",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "¿Qué diferencia hay entre `pipeline.fit(X_train, y_train)` y `pipeline_final.fit(X, y)` (usando el DataFrame completo)?",
          "options": [
            "`pipeline_final.fit(X, y)` no entrena ningún modelo, solo transforma los datos.",
            "El primero entrena con el 80% de los datos para evaluación; el segundo reentrena con el 100% de los datos para el modelo que se exportará.",
            "`pipeline_final.fit(X, y)` solo puede usarse con variables numéricas.",
            "Ambas líneas de código hacen exactamente lo mismo."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. `X` y `y` contienen el dataset completo (sin dividir), por lo que `pipeline_final` se entrena con toda la información disponible, a diferencia del pipeline de evaluación entrenado solo con X_train/y_train."
        },
        {
          "id": "613f8b44-3ca4-4f0c-a2d7-0c43ae42d7db",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "Para calcular `roc_auc_score(y_test, y_proba)`, ¿qué debe contener `y_proba`?",
          "options": [
            "Los valores escalados de las variables numéricas.",
            "El nombre de las columnas categóricas del dataset.",
            "Las probabilidades predichas (no las clases 0/1) de que cada observación pertenezca a la clase positiva.",
            "Las clases reales del conjunto de entrenamiento."
          ],
          "correct": 2,
          "feedback": "Respuesta correcta. A diferencia de `classification_report`, que usa la clase predicha (0/1), `roc_auc_score` necesita las probabilidades (por ejemplo, de `predict_proba()[:, 1]`) para construir la curva ROC."
        },
        {
          "id": "40dc24bf-4176-4a8e-a67b-4e367fe05812",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "En `LogisticRegression(C=1.0)`, ¿qué controla el parámetro `C`?",
          "options": [
            "La cantidad de iteraciones necesarias para converger.",
            "El número de columnas categóricas que se codificarán.",
            "El umbral de decisión usado por predict().",
            "La fuerza de la regularización aplicada al modelo (a menor C, mayor regularización)."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. `C` es el inverso de la fuerza de regularización: valores más pequeños de C aplican una regularización más fuerte sobre los coeficientes del modelo."
        },
        {
          "id": "8d3e4129-bb96-48b9-bc4b-80f6828ac29d",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "¿Para qué se utiliza la librería joblib en el flujo de trabajo de un modelo de machine learning?",
          "options": [
            "Para calcular automáticamente las métricas de evaluación del modelo.",
            "Para graficar la curva ROC y la matriz de confusión.",
            "Para dividir el dataset en conjuntos de entrenamiento y prueba.",
            "Para guardar y cargar objetos de Python, como un modelo o pipeline ya entrenado, en un archivo reutilizable."
          ],
          "correct": 3,
          "feedback": "Respuesta correcta. joblib serializa (guarda) objetos de Python como un modelo entrenado en un archivo .pkl, que luego puede cargarse y usarse sin necesidad de reentrenar."
        },
        {
          "id": "f132bbaa-c7ab-4ae6-b650-de111c698bff",
          "category": "repaso_extra",
          "categoryName": "Refuerzo Semana 4",
          "text": "¿Qué información entrega la función `classification_report(y_test, y_pred)` de scikit-learn?",
          "options": [
            "La curva ROC graficada automáticamente.",
            "Precision, Recall, F1-Score y el número de observaciones (support) por cada clase, además del Accuracy general.",
            "Únicamente el valor de Accuracy del modelo.",
            "Los coeficientes β estimados por el modelo."
          ],
          "correct": 1,
          "feedback": "Respuesta correcta. `classification_report` resume, para cada clase, sus métricas de Precision, Recall y F1-Score, junto con el número de observaciones y el Accuracy general del modelo."
        }
      ],
      "titulo": "Semana 4"
    }
  ]
};