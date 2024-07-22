"use client"
import Link from "next/link"


const Login = () => {
  return (
    <div>
      {/* <!-- component --> */}
<div className="bg-gray-100 flex justify-center items-center h-screen">
    {/* <!-- Left: Image --> */}
<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>
{/* <!-- Right: Login Form --> */}
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  
  <form action='#' method="POST">
    {/* <!-- Username Input --> */}
    <div className="mb-4">
      <label  className="block text-gray-600">Name</label>
      <input type="text" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    {/* <!-- Password Input --> */}
    <div className="mb-4">
      <label  className="block text-gray-600">Password</label>
      <input type="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"/>
    </div>
    {/* <!-- Remember Me Checkbox --> */}
    <div className="mb-4 flex items-center">
      <input type="checkbox" name="remember" className="text-blue-500"/>
      <label  className="text-gray-600 ml-2">Remember Me</label>
    </div>
    {/* <!-- Forgot Password Link --> */}
    <div className="mb-6 text-blue-500">
      <Link href="#" className="hover:underline">Forgot Password?</Link>
    </div>
    {/* <!-- Login Button --> */}
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  {/* <!-- Sign up  Link --> */}
  <div className="mt-6 text-blue-500 text-center">
    <Link href="/auth/register" className="hover:underline">Register now🏃‍♂️</Link>
  </div>
</div>
</div>
    </div>
  )
}

export default Login