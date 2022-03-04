import React from "react";
import styled from "styled-components";
import Postthumnails from "../components/Postthumnails";
import { Autocomplete } from "../components/UI_components/Autocomplete";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

const MainPage = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  text-align: center;
  height: 96vh;
  width: auto;
  flex-direction: column;
`;

const Header = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  flex: 1 0 auto;

  > div {
    border: 1px solid red;
    /* padding: 10px; */

    flex: 1 0 auto;
  }
`;

const SerchArea = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  align-items: center;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  > #select_bar {
    border: 1px solid red;
    /* padding: 10px; */

    flex: 2 0 auto;
    margin-left: 40px;
  }
  > #create_post {
    border: 1px solid red;
    /* padding: 10px; */

    flex: 1 0 auto;
  }
`;

const Body = styled.div`
  /* border: 1px solid red;
  padding: 10px; */
  display: flex;
  flex-wrap: wrap;
  flex: 8 0 auto;
`;

const Footer = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  flex: 0 0 auto;
`;

//----------------------------------------------------------------

const Menu = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  flex: 4 0 auto;
`;
const Nick = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  flex: 3 0 auto;
`;
const MenuButton = styled.div`
  border: 1px solid red;
  /* padding: 10px; */

  display: flex;
  flex: 1 0 auto;
`;
const MenuButtonInner = styled.button`
  border: 1px solid red;
  /* padding: 10px; */

  margin: 10px;
  margin-top: 0px;

  flex: 1 0 auto;
  height: 40px;
`;

<<<<<<< HEAD
export default function Main({ items, setItems }) {
  console.log(items);
=======
export default function Main({ items, users }) {
  const onClickHandle = () => {
    history.push("/mypage");
  };
  const history = useHistory();
>>>>>>> fc4e8fc34e5bb805f55c9ea618b63a57b2b7cd5c
  return (
    <MainPage>
      <Header>
        <div className="logo">Flower(로고)</div>
        <Menu>
          <Nick>{users.nickname}님 안녕하세요.</Nick>
          <MenuButton>
            <MenuButtonInner onClick={onClickHandle}>
              마이페이지
            </MenuButtonInner>
            <MenuButtonInner>로그아웃</MenuButtonInner>
          </MenuButton>
        </Menu>
      </Header>

      <SerchArea>
        <div id="select_bar">
          <Autocomplete items={items} setItems={setItems}></Autocomplete>
        </div>
        <div id="create_post">
          <button>글쓰기</button>
        </div>
      </SerchArea>
      <Body>
        {items.map((item, idx) => (
          <Postthumnails item={item} key={idx} />
        ))}
      </Body>
      <Footer></Footer>
    </MainPage>
  );
}
