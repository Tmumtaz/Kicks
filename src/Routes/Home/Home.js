import Directory from "../../Components/directory/directory";
import { Outlet } from 'react-router-dom';



const Home = () => {
  
    const categories =[
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": require("../../Assets/Home/hatsHome.jpg"),
          "route": 'shop/hats',
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": require("../../Assets/Home/jacketsHome.jpg"),
          "route": 'shop/jackets',
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": require("../../Assets/Home/sneakersHome.jpg"),
          "route": 'shop/sneakers',
        },
        {
          "id": 4,
          "title": "Womens",
          "imageUrl": require("../../Assets/Home/womensHome.jpg"),
          "route": 'shop/womens',
        },
        {
          "id": 5,
          "title": "Mens",
          "imageUrl":require("../../Assets/Home/mensHome.jpg"),
          "route": 'shop/mens',
        }
      ]

        
      return (
        <div className='categories-container'>
          <Directory categories={categories} />
          <Outlet />
        </div>
      );
}

export default Home;