import { 
  FetchBtn,
  CancelBtn,
} from "../Misc/Buttons";
import { Flex } from "@chakra-ui/react";

export default function FetchMetadata({ 
  fetching, 
  set_fetching
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
        ? <CancelBtn set_fetching={set_fetching} />
        : <FetchBtn set_fetching={set_fetching}/>
      }
    </Flex>
  );
}

