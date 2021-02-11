# App PEBMED

## Instalação do projeto
Para abrir o projeto em um simulador basta seguir a instruções abaixo

1. Abra seu terminal e na raiz da pasta rode o comando `npm install` ou `yarn`

### iOS
1. No seu terminal na raiz da pasta do projeto rode o comando `npm run pod` ou `yarn pod`
2. Apos o comando acima terminar de excutar basta rodar o comando `npm run ios` ou `yarn ios`

### Android
1. na pasta `./android` adicionar um arquivo chamado `local.properties`
  1.1 Dentro deste arquivo deve conter apenas uma linha especificando o caminho do seu sdk android segue abaixo exemplos:

  no Windows sdk.dir = `C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk`
  
  no macOS sdk.dir = `/Users/USERNAME/Library/Android/sdk`
  
  no linux sdk.dir = `/home/USERNAME/Android/Sdk`

2. Apos seguir o passo anterior basta rodar o comando `npm run android` ou `yarn android`