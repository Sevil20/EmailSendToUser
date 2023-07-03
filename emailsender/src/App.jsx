import "./App.css";
import maintain1 from '../img/maintain1.jpg';
import maintain2 from '../img/maintain2.jpg';
import maintain3 from '../img/maintain3.jpg';
import maintain4 from '../img/maintain4.jpg';
import maintain5 from '../img/maintain5.jpg';
import EmailSender from "./EmailSender";


function App() {
  return (
    <>
    {/* <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div>
    <img src={maintain1} alt="" loading="lazy"></img>
  </div>
  <div className="col-start-3">
    <img src={maintain2} alt="" loading="lazy"></img>
  </div>
  <div>
    <img src={maintain3} alt="" loading="lazy"></img>
  </div>
  <div>
    <img src={maintain4} alt="" loading="lazy"></img>
  </div>
  <div className="row-start-1 col-start-2 col-span-2">
    <img src={maintain5} alt="" loading="lazy"></img>
  </div>
</div> */}
<EmailSender/>
    </> 
     );
}

export default App;
