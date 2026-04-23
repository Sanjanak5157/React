const App = () =>{

  

  function inputChanging () {
    console.log('user is typing')
  }
  
  
  return(
    <div>
      <input onChange={inputChanging} type="text" placeholder='Enter Name'/>
    </div>

  )
}

export default App














// const App = () =>{

//   function btnclicked (){
//     console.log("Hello world")
//   return(

  //   <div>Hello world
  //   <button onClick={btnclicked} >click here method 1</button>

  //   <button onDoubleClick={function onDoubleClick (){
  //   console.log("explore the web ")}} >click explorehere method2</button>

  //   <button onClick={()=>{
  //   console.log('button hello world ')
  //    }}>method3 </button>

  //    <div className="tag">
  //     <h1 className="head">hi hello</h1>
  //    </div>
  // </div>
//   )

// }

// export default App

// you can see the both method 