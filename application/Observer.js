function Observable(){
  // Создаем список подписаных обьектов
  const observers = [];
  // Оповещение всех подписчиков о сообщении
  this.sendMessage = function(type,  msg ){
    observers.filter( item => item.type === type).map( obs => {
      obs.notify(msg);
    });
  };
  // Добавим наблюдателя
  this.addObserver = function( observer ){
    observers.push( observer );
  };
}

// Сам наблюдатель:
function Observer(type, behavior ){
  this.type = type;
  // Делаем функцию, что бы через callback можно
  // было использовать различные функции внутри
  this.notify = function( msg ){
    behavior( msg );
  };
}



export { Observable, Observer };
