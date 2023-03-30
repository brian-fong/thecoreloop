// Components
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
import { MdSubdirectoryArrowRight as IndentArrowIcon } from "react-icons/md";

// Hooks
import { useEffect, useRef } from "react";

export default function CommunityTeamForm({
  fundraising, setFundraising,
  isTeam, setIsTeam,
}: any) {

  // Refs: Fundraising + Partnerships
  const team_switch_ref = useRef<any>();

  async function handleClick_Team_Switch() {
    // Toggle submittedByTeam state variable
    setIsTeam((value: boolean) => !value);
  }

  function handleClick_Team_SwitchLabel(event: any) {
    // Enable functionality to click label to toggle team
    const value: string = event.currentTarget.innerHTML;
    if (value == "COMMUNITY" && isTeam) {
      // Case: Switching from Team ==> Community
      team_switch_ref.current.click();
    } else if (value == "TEAM" && !isTeam) {
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
    // Switch does not save state between mounting/unmounting so we
    // need to "manually" click it to set it to the right state
    if (isTeam) team_switch_ref.current.click();
  }, []);

  useEffect(() => {
    if (!isTeam) {
      // If user is not Team, then reset fundraising to undefined
      setFundraising("");
    } else if (isTeam && !fundraising) {
      // Default to undisclosed
      setFundraising("undisclosed");
    }

    const community_label: HTMLElement = document.getElementById(
      "community-label"
    )!;
    const team_label: HTMLElement = document.getElementById(
      "team-label"
    )!;

    if (!isTeam) {
      community_label.style.filter = "brightness(1.0)";
      team_label.style.filter = "brightness(0.5)";
    } else {
      community_label.style.filter = "brightness(0.5)";
      team_label.style.filter = "brightness(1.0)";
    }
  }, [isTeam]);

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
            value={isTeam.toString()}
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
          filter={isTeam
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
              isDisabled={!isTeam}
              cursor={isTeam ? "auto" : "not-allowed"}
              value={fundraising}
              onClick={handleClick_fundraising}
              transition="all 300ms ease-in-out"
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
      </Flex>
    </Flex>
  );
}

