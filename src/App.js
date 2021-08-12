//importing stylesheet
import './App.css';
//creating a card for each plan
function App() {
  return (
    <div className = "container">
      {/* passing planname and plan price as props to each card*/ }
     <Card planname = "FREE" planprice = "0"/>
     <Card planname = "PLUS" planprice = "9"/>
     <Card planname = "PRO" planprice = "49"/>
    </div>
  );
}
function Card(props){
  return ( 
    <div className ="eachplan"> 
      <div className = "plancard"> {/* header and content wrapped in this div */}
        <div className = "planheader"> {/* header part of plan */}
          <div className="planname">{props.planname}</div>
          <span className="planprice">${props.planprice}</span>/month
        </div>
       <hr/>
      
        <ul className = "plancontent"> {/* content of the plan */}
          {/* naming the plan */}
          <li>{props.planname==="FREE"?"Single User":props.planname==="PLUS"?"5 Users":"Unlimited Users"}</li>
          {/* providing storage as per the plan */}
          <li>{props.planname==="FREE"?"5":props.planname==="PLUS"?"50":"150"}GB Storage</li>
          <li>Unlimited Public Projects</li>
          <li>Community Access</li>
          <li>Unlimited Private Projects</li>
          <li>Dedicated Phone Support</li>
          {/* providing bolded text for pro and unlimited users */}
          <li><div><span className="bold">{props.planname==="PRO"?"Unlimited":""}</span> Free Subdomain</div></li>
          <li>Monthly Status Reports</li>
        </ul>
        {/*creating a button */}
      <div className="buttondiv"><button>BUTTON</button></div>
    </div>
    </div>
  );
}

export default App;