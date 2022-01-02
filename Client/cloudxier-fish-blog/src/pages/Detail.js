import React, {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import { Button, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from "axios";

const DetailPage = () => {
    const { Meta } = Card;
    const {id} = useParams()
    const [data, setData] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://cloudxier-blog.herokuapp.com/fishes/${id}`)
        .then((res) => {
            console.log("Fish Found", res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div style={{padding: "10vw", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h2 style={{ marginBottom: 30 }}>
                Fish Page
            </h2>
            <Button onClick={() => navigate("/")}>
                Go Back to Home
            </Button>
            <Card
                style={{ 
                maxWidth: 600,
                margin: "10px" }}
                cover={
                <img
                    alt="example"
                    src={data.image}
                />
                }
                actions={[
                    <Button onClick={() => navigate(`/edit/${data.id}`)}>
                        <EditOutlined /> Update here
                    </Button>,
                    <Button danger>
                        <DeleteOutlined /> Delete here
                    </Button>
                ]}
            >
                <Meta
                title={data.name}
                description={data.description}
                />
                <p style={{marginTop: "10px"}}>
                    Habitat: {data.habitat}
                </p>
                <p style={{marginTop: "10px"}}>
                    Population: {data.population}
                </p>
            </Card>
        </div>
    )
}

export default DetailPage