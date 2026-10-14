Pregunta 1

El informe Lighthill (1973) fue determinante para el Primer Invierno de la IA. ¿Qué concluyó ese informe?

A. Que la IA había cumplido todas sus promesas y merecía mayor financiamiento para la siguiente década.
B. Que la IA era una amenaza para la seguridad nacional y debía regularse urgentemente.
C. Que la IA no había cumplido ninguna de sus promesas fundamentales, justificando el recorte masivo de fondos.
Correcta
Correcto. Lighthill concluyó que el campo había sobreprometido y subentregado. Su informe fue la justificación técnica para el recorte masivo de financiamiento que desencadenó el Primer Invierno.
D. Que las redes neuronales eran superiores a los sistemas expertos y merecían toda la inversión futura.

Retroalimentación
James Lighthill, matemático contratado por el gobierno británico, evaluó el progreso de la IA y concluyó que los avances reales eran muy modestos en comparación con las promesas realizadas. Su informe justificó el recorte casi total del financiamiento gubernamental en el Reino Unido y envió una señal negativa a otros organismos financiadores, incluyendo DARPA en EE.UU. Es el ejemplo clásico del ciclo: promesas exageradas → expectativas no cumplidas → invierno.

Pregunta 2

GPT-3 (2020) introdujo el concepto de "few-shot learning". ¿Qué significa exactamente en el contexto de los LLMs?

A. El modelo puede realizar una nueva tarea viéndola demostrada solo 3 o 5 veces dentro del prompt, sin modificar sus pesos.
Correcta
Correcto. Few-shot learning en LLMs ocurre completamente en el prompt (in-context learning): los ejemplos se incluyen en el texto de entrada y el modelo infiere la tarea sin ningún cambio en sus parámetros.
B. El modelo selecciona automáticamente las 3 características más importantes de cada dataset sin preprocesamiento.
C. El modelo aprende una nueva tarea entrenándose con solo 3 a 5 ejemplos etiquetados durante varios días de re-entrenamiento.
D. El modelo genera pocos tokens de respuesta para ahorrar cómputo en tareas sencillas de clasificación.

Retroalimentación
Few-shot learning en LLMs es radicalmente diferente al fine-tuning tradicional: no hay re-entrenamiento, no se modifican los pesos del modelo. Se incluyen 3-5 ejemplos de la tarea directamente en el prompt y el modelo generaliza el patrón para resolver el nuevo caso. Esto es posible porque el pre-entrenamiento masivo da al modelo suficiente comprensión del lenguaje y los patrones para inferir la tarea a partir de muy pocos ejemplos.

Pregunta 3

Un "token" es la unidad mínima de procesamiento en un LLM. ¿Cuál de las siguientes describe mejor qué es un token?

A. Un token es un símbolo binario (0 o 1) que representa el estado de activación de una neurona.
B. Un token es siempre una palabra completa del diccionario en el idioma de entrenamiento.
C. Un token puede ser una palabra completa, una parte de palabra o un símbolo; GPT-4 maneja aproximadamente 100.000 tokens distintos.
Correcta
Correcto. La tokenización por subpalabras (BPE, WordPiece) es el estándar en LLMs modernos. Permite representar cualquier texto con un vocabulario finito de tokens.
D. Un token es una oración completa codificada como un vector de alta dimensión.

Retroalimentación
La tokenización no se hace palabra por palabra. Los LLMs modernos usan tokenización por subpalabras (como Byte-Pair Encoding): palabras frecuentes se representan como un solo token, pero palabras raras se dividen en subunidades. Por ejemplo, "subcategorización" podría tokenizarse en varias partes. GPT-4 tiene aproximadamente 100.000 tokens en su vocabulario, lo que le permite manejar cualquier texto en múltiples idiomas.

Pregunta 4

La victoria de AlexNet en ImageNet (2012) se considera el inicio de la revolución del Deep Learning. ¿Cuál de los tres factores que la hicieron posible describe CORRECTAMENTE el rol de las GPUs?

A. Las GPUs reemplazaron el backpropagation por un nuevo algoritmo de optimización más eficiente.
B. Las GPUs permitieron almacenar datasets de 14 millones de imágenes en memoria de alta velocidad.
C. Las GPUs eliminaron la necesidad de datos etiquetados al generar ejemplos sintéticos automáticamente.
D. Las GPUs aceleraron el entrenamiento hasta 100 veces respecto a las CPUs al ejecutar miles de operaciones matriciales en paralelo.
Correcta
Correcto. El paralelismo masivo de las GPUs (miles de núcleos) es ideal para las multiplicaciones de matrices que dominan el entrenamiento de redes neuronales. Sin GPUs, entrenar AlexNet habría sido imprácticamente lento.

Retroalimentación
El entrenamiento de redes profundas implica millones de multiplicaciones de matrices simultáneas. Las CPUs ejecutan operaciones secuencialmente; las GPUs tienen miles de núcleos diseñados para paralelismo masivo. NVIDIA lanzó CUDA en 2007, habilitando el uso de GPUs para cómputo científico general. AlexNet se entrenó en dos GPUs NVIDIA GTX 580 en una semana; en CPU habría tardado meses. Las GPUs fueron el acelerador que desbloqueó el Deep Learning a escala.

Pregunta 5

El paper "Attention is All You Need" (Google Brain, 2017) reemplazó las RNNs como arquitectura dominante para NLP. ¿Cuál es la ventaja central del mecanismo de atención sobre las RNNs?

A. Las RNNs no pueden procesar texto en español; los Transformers sí lo hacen gracias al mecanismo de atención multilingüe.
B. El mecanismo de atención permite procesar toda la secuencia en paralelo y ponderar dinámicamente la relevancia de cada parte, en lugar de procesarla token por token en orden.
Correcta
Correcto. El paralelismo y la atención global son las dos ventajas clave: velocidad de entrenamiento y capacidad de capturar dependencias a largas distancias sin degradación.
C. Los Transformers no requieren datos de entrenamiento porque generan su propio conocimiento mediante atención recursiva.
D. El mecanismo de atención reduce el número de parámetros necesarios al reutilizar pesos entre todas las capas del modelo.

Retroalimentación
Las RNNs procesan la secuencia de izquierda a derecha manteniendo un estado oculto que resume el contexto anterior — lento y con pérdida de información a largas distancias. El mecanismo de atención calcula para cada token de salida un peso de relevancia sobre todos los tokens de entrada simultáneamente, permitiendo capturar dependencias a cualquier distancia y procesar toda la secuencia en paralelo. Este fue el salto que hizo posibles los LLMs modernos.

Pregunta 6

MYCIN (1972) y DENDRAL (1965) son dos sistemas expertos históricos. ¿En qué se diferencia su dominio de aplicación?

A. MYCIN procesaba datos financieros; DENDRAL optimizaba rutas de transporte logístico.
B. MYCIN diagnosticaba infecciones bacterianas en sangre; DENDRAL identificaba estructuras moleculares en química orgánica.
Correcta
Correcto. DENDRAL (1965) fue el pionero en química; MYCIN (1972) lo fue en medicina. Ambos demostraron la viabilidad de la IA simbólica en dominios científicos de alta especialización.
C. MYCIN clasificaba imágenes de rayos X; DENDRAL analizaba señales de audio de pacientes.
D. MYCIN traducía textos médicos al español; DENDRAL generaba código Python para experimentos.

Retroalimentación
DENDRAL (Stanford, 1965) fue el primer sistema experto de la historia: analizaba datos de espectrometría de masas para identificar estructuras moleculares en química orgánica. MYCIN (Stanford, 1972) se enfocó en medicina: diagnosticaba infecciones bacterianas en sangre y recomendaba antibióticos. Ambos demostraron que la IA simbólica podía alcanzar niveles de especialista en dominios cerrados y bien definidos.

Pregunta 7

La IA Simbólica (GOFAI) tiene una propiedad que la distingue claramente del Machine Learning. ¿Cuál es?

A. Aprende automáticamente de grandes volúmenes de datos no etiquetados mediante redes profundas.
B. Genera representaciones latentes del conocimiento mediante autoencoders variacionales.
C. El conocimiento es codificado explícitamente por expertos humanos en forma de reglas; el sistema no aprende de datos.
Correcta
Correcto. Esta es la diferencia fundamental: en IA simbólica el conocimiento es explícito y estático; en ML es implícito y emerge del entrenamiento con datos.
D. Utiliza GPUs masivas para paralelizar el entrenamiento y reducir el tiempo de convergencia.

Retroalimentación
En la IA simbólica, el conocimiento no emerge de los datos — lo programa directamente un experto humano en forma de reglas IF-THEN explícitas. Esto hace al sistema transparente (puedes leer las reglas) pero estático (si el dominio cambia, hay que reprogramar). En contraste, en ML el algoritmo extrae patrones estadísticos de ejemplos, sin que nadie le diga qué patrones buscar.

Pregunta 8

El problema XOR fue central en el Primer Invierno de la IA. ¿Por qué una red neuronal de una sola capa (perceptrón) no puede aprender XOR?

A. Porque XOR requiere más de 1.000 ejemplos de entrenamiento y en 1969 no había tantos datos disponibles.
B. Porque el perceptrón solo acepta entradas binarias y XOR produce salidas decimales.
C. Porque XOR es una función no separable linealmente: ninguna línea recta puede separar correctamente sus cuatro casos.
Correcta
Correcto. Esta es la limitación matemática fundamental. Un perceptrón de una capa solo puede aprender funciones linealmente separables. XOR no lo es, lo que requiere múltiples capas y no-linealidades.
D. Porque el hardware de 1969 no tenía suficiente memoria RAM para almacenar la tabla de verdad de XOR.

