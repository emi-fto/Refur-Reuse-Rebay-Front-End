import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useTranslation } from "react-i18next";

function QuotePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [category, setCategory] = useState("");

  const handleName = (event) => setName(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handlePicture = (event) => setPicture(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomAmount = Math.floor(Math.random() * 150);
    notifications.show({
      title:
        t("The refurbishment of your item will cost euros: ") + randomAmount,
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Box maw={340} mx="auto" my="1.5rem">
        <h3>{t("How much would it cost to repair your item? Ask a quote!")}</h3>
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

          <Group justify="center" mt="xl">
            <Button type="submit" mt="sm">
              {t("Ask a quote!")}
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
}

export default QuotePage;
