import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Image, Text, Button, Group, Center } from "@mantine/core";
import "../Styles/DetailsPage.css";

function DetailsPage({ VITE_API_URL }) {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  const navigate = useNavigate();

  const getSingleItem = () => {
    axios
      .get(`${VITE_API_URL}/${itemId}`)
      .then((response) => setItem(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getSingleItem();
  }, [itemId]);

  return (
    <Center className="detailsCenterA">
      <h3>Product Details</h3>
      <Center className="detailsCenterB">
        {item && (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                className="detailsImg"
                src={item.picture}
                alt="Item picture"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{item.name}</Text>
            </Group>
            <Text size="sm" c="dimmed">
              {item.description}
            </Text>
            <Text size="sm" c="dimmed">
              {item.price}€
            </Text>

            <Button
              className="detailsButton"
              color="blue"
              mt="md"
              radius="md"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Card>
        )}
      </Center>
    </Center>
  );
}

export default DetailsPage;
