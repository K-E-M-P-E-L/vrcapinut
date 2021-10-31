import { AvatarForm } from "../shared";
import { Box, Heading } from "rebass/styled-components";
import { createAvatar } from "../api"
import { useMutation } from "react-query"
import { useHistory } from "react-router-dom"

export const CreateAvatar = () => {
  const history = useHistory()
  const { mutateAsync, isLoading } = useMutation(createAvatar)

  const onFormSubmit = async (data) => {
    await mutateAsync({...data})
    history.push("/")
  }
  return (
    <div>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Add New Avatar</Heading>
        <AvatarForm onFormSubmit={onFormSubmit} isLoading={isLoading}/>
      </Box>
    </div>
  );
};