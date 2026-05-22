# Ficha de Matrícula Online - Grupo Educacional Monark

Esta é uma página de captura (Landing Page) estática, moderna e 100% responsiva, desenvolvida para o **Grupo Educacional Monark**. O objetivo principal é permitir que potenciais estudantes enviem seus dados de inscrição para cursos de Pós-Graduação EAD de forma rápida, segura e intuitiva, recebendo as informações formatadas diretamente no e-mail da instituição.

## 🚀 Funcionalidades

- **Design Totalmente Responsivo:** Interface otimizada para computadores, tablets e smartphones. O banner principal adapta-se automaticamente à largura da tela utilizando técnicas modernas de CSS, garantindo legibilidade total em dispositivos móveis sem distorcer ou esmagar o conteúdo.
- **Máscaras Dinâmicas (Vanilla JS):** Formatação automatizada em tempo real dos campos de **CPF** (`000.000.000-00`) e **WhatsApp/Telefone** (`(00) 00000-0000`) enquanto o usuário digita, melhorando a experiência do usuário (UX) e evitando erros de digitação.
- **Validação Nativa:** Uso de validações estruturais do HTML5 para garantir que os campos obrigatórios e formatos de e-mail sejam validados antes do envio.
- **Envio Serverless via E-mail:** Integração direta com o serviço **FormSubmit**, permitindo a captação real de leads sem a necessidade de configurar servidores, APIs ou bancos de dados complexos nesta fase do projeto.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica, limpa e acessível.
- **CSS3:** Estilização moderna com variáveis globais (`:root`), sombras suaves, transições de estado e *Media Queries* para adaptação de tela.
- **JavaScript (ES6+):** Manipulação assíncrona do DOM para gerenciamento de eventos e aplicação de máscaras comportamentais.

## 📂 Estrutura do Projeto

O projeto foi organizado separando estritamente as responsabilidades de estrutura, estilo e comportamento:

```text
├── index.html       # Estrutura semântica do formulário e seções
├── style.css        # Arquivo de estilização geral e regras de responsividade
├── script.js        # Lógica das máscaras dinâmicas em JavaScript
└── C1D93CAD-B773-44F8-8BB2-6CFD8EF1400D.PNG  # Imagem do banner promocional
