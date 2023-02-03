import { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { Transition } from "react-transition-group";

const duration = 300;

const default_style = {
  transition: `opacity ${duration}ms ease-in-out,
               transform ${duration}ms ease-in-out`,
  opacity: 0,
};

const transition_styles: any = {
  entering: { 
    opacity: 1,
    transform: "scaleX(1.0)",
  },
  entered: { 
    opacity: 1,
    transform: "scaleX(1.0)",
  },
  exiting: { 
    opacity: 0,
    transform: "scaleX(0)",
  },
  exited: { 
    opacity: 0,
    transform: "scaleX(0)",
  },
};

export default function ScaleFade({ children, motion }: any) {
  const node_ref = useRef(null);

  return (
    <Flex 
      flexDir="row"
      justify="center"
      align="center"
      width="100%"
    >
      <Transition nodeRef={node_ref} in={motion} timeout={500}>
        {(state: string) => (
          <div ref={node_ref} style={{
            ...default_style, 
            ...transition_styles[state]
          }}>
            {children}
          </div>
        )}
      </Transition>
    </Flex>
  );
}

