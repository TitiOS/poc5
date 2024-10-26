import Card from './components/Card/Card'
import Button from './components/Button/Button'
export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Next.js</h1>
      
      <Card 
        title="Aprendendo Next.js"
        content="Esta é uma aplicação de exemplo usando o Next.js 14 com App Router."
      />
      
      <Card 
        title="Estrutura do Projeto"
        content="Usando uma estrutura organizada com componentes reutilizáveis e CSS Modules."
      />
      <Button 
        text="Clique aqui"
      />
    </div>
  )
}