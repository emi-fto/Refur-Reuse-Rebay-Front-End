import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Button, Group, Box } from "@mantine/core";
import "../Styles/QuotePage.css";

function QuotePage() {
  const navigate = useNavigate();

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
      title: `The refurbishment of your item will cost ${randomAmount} euros`,
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Box className="quoteBox" maw={340} mx="auto">
        <h3>How much would it cost to repair your item? Ask a quote!</h3>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Item Name"
            value={name}
            onChange={handleName}
          />
          <TextInput
            mt="md"
            label="Description"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          />
          <TextInput
            mt="md"
            label="Image"
            placeholder="Picture URL"
            value={picture}
            onChange={handlePicture}
          />
          <TextInput
            mt="md"
            label="Category"
            placeholder="Category"
            value={category}
            onChange={handleCategory}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" mt="sm">
              Ask for quote!
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
}

export default QuotePage;
