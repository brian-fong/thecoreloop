// Components
import {
  Box,
  Flex,
  FormLabel,
  Heading,
  Radio,
  RadioGroup,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon as InfoIcon } from "@chakra-ui/icons";
import { MdSubdirectoryArrowRight as IndentArrowIcon } from "react-icons/md";

// Hooks
import { LegacyRef, useEffect, useRef } from "react";

export default function CommunityTeamForm({
  fundraising, setFundraising,
  submittedAs, setSubmittedAs,
}: any) {

  // Refs
  const switch_ref = useRef<HTMLDivElement>();

  function switchSides() {
    if (submittedAs == "community") setSubmittedAs("team");
    if (submittedAs == "team") setSubmittedAs("community");
  }

  function handleClick_Fundraising(event: any) {
    // Update fundraising state variable
    const radio_group = event.currentTarget;
    for (const { firstChild: choice } of radio_group.children) {
      if (choice.checked) setFundraising(choice.value);
    }
  }

  useEffect(() => {
    // Update fundraising status every time submittedAs changes
    if (submittedAs == "community") {
      // If user is party of community, then reset fundraising to undefined
      setFundraising("");

      // Shift (translate) switch towards Community side
      switch_ref.current!.style.transform = "translateX(-10px)";
    } else if (submittedAs == "team") {
      // If fundraising is undefined, then default to "undisclosed"
      if (!fundraising) setFundraising("undisclosed");

      // Shift (translate) switch towards Team side
      switch_ref.current!.style.transform = "translateX(10px)";
    }
  }, [submittedAs]);

  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      padding="10px"
      width="100%"
    >
      {/* Part-of-the-team? */}
      <Heading
        marginBottom="10px"
        color="white"
        fontSize="18px"
        fontWeight="700"
      >
        Are You Part of the <Text display="inline" color="yellow.400" fontWeight="700">Community</Text> or <Text display="inline" color="blue.400" fontWeight="700">Team</Text> Behind This Project?
      </Heading>
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        gap="10px"
        width="100%"
      >
        <FormLabel 
          htmlFor="submittedByTeam" 
          margin="0"
          fontSize="16px"
        >
          I am submitting this project as part of the
        </FormLabel>
        <Flex 
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          gap="10px"
          marginLeft="20px"
          position="relative"
          bottom="2px"
          height="100%"
          userSelect="none"
        >
          <Text
            id="community-label"
            color="yellow.400"
            fontSize="18px"
            fontWeight="700"
            cursor="pointer"
            filter={submittedAs == "community"
              ? "brightness(100%)"
              : "brightness(40%)"
            }
            transition="filter 200ms ease-in-out"
            onClick={() => setSubmittedAs("community")}
          >
            COMMUNITY
          </Text>
          <Flex
            id="switch-container"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="0 14px"
            height="25px"
            background="gray.600"
            borderRadius="5px"
            onClick={switchSides}
          >
            <Box
              ref={switch_ref as LegacyRef<HTMLDivElement>}
              id="switch"
              width="20px"
              height="20px"
              background="white"
              borderRadius="5px"
              transition="transform 200ms ease-in-out"
            ></Box>
          </Flex>
          <Text
            id="team-label"
            color="blue.400"
            fontSize="18px"
            fontWeight="700"
            cursor="pointer"
            filter={submittedAs == "team"
              ? "brightness(100%)"
              : "brightness(40%)"
            }
            transition="filter 200ms ease-in-out"
            onClick={() => setSubmittedAs("team")}
          >
            TEAM
          </Text>
        </Flex>
      </Flex>

      {/* Fundraising-at-the-moment? */}
      <Flex
        id="fundraising-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="start"
        gap="5px"
        width="100%"
        maxHeight={submittedAs != "team"
          ? "0"
          : "130px"
        }
        overflow="hidden"
        transition="max-height 300ms ease-in-out"
      >
        <Flex 
          flexDirection="row" 
          justifyContent="start"
          alignItems="center"
          gap="10px" 
          marginBottom="5px"
          opacity={submittedAs != "team"
            ? "40%"
            : "100%"
          }
          transition="opacity 200ms ease-in-out"
        >
          <IndentArrowIcon fontSize="16px" />
          <FormLabel
            htmlFor="fundraising"
            margin="0"
            fontSize="16px"
          >
            Is your project fundraising at the moment?
          </FormLabel>
          <Tooltip 
            label="This field can be changed later"
            placement="right"
            hasArrow
          >
            <Box position="relative" bottom="1px">
              <InfoIcon boxSize="15px" />
            </Box>
          </Tooltip>
        </Flex>
        <RadioGroup 
          id="fundraising"
          name="fundraising"
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          gap="10px"
          marginLeft="40px"
          isDisabled={submittedAs != "team"}
          cursor={submittedAs ? "auto" : "not-allowed"}
          value={fundraising}
          onClick={handleClick_Fundraising}
          transition="opacity 300ms ease-in-out"
        >
          <Radio value="yes">
            Yes, we're raising and we'd appreciate  a shout-out! ❤️
          </Radio>
          <Radio value="no">
            No, we're not raising
          </Radio>
          <Radio value="undisclosed">
            Undisclosed
          </Radio>
        </RadioGroup>
      </Flex>
    </Flex>
  );
}

