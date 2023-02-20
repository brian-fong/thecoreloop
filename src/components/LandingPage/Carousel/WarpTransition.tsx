import { useRef } from "react";
import { Transition } from "react-transition-group";

const duration = 100;

const styles_default = {
  transform: "translate(0px, 0px)",
  opacity: "1.0",
  transition: `opacity ${duration}ms linear`,
};

const styles_transition: any = {
  entered:  { scaleY: "1.0", opacity: "1.0" },
  entering: { scaleY: "1.0", opacity: "1.0" },
  exiting:  { scaleY: "0.0", opacity: "0.5" },
  exited:   { scaleY: "0.0", opacity: "0.5" },
};

export default function WarpTransition({ children, _in }: any) {
  const node_ref = useRef(null);

  return (
    <Transition 
      nodeRef={node_ref} 
      timeout={duration}
      in={_in}
    >
      {(state: string) => (
        <div 
          ref={node_ref} 
          style={{
            ...styles_default, 
            ...styles_transition[state]
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}


