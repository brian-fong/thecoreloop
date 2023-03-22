import { useRef } from "react";
import { Transition } from "react-transition-group";

const duration = 100;

const default_style = {
  transform: "translate(0px, 0px)",
  opacity: "1.0",
  transition: `all ${duration}ms ease-in-out`,
};

const transition_styles: any = {
  entered: { 
    transform: "translate(0px, 0px)",
    opacity: "1.0",
  },
  entering: { 
    transform: "translate(0px, 0px)",
    opacity: "1.0",
  },
  exiting: { 
    transform: "translate(3px, 3px)",
    opacity: "0.8",
  },
  exited: { 
    transform: "translate(3px, 3px)",
    opacity: "0.8",
  },
};

export default function ToggleBtn({ children, mounting }: any) {
  const node_ref = useRef(null);

  return (
    <Transition nodeRef={node_ref} in={mounting} timeout={duration}>
      {(state: string) => (
        <div ref={node_ref} style={{
          ...default_style, 
          ...transition_styles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  );
}


