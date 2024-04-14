export abstract class DioAccount {
    private name: string
    private accountNumber: number
    private balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    
    public setName(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name
    }

    public setAccountNumber(accountNumber: number) {
        this.accountNumber = accountNumber;
    }
    public getAccountNumber(): number {
        return this.accountNumber
    }
    
    public setBalance(balance: number) {
        this.balance = balance;
    }
    public getBalance(): number {
        return this.balance
    }

    desposit = (): void => {
        if(this.validateStatus()){
        console.log("You deposited money into your account")
        }
    }

    whithdraw = (): void => {
        console.log("You withdrew money from your account")
    }

    getBalnce = (): void => {
        console.log(this.balance)
    }

    private validateStatus(): boolean{
        if(this.status){
            return this.status
        }

        throw new Error("Conta inativa")
    }
}