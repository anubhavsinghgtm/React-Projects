from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

####################################################
#                 Defined Routes                   #
####################################################

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
    {
      'Endpoint': '/notes/<id>/update',
      'method': 'PUT',
      'body': None,
      'description': 'returns updated array',
    },
    {
      'Endpoint': '/notes/<id>/delete',
      'method': 'DELETE',
      'body': None,
      'description': 'delete the given note',
    },
  ]
  return Response(routes)



####################################################
#                  Get list of notes               #
####################################################

@api_view(['GET'])
def getNotes(request):
  notes = Note.objects.all()
  serializer = NoteSerializer(notes, many=True)
  return Response(serializer.data)




####################################################
#                  Get a single note               #
####################################################

@api_view(['GET'])
def getNote(request, pk):
  try:
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
  except:
    return Response('Nothing is found')



####################################################
#                  update the note                 #
####################################################

@api_view(['PUT'])
def updateNote(request, pk):
  try:
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    
    if serializer.is_valid():
      serializer.save()
      
  except:
    return Response('Can\'t update')
  return Response(serializer.data)




####################################################
#                  Delete the note                 #
####################################################

@api_view(['DELETE'])
def deleteNote(request, pk):
  try:
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note is deleted')
  except:
    return Response('Notes can\'t be deleted')




####################################################
#                   Add a note                     #
####################################################

@api_view(['POST'])
def createNote(request):
  try:
    data = request.data
    note = Note.objects.create(
      body = data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
  except:
    return Response('Items can\'t be created right now')
