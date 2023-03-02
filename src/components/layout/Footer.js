import React from 'react'
import { useInput } from '../../util/hooks/useInput';
import "./../../util/styles/Footer.css"

function Footer({ mode }) {
  const [email, resetEmail] = useInput("");

  const handleSubmit = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.preventDefault()
    alert(email.val);
    resetEmail();  
  }

  return (
    <div className={mode ? "dark footer" : "footer"}>
      Footer
      <form onSubmit={handleSubmit}>
        <input
          {...email}
          type="text"
          placeholder='Subscribe us...'
        />
        <button>Subscribe</button>
      </form>
    </div>
  )
}

export default Footer