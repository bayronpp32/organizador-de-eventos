from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Evento
from .serializers import EventoSerializer


@api_view(["GET"])
def health(request):
    return Response({
        "status": "ok",
        "message": "API funcionando correctamente"
    })


@api_view(["GET", "POST"])
def eventos(request):
    if request.method == "GET":
        eventos = Evento.objects.all()
        serializer = EventoSerializer(eventos, many=True)
        return Response(serializer.data)

    serializer = EventoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)