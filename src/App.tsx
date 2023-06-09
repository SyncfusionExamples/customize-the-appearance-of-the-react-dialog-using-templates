import { DialogComponent} from '@syncfusion/ej2-react-popups';
import './App.css';

function App() {
  function header():JSX.Element{
    return(
      <div>
        <img className='e-template-image' src='logo.png'/>
        <span id='template' className='e-icon-settings'>Syncfusion</span>
      </div>
    )
  }
  function content():JSX.Element{
    return(
      <div className='dialogContent'>
        <span className='dialogText'>Want to be alerted when our videos are published? Enter your mail address to be the first notified!</span>

      </div>
    )
  }
  function footerTemplate():JSX.Element{
    return(
      <div>
        <input id='textbox' className='e-input' type='text' placeholder='Enter your mail id'/>
        <button id='subscribeButton' className='e-info e-btn'>SUBSCRIBE</button>
      </div>
    )
  }
  return (
    <div className="App">
     <DialogComponent 
    height="250px"
    width="435px"
    header={header}
    showCloseIcon={true}
    content={content}
    footerTemplate={footerTemplate}>
  </DialogComponent> 
    </div>
  );
}

export default App;
