import { registerUser } from "../services/userService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { Card, Form, Input, Button } from "antd";

export default function Register() {

    const navigate = useNavigate();

const onFinish = async (values) => {
    try {

        await registerUser(values);

        message.success("Registration Successful");

        navigate("/login");

    }
    catch (error) {
    console.log(error);
    console.log(error.response);

    message.error(
        error.response?.data?.message || "Registration Failed"
    );
}
};

    return (
        <Card
            title="Register"
            style={{
                width: 450,
                margin: "50px auto"
            }}
        >
            <Form layout="vertical" onFinish={onFinish} >                   

                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your full name",
                        },
                    ]}
                >
                    <Input placeholder="Enter your full name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your email",
                        },
                        {
                            type: "email",
                            message: "Please enter a valid email",
                        },
                    ]}
                >
                <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your password",
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <Form.Item
                    label="Channel Name"
                    name="channelName"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your channel name",
                        },
                    ]}
                >
                    <Input placeholder="Enter your channel name" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                    >
                        Register
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    );
}