import styled, {css, ThemeProvider } from 'styled-components';

const theme = {
  primary: "blue",
  secondary: "red",
}

// 기본적인 사용방법은 아래와 같이 원하는 const COMPONENT_NAME = styled.HTML_TAG_NAME`css`; 라고 보면된다.
// COMPONENT_NAME에는 이후에 사용할 컴포넌트의 이름이 들어가고
// HTML_TAG_NAME에는 해당 컴포넌트가 가진 html tag 속성이 들어간다 (ex button, input, h1, h2, div, span)
// 마지막으로 `` 백틱 태그안에 해당 컴포넌트가 가진 css 속성을 넣어주면 된다.

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  & input {
    width: auto;
  }

  @media (max-width: 720px) {
    & input {
      width: 100%;
    }
  }

`;

const HeadingComponent = styled.h1`
  font-family: sans-serif;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  margin: 10px;
`;

const Button = styled.button`
  color: ${(props) => (props.isValid ? "white" : "red")};
  background: ${(props) => (props.isValid ? "green" : "yellow")};
  padding: 5px;

  ${(props) =>
    props.isValid 
    ? css`
      color: white;
      background: green;
    `
    : css`
      color: red;
      background: yellow;
    `
  }

  &:hover {
    color: red;
    transition: .2s all;
  }
`;

// 그리고 나서 원하는 위치에 해당 컴포넌트를 덮어 씌어주면 된다.

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HeadingComponent>Styled Components</HeadingComponent>
        <Input placeholder="username" className={true ? 'valid' : 'invalid'}/>
        <Input placeholder="password" />
        <Button isValid={true}>Login</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;