import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.section`
  padding: 0 ${(props) => props.theme.layout.outerWrapperMobile};
  width: 100%;

  @media ${(props) => props.theme.device.tablet} {
    padding: 0 ${(props) => props.theme.layout.outerWrapper};
  }

  &.pV {
    padding-top: ${(props) => props.theme.layout.space[300]};
    padding-bottom: ${(props) => props.theme.layout.space[300]};
  }

  &.pT {
    padding-top: ${(props) => props.theme.layout.space[300]};
  }

  &.pB {
    padding-bottom: ${(props) => props.theme.layout.space[300]};
  }
`;
