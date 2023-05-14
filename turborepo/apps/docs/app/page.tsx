import { Main, Button, ButtonType, Header } from "ui";

export default function Page() {
  return (
    <Main>
      <Header text="Docs" />
      <Button buttonType={ButtonType.Info} />
    </Main>
  );
}
