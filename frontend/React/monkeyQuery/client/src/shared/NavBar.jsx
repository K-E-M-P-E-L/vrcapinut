import { Flex, Box, Link as StyledLink } from "rebass/styled-components"
import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <Flex bg="black" color="white" justifyContent="center">
      <div>
        <Flex px={2} width="100%" alignItems="center">
          <Link component={StyledLink} variant="nav" to="/">
            React Query CRUD
          </Link>
          <Box mx="auto" />
          <Link component={StyledLink} variant="nav" to="/create-avatar">
            + Add new avatar
          </Link>
        </Flex>
      </div>
    </Flex>
  );
};