import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan(loan: number) {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + loan);
      console.log("Emprestimo de R$" + loan + " realizado");
    } else {
      throw new Error("Erro, conta inativa");
    }
  }
}
