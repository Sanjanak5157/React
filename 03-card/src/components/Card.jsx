



const Card = () => {
    return (
         <div className="card">
            <div>
      <div className="top">
        <img src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="amzon"/>
        <button>save as</button>
      </div>
      <div className="center">
        <h1>Frontend<span>UI/UX</span></h1>
        <h5>This all is react framwork</h5>
        <div className="tag">
        <h2>Html</h2>
        <br></br>
        <h2>css</h2>
        </div>
      </div>
      </div> 
      {/* make like id card frame for that head and pargraphy  */}
      <div className="bottom">
        <button>Apply now</button>
        <div>
        <h4>oh ok</h4>
        <p>that framework</p>
        </div>
      </div>
    </div>
    )
}
export default Card