Retroalimentación
Una red de una capa traza una única frontera de decisión lineal (una línea recta en 2D). XOR requiere dos regiones separadas que no pueden delimitarse con una sola línea: los puntos (0,1) y (1,0) producen 1, mientras (0,0) y (1,1) producen 0, y no existe ninguna recta que los separe correctamente. La solución — múltiples capas con funciones de activación no lineales + backpropagation — no se popularizó hasta 1986.

Pregunta 9

El argumento del Cuarto Chino de John Searle (1980) cuestiona la validez del Test de Turing. ¿Qué implica para la evaluación de la inteligencia artificial?

A. Que imitar correctamente un comportamiento inteligente no implica que el sistema comprenda lo que está haciendo.
Correcta
Correcto. El Cuarto Chino muestra que la manipulación perfecta de símbolos (sintaxis) puede coexistir con ausencia total de comprensión (semántica). Un sistema puede pasar el Test de Turing sin entender nada de lo que procesa.
B. Que ningún sistema informático puede superar el Test de Turing porque las computadoras solo procesan números.
C. Que el Test de Turing es válido únicamente para idiomas con escritura fonética.
D. Que la IA solo puede considerarse inteligente si fue programada por un hablante nativo de ese idioma.

Retroalimentación
Searle imagina a alguien encerrado en un cuarto que recibe preguntas en chino, consulta un manual de reglas y responde en chino perfectamente — sin entender una sola palabra. La analogía sugiere que un sistema puede pasar el Test de Turing mediante operaciones sintácticas (manipulación de símbolos) sin comprensión semántica (significado real). Imitar comportamiento inteligente no equivale a poseer inteligencia genuina.

Pregunta 10

El Logic Theorist (1955) demostró 38 de 52 teoremas del Principia Mathematica. ¿Cuál es el significado histórico de ese logro?

A. Demostró que las redes neuronales podían aprender lógica matemática sin datos de entrenamiento.
B. Demostró que las computadoras podían superar a los humanos en cualquier tarea cognitiva.
C. Fue la primera demostración de que una máquina podía razonar formalmente y resolver problemas simbólicos.
Correcta
Correcto. El Logic Theorist rompió la suposición de que el razonamiento lógico era exclusivamente humano, estableciendo la viabilidad de la IA simbólica como campo de investigación.
D. Fue el primer sistema capaz de traducir lenguaje natural a código ejecutable.

Retroalimentación
Antes del Logic Theorist, se asumía que el razonamiento matemático era exclusivamente humano. Newell y Simon demostraron que una máquina podía deducir teoremas a partir de axiomas usando manipulación simbólica formal, incluso encontrando algunas pruebas más elegantes que las originales de Russell y Whitehead. Esto estableció la IA simbólica como paradigma dominante durante las siguientes tres décadas.

Pregunta 11

ChatGPT no es simplemente GPT-3. ¿Qué proceso adicional distingue a ChatGPT de un modelo base pre-entrenado?

A. ChatGPT conecta el modelo base a bases de datos en tiempo real para responder preguntas con información actualizada.
B. ChatGPT usa un sistema de reglas IF-THEN superpuesto al modelo base para filtrar respuestas inapropiadas.
C. ChatGPT aplica RLHF (aprendizaje por refuerzo con feedback humano) para alinear las respuestas del modelo con las preferencias de los evaluadores humanos.
Correcta
Correcto. RLHF es el proceso que convierte un predictor de texto en un asistente útil y seguro. Los evaluadores humanos califican respuestas, entrenando un modelo de recompensa que guía el fine-tuning final.
D. ChatGPT tiene más parámetros que GPT-3 gracias a un proceso de escalado adicional con hardware más potente.

Retroalimentación
Un modelo base pre-entrenado predice texto estadísticamente — puede ser útil pero también peligroso o incoherente como asistente. RLHF añade tres pasos: (1) evaluadores humanos califican pares de respuestas del modelo; (2) esas calificaciones entrenan un modelo de recompensa; (3) el LLM se optimiza con aprendizaje por refuerzo para maximizar esa recompensa. El resultado es un modelo alineado: útil, honesto y menos propenso a generar contenido dañino.

Pregunta 12

La neurona artificial de McCulloch y Pitts (1943) tiene tres componentes principales en su operación. ¿Cuál de las siguientes describe correctamente esos tres pasos?

A. Genera datos sintéticos, los clasifica y envía el resultado a una capa de memoria.
B. Recibe señales de entrada ponderadas, las suma y las compara con un umbral para decidir si dispara o no.
Correcta
Correcto. Entrada ponderada → suma → comparación con umbral → disparo (1) o silencio (0). Ese es el modelo completo de McCulloch-Pitts, que sigue siendo la intuición base de las neuronas en redes profundas actuales.
C. Descarga un gradiente hacia atrás, ajusta pesos y actualiza su umbral automáticamente.
D. Tokeniza texto de entrada, calcula atención y predice el siguiente símbolo en la secuencia.

Retroalimentación
El modelo de McCulloch-Pitts funciona así: cada señal de entrada (x₁, x₂…) se multiplica por un peso (w₁, w₂…), los productos se suman, y esa suma se compara con un umbral θ. Si la suma supera el umbral, la neurona "dispara" (salida = 1); si no, permanece inactiva (salida = 0). Es una simplificación matemática de cómo funciona una neurona biológica y es la base conceptual de todas las redes neuronales modernas.

Pregunta 13

La Conferencia de Dartmouth (1956) es el evento fundacional de la IA como disciplina. ¿Cuál de los siguientes participantes acuñó el término "Artificial Intelligence" en ese evento?

A. Claude Shannon
B. John McCarthy
Correcta
Correcto. John McCarthy organizó la conferencia de Dartmouth en 1956 y acuñó el término "Artificial Intelligence", estableciendo el nombre del campo que ha perdurado hasta hoy.
C. Marvin Minsky
D. Alan Turing

Retroalimentación
John McCarthy organizó el verano de investigación en Dartmouth College y acuñó el término "Artificial Intelligence". Otros participantes clave fueron Marvin Minsky (pionero de redes neuronales), Claude Shannon (padre de la teoría de la información) y Newell & Simon (creadores del Logic Theorist). Dartmouth reunió por primera vez a investigadores de disciplinas distintas bajo un objetivo común: construir máquinas inteligentes.

Pregunta 14

El Test de Turing (1950) propone una forma operacional de evaluar la inteligencia de una máquina. ¿En qué consiste exactamente?

A. La máquina debe resolver ecuaciones diferenciales más rápido que un matemático en menos de 10 segundos.
B. Un juez humano conversa por escrito con una máquina y un humano; si no puede distinguir cuál es cuál, la máquina supera el test.
Correcta
Correcto. El Juego de Imitación evalúa si una máquina puede imitar el comportamiento conversacional humano de forma indistinguible. Nótese que superar el test prueba imitación, no inteligencia genuina — crítica que formuló Searle en 1980.
C. Un comité de cinco filósofos evalúa si la máquina expresa emociones genuinas en una entrevista oral.
D. La máquina debe demostrar 38 de 52 teoremas matemáticos del Principia Mathematica sin asistencia externa.

Retroalimentación
Turing reformuló la pregunta filosófica "¿pueden las máquinas pensar?" en algo medible: ¿puede una máquina imitar el comportamiento humano en una conversación escrita tan bien que un observador no pueda distinguirla de un humano real? Este es el Juego de Imitación. La crítica posterior de Searle (Cuarto Chino, 1980) señala que superar el test prueba imitación del comportamiento, no comprensión genuina.

Pregunta 15

Un sistema experto como MYCIN logró precisión de especialista en diagnóstico bacteriano. Sin embargo, ¿cuál fue su limitación estructural más importante?

A. Requería datos de laboratorio que en la época solo existían en tres hospitales de EE.UU.
B. No podía actualizar sus reglas automáticamente cuando surgían nuevas bacterias o tratamientos.
Correcta
Correcto. La incapacidad de aprender y adaptarse es la limitación definitoria de la IA simbólica. El conocimiento estático es su talón de Aquiles en dominios dinámicos.
C. No tenía interfaz gráfica, lo que impedía su adopción por médicos no técnicos.
D. Era demasiado lento para usarse en hospitales con muchos pacientes simultáneos.

Retroalimentación
La rigidez es la limitación estructural de todos los sistemas expertos: el conocimiento está congelado en las reglas que el experto codificó en un momento dado. Cuando aparecía una nueva bacteria resistente a antibióticos, MYCIN no podía aprenderlo — un especialista debía reescribir manualmente las reglas afectadas. Escalar ese mantenimiento a cientos de reglas en dominios dinámicos resultó económicamente insostenible.

Pregunta 16

Rumelhart, Hinton y Williams popularizaron la retropropagación en 1986. ¿Qué problema fundamental resolvió este algoritmo?

A. Permitió que las redes neuronales generaran imágenes fotorrealistas sin datos de entrenamiento etiquetados.
B. Resolvió cómo ajustar los pesos de todas las capas de una red propagando el error desde la salida hacia atrás, capa por capa.
Correcta
Correcto. Backpropagation usa la regla de la cadena para calcular el gradiente de cada peso respecto al error total, permitiendo actualizar todos los pesos de una red profunda de forma eficiente.
C. Permitió que los sistemas expertos aprendieran nuevas reglas automáticamente de los casos históricos.
D. Eliminó la necesidad de usar hardware especializado al optimizar el uso de memoria RAM.

