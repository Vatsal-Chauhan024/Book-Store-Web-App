import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"
import { AuthContext } from '../Context/AuthProvider'
import googleLogo from "../assets/google-logo.svg"

const Login = () => {

	const {login, loginWithGoogle} = useContext(AuthContext);
	const [errorMsg, setErrorMsg] = useState('')

	const location = useLocation();
	const navigate = useNavigate()
	const from = location.state?.from?.pathname || "/"

    const handleLogin = (event) => {


        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

		login(email, password) .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Logged In Successfully!!");
			navigate(from, {replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
		}
		const handleRegisteration = () => {
			  loginWithGoogle().then((result)=> {
				  const user = result.user;
				  navigate(from, {replace: true})
			  })
		}


  return (
   
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<form onSubmit={handleLogin} class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>
                        <p>Don't have an account. Please <Link to = "/sign-up" className='text-blue-600 underline cursor-pointer'>Signup</Link></p>
						<div class="relative">
							<button class="bg-blue-700 hover:bg-black transition-all duration-300 text-white rounded-md px-2 py-1">Login</button>
						</div>
					</form>

					<hr />
					<div>
						<button onClick={handleRegisteration} className='flex w-full items-center justify-center mt-5 gap-3'>
						<img src={googleLogo} alt="error-google-icon" className='w-12 h-12 inline-block' />
							Login with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login
