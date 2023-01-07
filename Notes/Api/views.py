from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
def getRoutes(request):
  routes = [
    {
      'Endpoint': '/notes/',
      'method': 'GET',
      'body': None,
      'description': 'returns array of notes',
    },
     {
      'Endpoint': '/notes/<id>',
      'method': 'GET',
      'body': None,
      'description': 'returns a note matching with that id',
    },
  ]
  return Response(routes)


@api_view(['GET'])
def getNotes(request):
  notes = Note.objects.all()
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)



@api_view(['GET'])
def getNote(request, pk):
  try:
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
  except:
    return Response('Nothing is found')