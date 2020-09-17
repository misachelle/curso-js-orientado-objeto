import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";
//import e export: serve para importar um modulo para o arquivo principal;
//tb criamos um package.json para poder informar ao node que estamos utilizando metodos (para criar: npm init)

// "scripts": {
//   "start": "node index.js" - serve criar um novo comando, nesse caso npm start
// }


const cliente1 = new Cliente('Michelle Saez', '0000000000');
const cliente2 = new Cliente('Antonio Saez', '9999999999');

const contaCorrente01 = new ContaCorrente(cliente1, 1001);
const contaCorrente02 = new ContaCorrente(cliente2, 5005);

const contaPoupanca01 = new ContaPoupanca(78, cliente2, 5005);

console.log('contaCorrente01', contaCorrente01);
console.log('contaCorrente02', contaCorrente02);
console.log('contaPoupanca01', contaPoupanca01);

contaCorrente01.depositar(500);
contaCorrente02.depositar(400);

contaCorrente01.consultar();
contaCorrente02.consultar();

contaCorrente01.transferir(400, contaCorrente02);

contaCorrente01.consultar();
contaCorrente02.consultar();

console.log('ContaCorrente.numerodecontas', ContaCorrente.numerodecontas);
