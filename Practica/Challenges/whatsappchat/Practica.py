import pandas as pd
import numpy as np
import re

# Patron regex para identificar el comienzo de cada línea del txt con la fecha y la hora
def IniciaConFechaYHora(s):
    # Ejemplo: '21/2/2021 11:27 a. m. - ... '
    patron = '^([1-9]|1[0-9]|2[0-9]|3[0-1])(\/)([1-9]|1[0-2])(\/)(2[0-9][0-9][0-9]) ([0-9]+):([0-9][0-9]) (a.\xa0m.|p.\xa0m.) -'
    resultado = re.match(patron, s)  # Verificar si cada línea del txt hace match con el patrón de fecha y hora
    if resultado:
        return True
    return False
  
# Patron para encontrar a los miembros del grupo dentro del txt
def EncontrarMiembro(s):
    patrones = [
        '([\w]+):',                                    # Nombre
        '([\w]+[\s]+[\(]+[\w]+[\)]+):',      # Nombre (Apodo)
        '([\w]+[\s]+[\w]+):',                    # Nombre + Apellido
        '([\w]+[\s]+[\w]+[\s]+[\w]+):',    # Nombre 1 + Nombre 2 + Apellido
        '([+]\d{2} \d{3} \d{3} \d{3}):',     # Número de teléfono (Peru)
        '([\w]+)[\u263a-\U0001f999]+:', # Nombre + Emoji            
    ]
    patron = '^' + '|'.join(patrones)     
    resultado = re.match(patron, s)  # Verificar si cada línea del txt hace match con el patrón de miembro
    if resultado:
        return True
    return False
  
# Separar las partes de cada línea del txt: Fecha, Hora, Miembro y Mensaje
def ObtenerPartes(linea):   
    # Ejemplo: '21/2/2021 11:27 a. m. - Sandro: Todos debemos aprender a analizar datos'
    splitLinea = linea.split(' - ') 
    FechaHora = splitLinea[0]                     # '21/2/2021 11:27 a. m.'
    splitFechaHora = FechaHora.split(' ')   
    Fecha = splitFechaHora[0]                    # '21/2/2021'
    Hora = ' '.join(splitFechaHora[1:])          # '11:27 a. m.'
    Mensaje = ' '.join(splitLinea[1:])             # 'Sandro: Todos debemos aprender a analizar datos'
    if EncontrarMiembro(Mensaje): 
        splitMensaje = Mensaje.split(': ')      
        Miembro = splitMensaje[0]               # 'Sandro' 
        Mensaje = ' '.join(splitMensaje[1:])    # 'Todos debemos aprender a analizar datos'
    else:
        Miembro = None
    return Fecha, Hora, Miembro, Mensaje

# Leer el archivo txt descargado del chat de WhatsApp
RutaChat = './Practica\Challenges\whatsappchat\Chat de WhatsApp con Xiomi Gallardo.txt'

# Lista para almacenar los datos (Fecha, Hora, Miembro, Mensaje) de cada línea del txt 
DatosLista = [] 
with open(RutaChat, encoding="utf-8") as fp:
    fp.readline() # Eliminar primera fila relacionada al cifrado de extremo a extremo
    VerificarMensaje = [] # Lista para verificar que no existan mensajes vacíos 
    Fecha, Hora, Miembro = None, None, None
    while True:
        linea = fp.readline() 
        if not linea: 
            break
        linea = linea.strip() 
        if IniciaConFechaYHora(linea): # Si cada línea del txt coincide con el patrón fecha y hora
            if len(VerificarMensaje) > 0: 
                # Añadir un elemento lista que contendrá los datos a la lista 'DatosLista' 
                DatosLista.append([Fecha, Hora, Miembro, ' '.join(VerificarMensaje)]) 
            VerificarMensaje.clear() 
            Fecha, Hora, Miembro, Mensaje = ObtenerPartes(linea) # Obtener datos de cada línea del txt
            VerificarMensaje.append(Mensaje) 
        else:
            VerificarMensaje.append(linea)

# Convertir la lista con los datos a dataframe
df = pd.DataFrame(DatosLista, columns=['Fecha', 'Hora', 'Miembro', 'Mensaje']) 

# Cambiar la columna Fecha a formato datetime
df['Fecha'] = pd.to_datetime(df['Fecha'], format="%d/%m/%Y")

# Eliminar los posibles campos vacíos del dataframe
# y lo que no son mensajes como cambiar el asunto del grupo o agregar a alguien
df = df.dropna()

# Rester el índice
df.reset_index(drop=True, inplace=True)
df