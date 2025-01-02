import { useTransationContext } from "../../context/TransactionContext";
import { Link } from "react-router";

export const LastTransactions = () => {
  const { transactions } = useTransationContext();

  const LastTransactions = transactions.slice(-3);

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        {transactions.length === 0 ? (
          <p className="p-2 my-2 text-xl text-white">
            No hay datos para mostrar!
            <Link
              to="/noter"
              className="text-blue-400 ml-1 border-b border-blue-400"
            >
              Ingrese uno
            </Link>
          </p>
        ) : (
          LastTransactions.map((transaction) => (
            <div
              className="flex justify-between items-center p-4 m-2 bg-white shadow-md rounded-lg border text-center border-gray-200 hover:shadow-lg transition-shadow"
              key={transaction.id}
            >
              <div>
                <p className="text-sm">{transaction.spend}</p>
                <p className="text-sm">${transaction.money}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
