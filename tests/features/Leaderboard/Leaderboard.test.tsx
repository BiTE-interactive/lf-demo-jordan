jest.mock("@data/ladder", () => ({
  useGetGmLadderClient: jest.fn(),
  Region: { US: "us", EU: "eu", KR: "kr" },
}));
jest.mock("swr", () => ({
  useSWRConfig: jest.fn().mockReturnValue({ mutate: jest.fn() }),
}));

jest.mock("@features/Leaderboard", () => () => <table />);

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Leaderboard from "@features/Leaderboard/Leaderboard";
import { useGetGmLadderClient } from "@/data/ladder";
import { useSWRConfig } from "swr";
import MockThemeWrapper from "@/tests/components/MockThemeWrapper";
import { mockLadderData } from "@/__mocks__";

// Correct the typing for the mocked function
const mockUseGetGmLadderClient = useGetGmLadderClient as jest.MockedFunction<
  typeof useGetGmLadderClient
>;

const defaultReturnValues = {
  isLoading: false,
  isValidating: false,
  error: null,
  data: mockLadderData,
  mutate: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
  mockUseGetGmLadderClient.mockReturnValue({
    ...defaultReturnValues,
    data: mockLadderData,
  });
});

describe("Leaderboard Component", () => {
  test("initially renders with loading state", () => {
    mockUseGetGmLadderClient.mockReturnValueOnce({
      ...defaultReturnValues,
      isLoading: true,
    });
    render(
      <MockThemeWrapper>
        <Leaderboard />
      </MockThemeWrapper>
    );
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test("renders error state", () => {
    mockUseGetGmLadderClient.mockReturnValueOnce({
      ...defaultReturnValues,
      error: new Error("Error fetching data"),
    });
    render(
      <MockThemeWrapper>
        <Leaderboard />
      </MockThemeWrapper>
    );
    expect(screen.getByText(/error loading data!/i)).toBeInTheDocument();
  });

  test("allows region selection to change the leaderboard data", () => {
    const { mutate } = useSWRConfig();
    render(
      <MockThemeWrapper>
        <Leaderboard />
      </MockThemeWrapper>
    );
    fireEvent.change(screen.getByRole("regionSelect"), {
      target: { value: "eu" },
    });
    expect(mutate).toHaveBeenCalledWith(`/api/gm-ladder?region=eu`);
  });
});
