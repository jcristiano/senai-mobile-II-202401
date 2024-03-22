from django.contrib import admin
from escola.models import Aluno

class Alunos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'rg', 'cpf', 'data_nascimento')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'rg', 'cpf')
    list_per_page = 20

admin.site.register(Aluno, Alunos)

