# Portfólio Pessoal - Edson Cândido

Este é meu portfólio profissional, desenvolvido com Next.js e Tailwind CSS. O site apresenta minhas habilidades, projetos e informações de contato.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## Funcionalidades

- Design responsivo
- Navegação suave
- Seções para apresentação pessoal, habilidades e projetos
- Links para GitHub e LinkedIn
- Formulário de contato

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/EdsonCandido/portfolio.git
```

2. Instale as dependências:
```bash
cd portfolio
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── ProjectCard.tsx
│   └── data/
│       └── projects.ts
├── public/
│   └── projects/
├── tailwind.config.ts
└── package.json
```

## Personalização

Para adicionar seus próprios projetos, edite o arquivo `src/data/projects.ts`. Para modificar o estilo, ajuste as configurações no arquivo `tailwind.config.ts`.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
