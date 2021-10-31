import { Flex } from "rebass/styled-components";
import { useQuery } from "react-query";
import { getAllAvatars } from "../api";
import { AvatarItem } from "./AvatarItem";
import Loader from "react-loader-spinner";

export const AvatarsList = () => {
  const { data, error, isLoading, isError } = useQuery("avatars", getAllAvatars);

  if (isLoading) {
    return (
      <div>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#cccccc" height={30} />;
        </Flex>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }



  return (
    <div className="monke">
      <div className="mokeflex">
        {data.map(({ avatarName, playerName, imageURL, userID, avatarID, assetURL, releaseStatus, logTime, _id }) => (
          <AvatarItem logTime={logTime} releaseStatus={releaseStatus} assetURL={assetURL} avatarID={avatarID} userID={userID} imageURL={imageURL} avatarName={avatarName} playerName={playerName} key={_id} _id={_id} />
        ))}
      </div>
    </div>
  );
};