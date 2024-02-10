import re
from collections import Counter
import emoji
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import matplotlib.pyplot as plt
import numpy as np

# Descargar recursos adicionales de NLTK
nltk.download('punkt')
nltk.download('vader_lexicon')

# Leer el archivo
with open(r"C:\Users\Paul\Documents\Codigo\codigo-elearning-17\Practica\Challenges\whatsappchat\resultado.txt", 'r', encoding='utf-8') as f:
    texto = f.read()

# Obtener la frecuencia de mensajes
frecuencia_mensajes = len(re.findall(r'\d{2}/\d{2}/\d{2} \d{1,2}:\d{2} [ap]\.m\. -', texto))

# Obtener palabras más utilizadas
palabras = re.findall(r'\b\w+\b', texto.lower())
palabras_mas_utilizadas = Counter(palabras).most_common(10)

# Obtener emojis
emojis = [c for c in texto if c in emoji.UNICODE_EMOJI['en']]

# Obtener longitud de los mensajes
mensajes = re.findall(r'\d{2}/\d{2}/\d{2} \d{1,2}:\d{2} [ap]\.m\. - [^:]+: (.+)', texto)
longitud_mensajes = [len(mensaje) for mensaje in mensajes]

# Obtener tiempo de respuesta
horas = [int(re.search(r'\d{2}:\d{2} [ap]\.m\.', mensaje).group(0).split(':')[0]) for mensaje in mensajes]
tiempo_respuesta = np.diff(horas)

# Obtener temas de conversación (usando NLTK como ejemplo)
tokens = nltk.word_tokenize(texto)
temas_conversacion = nltk.FreqDist(tokens).most_common(10)

# Analizar sentimientos expresados (usando NLTK Vader como ejemplo)
sid = SentimentIntensityAnalyzer()
sentimientos = [sid.polarity_scores(mensaje)['compound'] for mensaje in mensajes]

# Obtener uso de medios compartidos (asumiendo que <Multimedia omitido> indica medios compartidos)
media_compartida = texto.count('<Multimedia omitido>')

# Tono de la conversación (usando la media de los sentimientos)
tono_conversacion = np.mean(sentimientos)

# Horarios de actividad (usando horas de los mensajes)
horarios_actividad = Counter(horas)

# Mostrar resultados
print("Frecuencia de Mensajes:", frecuencia_mensajes)
print("Palabras más utilizadas:", palabras_mas_utilizadas)
print("Emojis:", emojis)
print("Longitud de los mensajes:", longitud_mensajes)
print("Tiempo de respuesta:", tiempo_respuesta)
print("Temas de conversación:", temas_conversacion)
print("Sentimientos expresados:", sentimientos)
print("Uso de medios compartidos:", media_compartida)
print("Tono de la conversación:", tono_conversacion)
print("Horarios de actividad:", horarios_actividad)

# Graficar histograma de sentimientos
plt.hist(sentimientos, bins=20, color='skyblue', edgecolor='black')
plt.xlabel('Sentimiento')
plt.ylabel('Frecuencia')
plt.title('Histograma de Sentimientos')
plt.show()
