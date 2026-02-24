import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

const NewPizza = () => {
  const [pizza, setPizza] = useState<Pizza>({
    nev: "",
    leiras: "",
    ar: 0,
    imageUrl: "",
  });

  const submit = () => {
      apiClient
        .post("/pizzak", pizza)
        .then(() => {
          toast.success("Sikeres hozzáadás!");
        })
        .catch(() => toast.error("Sikertelen hozzáadás!"));
  };

  return (
    <>
      Név:{" "}
      <input
        type="text"
        onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
      />
      Leiras:{" "}
      <input
        type="text"
        onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
      />
      Ár:{" "}
      <input
        type="text"
        onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
      />
      Kép:{" "}
      <input
        type="text"
        onChange={(e) => setPizza({ ...pizza, imageUrl: e.target.value })}
      />
      <Button
        onClick={() => {
          submit();
        }}
      >Hozzáadás</Button>
    </>
  );
};

export default NewPizza;
