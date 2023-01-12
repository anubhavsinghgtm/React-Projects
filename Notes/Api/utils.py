from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer


####################################################
#                  Get list of notes               #
####################################################

def getNoteList(request):
  try:
    notes = Note.objects.all().order_by('-updated')
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)
  except:
    return Response('can\'t fetch')



####################################################
#                  Get a single note               #
####################################################

def getNoteDetail(request,pk):
  try:
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
  except:
    return Response('Nothing is found')



####################################################
#                  update the note                 #
####################################################

def updateNote(request,pk):
  try:
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
        
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
  except:
      return Response('Can\'t update')
  return Response(serializer.data)



####################################################
#                  Delete the note                 #
####################################################

def deleteNote(request,pk):
  try:
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note is deleted')
  except:
    return Response('Notes can\'t be deleted')



####################################################
#                   Add a note                     #
####################################################

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