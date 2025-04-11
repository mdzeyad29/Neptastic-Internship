import React from 'react'
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>        
        <form onSubmit={handleSubmit((data) => { console.log(data) })}>
          <div className="mb-4">
            <input
              {...register('login', { required: true })}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.login && <p className="text-red-500 text-sm mt-1">Username is required.</p>}
          </div>

          <div className="mb-4">
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required.</p>}
          </div>

          <button
            type='submit'
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
