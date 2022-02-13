import React from 'react'
import { Bar, Down, Search, Theo, Wrapper,Button, All } from './Login.styled'

const Login = () => {
  return (
    <Wrapper>
        <Bar>
        <All>
        <Theo src='/assets/person/music.jpeg' alt=''/>
            <Search>
         
                <label className='All'> Email Address</label>
                <input type='text' className='Yoo'/>

                <label className='All'>Enter Password</label>
                <input type='text' className='Yoo'/> 
             
               

            </Search>
           <Down>
               <Button>
                   Log in
               </Button>
               
           </Down> 
         
        </All>

        </Bar>
    </Wrapper>
  )
}

export default Login