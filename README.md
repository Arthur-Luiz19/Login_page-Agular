# 🔐 Login Page - Angular

> Página de login moderna e responsiva desenvolvida com **Angular** e **TypeScript**, implementando autenticação de usuários, validação de formulários reativos e integração com APIs REST.

![Angular](https://img.shields.io/badge/Angular-14+-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?style=flat-square&logo=typescript)
![RxJS](https://img.shields.io/badge/RxJS-7.x-purple?style=flat-square&logo=rxjs)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/status-concluído-brightgreen?style=flat-square)

---

## 📋 Índice

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📋 Pré-requisitos](#-pré-requisitos)
- [⚙️ Como Executar](#️-como-executar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔧 Configurações](#-configurações)
- [🧪 Testes](#-testes)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

---

## 📖 Sobre o Projeto

Este projeto é uma **página de login** desenvolvida com **Angular**, focada em boas práticas de desenvolvimento, experiência do usuário e segurança. Implementa validação de formulários reativos, tratamento de erros, integração com backend via HTTP e gerenciamento de estado com **RxJS**.

Ideal para ser integrado a aplicações que necessitam de autenticação de usuários com token JWT.

<img width="1906" height="943" alt="image" src="https://github.com/user-attachments/assets/396c133f-4eb1-4af8-9dfb-abcea8e2c0ed" />

---

## 🔗 Projetos Relacionados

Este frontend foi desenvolvido para consumir a API de autenticação do repositório abaixo:

| Projeto | Descrição | Link |
|---------|-----------|------|
| **🔐 Login Auth API** | Backend RESTful com Spring Boot, Spring Security e JWT para autenticação de usuários | [🔗 github.com/Arthur-Luiz19/login-auth-api](https://github.com/Arthur-Luiz19/login-auth-api) |

> 💡 **Dica:** Para executar o projeto completo, clone também o backend e siga as instruções de configuração em ambos os repositórios.

---

## ✨ Funcionalidades

- ✅ **Formulário reativo** com validação em tempo real (email, senha, campos obrigatórios)
- ✅ **Mensagens de erro** contextualizadas e feedback visual para o usuário
- ✅ **Integração com API REST** via `HttpClient` para autenticação de usuários
- ✅ **Gerenciamento de estado assíncrono** com **RxJS** (Observables, operators)
- ✅ **Proteção de rotas** com Guards do Angular *(opcional)*
- ✅ **Armazenamento seguro de token** (localStorage/sessionStorage)
- ✅ **Design responsivo** e acessível para mobile e desktop
- ✅ **Tratamento de erros HTTP** com interceptors

---

## 🚀 Tecnologias Utilizadas

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | Angular 14+ |
| **Linguagem** | TypeScript 4.x |
| **Reatividade** | RxJS 7.x |
| **Estilização** | CSS3 / SCSS |
| **HTTP Client** | @angular/common/http |
| **Formulários** | @angular/forms (Reactive Forms) |
| **Router** | @angular/router |
| **Build Tool** | Angular CLI |

---

## 📋 Pré-requisitos

- [Node.js 16+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Angular CLI](https://cli.angular.io/) instalado globalmente:
  ```bash
  npm install -g @angular/cli
