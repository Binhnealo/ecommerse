    import Button from "@components/Button/Button";
    import InputCommon from "@components/InputCommon/InputCommon";
    import { useFormik } from "formik";
    import { useContext, useState } from "react";
    import { ToastContext } from "@/contexts/ToastProvider";
    import * as Yup from "yup";
    import { register, signIn } from "@/apis/authService";
    import Cookies from "js-cookie";
    import { SidebarContext } from "@/contexts/SideBarProvider";
    import { StoreContext } from "@/contexts/StoreProvider";

    function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsOpen } = useContext(SidebarContext);
    const { setUserId } = useContext(StoreContext);

    const handleToggleForm = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        },
        validationSchema: Yup.object({
        email: Yup.string().email("Invaild email").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        cfmpassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwrods must match"
        ),
        }),
        onSubmit: async (values) => {
        if (isLoading) return;
        const { email: username, password } = values;
        setIsLoading(true);
        if (isRegister) {
            await register({ username, password })
            .then((res) => {
                toast.success(res.data.message);
                setIsLoading(false);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
                setIsLoading(false);
            });
        }

        if (!isRegister) {
            await signIn({ username, password })
            .then((res) => {
                toast.success("Đăng nhập thành công");
                setIsLoading(false);
                const { token, refreshToken, id } = res.data;
                setUserId(id);
                Cookies.set("token", token);
                Cookies.set("refreshToken", refreshToken);
                Cookies.set("userId", id);
                setIsOpen(false);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
                setIsLoading(false);
            });
        }
        },
    });

    return (
        <div className="pt-[30px] px-[20px] pb-0">
        <div className="text-center text-[18px] mb-[30px] ">
            {isRegister ? "Sign Up" : "Sign IN"}
        </div>
        <form onSubmit={formik.handleSubmit}>
            <InputCommon
            id="email"
            label="Username or email"
            type="text"
            isRequired
            formik={formik}
            />

            <InputCommon
            id="password"
            label="Password"
            type="password"
            isRequired
            formik={formik}
            />

            {isRegister && (
            <InputCommon
                id="cfmpassword"
                label="Confirm password"
                type="password"
                isRequired
                formik={formik}
            />
            )}

            {!isRegister && (
            <div className="mb-[30px] flex gap-[10px] items-center">
                <input type="checkbox" />
                <span className="text-[14px] mr-[10px]">Remember me</span>
            </div>
            )}
            <div>
            <Button
                content={
                isLoading ? "LOADING..." : isRegister ? "Sign up" : "Sign in"
                }
                type="submit"
            />
            </div>
        </form>
        <div className="mt-[10px]">
            {" "}
            <Button
            content={
                isRegister ? "Already have an account" : "Don't have an account"
            }
            onClick={handleToggleForm}
            isPrimary={false}
            />
        </div>
        {!isRegister && (
            <div className=" mt-[30px] text-center text-[14px] text-thriColor hover:text-black cursor-pointer ">
            Lost your password?
            </div>
        )}
        </div>
    );
    }

    export default Login;
