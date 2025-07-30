# Fantasticon GUI Converter

**Fantasticon GUI Converter** — минимальное Electron‑приложение с графическим интерфейсом для конвертации SVG‑иконок в шрифты (TTF, WOFF2, WOFF, EOT, SVG) и сопутствующие ассеты (CSS, JSON, HTML, TS) при помощи [Fantasticon](https://github.com/tancredi/fantasticon).

<video src='https://youtu.be/FWn5W6N5w3o'>


---

## Возможности

- Выберите **папку со SVG** 
- Выберите **папку** куда сохранить готовый шрифты 
- Шрифты будут сгенерированы в форматах
  – `ttf`, `woff2`, `woff`, `eot`, `svg`  
- Ассеты сгенерируются:  
  – CSS‑стилей классов-иконок  
  – JSON‑и HTML‑шаблонов  
  – TypeScript‑типов (опционально)
- Детальные настройки шрифта в **fantasticonrc.json** (имя шрифта, префикс, форматы и ассеты)

---

## Быстрый старт

1. **Клонируйте** репозиторий и перейдите в папку проекта:
   ```bash
   git clone https://github.com/ваш-логин/fantasticon-gui.git
   cd fantasticon-gui
2. Установите зависимости --> будет создана папка node_modules
   ```bash
   npm install
3. Запустите приложение
   ```bash
   npm run start

## Структура проекта
```bash
fantasticon-gui/
├── package.json           # скрипты и зависимости (electron, fantasticon)
├── fantasticonrc.json     # глобальные настройки Fantasticon
├── main.js                # main‑процесс Electron: окно + IPC‑хендлеры
├── renderer.js            # preload: безопасный bridge window.api
├── index.html             # UI: разметка и логика кнопок
└── node_modules/          # зависимости, папка будет создана во время второго шага



