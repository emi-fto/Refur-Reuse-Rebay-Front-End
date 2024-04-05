import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useTranslation } from "react-i18next";

function EditItemPage({ VITE_API_URL }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { itemId } = useParams();

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

  useEffect(() => {
    axios
      .get(`${VITE_API_URL}/${itemId}`)
      .then((response) => {
        const oneItem = response.data;
        setName(oneItem.name);
        setDescription(oneItem.description);
        setPicture(oneItem.picture);
        setCategory(oneItem.category);
        setPrice(oneItem.price);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.confirm(t("Do you have the permission to update this item?"))) {
      const requestBody = { name, description, picture, category, price };
      axios.put(`${VITE_API_URL}/${itemId}`, requestBody).then(() => {
        notifications.show({
          title: t(`Item updated correctly!`),
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
    } else {
      notifications.show({
        title: t(`Sorry it seems you can't update this item!`),
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <>
      <Box maw={340} mx="auto" my="1.5rem">
        <h3>{t("Edit Item")}</h3>
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
              {t("Update Item")}
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
}

export default EditItemPage;
