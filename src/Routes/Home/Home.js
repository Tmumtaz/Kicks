import Directory from "../../Components/directory/directory";

const Home = () => {
    const categories =[
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": require("../../Assets/Home/hatsHome.jpg")
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": require("../../Assets/Home/jacketsHome.jpg")
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": require("../../Assets/Home/sneakersHome.jpg")
        },
        {
          "id": 4,
          "title": "Womens",
          "imageUrl": require("../../Assets/Home/womensHome.jpg")
        },
        {
          "id": 5,
          "title": "Mens",
          "imageUrl":require("../../Assets/Home/mensHome.jpg")
        }
      ]
    
      return (
        <div className='categories-container'>
          <Directory categories={categories} />
        </div>
      );
}

export default Home;