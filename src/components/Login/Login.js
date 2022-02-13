import React from 'react'
import { Bar, Down, Search, Theo, Wrapper,Button } from './Login.styled'

const Login = () => {
  return (
    <Wrapper>
        <Bar>

            <Theo src='/assets/person/me.jpeg' alt=''/>
            <Search>
                <label> Email Address</label>
                <input type='text' />

                <label>Enter Password</label>
                <input type='text' />

            </Search>
           <Down>
               <Button>
                   Log in
               </Button>
               
           </Down>  
        </Bar>
    </Wrapper>
  )
}

export default Login