Retroalimentación
Antes de backpropagation, no había forma eficiente de entrenar redes con más de una capa: no se sabía cómo "culpar" a cada peso de las capas intermedias por el error final. Backpropagation calcula el gradiente del error respecto a cada peso usando la regla de la cadena del cálculo diferencial, propagando la señal de error desde la capa de salida hacia las capas de entrada. Esto hizo posible entrenar redes profundas de forma eficiente y sigue siendo el algoritmo de entrenamiento estándar hoy.

Pregunta 17

ResNet (Microsoft Research, 2015) resolvió un problema crítico del entrenamiento de redes muy profundas. ¿Cuál era ese problema y cómo lo resolvió?

A. El sobreajuste en redes con pocas capas; ResNet lo resolvió añadiendo capas de Dropout entre cada bloque convolucional.
B. La falta de datos etiquetados; ResNet lo resolvió generando ejemplos sintéticos mediante data augmentation automático.
C. El gradiente que desaparece en redes profundas; ResNet lo resolvió con conexiones residuales que permiten atajos entre capas.
Correcta
Correcto. Las conexiones residuales crean "autopistas" para el gradiente, permitiendo que fluya directamente hacia capas anteriores sin degradarse multiplicativamente. Esto desbloqueó redes de cientos de capas.
D. El alto costo de entrenamiento; ResNet lo resolvió distribuyendo el cómputo entre miles de GPUs en paralelo.

Retroalimentación
En redes muy profundas, el gradiente calculado por backpropagation se vuelve cada vez más pequeño a medida que se propaga hacia las capas iniciales — el gradiente "desaparece" y las capas tempranas dejan de aprender. ResNet introduce conexiones residuales: atajos que saltan una o más capas, permitiendo que el gradiente fluya directamente hacia capas anteriores sin degradarse. Esto permitió entrenar redes de 152 capas con error del 3.57% en ImageNet, superando la precisión humana estimada en 5.1%.

Pregunta 18

La idea central de un Large Language Model (LLM) es aparentemente simple. ¿Cuál es esa idea?

A. Un LLM es un sistema experto que codifica todas las reglas gramaticales de un idioma en forma de tablas de decisión.
B. Un LLM es un modelo que aprende a predecir el siguiente token en una secuencia, entrenado con cientos de miles de millones de tokens de texto.
Correcta
Correcto. Esta tarea simple — predecir el siguiente token — entrenada a escala masiva produce modelos con capacidades emergentes sorprendentes que nadie programó explícitamente.
C. Un LLM es un motor de búsqueda semántico que recupera documentos relevantes de una base de datos indexada.
D. Un LLM es una red neuronal que clasifica textos en categorías predefinidas usando aprendizaje supervisado con etiquetas humanas.

Retroalimentación
La tarea de entrenamiento de un LLM es conceptualmente simple: dado un contexto, predecir el siguiente token más probable. Al aplicar esta tarea a escala masiva — cientos de miles de millones de tokens de libros, Wikipedia, código y web — el modelo aprende estadísticas del lenguaje tan ricas que emergen capacidades de razonamiento, traducción y generación de código que nadie programó explícitamente.

Pregunta 19

En 1997, Deep Blue venció a Garry Kasparov en ajedrez. ¿Cómo logró esto y qué limitación tiene respecto al Machine Learning moderno?

A. Usó una red neuronal profunda entrenada con millones de partidas; su limitación es que solo juega ajedrez.
B. Aprendió de forma autónoma jugando millones de partidas contra sí mismo; su limitación es el alto costo computacional.
C. Usó un sistema de reglas IF-THEN generado automáticamente; su limitación es que no puede manejar situaciones nuevas.
D. Combinó búsqueda por fuerza bruta con bases de datos de aperturas codificadas; su limitación es que no puede transferir ese conocimiento a ningún otro dominio.
Correcta
Correcto. Deep Blue era esencialmente IA simbólica + fuerza bruta computacional. Podía evaluar 200 millones de posiciones por segundo pero era absolutamente inútil fuera del tablero de ajedrez.

Retroalimentación
Deep Blue no "aprendió" en el sentido moderno: evaluaba hasta 200 millones de posiciones por segundo usando algoritmos de búsqueda (minimax + poda alpha-beta) y consultaba bases de datos de aperturas codificadas por grandes maestros. Fue un hito mediático enorme, pero demostró precisamente la limitación de la IA de la época: rendimiento sobrehumano en una tarea específica, cero transferibilidad a cualquier otro contexto.

Pregunta 20

La sesión describe un patrón de 5 pasos que se repite en la historia de la IA. ¿Cuál es el orden correcto de ese ciclo?

A. Investigación silenciosa → Expectativas irreales → Hype → Breakthrough → Invierno
B. Hype → Expectativas irreales → Invierno → Investigación silenciosa → Breakthrough
Correcta
Correcto. El ciclo histórico de la IA sigue un patrón predecible: (1) Hype — promesas exageradas e inversión masiva; (2) Expectativas irreales — plazos imposibles y aplicaciones más allá de lo técnicamente posible; (3) Invierno — financiamiento retirado y campo desprestigiado; (4) Investigación silenciosa — avances reales en laboratorio sin atención mediática; (5) Breakthrough — un resultado concreto que relanza el ciclo. Reconocer en qué fase se encuentra el campo es una habilidad profesional crítica.
C. Invierno → Hype → Expectativas irreales → Breakthrough → Investigación silenciosa
D. Breakthrough → Investigación silenciosa → Hype → Expectativas irreales → Invierno

Retroalimentación
El ciclo histórico de la IA sigue un patrón predecible: (1) Hype — promesas exageradas e inversión masiva; (2) Expectativas irreales — plazos imposibles y aplicaciones más allá de lo técnicamente posible; (3) Invierno — financiamiento retirado y campo desprestigiado; (4) Investigación silenciosa — avances reales en laboratorio sin atención mediática; (5) Breakthrough — un resultado concreto que relanza el ciclo. Reconocer en qué fase se encuentra el campo es una habilidad profesional crítica.

Pregunta 21

¿Por qué los modelos de IA preentrenados en EE.UU. o Europa pueden no funcionar bien directamente en problemas agrícolas ecuatorianos como la detección de enfermedades en cacao?

A. Porque fueron entrenados con datos que no reflejan los cultivos, condiciones climáticas ni patologías locales de Ecuador.
Correcta
Correcto. El desajuste entre la distribución de datos de entrenamiento y la distribución real de aplicación es el problema central. Los modelos aprenden los patrones de sus datos; si esos datos no representan el contexto ecuatoriano, el modelo fallará.
B. Porque los modelos preentrenados no son compatibles con el sistema operativo Linux utilizado en el país.
C. Porque la legislación ecuatoriana prohíbe el uso de IA extranjera en el sector agrícola.
D. Porque Ecuador no tiene acceso a Internet de alta velocidad para ejecutar esos modelos.

Retroalimentación
Un modelo entrenado con datos de cultivos europeos o norteamericanos aprende patrones de esas realidades específicas: sus plagas, sus suelos, sus condiciones climáticas. Al aplicarlo a cacao ecuatoriano, los datos de entrada son distribuciones distintas a las del entrenamiento — el modelo generaliza mal. Esta brecha entre los datos con que se entrenó un modelo y el contexto donde se usa es uno de los problemas centrales de la IA aplicada en Latinoamérica.

Pregunta 22

En el ejemplo del sistema experto para detección de enfermedades en cacao ecuatoriano, una regla dice: IF hoja.color='amarillo' AND hoja.manchas='negras' AND humedad>80% THEN enfermedad='monilia' (0.90). ¿Qué representa el valor 0.90 al final?

A. El número de veces que esa regla fue validada por expertos en campo.
B. El factor de certeza o confianza asociado a esa regla específica.
Correcta
Correcto. Los factores de certeza (CF) son valores codificados por el experto que indican cuánta confianza tiene el sistema en esa conclusión cuando se cumplen las condiciones. No son probabilidades estadísticas formales.
C. La probabilidad de que el cultivo muera si no se aplica el tratamiento inmediatamente.
D. El porcentaje de precisión global del sistema experto en todos sus diagnósticos.

Retroalimentación
En los sistemas expertos de la era simbólica, los factores de certeza (CF) representaban la confianza del sistema en una conclusión dado que las condiciones de la regla se cumplen. Un CF de 0.90 indica alta confianza — no una probabilidad estadística formal, sino un valor de confianza codificado por el experto. MYCIN fue pionero en usar estos factores para manejar la incertidumbre médica sin recurrir a probabilidades bayesianas completas.

Pregunta 23

El Segundo Invierno (1987-1993) fue desencadenado en parte por el colapso de las "Lisp Machines". ¿Qué eran y por qué colapsaron?

A. Eran lenguajes de programación especializados para IA que fueron reemplazados por Python.
B. Eran computadoras especializadas para ejecutar código LISP y sistemas expertos, que perdieron su ventaja ante las PCs convencionales más baratas.
Correcta
Correcto. El modelo de negocio de hardware especializado para IA colapsó cuando las PCs convencionales ofrecieron mejor rendimiento a menor costo, eliminando la razón de ser de las Lisp Machines.
C. Eran unidades de memoria de alta capacidad diseñadas específicamente para almacenar bases de conocimiento.
D. Eran modelos de simulación matemática usados para predecir el comportamiento de sistemas expertos.

