# Estrutura de Projeto NextJS 14+:

``` txt
poc5
src/                     # Diretório principal do código fonte
  ├── app/              # Diretório do App Router (Next.js 14+)
  │   ├── page.js       # Página inicial (rota /)
  │   ├── layout.js     # Layout principal da aplicação
  │   └── globals.css   # Estilos globais
  └── components/       # Diretório para componentes reutilizáveis
      └── Button/       # Exemplo de um componente
          ├── Button.js
          └── Button.module.css
```

Explicação da estrutura:
* src/app: No Next.js 14+, este diretório utiliza o App Router
* page.js: Define as páginas da aplicação
* layout.js: Define o layout compartilhado entre páginas
* `components`: Organiza componentes reutilizáveis