import { Fragment, useState } from 'react'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { useTable, useGlobalFilter, useExpanded } from 'react-table'
import GlobalFilter from './GlobalFilter'

const Table = ({ columns, data,renderRowSubComponent }) => {

    const [expand, setExpand] = useState(false)
    const [selectedRow, setSelectedRow] = useState()

    
    const openRow = (id) => {
        setSelectedRow(id)
        setExpand(!expand)
    }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        visibleColumns,
    } = useTable({ columns, data, }, useGlobalFilter, useExpanded)



    const { globalFilter, expanded } = state


    
    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead style={{ color: "lightblue" }}>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (

                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>

                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Fragment key={row.getRowProps().key}>
              <tr>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
              {row.isExpanded && (
                <tr>
                  <td colSpan={visibleColumns.length}>
                    {renderRowSubComponent(row)}
                  </td>
                </tr>
              )}
            </Fragment>
          );
        })}
      </tbody>
            </table>

        </>
    )
}
export default Table



// {selectedRow ?
//     <AiOutlineRight style={{ fill: "rgb(98, 253, 253)" }} />
//     :
//     <AiOutlineDown style={{ fill: "rgb(98, 253, 253)" }} />
// }

{/* <div className='expandicon'>  {expand && selectedRow == row.id ?
                                    <AiOutlineDown style={{ fill: "rgb(98, 253, 253)", marginTop: "0.5rem" }} />
                                    :
                                    <AiOutlineRight style={{ fill: "rgb(98, 253, 253)", marginTop: "0.5rem" }} />
                                }</div> */}