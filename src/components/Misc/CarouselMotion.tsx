import uuid from "react-uuid";
import { useRef } from "react";
import { Transition } from "react-transition-group";

const duration = 400;

const default_style = {
  transform: "translate(0px, 0px)",
  opacity: "1.0",
  transition: `transform ${duration}ms ease-in-out`,
};

const styles_shift_left: any = {
  entered:  { transform: "translate(0px, 0px)" },
  entering: { transform: "translate(0px, 0px)" },
  exiting:  { transform: "translate(-430px, 0px)" },
  exited:   { transform: "translate(-430px, 0px)" },
};

const styles_shift_right: any = {
  entered:  { transform: "translate(0px, 0px)" },
  entering: { transform: "translate(0px, 0px)" },
  exiting:  { transform: "translate(430px, 0px)" },
  exited:   { transform: "translate(430px, 0px)" },
};

const styles_fade_left: any = {
  entered: { transform: "translate(0px, 0px)", opacity: "1.0" },
  entering: { transform: "translate(0px, 0px)", opacity: "1.0" },
  exiting: { transform: "translate(-150px, 0px)", opacity: "0.0" },
  exited: { transform: "translate(-150px, 0px)", opacity: "0.0" },
};

const styles_fade_right: any = {
  entered: { transform: "translate(0px, 0px)", opacity: "1.0" },
  entering: { transform: "translate(0px, 0px)", opacity: "1.0" },
  exiting: { transform: "translate(150px, 0px)", opacity: "0.0" },
  exited: { transform: "translate(150px, 0px)", opacity: "0.0" },
};

export default function CarouselMotion({ 
  children, 
  mode,       // Fade or Shift
  direction,  // Left or Right
  mounting,   // boolean (true = enter, false = exit)
}: any) {
  const node_ref = useRef(null);

  if (mode == "shift") {
    return (
      <Transition 
        className="shift"
        nodeRef={node_ref} 
        timeout={duration}
        in={mounting}
      >
        {(state: string) => (direction == "left"
          ? <div 
              ref={node_ref} 
              style={{
                ...default_style, 
                ...styles_shift_left[state]
              }}
            >
              {children}
            </div>
          : <div 
              ref={node_ref} 
              style={{
                ...default_style, 
                ...styles_shift_right[state]
              }}
            >
              {children}
            </div>
        )}
      </Transition>
    );
  } else {
    return (
      <Transition 
        className="fade"
        nodeRef={node_ref} 
        timeout={duration}
        in={mounting}
      >
        {(state: string) => (direction == "left"
          ? <div 
              ref={node_ref} 
              style={{
                ...default_style, 
                ...styles_fade_left[state]
              }}
            >
              {children}
            </div>
          : <div 
              ref={node_ref} 
              style={{
                ...default_style, 
                ...styles_fade_right[state]
              }}
            >
              {children}
            </div>
        )}
      </Transition>
    );
  }
}



