import { getUser, throughErrorMessage } from "@/redux/features/user/userSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const router = useRouter();

    const { userProfile, loginSuccess, userLoading, userError, error, invalidMobile } = useSelector((state) => state.user)

    const submit = (data) => {
        const regex = /^1\d{9}$/;

        if (regex.test(data.mobile)) {
            data.mobile = "+880" + data.mobile;
            data.role = "";
            console.log(data);
            dispatch(getUser(data.mobile));
        } else {
            dispatch(throughErrorMessage("Invalid Phone Number"));
        }
    };

    useEffect(() => {
        if (userProfile && loginSuccess) {
            localStorage.setItem("userITZone", JSON.stringify(userProfile));
            toast.success("Logged In Successfully", { id: 'userLogin' });
            router.push("/");
        }
    }, [userProfile, loginSuccess]);

    return (
        <div className='flex justify-center items-center h-full my-5'>
            <form
                className='shadow-lg p-10 rounded-md max-w-3xl bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div>
                    <h3 className="text-lg text-center font-semibold mb-3 uppercase">Log In</h3>
                </div>

                <div className='flex flex-col w-full max-w-xs mb-3'>
                    <label className='mb-2' htmlFor='mobile'>
                        Phone
                    </label>
                    <div className="flex gap-3">
                        <input readOnly className="border rounded-md w-1/4" type='text' defaultValue={'BD(+880)'} />
                        <input required className="border rounded-md w-3/4" type='number' id='mobile' {...register("mobile")} />
                    </div>
                </div>

                <div className='flex flex-col w-full max-w-xs mb-5'>
                    <label className='mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input required className="border rounded-md" type='text' name='password' id='password' {...register("password")} />
                </div>

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-2 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;