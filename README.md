# Домашнее задание к лекции ШРИ - мультимедиа

Для запуска проекта необходимо установить зависимости, собрать и запустить:

```
make install
make build
make start
```

### Интерфейс

Сетка из превью, по нажатию на превью открывается видео с контролами и анализатором звука. Приложение реализовал на MVC архитектуре.

Анимация открытия - transition для свойств width и height. При закрытии полноэкранного видео фильтры и контролы фильтров сбрасываются.

### Фильтры

input type="range", изменение css-свойств, соответствующих фильтрам.

### Анализатор звука

AudioContext для каждого видео плюс общий элемент canvas, на котором отрисовывается график. При закрытии полноэкранного режима пробовал делать suspend для контекста, но не смог победить проблему потери контроля над канвасом (думаю, из-за requestAnimationFrame).

На Android/iOS не отлаживался.
