import React, { useEffect, useRef } from "react";
import { UserContext } from "../../../context/UserContext";
import { useContext, useState } from "react";
import { db } from "../../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../../html/footer/footer/Footer";

export default function Research() {
  const recherche = useRef();
  const users = collection(db, "users"); //on recupere la collection des users
  const resultArray = []; //la liste qui va contenir tous les emails
  const [resList, setResList] = useState();

  const readResult = async () => {
    const q = query(
      users,
      where("classe", "==", recherche.current.value) //on recupère tous les resultats dont name = à la valeur de l'input
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      resultArray.push([doc.data().mail, doc.data().classe]); //on ajoute tous les mails dans la liste
    });
    //console.log(resultArray)

    setResList(
      resultArray.map((mail) => (
        <li className="text-light">
          mail: {mail[0]}, classe: {mail[1]}
        </li>
      ))
    );
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <NavBar />
        <div className="container" style={{ textAlign: "center" }}>
          <input type="text" ref={recherche}></input>
          <button onClick={readResult}>Rechercher</button>
          <ul>{resList}</ul>
        </div>
        <Footer />
      </div>
    </>
  );
}
