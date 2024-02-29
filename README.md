Baixe e instale o Node.js (a versão LTS é a 20.11): sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg NODE_MAJOR=20 echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list sudo apt-get update && sudo apt-get install nodejs -y

Atualize o npm se necessário: npm install -g npm@latest

Baixar a versão 14 do Angular (apenas se o projeto for igual a esse): sudo npm install -g @angular/cli@14 ng version (para confirmar a versão baixada)

Iniciar um projeto novo ng new nome-do-projeto

Rodar o projeto npm start ou ng serve --open (essa flag serve para abrir o navegador automaticamente)