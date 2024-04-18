export class DioAccount {
  private name: string;
  private accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public getName(): string {
    return this.name;
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

  public setBalance(balance: number) {
    this.balance = balance;
  }
  public getBalance(): number {
    return this.balance;
  }

  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.balance += deposit;
      console.log("Você depositou: ", deposit);
      console.log("Saldo atual: ", this.balance);
    } else {
      throw new Error("Conta inativa");
    }
  };

  whithdraw = (whithdraw: number): void => {
    if (this.validateStatus() && this.balance >= whithdraw) {
      this.balance -= whithdraw;
      console.log("Você sacou: ", whithdraw);
      console.log("Saldo atual: ", this.balance);
    } else {
      throw new Error(
        "Saque indisponível. Conta inativa ou saldo insuficiente."
      );
    }
  };

  protected validateStatus(): boolean {
    if (this.status === true) {
      return this.status;
    }
    return false;
  }
}
