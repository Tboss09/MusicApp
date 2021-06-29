import React from 'react'
import '../contact/contact.css'

const Contact = () => {
  return (
      <div className='box'>           
          <div className='w100 main'>
            <article class="br2 ba dark-gray shadow-4 article b--black-10 w-100 w-50-m w-25-l mw8 pa4 center">
            <div>
                    <div class="measure">
                        <label htmlFor="name" className="f6 b db mb2">Name</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div class="measure">
                        <label htmlFor="name" className="f6 b db mb2">Email</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="name-desc" />
                    </div>  
                    <div class="measure">
                        <label htmlFor="name" className="f6 b db mb2">Subject</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>  
                    <div>
                    <label htmlFor='comment' className='f6 b db mb2'>
                        Comments <span className='normal black-60'>(optional)</span>
                    </label>
                    <textarea
                        id='comment'
                        name='comment'
                        className='db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2'
                        aria-describedby='comment-desc'
                    ></textarea>
                    </div>
                    <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-blue">Send Message</button>
            </div>
            </article>
        </div>
      </div>
  )
}

export default Contact
