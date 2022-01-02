import React, {useEffect, useState} from "react"
import { Button, Card } from 'antd'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const { Meta } = Card
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://cloudxier-blog.herokuapp.com/fishes`, data)
        .then((res => {
            console.log("response", res.data)
            setData(res.data)
        }))
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h2 style={{fontSize: "150%"}}>
                Welcome to the Fish Blog
            </h2>
            <Button 
            block 
            style={{margin:"20px", width: "50%", fontSize: "13px"}}
            >
                <Link to={"/add"}>Click here to add more fish!</Link>
            </Button>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {
                    data.map((fish) => (
                        <Card
                        key={fish.id}
                        onClick={() => navigate(`/${fish.id}`)}
                        style={{display: "flex", flexWrap: "wrap"}}
                        hoverable
                        style={{ width: 240, margin: 20 }}
                        cover={<img alt="example" src={fish.image} />}
                        >
                            <Meta title={fish.name} description={fish.description} />
                            
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Home