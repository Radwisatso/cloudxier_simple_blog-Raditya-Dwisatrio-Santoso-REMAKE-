## GET Fishes

```http
GET /fishes
```

_Response 200_

```
[
    {
        "id": 2,
        "name": "Salmon",
        "description": "They migrate during the fall",
        "habitat": "North Atlantic",
        "image": "https://bit.ly/3qEBVkF",
        "population": 16000000,
        "createdAt": "2022-01-01T13:41:47.403Z",
        "updatedAt": "2022-01-01T13:41:47.403Z"
    }
]
```

## Add Fish

```http
POST /fishes
```

_Response 201_

```
{
    "message": "Fish has been added",
    "fish": {
        "id": 24,
        "name": "Ikan Laut",
        "description": "Test",
        "habitat": "Test",
        "image": "https://ik.imagekit.io/4n54l5tm8yf/Test_Image_DQYOjIM8J.png",
        "population": 10,
        "updatedAt": "2022-01-01T17:21:34.761Z",
        "createdAt": "2022-01-01T17:21:34.761Z"
    }
}
```

## Update Fish

```http
PUT /fishes/:id
```

_Response 200_

```
{
    "id": 3,
    "name": "Telah diedit",
    "description": "Telah diedit",
    "habitat": "Telah diedit",
    "image": "https://ik.imagekit.io/4n54l5tm8yf/Test_Image_u7DaJe6nZ.png",
    "population": 50,
    "createdAt": "2022-01-01T14:27:21.326Z",
    "updatedAt": "2022-01-01T18:00:38.004Z"
}
```

## Delete Fish

```http
DELETE /fishes/:id
```

_Response 200_

```
{
    "message": "Fish with id 4 has been removed!"
}
```