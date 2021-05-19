from django.shortcuts import render
import datetime
from .models import Note


#def register(request):

#def login(request):

def notes(request):
    if request.method == "POST":
        content = request.POST.get('content')
        title = request.POST.get('title')
        Note.objects.create(title=title, content=content)
    return render(request, "notebook/notes.html", {
        "notes": Note.objects.all()
    })

# def delete(request):
    # if request.method=="POST":
        # title = Note.object.get('title')
    # Note.objects.filter(title=title).delete()
    # return render(request, "notebook/notes.html", {
        # "notes": Note.objects.all()
# })
