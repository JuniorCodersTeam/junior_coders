import { useState, useRef} from 'react';

const Contact = () => {
  const [msgFrom, setMsgFrom] = useState("")
  const [msgFromErr, setMsgFromErr] = useState(false)
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [msg, setMsg] = useState("")
  const [msgErr, setMsgErr] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [agreeErr, setAgreeErr] = useState(false)

  const form = useRef()

  const preventEnter = (e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
    }
  }

  const handleChangeName = (e) => {
    const newValueIsValid = !e.target.validity.patternMismatch;

    if (msgFromErr && newValueIsValid) {
        setMsgFromErr(false);
    }
    setMsgFrom(e.target.value)
  }

  const validateMsgFrom = (e) => {
    if (e.target.validity.patternMismatch) {
        setMsgFromErr(true)
    } else {
        setMsgFromErr(false)
        }
  }

  const handleChangeEmail = (e) => {
    const newValueIsValid = !e.target.validity.patternMismatch;

    if (emailErr && newValueIsValid) {
        setEmailErr(false);
    }
    setEmail(e.target.value)
  }

  const validateEmail = (e) => {
    if (e.target.validity.patternMismatch) {
        setEmailErr(true)
    } else {
            setEmailErr(false)
            }
  }

  const handleChangeMsg = (e) => {
    if (e.target.value.length >= 10) {
        setMsgErr(false);
    }
    setMsg(e.target.value)
  }

  const validateMsg = (e) => {
    if (e.target.value.length >= 10 || e.target.value.length == 0) {
        setMsgErr(false)
    } else {
            setMsgErr(true)
            }
    }

    const handleCheckAgree = (e) => {
      if (e.target.checked) {
          setAgreed(true)
          setAgreeErr(false)
      } else {
          setAgreed(false)
      }
  }

  return (
    <>
      <div className="contact-container">
        <form ref={form} className="contact-form">
          <h2 className="contact-form-title">Napisz do nas</h2>
          <input
            name="user_name"
            placeholder="Imię"
            type="text"
            value={msgFrom}
            className={ msgFromErr ? "form-control-alert" : null}
            onChange={handleChangeName}
            pattern="^\S{2,}$"
            onBlur={validateMsgFrom}
            onKeyPress={preventEnter}
          />
          <h6  
            className={ 
            msgFromErr 
            ? 
            "contact-form-alert" 
            : 
            "contact-form-alert d-none"
            }>Imię musi składać się z conajmniej 2 znaków!
          </h6>
          <input 
            name="user_email"
            placeholder="Email"
            type="text"
            value={email}
            className={ emailErr ? "form-control-alert" : null}
            onChange={handleChangeEmail}
            onBlur={validateEmail}
            onKeyPress={preventEnter}
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$'
          />
          <h6  
            className={ 
            emailErr 
            ? 
            "contact-form-alert" 
            : 
            "contact-form-alert d-none"
            }>Podany email jest niepoprawny!
          </h6>
          <textarea
            name="message"
            placeholder="Twoja wiadomość"
            value={msg}
            rows= "6"
            className={ msgErr ? "form-control-alert" : null }
            onChange={handleChangeMsg}
            minLength="20"
            onBlur={validateMsg}
            onKeyPress={preventEnter}
            style={{resize: "none"}}
          />
          <h6  
            className={ 
            msgErr 
            ? 
            "contact-form-alert" 
            : 
            "contact-form-alert d-none"
            }>Wiadomość musi składać się z conajmniej 10 znaków!
          </h6>
          <div className='agree-box'>
            <input
              type="checkbox"
              id="agreement-input"
              onChange={handleCheckAgree}
            >
            </input>
            <span className="checkmark"></span>
            <label>Wyrażam zgodę na przetwarzanie danych wpisanych w formularzu w celu udzielenia odpowiedzi na przesłane zapytanie.</label>
          </div>
          <h6  
            className={ 
            agreeErr 
            ? 
            "contact-form-alert" 
            : 
            "contact-form-alert d-none"
            }>Aby wysłać zapytanie potrzebna jest Twoja zgoda na przetwarzanie danych!
          </h6>
        </form>
        
      </div>
    </>
  )
};

export default Contact;
