from rest_framework import serializers
from .models import Evento


class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = [
            "id",
            "nombre",
            "tipo",
            "cliente_contacto",
            "fecha_hora",
            "lugar",
            "plazo_limite",
        ]