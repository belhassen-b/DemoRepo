import { useState } from "react";
import ClassComponent from "./components/ClassComponent";
import ComponentWithHooks from "./components/ComponentWithHooks";
import ComponentWithProps from "./components/ComponentWithProps";
import CustomerForm from "./components/CustomerForm";
import FirstComponent from "./components/FirstComponent";
import Customer from "./interfaces/Customer";

function App() {
  const [customers, setCustomers] = useState<Customer[]>([])

  const fonctionDeLog = () => {
    console.log("Je logue !")
  }

  const sayHi = (nom: string) => {
    console.log(`Bonjour ${nom}!`)
  }

  const addCustomerHandler = (customer: Customer) => {
    setCustomers([...customers, customer])
  }

  return (
    <div className="App">
      <FirstComponent />
      <ComponentWithProps leTexte="Du texte" lesNoms={["Albert", "Martha", "Sophie", "Ali"]} onSayHi={sayHi}/>
      <ComponentWithProps leTexte="Du texte" leNombre={14} onButtonClick={fonctionDeLog}/>
      <ClassComponent />
      <ComponentWithHooks />
      <CustomerForm onAddCustomer={addCustomerHandler}/>
      {customers.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <td>{customer.age ?? "Unknown"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
