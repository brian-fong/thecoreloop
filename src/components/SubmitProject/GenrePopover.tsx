import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
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
          background="#1A1D24"
          backgroundColor="#1A1D24"
          border="1px solid rgba(147, 147, 147, 0.5)"
          borderRadius="5px"
          overflowY="scroll"
        >
          <CheckboxGroup>
            {GENRES.map(category => (
              <Checkbox 
                key={category} 
                value={category}
                color="grey.100"
                _hover={{
                  color: "white",
                }}
                onChange={handleChange}
              >
                {category}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

