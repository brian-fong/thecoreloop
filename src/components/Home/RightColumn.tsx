import {
  Flex,
  Heading,
} from "@chakra-ui/react";
import CurationCard from "./CurationCard";

export default function RightColumn() {
  return (
    <Flex
      id="right-column"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      margin="1.5rem 0"
      padding="2rem"
      minWidth="500px"
      minHeight="100vh"
      borderLeft="1px solid white"
    >
      <Flex
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        width="100%"
        height="36px"
      >
        <Heading
          margin="0"
          padding="0"
          width="100%"
          fontSize="1rem"
          fontFamily="JetBrains Mono"
          whiteSpace="nowrap"
        >
          Latest Curation for You
        </Heading>
      </Flex>
      <Flex
        id="curation-content-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap="2rem"
        padding="1rem"
      >
        <CurationCard
          description="OhBabyGames raised $6mil in seed round led by eGirl Capital & Synergis Capital to redefine web3 Gaming"
          image="https://ohbabygames.com/assets/splash_art-bb6641ed.png"
        />
        <CurationCard
          description="Roblox to hold NFL Super Bowl concert starring Saweetie | VentureBeat"
          image="https://venturebeat.com/wp-content/uploads/2023/02/Screenshot_6-NEW.png?fit=750%2C422&strip=all"
        />
        <CurationCard
          description="Fractal takes NFT platform to Polygon and raises funding | VentureBeat"
          image="https://venturebeat.com/wp-content/uploads/2023/01/fractal-5.jpg?fit=750%2C422&strip=all"
        />
        <CurationCard
          description="TREASURE DAO — TIP-23, New BridgeWorld Harvesters & Airdrop"
          image="https://pbs.twimg.com/media/FnDkOEbaAAE-pWq?format=jpg&name=4096x4096"
        />
        <CurationCard
          description="Gaming grows to 48% of all blockchain activity | DappRadar | VentureBeat"
          image="https://venturebeat.com/wp-content/uploads/2023/02/dapp-4.jpg?fit=750%2C454&strip=all"
        />
      </Flex>
    </Flex>
  );
}

