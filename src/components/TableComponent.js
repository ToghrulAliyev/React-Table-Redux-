import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import ReactPaginate from "react-paginate";
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
import Table from './Table'


function TableComponent({ usersInfo, isLoading }) {
    const [users, setUsers] = useState(usersInfo.data.slice(0, 200));
    const data = useMemo(() => usersInfo?.data, [])
    const usersPerPage = 10;
    const [pageNumber, setPageNumber] = useState(0);
    const pageCount = Math.ceil(users.length / usersPerPage);
    const pagesVisited = pageNumber * usersPerPage;

    const renderRowSubComponent = () => {
        
        return (
            <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        );
      };


    const columns = useMemo(() =>
        [
            {
                Header: () => null,  
                id: 'expander',  
                Cell: ({ row }) => (
                   
                    <span {...row.getToggleRowExpandedProps()}>
                        {row.isExpanded ? <AiOutlineDown style={{ fill: "rgb(98, 253, 253)"}}/> : <AiOutlineRight style={{ fill: "rgb(98, 253, 253)"}}/>}
                    </span>
                ),
                 
                SubCell: (cellProps) => {
                    console.log("cellProps",cellProps)
                    return(
                    <>{cellProps.value} </>
                  )}
            },

            {
                Header: 'PostId',
                accessor: 'postId',
            },
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
        ],
        []
    )
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className='container'>
            <div className='table-container'>
                {isLoading ? <div> loading... </div> :
                    <>

                        <Styles>
                            <Table columns={columns} data={data.length > 0 ? data.slice(pagesVisited, pagesVisited + usersPerPage) : <div>loading ...</div>} renderRowSubComponent={renderRowSubComponent} />
                        </Styles>

                        <PaginationContainer >
                            <ReactPaginate
                                previousLabel={<AiOutlineLeft />}
                                nextLabel={<AiOutlineRight />}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </PaginationContainer>
                    </>
                }
            </div>

        </div>
    )
}

export default TableComponent



const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    width:100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
     

      :last-child {
        border-right: 0;
        
      }
    }
  }
`
const PaginationContainer = styled.div`
 
   margin-top:1rem;
   padding:0 3rem;
   width:auto;
   height:3rem;
   color:blue;
   display flex;
   justify-content:flex-end;
   align-items:center;

`





// {
//     Header: 'ID',
//     accessor: 'id',
// },
// {
//     Header: 'Name',
//     accessor: 'name',
// },
// {
//     Header: 'Username',
//     accessor: 'username',
// },
// {
//     Header: 'Email',
//     accessor: 'email',
// },
// {
//     Header: 'Phone',
//     accessor: 'phone',
// },
// {
//     Header: 'Website',
//     accessor: 'website',
// },