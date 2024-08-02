import { UserProvider } from "./user-provider";

export const RootProvider = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}): JSX.Element => {
  return <UserProvider>{children}</UserProvider>;
};
