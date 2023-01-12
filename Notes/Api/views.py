from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from .utils import updateNote, createNote, deleteNote, getNoteDetail, getNoteList




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
      'Endpoint': '/notes/',
      'method': 'POST',
      'body': None,
      'description': 'add a note in the array',
    },
     {
      'Endpoint': '/notes/<id>/',
      'method': 'GET',
      'body': None,
      'description': 'returns a note matching with that id',
    },
    {
      'Endpoint': '/notes/<id>/update/',
      'method': 'PUT',
      'body': None,
      'description': 'returns updated array',
    },
    {
      'Endpoint': '/notes/<id>/delete/',
      'method': 'DELETE',
      'body': None,
      'description': 'delete the given note',
    },
  ]
  return Response(routes)




@api_view(['GET','POST'])
def getNotes(request):

  if request.method == 'GET':
    return getNoteList(request)


  if request.method == 'POST':
    return createNote(request)
  





@api_view(['GET', 'POST','PUT','DELETE'])
def getNote(request, pk):
  
  if request.method == 'GET':
    return getNoteDetail(request,pk)

  if request.method == 'PUT':
    return updateNote(request,pk)


  if request.method == 'DELETE':
    return deleteNote(request,pk)







