import React from "react";
import styled from "styled-components";

/**
 * Local Components
 */
import { Wrapper } from "../components/globals/wrappers";
import { changeTheme } from "../functions/util";
import Box from "../components/motion/motion-box";

/**
 * FourOhFour Component
 *
 * @param {Object} props
 * @param {Object} props.path
 */
export default function FourOhFour({ path }) {
  React.useEffect(() => {
    changeTheme("#000000", "red");
    return () => {
      changeTheme(null, null);
    };
  }, []);

  return (
    <>
      <Wrapper404>
        <Box>
          <h1 className="sequel">404</h1>
          <h2>Nothing found at {path}</h2>
        </Box>
      </Wrapper404>
    </>
  );
}

const Wrapper404 = styled(Wrapper)`
  height: 100vh;
  min-height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
