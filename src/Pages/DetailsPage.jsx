import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Image, Text, Button, Group, Center, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

function DetailsPage({ VITE_API_URL }) {
  const { t } = useTranslation();
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
    <Stack align="center">
      <h3>{t("Product Details")}</h3>
      <Center my="1.5rem">
        {item && (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={item.picture}
                h="500px"
                w="400px"
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
              color="blue"
              w="400px"
              mt="md"
              radius="md"
              onClick={() => navigate("/")}
            >
              {t("Back")}
            </Button>
          </Card>
        )}
      </Center>
    </Stack>
  );
}

export default DetailsPage;
