import React, {useState} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Upload, notification, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";

const AddOrUpdate = () => {

    const [imageData, setImageData] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const openNotificationWithIcon = (type, message) => {
        notification[type]({
          message: type,
          description:
            message,
        });
      };
    
    const onFinish = (values) => {
        console.log("INI HASILNYA", values);
        setLoading(true)
        const {name, description, habitat, image, population} = values
        const data = new FormData()
        data.append("name", name)
        data.append("description", description)
        data.append("habitat", habitat)
        data.append("image", image.file)
        data.append("population", population)

        const headers = {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }

        axios.post("https://cloudxier-blog.herokuapp.com/fishes", data, headers)
        .then((res) => {
            console.log("Response 201", res)
            openNotificationWithIcon("success", res.data.message)
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
            openNotificationWithIcon("error", "Error")
        })
        .finally((_) => {
            setLoading(false)
        })
    };

    const props = {
        onRemove: file => {
            setImageData([])
        },
        beforeUpload: file => {
            setImageData([file])
            return false
        },
        imageData
    }

    return (
        <div>
            <h2>
                Add Page
            </h2>
            <Button type="primary" style={{margin: "20px"}}>
                <Link to={"/"}>
                    Go Back to Home
                </Link>
            </Button>
            <Form
            name="add"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            style={{margin: "0 20px 0 20px" }}
            >
                <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input the fish name"}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: true, message: "Please input the fish description"}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Habitat" name="habitat" rules={[{ required: true, message: "Please input the fish habitat"}]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Population" name="population" rules={[{ required: true, message: "Please input the fish population"}]}>
                    <Input type={"number"}/>
                </Form.Item>
                <Form.Item label="Image" name="image">
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <Button htmlType="submit" loading={loading} style={{marginBottom: "20px"}}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddOrUpdate