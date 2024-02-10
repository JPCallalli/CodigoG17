import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import re
from nltk.tokenize import word_tokenize
from nltk.probability import FreqDist
from nltk.sentiment import SentimentIntensityAnalyzer
from collections import Counter

# Leer el archivo CSV en un DataFrame de pandas
archivo = r"C:\Users\Paul\Documents\Codigo\codigo-elearning-17\Practica\Challenges\whatsappchat\salida.csv"
df = pd.read_csv(archivo)

# Eliminar filas con valores NaN en la columna 'Mensaje'
df = df.dropna(subset=['Mensaje'])

# Convertir la columna de fecha y hora a un formato datetime
df['Fecha_Hora'] = pd.to_datetime(df['Fecha'] + ' ' + df['Hora'])

# Frecuencia de mensajes por miembro
frecuencia_mensajes = df['Miembro'].value_counts()

# Tokenizar mensajes para contar palabras
palabras = df['Mensaje'].apply(lambda x: word_tokenize(str(x)))  # Convertir a string antes de tokenizar
todas_palabras = [word.lower() for sublist in palabras for word in sublist]

# Palabras más utilizadas
palabras_comunes = FreqDist(todas_palabras).most_common(10)

# Emojis más utilizados
todos_emojis = ' '.join(df['Mensaje']).split()
emojis = [char for char in todos_emojis if char in '😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😙😚☺️🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲☹️🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱😳🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🤥🤫🤭🧐🤓😈👿👹👺💀👻👽👾🤖💩😺😸😹😻😼😽🙀😿😾']
frecuencia_emojis = Counter(emojis).most_common(5)

# Longitud de los mensajes
df['Longitud_Mensaje'] = df['Mensaje'].apply(lambda x: len(re.findall(r'\w+', x)))

# Tiempo de respuesta
df['Tiempo_Respuesta'] = df['Fecha_Hora'].diff().dt.total_seconds() / 60

# Análisis de sentimientos
sid = SentimentIntensityAnalyzer()
df['Sentimiento'] = df['Mensaje'].apply(lambda x: sid.polarity_scores(x)['compound'])

# Horarios de actividad
horas_actividad = df['Fecha_Hora'].dt.hour

# Gráficos
plt.figure(figsize=(10, 6))

# Gráfico de barras de frecuencia de mensajes por miembro
plt.subplot(2, 2, 1)
frecuencia_mensajes.plot(kind='bar', color='skyblue')
plt.title('Frecuencia de Mensajes por Miembro')
plt.xlabel('Miembro')
plt.ylabel('Cantidad de Mensajes')

# Gráfico de barras de las palabras más utilizadas
plt.subplot(2, 2, 2)
palabras_df = pd.DataFrame(palabras_comunes, columns=['Palabra', 'Frecuencia'])
palabras_df.set_index('Palabra')['Frecuencia'].plot(kind='bar', color='lightgreen')
plt.title('Palabras más Utilizadas')
plt.xlabel('Palabra')
plt.ylabel('Frecuencia')

# Gráfico de barras de los emojis más utilizados
plt.subplot(2, 2, 3)
emojis_df = pd.DataFrame(frecuencia_emojis, columns=['Emoji', 'Frecuencia'])
emojis_df.set_index('Emoji')['Frecuencia'].plot(kind='bar', color='lightcoral')
plt.title('Emojis más Utilizados')
plt.xlabel('Emoji')
plt.ylabel('Frecuencia')

# Histograma de la longitud de los mensajes
plt.subplot(2, 2, 4)
df['Longitud_Mensaje'].plot(kind='hist', bins=20, color='orange', alpha=0.7)
plt.title('Longitud de los Mensajes')
plt.xlabel('Longitud')
plt.ylabel('Cantidad de Mensajes')

plt.tight_layout()
plt.show()

# Estadísticas adicionales
print("Estadísticas adicionales:")
print("Tiempo de respuesta promedio (minutos):", df['Tiempo_Respuesta'].mean())
print("Sentimiento promedio de los mensajes:", df['Sentimiento'].mean())
print("Horas más activas del día:")
print(horas_actividad.mode())
