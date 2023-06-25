import { Box, Flex, Image, Text } from "@chakra-ui/react";
import MousePointer from "../assets/custom-mouse.png";
import React from "react";

function CustomMousePointer(props: any) {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"}>
        <Flex
          color={"white"}
          align={"center"}
          justify={"space-between"}
          flexDir={"row"}
          m={2}
        >
          <Image src={MousePointer} alt="custom-mouse" />
          <Text fontWeight={"bold"}>Name goes Here from props</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default CustomMousePointer;