Retroalimentación
Las Lisp Machines eran hardware especializado diseñado para ejecutar el lenguaje LISP eficientemente — el lenguaje dominante de la IA simbólica. Empresas como Symbolics y Lisp Machines Inc. vendían estas máquinas a precios muy altos. En 1987, Apple y Digital Equipment Corporation lanzaron PCs convencionales con mejor relación rendimiento/precio. Las Lisp Machines quedaron obsoletas comercialmente de golpe, arrastrando a las empresas que dependían de ese mercado.

Pregunta 1

¿Cuál barrera técnica describe correctamente el problema de "razonamiento causal" que impide la IA Fuerte?

A. Los LLMs identifican correlaciones en datos pero no razonan sobre causas y efectos.
Correcta
Correcto. El razonamiento causal implica entender que A causa B, no solo que A y B aparecen juntos frecuentemente.
B. Los modelos actuales no pueden procesar textos de más de 100.000 tokens.
C. Los modelos no tienen acceso a datos del mundo real en tiempo real.
D. Los modelos no pueden generar texto en más de 50 idiomas simultáneamente.

Retroalimentación
El razonamiento causal implica entender que A causa B, no solo que A y B aparecen juntos frecuentemente. Los LLMs actuales fallan en preguntas que requieren inferencia causal genuina.

Pregunta 2

En el contexto de este curso, la definición de trabajo de IA pone énfasis en:

A. La fabricación de robots físicos con comportamiento autónomo.
B. Sistemas expertos que aplican reglas lógicas IF-THEN.
C. El estudio formal de agentes racionales en entornos complejos.
D. Algoritmos que aprenden patrones de datos para tomar decisiones o generar contenido.
Correcta
Correcto. La definición de trabajo del curso se centra en Machine Learning como base técnica, orientada a lo que los estudiantes construirán en el semestre.

Retroalimentación
La definición de trabajo del curso se centra en Machine Learning como base técnica, orientada a lo que los estudiantes construirán a lo largo del semestre.

Pregunta 3

¿Qué relación jerárquica correcta existe entre IA, ML, Deep Learning, NLP y Visión por Computadora?

A. NLP y Visión contienen a Deep Learning, que contiene a ML, que contiene a IA.
B. IA contiene a ML, que contiene a Deep Learning, que contiene a NLP y Visión por Computadora.
Correcta
Correcto. La jerarquía es: IA ⊃ ML ⊃ Deep Learning ⊃ {NLP, Visión por Computadora}. Cada nivel es un subconjunto del anterior.
C. ML y Deep Learning son lo mismo; NLP y Visión son subcampos independientes de la IA.
D. Son disciplinas independientes sin relación jerárquica entre sí.

Retroalimentación
La jerarquía correcta es: IA ⊃ ML ⊃ Deep Learning ⊃ {NLP, Visión por Computadora}. Cada nivel es un subconjunto del anterior, especializado en tipos de datos o técnicas específicas.

Pregunta 4

¿Qué descubrió GNoME (Google, 2023)?

A. Los pesos óptimos para entrenar modelos de lenguaje con billones de parámetros.
B. Un método para predecir el comportamiento de vehículos autónomos en tiempo real.
C. 2.2 millones de nuevos cristales estables con potencial para materiales avanzados.
Correcta
Correcto. GNoME usó aprendizaje profundo sobre química computacional para descubrir 2.2 millones de cristales estables, publicado en Nature en noviembre 2023.
D. Un sistema de traducción automática que supera a humanos en todos los idiomas.

Retroalimentación
GNoME (Graph Networks for Materials Exploration) usó aprendizaje profundo sobre química computacional para descubrir 2.2 millones de cristales estables, publicado en Nature en noviembre 2023.

Pregunta 5

¿Cuál de los 4 componentes de un agente es responsable de decidir qué acción tomar?

A. Las percepciones.
B. La función agente.
Correcta
Correcto. La función agente es el "cerebro": dado el historial de percepciones, decide la mejor acción. En ML, esta función es el modelo entrenado.
C. Los actuadores.
D. Los sensores.

Retroalimentación
La función agente es el "cerebro" del sistema: dado el historial de percepciones, decide la mejor acción. En ML, esta función corresponde al modelo entrenado.

Pregunta 6

¿Cuál de las siguientes es una tarea de clasificación de texto?

A. Generar el siguiente párrafo de una novela dado un contexto inicial.
B. Resumir un documento legal extenso en tres párrafos.
C. Traducir un artículo del español al inglés automáticamente.
D. Determinar si una reseña de producto tiene sentimiento positivo o negativo.
Correcta
Correcto. Clasificación de texto asigna una categoría a un texto completo. El análisis de sentimientos (positivo/negativo) es su aplicación más conocida.

Retroalimentación
Clasificación de texto asigna una categoría a un texto completo. El análisis de sentimientos (positivo/negativo) es su aplicación más conocida.

Pregunta 7

En el modelo de agente racional de Russell y Norvig, los actuadores son:

A. Los dispositivos que reciben información del entorno como cámaras o micrófonos.
B. Los criterios que el agente maximiza para elegir la mejor acción.
C. Las representaciones internas del estado del entorno en un instante dado.
D. Los mecanismos que ejecutan la acción en el entorno (pantalla, motor, respuesta de texto).
Correcta
Correcto. Los actuadores ejecutan la acción decidida por la función agente: generar texto, mover un motor, mostrar una recomendación o encender una alarma.

Retroalimentación
Los actuadores ejecutan la acción decidida por la función agente: generar texto, mover un motor, mostrar una recomendación o encender una alarma.

Pregunta 8

¿Cuál de las siguientes afirmaciones sobre la IA Fuerte es correcta en 2026?

A. Existe solo en aplicaciones militares clasificadas.
B. Existe en forma de prototipos experimentales en OpenAI y DeepMind.
C. No existe — es el objetivo a largo plazo de varias organizaciones de investigación.
Correcta
Correcto. La IA Fuerte no existe en 2026. Es el objetivo declarado de OpenAI, DeepMind, Anthropic y Meta, pero no se ha logrado.
D. Existe en GPT-5 y modelos equivalentes lanzados en 2025.

Retroalimentación
La IA Fuerte no existe en 2026. Es el objetivo declarado de OpenAI, DeepMind, Anthropic y Meta, pero no se ha logrado y no hay consenso sobre cuándo o si se logrará.

Pregunta 9

¿Qué es un embedding en el contexto del NLP?

A. La capa de salida del modelo que genera el texto final de respuesta.
B. El proceso de dividir un texto en oraciones para facilitar su procesamiento.
C. Un archivo comprimido que almacena el vocabulario del modelo de lenguaje.
D. Una representación numérica (vector) de una palabra en un espacio de alta dimensión donde palabras similares quedan cercanas.
Correcta
Correcto. Un embedding convierte palabras en vectores numéricos. "Rey" y "reina" quedan matemáticamente más cerca que "rey" y "manzana". Sin embeddings, el modelo no puede operar con lenguaje.

Retroalimentación
Un embedding convierte palabras en vectores numéricos en un espacio de alta dimensión. Palabras con significado similar quedan matemáticamente cercanas — "rey" y "reina" están más cerca que "rey" y "manzana".

Pregunta 10

NLP y Visión por Computadora tienen en común que ambos son:

A. Técnicas exclusivas de IA Fuerte que aún no existen en forma práctica.
B. Subcampos del Deep Learning que procesan distintos tipos de datos (texto/voz vs. imágenes/video).
Correcta
Correcto. NLP y Visión son subcampos del Deep Learning: ambos usan redes neuronales profundas pero especializadas para diferentes tipos de datos de entrada (texto/voz vs. imágenes/video).
C. Subcampos del aprendizaje por refuerzo aplicados a distintos tipos de datos.
D. Ramas del ML clásico que no usan redes neuronales profundas.

Retroalimentación
NLP y Visión son subcampos del Deep Learning: ambos usan redes neuronales profundas pero especializadas para diferentes tipos de datos de entrada (texto/voz vs. imágenes/video).

Pregunta 11

¿Qué significa que el Deep Learning aprende "representaciones jerárquicas"?

A. Que el modelo aprende primero conceptos simples y luego los olvida para aprender los complejos.
B. Que cada capa transforma la salida de la anterior en algo más abstracto: bordes → formas → partes → conceptos.
Correcta
Correcto. Las capas de una red profunda aprenden en cadena: Capa 1 detecta bordes, Capa 2 formas, Capa N conceptos completos como "cara" o "auto".
C. Que el entrenamiento sigue una jerarquía de autoridad entre los ingenieros del equipo.
D. Que el modelo organiza los datos en una base de datos relacional con tablas anidadas.

Retroalimentación
Las capas de una red profunda aprenden en cadena: Capa 1 detecta bordes, Capa 2 combina bordes en formas, Capa N combina formas en conceptos completos como "cara" o "auto".

Pregunta 12

¿Cuál es la diferencia fundamental entre la IA Simbólica y el Machine Learning?

A. ML es más antiguo que la IA Simbólica y surgió en los años 50.
B. La IA Simbólica usa redes neuronales mientras que ML usa árboles de decisión.
C. La IA Simbólica requiere GPUs mientras que ML puede correr en CPU estándar.
D. En IA Simbólica el humano programa las reglas; en ML el algoritmo las descubre de los datos.
Correcta
Correcto. La distinción clave es quién genera el conocimiento: en IA Simbólica, reglas IF-THEN escritas por un experto; en ML, patrones aprendidos automáticamente de datos.

Retroalimentación
La distinción clave es quién genera el conocimiento: en IA Simbólica, reglas IF-THEN escritas por un experto humano; en ML, patrones aprendidos automáticamente de datos.

