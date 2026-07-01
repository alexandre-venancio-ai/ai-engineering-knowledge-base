Troubleshooting
1. Permission denied (403)

Erro

Permission to xxx denied.

Causa

O GitHub está autenticando com outra conta.

Solução

Verificar o remote:

git remote -v

Verificar a conexão SSH:

ssh -T github-personal
2. Could not resolve hostname github-personal

Erro

Could not resolve hostname github-personal

Causa

O arquivo config não existe ou foi salvo como:

config.txt

Solução

Renomear:

ren %USERPROFILE%\.ssh\config.txt config
3. Authentication successful

Resposta esperada:

Hi venancio-alexandre!
You've successfully authenticated...

Isso confirma que a chave SSH está funcionando corretamente.

4. Non-fast-forward

Erro

Updates were rejected because the tip of your current branch is behind...

Causa

O repositório remoto possui commits que ainda não existem localmente.

Solução

git pull origin main --allow-unrelated-histories
5. Merge conflict

Exemplo:

CONFLICT (add/add): Merge conflict in README.md

Causa

O mesmo arquivo foi criado tanto localmente quanto remotamente.

Solução

Resolver o conflito.
Executar:
git add .

Depois:

git commit

Depois:

git push
6. Verificar a URL do repositório
git remote -v

HTTPS:

https://github...

SSH:

git@github-personal:...
7. Verificar a identidade do commit

Global:

git config --global user.name
git config --global user.email

Local:

git config user.name
git config user.email
8. Verificar a chave SSH

Listar:

dir %USERPROFILE%\.ssh

Esperado:

config
id_ed25519_personal
id_ed25519_personal.pub
known_hosts