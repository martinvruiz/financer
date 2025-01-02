import { useTransationContext } from "../../context/TransactionContext";

export const LastTransactions = () => {
  const { transactions } = useTransationContext();

  return (
    <>
      <div className="w-full my-4 flex flex-col items-center">
        {transactions.slice(-3).map((transaction) => {
          return (
            <div
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg border text-center border-gray-200 hover:shadow-lg transition-shadow"
              key={transaction.id}
            >
              <div>
                <p className="text-sm">{transaction.spend}</p>
                <p className="text-sm">${transaction.money}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
