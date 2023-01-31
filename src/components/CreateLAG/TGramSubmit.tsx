import { 
  FetchBtn,
  CancelBtn,
} from "../Misc/Buttons";
import { Flex } from "@chakra-ui/react";

export default function TGramSubmit({ 
  fetching, 
  start_fetching, 
  end_fetching 
}: any) {
  return (
    <Flex
      flexDir="row"
      gap="30px"
      justify="center"
      align="center"
      width="100%"
    >
      {/* Show Fetch Button or Cancel Button */}
      {
        fetching 
        ? <CancelBtn end_fetching={end_fetching} />
        : <FetchBtn start_fetching={start_fetching} />
      }
    </Flex>
  );
}

