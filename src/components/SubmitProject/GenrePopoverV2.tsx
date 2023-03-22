import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react";
import { MAIN_GENRES } from "../../data/genres";
import blur from "../../utils/blur";

export default function GenrePopover({ width, genre, setGenre }: any) {
  function handleClick(event: any): void {
    const genre: string = event.currentTarget.innerHTML;
    setGenre(genre);
    blur();
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          id="project-genres"
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          padding="2px"
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
          {
            !genre
              ? <Text marginLeft="10px">Select Genre</Text>
              : <Text marginLeft="10px">{genre}</Text>
          }
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
          {MAIN_GENRES.map(genre => (
            <Text 
              key={genre}
              padding="0 4px"
              width="100%"
              color="white"
              background="black"
              borderRadius="5px"
              transition="all 200ms ease-in-out"
              cursor="pointer"
              _hover={{
                color: "black",
                background: "white",
              }}
              onClick={(event) => handleClick(event)}
            >
              {genre}
            </Text>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
