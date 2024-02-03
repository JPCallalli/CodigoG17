import pandas as pd
import re

# Patrón regex para identificar el comienzo de cada línea del txt con la fecha y hora
# Nota: El formato del archivo txt depende del dispositivo donde se exporte y, por ende la forma de detectar el patrón varía
def IniciaConFechaYHora(s):
    # Ejemplo: '17/3/2022 11:57 p. m.
    patron ='^([1-9]|1[0-9]|2[0-9]|3[0-1])(/)([1-9]|1[0-2])(/)(2[0-9][0-9][0-9])([0-9]|1[0-2]):([0-5][0-9]) (a.\xa0m.|p.\xa0m.) -'
    resultado = re.match(patron, s) #Verificar
    if resultado:
        return True
    return False


def EncontrarMiembro(s):
    patrones = [
        '([\w]+):',
        '([\w]+[\s]+[\w]+):',
        '([\w]+[\s]+[\w]+[\s]+[\w]+):',
        '([+]\d{2} \d{3} \d{3} \d{3}):',
        '([\w]+[\s]+)[\u263a-\U0001f999]+:',
        #'([\w]+[\s]+)[\u263a-\U0001f999]+[\u263a-\U0001f999]+([\s]+[\w]+)'
    ]
    patron = '^' + '|'.join(patrones)
    resultado = re.match(patron, s)
    if resultado:
        return True
    return False

def ObtenerPartes(linea):
    splitLinea = linea.split(' - ')
    FechaHora = splitLinea[0]
    splitFechaHora = FechaHora.split(' ')
    Fecha = splitFechaHora[0]
    Hora = ' '.join(splitFechaHora[1:])
    Mensaje = ' '.join(splitLinea[1:])
    if EncontrarMiembro(Mensaje):
        splitMensaje = Mensaje.split(': ')
        Miembro = splitMensaje[0]
        Mensaje = ' '.join(splitMensaje[1: ])
    else:
        Miembro = None
    return Fecha, Hora, Miembro, Mensaje

RutaChat = 'Practica\Challenges\whatsappchat\Chat de WhatsApp con Xiomi Gallardo.txt'

DatosLista = []
with open(RutaChat, encoding="utf-8") as fp:
    fp.readline()
    VerificarMensaje = []
    Fecha, Hora, Miembro = None, None, None
    while True:
        linea = fp.readline()
        if not linea:
            break
        linea = linea.strip()
        if IniciaConFechaYHora(linea):
            if len(VerificarMensaje > 0):
                DatosLista.append([Fecha, Hora, Miembro, ' '.join(VerificarMensaje)])
            VerificarMensaje.clear()
            Fecha, Hora, Miembro, Mensaje = ObtenerPartes(linea)
            VerificarMensaje.append(Mensaje)
        else:
            VerificarMensaje.append(linea)
        
df = pd.DataFrame(DatosLista, columns=['Fecha', 'Hora', 'Miembro', 'Mensaje'])

df['Fecha'] = pd.to_datetime(df['Fecha'], format="%d/%m/%Y")

df = df.dropna()

df.reset_index(drop=True, inplace=True)
df