Pregunta 13

¿En qué contexto es más apropiado usar la definición operativa de IA del EU AI Act?

A. Al seleccionar el algoritmo de aprendizaje automático más eficiente.
B. Al diseñar arquitecturas de redes neuronales profundas.
C. Al publicar resultados de investigación científica sobre agentes.
D. En contratos, auditorías y cumplimiento regulatorio.
Correcta
Correcto. La definición del EU AI Act (2024) es de naturaleza legal: cualquier sistema que realiza lo que un humano haría, sin importar la técnica usada.

Retroalimentación
La definición del EU AI Act (2024) es de naturaleza legal y es la definición aplicable en contextos regulatorios, contratos y auditorías.

Pregunta 14

¿Cuál de los siguientes sistemas es un ejemplo de IA Débil en funcionamiento en 2026?

A. Un sistema capaz de aprender cualquier dominio nuevo sin re-entrenamiento.
B. Un sistema de recomendación de películas que solo sugiere contenido similar al visto.
Correcta
Correcto. Un sistema de recomendación tiene una sola función y es completamente inútil fuera de ese dominio: es IA Débil.
C. Un sistema que se automodifica y supera a los humanos en todas las tareas cognitivas.
D. Un sistema que razona en cualquier dominio con comprensión genuina del significado.

Retroalimentación
Un sistema de recomendación tiene una sola función (recomendar contenido similar) y es inútil fuera de ese dominio: es IA Débil, el único tipo de IA real en 2026.

Pregunta 15

¿Por qué GPT-4, siendo capaz en muchos dominios del lenguaje, sigue clasificando como IA Débil?

A. Porque no puede generar imágenes ni audio.
B. Porque fue lanzado antes de 2024 y la IA Fuerte aún no existía.
C. Porque no comprende lo que produce — predice el siguiente token más probable.
Correcta
Correcto. La IA Fuerte requiere comprensión real (semántica). GPT-4 manipula símbolos estadísticamente sin significado real.
D. Porque requiere conexión a internet para funcionar.

Retroalimentación
La IA Fuerte requiere comprensión real (semántica). GPT-4 predice tokens estadísticamente sin significado real — es IA Débil aunque opere en múltiples subdominios del lenguaje.

Pregunta 16

¿Cuál de las siguientes definiciones de IA fue propuesta por John McCarthy en 1956?

A. El estudio de agentes que reciben percepciones del entorno y ejecutan acciones.
B. Sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.
C. Algoritmos que aprenden patrones de datos para tomar decisiones o generar contenido.
D. La ciencia e ingeniería de fabricar máquinas inteligentes.
Correcta
Correcto. McCarthy acuñó el término "Inteligencia Artificial" en 1956 con énfasis en la fabricación e ingeniería, sin definir formalmente qué significa "inteligente".

Retroalimentación
McCarthy acuñó el término "Inteligencia Artificial" en 1956 con énfasis en la fabricación e ingeniería, sin definir formalmente qué significa "inteligente".

Pregunta 17

El Transformer, arquitectura base del NLP moderno, fue introducido en:

A. 2012, con el paper de AlexNet sobre redes convolucionales.
B. 2015, con el paper de ResNet sobre redes residuales.
C. 2017, con el paper "Attention is All You Need".
Correcta
Correcto. El Transformer fue propuesto por Vaswani et al. en 2017 en "Attention is All You Need". BERT (2018) y GPT son sus derivados más conocidos.
D. 2020, con el lanzamiento de GPT-3 por OpenAI.

Retroalimentación
El Transformer fue propuesto por Vaswani et al. en 2017 en el paper "Attention is All You Need". BERT (2018) y GPT son sus derivados más conocidos.

Pregunta 18

¿Cuál es el criterio técnico correcto para identificar que un sistema es IA Débil?

A. Requiere supervisión humana constante para funcionar correctamente.
B. Tiene capacidad de razonamiento inferior a la de un humano promedio.
C. Fue desarrollado antes del año 2010.
D. No puede hacer nada útil fuera del dominio para el que fue entrenado.
Correcta
Correcto. El criterio definitorio de la IA Débil (Narrow AI) es la especificidad de dominio: fuera de su tarea específica, es completamente inútil.

Retroalimentación
El criterio definitorio de la IA Débil (Narrow AI) es la especificidad de dominio: fuera de su tarea específica es completamente inútil, independientemente de su rendimiento dentro de ese dominio.

Pregunta 19

AlphaGo es el ejemplo paradigmático de aprendizaje por refuerzo porque:

A. Aprendió jugando contra sí mismo, recibiendo +1 por ganar y −1 por perder, sin que nadie le explicara estrategias.
Correcta
Correcto. El aprendizaje por refuerzo se basa en prueba-error con señales de recompensa. AlphaGo aprendió su política de juego solo a través de señales de ganancia/pérdida.
B. Agrupa movimientos similares en clusters para descubrir patrones de juego.
C. Fue entrenado con millones de partidas de Go jugadas y etiquetadas por maestros humanos.
D. Usa reglas IF-THEN programadas por expertos en Go para decidir cada movimiento.

Retroalimentación
El aprendizaje por refuerzo se basa en prueba-error con señales de recompensa. AlphaGo aprendió su política de juego solo a través de millones de partidas y señales de ganancia/pérdida.

Pregunta 20

¿Por qué el Deep Learning requiere típicamente millones de ejemplos y hardware GPU, a diferencia del ML clásico?

A. Porque los algoritmos de DL son ineficientes y no han sido optimizados todavía.
B. Porque el DL solo puede procesarse en centros de datos en la nube, no en servidores locales.
C. Porque tiene millones de parámetros que ajustar, lo que requiere muchos datos y alta capacidad de cómputo paralelo.
Correcta
Correcto. Las redes profundas tienen millones o miles de millones de parámetros. Ajustarlos requiere ver muchos ejemplos y el GPU realiza las multiplicaciones matriciales en paralelo.
D. Porque los datos de entrenamiento del DL deben estar en formato de imagen exclusivamente.

Retroalimentación
Las redes profundas tienen millones o miles de millones de parámetros. Ajustarlos requiere ver muchos ejemplos y el GPU realiza las multiplicaciones matriciales en paralelo de forma masiva.

Pregunta 21

¿Por qué no existe una única definición universal de Inteligencia Artificial?

A. Porque cada definición refleja el propósito y el contexto de quien la propone.
Correcta
Correcto. McCarthy quería construir, Russell y Norvig querían entender, la industria necesitaba regular, y este curso necesita una base técnica practicable.
B. Porque la IA cambia de nombre según el país donde se aplique.
C. Porque los científicos no se ponen de acuerdo sobre si las máquinas pueden pensar.
D. Porque la IA es una disciplina muy nueva y aún no ha sido estudiada suficientemente.

Retroalimentación
Cada definición refleja el propósito de quien la propone: McCarthy quería construir, Russell y Norvig querían entender, la industria necesitaba regular, y el curso necesita una base técnica practicable.

Pregunta 22

¿Qué tarea de Visión por Computadora determina a qué objeto pertenece cada píxel de la imagen?

A. Clasificación.
B. Reconocimiento facial.
C. Segmentación.
Correcta
Correcto. La segmentación es el nivel más granular: cada píxel se etiqueta según el objeto al que pertenece. Se usa en cirugía asistida, conducción autónoma y mapeo de terrenos.
D. Detección de objetos.

Retroalimentación
La segmentación es el nivel más granular de Visión por Computadora: cada píxel se etiqueta según el objeto al que pertenece. Se usa en cirugía asistida por imagen, conducción autónoma y mapeo de terrenos.

Pregunta 23

¿Cuál de los siguientes es un ejemplo de AGI según los contenidos de la sesión?

A. Un sistema de recomendación de Netflix.
B. Ninguno — la AGI es un concepto teórico que no existe en 2026.
Correcta
Correcto. La AGI es un objetivo futuro sin hoja de ruta concreta. Ningún sistema real actual califica como AGI.
C. AlphaFold, que predijo millones de estructuras de proteínas.
D. GPT-4 con acceso a navegador web.

Retroalimentación
La AGI es un objetivo futuro sin hoja de ruta concreta. Ningún sistema real actual califica como AGI. Todos los ejemplos mencionados (AlphaFold, GPT-4) son IA Débil.

Pregunta 24

La diferencia principal entre IA Fuerte y AGI es que la AGI:

A. Supera al humano en prácticamente todas las tareas cognitivas y generalmente implica automodificación.
Correcta
Correcto. IA Fuerte = nivel humano en cualquier tarea intelectual. AGI va más allá: supera al humano y se mejora a sí misma sin intervención humana. En la práctica se usan como sinónimos, pero conceptualmente difieren.
B. Se limita a tareas intelectuales mientras que la IA Fuerte incluye habilidades físicas.
C. Es idéntica a la IA Fuerte; los dos términos son completamente sinónimos sin ninguna diferencia.
D. Fue definida antes que la IA Fuerte, por lo que es un concepto más antiguo.

Retroalimentación
IA Fuerte = nivel humano en cualquier tarea intelectual. AGI va más allá: supera al humano y se mejora a sí misma sin intervención humana. En la práctica se usan como sinónimos, pero conceptualmente difieren.

Pregunta 25

Según el modelo del agente racional, ChatGPT cumple el rol de actuador cuando:

