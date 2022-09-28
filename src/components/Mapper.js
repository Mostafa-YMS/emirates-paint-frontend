import axios from "axios";
import { useCallback, useState } from "react";
import ImageMapper from "react-img-mapper";

const Mapper = ({ masks, src, color, uploadedImage }) => {
  const [naturalWidth, setNaturalWidth] = useState();

  const [newImageUrl, setNewImageUrl] = useState();

  const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const uploadedImageClicked = async (e) => {
    if (color) {
      const localFile = await fetch(newImageUrl || uploadedImage);
      const fileBlob = await localFile.blob();

      const formData = new FormData();

      const rgb = hexToRgb(color?.color_code);

      const imgCord = e.target.getBoundingClientRect();
      const x = e.pageX - imgCord.x;
      const y =
        e.pageY - (e.target.offsetTop + e.target.offsetParent.offsetTop);

      const newLocalFile = await fetch(newImageUrl || uploadedImage);
      const newFileBlob = await newLocalFile.blob();

      formData.append("uploaded", true);
      formData.append("new_image", newFileBlob);
      formData.append("org_image", fileBlob);
      formData.append("x", parseInt(x));
      formData.append("y", parseInt(y));
      formData.append("r", parseInt(rgb?.r));
      formData.append("g", parseInt(rgb?.g));
      formData.append("b", parseInt(rgb?.b));
      formData.append("width", parseInt(imgCord.width));
      formData.append("height", parseInt(imgCord.height));

      const { data } = await axios.post(
        `http://localhost:5000/predict`,
        formData,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const fImage = URL.createObjectURL(data);
      setNewImageUrl(fImage);
    }
  };

  const localImageClicked = useCallback(
    async (m, i, e) => {
      const localFile = await fetch(newImageUrl || src);
      const fileBlob = await localFile.blob();

      const formData = new FormData();

      const rgb = hexToRgb(color?.color_code);
      const imgCord = e.target.getBoundingClientRect();

      formData.append("uploaded", false);
      formData.append("id", m?.id);
      formData.append("org_image", fileBlob);
      formData.append("r", parseInt(rgb?.r));
      formData.append("g", parseInt(rgb?.g));
      formData.append("b", parseInt(rgb?.b));
      formData.append("x", 0);
      formData.append("y", 0);
      formData.append("width", parseInt(imgCord.width));
      formData.append("height", parseInt(imgCord.height));

      const { data } = await axios.post(
        `http://localhost:5000/predict`,
        formData,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const fImage = URL.createObjectURL(data);
      setNewImageUrl(fImage);
    },
    [color?.color_code, newImageUrl, src]
  );

  return (
    <>
      {uploadedImage ? (
        <div onClick={uploadedImageClicked} className="uploaded_photo">
          <img alt="Logo" src={newImageUrl || uploadedImage} />
        </div>
      ) : (
        <ImageMapper
          key={color}
          src={newImageUrl || src}
          map={{
            name: "my-map",
            areas: masks?.map((e, i) => ({
              id: e?.id,
              title: e?.id,
              shape: "poly",
              name: e?.id,
              fillColor: "#fefe00",
              strokeColor: "#ee000000",
              coords: e?.coords && JSON.parse(e?.coords),
              polygon: e?.polygon && JSON.parse(e?.polygon),
            })),
          }}
          active={true}
          width={800}
          imgWidth={naturalWidth}
          onClick={localImageClicked}
          onLoad={(e) => setNaturalWidth(e?.naturalWidth)}
          // height={750}
          responsive={true}
          parentWidth={800}
        />
      )}
    </>
  );
};

export default Mapper;
