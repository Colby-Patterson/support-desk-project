import {useState} from "react"
import {toast} from "react-toastify"
import {FaUser} from "react-icons/fa"
import {useSelector, useDispatch} from "react-redux"
import {register} from "../features/auth/authslice"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  })

  const {name, email, password, passwordConfirmation} = formData

  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, message} = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== passwordConfirmation) {
      toast.error("Passwords do not match")
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} placeholder="Enter name" required/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Enter email" required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Enter password" required/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="passwordConfirmation" name="passwordConfirmation" value={passwordConfirmation} onChange={onChange} placeholder="Confirm password" required/>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
    )
}

export default Register