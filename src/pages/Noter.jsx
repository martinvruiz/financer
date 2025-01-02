import { LastTransactions } from "../components/LastTransanctions/LastTransactions";
import { TransactionForm } from "../components/TransactionForm/TransactionForm";

export const Noter = () => {
  return (
    <>
      <p className="my-4 w-3/4 text-white text-xl text-center">
        Te ayudamos a manejar tus finanzas, introducí en el formulario el tipo
        de ingreso o gasto
      </p>
      <TransactionForm />
      <p className="mt-4 text-lg text-white ">Tus ultimos 3 registros</p>
      <LastTransactions />
    </>
  );
};
