var moment = require('moment');
moment.locale('es');
console.log('naci ' + moment('17/04/1991', 'DD/MM/YYYY').fromNow());
//EL FROMNOW() ES PARA QUE REALIZE LA CUENTA AL DIA DE HOY
