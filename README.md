# Catgram

Это веб приложение, разработанное с использованием технологий React, TypeScript и CSS. Основные функции приложения включают:

- Работа с imgur API: Приложение запрашивает по HTTP изображения с популярного сервиса imgur - https://apidocs.imgur.com/;
- Галерея изображений: Все загруженные фотографии отображаются в галерее. 
- Лайки: Пользователи могут лайкать изображения, что позволяет им выделять свои любимые фотографии.
- Скрытие изображений: Каждое изображение можно скрыть из галереи.
- Сохранение изменений: Все изменения, такие как лайки и скрытие изображений, сохраняются в localStorage. 

## Начало работы

Следуйте этим инструкциям, чтобы развернуть копию проекта на своем локальном компьютере для разработки и тестирования.

### Предварительные требования

Убедитесь, что у вас установлены следующие инструменты:

- Node.js (https://nodejs.org/) 
- npm (https://www.npmjs.com/) (поставляется вместе с Node.js)
- git (https://git-scm.com/)

### Установка

1. Склонируйте репозиторий:
   `git clone https://github.com/FrauRitosika/catgram.git`

2. Перейдите в каталог проекта:
   `cd ваш-репозиторий`

3. Установите зависимости:
   `npm install`
   
### Запуск приложения

Для запуска приложения в режиме разработки отобразите терминал и выполните следующую команду:
`npm start`

Откройте веб-браузер и введите `http://localhost:3000` для доступа к приложению.

### Сборка для продакшена

Для сборки версии приложения, готовой к развертыванию, выполните:
`npm run build`

Сборка будет сохранена в папке `build`.

## Структура проекта

Вот краткое описание структуры проекта:

```
/репозиторий
│
├── /public          # Папка для статических файлов
│   └── /index.html 
│
├── /src             # Исходный код приложения
│   ├── /components  # Компоненты React
│   ├── /imgur       # Функции работы с сервисо imgur (https://apidocs.imgur.com/)
│   ├── /app-data    # функции подготовки (маппинга и валидации данных)
│   └── index.tsx    # Точка входа приложения
│
├── package.json     # Файл зависимостей и скриптов
└── tsconfig.json    # Конфигурация TypeScript

```

## Используемые технологии

- React - библиотека для построения пользовательских интерфейсов.
- TypeScript - надмножество JavaScript с строгой типизацией.
- CSS - для стилизации компонентов.
