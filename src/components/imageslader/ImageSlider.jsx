import "./styles.css";

const imagesList = [
  {
    id: 1,
    name: "https://res.cloudinary.com/dud55b6nb/image/upload/v1666544548/one_lzlzvc.jpg",
  },
  {
    id: 2,
    name: "https://res.cloudinary.com/dud55b6nb/image/upload/v1666545267/two_clbyrl.jpg",
  },
  {
    id: 3,
    name: "https://res.cloudinary.com/dud55b6nb/image/upload/v1666545300/three_klvtwc.jpg",
  },
  {
    id: 4,
    name: "https://res.cloudinary.com/dud55b6nb/image/upload/v1666545326/four_voar5n.jpg",
  },
  {
    id: 5,
    name: "https://res.cloudinary.com/dud55b6nb/image/upload/v1666545382/six_tf3y7j.jpg",
  },
  {
    id: 6,
    name: "https://res.cloudinary.com/dud55b6nb/image/upload/v1666545405/seven_cpjvhp.jpg",
  },
];
const ImageSlider = () => {
  return (
    <div className="image-list">
      {imagesList.map((image) => {
        return (
          <div className="image-list-item" key={image.id}>
            <a href="/">
              <img src={image.name} alt="socks" />
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default ImageSlider;
