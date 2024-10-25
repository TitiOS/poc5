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
* ``page.js``: Define as páginas da aplicação
* ``layout.js``: Define o layout compartilhado entre páginas
* `components`: Organiza componentes reutilizáveis

# Criação de componentes simples (sem estado):

Exemplo de um componente sem estado (stateless):

``` jsx
// src/components/Button/Button.js
export default function Button({ text, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

// Uso do componente em uma página
// src/app/page.js
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Button 
        text="Clique aqui" 
        onClick={() => alert('Botão clicado!')} 
      />
    </div>
  )
}
```

Características do componente sem estado:

* É uma função pura que recebe props
* Não usa hooks (useState, useEffect, etc.)
* Sempre retorna o mesmo resultado para as mesmas props
* Não mantém estado interno