// Components
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";

// Hooks
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Types
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function SubmitButton({ onOpen_SignIn }: any) {

  const router: AppRouterInstance= useRouter();

  // State variables
  const { status } = useSession();

  function handleSubmit(action: string) {
    if (status.toLowerCase() != "authenticated") {
      onOpen_SignIn();
    } else {
      if (action == "submit_project") {
        router.push("/projects/submit/");
      }
    }
  }

  return (
    <Popover offset={[0, 0]}>
      <PopoverTrigger>
        <Button variant="header_base">
          SUBMIT
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        gap="10px"
        width="min-content"
        color="white"
        background="#1A1B23"
        border="none"
        borderRadius="5px"
        _focusVisible={{
          outline: "none",
          border: "none"
        }}
        zIndex={10}
      >
        <Button
          variant="header_popover"
          borderRadius="5px 5px 0 0"
          onClick={() => handleSubmit("submit_project")}
        >
          🤖 PROJECT
        </Button>
        <Button
          variant="header_popover"
          borderRadius="0"
          isDisabled={true}
        >
          📅 EVENT
        </Button>
        <Button
          variant="header_popover"
          borderRadius="0 0 5px 5px"
          isDisabled={true}
        >
          🗨️ DISCUSSION
        </Button>
      </PopoverContent>
    </Popover>
  );
}

