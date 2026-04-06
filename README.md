# Instant Notes (Desktop)

Boilerplate desktop com:

- Tauri 2
- React 19 + TypeScript + Vite
- TailwindCSS
- ShadCN (configuração mínima + `Button`)

## Pré-requisitos

- Node.js LTS
- Rust (recomendado no Windows: toolchain `stable-x86_64-pc-windows-msvc`)

## Setup

```bash
npm install
```

## Rodando no navegador (frontend)

```bash
npm run dev
```

## Rodando app desktop (Tauri)

```bash
npm run tauri dev
```

## Build de produção

```bash
npm run build
```

## Estrutura base (MVP)

```text
src/
	components/
		ui/
	hooks/
	lib/
	services/
	styles/
	types/
	App.tsx
	main.tsx
```
