import "./BtnAjoutPanier.scss";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

export default function BtnAjoutPanier(props) {

  return (
    <Badge badgeContent={props.qte} color="secondary">
      <button
        onClick={props.onClick} 
        className={'BtnAjoutPanier' + (props.couleur)}
      >
        {props.texte}
      </button>
    </Badge>
  );
}
