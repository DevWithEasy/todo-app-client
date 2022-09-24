import Nav from "./components/Nav";
import Router from "./components/Router";
import { useDispatch,useSelector } from 'react-redux';
import { loginAction } from "./redux/actions/authAction";


function App() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'));
  const stateUser = useSelector(state=>state.auth.user)
  if(user && !stateUser.name) {
    dispatch(loginAction(user))
  }
  
  return (
    <div className="App">
      <Nav/>
      <Router/>
    </div>
  );
}

export default App;