A. Genera y muestra el texto de respuesta al usuario.
Correcta
Correcto. En ChatGPT: sensor = texto escrito, percepción = tokens, función agente = Transformer, actuador = texto generado y mostrado al usuario.
B. El modelo Transformer procesa las representaciones internas.
C. Convierte el texto en tokens numéricos.
D. Recibe el texto escrito por el usuario.

Retroalimentación
En ChatGPT: sensor = texto escrito, percepción = tokens, función agente = Transformer, actuador = texto generado y mostrado al usuario.

Pregunta 26

¿Cuál de los siguientes escenarios corresponde a aprendizaje no supervisado?

A. Predecir el precio de una casa basándose en datos históricos de ventas con precios conocidos.
B. Analizar el comportamiento de 100.000 clientes para descubrir grupos similares sin definir categorías previas.
Correcta
Correcto. El aprendizaje no supervisado opera sin etiquetas. Descubrir grupos de clientes sin definir categorías previas es clustering.
C. Un agente que aprende a jugar un videojuego recibiendo puntos como recompensa.
D. Entrenar un modelo para clasificar radiografías como "tumor" o "sin tumor" con 5.000 imágenes etiquetadas.

Retroalimentación
El aprendizaje no supervisado opera sin etiquetas. Descubrir grupos de clientes sin definir categorías previas es clustering — tarea típica de aprendizaje no supervisado.

Pregunta 27

Según la tabla comparativa de la sesión, ¿cuál enfoque tiene la mayor transparencia (legibilidad para humanos)?

A. Deep Learning, porque visualiza sus capas ocultas claramente.
B. ML clásico, porque sus modelos son siempre interpretables.
C. IA Simbólica, porque las reglas IF-THEN son escritas y legibles por humanos.
Correcta
Correcto. IA Simbólica = alta transparencia. ML clásico = media. Deep Learning = baja (caja negra), ya que las representaciones internas no son fácilmente interpretables.
D. Los tres enfoques tienen la misma transparencia.

Retroalimentación
IA Simbólica = alta transparencia (reglas legibles). ML clásico = media. Deep Learning = baja transparencia (caja negra), ya que las representaciones internas no son fácilmente interpretables por humanos.

Pregunta 28

AlphaGo, el sistema que venció al campeón mundial de Go, es un ejemplo de:

A. IA Débil, porque solo puede jugar Go y es inútil en cualquier otro dominio.
Correcta
Correcto. Superar a humanos en una tarea específica no convierte un sistema en IA Fuerte. AlphaGo no puede mantener una conversación ni jugar ajedrez.
B. IA Fuerte, porque supera a los humanos en su tarea.
C. IA Fuerte parcial, porque transfiere conocimiento entre juegos de tablero.
D. AGI, porque demostró inteligencia general superior.

Retroalimentación
Superar a humanos en una tarea específica no convierte un sistema en IA Fuerte. AlphaGo no puede mantener una conversación ni jugar ajedrez: dominio único = IA Débil.

Pregunta 29

Un agente es racional cuando:

A. Aprende de datos sin intervención humana.
B. Tiene consciencia de sí mismo y puede reflexionar sobre sus acciones.
C. Elige la acción que maximiza su medida de desempeño dado lo que ha percibido.
Correcta
Correcto. Racionalidad no implica consciencia ni velocidad, sino que la acción elegida sea la óptima dado el historial de percepciones y la medida de desempeño del agente.
D. Siempre elige la acción más rápida de entre las posibles.

Retroalimentación
Racionalidad no implica consciencia ni velocidad, sino que la acción elegida sea la óptima dado el historial de percepciones y la medida de desempeño del agente.

Pregunta 30

¿Por qué AlphaFold (2020) fue considerado un hito histórico en la ciencia?

A. Desarrolló el mecanismo de atención que se usa en todos los Transformers modernos.
B. Descubrió 2.2 millones de nuevos cristales estables para materiales avanzados.
C. Fue el primer modelo de IA que superó a humanos en el juego de Go.
D. Predijo la estructura 3D de más de 200 millones de proteínas, acelerando la biología estructural en décadas.
Correcta
Correcto. AlphaFold resolvió el "problema del plegamiento de proteínas" que tardó 50 años en resolverse. En 2024 recibió el Premio Nobel de Química.

Retroalimentación
AlphaFold resolvió el problema del plegamiento de proteínas, prediciendo la estructura 3D de más de 200 millones de proteínas. En 2024 recibió el Premio Nobel de Química.

Pregunta 31

La detección de plagas por imagen en cultivos de cacao y banano en Ecuador es un ejemplo de aplicación de IA en el sector:

A. Agricultura, mediante Visión por Computadora aplicada a cultivos locales.
Correcta
Correcto. La detección de plagas por imagen es Visión por Computadora aplicada al sector agrícola, con alta pertinencia para Ecuador dado su producción de cacao, banano y camarón.
B. Manufactura, mediante control de calidad visual en empacadoras.
C. Finanzas, mediante scoring crediticio para pequeños agricultores.
D. Salud, mediante diagnóstico de enfermedades en zonas rurales.

Retroalimentación
La detección de plagas por imagen es Visión por Computadora aplicada al sector agrícola — uno de los casos de uso con mayor pertinencia para Ecuador dado su producción de cacao, banano y camarón.

Pregunta 32

La definición de Russell y Norvig (2020) describe la IA como "el estudio de agentes". ¿Qué característica fundamental tiene un agente según esta definición?

A. Fabrica réplicas digitales de procesos industriales.
B. Tiene consciencia propia y puede automodificarse.
C. Aprende de datos etiquetados provistos por humanos.
D. Percibe su entorno a través de sensores y actúa sobre él a través de actuadores.
Correcta
Correcto. Russell y Norvig definen al agente como una entidad que percibe (sensores) y actúa (actuadores), siendo racional cuando maximiza su medida de desempeño.

Retroalimentación
Russell y Norvig definen al agente como una entidad que percibe (sensores) y actúa (actuadores), siendo racional cuando maximiza su medida de desempeño.

Pregunta 33

¿Cuál tipo de aprendizaje automático se aplica más directamente al problema de detectar fraude bancario en tiempo real?

A. Por refuerzo, porque el sistema aprende de los errores de detección con penalizaciones.
B. Simbólico, porque requiere reglas explícitas definidas por expertos en seguridad bancaria.
C. No supervisado, porque los patrones de fraude no se conocen de antemano.
D. Supervisado, porque se entrena con transacciones históricas etiquetadas como fraude o legítimas.
Correcta
Correcto. La detección de fraude bancario usa aprendizaje supervisado: se cuenta con datos históricos donde cada transacción ya tiene la etiqueta "fraude" o "legítima".

Retroalimentación
La detección de fraude bancario típicamente usa aprendizaje supervisado: se cuenta con datos históricos donde cada transacción ya tiene la etiqueta "fraude" o "legítima".

Pregunta 34

¿Cuál es la característica distintiva del Deep Learning frente al ML clásico en cuanto al conocimiento?

A. El Deep Learning solo funciona con datos de texto mientras que el ML clásico funciona con cualquier tipo.
B. El Deep Learning requiere menos datos que el ML clásico para funcionar correctamente.
C. El ML clásico aprende automáticamente las características mientras que en DL el humano las diseña.
D. En Deep Learning las representaciones útiles se aprenden automáticamente; en ML clásico las diseña el humano (feature engineering).
Correcta
Correcto. La diferencia fundamental es que el DL elimina el feature engineering manual: la red descubre sola qué características son relevantes durante el entrenamiento.

Retroalimentación
La diferencia fundamental es que el DL elimina el feature engineering manual: la red descubre sola qué características son relevantes durante el entrenamiento.

Pregunta 35

¿Cuál es la diferencia entre clasificación y detección de objetos en Visión por Computadora?

A. La detección requiere más datos que la clasificación pero produce resultados más precisos.
B. La clasificación funciona con imágenes en color y la detección solo con imágenes en escala de grises.
C. Clasificación asigna una etiqueta a toda la imagen; detección localiza y clasifica múltiples objetos dentro de ella.
Correcta
Correcto. Clasificación: "¿qué es esta imagen?" (una etiqueta global). Detección: "¿dónde está cada objeto y qué es?" (múltiples cajas delimitadoras con etiquetas).
D. Son términos sinónimos que describen el mismo proceso con diferente nombre.

Retroalimentación
Clasificación: "¿qué es esta imagen?" (una etiqueta global). Detección: "¿dónde está cada objeto y qué es?" (múltiples cajas delimitadoras con etiquetas, como en YOLO).

Pregunta 36

¿Qué hace una capa de convolución en una CNN de Visión por Computadora?

A. Clasifica directamente la imagen asignándole una etiqueta de categoría.
B. Normaliza el brillo y contraste de la imagen antes del procesamiento.
C. Reduce la imagen a un vector de números comprimiendo toda la información en un solo paso.
D. Aplica un filtro que desliza sobre la imagen para detectar patrones locales como bordes, esquinas y texturas.
Correcta
Correcto. Un filtro convolucional es una pequeña matriz que desliza sobre la imagen detectando si ciertos patrones están presentes en cada región. Capas sucesivas combinan patrones simples en conceptos más complejos.

Retroalimentación
Un filtro convolucional es una pequeña matriz que desliza sobre la imagen detectando si ciertos patrones están presentes en cada región. Capas sucesivas combinan patrones simples en conceptos más complejos.

Pregunta 37

En el aprendizaje supervisado, ¿qué es una "etiqueta"?

