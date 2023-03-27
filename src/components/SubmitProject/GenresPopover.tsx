// Components
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react";

// Helpful Constants and Functions
import { GENRES } from "../../data/genres";
import blur from "../../utils/blur";

export default function GenresPopover({ 
  formik,
  genres,
  genres_selected, setGenresSelected,
}: any) {

  async function handleChange(event: any) {
    const genre: string = event.target.value;
    const checked: boolean = event.target.checked;

    // Update (selected) genres state variable
    if (checked) {
      // Add new genre
      setGenresSelected((genres: string[]) => [...genres, genre]);

      // Close GenrePopover once 3 genres have been selected
      if (genres_selected.length == 2) blur();
    } else {
      // Remove selected genre
      setGenresSelected((genres: string[]) => genres.filter(
        _genre => _genre != genre
      ));
    }

    formik.handleChange(event);
  }

  function renderPopoverBtn() {
    if (genres.length == 0 && genres_selected.length == 0) {
      // Case: Genres state variable is empty and user has not yet selected
      // any genres
      return (
        // Display placeholder
        <Text marginLeft="10px">Select 1-3 Genres</Text>
      );
    } else if (genres_selected.length > 0) {
      return (
        // Display selected genres
        <Flex alignItems="center" gap="10px" padding="4px 8px">
          {genres_selected.map((genre: string) => (
            <Text
              padding="2px 4px"
              color="black"
              background="gray.400"
              borderRadius="5px"
            >
              {genre}
            </Text>
          ))}
        </Flex>
      );
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          padding="2px"
          width="100%"
          color="gray.400"
          fontSize="16px"
          fontStyle="italic"
          backgroundColor="rgba(0, 0, 0, 0.2)"
          border="2px solid rgba(255, 255, 255, 0.7)"
          borderRadius="5px"
          transition="background 200ms ease-in-out"
          _hover={{ background: "rgba(255, 255, 255, 0.1)" }}
          _active={{}}
        >
          {renderPopoverBtn()}
        </Button>
      </PopoverTrigger>
      <PopoverContent width="536px">
        <PopoverBody
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gap="5px"
          height="100%"
          maxHeight="200px"
          background="#282a36"
          backgroundColor="#282a36"
          border="1px solid rgba(147, 147, 147, 0.5)"
          borderRadius="5px"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: "18px",
              background: "transparent",
            },
            '&::-webkit-scrollbar-track': {
              width: "18px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "20px",
              border: "6px solid rgba(0, 0, 0, 0)",
              backgroundClip: "padding-box",
            },
            "&::-webkit-scrollbar-track-piece:start": {
              marginTop: "2px",
            },
            "&::-webkit-scrollbar-track-piece:end": {
              marginBottom: "2px",
            },
          }}
        >
          <CheckboxGroup  value={formik.values.genres_selected}>
            {GENRES.map((genre: string) => (
              <Checkbox 
                id="genres_selected"
                key={genre}
                value={genre}
                color="gray.400"
                fontSize="16px"
                transition="color 200ms ease-in-out"
                _hover={{
                  color: "white",
                }}
                onChange={handleChange}
                isDisabled={
                  genres_selected.length == 3
                    && !genres_selected.includes(genre)
                }
              >
                {genre}
              </Checkbox>
            ))}
        </CheckboxGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

