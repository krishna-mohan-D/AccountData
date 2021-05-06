import './App.css';
import  AccountInfo from './components/AccountInfo'
import {Provider} from 'react-redux';
import {store} from './redux/store'

function App() {
  return (
   <>
     <Provider store={store}> 
        <div >     
          <AccountInfo/>
        </div>  
      </Provider>  
   </>
  );
}

export default App;
