import { AvatarForm, Container } from "../shared";
import { useQuery, useMutation } from "react-query";
import { Box, Heading, Flex } from "rebass/styled-components";
import { getAvatar, updateAvatar } from "../api";
import { useParams, useHistory } from "react-router-dom"
import Loader from "react-loader-spinner"

export const UpdateAvatar = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data, error, isLoading, isError } = useQuery(["Avatar", { id }], getAvatar);
  const { mutateAsync, isLoading: isMutating } = useMutation(updateAvatar)

  const onFormSubmit = async (data) => {
    await mutateAsync({...data, id})
    history.push("/")
  }

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
    return (
      <div>
        <Flex py="5" justifyContent="center">
          Error: {error.message}
        </Flex>
      </div>
    );
  }

  return (
    <div>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Update Avatar</Heading>
        <AvatarForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
      </Box>
    </div>
  );
};