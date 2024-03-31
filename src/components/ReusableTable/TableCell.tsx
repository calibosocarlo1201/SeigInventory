import React from 'react'

interface TableCellProps {
    value: string | React.ReactNode; // Value can be either a string or any React node
}

const TableCell: React.FC<TableCellProps> = ({value}) => {
    return <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">{value}</td>;
}

export default TableCell
