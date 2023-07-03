import RowsStock from "../Rows/RowsStock"

export default function TableStock({data,admin}:any) {

  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase"
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3"

  return (
    <div className='overflow-x-scroll overflow-scroll relative w-full h-[400px] max-h-[400px]'>
        <table className='w-full table-auto border border-border divide-y divide-border text-subMain'>
            <thead>
                <tr className='bg-subMain'>
                    <th scope="col" className={`${Head}`}>
                        Image
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Nom
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Categorie
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Rayon
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Prix
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Dispo
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Date péremption
                    </th>
                    <th scope="col" className={`${Head}`}>
                        unité
                    </th>
                    <th scope="col" className={`${Head}`}>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
                {data.map((medoc:any,i:any)=>RowsStock(medoc,i,admin))}
            </tbody>
        </table>
    </div>
  )
}