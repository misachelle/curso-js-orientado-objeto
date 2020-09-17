export class Conta{
  static numerodecontas = 0;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }    
  }
  get cliente(){    
    return this._cliente;
  }
  get saldo(){
    return _saldo;
  }

  constructor(cliente, agencia){
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numerodecontas++;
  }

  //função de uma classe: método
  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }else{
      console.log(`você não tem esse valor para sacar`);
    }
  }

  depositar(valor){    
    if(valor > 0){
      this._saldo += valor;
    }else{
      console.log(`digite um valor maior que 0`);
    }
  }

  consultar(){
    console.log( ((this.cliente) ? this.cliente.nome + ', seu saldo é: ': "Seu saldo é: ") + this._saldo);
    return this._saldo;
  }

  transferir(valor, conta){
    const valorSacado =  this.sacar(valor);
    conta.depositar(valorSacado);
    console.log( (this.cliente && conta.cliente) ? ('Transferencia de ' + this.cliente.nome + ' para ' + conta.cliente.nome + ' no valor de: ' + valorSacado) : 'Transferência realizada com sucesso');
  }
}