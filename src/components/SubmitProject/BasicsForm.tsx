import {
  Box,
  Flex,
  FormLabel,
  Heading,
  Radio,
  RadioGroup,
  Switch,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon as InfoIcon } from "@chakra-ui/icons";
import {
  MdSubdirectoryArrowRight as IndentArrowIcon,
} from "react-icons/md";
import { useEffect, useRef } from "react";

export default function BasicsForm({
  fundraising,
  setFundraising,
  submittedByTeam,
  setSubmittedByTeam,
}: any) {

  // Refs: Fundraising + Partnerships
  const team_switch_ref = useRef<any>();

  async function handleClick_Team_Switch() {
    // Toggle submittedByTeam state variable
    setSubmittedByTeam((value: boolean) => !value);
  }

  function handleClick_Team_SwitchLabel(event: any) {
    // Enable functionality to click label to toggle team
    const value: string = event.currentTarget.innerHTML;
    if (value == "COMMUNITY" && submittedByTeam) {
      // Case: Switching from Team ==> Community
      team_switch_ref.current.click();
    } else if (value == "TEAM" && !submittedByTeam) {
      // Case: Switching from Community ==> Team
      team_switch_ref.current.click();
    }
  }

  function handleClick_fundraising(event: any) {
    // Update fundraising state variable
    const radio_group = event.currentTarget;
    for (const { firstChild: choice } of radio_group.children) {
      if (choice.checked) setFundraising(choice.value);
    }
  }

  useEffect(() => {
    if (!submittedByTeam) {
      // If user is not Team, then reset fundraising to undefined
      setFundraising("");
    } else {
      // Default to undisclosed
      setFundraising("undisclosed");
    }

    const community_label: HTMLElement = document.getElementById(
      "community-label"
    )!;
    const team_label: HTMLElement = document.getElementById(
      "team-label"
    )!;

    if (!submittedByTeam) {
      community_label.style.filter = "brightness(1.0)";
      team_label.style.filter = "brightness(0.5)";
    } else {
      community_label.style.filter = "brightness(0.5)";
      team_label.style.filter = "brightness(1.0)";
    }
  }, [submittedByTeam]);

  return (
    <Flex
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      width="100%"
    >
      <Heading
        marginBottom="10px"
        color="white"
        fontSize="24px"
        fontWeight="700"
      >
        Let's start with some basics!
      </Heading>

      {/* Part-of-the-team? */}
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
          1. I am submitting this project as part of the
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
            transition="all 200ms ease-in-out"
            onClick={handleClick_Team_SwitchLabel}
          >
            COMMUNITY
          </Text>
          <Switch
            id="submittedByTeam"
            name="submittedByTeam"
            ref={team_switch_ref}
            variant="CommunityTeam"
            size="md"
            cursor="pointer"
            value={submittedByTeam.toString()}
            onChange={handleClick_Team_Switch}
          />
          <Text
            id="team-label"
            color="blue.400"
            fontSize="18px"
            fontWeight="700"
            cursor="pointer"
            transition="all 200ms ease-in-out"
            onClick={handleClick_Team_SwitchLabel}
          >
            TEAM
          </Text>
        </Flex>
      </Flex>

      {/* Fundraising-at-the-moment? */}
      <Flex flexDirection="column">
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          gap="10px"
          width="100%"
          filter={submittedByTeam
            ? "brightness(1.0)"
            : "brightness(0.4)"
          }
          transition="filter 300ms ease-in-out"
        >
          <Flex flexDirection="column" marginLeft="5px">
            <Flex 
              flexDirection="row" 
              justifyContent="start"
              alignItems="center"
              gap="10px" 
              marginBottom="5px"
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
              transition="all 300ms ease-in-out"
              isDisabled={!submittedByTeam}
              value={fundraising}
              onClick={handleClick_fundraising}
            >
              <Radio value="yes" maxWidth="500px">
                Yes, we're raising and we'd appreciate thecoreloop to give us a shout-out! ❤️
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
      </Flex>
    </Flex>
  );
}

