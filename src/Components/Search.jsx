import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import "../Styles/Search.css";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <>
      <TextInput
        className="searchInput"
        leftSection={<IconSearch size="1rem" stroke={1.5} />}
        variant="filled"
        size="md"
        radius="xl"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </>
  );
}

export default Search;
