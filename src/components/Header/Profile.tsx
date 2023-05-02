// Components
import {
  Button,
  Flex,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import StartButton from "../Header/StartButton";

// Hooks
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

//useContext for user
import { UserData } from "../../context/context";
import { useContext } from "react";
// Types
import type { ReactElement } from "react";
import axios, { AxiosRequestConfig } from "axios";

export default function Profile() {
  // Generic profile picture: thecoreloop icon
  const thecoreloop_icon: string = "https://i.imgur.com/2px36wp.png";
  //usercontext data and update
  const { currUser, setCurrUser } = useContext(UserData);
  // State variables
  const { data: session, status } = useSession();
  const [content, setContent] = useState<ReactElement>(<StartButton />);
  async function getOrCreateUser() {
    const user = await axios.get("api/users");
    return user.data;
  }

  /* Example sesison:

  session:  {
    "user": {
      "name": "Andrew Choi",
      "email": "dongandrewchoi@gmail.com",
      "image": "https://lh3.googleusercontent.com/a/AGNmyxYVOrTBZ72bavrqsPfnRLmMS0jCeFaKe2HDmQW9=s96-c",
      "provider": "google",
      "providerAccountId": "118114943156957534067"
    },
    "expires": "2023-06-01T00:02:52.391Z"
}

  Example User data from DB

  currUser : {
  "Success": "user has been successfully logged in",
  "userFromDB": {
    "createdAt": "2023-04-30T00:41:50.793Z",
    "updatedAt": "2023-04-30T00:41:50.793Z",
    "handle": "dongandrewchoi@gmail.com",
    "username": "Andrew Choi",
    "profilePicture": "https://lh3.googleusercontent.com/a/AGNmyxYVOrTBZ72bavrqsPfnRLmMS0jCeFaKe2HDmQW9=s96-c",
    "admins": []
  }

  or currUser: undefined
}
  */

  useEffect(() => {
    async function checkForUserInSession() {
      if (!session) {
        setCurrUser(undefined);
        setContent(<StartButton />);
      } else if (session) {
        console.log("SESSION:::", session);
        const user = await getOrCreateUser();
        if (user) {
          setCurrUser(user);
        } else {
          ("prompt user with signup and show desclaimer");
        }
        setContent(
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button
                margin="0"
                padding="0"
                transition="all 200ms ease-in-out"
                draggable={false}
                _hover={{ filter: "brightness(75%)" }}
                _active={{}}
              >
                <Image
                  // src={session?.user?.image!}
                  src={thecoreloop_icon}
                  objectFit="cover"
                  width="60px"
                  height="60px"
                  background="gray.700"
                  borderRadius="full"
                  boxShadow="3px 3px 3px black"
                  draggable={false}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              display="flex"
              flexDirection="column"
              justifyContent="start"
              alignItems="start"
              width="min-content"
              background="#1A1B23"
              border="none"
              borderRadius="5px"
            >
              <Button variant="header_popover" borderRadius="5px 5px 0 0">
                <Text>PROFILE</Text>
              </Button>
              <Button
                variant="header_popover"
                borderRadius="0 0 5px 5px"
                onClick={() => signOut()}
              >
                <Text>LOG OUT</Text>
              </Button>
            </PopoverContent>
          </Popover>
        );
      }
    }
    checkForUserInSession();
  }, [session]);

  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      marginLeft="auto"
      height="100%"
    >
      {content}
    </Flex>
  );
}
