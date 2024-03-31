import React from 'react'

interface TableHeaderCellProps {
    title: string;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({title}) => {
  return (
    <th className='min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11'>
      {title}
    </th>
  )
}

export default TableHeaderCell
