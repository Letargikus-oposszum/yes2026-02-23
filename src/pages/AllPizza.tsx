import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Carousel, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AllPizza = () => {
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzak(res.data))
      .catch(() => toast.error("Sikertelen betöltés!"));
  }, []);

  const createItem = (pizza: Pizza) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img src={`${baseURL}/kepek/${pizza.imageUrl}`} />
        <Card.Title>{pizza.nev}</Card.Title>
        <Card.Body>
          {pizza.leiras}
          <br />
          {pizza.ar} FT
        </Card.Body>
      </Card>
    );
  };

  return <><Row>{pizzak.map((pizza) => createItem(pizza))}</Row> <Button onClick={()=>{navigate("/new-pizza")}}>Új hozzáadása</Button></>;
};

export default AllPizza;
