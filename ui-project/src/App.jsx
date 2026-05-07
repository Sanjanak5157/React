import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'




const App = () =>{

  const users =[
    {
      img:"https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'Walking daily foucus on it and day by day see the gravity',
      color:'royalblue',
      tag:'Walking',
    },
    {
      img:"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'fit in to it like so',
      color:'pink',
      tag:'Fitness',
    },
    {
      img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'the morning boost then whole day boost',
      color:'green',
      tag:'yoga',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1663099952371-b1dec92323e0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'the body strech to strech the path',
      color:'orange',
      tag:'strech',

    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661868906940-5d8443acf49e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'play in tries',
      color:'yellow',
      tag:'Sports'
    },
    {
      img:'',
      intro:'strong in lift',
      color:'brown',
      tag:'Sports'
    },
    {
      img:'',
      intro:'liegthweigth your self',
      color:'peach',
      tag:'Sports'
    }
    ]



  return (
    <div>
      <Section1 users={users} />
      <Section2/>
       <div className='hi'>

    </div>
    </div>

   
  )
}
export default App


