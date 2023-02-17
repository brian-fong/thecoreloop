import { useRef } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const styles_default = {
  transform: "translate(0px, 0px)",
  opacity: "1.0",
  transition: `all ${duration}ms ease-in-out,
               opacity ${duration}ms linear`,
};

const styles_transition: any = {
  entered:  { transform: "translateY(0px)",   opacity: 1.0 },
  entering: { transform: "translateY(0px)",   opacity: 1.0 },
  exiting:  { transform: "translateY(100px)", opacity: 0.0 },
  exited:   { transform: "translateY(100px)", opacity: 0.0 },
};

export default function CarouselTransition_2({ children, _in }: any) {
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

