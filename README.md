# Вы назначены коллаборатором (разработчиком над проектом)
 - Вы имеете доступ к ветке main, категорически запрещено проделывать с ней любые манипуляции
 - Вы создаете ветку в проекте, ветка называется по вашему имени и фамилии git checkout -b andrey_izosimov
 - Пишите название в нижнем регистре с нижнем прочерком. Буду удалять неверно названые ветки.
# Принимайте в уведомлениях у себя в личном кабинете гитхаба приглашение к репозиторию
# Клонируете проект и начинаете работать.
# Установить pnpm
  npm i pnpm -g
# Установить зависимости
  pnpm i
# Запустить сборку
  pnpm run dev
# Собрать билд
  pnpm run build
# Посмотреть билд
  pnpm run preview
# Задеплоить на гитхаб pages
  pnpm run build если не делали
### Зайдите в файл vite.config.js
  - Измените название своего репозитория
  - pnpm run deploy

## Папка public
  - содержит в себе статические файлы: картинки в папке assets, стили, шрифты и прочее.
## Папка src  в ней ведется основная работа
  - папка js для работы с javascript
  - папка pages здесь страницы если нужны для html
  - папка styles для написания scss
## main.js
  - файл где подключается js и scss
## index.html
  - главная страница