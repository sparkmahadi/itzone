import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    // const { isLoading, postSuccess, error, isError } = useSelector((state) => state.products)

    const submit = (data) => {

        console.log(data);
        const product = {
            model: data.model,
            brand: data.brand,
        };

        // console.log(product);

        // dispatch(addProduct(product));
    };
    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md max-w-3xl bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs mb-3'>
                    <label className='mb-2' htmlFor='mobile'>
                        Phone
                    </label>
                    <div className="flex gap-3">
                        <input className="border rounded-md w-1/4" type='text' defaultValue={'BD(+880)'} />
                        <input className="border rounded-md w-3/4" type='number' id='mobile' {...register("mobile")} />
                    </div>
                </div>

                <div className='flex flex-col w-full max-w-xs mb-5'>
                    <label className='mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input className="border rounded-md" type='text' name='password' id='password' {...register("password")} />
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