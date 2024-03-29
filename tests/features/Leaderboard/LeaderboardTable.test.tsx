import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockThemeWrapper from "../../components/MockThemeWrapper";
import { LeaderboardTable } from "@/features/Leaderboard/LeaderboardTable";
import { mockLadderData, push } from "@/__mocks__";

describe("LeaderboardTable", () => {
  beforeEach(() => {
    push.mockClear();
  });

  it("displays a loading state", () => {
    render(
      <MockThemeWrapper>
        <LeaderboardTable loading={true} error={undefined} />
      </MockThemeWrapper>
    );
    expect(screen.getByTestId(/loading/i)).toBeInTheDocument();
  });

  it("displays an error state", () => {
    render(
      <MockThemeWrapper>
        <LeaderboardTable loading={false} error={true} />
      </MockThemeWrapper>
    );
    expect(screen.getByText(/error loading data!/i)).toBeInTheDocument();
  });

  it("renders team data correctly", () => {
    render(
      <MockThemeWrapper>
        <LeaderboardTable
          loading={false}
          error={undefined}
          teams={mockLadderData.ladderTeams}
        />
      </MockThemeWrapper>
    );
    expect(screen.getByText("Player A")).toBeInTheDocument();
    expect(screen.getByText(/1/)).toBeInTheDocument(); // Previous Rank
    expect(screen.getByText(/7000/)).toBeInTheDocument(); // MMR
    expect(screen.getByText(/2/)).toBeInTheDocument(); // Wins
    expect(screen.getByText(/3/)).toBeInTheDocument(); // Losses
  });

  it("navigates to player profile on row click", () => {
    render(
      <MockThemeWrapper>
        <LeaderboardTable
          loading={false}
          error={undefined}
          teams={mockLadderData.ladderTeams}
        />
      </MockThemeWrapper>
    );
    fireEvent.click(screen.getByText("Player A"));
    expect(push).toHaveBeenCalledWith(expect.stringContaining("/player/1"));
  });
});
