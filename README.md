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
* `src/app`: No Next.js 14+, este diretório utiliza o App Router
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

# Estilo CSS (global e módulo):

## a)CSS Global (src/app/globals.css):

``` css
/* Estilos que se aplicam a toda aplicação */
:root {
  --primary-color: #0070f3;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

/* Estes estilos estarão disponíveis em toda a aplicação */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
```

Como usar CSS Global:

``` jsx
// src/app/layout.js
import './globals.css'  // Importa estilos globais

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```
## b) CSS Modules (src/components/Button/Button.module.css):

``` css
/* Estilos específicos do componente */
.button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  opacity: 0.9;
}
```

Como usar CSS Modules:

``` jsx
// src/components/Button/Button.js
import styles from './Button.module.css'

export default function Button({ text }) {
  return (
    <button className={styles.button}>
      {text}
    </button>
  )
}
```

Diferenças principais:

### CSS Global:

* Afeta toda a aplicação
* Importado no layout.js
* Bom para estilos base e variáveis


### CSS Modules:

* Escopo limitado ao componente
* Evita conflitos de nomes
* Gera nomes de classes únicos
* Melhor para componentes reutilizáveis