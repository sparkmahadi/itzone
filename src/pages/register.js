import { registerUser, throughErrorMessage, toggleRegisterSuccess } from '@/redux/features/user/userSlice';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const router = useRouter();
    const { userProfile, registerSuccess, userLoading, userError, error, invalidMobile } = useSelector((state) => state.user)

    const submit = (data) => {

        const regex = /^1\d{9}$/;
        // console.log(regex.test(data.mobile));

        if (regex.test(data.mobile)) {
            data.mobile = "+880" + data.mobile;
            console.log(data);
            dispatch(registerUser(data));
            localStorage.setItem("userITZone", JSON.stringify(data));
        } else {
            dispatch(throughErrorMessage("Invalid Phone Number"));
        }

    };

    useEffect(() => {
        if (registerSuccess & !userLoading) {
            toast.success("Registered Successfully", { id: "registration" });
            dispatch(toggleRegisterSuccess());
            reset();
            router.push("/");
        };

        if (userLoading && !error) {
            toast.loading("Registering...", { id: "registration" })
        }

        if (!userLoading && userError) {
            toast.error(error, { id: "registration" });
            reset();
        };

        if (error === "Request failed with status code 403") {
            toast.error("There is an account on this number already!", { id: "registration" });
            reset();
        }

    }, [registerSuccess, userLoading, userError, error]);

    useEffect(() => {
        if (userProfile && registerSuccess) {
            router.push("/");
        }
    }, [userProfile, registerSuccess])

    return (
        <div className='flex justify-center items-center h-full my-5'>
            <form
                className='shadow-lg p-10 rounded-md max-w-3xl bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div>
                    <h3 className="text-lg text-center font-semibold mb-3 uppercase">Register</h3>
                </div>

                <div className='flex flex-col w-full max-w-xs mb-3'>
                    <label className='mb-2' htmlFor='mobile'>
                        Phone:
                    </label>
                    <div className="flex gap-3">
                        <input className="border rounded-md w-1/4" type='text' defaultValue={'BD(+880)'} readOnly />
                        <input required className="border rounded-md w-3/4" type='number' id='mobile' {...register("mobile")} />
                    </div>
                    {
                        invalidMobile && <p className='text-red-500 mt-2'>Sorry! {invalidMobile}</p>
                    }
                </div>

                <div className='flex flex-col w-full max-w-xs mb-5'>
                    <label className='mb-2' htmlFor='password'>
                        Password:
                    </label>
                    <input required className="border rounded-md" type='text' name='password' id='password' {...register("password")} />
                </div>

                <div className='flex flex-col w-full max-w-xs mb-5'>
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