# Parrotcloud API

## Overview

The Parrotcloud API is a RESTful API designed to provide fast and efficient access to data for the Parrotcloud website. It provides endpoints for users, games, and posts, and returns data in JSON format.

## Selected Technologies

**1 - Node JS:**

Node.js is a runtime environment that allows you to execute JavaScript code on the server-side. It's known for its speed and scalability, making it an excellent choice for building server applications.

![node-js](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png)

**2 - Express:**

Express is a web application framework for Node.js. It simplifies the process of building robust and scalable web applications, making it a popular choice for creating APIs and web services.

![express](https://snipboard.io/xgoPJy.jpg)

**3 - Firebase:**

Firebase is a comprehensive mobile and web application development platform provided by Google. It offers various services like real-time database, authentication, hosting, and more, simplifying backend development tasks.

![firebase](https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-standard.png?hl=pt-br)

These chosen technologies collectively form the foundation of the Parrotcloud API, enabling efficient and reliable data access and management.

## Endpoints

An API endpoint is a digital location where an API receives requests about a specific resource on its server. In APIs, an endpoint is typically a uniform resource locator (URL) that provides the location of a resource on the server.

## `/api/users`

This endpoint returns a list of users in the system, along with their usernames, email addresses, and other relevant information, including encrypted passwords, to maintain confidentiality in accordance with the principles of information security.

Example request:

```http
GET http://localhost:5000/api/users/
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 443
ETag: W/"1bb-CXA91aSnv2vG4RyHEYw1wB/YKBo"
Date: Sun, 30 Apr 2023 19:20:49 GMT
Connection: close

{
  {
    "email": "joaopedro.gama0675@gmail.com",
    "password": "$2b$10$o1NVOaaIEDGnTnRetZLsk.MsyG29VqGVN7lpCiTgHHWVf/BLK1i5W",
    "username": "Admin"
  },
  {
    "email": "luizgpinheiro0905@gmail.com",
    "password": "$2b$10$69sURYcxVHJfD2UL72hYMuamgiPT0ntNJwENPb9El3FOzomcDHlY2",
    "username": "n4unvoador230"
  },
  {
    "email": "samukagameplays@gmail.com",
    "password": "$2b$10$R9Vb4OyYiiRoWs457jSqquj2Ai3CwgYYLFcJO4i3cs23cAXYRcSwO",
    "username": "SamukaGameplays"
  },
  { 
    [...]  
  }
}
```

## `/api/games`

This endpoint returns a list of games available on the Parrotcloud website, including information about the game title, release date, and platform.

Example request:

```http
GET http://localhost:5000/api/games/
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 5151
ETag: W/"141f-Sc3z230I2mV1NHhewjLzA8v2fzM"
Date: Sun, 30 Apr 2023 19:23:47 GMT
Connection: close

{
  "-NL8KZXWLd71QApF3Ocp": {
    "authors": "Bend Studio",
    "date": "2021-05-18",
    "description": "Viaje e lute pelos Estados Unidos num cenário pós-pandêmico e mortífero. Jogue com Deacon St. John, um andarilho e caçador de recompensas que segue um caminho tortuoso, lutando para sobreviver ao mesmo tempo em que busca uma razão para viver neste jogo de aventura e ação em mundo aberto.",
    "link": "https://store.steampowered.com/app/1259420/Days_Gone/",
    "name": "Days Gone",
    "price": "R$ 199,90",
    "url": "https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FDays%20Gone%2Fdays%20gone%20(1).jpeg?alt=media&token=9142402d-a3cc-44e9-8b43-9272829636fd"
  },
  "-NL8OQccYN37JnYNthbL": {
    "authors": " Dennaton Games",
    "date": "2015-03-10",
    "description": "Hotline Miami 2: Wrong Number é a conclusão brutal da saga Hotline Miami, tendo como pano de fundo uma escalada de violência e vingança pelo sangue derramado no jogo original.",
    "link": "https://store.steampowered.com/app/274170/Hotline_Miami_2_Wrong_Number",
    "name": "Hotline Miami 2: Wrong Number",
    "price": "R$ 46,99",
    "url": "https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/games%2FHotline%20Miami%202%3A%20Wrong%20Number%2F51d989f487f16291037f2a20fea23dab_large.jpg?alt=media&token=b7c84321-f04f-469a-a9b8-dc8ea0852f57"
  },
  { 
    [...]  
  }
}
```

## `/api/community-posts`

This endpoint returns a list of posts made by users on the website, including information about the post content, author, and date posted.

Example request:

```http
GET http://localhost:5000/api/community-posts/
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 219
ETag: W/"db-wDB85fH6l9S1/KPcjFdM8bfIQeE"
Date: Sun, 30 Apr 2023 19:27:14 GMT
Connection: close

{
  " -NLCa0zFJn4pIKevYxsY": {
    "input": "New Game Released!",
    "url": "https://firebasestorage.googleapis.com/v0/b/parrotcloud-5801b.appspot.com/o/posts%2Fmaxresdefault.jpg?alt=media&token=665e4d84-121b-4933-981c-357c18a5937b"
  }
}
```

## Installation and Setup

**1 - Clone or Download the Repository:**

Clone this repository to your local development environment or download the source code.

```bash
git clone https://github.com/Mulekotd/api.parrotcloud.git

cd .\app\
```

**2 - Install Dependencies:**

```bash
npm install
npm start
```

**3 - Set Up Environment Variables:**

Create a .env file in the /app/ directory of the application with the following variable:

```.env
FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebaseio.com
```

**4 - Download Service Account Key:**

Download the service account key JSON file from [your firebase console](https://console.firebase.google.com/project/YOUR_PROJECT_ID/settings/serviceaccounts/adminsdk), rename it to serviceAccountKey.json, and place it inside the /app/ directory.

**5 - Start Creating Your Custom Routes:**

Feel free to create your own custom routes that fit the specific needs of your application. You can extend the functionality of the Parrotcloud API by defining additional routes tailored to your project's requirements. Explore and customize the API to best suit your development goals.

## Demonstration

To provide you with a better understanding of how the Parrotcloud API works, we've prepared a demonstration showcasing its key features and capabilities. Stay tuned for an interactive walkthrough of our API in action.

![api-demonstration](./images/ParrotcloudAPI.gif)

## License

This project is open-source and is provided under the MIT License. You are free to use and modify it as needed. Feel free to contribute to the project or report any issues on the GitHub repository.

![mit](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1920px-MIT_logo.svg.png)

## Feedback and Contributions

We welcome feedback, suggestions, and contributions from the community. If you have ideas for improvements or encounter any issues, please don't hesitate to [open an issue](https://github.com/Mulekotd/api.parrotcloud/issues) on GitHub.