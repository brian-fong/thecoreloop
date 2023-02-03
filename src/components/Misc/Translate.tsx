import { useRef } from "react";
import { Transition } from "react-transition-group";

const duration = 100;

const default_style = {
  transform: "translate(0px, 0px)",
  transition: `transform ${duration}ms ease-in-out`,
};

const transition_styles: any = {
  entered: { 
    transform: "translate(0px, 0px)",
  },
  entering: { 
    transform: "translate(0px, 0px)",
  },
  exiting: { 
    transform: "translate(3px, 3px)",
  },
  exited: { 
    transform: "translate(3px, 3px)",
  },
};

export default function Translate({ children, mounting }: any) {
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


