import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("User");
    navigate("/");
  };

  return (
    <Box bg={"gray.100"} px={4} h={'80px'}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Creative-hub-assignment</Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>
                    {JSON.parse(`${localStorage.getItem("User")}`).username}
                  </p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
