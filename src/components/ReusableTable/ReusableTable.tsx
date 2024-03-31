import TableCell from './TableCell';
import TableHeaderCell from './TableHeaderCell';

interface TableHeader {
    title: string;
}

interface TableRow {
    [key: string]: string | React.ReactNode;
}

interface ReusableTableProps {
    headers : TableHeader[];
    data: TableRow[];
}

const ReusableTable: React.FC<ReusableTableProps> = ({ headers, data }) => {

    const handlePopulateData = () => {
      if(data.length < 1 ) {
        return (
          <tr>
            <td colSpan={headers.length + 1}>No Records Found.</td>
          </tr>
        )
      }else{
        return data.map((item, index) => (
          <tr key={index}>
            {Object.keys(item).map((key, index) => (
              <TableCell key={index} value={item[key]} />
            ))}
            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
              <div className="flex items-center space-x-3.5">
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Insert your SVG icon for action */}
                  </svg>
                </button>
                {/* Add other action buttons as needed */}
              </div>
            </td>
          </tr>
        ))
      }
    }

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  {headers.map((header, index) => (
                    <TableHeaderCell key={index} title={header.title} />
                  ))}
                  <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                {handlePopulateData()}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default ReusableTable;
