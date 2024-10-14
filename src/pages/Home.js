import React from "react";
import Card from "./card.js"; 
import "./card.css";

function Home() {
  return (
    <div className="Home">
      <img
        id="img"
        src="./images/rest.png"
        alt="Restaurant Banner"
       
      />
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'lightgray',
          borderRadius: '5px',
          height: '100px',
          padding: '20px',
          opacity: '0.9',
          color: 'white',
        }}
      >
        Welcome To Foodies
      </h1>

      <div className="card-rap" style={{background: '#323332'}}>
        <Card
          imageSrc="./images/karibu.png"
          link="https://www.tripadvisor.co.za/Restaurant_Review-g312659-d1436881-Reviews-Karibu_Restaurant-Cape_Town_Central_Western_Cape.html"
          title="Karibu Restaurant"
          description="Join us for an amazing dining experience!"
        />
        <Card
          imageSrc="./images/life-grand-cafe.png"
          link="https://www.tripadvisor.co.za/Restaurant_Review-g312659-d1436881-Reviews-Karibu_Restaurant-Cape_Town_Central_Western_Cape.html"
          title="Karibu Restaurant"
          description="Join us for an amazing dining experience!"
        />
        <Card
          imageSrc="./images/west-coast-oysters.png"
          link="https://www.tripadvisor.co.za/Restaurant_Review-g312659-d1436881-Reviews-Karibu_Restaurant-Cape_Town_Central_Western_Cape.html"
          title="Karibu Restaurant"
          description="Join us for an amazing dining experience!"
        />
        <Card
          imageSrc="./images/bistro..png"
          link="https://www.tripadvisor.co.za/Restaurant_Review-g312660-d1887285-Reviews-Bistro_1682-Constantia_Western_Cape.html"
          title="Bistro 1862"
          description="Join us for an amazing dining experience!"
        />
        <Card
          imageSrc="./images/hotel.png"
          link="https://www.suninternational.com/"
          title="Sun International"
          description="Join us for an amazing dining experience!"
        />
        <Card
          imageSrc="./images/mozambik.png"
          link="https://www.tripadvisor.co.za/Restaurant_Review-g312659-d17819857-Reviews-Mozambik_V_A_Waterfront-Cape_Town_Central_Western_Cape.html"
          title="Mozambik"
          description="Join us for an amazing dining experience!"
        />
      </div>
      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#777', background:'black', height: '10vh', paddingTop:'20px' }}>
          <p>&copy; 2024 FOODIES. All rights reserved.</p>
        </footer>
 
    </div>
  );
}

export default Home;
