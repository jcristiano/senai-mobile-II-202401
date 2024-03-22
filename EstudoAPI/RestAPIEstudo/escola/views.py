from rest_framework import viewsets
from escola.models import Aluno
from escola.serializer import AlunoSerializer

class AlunosViewSet(viewsets.ModelViewSet):
    """Endpoint para exibir dados de alunos"""
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer


