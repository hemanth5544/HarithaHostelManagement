import React, {useState} from "react";

const SignupPage = () => {
    const [status, setStatus] = useState(false);
    const[Password,setPassword] = useState("");
    const[value,setValue] = useState("")

    const onToggleValue = () => {
        setStatus(!status);
    }
    const  StorePassword = (event) => {
        setPassword(event.target.value);
    }
    const checkPassowords = (event) => {
        if (Password === event.target.value){
            setValue("Password Matched");
        }else{
            setValue("Password Unmatched")
        }
    }
    return (
        <div className="flex flex-row w-full h-full">
        <div className="flex flex-col justify-center w-2/5 p-8 px-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Signup For More Details</h2>
            <label htmlFor="name" className="w-full mb-2 text-xl font-bold">
                Name<sup className="text-xl font-bold">*</sup>
            </label>
            <input 
                type="text" 
                placeholder="Full Name" 
                id="name" 
                className="w-full p-2 border-2 mb-4 rounded-lg"
            />
            <label htmlFor="username" className="w-full mb-2 text-xl font-bold">
                Email<sup className="text-xl font-bold">*</sup>
            </label>
            <input 
                type="email" 
                placeholder="Email" 
                id="username" 
                className="w-full p-2 border-2 mb-4 rounded-lg"
            />
            <label htmlFor="password" className="w-full mb-2 text-xl font-bold">
                Password<sup className="text-xl font-bold">*</sup>
            </label>
            <div className="relative w-full">
                <input 
                    type={status ? "text" : "password"} 
                    placeholder="Password" 
                    id="password" 
                    className="w-full p-2 border-2 mb-4 rounded-lg"
                    onChange = {StorePassword}
                />
                <button 
                    onClick={onToggleValue} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                    {
                        status ? (
                            <img src="/service_images/icons/eyeOpen.svg" alt="eyeopen" className="w-[20px] pb-3"/>
                        ) : (
                            <img src="/service_images/icons/eyeClose.png" alt="eyeclose" className="w-[20px] pb-3"/>
                        )
                    }
                </button>
            </div>
            <label htmlFor="cpassword" className="w-full mb-2 text-xl font-bold">
                Confirm Password<sup className="text-xl font-bold">*</sup>
            </label>
            <div className="relative w-full">
                <input 
                    type={status ? "text" : "password"} 
                    placeholder="Password" 
                    id="cpassword" 
                    className="w-full p-2 border-2 mb-2 rounded-lg"
                    onChange={checkPassowords}
                />
                <button 
                    onClick={onToggleValue} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                    {
                        status ? (
                            <img src="/service_images/icons/eyeOpen.svg" alt="eyeopen" className="w-[20px] pb-3"/>
                        ) : (
                            <img src="/service_images/icons/eyeClose.png" alt="eyeclose" className="w-[20px] pb-3"/>
                        )
                    }
                </button>
            </div>
            <p className={value === "Password Matched" ? "text-left text-green-900 text-sm font-semibold":"text-left  text-red-700 text-sm font-semibold"}>{value}</p>
            <p className="text-center py-3 text-xl font-bold">or login with</p>
            <div className="flex flex-row justify-center w-full space-x-5 mb-2 mt-2">
                <button className="bg-transparent text-black border border-black text-lg py-2 px-4 rounded mb-4 flex items-center">
                    <img src="/service_images/icons/google.svg" alt="google" className="w-[30px] mr-2"/>
                    <p>Google</p>
                </button>
                <button className="bg-transparent text-black border border-black text-lg py-2 px-4 rounded mb-4 flex items-center">
                    <img src="/service_images/icons/facebook.svg" alt="facebook" className="w-[30px] mr-2"/>
                    <p>Facebook</p>
                </button>
            </div>
            <div className="text-center">
            <button className="bg-green-500 text-white py-3 px-8 rounded-lg text-xl font-bold">
                Signup
            </button>
            </div>
        </div>
        <div className="relative h-full w-3/5">
            <img 
                src="/service_images/LoginPageImage.jpg" 
                alt="loginbanner" 
                className="max-h-screen w-full object-cover"
            />
            <div className="inset-0 absolute flex flex-col justify-end  px-24 text-center">
                <h1 className="text-5xl font-bold text-rose-500">
                    Welcome to Haritha Women's PG
                </h1>
                <h2 className="text-white mb-2 font-bold text-2xl">About Us</h2>
                <p className="text-white">A type of accommodation where people rent rooms or beds in a residential facility. PGs are a popular choice for students and working professionals because they are affordable and convenient. They are similar to homestays and offer a more home-like environment than a hostel. PGs typically have private or shared rooms and shared facilities like kitchens and bathrooms</p>
            </div>
        </div>
    </div>
    )
}

export default SignupPage;