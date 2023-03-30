import { Customer } from "../classes/customer.js"
import { BaseService } from "./baseService.js"


export class CustomerService extends BaseService{
    constructor(){
        super("data/customers.json")
    }

    addCustomer(firstName,lastName,phone){
        const customer = new Customer(++this.count, firstName,lastName,phone)
        this.data.push(customer)
        this.writeToJson()
    }

    getCustomerById(id){
        return this.data.find(c => c.id == id)
    }

    getAllCustomers(){
        return this.data
    }



}