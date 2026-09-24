# 🎮 Game Vault Web

![CI](https://github.com/FilipeTdSs/game-vault-web/actions/workflows/ci.yml/badge.svg)
![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

Front-end do **Game Vault**, uma plataforma para organizar sua biblioteca de jogos: o que você está jogando, o que já zerou e o que ainda quer jogar.

A API fica no repositório [game-vault](https://github.com/FilipeTdSs/game-vault) (NestJS + Prisma + PostgreSQL).

> 🚧 Em desenvolvimento. Veja o [roadmap](#-roadmap).

## 🛠️ Stack

| | |
|---|---|
| Framework | Angular 20 (standalone, signals, **zoneless**) |
| Estilo | Tailwind CSS 4, sem biblioteca de componentes |
| Idiomas | Português e inglês com ngx-translate |
| Testes | Jasmine + Karma |
| CI | GitHub Actions (build e testes) |

## 🎨 Identidade visual

Tema escuro em preto e roxo, inspirado nos uniformes do Sacramento Kings e do Baltimore Ravens. As cores ficam centralizadas como tokens do Tailwind em [`src/styles.css`](src/styles.css) (`bg-vault-primary`, `text-vault-muted`...).

## 📁 Estrutura

```
src/app/
├── core/      # layout (header) e serviços globais (idioma)
├── home/      # página inicial
├── auth/      # login e cadastro
└── shared/    # componentes de UI reutilizáveis
public/i18n/   # traduções pt.json / en.json
```

## 🚀 Como rodar

**Pré-requisitos:** Node.js 22+ e a [API](https://github.com/FilipeTdSs/game-vault) rodando em `http://localhost:3000`.

```bash
npm install
npm start
```

Acesse `http://localhost:4200`. A URL da API fica em `src/environments/`.

```bash
npm test          # testes em modo watch
npm run test:ci   # testes uma vez, em Chrome headless
npm run build     # build de produção
```

## 🗺️ Roadmap

- [x] Setup: Angular 20 zoneless, Tailwind, i18n, layout base
- [ ] Componentes base (botão, input, card)
- [ ] Login e cadastro integrados à API (interceptor JWT, guard de rota)
- [ ] Página de perfil
- [ ] Catálogo de jogos com busca, filtros e paginação
- [ ] Minha biblioteca (jogando, zerado, wishlist)
- [ ] Deploy

## 👤 Autor

**Filipe Teles** · [LinkedIn](https://www.linkedin.com/in/filipe-teles-476262215/) · [GitHub](https://github.com/FilipeTdSs)
