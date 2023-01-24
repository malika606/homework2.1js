var str = +prompt('Введите время в цифрах')

switch (str) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert( str + ' часа ночи ')
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert( str + ' часов утра ')
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert( str + ' часа дня ')
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        alert( str + ' часов вечера ')
        break;
  

    default:
    alert('Ошибка, повторите снова')
        break;
}