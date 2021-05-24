import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import {Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import LoginForm from './LoginForm';
import Home from './Home';

export default function App(){
  const[login, setLogin] = useState(false);//set up login
  const[data, setData] = useState({}); //set up fb data
  const [picture, setPicture] = useState('');//set up fb profile image
  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if(response.accessToken){
      setLogin(true);
    }else{
      setLogin(false);
    }
  }

  return (
      <div className="container">
        <Card style={{width: '800px'}} className="mx-auto mt-5">
          <Card.Header>
            <h1>My React App</h1> 
          </Card.Header>
          <Card.Body>
            <Card.Text>
            {!login && 
            <React.Fragment>
              <h3>Please login using one of the following:</h3>
                {/* login Form */}
                <LoginForm />
                {/* FB login button */}
                <FacebookLogin 
                  appId="2247354802061215" //This is provided in Facebook Developer
                  autoLoad={false}
                  fields="name, email, picture"
                  scope="public_profile, user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook"
                />
              </React.Fragment>
            }
            {login && 
              <Home fbpic={picture} fbdata={data} />
            }
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
  )
}
