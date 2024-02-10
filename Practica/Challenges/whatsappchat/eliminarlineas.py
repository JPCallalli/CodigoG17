import pandas as pd
import emoji
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
from textblob import TextBlob
from datetime import datetime

# Cargar el archivo CSV
df = pd.read_csv(r"C:\Users\Paul\Documents\Codigo\codigo-elearning-17\Practica\Challenges\whatsappchat\salida.csv")

# Eliminar filas con valores NaN en la columna 'Mensaje'
df = df.dropna(subset=['Mensaje'])

# Frecuencia de mensajes
frecuencia_mensajes = df['Miembro'].value_counts()

# Palabras más utilizadas
mensajes = ' '.join(df['Mensaje'])
palabras = word_tokenize(mensajes)
frecuencia_palabras = FreqDist(palabras)
palabras_mas_utilizadas = frecuencia_palabras.most_common(10)

# Emojis
mensajes_con_emojis = [m for m in df['Mensaje'] if any(char in emoji.UNICODE_EMOJI['en'] for char in m)]
emojis_utilizados = [char for m in mensajes_con_emojis for char in m if char in emoji.UNICODE_EMOJI['en']]
frecuencia_emojis = FreqDist(emojis_utilizados)
emojis_mas_utilizados = frecuencia_emojis.most_common(10)

# Longitud de los mensajes
longitud_mensajes = df['Mensaje'].apply(len)

# Tiempo de respuesta (convertir a segundos)
df['Fecha_Hora'] = pd.to_datetime(df['Fecha'] + ' ' + df['Hora'])
df_sorted = df.sort_values(by=['Miembro', 'Fecha_Hora'])
df_sorted['Tiempo_Respuesta'] = df_sorted.groupby('Miembro')['Fecha_Hora'].diff().fillna(pd.Timedelta(seconds=0))
df_sorted['Tiempo_Respuesta'] = df_sorted['Tiempo_Respuesta'].dt.total_seconds()

# Temas de conversación (requiere un análisis de texto más avanzado)
# Aquí puedes usar técnicas de procesamiento de lenguaje natural como análisis de tópicos o clustering de documentos

# Sentimientos expresados (convertir a str)
df['Sentimiento'] = df['Mensaje'].apply(lambda x: str(TextBlob(x).sentiment.polarity))

# Uso de medios compartidos (requiere análisis específico de los mensajes para detectar enlaces, archivos compartidos, etc.)

# Tono de la conversación (requiere un análisis más avanzado del texto y puede ser subjetivo)
# Aquí puedes usar análisis de sentimientos más avanzados o clasificación de texto según tono

# Horarios de actividad
df['Hora'] = pd.to_datetime(df['Hora']).dt.hour
horarios_actividad = df.groupby('Hora').size()

# Imprimir los resultados
print("Frecuencia de Mensajes:\n", frecuencia_mensajes)
print("\nPalabras más utilizadas:\n", palabras_mas_utilizadas)
print("\nEmojis más utilizados:\n", emojis_mas_utilizados)
print("\nLongitud de los mensajes:\n", longitud_mensajes)
print("\nTiempo de respuesta:\n", df_sorted[['Miembro', 'Fecha_Hora', 'Tiempo_Respuesta']])
print("\nSentimientos expresados:\n", df[['Miembro', 'Mensaje', 'Sentimiento']])
print("\nHorarios de actividad:\n", horarios_actividad)
