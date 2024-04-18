import { DioAccount } from "./class/DioAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { SimpleAccount } from "./class/SimpleAccount";

const accountDio: DioAccount = new DioAccount("Enildo Filho", 665496);
const accountCompany: CompanyAccount = new CompanyAccount("Enildo", 23654);
const accountPeople: PeopleAccount = new PeopleAccount("Julia", 12699, 12345);
const accountSimple: SimpleAccount = new SimpleAccount("Vânia", 21565);

console.log(accountDio);
console.log("Saldo:", accountDio.getBalance());
accountDio.deposit(100);
accountDio.whithdraw(50);
console.log("");

console.log(accountCompany);
console.log("Saldo: ", accountCompany.getBalance());
accountCompany.getLoan(1000);
console.log("Saldo: ", accountCompany.getBalance());
accountCompany.whithdraw(500);
console.log("");

console.log(accountPeople);
console.log("Saldo: ", accountPeople.getBalance());
accountPeople.deposit(500);
accountPeople.whithdraw(100);
console.log("");

console.log(accountSimple);
console.log("Saldo: ", accountSimple.getBalance());
accountSimple.depositTenMore(200);
accountSimple.whithdraw(100);
console.log("");
