import { useEffect, useState } from "react";
import { Col, Flex } from "@styled/index";
import { Select } from "@components/Select";
import { LadderData, Region, useGetGmLadderClient } from "@/data/ladder";
import { useSWRConfig } from "swr";
import { LeaderboardTable } from "./LeaderboardTable";
import { H2 } from "../../components/styled/Headers/H2";

export interface LadderDataProps {
  data: LadderData;
}

export const Leaderboard = () => {
  const [region, setRegion] = useState(Region.US);
  const { mutate } = useSWRConfig();

  useEffect(() => {
    mutate(`/api/gm-ladder?region=${region}`);
  }, [mutate, region]);

  const { error, isLoading, data } = useGetGmLadderClient(region);

  const regionOptions = [
    { value: Region.US, label: "US" },
    { value: Region.EU, label: "EU" },
    { value: Region.KR, label: "KR" },
  ];

  return (
    <div style={{ overflow: "hidden", flexGrow: 1 }}>
      <Col>
        <Flex align="center" justify="space-between" p={4} flex={1}>
          <H2>GM Leaderboard</H2>
          <Select
            onChange={(e) => setRegion(e.target.value as Region)}
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
    </div>
  );
};

export default Leaderboard;
