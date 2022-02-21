import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TableComponent from './components/TableComponent';
import { loadUsersAsync } from './redux/reducers/users/users.thunks';
import { loadUser } from './redux/reducers/users/users.thunks';


function App() {

  const dispatch = useDispatch()
  const { isLoading, users, errorMessage } = useSelector(state => state.users)



  useEffect(() => {

    dispatch(loadUsersAsync())
    
  }, [])

  console.log("user", users?.data)

  return (
    <>
      {isLoading ? <div className='loading'> Loading... </div>
      :
       <div className="App">
        <TableComponent usersInfo={users} isLoading={isLoading} />
      </div>
    }
    </>
  );
}

export default App;



// {isLoading && <div> Loading... </div> }
// {errorMessage && <div>Error Occured</div> }