import { registerUser } from '@/redux/features/user/userSlice';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const [error, setError] = useState("");
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const { user, registerSuccess } = useSelector((state) => state.user)

    const submit = (data) => {

        console.log(data);
        const regex = /^1\d{9}$/;
        console.log(regex.test(data.mobile));

        if (regex.test(data.mobile)) {
            setError("");
            dispatch(registerUser(data));
        } else {
            setError("Invalid Phone Number");
        }

    };

    useEffect(() => {
        if (registerSuccess) {
            toast.success("Registered Successfully");
        }
    }, [registerSuccess])

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md max-w-3xl bg-white'
                onSubmit={handleSubmit(submit)}
            >

                <div className='flex flex-col w-full max-w-xs mb-3'>
                    <label className='mb-2' htmlFor='mobile'>
                        Phone:
                    </label>
                    <div className="flex gap-3">
                        <input className="border rounded-md w-1/4" type='text' defaultValue={'BD(+880)'} />
                        <input className="border rounded-md w-3/4" type='number' id='mobile' {...register("mobile")} />
                    </div>
                </div>

                <div className='flex flex-col w-full max-w-xs mb-5'>
                    <label className='mb-2' htmlFor='password'>
                        Password:
                    </label>
                    <input className="border rounded-md" type='text' name='password' id='password' {...register("password")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='accType'>
                        Account Type
                    </label>
                    <select name='accType' id='accType' {...register("accType")}>
                        <option value='Buyer'>Buyer</option>
                        <option value='Seller'>Seller</option>
                    </select>
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-2 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;