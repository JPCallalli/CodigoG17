import re
from tabulate import tabulate

# Leer el texto desde un archivo
archivo = "Practica\Challenges\whatsappchat\Chat de WhatsApp con Xiomi Gallardo.txt"
with open(archivo, "r", encoding="utf-8") as f:
    texto = f.read()

patron = r"(\d{2}/\d{2}/\d{2}) (\d{2}:\d{2}) ([ap]). m\. - ([^:]+): (.+)"
coincidencias = re.findall(patron, texto)

tabla = []
for coincidencia in coincidencias:
    fecha, hora, periodo, nombre, mensaje = coincidencia
    tabla.append([fecha, f"{hora} {periodo.upper()}M", nombre, mensaje])

# Encabezado de la tabla
encabezado = ["Fecha", "Hora", "Miembro", "Mensaje"]

# Tabulate
tabla_formateada = tabulate(tabla, headers=encabezado, tablefmt="grid")

# Mostrar tabla
# print(tabla_formateada)

# Exportar a un archivo de texto
with open(r"C:\Users\Paul\Documents\Codigo\codigo-elearning-17\Practica\Challenges\whatsappchat\resultado.txt", "w", encoding="utf-8") as f:
    f.write(tabla_formateada)

print("Tabla exportada como 'resultado.txt'")
