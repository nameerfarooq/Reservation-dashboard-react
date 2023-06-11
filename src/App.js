import '../src/Assets/Style/style.css'
import Main from './Pages/Main';
import chat from './Assets/Images/chat.png'
function App() {
  return (
    <div className="App">
      <div className='posrel'>
        <div className='chatholder'>
          <img src={chat} alt="" />
        </div>
        <Main />
      </div>
    </div>
  );
}

export default App;
