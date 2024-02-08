import React from "react";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import {
  Button,
  Card,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function CartPage({ cartItems, setCartItems, VITE_API_URL }) {
  const navigate = useNavigate();
  const { width } = useViewportSize();
  const removeItem = (itemId) => {
    const filteredItems = cartItems.filter((item) => {
      return item.id !== itemId;
    });

    setCartItems(filteredItems);
  };

  const deleteItemFromDatabase = (itemId) => {
    return axios.delete(`${VITE_API_URL}/${itemId}`);
  };

  const deleteAll = async () => {
    if (cartItems.length !== 0) {
      try {
        await Promise.all(
          cartItems.map((item) => deleteItemFromDatabase(item.id))
        );
        setCartItems([]);
        notifications.show({
          title: "Purchase completed! You own us money!",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Error deleting items:", error);
        notifications.show({
          title: "Error completing the purchase!",
        });
      }
    } else {
      notifications.show({
        title: "Cart is empty!",
      });
    }
  };

  const sumCart = cartItems.reduce((sum, currentItem) => {
    return sum + parseInt(currentItem.price);
  }, 0);

  return (
    <Stack align="center" mb="3rem" mt="1rem">
      <h1>Your cart</h1>
      <SimpleGrid cols={width > 1200 ? 3 : width > 800 ? 2 : 1}>
        {cartItems.map((item) => (
          <div key={item.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={item.picture}
                  height="400vw"
                  width="33vw"
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
                fullWidth
                mt="md"
                radius="md"
                onClick={() => removeItem(item.id)}
              >
                Remove item
              </Button>
            </Card>
          </div>
        ))}
      </SimpleGrid>
      <h2>Total €{sumCart}</h2>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        w="60vw"
        onClick={() => deleteAll()}
      >
        Buy!
      </Button>
    </Stack>
  );
}

export default CartPage;
