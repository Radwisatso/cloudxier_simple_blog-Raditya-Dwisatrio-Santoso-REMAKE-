import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Upload, notification, Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";

const {useForm} = Form

const AddOrUpdate = () => {

    const [form] = useForm()
    const [imageData, setImageData] = useState([])
    const [imageEdit, setImageEdit] = useState([])
    const [loading, setLoading] = useState(false)
    const [dataEdit, setDataEdit] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

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
        if(!dataEdit.image && !id) {
            data.append('image', image.file) //BUG
        }
        data.append("population", population)

        const urlAdd = "https://cloudxier-blog.herokuapp.com/fishes"
        const urlEdit = `https://cloudxier-blog.herokuapp.com/fishes/${id}`
        const headers = {
            "Content-type": "multipart/form-data"
        }

        axios({
            method: id ? "PUT" : "POST",
            url: id ? urlEdit : urlAdd,
            data, headers
        })
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

    // Edit Section

    useEffect(() => {
        const getDataEdit = () => {
            setLoading(true)
            axios.get(`https://cloudxier-blog.herokuapp.com/fishes/${id}`)
            .then((res) => {
                console.log("ini edit", res.data)
                form.setFieldsValue({
                    name: res.data.name,
                    description: res.data.description,
                    habitat: res.data.habitat,
                    population: res.data.population
                })
                setDataEdit(res.data)
                setImageEdit(res.data.image)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally((_) => {
                setLoading(false)
            })

        }
        getDataEdit()
        //eslint-disable-next-line
    }, [id])

    return (
        <div>
            <h2>
                {id ? "Update Page" : "Add Page"}
            </h2>
            <Button type="primary" style={{margin: "20px"}}>
                <Link to={"/"}>
                    Go Back to Home
                </Link>
            </Button>
            <Form
            name="add"
            form={form}
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
                {
                    id && imageData.length === 0 && <Image width={200} src={imageEdit} /> 
                }
                <br></br>
                <Form.Item label="Image" name="image">
                    <Upload {...props} >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                {JSON.stringify(imageData)}
                <Button htmlType="submit" loading={loading} style={{marginBottom: "20px"}}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddOrUpdate