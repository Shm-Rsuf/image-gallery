/* eslint-disable react/prop-types */
const AfterSelectHeader = ({
  handleUnselect,
  selectedImages,
  handleDelete,
}) => {
  return (
    <div className="flex justify-between items-center p-5 ">
      <div className="flex justify-center items-center">
        <input
          className="w-4 h-4 cursor-pointer"
          type="checkbox"
          checked
          readOnly
          onClick={handleUnselect}
        />
        <p className="pl-2 text-xl font-bold">
          {selectedImages.length} File{selectedImages.length > 1 ? "s" : ""}{" "}
          Selected
        </p>
      </div>
      <div className="pr-23">
        <button onClick={handleDelete} className="text-[red]">
          Delete File
        </button>
      </div>
    </div>
  );
};

export default AfterSelectHeader;
