import Buttton from "@components/Button/Button";
import InputCommon from "@components/InputCommon/InputCommon";

function Login() {
    return <div className="pt-[30px] px-[20px] pb-0">
        <div className="text-center text-[18px] mb-[30px] ">SIGN IN</div>
        <InputCommon label="Username or email" type="text" isRequired />
        <InputCommon label="Password" type="password" isRequired />
        <div className="mb-[30px] flex gap-[10px] items-center">
            <input type="checkbox"  />
            <span className="text-[14px] mr-[10px]">Remember me</span>
        </div>
        <div className=""><Buttton className='w-full' content={'Login'}/></div>
        <div className=" mt-[30px] text-center text-[14px] text-thriColor cursor-pointer ">Lost your password?</div>

    </div>;
}

export default Login;