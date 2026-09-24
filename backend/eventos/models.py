from django.db import models


class Evento(models.Model):
    TIPOS_EVENTO = [
        ("boda", "Boda"),
        ("social", "Social"),
        ("corporativo", "Corporativo"),
        ("cumpleanos", "Cumpleaños"),
        ("otro", "Otro"),
    ]

    nombre = models.CharField(max_length=200)
    tipo = models.CharField(max_length=20, choices=TIPOS_EVENTO)
    cliente_contacto = models.CharField(max_length=200)
    fecha_hora = models.DateTimeField()
    lugar = models.CharField(max_length=200)
    plazo_limite = models.DateField()

    def __str__(self):
        return self.nombre