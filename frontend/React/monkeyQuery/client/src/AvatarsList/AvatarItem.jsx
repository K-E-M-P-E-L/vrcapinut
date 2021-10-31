import { Button, Link as StyledLink } from "rebass/styled-components";
import { Link } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query";
import { removeAvatar } from "../api";
import Loader from "react-loader-spinner"

export const AvatarItem = ({_id, playerName, avatarName, imageURL, userID, avatarID, assetURL, logTime }) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeAvatar)

  const remove = async () => {
    await mutateAsync(_id)
    queryClient.invalidateQueries('avatars')
  }

  return (
        <div key={_id} className="boxEp">
            <img src={imageURL} alt="avatar picture" />
            <h1 className="boxEph1">{playerName}</h1>
            <h1 className="boxEph1">{userID}</h1>
            <Link component={StyledLink} to={`/update-avatar/${_id}`} mr="auto">{avatarName}</Link>
            <h1 className="boxEph1">{avatarID}</h1>
            <h1 className="boxEph1">{assetURL}</h1>
            <h1 className="boxEph1">{logTime}</h1>
            <Button onClick={remove} ml="5">
            { isLoading ? <Loader type="ThreeDots" color="#fff" height={10} /> : "Remove" }
            </Button>
        </div>
  );
};