import { useRef } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const transition = {
  transition: `
               transform ${duration}ms ease-in,
               opacity ${duration}ms linear`,
};

const shift_up: any = {
  entered:  { transform: "translateY(0px)",   opacity: 1.0 },
  entering: { transform: "translateY(0px)",   opacity: 1.0 },
  exiting:  { transform: "translateY(-80px)", opacity: 0.0 },
  exited:   { transform: "translateY(-80px)", opacity: 0.0 },
};

const shift_down: any = {
  entered:  { transform: "translateY(0px)",   opacity: 1.0 },
  entering: { transform: "translateY(0px)",   opacity: 1.0 },
  exiting:  { transform: "translateY(80px)",  opacity: 0.0 },
  exited:   { transform: "translateY(80px)",  opacity: 0.0 },
};


export default function CarouselTransition({ children, direction, _in }: any) {
  const node_ref = useRef(null);

  return (
    <Transition 
      nodeRef={node_ref} 
      timeout={duration}
      in={_in}
    >
      {(state: string) => (direction == "up"
        ? <div 
            ref={node_ref} 
            style={{
              ...transition, 
              ...shift_up[state]
            }}
          >
            {children}
          </div>
        : <div 
            ref={node_ref} 
            style={{
              ...transition, 
              ...shift_down[state]
            }}
          >
            {children}
          </div>
      )}
    </Transition>
  );
}