A. La respuesta correcta que ya se conoce para un dato de entrenamiento.
Correcta
Correcto. Una etiqueta es la salida correcta conocida de antemano. Ej: el email tiene la etiqueta "spam" o "no-spam".
B. El nombre que se le asigna a un modelo una vez entrenado.
C. Un parámetro interno del algoritmo que se ajusta durante el entrenamiento.
D. Un metadato que describe el tamaño del archivo de datos.

Retroalimentación
Una etiqueta es la salida correcta conocida de antemano. Ej: un email + su etiqueta "spam" o "no-spam". El modelo aprende a predecir la etiqueta a partir de los datos de entrada.

# Pregunta 37

## ¿Qué significa que un coeficiente βⱼ se interprete **ceteris paribus**?

- Que la variable xⱼ no tiene ningún efecto sobre ŷ.
- Que mide el efecto de xⱼ sobre ŷ manteniendo constantes las demás variables del modelo.
- Correcta
- Que el coeficiente solo aplica al conjunto de entrenamiento.
- Que el coeficiente cambia cada vez que se agrega una nueva variable.

- Retroalimentación
Respuesta correcta. **Ceteris paribus** significa **todo lo demás constante**: βⱼ representa el efecto puro de esa variable, aislado del efecto de las demás.

- --

Pregunta 38

En el código `pipeline = joblib.load(**modelo.pkl**)` ubicado fuera (antes) de la función del endpoint `/predict`, ¿por qué se carga el modelo en ese punto y no dentro de la función de predicción?

- Porque así el modelo se reentrena automáticamente con cada solicitud.
- Porque FastAPI lo exige por razones de sintaxis, sin ninguna ventaja de rendimiento.
- Para cargar el modelo una sola vez al iniciar el servidor, en vez de releerlo desde disco en cada solicitud.
- Correcta
- Porque dentro de la función del endpoint no se puede usar joblib.

- Retroalimentación
Respuesta correcta. Cargar el modelo una sola vez al iniciar el servidor evita releerlo desde disco en cada solicitud, haciendo que cada predicción sea más rápida.

- --

Pregunta 39

¿Por qué un mismo endpoint de una API puede ser consumido tanto por una aplicación web como por una aplicación móvil, sin necesidad de exportar el modelo de formas distintas?

- Porque el modelo se expone como un servicio HTTP genérico: cualquier cliente que pueda enviar y recibir JSON por HTTP puede consumirlo, sin necesitar Python ni scikit-learn instalado.
- Correcta
- Porque el archivo .pkl cambia de formato según el tipo de cliente que lo consulta.
- Porque FastAPI genera automáticamente una app móvil distinta para cada cliente.
- Porque las apps web y móviles usan lenguajes de programación idénticos.

- Retroalimentación
Respuesta correcta. Al exponerse como un servicio HTTP con JSON, el endpoint puede ser consumido por cualquier cliente sin importar el lenguaje que use.

- --

Pregunta 40

¿Qué efecto tiene `drop_first=True` en `pd.get_dummies(X, columns=[**tipo_cambio**], drop_first=True)`?

- Elimina la primera columna dummy generada, evitando la dummy trap (multicolinealidad perfecta).
- Correcta
- Ordena las categorías de forma alfabética antes de codificarlas.
- Convierte automáticamente todas las columnas numéricas en categóricas.
- Elimina todas las columnas categóricas del DataFrame.

- Retroalimentación
Respuesta correcta. drop_first=True descarta una de las k columnas dummy generadas, dejando esa categoría como referencia y evitando la colinealidad perfecta.

- --

Pregunta 41

¿Para qué se utiliza joblib.dump() y joblib.load() en el flujo de despliegue de un modelo?

- Para calcular automáticamente el RMSE del modelo.
- Para dividir los datos en train y test.
- Para entrenar el modelo desde cero cada vez que se necesita una predicción.
- Para guardar y cargar el objeto (pipeline) entrenado, de modo que pueda reutilizarse sin volver a entrenarlo.
- Correcta

- Retroalimentación
Respuesta correcta. joblib.dump() guarda el pipeline entrenado en un archivo, y joblib.load() lo recupera en otro programa sin necesidad de reentrenarlo.

- --

Pregunta 42

## ¿Cómo se define la multicolinealidad?

- Cuando dos o más variables independientes están altamente correlacionadas entre sí.
- Correcta
- Cuando se usan variables categóricas en el modelo.
- Cuando la variable dependiente Y no tiene varianza.
- Cuando el modelo tiene un R² mayor a 0.9.

- Retroalimentación
Respuesta correcta. La multicolinealidad ocurre cuando una variable independiente puede predecirse con alta precisión a partir de otras variables independientes del modelo.

- --

Pregunta 43

## En la ecuación ŷ = β₀ + β₁x + β₂x² + … + βₙxⁿ, ¿qué representa n?

- El número de observaciones del dataset.
- El valor del intercepto.
- El grado del polinomio.
- Correcta
- El número de variables categóricas del modelo.

- Retroalimentación
Respuesta correcta. n es el grado del polinomio, es decir, la potencia más alta de x incluida en el modelo.

- --

Pregunta 44

## ¿Cuál de las siguientes afirmaciones sobre el R² ajustado es correcta?

- Nunca puede ser negativo.
- Es siempre menor o igual que el R² ordinario, y puede disminuir si se agrega una variable poco útil.
- Correcta
- Siempre es mayor que el R² ordinario.
- Es independiente del número de predictores del modelo.

- Retroalimentación
Respuesta correcta. El R² ajustado es siempre ≤ R² ordinario, y a diferencia de este, puede disminuir cuando se agrega una variable que no compensa la pérdida de un grado de libertad.

- --

Pregunta 45

¿Por qué el modelo que se exporta a producción se reentrena con el 100% de los datos disponibles, y no con el mismo 80% usado para evaluarlo?

- Porque el conjunto de prueba contiene errores que deben excluirse.
- Porque joblib no permite guardar modelos entrenados con menos del 100% de los datos.
- Porque el modelo de producción no necesita ser preciso.
- Porque el conjunto de prueba ya cumplió su función de medir el desempeño, y usar más datos de entrenamiento generalmente produce un modelo mejor.
- Correcta

- Retroalimentación
Respuesta correcta. Una vez medido el desempeño con el train/test split, el conjunto de prueba deja de tener un rol especial; el modelo final se reentrena con todos los datos disponibles.

- --

Pregunta 46

¿Cómo se determina, en la práctica, el grado óptimo de un polinomio para un modelo de regresión?

- Se elige arbitrariamente el grado 2 en todos los casos.
- Se prueban distintos grados y se elige aquel con el menor error sobre el conjunto de prueba (test).
- Correcta
- Se calcula directamente con una fórmula matemática sin necesidad de probar datos.
- Se elige siempre el grado más alto posible.

- Retroalimentación
Respuesta correcta. El grado no se conoce de antemano: se evalúan varios grados candidatos y se elige el que produce el menor error en el conjunto de prueba (idealmente con validación cruzada).

- --

Pregunta 47

¿Cuál es el problema de codificar una variable categórica nominal directamente como enteros (0, 1, 2, …)?

- La variable deja de poder usarse en el modelo.
- Se impone una jerarquía u orden numérico entre categorías que no existe en la realidad.
- Correcta
- El modelo no puede procesar números enteros.
- El modelo automáticamente ignora esa variable.

- Retroalimentación
Respuesta correcta. Codificar categorías sin orden real como enteros consecutivos hace que el modelo interprete una distancia u orden entre ellas que no existe.

- --

Pregunta 48

## ¿Qué indica el decorador @app.post(**/predict**) sobre una función en FastAPI?

- Que esa función entrena el modelo desde cero.
- Que esa función se ejecuta automáticamente cada minuto.
- Que esa función maneja las peticiones POST que llegan al endpoint /predict.
- Correcta
- Que esa función solo puede ejecutarse desde una app móvil.

- Retroalimentación
Respuesta correcta. El decorador @app.post(**/predict**) indica que la función definida debajo se ejecuta cuando llega una petición HTTP POST a esa dirección.

- --

Pregunta 49

En `PolynomialFeatures(degree=2, include_bias=False)`, ¿qué logra el parámetro include_bias=False?

- Evita el data leakage entre train y test.
- Excluye la columna constante del término independiente, porque el modelo ya agrega su propio intercepto.
- Correcta
- Impide que se generen términos de grado 2.
- Elimina todas las variables categóricas del dataset.

- Retroalimentación
Respuesta correcta. include_bias=False excluye la columna constante (de puros unos) que representaría el término independiente, ya que el propio modelo lineal (LinearRegression) añade su intercepto por separado.

- --

Pregunta 50

## ¿Cuál es la diferencia entre una variable categórica nominal y una ordinal?

- La nominal solo puede tener dos categorías.
- La nominal tiene un orden significativo entre sus categorías; la ordinal no.
- Ambas siempre deben codificarse de la misma manera.
- La ordinal tiene un orden significativo entre sus categorías; la nominal no.
- Correcta

- Retroalimentación
Respuesta correcta. Una variable ordinal tiene categorías con un orden real (ej. nivel educativo); una nominal no tiene orden ni distancia real entre sus categorías (ej. marca, provincia).

- --

Pregunta 51

¿Cuál es el problema principal del R² ordinario al comparar modelos con distinto número de variables?

- Nunca puede calcularse con más de una variable.
- Siempre aumenta o se mantiene igual al agregar cualquier variable, incluso si es irrelevante.
- Correcta
- Solo puede calcularse sobre el conjunto de entrenamiento.
- Disminuye automáticamente al agregar variables relevantes.

