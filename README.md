# 🛡️ Pablo Cyber Sec - Certificate Verification System

<p align="center">
  <img src="https://img.shields.io/badge/System_Status-ONLINE-00ff66?style=for-the-badge&logo=statuspage&logoColor=white" alt="Status Online">
  <img src="https://img.shields.io/badge/Architecture-Static_Edge-ff0000?style=for-the-badge&logo=githubpages&logoColor=white" alt="Static Architecture">
  <img src="https://img.shields.io/badge/Security_Audit-Passed_OWASP_Top_10-red?style=for-the-badge&logo=sharp&logoColor=white" alt="OWASP Security">
</p>

---

## ⚡ Sobre o Projeto

Este é o ecossistema oficial de validação e auditoria de certificados criptográficos da **Pablo Cyber Sec**. Desenvolvido com foco em alta performance, segurança defensiva e design minimalista estilo terminal (Cyberpunk), o portal permite que empresas, recrutadores e alunos verifiquem a autenticidade de credenciais de treinamento em tempo real.

> ⚡ **"Discipline Today, Freedom Tomorrow."**

---

## 🚀 Características e Defesas Implementadas

- **Imunidade contra Injeções de Servidor (OWASP A03:2021):** Arquitetura 100% Serverless/Estática rodando sob infraestrutura do GitHub Pages. Sem banco de dados relacional exposto a SQLi ou Command Injection.
- **Mitigação de Cross-Site Scripting (XSS):** Filtro estrito de sanitização e encapsulamento dinâmico via propriedades seguras de manipulação de nós no DOM (evitando execução de payloads refletidos).
- **Consultas Otimizadas sem Cache-Lock:** Algoritmo JavaScript configurado com cabeçalhos de controle de estado (`no-store`) para garantir consistência imediata pós-emissão de novos registros.
- **Interface Baseada em CLI (Command Line Interface):** Estilização avançada com paleta de cores militar/neon para emulação de terminais de auditoria de segurança.

---

## 📂 Estrutura de Arquivos do Repositório

```bash
├── index.html          # Core do sistema e lógica do validador (Client-Side)
├── style.css           # Engine visual e animações baseadas na UI da marca
├── certificados.json   # Ledger local (Base de dados dos hashes emitidos)
└── README.md           # Documentação técnica do ecossistema
