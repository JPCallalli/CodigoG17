import csv
import re
from collections import Counter
import emoji

# Función para extraer emojis de un mensaje
def extract_emojis(text):
    return re.findall(r':[^:\s]*(?:::[^:\s]*)*:', emoji.demojize(text))

# Función para calcular el tiempo de respuesta
def calcular_tiempo_respuesta(mensajes):
    tiempo_respuesta = []
    for i in range(1, len(mensajes)):
        tiempo_respuesta.append((mensajes[i][0] - mensajes[i-1][0]).total_seconds())
    return tiempo_respuesta

# Leer el archivo CSV
datos_conversacion = []
with open(r"C:\Users\Paul\Documents\Codigo\codigo-elearning-17\Practica\Challenges\whatsappchat\salida.csv", newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        datos_conversacion.append((row['Fecha'], row['Hora'], row['Miembro'], row['Mensaje']))

# Calcular frecuencia de mensajes
frecuencia_mensajes = Counter(row[2] for row in datos_conversacion)

# Calcular palabras más utilizadas
palabras = re.findall(r'\w+', ' '.join(row[3] for row in datos_conversacion).lower())
palabras_mas_utilizadas = Counter(palabras).most_common()

# Calcular emojis
emojis = extract_emojis(' '.join(row[3] for row in datos_conversacion))

# Calcular longitud de los mensajes
longitud_mensajes = [len(row[3]) for row in datos_conversacion]

# Calcular tiempo de respuesta
from datetime import datetime
from datetime import timedelta

mensajes_ordenados = sorted([(datetime.strptime(row[0] + ' ' + row[1], '%d/%m/%y %I:%M %p'), row[2], row[3]) for row in datos_conversacion], key=lambda x: x[0])
tiempo_respuesta = calcular_tiempo_respuesta(mensajes_ordenados)

# Calcular temas de conversación (se puede hacer análisis de sentimientos aquí)
# Aquí puedes agregar lógica para determinar temas de conversación y análisis de sentimientos

# Calcular uso de medios compartidos
media_compartida = sum(1 for row in datos_conversacion if 'multimedia omitido' in row[3].lower())

# Calcular tono de la conversación (se puede hacer análisis de sentimientos aquí)
# Aquí puedes agregar lógica para determinar el tono de la conversación y análisis de sentimientos

# Calcular horarios de actividad
horarios_actividad = Counter(row[1].split()[1] for row in datos_conversacion)

# Escribir los resultados en un nuevo archivo CSV
with open('resultados.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Resultado', 'Valor'])
    writer.writerow(['Frecuencia de Mensajes', len(datos_conversacion)])
    writer.writerow(['Palabras más utilizadas', ', '.join([word[0] for word in palabras_mas_utilizadas[:10]])])
    writer.writerow(['Emojis', len(emojis)])
    writer.writerow(['Longitud de los mensajes', sum(longitud_mensajes) / len(longitud_mensajes)])
    writer.writerow(['Tiempo de respuesta promedio', sum(tiempo_respuesta) / len(tiempo_respuesta)])
    # Agregar más resultados aquí según sea necesario
