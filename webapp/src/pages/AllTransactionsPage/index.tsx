import { trpc } from '../../lib/trpc'

export const AllTransactionsPage = () => {

  const { data, error, isLoading, isFetching, isError} = trpc.getTransactions.useQuery()
  if (isLoading || isFetching) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h1>All Transactions</h1>
      {data && data.transactions.map((transaction) => (
        <div key={transaction.id}>
          <h2>{transaction.category}</h2>
        </div>
      ))}
    </div>
  )
}
