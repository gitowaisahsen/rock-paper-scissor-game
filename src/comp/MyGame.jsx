import React,{useState} from 'react'
import r from './rock.png'
import p from './paper.png'
import s from './scissor.png'


export default function MyGame() {
   const[user,setUser]=useState("")
   const[comp,setComp]=useState("")
   const[result,setResult]=useState("")
   const[score,setScore]=useState(0)
   const click=(e)=>{
                let a=e.target.name;
                let b=Math.round(Math.random()*2)
                
                if (b==0)
                b = "Rock"
                else if (b==1)
                b = "Paper"
                else if (b==2)
                b ="Scissor"
                setUser(a)
                setComp(b)

                
                if (a== 'Rock' && b=="Rock")
                setResult("Tiee")
                else if (a=='Rock'&& b=="Paper")
                setResult("Computer Win")
                else if (a=='Rock'&& b=="Scissor")
                {setResult("User Win")
                 setScore(score+1)}

                else if (a== 'Paper' && b=="Rock")
                {setResult("User Win")
                 setScore(score+1)}
                else if (a=='Paper'&& b=="Paper")
                setResult("Tiee")
                else if (a=='Paper'&& b=="Scissor")
                setResult("Computer Win")

                else if (a== 'Scissor' && b=="Rock")
                setResult("Computer Win")
                else if (a=='Scissor'&& b=="Paper")
                {setResult("User Win")
                 setScore(score+1)}
                else if (a=='Scissor'&& b=="Scissor")
                setResult("Tiee")
                
                }
                
  return (
    <div>
        <h1 className='heading'>ROCK,PAPER,SCISSOR GAME</h1>
        <div className='pic'>
            <img src= {r} style={{height:"200px",width:"200px",margin:"18px"}} name="Rock" onClick={click} />
            <img src= {p} style={{height:"200px",width:"200px",margin:"18px"}} name="Paper" onClick={click}/>
            <img src= {s} style={{height:"200px",width:"200px",margin:"18px"}} name="Scissor" onClick={click}/>

        </div>
        <div>
          
          
        </div>
        <div className='text'>
            <h1>{`USER=${user}`}</h1>
            <h1>{`COMPUTER=${comp}`}</h1>
            <h1>{`RESULT=${result}`}</h1>
            <h1>{`SCORE=${score}`}</h1>


        </div>

    </div>
  )
}
