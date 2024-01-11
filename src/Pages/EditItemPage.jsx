import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import "../Styles/EditItemPage.css";

function EditItemPage({ VITE_API_URL }) {
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
    if (window.confirm("Do you have the permission to update this item?")) {
      const requestBody = { name, description, picture, category, price };
      axios.put(`${VITE_API_URL}/${itemId}`, requestBody).then(() => {
        notifications.show({
          title: `Item updated correctly!`,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
    } else {
      notifications.show({
        title: `Sorry it seems you can't update this item!`,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <>
      <Box className="editBox" maw={340} mx="auto">
        <h3>Edit Item</h3>
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
          <TextInput
            label="Price"
            placeholder="Price in Euro"
            value={price}
            onChange={handlePrice}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" mt="sm">
              Update Item
            </Button>
          </Group>
        </form>
      </Box>
    </>
  );
}

export default EditItemPage;
