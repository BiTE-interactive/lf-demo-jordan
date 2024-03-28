import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerProfile from "@features/PlayerProfile/PlayerProfile";
import { playerProfileMock } from "@mocks/index";
import MockThemeWrapper from "../components/MockThemeWrapper";

describe("PlayerProfile", () => {
  it("renders correctly with provided data", () => {
    render(
      <MockThemeWrapper>
        <PlayerProfile playerData={playerProfileMock} />
      </MockThemeWrapper>
    );

    // Verify the player's display name is rendered
    expect(
      screen.getByText(playerProfileMock.summary.displayName)
    ).toBeInTheDocument();

    // Verify the player's portrait is correctly displayed
    expect(
      screen.getByRole("img", { name: /player portrait/i })
    ).toHaveAttribute("src", playerProfileMock.summary.portrait);

    // Check for total achievement points display
    expect(
      screen.getByText(new RegExp(`Total Achievement Points:`, "i"))
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        new RegExp(`${playerProfileMock.summary.totalAchievementPoints}`, "i")
      )
    ).toBeInTheDocument();

    // Verify the display of total career games
    expect(
      screen.getByText(new RegExp(`Total Career Games:`, "i"))
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        new RegExp(`${playerProfileMock.career.totalCareerGames}`, "i")
      )
    ).toBeInTheDocument();

    // Verify current 1v1 league name is displayed
    expect(
      screen.getByText(new RegExp(`Current 1v1 League:`, "i"))
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        new RegExp(playerProfileMock.career.current1v1LeagueName, "i")
      )
    ).toBeInTheDocument();

    // Verify swarm level is displayed
    expect(
      screen.getByText(new RegExp(`Swarm Level:`, "i"))
    ).toBeInTheDocument();

    // Verify swarm level is displayed
    expect(
      screen.getByText(
        new RegExp(`${playerProfileMock.swarmLevels.level}`, "i")
      )
    ).toBeInTheDocument();

    Object.entries(playerProfileMock.campaign.difficultyCompleted).forEach(
      ([campaign, difficulty]) => {
        expect(
          screen.getByText(new RegExp(campaign.replaceAll("-", " "), "i"))
        ).toBeInTheDocument();
        expect(
          screen.getByText(new RegExp(difficulty, "i"))
        ).toBeInTheDocument();
      }
    );
  });
});