- Retroalimentación
Respuesta correcta. El R² ordinario nunca disminuye al agregar variables, aunque sean ruido puro sin relación real con Y, lo que lo hace inadecuado para comparar modelos de distinta complejidad.

- --

Pregunta 52

## Según el vocabulario de despliegue visto en clase, ¿qué es una API?

- Un archivo que almacena el modelo entrenado.
- Una interfaz que permite que un programa le pida algo a otro, sin compartir su código interno.
- Correcta
- Un protocolo exclusivo para bases de datos.
- Un formato de texto para estructurar datos en pares clave-valor.

- Retroalimentación
Respuesta correcta. Una API (Interfaz de Programación de Aplicaciones) permite que un programa solicite algo a otro sin necesidad de conocer su código interno.

- --

Pregunta 53

## En un ColumnTransformer, ¿qué hace la opción `remainder=**passthrough**`?

- Elimina del DataFrame todas las columnas no mencionadas explícitamente en los transformadores.
- Convierte todas las columnas restantes en variables numéricas estandarizadas.
- Aplica One-Hot Encoding a todas las columnas del DataFrame, sin excepción.
- Deja pasar sin modificación las columnas que no fueron indicadas explícitamente en ningún transformador.
- Correcta

- Retroalimentación
Respuesta correcta. remainder=**passthrough** indica que las columnas no mencionadas explícitamente se mantienen sin cambios, en lugar de ser descartadas.

- --

Pregunta 54

## ¿En qué consiste el One-Hot Encoding?

- En convertir una variable categórica con k categorías en k columnas binarias, cada una indicando pertenencia a esa categoría.
- Correcta
- En convertir cualquier variable numérica en una variable categórica.
- En eliminar todas las variables categóricas del modelo.
- En asignar un número entero consecutivo a cada categoría.

- Retroalimentación
Respuesta correcta. One-Hot Encoding crea una columna binaria (0/1) por cada categoría, evitando imponer un orden o distancia falsa entre ellas.

- --

Pregunta 55

¿En qué situación es apropiado usar OrdinalEncoder en lugar de One-Hot Encoding?

- Cuando la variable categórica es nominal, sin ningún orden entre sus categorías.
- Cuando el modelo no tiene variable objetivo.
- Cuando la variable categórica es ordinal, con un orden real y significativo entre sus categorías.
- Correcta
- Cuando la variable es numérica continua.

- Retroalimentación
Respuesta correcta. OrdinalEncoder es apropiado para variables ordinales, donde existe un orden real (por ejemplo, nivel educativo); para variables nominales sin orden se prefiere One-Hot Encoding.

- --

Pregunta 56

¿Por qué, al codificar una variable categórica con k categorías, se recomienda usar solo k−1 columnas dummy?

- Porque usar k−1 columnas hace el modelo más rápido de entrenar, sin ninguna otra razón.
- Porque scikit-learn no permite más de k−1 columnas categóricas.
- Porque así se elimina la necesidad de un intercepto β₀.
- Porque usar las k columnas completas genera multicolinealidad perfecta (dummy trap), ya que su suma siempre es 1.
- Correcta

- Retroalimentación
Respuesta correcta. Si se incluyen las k dummies completas, la suma de todas las columnas es siempre 1 para cada fila, generando colinealidad perfecta (dummy trap). Usar k−1 columnas evita ese problema, dejando una categoría como referencia.

- --

Pregunta 57

## ¿Cuál es la diferencia entre una API y un endpoint?

- La API es la interfaz general que expone el servicio; el endpoint es una dirección específica dentro de esa API que realiza una tarea concreta.
- Correcta
- Son sinónimos exactos y no existe ninguna diferencia.
- La API solo puede tener un endpoint como máximo.
- El endpoint siempre contiene varias APIs dentro de sí.

- Retroalimentación
Respuesta correcta. La API es el servicio completo que se expone; dentro de ella puede haber varios endpoints (por ejemplo, /predict y /health), cada uno encargado de una tarea concreta.

- --

Pregunta 58

¿Cuál es la diferencia entre el momento de **entrenamiento** y el momento de **servicio** (inferencia) de un modelo?

- El entrenamiento ocurre una sola vez (o cuando hay datos nuevos) y requiere el dataset completo; el servicio ocurre muchas veces y solo necesita el objeto ya entrenado.
- Correcta
- El servicio requiere más tiempo de cómputo que el entrenamiento.
- El entrenamiento ocurre en la API; el servicio ocurre en el notebook.
- Son exactamente el mismo proceso, solo con nombres distintos.

- Retroalimentación
Respuesta correcta. Entrenar es un proceso que ocurre pocas veces y necesita el dataset completo; servir (inferencia) ocurre muchas veces, una por cada solicitud, y solo requiere el modelo ya entrenado.

- --

Pregunta 59

¿Para qué sirve el parámetro `handle_unknown=**ignore**` al crear un OneHotEncoder?

- Para evitar que ocurra un error si en el conjunto de prueba aparece una categoría que no estaba presente en el entrenamiento.
- Correcta
- Para ignorar por completo todas las variables categóricas del modelo.
- Para forzar a que todas las categorías generen exactamente 2 columnas.
- Para eliminar automáticamente las filas con datos faltantes.

- Retroalimentación
Respuesta correcta. handle_unknown=**ignore** evita que el codificador falle cuando encuentra una categoría que nunca vio durante el entrenamiento.

- --

Pregunta 60

## ¿Qué realiza la línea `pipeline = joblib.load(**modelo.pkl**)`?

- Convierte el archivo modelo.pkl en un archivo JSON.
- Entrena un nuevo pipeline usando el archivo modelo.pkl como dataset.
- Carga en memoria el objeto (pipeline) previamente guardado en el archivo modelo.pkl.
- Correcta
- Elimina el modelo entrenado.

- Retroalimentación
Respuesta correcta. joblib.load() recupera (deserializa) el objeto previamente guardado con joblib.dump(), listo para usarse con .predict().

- --

Pregunta 61

¿Cuál es la principal motivación para usar regresión polinomial en lugar de regresión lineal simple?

- Evitar el uso de variables categóricas.
- Capturar relaciones curvas entre las variables, que un modelo puramente lineal no puede representar.
- Correcta
- Reducir el número de variables del modelo.
- Eliminar la necesidad de dividir en train y test.

- Retroalimentación
Respuesta correcta. Muchos fenómenos reales no son estrictamente lineales; la regresión polinomial permite capturar esa curvatura agregando potencias de x.

- --

Pregunta 62

¿Por qué PolynomialFeatures debe ajustarse (fit) únicamente sobre el conjunto de entrenamiento?

- Porque ajustarlo sobre test es más rápido computacionalmente.
- Porque ajustarlo sobre test provoca data leakage: el transformador **vería** información del conjunto de prueba antes de tiempo.
- Correcta
- Porque el conjunto de prueba nunca contiene variables numéricas.
- Porque PolynomialFeatures no puede aplicarse al conjunto de entrenamiento.

- Retroalimentación
Respuesta correcta. Ajustar transformaciones sobre el conjunto de prueba filtra información de ese conjunto hacia el proceso de entrenamiento (data leakage), haciendo que las métricas de evaluación resulten optimistas y poco confiables.

- --

Pregunta 63

## ¿Qué mide el Factor de Inflación de la Varianza (VIF) de una variable?

- Cuánto se infla la varianza de su coeficiente debido a la correlación con las demás variables independientes.
- Correcta
- El número óptimo de variables a incluir en el modelo.
- La proporción de varianza de Y explicada por el modelo completo.
- La diferencia entre el valor real y el valor predicho.

- Retroalimentación
Respuesta correcta. El VIF cuantifica cuánto aumenta la varianza del coeficiente de una variable debido a su correlación con las demás variables independientes del modelo.

- --

Pregunta 64

¿Por qué se prefiere joblib sobre pickle para guardar un pipeline de scikit-learn?

- Porque pickle no puede guardar ningún objeto de Python.
- Porque joblib no requiere que el modelo esté entrenado previamente.
- Porque pickle solo funciona con modelos de regresión logística.
- Porque joblib maneja mejor los arreglos grandes de NumPy que suelen contener los pipelines entrenados, siendo generalmente más rápido y con archivos más livianos.
- Correcta

- Retroalimentación
Respuesta correcta. Ambos pueden serializar objetos de scikit-learn, pero joblib está optimizado para manejar los arreglos de NumPy grandes típicos de un pipeline entrenado.

- --

Pregunta 65

¿Por qué la regresión polinomial se considera un caso especial de la regresión lineal múltiple?

- Porque no tiene coeficientes β.
- Porque el modelo es lineal en los parámetros β, aunque no lo sea en x.
- Correcta
- Porque siempre tiene el mismo grado que el número de variables.
- Porque solo puede usarse con una variable categórica.

- Retroalimentación
Respuesta correcta. Aunque la relación con x no es lineal (hay potencias de x), el modelo sigue siendo lineal respecto a los coeficientes β, por lo que se ajusta con las mismas técnicas de regresión lineal.

- --

Pregunta 66

¿Cuál es la forma general de la ecuación de un modelo de regresión lineal múltiple?

- ŷ = β₀ + β₁x + β₂x²
- ŷ = β₀ + β₁x₁ + β₂x₂ + … + βₚxₚ
- Correcta
- ŷ = β₀ + β₁x
- ŷ = β₀ · x₁ · x₂ · … · xₚ

- Retroalimentación
Respuesta correcta. La regresión múltiple extiende el modelo simple a p variables independientes, cada una con su propio coeficiente βⱼ.