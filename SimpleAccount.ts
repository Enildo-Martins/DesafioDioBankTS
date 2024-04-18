import { DioAccount } from "./DioAccount";

export class SimpleAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositTenMore = (deposit: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + deposit + 10);
      console.log(
        "Você depositou: ",
        deposit,
        "\nE foram acrescidos mais 10,00 ao valor informado."
      );
      console.log("Saldo atual: ", this.getBalance());
    } else {
      throw new Error("Conta inativa");
    }
  };
}
