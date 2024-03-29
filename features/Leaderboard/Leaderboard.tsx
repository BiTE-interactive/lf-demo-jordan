"use client";

import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import { Center, Col, Container, Flex } from "@styled/index";
import Select from "@components/Select/Select";
import { H2 } from "@components/styled/Headers/H2";
import { LadderData, Region, useGetGmLadderClient } from "@data/ladder";
import LeaderboardTable from "@features/Leaderboard/LeaderboardTable";
import { getRegion } from "@/routes";

export interface LadderDataProps {
  data: LadderData;
}

export const Leaderboard = () => {
  const regionFromQuery = getRegion();
  const [region, setRegion] = useState(regionFromQuery || Region.US);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    mutate(`/api/gm-ladder?region=${region}`);
  }, [mutate, region]);

  const { error, isLoading, data } = useGetGmLadderClient(region);

  const handleRegionChange = (e: any) => {
    const region = e.target.value as Region;
    setRegion(region);
    window.history.pushState(
      {},
      "",
      window.location.href.split("?")[0] + `?region=${region}`
    );
  };

  const regionOptions = [
    { value: Region.US, label: "US" },
    { value: Region.EU, label: "EU" },
    { value: Region.KR, label: "KR" },
  ];

  return (
    <div style={{ overflow: "hidden", flexGrow: 1, paddingBottom: "0.5rem" }}>
      <Center>
        <Container>
          <Col>
            <Flex $align="center" $justify="space-between" $p={4} $flex={1}>
              <H2>GM Leaderboard</H2>
              <Select
                onChange={handleRegionChange}
                options={regionOptions}
                value={region}
              />
            </Flex>
            <Col>
              <LeaderboardTable
                loading={isLoading}
                error={error}
                teams={data?.ladderTeams}
              />
            </Col>
          </Col>
        </Container>
      </Center>
    </div>
  );
};

export default Leaderboard;
