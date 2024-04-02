jest.mock("@data/ladder", () => ({
  usegetLadderClient: jest.fn(),
  Region: { US: "us", EU: "eu", KR: "kr" },
}));
jest.mock("swr", () => ({
  useSWRConfig: jest.fn().mockReturnValue({ mutate: jest.fn() }),
}));

jest.mock("@features/Leaderboard", () => () => <table />);

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Leaderboard from "@features/Leaderboard/Leaderboard";
import { usegetLadderClient } from "@/data/ladder";
import { useSWRConfig } from "swr";
import MockThemeWrapper from "@/tests/components/MockThemeWrapper";
import { mockLadderData } from "@/__mocks__";

// Correct the typing for the mocked function
const mockUsegetLadderClient = usegetLadderClient as jest.MockedFunction<
  typeof usegetLadderClient
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
  mockUsegetLadderClient.mockReturnValue({
    ...defaultReturnValues,
    data: mockLadderData,
  });
});

describe("Leaderboard Component", () => {
  test("renders error state", () => {
    mockUsegetLadderClient.mockReturnValueOnce({
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
    expect(mutate).toHaveBeenCalledWith(`/api/ladder?region=eu`);
  });
});
