/* eslint-disable react/prop-types */
const PreviewImage = ({ draggedImage }) => {
  return (
    <div className="absolute w-full z-50 h-full bg-black top-0 duration-300 left-0">
      <img
        className="w-full h-full object-cover"
        src={draggedImage.image}
        alt=""
      />
    </div>
  );
};

export default PreviewImage;
