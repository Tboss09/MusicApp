import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='box login'>
      <div className='w100 main'>
        <article class='br2 ba dark-gray shadow-4 article b--black-10 w-100 w-50-m w-25-l mw8 pa4 center'>
          <div>
            <div class='measure'>
              <label htmlFor='name' className='f6 b db mb2'>
                Username
              </label>
              <input
                id='name'
                className='input-reset ba b--black-20 pa2 mb2 db w-100'
                type='text'
                aria-describedby='name-desc'
              />
            </div>
            <div class='measure'>
              <label htmlFor='name' className='f6 b db mb2'>
                Password
              </label>
              <input
                id='name'
                className='input-reset ba b--black-20 pa2 mb2 db w-100'
                type='password'
                aria-describedby='name-desc'
              />
            </div>

            <button className='f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue'>
              Login
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Login
