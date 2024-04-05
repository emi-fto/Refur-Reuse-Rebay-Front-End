import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { notifications } from "@mantine/notifications";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";

function AddItemPage({ VITE_API_URL }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handlePicture = (event) => setPicture(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);
  const handlePrice = (event) => setPrice(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        `${VITE_API_URL}`,
        {
          id: uuidv4(),
          name,
          description,
          picture,
          category,
          price: parseInt(price),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      notifications.show({
        title: t(`Item added correctly!`),
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box maw={340} mx="auto" my="1.5rem">
        <h3>{t("Add your item here")}</h3>
        <form onSubmit={handleSubmit}>
          <TextInput
            label={t("Name")}
            placeholder={t("Item Name")}
            value={name}
            onChange={handleName}
          />
          <TextInput
            mt="md"
            label={t("Description")}
            placeholder={t("Description")}
            value={description}
            onChange={handleDescription}
          />
          <TextInput
            mt="md"
            label={t("Image")}
            placeholder={t("Picture URL")}
            value={picture}
            onChange={handlePicture}
          />
          <TextInput
            mt="md"
            label={t("Category")}
            placeholder={t("Category")}
            value={category}
            onChange={handleCategory}
          />
          <TextInput
            label={t("Price")}
            placeholder={t("Price in Euro")}
            value={price}
            onChange={handlePrice}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" mt="sm">
              {t("Add Item")}
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
}

export default AddItemPage;
