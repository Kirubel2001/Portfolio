
import './App.css';
import Header from './components/header';
import Footer from './components/body';
import Body from './components/footer';


export default function App() {
  return (
    <div className='business-card'>
      <div className='business'>
     <Header/>
     <Footer/>
     <Body/>
      </div>
    </div>
  );
}


