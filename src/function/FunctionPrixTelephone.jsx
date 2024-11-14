import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

function valuetext(value) {
  //intervalle de material ui
  return `${value} £`;
}
// Slider personnalisé avec des couleurs spécifiques
const CustomSlider = styled(Slider)({
  color: "#1e90ff", // Couleur des poignées et de la zone active
  "& .MuiSlider-thumb": {
    backgroundColor: "#1e90ff", // Couleur des poignées
    border: "2px solid #fff", // Bordure blanche autour des poignées
  },
  "& .MuiSlider-track": {
    color: "#1e90ff", // Couleur de la zone entre les deux poignées
  },
  "& .MuiSlider-rail": {
    color: "#B0BEC5", // Couleur de la piste non remplie
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#1e90ff", // Couleur de fond de l'étiquette de valeur
    color: "#ffffff", // Couleur blanche pour le texte de l'étiquette de valeur
  },
});

const FunctionPrixTelephone = ({ intervalle, min, max }) => {
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    intervalle(newValue); // Passer la nouvelle valeur d'intervalle via la prop
  };

  return (
    <Box sx={{ width: "100%" }}>
      <CustomSlider
        getAriaLabel={() => "Intervalle de prix"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={min}
        max={max}
      />
    </Box>
  );
};

export default FunctionPrixTelephone;
