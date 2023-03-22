import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react";
import {
  AddIcon,
} from "@chakra-ui/icons";

export const GENRES: string[] = [
  "Action",
  "Adventure",
  "Battle-Royale",
  "Casino",
  "FPS",
  "Puzzle",
  "MMORPG",
  "MOBA",
  "On-Chain",
  "Racing",
  "RPG",
  "Sandbox",
  "Shooter",
  "Simulation",
  "Strategy",
  "Tower Defense",
];

export default function GenrePopover({ width, genres, setGenres }: any) {

  function handleMouseOver(event: any): void {
    const target: HTMLElement = event.currentTarget.lastChild.firstChild;
    target.style.color = "black";
    target.style.background = "white";
  }

  function handleMouseLeave(event: any): void {
    const target: HTMLElement = event.currentTarget.lastChild.firstChild;
    target.style.color = "white";
    target.style.background = "transparent";
  }

  function handleChange(event: any): void {
    const new_genre: string = event.currentTarget.value;
    const checked: boolean = event.currentTarget.checked;
    if (checked) {
      setGenres((genres: any) => [...genres, new_genre]);
      console.log("Added genre: ", event.currentTarget.value);
    } else {
      const new_genres: string[] = genres.filter(
        (genre: any) => genre != new_genre
      );
      setGenres(new_genres);
      console.log("Removed genre: ", event.currentTarget.value);
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          id="project-genres"
          width="100%"
          color="black"
          backgroundColor="white"
          border="1px solid rgba(147, 147, 147, 0.5)"
          borderRadius="5px"
          transition="filter 200ms ease-in-out"
          _hover={{
            filter: "brightness(0.8)",
          }}
          _active={{}}
        >
          <AddIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent width={`${width}px`}>
        <PopoverBody
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gridRowGap="5px"
          height="100%"
          maxHeight="200px"
          background="black"
          backgroundColor="black"
          border="1px solid rgba(147, 147, 147, 0.5)"
          borderRadius="5px"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: "18px",
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
          <CheckboxGroup value={genres}>
            {GENRES.map(genre => (
              <Checkbox 
                key={genre}
                value={genre}
                color="grey.100"
                borderRadius="5px"
                onChange={handleChange}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <Text
                  padding="0 4px"
                  width="100%"
                  background="inherit"
                  borderRadius="5px"
                  transition="all 200ms ease-in-out"
                >
                  {genre}
                </Text>
              </Checkbox>
            ))}
          </CheckboxGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

