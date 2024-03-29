import { Loading as StyledLoading } from "@styled/Loading";

export const Loading = () => {
  return (
    <StyledLoading data-testid="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoading>
  );
};

export default Loading;
