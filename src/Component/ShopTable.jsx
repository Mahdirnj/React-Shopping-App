function ShopTable() {
    return (
        <div>
            <div className="relative overflow-x-auto pb-40 pt-40">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className=" flex justify-center py-3 rounded-s-lg">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" className="px-6 py-3 rounded-e-lg">
                            Price
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row"
                            className="px-6 py-4 font-medium flex justify-center text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17 inch
                        </th>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 text-green-700">
                            $2999
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row"
                            className="px-6 py-4 flex justify-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="text-green-700 px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row"
                            className="px-6 justify-center flex py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="text-green-700 px-6 py-4">
                            $99
                        </td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr className="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" className="px-6 flex justify-center py-3 text-base">Total</th>
                        <td className="px-6 py-3 ">3</td>
                        <td className="px-6 py-3 text-green-700">21,000</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default ShopTable;