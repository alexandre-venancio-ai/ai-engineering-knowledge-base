Git Setup Guide
Objetivo

Configurar um ambiente profissional para utilizar duas contas do GitHub (Pessoal e Empresa) na mesma máquina sem conflitos.

1. Verificar a configuração global do Git

Verificar o usuário configurado:

git config --global user.name

Verificar o e-mail configurado:

git config --global user.email

Verificar toda a configuração global:

git config --list

Para que serve

Permite identificar qual usuário e e-mail o Git está utilizando por padrão.

2. Configurar usuário apenas para um repositório

Entrar na pasta do projeto e executar:

git config user.name "Alexandre Venancio"
git config user.email "aavenanc@gmail.com"

Verificar:

git config user.name
git config user.email

Para que serve

Configura o autor dos commits apenas para aquele projeto, sem alterar os demais repositórios.

3. Gerar uma chave SSH

Criar uma nova chave:

ssh-keygen -t ed25519 -C "aavenanc@gmail.com"

Quando perguntar onde salvar:

C:\Users\Alexandre_Venancio\.ssh\id_ed25519_personal

Passphrase:

Enter

Confirmar:

Enter

Arquivos gerados:

id_ed25519_personal
id_ed25519_personal.pub

Para que serve

Cria uma identidade criptográfica que permitirá acessar o GitHub sem senha.

4. Copiar a chave pública

Mostrar a chave:

type %USERPROFILE%\.ssh\id_ed25519_personal.pub

Copiar toda a linha.

5. Adicionar a chave no GitHub

GitHub

Settings

↓

SSH and GPG Keys

↓

New SSH Key

Title:

PC Principal

Key:

Colar a chave copiada.

Para que serve

Autoriza este computador a acessar sua conta do GitHub.

6. Criar o arquivo de configuração SSH

Criar o arquivo:

notepad %USERPROFILE%\.ssh\config

Conteúdo:

Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes

Salvar como:

config

⚠️ Não salvar como:

config.txt

Para que serve

Cria um alias chamado github-personal, informando ao SSH qual chave utilizar.

7. Testar a conexão
ssh -T github-personal

Primeira execução:

yes

Resposta esperada:

Hi venancio-alexandre!
You've successfully authenticated...

Para que serve

Confirma que a autenticação SSH está funcionando.

8. Verificar a URL do repositório
git remote -v

Exemplo HTTPS:

origin https://github.com/...
9. Alterar para SSH
git remote set-url origin git@github-personal:alexandre-venancio-ai/ai-engineering-knowledge-base.git

Verificar novamente:

git remote -v

Resultado esperado:

origin git@github-personal:alexandre-venancio-ai/ai-engineering-knowledge-base.git

Para que serve

Faz com que este repositório utilize a chave SSH configurada.

10. Verificar o status do projeto
git status

Para que serve

Mostra arquivos modificados, novos arquivos e o estado atual do repositório.

11. Adicionar arquivos ao commit

Adicionar todos os arquivos:

git add .

Ou adicionar apenas um arquivo:

git add README.md

Para que serve

Seleciona quais alterações farão parte do próximo commit.

12. Criar um commit
git commit -m "Mensagem do commit"

Exemplo:

git commit -m "Initial AI Engineering Knowledge Base structure"

Para que serve

Cria um ponto de versionamento com uma descrição das alterações realizadas.

13. Enviar para o GitHub

Primeira vez:

git push -u origin main

Próximas vezes:

git push

Para que serve

Envia os commits locais para o repositório remoto.

14. Atualizar o repositório local

Buscar alterações do GitHub:

git pull origin main

Quando houver históricos diferentes:

git pull origin main --allow-unrelated-histories

Para que serve

Sincroniza o repositório local com o remoto.

15. Renomear um arquivo

Exemplo utilizado:

ren %USERPROFILE%\.ssh\config.txt config

Para que serve

Renomeia um arquivo no Windows.

Estrutura final da pasta .ssh
C:\Users\Alexandre_Venancio\.ssh

config
id_ed25519_personal
id_ed25519_personal.pub
known_hosts
known_hosts.old
Fluxo que utilizaremos na especialização

Sempre que iniciar um novo projeto:

Criar Repositório
        │
        ▼
Configurar usuário local
        │
        ▼
Verificar Remote
        │
        ▼
git status
        │
        ▼
git add .
        │
        ▼
git commit
        │
        ▼
git push
Observações importantes
Nunca altere a configuração global (--global) quando a mudança for específica de um projeto.
Prefira SSH ao HTTPS para autenticação no GitHub.
Uma chave SSH pode ser usada em vários repositórios da mesma conta, não sendo necessário criar uma nova chave para cada projeto.
Se trabalhar com múltiplas contas do GitHub, crie uma chave SSH para cada conta e utilize aliases diferentes no arquivo config (como github-personal e github-avsi).

